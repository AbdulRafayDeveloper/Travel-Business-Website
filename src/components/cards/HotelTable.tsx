import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
import { whatsappUrl } from "@/config/site";
import type { Hotel } from "@/types";
import { cn, formatDistance, formatPkr } from "@/lib/utils";

interface HotelTableProps {
  hotels: Hotel[];
  city: Hotel["city"];
  compact?: boolean;
  className?: string;
}

/** Ledger-style hotel table: name, distance, meals, nightly price. Rows, not boxes. */
export function HotelTable({ hotels, city, compact = false, className }: HotelTableProps) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="mb-3 flex items-baseline justify-between border-b-2 border-haram pb-2">
        <h3 className="font-display text-2xl font-semibold text-haram-deep">{city}</h3>
        <span className="text-xs font-semibold uppercase tracking-wider text-slate">{hotels.length} hotels · per night, double room</span>
      </div>
      <ul className="divide-y divide-line">
        {hotels.map((h) => (
          <li key={h.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3 sm:gap-4">
            {!compact && (
              <div className="relative hidden h-14 w-20 overflow-hidden rounded-md sm:block">
                <Image src={h.image} alt={h.name} fill sizes="80px" className="object-cover" />
              </div>
            )}
            <div className={cn(compact && "col-start-1")}>
              <p className="flex flex-wrap items-center gap-x-2 font-semibold text-ink">
                {h.name}
                <Stars value={h.stars} />
              </p>
              <p className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate">
                <span className="flex items-center gap-1"><Icon name="directions_walk" className="text-[15px]" />{formatDistance(h.distanceM)} · {h.walkMinutes} min</span>
                {h.shuttle && <span className="flex items-center gap-1 text-haram"><Icon name="directions_bus" className="text-[15px]" />Free shuttle</span>}
                <span className="flex items-center gap-1"><Icon name="restaurant" className="text-[15px]" />{h.meals}</span>
              </p>
            </div>
            <div className="text-end">
              <p className="font-display text-lg font-semibold leading-none text-haram-deep sm:text-xl">{formatPkr(h.nightlyPkr)}</p>
              <a href={whatsappUrl(`Assalam o Alaikum, please quote ${h.name} (${h.city}) for my dates.`)} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-haram hover:underline">
                Ask for dates <Icon name="arrow_forward" className="text-[14px]" />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
