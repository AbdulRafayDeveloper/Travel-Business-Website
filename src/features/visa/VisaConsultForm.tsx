"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState, type ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { submitLead } from "@/actions/leads";
import { Button, LinkButton } from "@/components/ui/Button";
import { Field, Input, Select } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { siteConfig, whatsappUrl } from "@/config/site";
import { monthOptions, visaConsultSchema, type VisaConsultInput } from "@/lib/validation";
import { formatMonth } from "@/lib/utils";
import { cn } from "@/lib/utils";

const MAX_FILES = 10;
const MAX_FILE_MB = 8;
const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

interface Picked {
  name: string;
  sizeKb: number;
  ok: boolean;
  reason?: string;
}

function monthLabel(m: (typeof monthOptions)[number]): string {
  return m === "flexible" ? "Flexible / not sure" : formatMonth(`${m}-01`);
}

/**
 * Visa consultation request with a document picker. Files are validated and previewed in the
 * browser only; they are never uploaded from this demo. The visitor sends them to their consultant
 * on WhatsApp after receiving a reference number.
 */
export function VisaConsultForm() {
  const [picked, setPicked] = useState<Picked[]>([]);
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<VisaConsultInput>({
    resolver: zodResolver(visaConsultSchema),
    defaultValues: { name: "", phone: "", email: "", travellers: 1, travelMonth: "flexible", withPackage: "yes", consent: undefined },
  });

  const onFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(0, MAX_FILES);
    setPicked(
      files.map((f) => {
        const sizeKb = Math.round(f.size / 1024);
        if (!ACCEPTED.includes(f.type)) return { name: f.name, sizeKb, ok: false, reason: "Use JPG, PNG or PDF" };
        if (f.size > MAX_FILE_MB * 1024 * 1024) return { name: f.name, sizeKb, ok: false, reason: `Over ${MAX_FILE_MB} MB` };
        return { name: f.name, sizeKb, ok: true };
      }),
    );
  };

  const onSubmit = async (values: VisaConsultInput) => {
    setServerError(null);
    const result = await submitLead("visa", values);
    if (result.ok) setReference(result.reference);
    else setServerError(result.error);
  };

  if (reference) {
    const v = getValues();
    return (
      <div className="rounded-2xl bg-haram p-6 text-white" role="status">
        <p className="flex items-center gap-2 font-bold"><Icon name="check_circle" filled className="text-[22px] text-gold" /> Consultation request received · {reference}</p>
        <p className="mt-2 text-sm text-white/85">
          {siteConfig.callbackPromise} Send your {picked.length > 0 ? `${picked.length} document${picked.length > 1 ? "s" : ""}` : "documents"} on WhatsApp quoting your reference so your consultant can check them today.
        </p>
        <LinkButton href={whatsappUrl(`Assalam o Alaikum, my visa consultation reference is ${reference}. Name: ${v.name}, ${v.travellers} traveller(s), travelling ${monthLabel(v.travelMonth)}. I will send my documents here.`)} variant="gold" className="mt-4" size="sm">
          Send documents on WhatsApp
        </LinkButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4" aria-label="Visa consultation request">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name (as in passport)" htmlFor="vc-name" error={errors.name?.message} required>
          <Input id="vc-name" autoComplete="name" invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field label="Mobile / WhatsApp number" htmlFor="vc-phone" error={errors.phone?.message} required>
          <Input id="vc-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0300 1234567" dir="ltr" invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field label="Email (optional)" htmlFor="vc-email" error={errors.email?.message}>
          <Input id="vc-email" type="email" autoComplete="email" invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field label="Number of travellers" htmlFor="vc-travellers" error={errors.travellers?.message} required>
          <Input id="vc-travellers" type="number" min={1} max={40} inputMode="numeric" invalid={!!errors.travellers} {...register("travellers", { valueAsNumber: true })} />
        </Field>
        <Field label="Travel month" htmlFor="vc-month" error={errors.travelMonth?.message} required>
          <Select id="vc-month" invalid={!!errors.travelMonth} {...register("travelMonth")}>
            {monthOptions.map((m) => (
              <option key={m} value={m}>{monthLabel(m)}</option>
            ))}
          </Select>
        </Field>
        <Field label="Do you want a full package too?" htmlFor="vc-package" required>
          <Select id="vc-package" {...register("withPackage")}>
            <option value="yes">Yes, visa with flights and hotels</option>
            <option value="no">No, visa only (I have my own bookings)</option>
          </Select>
        </Field>
      </div>

      {/* Document picker (client-side validation only) */}
      <div>
        <p className="text-sm font-bold text-ink">Documents (optional now, required before submission)</p>
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className="mt-1.5 flex w-full flex-col items-center justify-center gap-1 rounded-lg border-2 border-dashed border-line bg-sand/60 px-4 py-6 text-center transition-colors hover:border-haram cursor-pointer"
        >
          <Icon name="upload_file" className="text-[32px] text-haram" />
          <span className="text-sm font-semibold text-ink">Choose passport, photo, CNIC and polio card</span>
          <span className="text-xs text-slate">JPG, PNG or PDF · up to {MAX_FILE_MB} MB each · up to {MAX_FILES} files</span>
        </button>
        <input ref={fileInput} type="file" multiple accept={ACCEPTED.join(",")} onChange={onFiles} className="sr-only" aria-label="Choose documents" />
        {picked.length > 0 && (
          <ul className="mt-3 divide-y divide-line rounded-lg border border-line text-sm">
            {picked.map((f) => (
              <li key={f.name} className="flex items-center justify-between gap-3 px-3 py-2">
                <span className="flex items-center gap-2 truncate"><Icon name={f.ok ? "description" : "error"} className={cn("text-[18px]", f.ok ? "text-haram" : "text-danger")} /><span className="truncate">{f.name}</span></span>
                <span className={cn("shrink-0 text-xs", f.ok ? "text-slate" : "font-bold text-danger")}>{f.ok ? `${f.sizeKb} KB` : f.reason}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-2 text-xs text-slate">Files stay on your device in this demo. After you submit, you send them to your named consultant on WhatsApp.</p>
      </div>

      <label className="flex items-start gap-3 rounded-lg border border-line bg-white p-3 text-sm">
        <input type="checkbox" className="mt-1 h-4 w-4 accent-haram" aria-invalid={!!errors.consent} {...register("consent")} />
        <span className="text-ink">
          I understand that this request starts a consultation with Raahi and is not an application to the Saudi government. Visas are issued by Saudi authorities; approval, fees and timelines may change.
          {errors.consent && <span className="mt-1 block text-xs font-semibold text-danger" role="alert">{errors.consent.message}</span>}
        </span>
      </label>

      {serverError && <p role="alert" className="text-sm font-semibold text-danger">{serverError}</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} icon="arrow_forward">{isSubmitting ? "Sending…" : "Start my visa consultation"}</Button>
    </form>
  );
}
