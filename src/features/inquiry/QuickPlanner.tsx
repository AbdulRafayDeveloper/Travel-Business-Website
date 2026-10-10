"use client";

import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Select } from "@/components/ui/Field";
import { siteConfig } from "@/config/site";
import { planHref } from "@/config/navigation";
import { durationOptions, tierOptions } from "@/lib/validation";
import { tierLabels } from "@/lib/utils";

const durationLabel = (d: (typeof durationOptions)[number]) => (d === "custom" ? "Custom" : `${d} nights`);

/** Three-field planner in the hero. Hands off to /plan-your-umrah with the choices prefilled. */
export function QuickPlanner() {
  const router = useRouter();
  const [city, setCity] = useState<string>(siteConfig.departureCities[0]);
  const [duration, setDuration] = useState<string>("12");
  const [tier, setTier] = useState<string>("standard");
  // The planner renders twice on the home page (desktop hero + phone card), so ids must be unique.
  const titleId = useId();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ city, duration, tier });
    router.push(`${planHref}?${params.toString()}`);
  };

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white/95 p-4 shadow-soft backdrop-blur sm:p-5" aria-labelledby={titleId} data-testid="quick-planner">
      <div className="mb-3 flex items-center justify-between">
        <p id={titleId} className="flex items-center gap-2 text-sm font-bold text-haram-deep">
          <Icon name="edit_note" className="text-[20px] text-gold-deep" /> Get a quote in 2 minutes
        </p>
        <span className="hidden text-xs text-slate sm:inline">No payment needed</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <label className="flex flex-col gap-1 text-xs font-bold text-slate">
          Departure city
          <Select value={city} onChange={(e) => setCity(e.target.value)} aria-label="Departure city" className="!py-2.5 text-sm">
            {siteConfig.departureCities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold text-slate">
          Duration
          <Select value={duration} onChange={(e) => setDuration(e.target.value)} aria-label="Duration" className="!py-2.5 text-sm">
            {durationOptions.map((d) => (
              <option key={d} value={d}>{durationLabel(d)}</option>
            ))}
          </Select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-bold text-slate">
          Hotel category
          <Select value={tier} onChange={(e) => setTier(e.target.value)} aria-label="Hotel category" className="!py-2.5 text-sm">
            {tierOptions.map((t) => (
              <option key={t} value={t}>{t === "undecided" ? "Not sure yet" : `${tierLabels[t]}`}</option>
            ))}
          </Select>
        </label>
      </div>
      <Button type="submit" variant="gold" fullWidth className="mt-3" icon="arrow_forward">
        Continue to my free quote
      </Button>
    </form>
  );
}
