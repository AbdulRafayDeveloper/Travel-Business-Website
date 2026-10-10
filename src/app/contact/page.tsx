import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ContactHero } from "@/components/ContactHero";
// import { ContactForm } from "@/components/ContactForm"; // temporarily disabled: direct contact only (call / WhatsApp / email)
import { ContactChannels } from "@/components/ContactChannels";
import { ContactInfo } from "@/components/ContactInfo";
import { ContactMap } from "@/components/ContactMap";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: { absolute: `Contact Us | ${siteConfig.name} – Metal Trading Desk, Pakistan` },
  description:
    `Call, WhatsApp, or email ${siteConfig.name}'s trading desk in ${siteConfig.contact.city}, Pakistan. Inquire about aluminum scrap pricing, bulk copper/zinc orders, logistics support, and export partnerships.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name} – Metal Trading Desk, Pakistan`,
    description:
      "Reach our Pakistan trading desk directly by phone, WhatsApp, or email. Head office address, business hours, and instant contact options.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.name} Trading Desk`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Call or WhatsApp our Pakistan trading desk for fast answers to all commercial and technical inquiries.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function ContactPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Contact Us", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `Contact Us | ${siteConfig.name}`,
    description:
      `Call, WhatsApp, or email ${siteConfig.name}'s trading desk in ${siteConfig.contact.city}, Pakistan.`,
    url: PAGE_URL,
    type: "ContactPage",
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20 bg-[#f9f9ff] min-h-screen">
        <ContactHero />
        <div className="max-w-[1280px] w-full mx-auto px-4 md:px-10 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            {/*
              -- Contact form (temporarily disabled; visitors contact us directly instead) --

            <ContactForm />
            */}
            <ContactChannels />
          </div>
          <div className="lg:col-span-5 space-y-6 mt-12 lg:mt-0">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
