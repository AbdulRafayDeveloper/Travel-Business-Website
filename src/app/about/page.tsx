import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { AboutHero } from "@/components/AboutHero";
import { AboutOverview } from "@/components/AboutOverview";
import { AboutMissionVision } from "@/components/AboutMissionVision";
import { AboutValues } from "@/components/AboutValues";
import { AboutCapabilities } from "@/components/AboutCapabilities";
import { AboutTrustStats } from "@/components/AboutTrustStats";
import { AboutIndustriesServed } from "@/components/AboutIndustriesServed";
import { AboutGallery } from "@/components/AboutGallery";
import { LeadershipMessage } from "@/components/LeadershipMessage";
import { InquiryBanner } from "@/components/InquiryBanner";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: { absolute: `About Us | ${siteConfig.name} – Metal Trading & Fabrication, Pakistan` },
  description:
    `Learn about ${siteConfig.name}: a ${siteConfig.contact.city}-based metal trading and steel fabrication company supplying aluminum, copper, zinc, steel products and fabricated solutions across Pakistan and abroad.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "Our story, mission, values, capabilities and the industries we serve. 25+ years of precision metal trading and fabrication.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${siteConfig.name}`,
    description:
      "25+ years of precision metal trading and steel fabrication from Lahore, Pakistan.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function AboutPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "About Us", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `About Us | ${siteConfig.name}`,
    description:
      "Company overview, mission, vision, values, capabilities and industries served.",
    url: PAGE_URL,
    type: "AboutPage",
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <AboutHero />
        <AboutOverview />
        <AboutMissionVision />
        <AboutValues />
        <AboutCapabilities />
        <LeadershipMessage />
        <AboutTrustStats />
        <AboutIndustriesServed />
        <AboutGallery />
        <InquiryBanner isAboutPage />
      </main>
      <Footer />
    </>
  );
}
