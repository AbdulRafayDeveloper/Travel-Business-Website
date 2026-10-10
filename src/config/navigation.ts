export interface NavLink {
  href: string;
  label: string;
  icon: string;
  description?: string;
}

/** Primary header navigation (desktop + drawer). */
export const primaryNav: NavLink[] = [
  { href: "/umrah-packages", label: "Umrah Packages", icon: "confirmation_number", description: "Prices for every room type" },
  { href: "/hotels", label: "Hotels", icon: "hotel", description: "Makkah & Madinah nightly rates" },
  { href: "/umrah-visa", label: "Umrah Visa", icon: "badge", description: "Documents, timeline, tracking" },
  { href: "/departures", label: "Departures", icon: "event", description: "Group dates by month" },
  { href: "/umrah-guide", label: "Guides", icon: "menu_book", description: "How to perform Umrah & more" },
  { href: "/about", label: "About", icon: "info", description: "Licences, team, offices" },
];

/** Secondary links shown in the drawer and footer. */
export const secondaryNav: NavLink[] = [
  { href: "/ramadan-umrah", label: "Ramadan Umrah", icon: "nights_stay" },
  { href: "/reviews", label: "Reviews", icon: "reviews" },
  { href: "/faqs", label: "FAQs", icon: "help" },
  { href: "/agents", label: "For Travel Agents", icon: "handshake" },
  { href: "/payment-safety", label: "Payment Safety", icon: "verified_user" },
  { href: "/contact", label: "Contact", icon: "call" },
];

export const legalNav: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy", icon: "policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions", icon: "gavel" },
  { href: "/refund-policy", label: "Refund Policy", icon: "currency_exchange" },
];

export const planHref = "/plan-your-umrah";
