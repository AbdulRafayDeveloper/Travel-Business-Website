import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { WhyHero } from "@/components/WhyHero";
import { WhyGrid } from "@/components/WhyGrid";
import { WhyQuality } from "@/components/WhyQuality";
import { WhyCapabilities } from "@/components/WhyCapabilities";
import { WhyHighlightRow } from "@/components/WhyHighlightRow";
import { WhyCta } from "@/components/WhyCta";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/why-choose-us`;

export const metadata: Metadata = {
  title: { absolute: `Why Choose Us | ${siteConfig.name} – ISO Certified Metal Supplier` },
  description:
    `Discover why industrial manufacturers trust ${siteConfig.name}. 20+ years of expertise, 50+ countries served, 98% on-time delivery, ISO 9001 & ISO 14001 certified quality standards.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Why Choose Us | ${siteConfig.name} – ISO Certified Metal Supplier`,
    description:
      "20+ years of excellence. 50+ countries. 98% on-time delivery. Reliable non-ferrous metal supply chain partner.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Why Choose ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Why Choose ${siteConfig.name}`,
    description:
      "20+ years of excellence, ISO certification, global reach, and unmatched metal trade reliability.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function WhyChooseUsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Why Choose Us", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `Why Choose Us | ${siteConfig.name}`,
    description:
      `Discover why global industrial leaders trust ${siteConfig.name}'s quality standards and logistics.`,
    url: PAGE_URL,
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <WhyHero />
        <WhyGrid />
        <WhyQuality />
        <WhyCapabilities />
        <WhyHighlightRow />
        <WhyCta />
      </main>
      <Footer />
    </>
  );
}
