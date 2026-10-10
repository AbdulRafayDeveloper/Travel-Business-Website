import type { ItineraryDay } from "@/types";

interface PackageItineraryProps {
  days: ItineraryDay[];
}

/** Day-by-day timeline on a dotted vertical rail. */
export function PackageItinerary({ days }: PackageItineraryProps) {
  return (
    <ol className="relative ms-3 border-s-2 border-dotted border-gold/60 ps-8">
      {days.map((d) => (
        <li key={d.day} className="relative pb-7 last:pb-0">
          <span className="absolute -start-[2.55rem] flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold bg-ivory font-display text-sm font-semibold text-haram-deep">{d.day}</span>
          <p className="eyebrow text-gold-deep">Day {d.day}</p>
          <h3 className="mt-0.5 font-bold text-ink">{d.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate">{d.detail}</p>
        </li>
      ))}
    </ol>
  );
}
