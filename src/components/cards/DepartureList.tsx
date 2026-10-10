import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/config/site";
import { getPackage } from "@/data/packages";
import type { Departure } from "@/types";
import { cn, formatPkr } from "@/lib/utils";

interface DepartureListProps {
  departures: Departure[];
  showPackage?: boolean;
  className?: string;
}

function DateStamp({ iso }: { iso: string }) {
  const d = new Date(`${iso}T00:00:00`);
  const day = d.toLocaleDateString("en-GB", { day: "2-digit" });
  const month = d.toLocaleDateString("en-GB", { month: "short" });
  const weekday = d.toLocaleDateString("en-GB", { weekday: "short" });
  return (
    <time dateTime={iso} className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-haram text-white">
      <span className="font-display text-2xl font-semibold leading-none">{day}</span>
      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-gold-pale">{month} · {weekday}</span>
    </time>
  );
}

/** Boarding-pass style rows for group departures. */
export function DepartureList({ departures, showPackage = true, className }: DepartureListProps) {
  return (
    <ul className={cn("divide-y divide-line", className)}>
      {departures.map((d) => {
        const pkg = getPackage(d.packageSlug);
        const urgent = d.seatsLeft <= 5;
        return (
          <li key={d.id} className="flex flex-wrap items-center gap-4 py-4 sm:flex-nowrap">
            <DateStamp iso={d.date} />
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-x-2 font-bold text-ink">
                <span>{d.from}</span>
                <Icon name="flight_takeoff" className="text-[18px] text-gold-deep" />
                <span>Jeddah / Madinah</span>
                {d.label && <span className="rounded-md bg-gold-pale px-2 py-0.5 text-xs font-semibold text-gold-deep">{d.label}</span>}
              </p>
              <p className="mt-0.5 text-sm text-slate">
                {d.airline}
                {showPackage && pkg && (
                  <>
                    {" · "}
                    <Link href={`/umrah-packages/${pkg.slug}`} className="font-semibold text-haram hover:underline">{pkg.shortName}</Link>
                  </>
                )}
              </p>
            </div>
            <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:flex-col sm:items-end sm:gap-1">
              <p className="text-sm">
                <span className="text-slate">from </span>
                <span className="font-display text-lg font-semibold text-haram-deep">{formatPkr(d.priceFrom)}</span>
              </p>
              <p className={cn("flex items-center gap-1 text-xs font-bold", urgent ? "text-sunset" : "text-haram")}>
                <Icon name={urgent ? "local_fire_department" : "event_seat"} className="text-[15px]" />
                {d.seatsLeft} seats left
              </p>
            </div>
            <a
              href={whatsappUrl(`Assalam o Alaikum, I want to reserve seats on the ${d.date} departure from ${d.from} (${pkg?.shortName ?? d.packageSlug}).`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-haram px-3 py-2 text-sm font-bold text-haram hover:bg-haram hover:text-white sm:w-auto"
            >
              Reserve <Icon name="arrow_forward" className="text-[16px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
