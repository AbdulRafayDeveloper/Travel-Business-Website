import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { ProductsHero } from "@/components/ProductsHero";
import { ProductsIntro } from "@/components/ProductsIntro";
import { ProductsGrid } from "@/components/ProductsGrid";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ServicesCapabilities } from "@/components/ServicesCapabilities";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProductsCta } from "@/components/ProductsCta";
import { Footer } from "@/components/Footer";
import {
  SchemaOrg,
  buildBreadcrumbSchema,
  buildWebPageSchema,
} from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();
const PAGE_URL = `${BASE_URL}/products`;

export const metadata: Metadata = {
  title: { absolute: `Metals, Steel Products & Fabrication | ${siteConfig.name}` },
  description:
    `Explore ${siteConfig.name}'s full range: aluminum, copper and zinc scrap, steel sheets, bars, beams and coils, plus cable trays, roof sheets, racks, shuttering plates, grating, perforated plates, pallets, solar stands, PEB and petrol pump canopies.`,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: `Metals, Steel Products & Fabrication | ${siteConfig.name}`,
    description:
      "Non-ferrous metals, steel products and complete fabrication solutions for industry across Pakistan. Call or WhatsApp for a price.",
    url: PAGE_URL,
    type: "website",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Metal Inventory`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Metals, Steel & Fabrication | ${siteConfig.name}`,
    description:
      "Aluminum, copper, zinc, steel products and fabrication: cable trays, racks, grating, solar stands, PEB and more.",
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function ProductsPage() {
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Products", url: PAGE_URL },
  ]);

  const pageSchema = buildWebPageSchema({
    name: `Metals, Steel Products & Fabrication | ${siteConfig.name}`,
    description:
      "Non-ferrous metals, steel sheets, bars, beams, coils and fabricated products such as cable trays, racks, grating, solar stands and pre-engineered buildings.",
    url: PAGE_URL,
    type: "CollectionPage",
  });

  return (
    <>
      <SchemaOrg schema={breadcrumbSchema} />
      <SchemaOrg schema={pageSchema} />
      <Header />
      <main id="main-content" className="pt-20">
        <ProductsHero />
        <ProductsIntro />
        <ProductsGrid />
        <ServicesOverview />
        <ServicesCapabilities />
        <ServicesGrid />
        <ProductsCta />
      </main>
      <Footer />
    </>
  );
}
