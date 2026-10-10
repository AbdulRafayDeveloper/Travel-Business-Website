import type { MetadataRoute } from "next";
import { getBaseUrl } from "@/config/site";
import { packages } from "@/data/packages";
import { guides } from "@/data/guides";

interface StaticRoute {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}

const staticRoutes: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/umrah-packages", changeFrequency: "weekly", priority: 0.95 },
  { path: "/ramadan-umrah", changeFrequency: "weekly", priority: 0.9 },
  { path: "/hotels", changeFrequency: "weekly", priority: 0.85 },
  { path: "/departures", changeFrequency: "weekly", priority: 0.8 },
  { path: "/umrah-visa", changeFrequency: "monthly", priority: 0.85 },
  { path: "/plan-your-umrah", changeFrequency: "monthly", priority: 0.9 },
  { path: "/umrah-guide", changeFrequency: "monthly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/agents", changeFrequency: "monthly", priority: 0.5 },
  { path: "/payment-safety", changeFrequency: "monthly", priority: 0.5 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-policy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const statics = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const packageRoutes = packages.map((p) => ({
    url: `${baseUrl}/umrah-packages/${p.slug}`,
    lastModified: new Date(`${p.pricesUpdatedOn}T00:00:00`),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const guideRoutes = guides.map((g) => ({
    url: `${baseUrl}/umrah-guide/${g.slug}`,
    lastModified: new Date(`${g.updatedOn}T00:00:00`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...statics, ...packageRoutes, ...guideRoutes];
}
