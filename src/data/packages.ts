import type { PackageTier, UmrahPackage } from "@/types";
import { siteConfig } from "@/config/site";

const IMG = "/images/umrah";
const UPDATED = siteConfig.pricesUpdatedOn;

const standardInclusions = [
  "Umrah visa processing through a Saudi licensed operator",
  "Return economy air ticket from the departure city you choose",
  "Hotel stay in Makkah and Madinah as listed, with the nights per city shown above",
  "Air conditioned transfers from Jeddah airport to Makkah, Makkah to Madinah, and Madinah to the airport",
  "Guided ziyarat of the historic sites in Makkah and Madinah",
  "An Umrah training session before you leave, in person or online, plus a printed guide",
  "A Raahi consultant on WhatsApp at any hour during your trip",
  "The Saudi medical insurance that comes with the visa",
];

const standardExclusions = [
  "Meals, unless the package says they are included. Most hotels sell breakfast separately",
  "Personal spending, shopping, laundry and your phone SIM",
  "Qurbani or Dam, or any other religious compensation",
  "Extra nights or room upgrades outside the package",
  "Wheelchair hire inside the Haram, which you can arrange at the Haram itself",
  "Any new tax or fee the Saudi authorities introduce after you book",
];

function itineraryFor(makkahNights: number, madinahNights: number, madinahFirst = false) {
  const days = [];
  let day = 1;
  const makkahBlock = () => {
    days.push({
      day,
      title: day === 1 ? "Leave Pakistan and arrive in Jeddah" : "Travel to Makkah",
      detail:
        day === 1
          ? "Meet your Raahi representative at the airport. Fly to Jeddah, clear immigration and travel by private coach to your Makkah hotel. Check in, rest for a while, then perform your first Umrah with your group leader."
          : "Travel by coach to Makkah. The drive takes around five hours with a rest stop. Check in and perform Umrah with the group leader. The evening is free for Tawaf and prayers.",
    });
    day += 1;
    for (let i = 1; i < makkahNights; i += 1) {
      days.push({
        day,
        title: i === 1 ? "Makkah: prayers in Masjid al-Haram" : i === 2 ? "Makkah: ziyarat tour" : "Makkah: worship at your own pace",
        detail:
          i === 1
            ? "Spend the day in Masjid al-Haram. Our team tells you the best times for Tawaf and where to find Zamzam, wheelchairs and the ladies' sections."
            : i === 2
              ? "A half day guided ziyarat: Jabal al-Nour, Jabal Thawr, Mina, Muzdalifah, Arafat and Masjid Aisha, where you can enter ihram for a second Umrah if you wish."
              : "A free day for worship. You can perform a second Umrah from Masjid Aisha. Just ask your consultant and we arrange the transport.",
      });
      day += 1;
    }
  };
  const madinahBlock = () => {
    days.push({
      day,
      title: madinahFirst && day === 1 ? "Leave Pakistan and arrive in Madinah" : "Travel to Madinah",
      detail:
        madinahFirst && day === 1
          ? "Fly straight to Madinah. Meet our representative, transfer to your hotel near Masjid an-Nabawi and pray in the Prophet's Mosque the same evening."
          : "Travel by private coach to Madinah. The drive takes around five hours. Check in near Masjid an-Nabawi and join Maghrib and Isha in the Prophet's Mosque.",
    });
    day += 1;
    for (let i = 1; i < madinahNights; i += 1) {
      days.push({
        day,
        title: i === 1 ? "Madinah: Riyadh ul-Jannah and ziyarat" : "Madinah: prayers and quiet time",
        detail:
          i === 1
            ? "Guided ziyarat of Masjid Quba, Masjid Qiblatain, Mount Uhud and the Seven Mosques. Our team shows you how to book Riyadh ul-Jannah slots in the Nusuk app."
            : "A free day for prayers in Masjid an-Nabawi, a visit to Jannat al-Baqi and a trip to the Madinah date market.",
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
    title: "Fly home to Pakistan",
    detail: "Check out after Fajr and travel to the airport with your Raahi representative. Your consultant checks that you have arrived home safely.",
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
    transport: "Shared air conditioned coach for all transfers, plus a free hotel shuttle to the Haram in Makkah",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 165000, triple: 185000, double: 215000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/tawaf.jpg`,
    highlights: ["Our lowest price, with everything essential included", "Free shuttle in Makkah around the clock", "Walking distance in Madinah", "A good fit for first time pilgrims on a budget"],
    itinerary: itineraryFor(5, 5),
    inclusions: standardInclusions,
    exclusions: standardExclusions,
    tags: ["budget", "first-time"],
    featured: true,
    bestFor: "You want the essentials done properly at the lowest honest price.",
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
    transport: "Private air conditioned coach for all transfers, plus a hotel shuttle in Makkah around the clock",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 215000, triple: 245000, double: 295000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/packages-hero.jpg`,
    highlights: ["Breakfast included every day", "Four star comfort at a sensible price", "200 metres from Masjid an-Nabawi", "The package most of our families choose"],
    itinerary: itineraryFor(6, 6),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels"],
    exclusions: standardExclusions,
    tags: ["popular", "families"],
    featured: true,
    bestFor: "You want comfort and breakfast without paying five star prices.",
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
    transport: "Private GMC or Hiace transfers for your family only",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 345000, triple: 395000, double: 495000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/makkah-night.jpg`,
    highlights: ["A hotel inside the Clock Tower, steps from the Haram", "A hotel facing the Haram in Madinah", "Private transport for your family", "Priority check in and late checkout where the hotel allows it"],
    itinerary: itineraryFor(5, 5),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels", "Private vehicle transfers"],
    exclusions: standardExclusions,
    tags: ["luxury", "elderly-friendly"],
    featured: true,
    bestFor: "You want to be a minute's walk from both Harams, especially if elderly parents are travelling with you.",
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
    transport: "Private luxury vehicle, with someone to meet you at every point",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 395000, triple: 445000, double: 545000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/madinah-night.jpg`,
    highlights: ["A short, comfortable trip for people with limited leave", "The Clock Tower complex in Makkah", "Direct courtyard access in Madinah", "Fast track help at the airports"],
    itinerary: itineraryFor(4, 3),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels", "Private luxury transfers", "A Raahi escort for airport formalities"],
    exclusions: standardExclusions,
    tags: ["luxury", "short-trip"],
    featured: false,
    bestFor: "You have a week of leave and still want the best hotels.",
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
    transport: "Private coach, with easy boarding for strollers and wheelchairs",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 285000, triple: 320000, double: 385000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/family-travel.jpg`,
    highlights: ["Connecting and quad rooms for families", "Walking distance in both cities", "Child discounts and infant fares", "A relaxed pace with free days built in"],
    itinerary: itineraryFor(8, 6),
    inclusions: [...standardInclusions, "Daily breakfast buffet in both hotels", "A discount of PKR 25,000 for each child aged 2 to 11 sharing the parents' room"],
    exclusions: standardExclusions,
    tags: ["families", "popular"],
    featured: true,
    bestFor: "You are travelling with children or elderly parents and want walkable hotels and a gentle pace.",
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
    transport: "Private coach, plus a Makkah shuttle around the clock with extra runs for Taraweeh",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 465000, triple: 525000, double: 625000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/haram-interior.jpg`,
    highlights: ["The last ten nights of Ramadan in Makkah", "Sehri and Iftar included", "Eid prayer in Masjid an-Nabawi", "Limited seats, so we confirm early"],
    itinerary: itineraryFor(9, 6),
    inclusions: [...standardInclusions, "Daily Sehri and Iftar buffets", "Extra shuttle runs for Taraweeh and Tahajjud"],
    exclusions: standardExclusions,
    tags: ["ramadan", "limited"],
    seatsLeft: 14,
    featured: true,
    bestFor: "You want to spend the last Ashra in Makkah with meals and transport taken care of.",
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
    transport: "Shared air conditioned coach for all transfers",
    visaIncluded: true,
    ziyaratIncluded: true,
    prices: { quad: 245000, triple: 275000, double: 325000 },
    pricesUpdatedOn: UPDATED,
    image: `${IMG}/ihram.jpg`,
    highlights: ["Twenty nights for an unhurried Umrah", "Walkable hotels in both cities", "The best value per night", "Popular with retired couples"],
    itinerary: itineraryFor(12, 8),
    inclusions: standardInclusions,
    exclusions: standardExclusions,
    tags: ["budget", "long-stay", "elderly-friendly"],
    featured: false,
    bestFor: "You want a longer, slower stay close to both Harams, as many retired couples and groups do.",
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
    highlights: ["Departures in the December school holidays", "A hotel opposite King Fahd Gate", "Pleasant winter weather", "Madinah first, for a gentle start"],
    itinerary: itineraryFor(7, 5, true),
    inclusions: [...standardInclusions, "Daily breakfast in Madinah"],
    exclusions: standardExclusions,
    tags: ["winter", "families"],
    featured: false,
    bestFor: "You are travelling in the December holidays and want cool weather and walkable hotels.",
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
