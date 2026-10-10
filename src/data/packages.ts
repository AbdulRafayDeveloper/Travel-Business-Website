import type { PackageTier, UmrahPackage } from "@/types";
import { siteConfig } from "@/config/site";

const IMG = "/images/umrah";
const UPDATED = siteConfig.pricesUpdatedOn;

const standardInclusions = [
  "Umrah visa processing through a Saudi-licensed operator",
  "Return economy air ticket from your chosen departure city",
  "Hotel stay in Makkah and Madinah as listed (nights per city shown above)",
  "Air-conditioned transfers: Jeddah airport → Makkah → Madinah → Madinah/Jeddah airport",
  "Ziyarat of historic sites in Makkah and Madinah with a guide",
  "Pre-departure Umrah training session (in person or online) and printed guide",
  "Raahi consultant on WhatsApp 24/7 during your trip",
  "Mandatory Saudi medical insurance linked to the visa",
];

const standardExclusions = [
  "Meals unless stated in the package (most hotels sell breakfast separately)",
  "Personal expenses, shopping, laundry and phone/SIM",
  "Qurbani / Dam or any religious compensation",
  "Extra nights or room upgrades outside the package",
  "Wheelchair hire inside the Haram (available on request at the Haram)",
  "Any new tax or fee introduced by Saudi authorities after booking",
];

function itineraryFor(makkahNights: number, madinahNights: number, madinahFirst = false) {
  const days = [];
  let day = 1;
  const makkahBlock = () => {
    days.push({
      day,
      title: day === 1 ? "Departure from Pakistan · Arrival in Jeddah" : "Transfer to Makkah",
      detail:
        day === 1
          ? "Meet your Raahi representative at the airport. Fly to Jeddah, complete immigration, and travel by private coach to your Makkah hotel. Check in, rest, then perform your first Umrah with your group leader."
          : "Travel by coach to Makkah (around 5 hours with a rest stop). Check in and perform Umrah with the group leader. Evening free for Tawaf and prayers.",
    });
    day += 1;
    for (let i = 1; i < makkahNights; i += 1) {
      days.push({
        day,
        title: i === 1 ? "Makkah · Prayers in Masjid al-Haram" : i === 2 ? "Makkah · Ziyarat tour" : "Makkah · Ibadah at your own pace",
        detail:
          i === 1
            ? "Spend the day in Masjid al-Haram. Our team shares the best times for Tawaf and where to find Zamzam, wheelchairs and ladies' sections."
            : i === 2
              ? "Half-day guided ziyarat: Jabal al-Nour, Jabal Thawr, Mina, Muzdalifah, Arafat and Masjid Aisha (for a second Umrah if you wish)."
              : "Free day for worship. Optional second Umrah from Masjid Aisha; our consultant arranges transport on request.",
      });
      day += 1;
    }
  };
  const madinahBlock = () => {
    days.push({
      day,
      title: madinahFirst && day === 1 ? "Departure from Pakistan · Arrival in Madinah" : "Transfer to Madinah",
      detail:
        madinahFirst && day === 1
          ? "Fly directly to Madinah. Meet our representative, transfer to your hotel near Masjid an-Nabawi and pray in the Prophet's Mosque the same evening."
          : "Private coach to Madinah (around 5 hours). Check in near Masjid an-Nabawi and attend Maghrib and Isha in the Prophet's Mosque.",
    });
    day += 1;
    for (let i = 1; i < madinahNights; i += 1) {
      days.push({
        day,
        title: i === 1 ? "Madinah · Riyadh ul-Jannah & Ziyarat" : "Madinah · Prayers and reflection",
        detail:
          i === 1
            ? "Guided ziyarat: Masjid Quba, Masjid Qiblatain, Mount Uhud and the Seven Mosques. Our team explains how to book Riyadh ul-Jannah slots in the Nusuk app."
            : "Free day for prayers in Masjid an-Nabawi, visiting Jannat al-Baqi and the Madinah date market.",
      });
      day += 1;
    }
  };

  if (madinahFirst) {
    madinahBlock();
    makkahBlock();
  } else {
    makkahBlock();
    madinahBlock();
  }
  days.push({
    day,
    title: "Return flight to Pakistan",
    detail: "Check out after Fajr, transfer to the airport with your Raahi representative and fly home. Your consultant confirms your safe arrival.",
  });
  return days;
}

export const packages: UmrahPackage[] = [
  {
    slug: "economy-umrah-10-nights",
    name: "Economy Umrah · 10 Nights",
    shortName: "Economy 10 Nights",
    nights: 10,
    tier: "economy",
    stars: 3,
    departureCities: ["Lahore", "Karachi", "Islamabad", "Multan"],
    airlines: ["Airblue", "flyJinnah"],
    makkah: { hotelId: "al-kiswah-towers", nights: 5 },
    madinah: { hotelId: "odst-al-madinah", nights: 5 },
    meals: "Room only",
    transport: "Shared air-conditioned coach for all transfers; free hotel shuttle to the Haram in Makkah",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 165000, triple: 185000, double: 215000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/tawaf.jpg`,
    highlights: ["Lowest price with everything essential included", "Free 24/7 shuttle in Makkah", "Walking distance in Madinah", "Ideal for first-time pilgrims on a budget"],
    itinerary: itineraryFor(5, 5),
    inclusions: standardInclusions,
    exclusions: standardExclusions,
    tags: ["budget", "first-time"],
    featured: true,
    bestFor: "Pilgrims who want the essentials done properly at the lowest honest price.",
  },
  {
    slug: "standard-umrah-12-nights",
    name: "Standard Umrah · 12 Nights",
    shortName: "Standard 12 Nights",
    nights: 12,
    tier: "standard",
    stars: 4,
    departureCities: ["Lahore", "Karachi", "Islamabad", "Sialkot", "Peshawar"],
    airlines: ["Saudia", "PIA", "Airblue"],
    makkah: { hotelId: "voco-makkah", nights: 6 },
    madinah: { hotelId: "taiba-front", nights: 6 },
    meals: "Breakfast in both cities",
    transport: "Private air-conditioned coach for all transfers; 24/7 hotel shuttle in Makkah",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 215000, triple: 245000, double: 295000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/packages-hero.jpg`,
    highlights: ["Breakfast included every day", "Four-star comfort at a sensible price", "200 m from Masjid an-Nabawi", "Our most-booked package"],
    itinerary: itineraryFor(6, 6),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels"],
    exclusions: standardExclusions,
    tags: ["popular", "families"],
    featured: true,
    bestFor: "Families and couples who want comfort and breakfast without the five-star price.",
  },
  {
    slug: "premium-umrah-10-nights",
    name: "Premium Umrah · 10 Nights",
    shortName: "Premium 10 Nights",
    nights: 10,
    tier: "premium",
    stars: 5,
    departureCities: ["Lahore", "Karachi", "Islamabad"],
    airlines: ["Saudia", "Qatar Airways"],
    makkah: { hotelId: "swissotel-al-maqam", nights: 5 },
    madinah: { hotelId: "anwar-al-madinah-movenpick", nights: 5 },
    meals: "Breakfast in both cities",
    transport: "Private GMC / Hiace transfers for your family only",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 345000, triple: 395000, double: 495000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/makkah-night.jpg`,
    highlights: ["Hotel inside the Clock Tower, steps from the Haram", "Haram-facing hotel in Madinah", "Private family transport", "Priority check-in and late checkout where available"],
    itinerary: itineraryFor(5, 5),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels", "Private vehicle transfers"],
    exclusions: standardExclusions,
    tags: ["luxury", "elderly-friendly"],
    featured: true,
    bestFor: "Pilgrims who want to be within a minute's walk of both Harams, including elderly parents.",
  },
  {
    slug: "vip-umrah-7-nights",
    name: "VIP Umrah · 7 Nights",
    shortName: "VIP 7 Nights",
    nights: 7,
    tier: "vip",
    stars: 5,
    departureCities: ["Lahore", "Karachi", "Islamabad"],
    airlines: ["Saudia", "Qatar Airways"],
    makkah: { hotelId: "pullman-zamzam-makkah", nights: 4 },
    madinah: { hotelId: "pullman-zamzam-madinah", nights: 3 },
    meals: "Breakfast in both cities",
    transport: "Private luxury vehicle with meet-and-greet at every point",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 395000, triple: 445000, double: 545000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/madinah-night.jpg`,
    highlights: ["Short, high-comfort trip for busy professionals", "Clock Tower complex in Makkah", "Direct courtyard access in Madinah", "Fast-track airport assistance"],
    itinerary: itineraryFor(4, 3),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels", "Private luxury transfers", "Dedicated Raahi escort for airport formalities"],
    exclusions: standardExclusions,
    tags: ["luxury", "short-trip"],
    featured: false,
    bestFor: "Professionals with limited leave who still want the best hotels.",
  },
  {
    slug: "family-umrah-14-nights",
    name: "Family Umrah · 14 Nights",
    shortName: "Family 14 Nights",
    nights: 14,
    tier: "standard",
    stars: 4,
    departureCities: ["Lahore", "Karachi", "Islamabad", "Faisalabad", "Sialkot"],
    airlines: ["Saudia", "PIA"],
    makkah: { hotelId: "anjum-hotel-makkah", nights: 8 },
    madinah: { hotelId: "dar-al-taqwa", nights: 6 },
    meals: "Breakfast in both cities",
    transport: "Private coach; stroller and wheelchair friendly boarding",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 285000, triple: 320000, double: 385000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/family-travel.jpg`,
    highlights: ["Connecting and quad rooms for families", "Walking distance in both cities", "Child discounts and infant fare", "Relaxed pace with free days"],
    itinerary: itineraryFor(8, 6),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels", "Child (2–11) discount of PKR 25,000 per child in parents' room"],
    exclusions: standardExclusions,
    tags: ["families", "popular"],
    featured: true,
    bestFor: "Families with children or elderly parents who want walkable hotels and a relaxed pace.",
  },
  {
    slug: "ramadan-umrah-15-nights",
    name: "Ramadan Last Ashra · 15 Nights",
    shortName: "Ramadan 15 Nights",
    nights: 15,
    tier: "premium",
    stars: 5,
    departureCities: ["Lahore", "Karachi", "Islamabad"],
    airlines: ["Saudia", "PIA"],
    makkah: { hotelId: "le-meridien-towers", nights: 9 },
    madinah: { hotelId: "madinah-hilton", nights: 6 },
    meals: "Sehri and Iftar buffet in both hotels",
    transport: "Private coach; 24/7 shuttle in Makkah with extra Taraweeh runs",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 465000, triple: 525000, double: 625000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/haram-interior.jpg`,
    highlights: ["Last ten nights of Ramadan in Makkah", "Sehri and Iftar included", "Eid prayer in Masjid an-Nabawi", "Limited seats, confirmed early"],
    itinerary: itineraryFor(9, 6),
    inclusions: [...standardInclusions, "Daily Sehri and Iftar buffets", "Extra shuttle runs for Taraweeh and Tahajjud"],
    exclusions: standardExclusions,
    tags: ["ramadan", "limited"],
    seatsLeft: 14,
    featured: true,
    bestFor: "Pilgrims who want the last Ashra in Makkah with meals and transport handled.",
  },
  {
    slug: "economy-umrah-20-nights",
    name: "Long Stay Economy · 20 Nights",
    shortName: "Economy 20 Nights",
    nights: 20,
    tier: "economy",
    stars: 3,
    departureCities: ["Lahore", "Karachi", "Islamabad", "Multan", "Peshawar"],
    airlines: ["PIA", "Airblue"],
    makkah: { hotelId: "dar-al-eiman-grand", nights: 12 },
    madinah: { hotelId: "durrat-al-eiman", nights: 8 },
    meals: "Room only",
    transport: "Shared air-conditioned coach for all transfers",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 245000, triple: 275000, double: 325000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/ihram.jpg`,
    highlights: ["Twenty nights for an unhurried Umrah", "Walkable hotels in both cities", "Best per-night value", "Popular with retired couples"],
    itinerary: itineraryFor(12, 8),
    inclusions: standardInclusions,
    exclusions: standardExclusions,
    tags: ["budget", "long-stay", "elderly-friendly"],
    featured: false,
    bestFor: "Retired couples and groups who want a longer, slower stay close to both Harams.",
  },
  {
    slug: "winter-holidays-umrah-12-nights",
    name: "Winter Holidays Umrah · 12 Nights",
    shortName: "Winter 12 Nights",
    nights: 12,
    tier: "standard",
    stars: 4,
    departureCities: ["Lahore", "Karachi", "Islamabad", "Sialkot"],
    airlines: ["Saudia", "flynas", "Air Arabia"],
    makkah: { hotelId: "elaf-kinda", nights: 7 },
    madinah: { hotelId: "al-aqeeq-madinah", nights: 5 },
    meals: "Breakfast in Madinah",
    transport: "Private coach for all transfers",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 235000, triple: 265000, double: 315000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/madinah-courtyard.jpg`,
    highlights: ["Departures in December school holidays", "Hotel opposite King Fahd Gate", "Pleasant winter weather", "Madinah first for a gentle start"],
    itinerary: itineraryFor(7, 5, true),
    inclusions: [...standardInclusions, "Daily breakfast in Madinah"],
    exclusions: standardExclusions,
    tags: ["winter", "families"],
    featured: false,
    bestFor: "Families travelling in the December holidays who want cool weather and walkable hotels.",
  },
];

export const packagesBySlug: Record<string, UmrahPackage> = Object.fromEntries(packages.map((p) => [p.slug, p]));

export function getPackage(slug: string): UmrahPackage | undefined {
  return packagesBySlug[slug];
}

export const featuredPackages = packages.filter((p) => p.featured);

export const ramadanPackages = packages.filter((p) => p.tags.includes("ramadan"));

export function packagesByTier(tier: PackageTier): UmrahPackage[] {
  return packages.filter((p) => p.tier === tier);
}

export function lowestPrice(pkg: UmrahPackage): number {
  return Math.min(pkg.prices.quad, pkg.prices.triple, pkg.prices.double);
}

export const cheapestPackagePrice = Math.min(...packages.map(lowestPrice));

export function relatedPackages(pkg: UmrahPackage, limit = 3): UmrahPackage[] {
  return packages
    .filter((p) => p.slug !== pkg.slug)
    .sort((a, b) => {
      const scoreA = (a.tier === pkg.tier ? 2 : 0) + (Math.abs(a.nights - pkg.nights) <= 3 ? 1 : 0);
      const scoreB = (b.tier === pkg.tier ? 2 : 0) + (Math.abs(b.nights - pkg.nights) <= 3 ? 1 : 0);
      return scoreB - scoreA;
    })
    .slice(0, limit);
}
