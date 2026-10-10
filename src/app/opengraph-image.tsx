import { siteConfig } from "@/config/site";
import { OG_SIZE, renderOgImage } from "@/lib/og";

export const alt = `${siteConfig.fullName}, Umrah packages from Pakistan with real prices`;
export const size = OG_SIZE;
export const contentType = "image/png";

/** Default social card: used by the home page and as the fallback for every page without its own. */
export default function OpenGraphImage() {
  return renderOgImage({
    eyebrow: "Umrah packages from Pakistan",
    title: "Umrah, planned honestly, with every price on the table.",
    subtitle: "Quad, Triple and Double prices on every package. Inspected hotels. Visa help. WhatsApp at any hour.",
    photo: "homeHero",
  });
}
