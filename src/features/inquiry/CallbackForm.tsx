"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitLead } from "@/actions/leads";
import { Button, LinkButton } from "@/components/ui/Button";
import { Field, Input, Select } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { siteConfig, whatsappUrl } from "@/config/site";
import { callbackSchema, type CallbackInput } from "@/lib/validation";
import { cn } from "@/lib/utils";

interface CallbackFormProps {
  topic?: string;
  tone?: "light" | "dark";
  className?: string;
}

/** Name + phone + city "call me back" form. Validates client-side with Zod, then on the server. */
export function CallbackForm({ topic = "General Umrah inquiry", tone = "light", className }: CallbackFormProps) {
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const dark = tone === "dark";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<CallbackInput>({
    resolver: zodResolver(callbackSchema),
    defaultValues: { name: "", phone: "", city: siteConfig.departureCities[0], topic },
  });

  const onSubmit = async (values: CallbackInput) => {
    setServerError(null);
    const result = await submitLead("callback", values);
    if (result.ok) {
      setReference(result.reference);
    } else {
      setServerError(result.error);
    }
  };

  if (reference) {
    const v = getValues();
    return (
      <div className={cn("rounded-2xl p-6", dark ? "bg-white/10 text-white" : "bg-haram-soft text-haram-deep", className)} role="status">
        <p className="flex items-center gap-2 font-bold"><Icon name="check_circle" filled className="text-[22px] text-whatsapp" /> Request received · {reference}</p>
        <p className="mt-2 text-sm opacity-90">{siteConfig.callbackPromise} Prefer not to wait? Message us now and quote your reference.</p>
        <LinkButton href={whatsappUrl(`Assalam o Alaikum, I requested a call back (ref ${reference}). Name: ${v.name}, city: ${v.city}. Topic: ${v.topic ?? topic}.`)} variant="whatsapp" className="mt-4" size="sm">
          Continue on WhatsApp
        </LinkButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn("grid gap-3", className)} aria-label="Request a call back">
      <input type="hidden" {...register("topic")} />
      <div className="grid gap-3 sm:grid-cols-2">
        <Field label="Your name" htmlFor="cb-name" error={errors.name?.message} required tone={tone}>
          <Input id="cb-name" autoComplete="name" placeholder="e.g. Muhammad Ahmed" invalid={!!errors.name} aria-describedby={errors.name ? "cb-name-error" : undefined} {...register("name")} />
        </Field>
        <Field label="Mobile number" htmlFor="cb-phone" error={errors.phone?.message} required tone={tone}>
          <Input id="cb-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0306 0815246" dir="ltr" invalid={!!errors.phone} {...register("phone")} />
        </Field>
      </div>
      <Field label="Your city" htmlFor="cb-city" error={errors.city?.message} required tone={tone}>
        <Select id="cb-city" invalid={!!errors.city} {...register("city")}>
          {siteConfig.departureCities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </Select>
      </Field>
      {serverError && <p role="alert" className="text-sm font-semibold text-danger">{serverError}</p>}
      <Button type="submit" variant="gold" size="lg" fullWidth disabled={isSubmitting} icon="call">
        {isSubmitting ? "Sending…" : "Call me back"}
      </Button>
      <p className={cn("text-center text-xs", dark ? "text-white/70" : "text-slate")}>{siteConfig.callbackPromise}</p>
    </form>
  );
}
