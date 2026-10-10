/**
 * Single source of truth for the business phone number.
 * For now one number is used everywhere (WhatsApp + calls).
 */
export const contactNumber = {
  display: "+92 306 0815246",
  e164: "+923060815246",
  whatsappUrl: "https://wa.me/923060815246",
  telUrl: "tel:+923060815246",
};

export const siteConfig = {
  name: "AluTrade Global",
  legalName: "AluTrade Global Metal Trading (Pvt.) Ltd.",
  description:
    "AluTrade Global is a leading international aluminum and non-ferrous metal trading company supplying high-purity aluminum scrap, copper, zinc, and recyclable metals to manufacturers across 50+ countries.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://metal-business-3.vercel.app",
  ogImage: "/opengraph-image",
  contact: {
    email: "contact@alutradeglobal.com",
    tradeEmail: "trade@alutradeglobal.com",
    phone: contactNumber.display,
    address: "Plot 12, Industrial Area, Lahore, Punjab, Pakistan",
    country: "PK",
    city: "Lahore",
  },
};

export function getBaseUrl(): string {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://metal-business-3.vercel.app";
}
