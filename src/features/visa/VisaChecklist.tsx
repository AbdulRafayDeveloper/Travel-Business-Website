"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { whatsappUrl } from "@/config/site";
import type { VisaDocument } from "@/types";
import { cn } from "@/lib/utils";

interface VisaChecklistProps {
  documents: VisaDocument[];
}

/** Interactive document checklist. State is local only; nothing is uploaded here. */
export function VisaChecklist({ documents }: VisaChecklistProps) {
  const [done, setDone] = useState<Set<string>>(new Set());
  const required = documents.filter((d) => d.required);
  const requiredDone = required.filter((d) => done.has(d.id)).length;
  const complete = requiredDone === required.length;

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between gap-4">
        <p className="text-sm text-slate" aria-live="polite">
          <span className="font-bold text-ink">{requiredDone}</span> of {required.length} required documents ready
        </p>
        <div className="h-2 w-40 overflow-hidden rounded-full bg-sand-dark" role="progressbar" aria-valuemin={0} aria-valuemax={required.length} aria-valuenow={requiredDone} aria-label="Required documents ready">
          <div className="h-full bg-haram transition-all" style={{ width: `${(requiredDone / required.length) * 100}%` }} />
        </div>
      </div>
      <ul className="divide-y divide-line border-y border-line">
        {documents.map((d) => {
          const checked = done.has(d.id);
          return (
            <li key={d.id}>
              <label className={cn("flex cursor-pointer items-start gap-4 py-4 transition-colors", checked && "bg-haram-mist/60")}>
                <input type="checkbox" checked={checked} onChange={() => toggle(d.id)} className="mt-1 h-5 w-5 shrink-0 accent-haram" />
                <span className="flex-1">
                  <span className="flex flex-wrap items-center gap-2 font-bold text-ink">
                    {d.label}
                    <span className={cn("rounded-md px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider", d.required ? "bg-gold-pale text-gold-deep" : "bg-sand text-slate")}>{d.required ? "Required" : "If applicable"}</span>
                  </span>
                  <span className="mt-1 block text-sm text-slate">{d.detail}</span>
                </span>
                <Icon name={checked ? "check_circle" : "radio_button_unchecked"} filled={checked} className={cn("mt-0.5 text-[22px]", checked ? "text-haram" : "text-line")} />
              </label>
            </li>
          );
        })}
      </ul>
      <div className={cn("mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl p-4", complete ? "bg-haram text-white" : "bg-sand text-ink")}>
        <p className="text-sm font-semibold">
          {complete ? "All required documents ready. Send them to your consultant to start." : "Tick each item as you gather it. Your consultant checks every document before submission."}
        </p>
        <LinkButton href={whatsappUrl("Assalam o Alaikum, my Umrah visa documents are ready. How should I send them?")} variant={complete ? "gold" : "whatsapp"} size="sm">
          Send on WhatsApp
        </LinkButton>
      </div>
    </div>
  );
}
