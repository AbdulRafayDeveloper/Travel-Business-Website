import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CareersContent } from "@/components/CareersContent";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/careers`;
const TITLE = `Careers | ${siteConfig.name}`;
const DESCRIPTION =
  "Join AluTrade Global. We hire fabricators, welders, site erectors, design engineers, quality inspectors, sales and logistics staff. Apply by WhatsApp or email.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: [`${BASE_URL}/og-image.png`] },
};

export default function Page() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Careers", url: PAGE_URL },
  ]);
  const pageSchema = buildWebPageSchema({ name: TITLE, description: DESCRIPTION, url: PAGE_URL });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <CareersContent />
      </main>
      <Footer />
    </>
  );
}
