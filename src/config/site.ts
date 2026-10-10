/**
 * Single source of truth for brand identity, contact channels and URLs.
 * Every component, metadata block and JSON-LD graph reads from here.
 */

export const contactNumber = {
  display: "+92 300 123 4567",
  e164: "+923001234567",
  whatsappNumber: "923001234567",
  telUrl: "tel:+923001234567",
} as const;

export const landline = {
  display: "042 3587 1234",
  telUrl: "tel:+924235871234",
} as const;

export interface Office {
  id: string;
  city: string;
  label: string;
  address: string;
  phone: string;
  telUrl: string;
  hours: string;
  mapQuery: string;
  isHeadOffice: boolean;
}

export const offices: Office[] = [
  {
    id: "lahore",
    city: "Lahore",
    label: "Head Office",
    address: "2nd Floor, Al-Hafeez Heights, Main Boulevard, Gulberg III, Lahore",
    phone: "042 3587 1234",
    telUrl: "tel:+924235871234",
    hours: "Monday to Saturday, 10:00 am to 8:00 pm",
    mapQuery: "Main Boulevard Gulberg III Lahore",
    isHeadOffice: true,
  },
  {
    id: "karachi",
    city: "Karachi",
    label: "Branch Office",
    address: "Office 14, Mezzanine Floor, Shahrah-e-Faisal, Karachi",
    phone: "021 3456 7890",
    telUrl: "tel:+922134567890",
    hours: "Monday to Saturday, 10:00 am to 8:00 pm",
    mapQuery: "Shahrah-e-Faisal Karachi",
    isHeadOffice: false,
  },
  {
    id: "islamabad",
    city: "Islamabad",
    label: "Branch Office",
    address: "Office 7, 1st Floor, Jinnah Avenue, Blue Area, Islamabad",
    phone: "051 2345 678",
    telUrl: "tel:+92512345678",
    hours: "Monday to Saturday, 10:00 am to 8:00 pm",
    mapQuery: "Jinnah Avenue Blue Area Islamabad",
    isHeadOffice: false,
  },
];

export const siteConfig = {
  name: "Raahi",
  fullName: "Raahi Umrah & Travel",
  legalName: "Raahi Umrah & Travel (Pvt.) Ltd.",
  tagline: "Your trusted companion to the Haramain.",
  taglineUrdu: "آپ کا ہمسفر، حرمین تک",
  description:
    "Raahi is a licensed Umrah travel company in Pakistan. We offer Umrah packages from Lahore, Karachi and Islamabad with clear per person prices, hotels in Makkah and Madinah that our own team has checked, help with your visa, and WhatsApp support at any hour.",
  foundedYear: 2012,
  email: "salam@raahi.pk",
  bookingsEmail: "bookings@raahi.pk",
  supportHours: "9:00 am to 11:00 pm PKT, every day",
  callbackPromise: "A consultant calls you back within 30 minutes during support hours.",
  licences: [
    { label: "Ministry of Religious Affairs & Interfaith Harmony", value: "Umrah operator enrolment no. UO-XXXX (placeholder)" },
    { label: "Department of Tourist Services, Punjab", value: "Licence no. DTS/XXXX (placeholder)" },
    { label: "SECP", value: "Company registration no. XXXXXXX (placeholder)" },
  ],
  stats: {
    pilgrims: "18,000+",
    years: "13",
    rating: "4.8",
    reviews: "1,240",
    cities: "7",
  },
  social: {
    facebook: "https://facebook.com/raahiumrah",
    instagram: "https://instagram.com/raahiumrah",
    youtube: "https://youtube.com/@raahiumrah",
    tiktok: "https://tiktok.com/@raahiumrah",
  },
  pricesUpdatedOn: "2026-10-10",
  departureCities: ["Lahore", "Karachi", "Islamabad", "Sialkot", "Multan", "Peshawar", "Faisalabad"],
  airlines: ["Saudia", "PIA", "Airblue", "flynas", "flyJinnah", "Air Arabia", "Qatar Airways"],
} as const;

export type DepartureCity = (typeof siteConfig.departureCities)[number];

const FALLBACK_URL = "https://travel-business-website-2.vercel.app";

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return FALLBACK_URL;
}

/** Build a wa.me link with an optional prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${contactNumber.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
