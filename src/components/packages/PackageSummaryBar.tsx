import { Icon } from "@/components/ui/Icon";
import type { UmrahPackage } from "@/types";
import { tierLabels } from "@/lib/utils";

interface PackageSummaryBarProps {
  pkg: UmrahPackage;
}

/** Key facts as a ruled, scrollable ledger strip under the hero. */
export function PackageSummaryBar({ pkg }: PackageSummaryBarProps) {
  const facts = [
    { icon: "nights_stay", label: "Duration", value: `${pkg.nights} nights · ${pkg.nights + 1} days` },
    { icon: "hotel", label: "Hotels", value: `${tierLabels[pkg.tier]} · ${pkg.stars}-star` },
    { icon: "restaurant", label: "Meals", value: pkg.meals },
    { icon: "flight", label: "Airlines", value: pkg.airlines.join(" / ") },
    { icon: "location_city", label: "Departures", value: pkg.departureCities.join(", ") },
    { icon: "badge", label: "Visa", value: pkg.visaIncluded ? "Included" : "Not included" },
    { icon: "tour", label: "Ziyarat", value: pkg.ziyaratIncluded ? "Both cities" : "Optional" },
  ];
  return (
    <div className="border-y border-line bg-sand">
      <dl className="no-scrollbar mx-auto flex max-w-container-max gap-0 overflow-x-auto px-4 sm:px-6 md:px-margin-desktop">
        {facts.map((f) => (
          <div key={f.label} className="min-w-[170px] shrink-0 border-e border-line py-4 pe-5 last:border-e-0 last:pe-0 ps-0 [&:not(:first-child)]:ps-5">
            <dt className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate">
              <Icon name={f.icon} className="text-[20px] text-haram" />
              {f.label}
            </dt>
            <dd className="ps-7 text-sm font-semibold text-ink">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
