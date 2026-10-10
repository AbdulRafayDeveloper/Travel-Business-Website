import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ContactForm } from "@/features/contact/ContactForm";
import { contactNumber, offices, siteConfig, whatsappUrl } from "@/config/site";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

const title = "Contact Raahi: WhatsApp, Call or Visit Our Lahore, Karachi & Islamabad Offices";
const description = `Reach a named Umrah consultant on WhatsApp ${siteConfig.supportHours}, call ${contactNumber.display}, or visit our offices in Lahore (head office), Karachi and Islamabad.`;
const path = "/contact";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.madinahNight.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path },
];

const channels = [
  { icon: "whatsapp", title: "WhatsApp", value: contactNumber.display, note: siteConfig.supportHours, href: whatsappUrl("Assalam o Alaikum, I would like to speak to a consultant."), cta: "Open WhatsApp" },
  { icon: "call", title: "Call", value: contactNumber.display, note: "Mobile, every day", href: contactNumber.telUrl, cta: "Call now" },
  { icon: "mail", title: "Email", value: siteConfig.email, note: "Replies within one working day", href: `mailto:${siteConfig.email}`, cta: "Write to us" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "ContactPage" })} />

      <PageHero
        crumbs={crumbs}
        variant="band"
        urdu="ہم سے رابطہ کریں"
        eyebrow="Consultants online, replies in minutes"
        title={<>Talk to a <em className="text-gold">person</em>, not a form.</>}
        lede="WhatsApp is fastest. Calls are answered every day. Offices welcome walk-ins. And yes, the form below reaches a human too."
      />

      {/* Channel ledger */}
      <section className="border-b border-line bg-sand" aria-label="Contact channels">
        <Container>
          <ul className="grid divide-y divide-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {channels.map((c) => (
              <li key={c.title} className="flex items-start gap-4 py-6 md:px-6 md:first:ps-0 md:last:pe-0">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-haram text-white">
                  {c.icon === "whatsapp" ? <WhatsAppIcon className="h-6 w-6" /> : <Icon name={c.icon} filled className="text-[24px]" />}
                </span>
                <div>
                  <p className="eyebrow text-gold-deep">{c.title}</p>
                  <p className="font-display text-xl font-semibold text-haram-deep" dir="ltr">{c.value}</p>
                  <p className="text-xs text-slate">{c.note}</p>
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-haram underline underline-offset-2">{c.cta} <Icon name="arrow_forward" className="text-[16px]" /></a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Form + offices */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Message and offices">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading number="01" eyebrow="Send a message" title={<>We read <em>every</em> message.</>} size="md" lede="Complaints go to a senior consultant. Everything else gets a call back within 30 minutes during support hours." />
            <div className="mt-8 rounded-2xl border border-line bg-white p-5 shadow-card md:p-7">
              <ContactForm />
            </div>
          </div>
          <div>
            <SectionHeading number="02" eyebrow="Visit an office" title={<>Tea is <em>always</em> on.</>} size="md" lede="No appointment needed. Bring your passports and leave with a printed quote." />
            <ul className="mt-8 space-y-6">
              {offices.map((o) => (
                <li key={o.id} className="overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="p-5">
                    <p className="flex items-center gap-2 font-display text-xl font-semibold text-haram-deep">
                      {o.city}
                      <span className="rounded-md bg-gold-pale px-1.5 py-0.5 font-sans text-[0.65rem] font-bold uppercase tracking-wider text-gold-deep">{o.label}</span>
                    </p>
                    <p className="mt-2 flex items-start gap-2 text-sm text-ink"><Icon name="location_on" className="mt-0.5 text-[18px] text-gold-deep" />{o.address}</p>
                    <p className="mt-1 flex items-start gap-2 text-sm text-slate"><Icon name="schedule" className="mt-0.5 text-[18px] text-gold-deep" />{o.hours}</p>
                    <p className="mt-1 flex items-start gap-2 text-sm"><Icon name="call" className="mt-0.5 text-[18px] text-gold-deep" /><a href={o.telUrl} className="font-semibold text-haram">{o.phone}</a></p>
                  </div>
                  <iframe
                    title={`Map of Raahi ${o.city} office`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapQuery)}&output=embed`}
                    className="h-44 w-full border-t border-line"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
