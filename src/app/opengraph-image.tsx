import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/graphics/LogoMark";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.fullName} — Umrah packages from Pakistan with real prices`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #083833 0%, #0E4D45 55%, #0B1F2A 100%)",
          color: "#FBF8F2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <LogoMark size={88} arch="#F7EBC9" accent="#D4A53A" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 56, fontWeight: 700, letterSpacing: -1 }}>Raahi</span>
            <span style={{ fontSize: 18, letterSpacing: 6, color: "#D4A53A", fontFamily: "sans-serif", fontWeight: 700 }}>UMRAH &amp; TRAVEL</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span style={{ fontSize: 60, lineHeight: 1.05, fontWeight: 600, maxWidth: 900 }}>
            Umrah packages from Pakistan with <span style={{ color: "#D4A53A", fontStyle: "italic" }}>real prices</span>.
          </span>
          <span style={{ fontSize: 26, color: "rgba(251,248,242,0.85)", fontFamily: "sans-serif" }}>
            Quad · Triple · Double prices on every package · Inspected hotels · Visa assistance · 24/7 WhatsApp
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "sans-serif", fontSize: 22 }}>
          <span style={{ color: "#D4A53A", fontWeight: 700 }}>Lahore · Karachi · Islamabad</span>
          <span style={{ color: "rgba(251,248,242,0.75)" }}>Licensed Umrah operator since {siteConfig.foundedYear}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
