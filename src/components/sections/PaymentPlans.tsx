import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { paymentMethods } from "@/data/company";

const steps = [
  { label: "Deposit to confirm", amount: "PKR 50,000", note: "per person · starts visa processing the same day", icon: "lock" },
  { label: "Optional middle instalment", amount: "Any amount", note: "for departures more than 2 months away", icon: "calendar_month" },
  { label: "Balance", amount: "Remaining", note: "21 days before departure, or on booking for near dates", icon: "task_alt" },
];

/** Three-stage payment timeline with a methods strip. No extra charge for instalments. */
export function PaymentPlans() {
  return (
    <section className="bg-sand py-section-sm md:py-section" aria-label="Payment plans">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow="Paying for your Umrah" title={<>Pay in <em>stages</em>, not all at once.</>} lede="A small deposit confirms your seat and hotel. The rest is split however suits your family, with no instalment fee and a receipt for every payment." />
        <div>
          <ol className="relative border-s-2 border-gold/50 ps-8">
            {steps.map((s, i) => (
              <li key={s.label} className="relative pb-8 last:pb-0">
                <span className="absolute -start-[2.45rem] flex h-10 w-10 items-center justify-center rounded-full bg-gold text-haram-deep"><Icon name={s.icon} className="text-[20px]" /></span>
                <p className="eyebrow text-gold-deep">Stage {i + 1}</p>
                <p className="font-display text-2xl font-semibold text-haram-deep">{s.amount} <span className="font-sans text-base font-bold text-ink">· {s.label}</span></p>
                <p className="text-sm text-slate">{s.note}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {paymentMethods.map((m) => (
              <span key={m.id} className="flex items-center gap-1.5 rounded-md border border-gold/40 bg-white px-2.5 py-1.5 text-sm font-semibold text-ink"><Icon name={m.icon} className="text-[18px] text-haram" />{m.name}</span>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate">
            Pay only to the accounts on our <Link href="/payment-safety" className="font-bold text-haram underline underline-offset-2">Payment Safety page</Link>. Cancellation terms are on the <Link href="/refund-policy" className="font-bold text-haram underline underline-offset-2">Refund Policy</Link>.
          </p>
        </div>
      </Container>
    </section>
  );
}
