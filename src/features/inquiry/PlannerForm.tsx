"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { submitLead } from "@/actions/leads";
import { Button, LinkButton } from "@/components/ui/Button";
import { Field, Input, Select, Stepper, Textarea } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { siteConfig, whatsappUrl } from "@/config/site";
import { packages } from "@/data/packages";
import { durationOptions, inquirySchema, monthOptions, roomOptions, tierOptions, type InquiryInput } from "@/lib/validation";
import { cn, formatMonth, formatPkr, roomLabels, tierLabels } from "@/lib/utils";

const steps = [
  { id: "trip", title: "Your trip", icon: "flight_takeoff" },
  { id: "travellers", title: "Travellers", icon: "groups" },
  { id: "contact", title: "Your details", icon: "person" },
] as const;

const stepFields: Record<number, Array<keyof InquiryInput>> = {
  0: ["city", "month", "duration", "tier", "room"],
  1: ["adults", "children", "infants"],
  2: ["name", "phone", "email", "notes"],
};

/** Per-night hotel cost per person, calibrated against the published packages (see src/data/packages.ts). */
const tierPerNight: Record<(typeof tierOptions)[number], { quad: number; triple: number; double: number }> = {
  economy: { quad: 6000, triple: 8000, double: 11000 },
  standard: { quad: 9200, triple: 11700, double: 15800 },
  premium: { quad: 24000, triple: 29000, double: 39000 },
  vip: { quad: 41000, triple: 48500, double: 63000 },
  undecided: { quad: 9200, triple: 11700, double: 15800 },
};

const FIXED_COSTS = 35000; // visa, insurance, transfers, ziyarat and training per person
const FLIGHT_BASE = 70000;
const CHILD_DISCOUNT = 25000;
const INFANT_FARE = 35000;

function monthLabel(m: (typeof monthOptions)[number]): string {
  return m === "flexible" ? "Flexible / not sure" : formatMonth(`${m}-01`);
}

function seasonFactor(month: (typeof monthOptions)[number]): number {
  if (month === "2027-02" || month === "2027-03") return 1.6; // Ramadan window
  if (month === "2026-12") return 1.15; // school holidays
  return 1;
}

/** Rough per-person and total estimate so the visitor sees a price range before submitting. */
function estimate(values: Partial<InquiryInput>) {
  const nights = values.duration && values.duration !== "custom" ? Number(values.duration) : 12;
  const tier = values.tier ?? "standard";
  const room = values.room && values.room !== "mixed" ? values.room : "quad";
  const factor = seasonFactor(values.month ?? "flexible");
  const perAdult = Math.round((FLIGHT_BASE + FIXED_COSTS + tierPerNight[tier][room] * nights * factor) / 1000) * 1000;
  const adults = values.adults ?? 1;
  const children = values.children ?? 0;
  const infants = values.infants ?? 0;
  const total = perAdult * adults + Math.max(perAdult - CHILD_DISCOUNT, 0) * children + INFANT_FARE * infants;
  return { perAdult, total, low: Math.round(total * 0.92), high: Math.round(total * 1.08) };
}

/** Three-step planner with live estimate. Server-validated; ends with a reference and WhatsApp handoff. */
export function PlannerForm() {
  const params = useSearchParams();
  const [step, setStep] = useState(0);
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const presetPackage = packages.find((p) => p.slug === params.get("package"));
  const presetCity = siteConfig.departureCities.find((c) => c === params.get("city")) ?? siteConfig.departureCities.find((c) => c === presetPackage?.departureCities[0]);
  const presetDuration = durationOptions.find((d) => d === params.get("duration"));
  const presetTier = tierOptions.find((t) => t === params.get("tier"));

  const {
    register,
    control,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    mode: "onTouched",
    defaultValues: {
      city: presetCity ?? siteConfig.departureCities[0],
      month: "flexible",
      duration: presetDuration ?? (presetPackage ? (durationOptions.find((d) => d === String(presetPackage.nights)) ?? "custom") : "12"),
      tier: presetTier ?? presetPackage?.tier ?? "standard",
      room: "quad",
      adults: 2,
      children: 0,
      infants: 0,
      name: "",
      phone: "",
      email: "",
      notes: presetPackage ? `Interested in: ${presetPackage.name}` : "",
      packageSlug: presetPackage?.slug,
      source: "plan-your-umrah",
    },
  });

  const watched = useWatch({ control });
  const est = useMemo(() => estimate(watched), [watched]);

  const next = async () => {
    const ok = await trigger(stepFields[step]);
    if (ok) setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const onSubmit = async (values: InquiryInput) => {
    setServerError(null);
    const result = await submitLead("inquiry", values);
    if (result.ok) setReference(result.reference);
    else setServerError(result.error);
  };

  if (reference) {
    const v = getValues();
    const summary = `${v.duration === "custom" ? "custom length" : `${v.duration} nights`}, ${tierLabels[v.tier === "undecided" ? "standard" : v.tier]}${v.tier === "undecided" ? " (undecided)" : ""}, ${v.adults} adult(s)${v.children ? `, ${v.children} child(ren)` : ""}${v.infants ? `, ${v.infants} infant(s)` : ""}, from ${v.city}, ${monthLabel(v.month)}`;
    return (
      <div className="rounded-2xl bg-haram p-6 text-white md:p-8" role="status">
        <p className="eyebrow text-gold">Request received</p>
        <h2 className="display-title mt-2 text-3xl md:text-4xl">JazakAllah, {v.name.split(" ")[0]}. Your reference is <em className="text-gold">{reference}</em>.</h2>
        <p className="mt-4 text-white/85">{siteConfig.callbackPromise} Your consultant will call <span dir="ltr" className="font-bold">{v.phone}</span> with two or three options and a written quote.</p>
        <dl className="mt-6 grid gap-3 rounded-xl bg-white/10 p-4 text-sm sm:grid-cols-2">
          <div><dt className="text-white/65">Trip</dt><dd className="font-semibold">{summary}</dd></div>
          <div><dt className="text-white/65">Estimated total</dt><dd className="font-display text-2xl font-semibold text-gold-pale">{formatPkr(est.low)} – {formatPkr(est.high)}</dd></div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <LinkButton href={whatsappUrl(`Assalam o Alaikum, I submitted the Umrah planner (ref ${reference}). Trip: ${summary}. Please share options.`)} variant="whatsapp">Continue on WhatsApp</LinkButton>
          <LinkButton href="/umrah-packages" variant="outlineLight" icon="arrow_forward">Browse packages meanwhile</LinkButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-8 lg:grid-cols-[1fr_320px]" aria-label="Plan your Umrah">
      <div className="rounded-2xl border border-line bg-white p-5 shadow-card md:p-7">
        {/* Stepper header */}
        <ol className="mb-6 grid grid-cols-3 gap-2" aria-label="Progress">
          {steps.map((s, i) => (
            <li key={s.id} aria-current={i === step ? "step" : undefined} className={cn("flex items-center gap-2 border-b-4 pb-2 text-xs font-bold uppercase tracking-wider", i === step ? "border-gold text-haram-deep" : i < step ? "border-haram text-haram" : "border-line text-slate")}>
              <Icon name={i < step ? "check_circle" : s.icon} filled={i < step} className="text-[18px]" />
              <span className="hidden sm:inline">{s.title}</span>
              <span className="sm:hidden">{i + 1}</span>
            </li>
          ))}
        </ol>

        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Departure city" htmlFor="pl-city" error={errors.city?.message} required>
              <Select id="pl-city" invalid={!!errors.city} {...register("city")}>
                {siteConfig.departureCities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </Field>
            <Field label="Travel month" htmlFor="pl-month" error={errors.month?.message} required>
              <Select id="pl-month" invalid={!!errors.month} {...register("month")}>
                {monthOptions.map((m) => (
                  <option key={m} value={m}>{monthLabel(m)}</option>
                ))}
              </Select>
            </Field>
            <Field label="Duration" htmlFor="pl-duration" error={errors.duration?.message} required>
              <Select id="pl-duration" invalid={!!errors.duration} {...register("duration")}>
                {durationOptions.map((d) => (
                  <option key={d} value={d}>{d === "custom" ? "Custom length" : `${d} nights`}</option>
                ))}
              </Select>
            </Field>
            <Field label="Hotel category" htmlFor="pl-tier" error={errors.tier?.message} required hint="Economy 3★ shuttle · Standard 4★ · Premium 5★ near Haram · VIP">
              <Select id="pl-tier" invalid={!!errors.tier} {...register("tier")}>
                {tierOptions.map((t) => (
                  <option key={t} value={t}>{t === "undecided" ? "Not sure, advise me" : tierLabels[t]}</option>
                ))}
              </Select>
            </Field>
            <Field label="Room sharing" htmlFor="pl-room" error={errors.room?.message} required className="sm:col-span-2">
              <Select id="pl-room" invalid={!!errors.room} {...register("room")}>
                {roomOptions.map((r) => (
                  <option key={r} value={r}>{r === "mixed" ? "Mixed (we will suggest)" : roomLabels[r]}</option>
                ))}
              </Select>
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="grid gap-3">
            <Controller name="adults" control={control} render={({ field }) => <Stepper id="pl-adults" label="Adults" hint="12 years and above" min={1} max={40} value={field.value} onChange={field.onChange} />} />
            <Controller name="children" control={control} render={({ field }) => <Stepper id="pl-children" label="Children" hint="2 – 11 years · discount applies" min={0} max={20} value={field.value} onChange={field.onChange} />} />
            <Controller name="infants" control={control} render={({ field }) => <Stepper id="pl-infants" label="Infants" hint="Under 2 · infant fare only" min={0} max={10} value={field.value} onChange={field.onChange} />} />
            {(errors.adults || errors.children || errors.infants) && <p role="alert" className="text-xs font-semibold text-danger">{errors.adults?.message ?? errors.children?.message ?? errors.infants?.message}</p>}
            <p className="mt-2 flex gap-2 rounded-lg bg-sand p-3 text-sm text-slate"><Icon name="elderly" className="text-[20px] text-haram" /> Travelling with elderly parents or anyone needing a wheelchair? Mention it in the notes on the next step and we will choose walkable hotels.</p>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Your name" htmlFor="pl-name" error={errors.name?.message} required>
              <Input id="pl-name" autoComplete="name" invalid={!!errors.name} {...register("name")} />
            </Field>
            <Field label="Mobile / WhatsApp number" htmlFor="pl-phone" error={errors.phone?.message} required>
              <Input id="pl-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0300 1234567" dir="ltr" invalid={!!errors.phone} {...register("phone")} />
            </Field>
            <Field label="Email (optional)" htmlFor="pl-email" error={errors.email?.message} className="sm:col-span-2">
              <Input id="pl-email" type="email" autoComplete="email" invalid={!!errors.email} {...register("email")} />
            </Field>
            <Field label="Anything we should know? (optional)" htmlFor="pl-notes" error={errors.notes?.message} className="sm:col-span-2" hint="Preferred hotel, elderly travellers, specific dates, budget per person…">
              <Textarea id="pl-notes" invalid={!!errors.notes} {...register("notes")} />
            </Field>
          </div>
        )}

        {serverError && <p role="alert" className="mt-4 text-sm font-semibold text-danger">{serverError}</p>}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
          <Button type="button" variant="ghost" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} icon="arrow_back" iconPosition="start">Back</Button>
          {step < steps.length - 1 ? (
            <Button type="button" onClick={next} icon="arrow_forward">Continue</Button>
          ) : (
            <Button type="submit" variant="gold" size="lg" disabled={isSubmitting} icon="send">{isSubmitting ? "Sending…" : "Send my request"}</Button>
          )}
        </div>
      </div>

      {/* Live estimate */}
      <aside className="h-fit rounded-2xl bg-night p-5 text-white lg:sticky lg:top-32" aria-live="polite" aria-label="Estimated cost">
        <p className="eyebrow text-gold">Live estimate</p>
        <p className="mt-2 font-display text-3xl font-semibold text-gold-pale">{formatPkr(est.low)} – {formatPkr(est.high)}</p>
        <p className="text-sm text-white/70">total for {watched.adults ?? 1} adult{(watched.adults ?? 1) > 1 ? "s" : ""}{watched.children ? `, ${watched.children} child${watched.children > 1 ? "ren" : ""}` : ""}{watched.infants ? `, ${watched.infants} infant${watched.infants > 1 ? "s" : ""}` : ""}</p>
        <dl className="mt-4 space-y-2 border-t border-white/15 pt-4 text-sm">
          <div className="flex justify-between"><dt className="text-white/70">Per adult, approx.</dt><dd className="font-semibold">{formatPkr(est.perAdult)}</dd></div>
          <div className="flex justify-between"><dt className="text-white/70">Category</dt><dd className="font-semibold">{watched.tier === "undecided" ? "To be advised" : tierLabels[watched.tier ?? "standard"]}</dd></div>
          <div className="flex justify-between"><dt className="text-white/70">Length</dt><dd className="font-semibold">{watched.duration === "custom" ? "Custom" : `${watched.duration} nights`}</dd></div>
          <div className="flex justify-between"><dt className="text-white/70">Month</dt><dd className="font-semibold">{monthLabel(watched.month ?? "flexible")}</dd></div>
        </dl>
        <p className="mt-4 text-xs text-white/60">Estimate based on current package rates; Ramadan and December dates cost more. Your written quote will be exact and includes visa, flights, hotels, transfers and ziyarat.</p>
      </aside>
    </form>
  );
}
