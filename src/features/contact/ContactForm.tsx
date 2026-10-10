"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitLead } from "@/actions/leads";
import { Button, LinkButton } from "@/components/ui/Button";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { siteConfig, whatsappUrl } from "@/config/site";
import { contactSchema, type ContactInput } from "@/lib/validation";

const subjects: Array<{ value: ContactInput["subject"]; label: string }> = [
  { value: "packages", label: "Umrah packages & prices" },
  { value: "visa", label: "Umrah visa" },
  { value: "hotels", label: "Hotel-only booking" },
  { value: "group", label: "Group / masjid booking" },
  { value: "agent", label: "Travel agent partnership" },
  { value: "complaint", label: "Complaint or feedback" },
  { value: "other", label: "Something else" },
];

/** General contact form. Validated with Zod on both sides; ends with a reference and WhatsApp handoff. */
export function ContactForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", subject: "packages", message: "" },
  });

  const onSubmit = async (values: ContactInput) => {
    setServerError(null);
    const result = await submitLead("contact", values);
    if (result.ok) setReference(result.reference);
    else setServerError(result.error);
  };

  if (reference) {
    const v = getValues();
    return (
      <div className="rounded-2xl bg-haram-soft p-6 text-haram-deep" role="status">
        <p className="flex items-center gap-2 font-bold"><Icon name="check_circle" filled className="text-[22px] text-whatsapp" /> Message received · {reference}</p>
        <p className="mt-2 text-sm">{siteConfig.callbackPromise} For complaints, a senior consultant replies personally.</p>
        <LinkButton href={whatsappUrl(`Assalam o Alaikum, I sent a message through the website (ref ${reference}) about ${subjects.find((s) => s.value === v.subject)?.label ?? v.subject}.`)} variant="whatsapp" size="sm" className="mt-4">Continue on WhatsApp</LinkButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="ct-name" error={errors.name?.message} required>
          <Input id="ct-name" autoComplete="name" invalid={!!errors.name} {...register("name")} />
        </Field>
        <Field label="Mobile number" htmlFor="ct-phone" error={errors.phone?.message} required>
          <Input id="ct-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0300 1234567" dir="ltr" invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field label="Email (optional)" htmlFor="ct-email" error={errors.email?.message}>
          <Input id="ct-email" type="email" autoComplete="email" invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field label="Topic" htmlFor="ct-subject" error={errors.subject?.message} required>
          <Select id="ct-subject" invalid={!!errors.subject} {...register("subject")}>
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </Select>
        </Field>
      </div>
      <Field label="Your message" htmlFor="ct-message" error={errors.message?.message} required hint="Dates, number of travellers, questions, or what went wrong.">
        <Textarea id="ct-message" invalid={!!errors.message} {...register("message")} />
      </Field>
      {serverError && <p role="alert" className="text-sm font-semibold text-danger">{serverError}</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} icon="send">{isSubmitting ? "Sending…" : "Send message"}</Button>
    </form>
  );
}
