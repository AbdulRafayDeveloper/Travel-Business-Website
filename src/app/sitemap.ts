import type { MetadataRoute } from "next";
import { getBaseUrl, siteConfig } from "@/config/site";
import { guides } from "@/data/guides";
import { siteImages } from "@/data/images";
import { packages } from "@/data/packages";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

interface StaticRoute {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  /** ISO date of the last meaningful content change. */
  updatedOn: string;
  images?: string[];
}

const LEGAL_UPDATED = "2026-10-01";
const CONTENT_UPDATED = "2026-10-11";
const prices = siteConfig.pricesUpdatedOn;

const staticRoutes: StaticRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1, updatedOn: prices, images: [siteImages.homeHero.src, siteImages.ihram.src] },
  { path: "/umrah-packages", changeFrequency: "weekly", priority: 0.95, updatedOn: prices, images: [siteImages.packagesHero.src] },
  { path: "/ramadan-umrah", changeFrequency: "weekly", priority: 0.9, updatedOn: prices, images: [siteImages.haramInterior.src] },
  { path: "/hotels", changeFrequency: "weekly", priority: 0.85, updatedOn: prices, images: [siteImages.hotelsHero.src, siteImages.makkahNight.src, siteImages.madinahNight.src] },
  { path: "/departures", changeFrequency: "weekly", priority: 0.8, updatedOn: prices },
  { path: "/umrah-visa", changeFrequency: "monthly", priority: 0.85, updatedOn: CONTENT_UPDATED, images: [siteImages.visaHero.src] },
  { path: "/plan-your-umrah", changeFrequency: "monthly", priority: 0.9, updatedOn: CONTENT_UPDATED },
  { path: "/umrah-guide", changeFrequency: "monthly", priority: 0.7, updatedOn: CONTENT_UPDATED, images: [siteImages.guideHero.src] },
  { path: "/about", changeFrequency: "monthly", priority: 0.6, updatedOn: CONTENT_UPDATED, images: [siteImages.aboutHero.src] },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.7, updatedOn: CONTENT_UPDATED },
  { path: "/faqs", changeFrequency: "monthly", priority: 0.6, updatedOn: CONTENT_UPDATED },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7, updatedOn: CONTENT_UPDATED },
  { path: "/agents", changeFrequency: "monthly", priority: 0.5, updatedOn: CONTENT_UPDATED },
  { path: "/payment-safety", changeFrequency: "monthly", priority: 0.5, updatedOn: CONTENT_UPDATED },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3, updatedOn: LEGAL_UPDATED },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3, updatedOn: LEGAL_UPDATED },
  { path: "/refund-policy", changeFrequency: "yearly", priority: 0.3, updatedOn: LEGAL_UPDATED },
];

function toDate(iso: string): Date {
  return new Date(`${iso}T00:00:00Z`);
}

/** Canonical URLs only, with real last-modified dates and image entries for the image sitemap. */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const absolute = (path: string) => new URL(path || "/", baseUrl).toString().replace(/\/$/, path ? "" : "");

  const statics = staticRoutes.map((r) => ({
    url: absolute(r.path),
    lastModified: toDate(r.updatedOn),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    images: r.images?.map(absolute),
  }));

  const packageRoutes = packages.map((p) => ({
    url: absolute(`/umrah-packages/${p.slug}`),
    lastModified: toDate(p.pricesUpdatedOn),
    changeFrequency: "weekly" as const,
    priority: 0.9,
    images: [absolute(p.image)],
  }));

  const guideRoutes = guides.map((g) => ({
    url: absolute(`/umrah-guide/${g.slug}`),
    lastModified: toDate(g.updatedOn),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    images: [absolute(g.image)],
  }));

  return [...statics, ...packageRoutes, ...guideRoutes];
}
