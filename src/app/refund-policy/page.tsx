import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

const title = "Refund & Cancellation Policy";
const description = "Raahi cancellation charges by stage: before visa submission, after visa issuance, within 14 days of departure, and no-shows. Visa refusals, hotel changes and how refunds are paid.";
const path = "/refund-policy";

export const metadata: Metadata = buildMetadata({ title, description, path });

const sections: LegalSection[] = [
  {
    heading: "Cancellation charges by stage",
    paragraphs: ["Charges are per person and deducted from the amount you have paid. The remaining balance is refunded."],
    bullets: [
      "Before visa submission: PKR 5,000 processing charge; everything else refunded.",
      "After visa submission, before ticketing: Saudi visa fee and insurance (non-refundable) plus PKR 5,000.",
      "After ticketing, more than 21 days before departure: visa fee, insurance, airline cancellation charge as per fare rules, plus PKR 5,000.",
      "Within 21 days of departure: the above plus any hotel nights the hotel does not release (usually the first night, up to the full stay in Ramadan).",
      "Within 72 hours of departure or no-show: no refund, except hotel nights we are able to resell.",
    ],
  },
  {
    heading: "Visa refusal",
    paragraphs: ["If a visa is refused despite complete and correct documents, the Saudi visa fee and insurance are non-refundable. Raahi refunds all other amounts except any airline charges already incurred, which we tell you about before ticketing."],
  },
  {
    heading: "Changes made by Raahi",
    paragraphs: ["If we cannot provide a named hotel and you decline the alternative offered under our Terms, you receive a full refund of the hotel portion. If a departure is cancelled by Raahi for reasons within our control, you receive a full refund or a free transfer to another date."],
  },
  {
    heading: "Events outside anyone's control",
    paragraphs: ["If travel becomes impossible because of government decisions, airport closures, pandemics or similar events, we refund everything recoverable from airlines, hotels and operators and transfer non-recoverable amounts as credit towards a future booking valid for 12 months."],
  },
  {
    heading: "How refunds are paid",
    paragraphs: ["Refunds are paid to the bank account, JazzCash or Easypaisa number the payment came from, within 14 working days of the cancellation being confirmed in writing. Airline refunds can take longer; we pass them on within 7 working days of receiving them."],
  },
  {
    heading: "How to cancel",
    paragraphs: [`Send a written request on WhatsApp or to ${siteConfig.bookingsEmail} quoting your booking number. Cancellation is effective from the date we receive it. Your consultant confirms the charge in writing before anything is processed.`],
  },
];

export default function RefundPolicyPage() {
  return <LegalPage title={title} description={description} path={path} updatedOn="2026-10-01" intro="We would rather you knew the cancellation terms before booking than after. They follow airline and hotel rules, plus a small processing charge." sections={sections} />;
}
