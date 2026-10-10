export type PackageTier = "economy" | "standard" | "premium" | "vip";

export type RoomType = "quad" | "triple" | "double";

export type HotelCity = "Makkah" | "Madinah";

export interface OccupancyPrices {
  quad: number;
  triple: number;
  double: number;
}

export interface HotelStay {
  hotelId: string;
  nights: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  detail: string;
}

export interface UmrahPackage {
  slug: string;
  name: string;
  shortName: string;
  nights: number;
  tier: PackageTier;
  stars: 3 | 4 | 5;
  departureCities: string[];
  airlines: string[];
  makkah: HotelStay;
  madinah: HotelStay;
  meals: string;
  transport: string;
  visaIncluded: boolean;
  ziyaratIncluded: boolean;
  prices: OccupancyPrices;
  pricesUpdatedOn: string;
  image: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  tags: string[];
  seatsLeft?: number;
  featured: boolean;
  bestFor: string;
}

export interface Hotel {
  id: string;
  city: HotelCity;
  name: string;
  stars: 3 | 4 | 5;
  distanceM: number;
  walkMinutes: number;
  shuttle: boolean;
  meals: "Room only" | "Breakfast" | "Half board" | "Full board";
  nightlyPkr: number;
  image: string;
  amenities: string[];
  roomType: string;
}

export interface Departure {
  id: string;
  date: string;
  from: string;
  airline: string;
  packageSlug: string;
  seatsLeft: number;
  priceFrom: number;
  label?: string;
}

export interface Review {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  packageName: string;
  travelledWith: string;
  consultant?: string;
  source: "Google" | "WhatsApp" | "In person";
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  icon: string;
  items: FaqItem[];
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  image: string;
  category: string;
  publishedOn: string;
  updatedOn: string;
  sections: GuideSection[];
}

export interface ZiyaratSite {
  id: string;
  city: HotelCity;
  name: string;
  blurb: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  languages: string[];
}

export interface PaymentMethod {
  id: string;
  name: string;
  detail: string;
  icon: string;
}

export interface OfficialAccount {
  bank: string;
  title: string;
  accountNumber: string;
  iban: string;
}

export interface VisaDocument {
  id: string;
  label: string;
  detail: string;
  required: boolean;
}

export interface VisaStage {
  id: string;
  title: string;
  detail: string;
}
