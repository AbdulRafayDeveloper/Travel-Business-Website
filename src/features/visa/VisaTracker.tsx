"use client";

import { useState, type FormEvent } from "react";
import { Button, LinkButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Field";
import { whatsappUrl } from "@/config/site";
import { demoTracking, visaStages } from "@/data/visa";
import { cn, formatDate } from "@/lib/utils";

const REFERENCE_PATTERN = /^RH-\d{4}-\d{4}$/i;

type Lookup = { state: "idle" } | { state: "invalid" } | { state: "missing"; ref: string } | { state: "found"; ref: string; record: (typeof demoTracking)[string] };

/** Reference-number status tracker. Looks up an illustrative dataset; clearly labelled as a demo. */
export function VisaTracker() {
  const [value, setValue] = useState("");
  const [lookup, setLookup] = useState<Lookup>({ state: "idle" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const ref = value.trim().toUpperCase();
    if (!REFERENCE_PATTERN.test(ref)) {
      setLookup({ state: "invalid" });
      return;
    }
    const record = demoTracking[ref];
    setLookup(record ? { state: "found", ref, record } : { state: "missing", ref });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row" aria-label="Track a visa application">
        <label className="sr-only" htmlFor="track-ref">Booking reference</label>
        <Input id="track-ref" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Booking reference, e.g. RH-2026-1042" dir="ltr" className="font-mono" />
        <Button type="submit" icon="search" iconPosition="start" className="shrink-0">Track</Button>
      </form>
      <p className="mt-2 text-xs text-slate">
        Demo references you can try: <button type="button" className="font-mono font-bold text-haram underline cursor-pointer" onClick={() => setValue("RH-2026-1042")}>RH-2026-1042</button>,{" "}
        <button type="button" className="font-mono font-bold text-haram underline cursor-pointer" onClick={() => setValue("RH-2026-1077")}>RH-2026-1077</button>. Live tracking connects to our booking desk.
      </p>

      <div className="mt-6" aria-live="polite">
        {lookup.state === "invalid" && (
          <p className="flex items-center gap-2 rounded-lg bg-gold-pale p-3 text-sm font-semibold text-gold-deep"><Icon name="info" className="text-[18px]" /> A booking reference looks like RH-2026-1042. It is on your deposit receipt and WhatsApp confirmation.</p>
        )}
        {lookup.state === "missing" && (
          <div className="rounded-lg bg-sand p-4 text-sm text-ink">
            <p className="font-semibold">No application found for {lookup.ref}.</p>
            <p className="mt-1 text-slate">Check the reference on your receipt, or ask your consultant to resend it.</p>
            <LinkButton href={whatsappUrl(`Assalam o Alaikum, I cannot find my visa status for reference ${lookup.ref}. Please check.`)} variant="whatsapp" size="sm" className="mt-3">Ask on WhatsApp</LinkButton>
          </div>
        )}
        {lookup.state === "found" && (
          <div className="rounded-2xl border border-line bg-white p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-line pb-3">
              <p className="font-bold text-ink">{lookup.ref} · {lookup.record.name}</p>
              <p className="text-sm text-slate">{lookup.record.package} · updated {formatDate(lookup.record.updatedOn)}</p>
            </div>
            <ol className="mt-4 space-y-0">
              {visaStages.map((s, i) => {
                const doneStage = i < lookup.record.stageIndex;
                const current = i === lookup.record.stageIndex;
                return (
                  <li key={s.id} className="relative flex gap-4 pb-5 last:pb-0">
                    {i < visaStages.length - 1 && <span className={cn("absolute start-[15px] top-8 bottom-0 w-px", doneStage ? "bg-haram" : "bg-line")} aria-hidden="true" />}
                    <span className={cn("relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold", doneStage ? "border-haram bg-haram text-white" : current ? "border-gold bg-gold-pale text-gold-deep" : "border-line bg-white text-slate")}>
                      {doneStage ? <Icon name="check" className="text-[18px]" /> : i + 1}
                    </span>
                    <div>
                      <p className={cn("font-bold", current ? "text-haram-deep" : doneStage ? "text-ink" : "text-slate")}>
                        {s.title}
                        {current && <span className="ms-2 rounded-md bg-gold-pale px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-gold-deep">In progress</span>}
                      </p>
                      <p className="text-sm text-slate">{s.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
