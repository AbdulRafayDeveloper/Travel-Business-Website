import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { FAQHero } from "@/components/FAQHero";
import { FAQList } from "@/components/FAQList";
import { FAQCta } from "@/components/FAQCta";
import { Footer } from "@/components/Footer";
import { translations } from "@/constants/translations";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/faqs`;

export const metadata: Metadata = {
  title: { absolute: `Frequently Asked Questions (FAQs) | ${siteConfig.name}` },
  description:
    `Find answers to common questions regarding ${siteConfig.name}'s aluminum scrap products, LME pricing, global export destinations, order minimums, and payment terms.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Frequently Asked Questions (FAQs) | ${siteConfig.name}`,
    description:
      "Get clear answers about metal trading specifications, shipping logistics, customs documentation, and commercial quotes.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} FAQs`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `FAQs | ${siteConfig.name} Metal Trading`,
    description:
      "Find answers to common questions about metal sourcing, export logistics, and LME pricing.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function FAQsPage() {
  const faqItems = translations.en.faqPage.items;

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "FAQs", url: PAGE_URL },
  ]);

  const faqSchema = buildFAQSchema(faqItems);

  const pageSchema = buildWebPageSchema({
    name: `Frequently Asked Questions | ${siteConfig.name}`,
    description:
      "Find answers to common questions regarding metal trading operations and logistics.",
    url: PAGE_URL,
    type: "FAQPage",
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={faqSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <FAQHero />
        <FAQList />
        <FAQCta />
      </main>
      <Footer />
    </>
  );
}
