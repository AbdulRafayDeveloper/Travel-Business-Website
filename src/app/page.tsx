import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeProductShowcase } from "@/components/HomeProductShowcase";
import { HomeServices } from "@/components/HomeServices";
import { HomeStats } from "@/components/HomeStats";
import { HomeAboutTeaser } from "@/components/HomeAboutTeaser";
import { HomeFeaturedProjects } from "@/components/HomeFeaturedProjects";
import { LeadershipMessage } from "@/components/LeadershipMessage";
import { InquiryBanner } from "@/components/InquiryBanner";
import { Footer } from "@/components/Footer";
import { SchemaOrg, organizationSchema, websiteSchema } from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: { absolute: `${siteConfig.name} | Metal Trading, Steel Products & Fabrication in Pakistan` },
  description:
    siteConfig.description,
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "ar": `${BASE_URL}?lang=ar`,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | Metal Trading, Steel Products & Fabrication in Pakistan`,
    description:
      "25+ years of precision metal trading. Aluminum, copper, zinc and steel products plus cable trays, racks, grating, solar stands and pre-engineered buildings. Call or WhatsApp today.",
    url: BASE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — International Aluminum & Metal Trading`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Metal Trading, Steel & Fabrication`,
    description:
      "25+ years of precision metal trading. Metals, steel products and fabrication solutions across Pakistan. Call or WhatsApp today.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Home() {
  return (
    <>
      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={websiteSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        {/* Highlight */}
        <Hero />
        <HomeStats />
        {/* About teaser (trust points) */}
        <HomeAboutTeaser />
        {/* Product showcase */}
        <HomeProductShowcase />
        {/* Services */}
        <HomeServices />
        {/* Turnkey project pages */}
        <HomeFeaturedProjects />
        {/* Leadership */}
        <LeadershipMessage />
        {/* Conversion CTA */}
        <InquiryBanner />
      </main>
      <Footer />
    </>
  );
}
