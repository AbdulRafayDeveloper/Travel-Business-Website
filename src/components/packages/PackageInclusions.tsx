import { Icon } from "@/components/ui/Icon";

interface PackageInclusionsProps {
  inclusions: string[];
  exclusions: string[];
}

/** Two ruled columns: included (green ticks) and not included (grey dashes). */
export function PackageInclusions({ inclusions, exclusions }: PackageInclusionsProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <p className="eyebrow border-b-2 border-haram pb-2 text-haram">Included in the price</p>
        <ul className="divide-y divide-line">
          {inclusions.map((i) => (
            <li key={i} className="flex items-start gap-2.5 py-2.5 text-sm text-ink"><Icon name="check_circle" filled className="mt-0.5 shrink-0 text-[18px] text-haram" />{i}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="eyebrow border-b-2 border-line pb-2 text-slate">Not included</p>
        <ul className="divide-y divide-line">
          {exclusions.map((e) => (
            <li key={e} className="flex items-start gap-2.5 py-2.5 text-sm text-slate"><Icon name="remove_circle_outline" className="mt-0.5 shrink-0 text-[18px]" />{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
