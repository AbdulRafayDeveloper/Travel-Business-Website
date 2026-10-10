"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { PackageCard } from "@/components/cards/PackageCard";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Select } from "@/components/ui/Field";
import { siteConfig, whatsappUrl } from "@/config/site";
import { getHotel } from "@/data/hotels";
import type { PackageTier, RoomType, UmrahPackage } from "@/types";
import { cn, formatDistance, formatPkr, roomLabels, tierLabels } from "@/lib/utils";

interface PackagesExplorerProps {
  packages: UmrahPackage[];
}

type SortKey = "price-asc" | "price-desc" | "nights-asc" | "nights-desc";
type DurationBand = "all" | "short" | "medium" | "long";

const tierFilters: Array<{ value: PackageTier | "all"; label: string }> = [
  { value: "all", label: "All categories" },
  { value: "economy", label: "Economy 3★" },
  { value: "standard", label: "Standard 4★" },
  { value: "premium", label: "Premium 5★" },
  { value: "vip", label: "VIP 5★" },
];

const durationFilters: Array<{ value: DurationBand; label: string }> = [
  { value: "all", label: "Any length" },
  { value: "short", label: "Up to 10 nights" },
  { value: "medium", label: "11 – 15 nights" },
  { value: "long", label: "16+ nights" },
];

const MAX_COMPARE = 3;

function inBand(nights: number, band: DurationBand): boolean {
  if (band === "short") return nights <= 10;
  if (band === "medium") return nights >= 11 && nights <= 15;
  if (band === "long") return nights >= 16;
  return true;
}

/** Filterable, sortable catalogue with a side-by-side compare drawer (up to three packages). */
export function PackagesExplorer({ packages }: PackagesExplorerProps) {
  const [tier, setTier] = useState<PackageTier | "all">("all");
  const [duration, setDuration] = useState<DurationBand>("all");
  const [city, setCity] = useState<string>("all");
  const [room, setRoom] = useState<RoomType>("quad");
  const [sort, setSort] = useState<SortKey>("price-asc");
  const [compare, setCompare] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const results = useMemo(() => {
    const filtered = packages.filter((p) => (tier === "all" || p.tier === tier) && inBand(p.nights, duration) && (city === "all" || p.departureCities.includes(city)));
    return filtered.sort((a, b) => {
      if (sort === "price-asc") return a.prices[room] - b.prices[room];
      if (sort === "price-desc") return b.prices[room] - a.prices[room];
      if (sort === "nights-asc") return a.nights - b.nights;
      return b.nights - a.nights;
    });
  }, [packages, tier, duration, city, room, sort]);

  const compared = compare.map((slug) => packages.find((p) => p.slug === slug)).filter((p): p is UmrahPackage => Boolean(p));

  const toggleCompare = (slug: string) => {
    setCompare((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length >= MAX_COMPARE ? prev : [...prev, slug]));
  };

  const reset = () => {
    setTier("all");
    setDuration("all");
    setCity("all");
  };

  return (
    <div>
      {/* Filter bar */}
      <div className="-mx-4 border-b border-line bg-ivory/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 md:-mx-margin-desktop md:px-margin-desktop lg:sticky lg:top-[112px] lg:z-30">
        <div className="mx-auto flex max-w-container-max flex-wrap items-center gap-2">
          <div className="no-scrollbar -mx-4 flex gap-1.5 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="group" aria-label="Hotel category">
            {tierFilters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setTier(f.value)}
                aria-pressed={tier === f.value}
                className={cn("whitespace-nowrap rounded-full border px-3.5 py-1.5 text-sm font-semibold transition-colors cursor-pointer", tier === f.value ? "border-haram bg-haram text-white" : "border-line bg-white text-ink hover:border-haram")}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid w-full grid-cols-2 gap-2 sm:ms-auto sm:flex sm:w-auto sm:flex-wrap sm:items-center">
            <Select aria-label="Duration" value={duration} onChange={(e) => setDuration(e.target.value as DurationBand)} className="!w-full !py-1.5 text-sm sm:!w-auto">
              {durationFilters.map((f) => (
                <option key={f.value} value={f.value}>{f.label}</option>
              ))}
            </Select>
            <Select aria-label="Departure city" value={city} onChange={(e) => setCity(e.target.value)} className="!w-full !py-1.5 text-sm sm:!w-auto">
              <option value="all">Any city</option>
              {siteConfig.departureCities.map((c) => (
                <option key={c} value={c}>From {c}</option>
              ))}
            </Select>
            <Select aria-label="Room type for sorting" value={room} onChange={(e) => setRoom(e.target.value as RoomType)} className="!w-full !py-1.5 text-sm sm:!w-auto">
              {(Object.keys(roomLabels) as RoomType[]).map((r) => (
                <option key={r} value={r}>{roomLabels[r]}</option>
              ))}
            </Select>
            <Select aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value as SortKey)} className="!w-full !py-1.5 text-sm sm:!w-auto">
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="nights-asc">Nights: fewest first</option>
              <option value="nights-desc">Nights: most first</option>
            </Select>
          </div>
        </div>
      </div>

      {/* Result meta */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate">
        <p aria-live="polite">
          <span className="font-bold text-ink">{results.length}</span> of {packages.length} packages · prices per person, {roomLabels[room].toLowerCase()}
        </p>
        <p className="flex items-center gap-1.5"><Icon name="compare_arrows" className="text-[18px] text-haram" /> Tick up to {MAX_COMPARE} packages to compare side by side</p>
      </div>

      {results.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-line p-10 text-center">
          <p className="font-display text-2xl text-haram-deep">No package matches those filters yet.</p>
          <p className="mt-2 text-slate">We build custom itineraries every day. Tell us your dates and city and we will quote within hours.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Button variant="outline" onClick={reset} icon="restart_alt" iconPosition="start">Clear filters</Button>
            <Link href="/plan-your-umrah" className="inline-flex items-center gap-2 rounded-lg bg-haram px-5 py-3 font-bold text-white hover:bg-haram-deep">Request a custom quote</Link>
          </div>
        </div>
      ) : (
        <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((pkg) => {
            const checked = compare.includes(pkg.slug);
            const disabled = !checked && compare.length >= MAX_COMPARE;
            return (
              <li key={pkg.slug} className="relative">
                <label className={cn("absolute end-3 top-3 z-10 flex cursor-pointer items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1.5 text-xs font-bold shadow-card", checked ? "text-haram" : "text-ink", disabled && "cursor-not-allowed opacity-60")}>
                  <input type="checkbox" className="h-4 w-4 accent-haram" checked={checked} disabled={disabled} onChange={() => toggleCompare(pkg.slug)} aria-label={`Compare ${pkg.name}`} />
                  Compare
                </label>
                <PackageCard pkg={pkg} className="h-full" />
              </li>
            );
          })}
        </ul>
      )}

      {/* Compare tray */}
      {compare.length > 0 && (
        <div className="fixed inset-x-0 bottom-[72px] z-50 lg:bottom-0" role="region" aria-label="Compare packages">
          {/* Right padding on desktop keeps the tray clear of the floating WhatsApp pill */}
          <div className="mx-auto max-w-container-max px-4 pb-3 sm:px-6 md:px-margin-desktop lg:pe-80">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-night p-3 text-white shadow-soft">
              <p className="text-sm">
                <span className="font-bold text-gold-pale">{compare.length}</span> selected: {compared.map((p) => p.shortName).join(" · ")}
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="!text-white hover:!bg-white/10" onClick={() => setCompare([])}>Clear</Button>
                <Button size="sm" variant="gold" icon="compare_arrows" iconPosition="start" onClick={() => setDrawerOpen(true)} disabled={compare.length < 2}>
                  Compare {compare.length}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compare drawer */}
      {drawerOpen && compared.length >= 2 && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center lg:items-center" role="dialog" aria-modal="true" aria-labelledby="compare-title">
          <button type="button" aria-label="Close comparison" className="absolute inset-0 bg-night/70 backdrop-blur-sm" onClick={() => setDrawerOpen(false)} />
          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-auto rounded-t-2xl bg-ivory p-5 shadow-2xl lg:rounded-2xl lg:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow text-gold-deep">Side by side</p>
                <h2 id="compare-title" className="display-title text-3xl text-haram-deep">Compare packages</h2>
              </div>
              <button type="button" onClick={() => setDrawerOpen(false)} aria-label="Close" className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-sand cursor-pointer"><Icon name="close" className="text-[26px]" /></button>
            </div>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-haram text-start">
                    <th scope="col" className="py-3 pe-4 text-start text-xs font-bold uppercase tracking-wider text-slate">Feature</th>
                    {compared.map((p) => (
                      <th key={p.slug} scope="col" className="py-3 pe-4 text-start font-display text-lg font-semibold text-haram-deep">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {([
                    ["Category", (p: UmrahPackage) => `${tierLabels[p.tier]} · ${p.stars}★ hotels`],
                    ["Nights", (p: UmrahPackage) => `${p.nights} nights (${p.makkah.nights} Makkah + ${p.madinah.nights} Madinah)`],
                    ["Makkah hotel", (p: UmrahPackage) => { const h = getHotel(p.makkah.hotelId); return `${h.name} · ${h.shuttle ? "shuttle" : formatDistance(h.distanceM)}`; }],
                    ["Madinah hotel", (p: UmrahPackage) => { const h = getHotel(p.madinah.hotelId); return `${h.name} · ${formatDistance(h.distanceM)}`; }],
                    ["Meals", (p: UmrahPackage) => p.meals],
                    ["Transport", (p: UmrahPackage) => p.transport],
                    ["Airlines", (p: UmrahPackage) => p.airlines.join(", ")],
                    ["Departure cities", (p: UmrahPackage) => p.departureCities.join(", ")],
                    ["Quad / person", (p: UmrahPackage) => formatPkr(p.prices.quad)],
                    ["Triple / person", (p: UmrahPackage) => formatPkr(p.prices.triple)],
                    ["Double / person", (p: UmrahPackage) => formatPkr(p.prices.double)],
                    ["Best for", (p: UmrahPackage) => p.bestFor],
                  ] as Array<[string, (p: UmrahPackage) => string]>).map(([label, read]) => (
                    <tr key={label}>
                      <th scope="row" className="py-3 pe-4 text-start align-top font-semibold text-ink">{label}</th>
                      {compared.map((p) => (
                        <td key={p.slug} className={cn("py-3 pe-4 align-top text-slate", label.includes("/ person") && "font-display text-base font-semibold text-haram-deep")}>{read(p)}</td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th scope="row" className="py-4 pe-4 text-start font-semibold text-ink">Next step</th>
                    {compared.map((p) => (
                      <td key={p.slug} className="py-4 pe-4">
                        <div className="flex flex-col gap-2">
                          <Link href={`/umrah-packages/${p.slug}`} className="inline-flex items-center justify-center gap-1 rounded-lg bg-haram px-3 py-2 text-xs font-bold text-white hover:bg-haram-deep">Details <Icon name="arrow_forward" className="text-[16px]" /></Link>
                          <a href={whatsappUrl(`Assalam o Alaikum, I compared packages and I am interested in ${p.name}. Please share availability.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg bg-whatsapp px-3 py-2 text-xs font-bold text-white hover:bg-whatsapp-deep">WhatsApp</a>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
