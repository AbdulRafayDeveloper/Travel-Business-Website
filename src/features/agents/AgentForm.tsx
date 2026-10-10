"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitLead } from "@/actions/leads";
import { Button, LinkButton } from "@/components/ui/Button";
import { Field, Input, Select } from "@/components/ui/Field";
import { Icon } from "@/components/ui/Icon";
import { whatsappUrl } from "@/config/site";
import { agentSchema, type AgentInput } from "@/lib/validation";

/** B2B partner interest form for travel agents. */
export function AgentForm() {
  const [reference, setReference] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<AgentInput>({
    resolver: zodResolver(agentSchema),
    defaultValues: { agencyName: "", contactName: "", phone: "", email: "", city: "", monthlyPilgrims: "1-10", licensed: "yes" },
  });

  const onSubmit = async (values: AgentInput) => {
    setServerError(null);
    const result = await submitLead("agent", values);
    if (result.ok) setReference(result.reference);
    else setServerError(result.error);
  };

  if (reference) {
    const v = getValues();
    return (
      <div className="rounded-2xl bg-haram p-6 text-white" role="status">
        <p className="flex items-center gap-2 font-bold"><Icon name="check_circle" filled className="text-[22px] text-gold" /> Application received · {reference}</p>
        <p className="mt-2 text-sm text-white/85">Our partnerships manager calls within one working day to verify your agency and share the B2B rate sheet.</p>
        <LinkButton href={whatsappUrl(`Assalam o Alaikum, I applied for the Raahi agent partnership (ref ${reference}) for ${v.agencyName}, ${v.city}.`)} variant="gold" size="sm" className="mt-4">Continue on WhatsApp</LinkButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-4" aria-label="Travel agent partnership form">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Agency name" htmlFor="ag-agency" error={errors.agencyName?.message} required>
          <Input id="ag-agency" autoComplete="organization" invalid={!!errors.agencyName} {...register("agencyName")} />
        </Field>
        <Field label="Your name" htmlFor="ag-name" error={errors.contactName?.message} required>
          <Input id="ag-name" autoComplete="name" invalid={!!errors.contactName} {...register("contactName")} />
        </Field>
        <Field label="Mobile / WhatsApp" htmlFor="ag-phone" error={errors.phone?.message} required>
          <Input id="ag-phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="0300 1234567" dir="ltr" invalid={!!errors.phone} {...register("phone")} />
        </Field>
        <Field label="Email (optional)" htmlFor="ag-email" error={errors.email?.message}>
          <Input id="ag-email" type="email" autoComplete="email" invalid={!!errors.email} {...register("email")} />
        </Field>
        <Field label="City" htmlFor="ag-city" error={errors.city?.message} required>
          <Input id="ag-city" autoComplete="address-level2" invalid={!!errors.city} {...register("city")} />
        </Field>
        <Field label="Pilgrims you send per month" htmlFor="ag-volume" error={errors.monthlyPilgrims?.message} required>
          <Select id="ag-volume" invalid={!!errors.monthlyPilgrims} {...register("monthlyPilgrims")}>
            <option value="1-10">1 – 10</option>
            <option value="11-30">11 – 30</option>
            <option value="31-100">31 – 100</option>
            <option value="100+">100+</option>
          </Select>
        </Field>
        <Field label="Government licence (DTS / Ministry)" htmlFor="ag-licensed" error={errors.licensed?.message} required className="sm:col-span-2">
          <Select id="ag-licensed" invalid={!!errors.licensed} {...register("licensed")}>
            <option value="yes">Yes, licensed</option>
            <option value="in-progress">Application in progress</option>
            <option value="no">Not yet</option>
          </Select>
        </Field>
      </div>
      {serverError && <p role="alert" className="text-sm font-semibold text-danger">{serverError}</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} icon="arrow_forward">{isSubmitting ? "Sending…" : "Apply for a partner account"}</Button>
    </form>
  );
}
