import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { IndustriesHero } from "@/components/IndustriesHero";
import { IndustriesOverview } from "@/components/IndustriesOverview";
import { IndustriesGrid } from "@/components/IndustriesGrid";
import { IndustriesRecap } from "@/components/IndustriesRecap";
import { IndustriesCta } from "@/components/IndustriesCta";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: { absolute: `Industries We Serve | ${siteConfig.name} – Heavy Industry & Manufacturing` },
  description:
    `${siteConfig.name} supplies raw metals and recyclable assets to recycling facilities, automotive manufacturing, foundries, construction projects, and processing plants globally.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Industries We Serve | ${siteConfig.name}`,
    description:
      "Empowering global infrastructure. High-purity metal supply for recycling, manufacturing, foundries, construction, and processing.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Industries Served by ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Industries We Serve | ${siteConfig.name}`,
    description:
      "High-purity metal supply for recycling, manufacturing, foundries, construction, and processing.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function IndustriesPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Industries", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `Industries We Serve | ${siteConfig.name}`,
    description:
      `${siteConfig.name} supplies raw metals and recyclable assets across global industrial sectors.`,
    url: PAGE_URL,
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <IndustriesHero />
        <IndustriesOverview />
        <IndustriesGrid />
        <IndustriesRecap />
        <IndustriesCta />
      </main>
      <Footer />
    </>
  );
}
