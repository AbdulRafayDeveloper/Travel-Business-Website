import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductDetailHero } from "@/components/ProductDetailHero";
import { ProductSpecsTable } from "@/components/ProductSpecsTable";
import { ProductGrades } from "@/components/ProductGrades";
import { ProductProcessing } from "@/components/ProductProcessing";
import { ProductSidebar } from "@/components/ProductSidebar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ProductRelated } from "@/components/ProductRelated";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildProductSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/products/aluminum-scrap`;

export const metadata: Metadata = {
  title: { absolute: `High-Grade Aluminum Scrap (Taint/Tabor, Tense, 6063) | ${siteConfig.name}` },
  description:
    "Buy ISRI-compliant high-purity aluminum scrap. Sourced from industrial streams in bales, briquettes, or loose shredded form. 99.7% base purity for secondary smelters.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `High-Grade Aluminum Scrap Supply | ${siteConfig.name}`,
    description:
      "Premium recyclable aluminum scrap grades (Taint/Tabor, Tense, 6063 extrusions) processed to 99.7% purity. Global shipping available.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `Aluminum Scrap Bales — ${siteConfig.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Aluminum Scrap Grades & Specs | ${siteConfig.name}`,
    description:
      "Premium recyclable aluminum scrap (Grade A Taint/Tabor, Grade B Tense, 6063 extrusions) for furnace melting.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function AluminumScrapDetailPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Products", url: `${BASE_URL}/products` },
    { name: "Aluminum Scrap", url: PAGE_URL },
  ]);

  const productSchema = buildProductSchema({
    name: "Industrial Aluminum Scrap",
    description:
      "Premium grade recyclable aluminum scrap for secondary aluminum producers. Available in Grade A Taint/Tabor, Grade B Tense, and 6063 Extrusions.",
    url: PAGE_URL,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbUenytKE_MOashlICXkSB_RlVgCnnuOMGi3-tzeetO0q_Vz2NYvR1d6VrKQlusKkgu0vc7MwmrKl0hJFylWpS1kYDD7dQ7YDTR6OX-elpfgKSCDuGP43T0AM89jSAuz0_ukeMxLs66pnJdSut5Z3uSwjvi3GbGjFHoxAqFunFkVh9HlBrP_Xhegg39BfKjfQnNuSmcIg5rZS_LgvqGkvM_GeVBNggNIHDM234E3LafGmTzCa5l3yx",
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={productSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <ProductDetailHero />
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12 md:py-section-gap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            <div className="lg:col-span-8 space-y-16">
              <ProductSpecsTable />
              <ProductGrades />
              <ProductProcessing />
            </div>
            <div className="lg:col-span-4 mt-12 lg:mt-0">
              <ProductSidebar />
            </div>
          </div>
          <ProductShowcase />
          <ProductRelated />
        </div>
      </main>
      <Footer />
    </>
  );
}
