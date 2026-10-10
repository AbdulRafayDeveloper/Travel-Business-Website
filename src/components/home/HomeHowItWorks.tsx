import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { howItWorks } from "@/data/company";
import { planHref } from "@/config/navigation";

/** Four steps on a dotted route line (horizontal on desktop, vertical rail on phones). */
export function HomeHowItWorks() {
  return (
    <section className="bg-ivory py-section-sm md:py-section" aria-label="How it works">
      <Container>
        <SectionHeading number="02" eyebrow="How it works" title={<>From first message to <em>Labbaik</em> in four steps.</>} lede="No forms to print, no office visit required. Most families confirm their booking within two days of the first call." align="center" />

        <div className="relative mt-14">
          <div className="route-line absolute inset-x-[12%] top-8 hidden lg:block" aria-hidden="true" />
          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {howItWorks.map((step, i) => (
              <li key={step.step} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                {i < howItWorks.length - 1 && <span className="route-line-vertical absolute start-8 top-16 bottom-[-40px] lg:hidden" aria-hidden="true" />}
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-ivory text-haram">
                  <Icon name={step.icon} className="text-[28px]" />
                  <span className="absolute -top-2 -end-2 flex h-7 w-7 items-center justify-center rounded-full bg-haram font-display text-sm font-semibold text-white">{step.step}</span>
                </div>
                <div className="lg:mt-5">
                  <h3 className="font-display text-2xl font-semibold text-haram-deep">{step.title}</h3>
                  <p className="mt-2 text-slate">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <LinkButton href={planHref} size="lg" icon="arrow_forward">Start step one now</LinkButton>
          <LinkButton href="/payment-safety" variant="ghost" icon="verified_user" iconPosition="start">How deposits are protected</LinkButton>
        </div>
      </Container>
    </section>
  );
}
