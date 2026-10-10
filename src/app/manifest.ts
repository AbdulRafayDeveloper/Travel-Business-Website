import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.fullName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F2",
    theme_color: "#0E4D45",
    lang: "en-PK",
    dir: "ltr",
    categories: ["travel", "lifestyle"],
    icons: [
      ...[48, 72, 96, 144, 192, 256, 384, 512].map((size) => ({ src: `/icon-${size}x${size}.png`, sizes: `${size}x${size}`, type: "image/png", purpose: "any" as const })),
      { src: "/maskable-icon.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/maskable-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
      { src: "/monochrome-icon-512x512.png", sizes: "512x512", type: "image/png", purpose: "monochrome" },
    ],
  };
}
