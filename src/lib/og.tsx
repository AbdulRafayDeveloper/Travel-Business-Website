import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/graphics/LogoMark";
import { siteConfig } from "@/config/site";
import { siteImages, type SiteImageKey } from "@/data/images";

export const OG_SIZE = { width: 1200, height: 630 } as const;

interface OgOptions {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  /** Key into siteImages; the photo is embedded on the right half of the card. */
  photo?: SiteImageKey;
}

const MAX_TITLE = 90;
const MAX_SUBTITLE = 140;
const MAX_EYEBROW = 60;

const fontCache = new Map<string, Promise<ArrayBuffer | null>>();

/**
 * Fetch a Google Font as TrueType for Satori. Sending no User-Agent makes Google return TTF
 * rather than WOFF/WOFF2. Falls back to null (Satori's default font) if the network is unavailable.
 */
function loadFont(family: string, weight: number, italic = false): Promise<ArrayBuffer | null> {
  const key = `${family}-${weight}-${italic}`;
  const cached = fontCache.get(key);
  if (cached) return cached;
  const promise = (async () => {
    try {
      const axis = italic ? `ital,wght@1,${weight}` : `wght@${weight}`;
      const css = await fetch(`https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${axis}&display=swap`, {
        headers: { "User-Agent": "" },
      }).then((r) => r.text());
      const url = css.match(/src: url\(([^)]+)\) format\('(?:truetype|opentype)'\)/)?.[1];
      if (!url) return null;
      return await fetch(url).then((r) => r.arrayBuffer());
    } catch {
      return null;
    }
  })();
  fontCache.set(key, promise);
  return promise;
}

async function photoDataUrl(key: SiteImageKey): Promise<string | null> {
  try {
    const file = await readFile(join(process.cwd(), "public", siteImages[key].src));
    return `data:image/jpeg;base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

function clamp(value: string | undefined, max: number): string | undefined {
  if (!value) return undefined;
  return value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;
}

/**
 * Branded 1200x630 social card: logo + wordmark, eyebrow, title, subtitle, optional photo.
 * Shared by the root opengraph-image, the /og route and the dynamic package/guide images.
 */
export async function renderOgImage(options: OgOptions): Promise<ImageResponse> {
  const title = clamp(options.title, MAX_TITLE) ?? siteConfig.fullName;
  const eyebrow = clamp(options.eyebrow, MAX_EYEBROW);
  const subtitle = clamp(options.subtitle, MAX_SUBTITLE);
  const [display, body, photo] = await Promise.all([loadFont("Fraunces", 600), loadFont("Plus Jakarta Sans", 600), options.photo ? photoDataUrl(options.photo) : Promise.resolve(null)]);

  const fonts = [
    ...(display ? [{ name: "Fraunces", data: display, weight: 600 as const, style: "normal" as const }] : []),
    ...(body ? [{ name: "Plus Jakarta Sans", data: body, weight: 600 as const, style: "normal" as const }] : []),
  ];
  const displayFamily = display ? "Fraunces" : "serif";
  const bodyFamily = body ? "Plus Jakarta Sans" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #083833 0%, #0E4D45 60%, #0B1F2A 100%)",
          color: "#FBF8F2",
          fontFamily: bodyFamily,
        }}
      >
        {/* Text column */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 56, width: photo ? 740 : 1200 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <LogoMark size={72} arch="#F7EBC9" accent="#D4A53A" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: displayFamily, fontSize: 44, lineHeight: 1 }}>Raahi</span>
              <span style={{ fontSize: 14, letterSpacing: 5, color: "#D4A53A", marginTop: 6 }}>UMRAH &amp; TRAVEL</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {eyebrow && (
              <span style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 20, letterSpacing: 3, color: "#D4A53A", textTransform: "uppercase" }}>
                <span style={{ width: 32, height: 2, background: "#D4A53A" }} />
                {eyebrow}
              </span>
            )}
            <span style={{ fontFamily: displayFamily, fontSize: title.length > 48 ? 46 : 56, lineHeight: 1.08 }}>{title}</span>
            {subtitle && <span style={{ fontSize: 22, lineHeight: 1.4, color: "rgba(251,248,242,0.82)" }}>{subtitle}</span>}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, color: "rgba(251,248,242,0.75)" }}>
            <span style={{ color: "#D4A53A" }}>Lahore, Karachi and Islamabad</span>
            <span>Licensed Umrah operator since {siteConfig.foundedYear}</span>
          </div>
        </div>
        {/* Photo column with arch mask */}
        {photo && (
          <div style={{ display: "flex", width: 460, height: 630, position: "relative" }}>
            {/* Satori (next/og) renders plain <img>; next/image is not available inside ImageResponse */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt="" width={460} height={630} style={{ objectFit: "cover", width: 460, height: 630 }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, #0E4D45 0%, rgba(14,77,69,0) 40%)" }} />
          </div>
        )}
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: fonts.length ? fonts : undefined,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=604800" },
    },
  );
}
