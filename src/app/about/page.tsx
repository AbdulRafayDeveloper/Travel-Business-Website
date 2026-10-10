import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { offices, siteConfig } from "@/config/site";
import { milestones, team, whyRaahi } from "@/data/company";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildMetadata, buildTeamSchema, buildWebPageSchema } from "@/lib/seo";

const title = "About Raahi: Licensed Umrah Operator in Lahore, Karachi & Islamabad";
const description = `Raahi Umrah & Travel has taken ${siteConfig.stats.pilgrims} pilgrims to the Haramain since ${siteConfig.foundedYear}. Meet the team, see our licences and offices, and read why we publish every price.`;
const path = "/about";

export const metadata: Metadata = buildMetadata({ title, description, path, photo: "aboutHero" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "AboutPage" })} />
      <JsonLd data={buildTeamSchema(team)} />

      <PageHero
        crumbs={crumbs}
        variant="photo"
        image={siteImages.aboutHero}
        urdu="ہمارے بارے میں"
        eyebrow={`Since ${siteConfig.foundedYear}, ${siteConfig.stats.pilgrims} pilgrims`}
        title={<>An Umrah travel company built on <em className="text-gold">written promises</em>.</>}
        lede="Raahi started with one group leader, a notebook of hotel numbers and a rule: tell pilgrims the real price and the real distance. Thirteen years later that is still the whole business."
      />

      {/* Story: two-column prose with pull stat */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Story">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading number="01" eyebrow="Our story" title={<>From one group to <em>eighteen thousand</em> pilgrims.</>} size="md" />
            <div className="prose-raahi mt-6">
              <p>Muhammad Tahir led his first group from Lahore to Makkah in 1997 for another agency. Over fifteen years he watched the same problems repeat: prices quoted verbally and changed later, hotels described as “near the Haram” that were a shuttle ride away, and phones that went silent once the deposit was paid.</p>
              <p>In 2012 he opened Raahi with two desks in Gulberg and a promise to do three things differently: publish the price, measure the distance, and answer the phone. The first Ramadan group had 38 pilgrims. Most of them have travelled with us again, and their children now book for their own families.</p>
              <p>Today Raahi has offices in Lahore, Karachi and Islamabad, a Saudi ground partner who meets every group at the airport, and a night-shift WhatsApp desk for pilgrims who need help at 2 am in Makkah. We are licensed by the Ministry of Religious Affairs and registered with the Punjab Department of Tourist Services and the SECP.</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={siteImages.madinahCourtyard.src} alt={siteImages.madinahCourtyard.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
            <dl className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-white">
              {[
                { v: siteConfig.stats.pilgrims, l: "pilgrims" },
                { v: siteConfig.stats.rating, l: "Google rating" },
                { v: siteConfig.stats.cities, l: "departure cities" },
              ].map((s) => (
                <div key={s.l} className="p-4 text-center">
                  <dd className="font-display text-3xl font-semibold text-haram-deep">{s.v}</dd>
                  <dt className="text-xs text-slate">{s.l}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-night py-section-sm text-white md:py-section" aria-label="Timeline">
        <Container>
          <SectionHeading number="02" eyebrow="Milestones" tone="dark" title={<>Thirteen years, <em className="text-gold">one promise</em>.</>} size="md" />
          <ol className="relative mt-10 grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            <span className="route-line absolute inset-x-0 top-5 hidden lg:block" aria-hidden="true" />
            {milestones.map((m) => (
              <li key={m.year} className="relative">
                <span className="relative z-10 inline-flex h-10 items-center rounded-full border-2 border-gold bg-night px-3 font-display text-lg font-semibold text-gold">{m.year}</span>
                <h3 className="mt-3 font-bold text-gold-pale">{m.title}</h3>
                <p className="mt-1 text-sm text-white/75">{m.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Promises recap */}
      <section className="bg-haram-mist py-section-sm md:py-section" aria-label="Promises">
        <Container>
          <SectionHeading number="03" eyebrow="What we promise" title={<>Six things we put <em>in writing</em>.</>} size="md" align="center" />
          <ul className="mt-10 grid gap-x-10 gap-y-2 md:grid-cols-2 lg:grid-cols-3">
            {whyRaahi.map((w, i) => (
              <li key={w.title} className="flex gap-4 border-t border-haram/20 py-5">
                <span className="font-display text-2xl italic text-gold-deep">0{i + 1}</span>
                <div>
                  <p className="flex items-center gap-2 font-bold text-ink"><Icon name={w.icon} className="text-[20px] text-haram" />{w.title}</p>
                  <p className="mt-1 text-sm text-slate">{w.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Team */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Team">
        <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading number="04" eyebrow="The team" urdu="ہماری ٹیم" title={<>People you can <em>name</em>.</>} size="md" lede="Every booking has a named consultant in Pakistan and a named representative in Saudi Arabia. Here is who you will be talking to." />
          </div>
          <ul className="divide-y divide-line border-y border-line">
            {team.map((t) => (
              <li key={t.id} className="grid gap-4 py-5 sm:grid-cols-[64px_1fr]">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-haram font-display text-2xl text-white">{t.name.charAt(0)}</span>
                <div>
                  <p className="font-display text-xl font-semibold text-haram-deep">{t.name}</p>
                  <p className="text-sm font-semibold text-gold-deep">{t.role}</p>
                  <p className="mt-1.5 text-sm text-ink">{t.bio}</p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate"><Icon name="translate" className="text-[16px]" />{t.languages.join(" · ")}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Licences & offices */}
      <section className="bg-sand py-section-sm md:py-section" aria-label="Licences">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading number="05" eyebrow="Licences & registrations" title={<>On <em>paper</em>, as it should be.</>} size="md" lede="Ask to see any of these at our offices. Certificates are framed at reception." />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {siteConfig.licences.map((l) => (
                <li key={l.label} className="flex items-start gap-3 py-4">
                  <Icon name="verified" filled className="mt-0.5 text-[22px] text-haram" />
                  <div>
                    <p className="font-bold text-ink">{l.label}</p>
                    <p className="text-sm text-slate">{l.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading number="06" eyebrow="Offices" title={<>Three cities, <em>one desk</em>.</>} size="md" lede="Walk in for a cup of tea and a printed quote. Appointments are not needed." />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {offices.map((o) => (
                <li key={o.id} className="py-4">
                  <p className="flex items-center gap-2 font-bold text-ink"><Icon name="location_on" className="text-[20px] text-gold-deep" />{o.city} <span className="rounded-md bg-gold-pale px-1.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-gold-deep">{o.label}</span></p>
                  <p className="mt-1 text-sm text-slate">{o.address}</p>
                  <p className="mt-1 text-sm text-slate">{o.hours} · <a href={o.telUrl} className="font-semibold text-haram">{o.phone}</a></p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand image={siteImages.duaHands} title={<>Come and <em className="text-gold">meet us</em>.</>} text="Visit any office, or let a consultant call you. Either way you leave with a written quote and the name of the person responsible for your trip." />
    </>
  );
}
