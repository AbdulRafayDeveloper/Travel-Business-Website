import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactNumber, siteConfig } from "@/config/site";
import { officialAccounts, paymentMethods } from "@/data/company";
import { siteImages } from "@/data/images";
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";

const title = "Payment Safety: Official Raahi Bank Accounts & How to Avoid Umrah Fraud";
const description =
  "Pay only to the official Raahi Umrah & Travel company accounts listed here (HBL, Meezan Bank, JazzCash, Easypaisa). Always collect a receipt with a booking number. How to recognise Umrah payment scams in Pakistan.";
const path = "/payment-safety";

export const metadata: Metadata = buildMetadata({ title, description, path, image: siteImages.visaHero.src });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Payment Safety", path },
];

const rules = [
  { icon: "account_balance", title: "Company name on every account", text: `Every account is in the name of ${siteConfig.legalName} No consultant will ever ask you to pay into a personal account.` },
  { icon: "receipt_long", title: "Receipt within minutes", text: "A digital receipt with your booking number is sent on WhatsApp and email after every payment, and a printed one at our offices." },
  { icon: "verified_user", title: "Verify before you pay", text: `Unsure? Call ${contactNumber.display} and read the account number to us. We confirm it on the phone.` },
  { icon: "block", title: "No cash to individuals", text: "Cash is accepted only at our offices against a printed receipt. Never hand cash to an agent at home or at the airport." },
];

const redFlags = [
  "A price far below every licensed agency, with pressure to pay today",
  "Payment requested to a personal JazzCash, Easypaisa or bank account",
  "No written quote, no receipt, no booking number",
  "No office address, or an office that cannot show a licence",
  "'Guaranteed' visa or a promise to issue the visa themselves",
  "Refusal to name the hotel or show its distance from the Haram",
];

export default function PaymentSafetyPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />

      <PageHero
        crumbs={crumbs}
        variant="band"
        urdu="ادائیگی کی حفاظت"
        eyebrow="Official accounts, receipts and scam warnings"
        title={<>Pay only to <em className="text-gold">these accounts</em>.</>}
        lede="Umrah payment fraud is common in Pakistan. This page lists the only accounts Raahi uses, and how to check before you send money."
      />

      {/* Official accounts ledger */}
      <section className="bg-ivory py-section-sm md:py-section" aria-label="Accounts">
        <Container>
          <SectionHeading number="01" eyebrow="Official accounts" title={<>In the company name, <em>always</em>.</>} size="md" lede="The account numbers on this demo site are placeholders. The live site shows the verified numbers, and you can always confirm them by phone." />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-haram text-start">
                  <th scope="col" className="py-3 pe-4 text-start text-xs font-bold uppercase tracking-wider text-slate">Bank / wallet</th>
                  <th scope="col" className="py-3 pe-4 text-start text-xs font-bold uppercase tracking-wider text-slate">Account title</th>
                  <th scope="col" className="py-3 pe-4 text-start text-xs font-bold uppercase tracking-wider text-slate">Account number</th>
                  <th scope="col" className="py-3 text-start text-xs font-bold uppercase tracking-wider text-slate">IBAN</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {officialAccounts.map((a) => (
                  <tr key={a.bank}>
                    <th scope="row" className="py-4 pe-4 text-start font-bold text-ink">{a.bank}</th>
                    <td className="py-4 pe-4 text-ink">{a.title}</td>
                    <td className="py-4 pe-4 font-mono text-ink" dir="ltr">{a.accountNumber}</td>
                    <td className="py-4 font-mono text-slate" dir="ltr">{a.iban}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 flex flex-wrap gap-2">
            {paymentMethods.map((m) => (
              <li key={m.id} className="flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1.5 text-sm font-semibold text-ink"><Icon name={m.icon} className="text-[18px] text-haram" />{m.name} <span className="font-normal text-slate">· {m.detail}</span></li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Rules + red flags */}
      <section className="bg-sand py-section-sm md:py-section" aria-label="Rules">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading number="02" eyebrow="Our rules" title={<>Four rules we <em>never</em> break.</>} size="md" />
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {rules.map((r) => (
                <li key={r.title} className="flex gap-4 py-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-haram text-white"><Icon name={r.icon} className="text-[22px]" /></span>
                  <div>
                    <p className="font-bold text-ink">{r.title}</p>
                    <p className="mt-1 text-sm text-slate">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading number="03" eyebrow="Red flags" title={<>Signs of an Umrah <em>scam</em>.</>} size="md" lede="If you see two or more of these, walk away, whichever agency it is." />
            <ul className="mt-8 space-y-3">
              {redFlags.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-lg border border-sunset/40 bg-white p-3 text-sm text-ink"><Icon name="warning" filled className="mt-0.5 text-[20px] text-sunset" />{f}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate">Report fraud to the FIA Cyber Crime Wing (helpline 1991) and the Ministry of Religious Affairs complaint cell.</p>
          </div>
        </Container>
      </section>

      <CtaBand title={<>Want to verify an account <em className="text-gold">right now</em>?</>} text="Call or WhatsApp and read the number to a consultant. It takes one minute and we would rather you check." whatsappMessage="Assalam o Alaikum, I want to verify a Raahi account number before paying." primaryHref={contactNumber.telUrl} primaryLabel={`Call ${contactNumber.display}`} />
    </>
  );
}
