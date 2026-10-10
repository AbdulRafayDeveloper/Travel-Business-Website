import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import { paymentMethods } from "@/data/company";

/** Two-row trust strip: licences on the left, payment methods on the right, divided by a gold rule. */
export function HomeTrustStrip() {
  return (
    <section className="border-y border-line bg-gold-pale/60" aria-label="Licences and payment methods">
      <Container className="grid gap-6 py-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div>
          <p className="eyebrow text-gold-deep">Registered &amp; licensed</p>
          <ul className="mt-2 space-y-1 text-sm text-ink">
            {siteConfig.licences.map((l) => (
              <li key={l.label} className="flex items-start gap-2">
                <Icon name="verified" filled className="mt-0.5 text-[16px] text-haram" />
                <span><span className="font-semibold">{l.label}</span> · <span className="text-slate">{l.value}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <span className="hidden h-24 w-px bg-gold/50 md:block" aria-hidden="true" />
        <div>
          <p className="eyebrow text-gold-deep">Pay only to official accounts</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {paymentMethods.map((m) => (
              <li key={m.id} className="flex items-center gap-1.5 rounded-md border border-gold/40 bg-white px-2.5 py-1.5 text-sm font-semibold text-ink">
                <Icon name={m.icon} className="text-[18px] text-haram" />
                {m.name}
              </li>
            ))}
          </ul>
          <Link href="/payment-safety" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-haram hover:underline">
            See official account details <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
