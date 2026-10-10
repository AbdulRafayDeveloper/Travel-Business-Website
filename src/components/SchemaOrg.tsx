/**
 * SchemaOrg — Reusable JSON-LD structured data component.
 * Dynamically uses Environment Variable (NEXT_PUBLIC_SITE_URL) via getBaseUrl().
 */

import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();

export const organizationEntity = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon.ico`,
    width: 32,
    height: 32,
  },
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address,
    addressLocality: siteConfig.contact.city,
    addressCountry: siteConfig.contact.country,
    postalCode: "00000",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Urdu"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "sales",
      email: siteConfig.contact.tradeEmail,
      availableLanguage: ["English", "Urdu"],
      areaServed: "Worldwide",
    },
  ],
  sameAs: [],
  foundingDate: "2000",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 250,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  knowsAbout: [
    "Aluminum Trading",
    "Non-Ferrous Metal Trading",
    "Metal Recycling",
    "International Metal Export",
    "Copper Scrap Trading",
    "Zinc Trading",
    "Industrial Metal Supply",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: siteConfig.name,
  description:
    "International Aluminum & Metal Trading — Supplying high-purity aluminum, copper, zinc, and recyclable metals globally.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: ["en-US", "ar"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/products?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      ...organizationEntity,
      "@type": ["Organization", "LocalBusiness"],
      priceRange: "$$$$",
      currenciesAccepted: "USD",
      paymentAccepted: "Letter of Credit, Wire Transfer",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
  ],
};

export function buildBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function buildServiceSchema(services: Array<{ name: string; description: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Metal Trading Services by ${siteConfig.name}`,
    description: "Comprehensive end-to-end metal trading and logistics services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: { "@id": `${BASE_URL}/#organization` },
        areaServed: { "@type": "Place", name: "Worldwide" },
      },
    })),
  };
}

export function buildProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    url: product.url,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    manufacturer: { "@id": `${BASE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE_URL}/#organization` },
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split("T")[0],
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Material Standard",
        value: "ISRI Specification",
      },
      {
        "@type": "PropertyValue",
        name: "Quality Certification",
        value: "ISO 9001",
      },
    ],
  };
}

export function buildWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  type?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": page.type ?? "WebPage",
    "@id": `${page.url}#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    breadcrumb: { "@id": `${page.url}#breadcrumb` },
  };
}

interface SchemaOrgProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export function SchemaOrg({ schema }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
