import type { Departure } from "@/types";

export const departures: Departure[] = [
  { id: "d1", date: "2026-10-24", from: "Lahore", airline: "Airblue", packageSlug: "economy-umrah-10-nights", seatsLeft: 9, priceFrom: 165000 },
  { id: "d2", date: "2026-10-28", from: "Karachi", airline: "Saudia", packageSlug: "standard-umrah-12-nights", seatsLeft: 6, priceFrom: 215000 },
  { id: "d3", date: "2026-11-05", from: "Islamabad", airline: "PIA", packageSlug: "family-umrah-14-nights", seatsLeft: 12, priceFrom: 285000 },
  { id: "d4", date: "2026-11-12", from: "Lahore", airline: "Saudia", packageSlug: "premium-umrah-10-nights", seatsLeft: 4, priceFrom: 345000 },
  { id: "d5", date: "2026-11-19", from: "Sialkot", airline: "Airblue", packageSlug: "standard-umrah-12-nights", seatsLeft: 10, priceFrom: 215000 },
  { id: "d6", date: "2026-11-26", from: "Karachi", airline: "flyJinnah", packageSlug: "economy-umrah-20-nights", seatsLeft: 15, priceFrom: 245000 },
  { id: "d7", date: "2026-12-03", from: "Lahore", airline: "Qatar Airways", packageSlug: "vip-umrah-7-nights", seatsLeft: 5, priceFrom: 395000 },
  { id: "d8", date: "2026-12-18", from: "Lahore", airline: "Saudia", packageSlug: "winter-holidays-umrah-12-nights", seatsLeft: 18, priceFrom: 235000, label: "School holidays" },
  { id: "d9", date: "2026-12-20", from: "Karachi", airline: "flynas", packageSlug: "winter-holidays-umrah-12-nights", seatsLeft: 11, priceFrom: 235000, label: "School holidays" },
  { id: "d10", date: "2026-12-22", from: "Islamabad", airline: "Air Arabia", packageSlug: "winter-holidays-umrah-12-nights", seatsLeft: 8, priceFrom: 235000, label: "School holidays" },
  { id: "d11", date: "2027-01-14", from: "Lahore", airline: "PIA", packageSlug: "economy-umrah-10-nights", seatsLeft: 20, priceFrom: 165000 },
  { id: "d12", date: "2027-01-28", from: "Multan", airline: "Airblue", packageSlug: "economy-umrah-20-nights", seatsLeft: 16, priceFrom: 245000 },
  { id: "d13", date: "2027-02-11", from: "Karachi", airline: "Saudia", packageSlug: "premium-umrah-10-nights", seatsLeft: 7, priceFrom: 345000 },
  { id: "d14", date: "2027-02-22", from: "Islamabad", airline: "Saudia", packageSlug: "family-umrah-14-nights", seatsLeft: 14, priceFrom: 285000 },
  { id: "d15", date: "2027-02-24", from: "Lahore", airline: "Saudia", packageSlug: "ramadan-umrah-15-nights", seatsLeft: 6, priceFrom: 465000, label: "Ramadan last Ashra" },
  { id: "d16", date: "2027-02-24", from: "Karachi", airline: "PIA", packageSlug: "ramadan-umrah-15-nights", seatsLeft: 5, priceFrom: 465000, label: "Ramadan last Ashra" },
  { id: "d17", date: "2027-02-25", from: "Islamabad", airline: "Saudia", packageSlug: "ramadan-umrah-15-nights", seatsLeft: 3, priceFrom: 465000, label: "Ramadan last Ashra" },
];

export function departuresForPackage(slug: string): Departure[] {
  return departures.filter((d) => d.packageSlug === slug);
}

export function upcomingDepartures(limit?: number): Departure[] {
  const sorted = [...departures].sort((a, b) => a.date.localeCompare(b.date));
  return limit ? sorted.slice(0, limit) : sorted;
}

/** Group departures by "YYYY-MM" for month tabs. */
export function departuresByMonth(): Array<{ month: string; items: Departure[] }> {
  const map = new Map<string, Departure[]>();
  for (const d of upcomingDepartures()) {
    const key = d.date.slice(0, 7);
    map.set(key, [...(map.get(key) ?? []), d]);
  }
  return [...map.entries()].map(([month, items]) => ({ month: `${month}-01`, items }));
}
