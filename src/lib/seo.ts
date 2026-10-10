import type { Metadata } from "next";
import { getBaseUrl, offices, siteConfig } from "@/config/site";
import type { FaqItem, Guide, Hotel, UmrahPackage } from "@/types";
import { getHotel } from "@/data/hotels";

export const BASE_URL = getBaseUrl();

const OG_IMAGE = `${BASE_URL}/opengraph-image`;

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}

/** Build complete per-page metadata: canonical, Open Graph, Twitter. */
export function buildMetadata({ title, description, path, image, type = "website", noIndex = false }: PageMetaInput): Metadata {
  const url = `${BASE_URL}${path}`;
  const ogImage = image ? `${BASE_URL}${image}` : OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: siteConfig.fullName,
      locale: "en_PK",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${siteConfig.fullName} — ${title}` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const organizationId = `${BASE_URL}/#organization`;
export const websiteId = `${BASE_URL}/#website`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["TravelAgency", "LocalBusiness", "Organization"],
  "@id": organizationId,
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  legalName: siteConfig.legalName,
  url: BASE_URL,
  logo: { "@type": "ImageObject", url: `${BASE_URL}/icon-512x512.png`, width: 512, height: 512 },
  image: OG_IMAGE,
  description: siteConfig.description,
  foundingDate: String(siteConfig.foundedYear),
  telephone: "+923001234567",
  email: siteConfig.email,
  priceRange: "PKR 165,000 – PKR 625,000",
  currenciesAccepted: "PKR",
  paymentAccepted: "Bank transfer, JazzCash, Easypaisa, Credit card, Debit card, Cash",
  address: {
    "@type": "PostalAddress",
    streetAddress: offices[0].address,
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54660",
    addressCountry: "PK",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.5204, longitude: 74.3587 },
  areaServed: siteConfig.departureCities.map((city) => ({ "@type": "City", name: city })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+923001234567", contactType: "customer service", availableLanguage: ["Urdu", "English", "Punjabi"], areaServed: "PK", hoursAvailable: "Mo-Su 09:00-23:00" },
    { "@type": "ContactPoint", telephone: "+923001234567", contactType: "sales", availableLanguage: ["Urdu", "English"], areaServed: "PK" },
  ],
  sameAs: Object.values(siteConfig.social),
  knowsAbout: ["Umrah packages", "Umrah visa assistance", "Makkah hotels", "Madinah hotels", "Ziyarat tours", "Ramadan Umrah"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.stats.rating,
    reviewCount: siteConfig.stats.reviews.replace(/,/g, ""),
    bestRating: "5",
    worstRating: "1",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": websiteId,
  url: BASE_URL,
  name: siteConfig.fullName,
  description: siteConfig.description,
  publisher: { "@id": organizationId },
  inLanguage: "en-PK",
};

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function buildWebPageSchema(page: { name: string; description: string; path: string; type?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": page.type ?? "WebPage",
    "@id": `${BASE_URL}${page.path}#webpage`,
    url: `${BASE_URL}${page.path}`,
    name: page.name,
    description: page.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    inLanguage: "en-PK",
  };
}

function hotelSchema(hotel: Hotel) {
  return {
    "@type": "Hotel",
    name: hotel.name,
    starRating: { "@type": "Rating", ratingValue: String(hotel.stars) },
    address: { "@type": "PostalAddress", addressLocality: hotel.city, addressCountry: "SA" },
    image: `${BASE_URL}${hotel.image}`,
  };
}

export function buildPackageSchema(pkg: UmrahPackage) {
  const path = `/umrah-packages/${pkg.slug}`;
  const makkah = getHotel(pkg.makkah.hotelId);
  const madinah = getHotel(pkg.madinah.hotelId);
  const validThrough = new Date(`${pkg.pricesUpdatedOn}T00:00:00`);
  validThrough.setMonth(validThrough.getMonth() + 3);
  return {
    "@context": "https://schema.org",
    "@type": ["TouristTrip", "Product"],
    "@id": `${BASE_URL}${path}#trip`,
    name: pkg.name,
    description: pkg.bestFor,
    url: `${BASE_URL}${path}`,
    image: `${BASE_URL}${pkg.image}`,
    touristType: ["Pilgrims", "Families"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: pkg.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day}: ${day.title}`,
        description: day.detail,
      })),
    },
    subjectOf: [hotelSchema(makkah), hotelSchema(madinah)],
    provider: { "@id": organizationId },
    brand: { "@type": "Brand", name: siteConfig.name },
    offers: (["quad", "triple", "double"] as const).map((room) => ({
      "@type": "Offer",
      name: `${pkg.name} — ${room} sharing, per person`,
      price: pkg.prices[room],
      priceCurrency: "PKR",
      availability: pkg.seatsLeft !== undefined && pkg.seatsLeft < 5 ? "https://schema.org/LimitedAvailability" : "https://schema.org/InStock",
      priceValidUntil: validThrough.toISOString().split("T")[0],
      url: `${BASE_URL}${path}`,
      seller: { "@id": organizationId },
    })),
  };
}

export function buildHotelListSchema(list: Hotel[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Makkah and Madinah hotels with nightly rates",
    itemListElement: list.map((hotel, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        ...hotelSchema(hotel),
        priceRange: `PKR ${hotel.nightlyPkr} per night`,
      },
    })),
  };
}

export function buildArticleSchema(guide: Guide) {
  const path = `/umrah-guide/${guide.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${BASE_URL}${path}#article`,
    headline: guide.title,
    description: guide.excerpt,
    image: `${BASE_URL}${guide.image}`,
    datePublished: guide.publishedOn,
    dateModified: guide.updatedOn,
    author: { "@id": organizationId },
    publisher: { "@id": organizationId },
    mainEntityOfPage: `${BASE_URL}${path}`,
    inLanguage: "en-PK",
    articleSection: guide.category,
  };
}

export function buildServiceSchema(service: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.path}`,
    provider: { "@id": organizationId },
    areaServed: { "@type": "Country", name: "Pakistan" },
    serviceType: "Umrah travel",
  };
}
