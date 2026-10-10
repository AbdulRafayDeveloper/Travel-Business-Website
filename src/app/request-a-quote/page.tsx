import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { QuoteHero } from "@/components/QuoteHero";
import { QuoteForm } from "@/components/QuoteForm";
import { QuoteSidebar } from "@/components/QuoteSidebar";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/request-a-quote`;

export const metadata: Metadata = {
  title: { absolute: `Request a Quote | ${siteConfig.name} – Instant Metal Quotation Desk` },
  description:
    `Submit your aluminum scrap, copper, or zinc trading requirements to ${siteConfig.name}. Receive a competitive LME-linked commercial offer within 24 hours.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Request a Quote | ${siteConfig.name} – Instant Metal Quotation Desk`,
    description:
      `Submit your bulk metal requirements to ${siteConfig.name}. Detailed commercial quotes provided within 24 business hours.`,
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Request a Quote — ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Request a Metal Supply Quote | ${siteConfig.name}`,
    description:
      "Get LME-linked pricing for aluminum scrap, copper wire, zinc ingots, and custom non-ferrous orders.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function RequestAQuotePage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Request a Quote", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `Request a Quote | ${siteConfig.name}`,
    description:
      `Submit your aluminum or metal trading requirements to ${siteConfig.name}.`,
    url: PAGE_URL,
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20 bg-[#f9f9ff] min-h-screen">
        <QuoteHero />
        <section className="px-4 md:px-10 max-w-[1280px] w-full mx-auto -mt-16 relative z-30 pb-24">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-2/3">
              <QuoteForm />
            </div>
            <QuoteSidebar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
