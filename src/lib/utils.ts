import type { PackageTier, RoomType } from "@/types";

/** Join class names, skipping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

const pkrFormatter = new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 });

/** "PKR 1,85,000" style is unfamiliar online; use plain thousands grouping. */
export function formatPkr(amount: number, withCurrency = true): string {
  const grouped = pkrFormatter.format(amount).replace(/,/g, ",");
  return withCurrency ? `PKR ${grouped}` : grouped;
}

export function formatDistance(metres: number): string {
  return metres >= 1000 ? `${(metres / 1000).toFixed(1).replace(/\.0$/, "")} km` : `${metres} m`;
}

const dateFormatter = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" });
const monthFormatter = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric" });

export function formatDate(iso: string): string {
  return dateFormatter.format(new Date(`${iso}T00:00:00`));
}

export function formatMonth(iso: string): string {
  return monthFormatter.format(new Date(`${iso}T00:00:00`));
}

export const tierLabels: Record<PackageTier, string> = {
  economy: "Economy",
  standard: "Standard",
  premium: "Premium",
  vip: "VIP",
};

export const roomLabels: Record<RoomType, string> = {
  quad: "Quad sharing",
  triple: "Triple sharing",
  double: "Double sharing",
};

export const roomShortLabels: Record<RoomType, string> = {
  quad: "Quad",
  triple: "Triple",
  double: "Double",
};

export function nightsToDays(nights: number): string {
  return `${nights} Nights · ${nights + 1} Days`;
}

export function pluralise(count: number, singular: string, plural = `${singular}s`): string {
  return `${count} ${count === 1 ? singular : plural}`;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
