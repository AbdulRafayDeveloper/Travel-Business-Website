import type { VisaDocument, VisaStage } from "@/types";

/** Honest framing used on every visa surface. */
export const visaDisclaimer =
  "Raahi assists with Umrah visa processing through Saudi Ministry-licensed Umrah operators. Visas are issued by the Kingdom of Saudi Arabia, not by Raahi. Approval, fees and processing times are set by Saudi authorities and may change; we confirm the current requirements with you before any payment.";

export const visaDocuments: VisaDocument[] = [
  { id: "passport", label: "Passport", detail: "Valid for at least 6 months from your travel date, with 2 blank pages. Machine-readable, not hand-written.", required: true },
  { id: "photo", label: "Photograph", detail: "Recent colour photo, white background, 4×6 cm, no glasses, face uncovered (hijab allowed).", required: true },
  { id: "cnic", label: "CNIC copy (B-form for children)", detail: "Clear copy of both sides. Children under 18 need a B-form / CRC from NADRA.", required: true },
  { id: "polio", label: "Polio vaccination card", detail: "Oral polio drops within the last 12 months, stamped by a government health centre. Required at Pakistani airports.", required: true },
  { id: "vaccination", label: "Other vaccinations", detail: "Meningitis (ACWY) certificate or any vaccine required by Saudi rules at the time of travel. We will tell you what applies.", required: false },
  { id: "mahram", label: "Mahram / relationship proof", detail: "Nikah nama or FRC when spouses or children have different surnames. Not needed for women travelling without a mahram under current rules.", required: false },
  { id: "previous", label: "Previous Saudi visa (if any)", detail: "Helps us avoid duplicate-record issues in the Saudi system.", required: false },
];

export const visaStages: VisaStage[] = [
  { id: "received", title: "Documents received", detail: "We check passport validity, photo quality and CNIC details within one working day." },
  { id: "payment", title: "Deposit confirmed", detail: "Your PKR 50,000 per person deposit is receipted and your booking number issued." },
  { id: "submitted", title: "Submitted to licensed operator", detail: "Your application is lodged in the Saudi system through our Saudi-licensed Umrah operator." },
  { id: "issued", title: "Visa issued", detail: "Your e-visa PDF is sent on WhatsApp and email. We check every name and date against your passport." },
  { id: "travelpack", title: "Travel pack delivered", detail: "Tickets, hotel vouchers, transport details and your group leader's number arrive 7 days before departure." },
];

export const visaFacts = [
  { label: "Typical processing", value: "2 – 7 working days", note: "after complete documents and deposit" },
  { label: "Visa validity", value: "90 days", note: "stay up to 90 days, multiple cities" },
  { label: "Our processing fee", value: "Included", note: "in every package; PKR 12,000 if booked without a package" },
  { label: "Saudi visa fee", value: "Included", note: "with mandatory medical insurance" },
];

export const visaFaqs = [
  {
    q: "Is this form an official Saudi visa application?",
    a: "No. Sending your documents here starts a consultation with Raahi. Your consultant reviews them and, once you confirm a booking, submits the application through our Saudi-licensed Umrah operator.",
  },
  {
    q: "Can I get an Umrah visa without buying a package?",
    a: "Yes. We process visa-only requests for travellers who arrange their own flights and hotels. The fee is PKR 12,000 plus the Saudi visa and insurance charge, which we quote at the current rate.",
  },
  {
    q: "Where do I upload my documents?",
    a: "Use the secure form on this page or send clear photos on WhatsApp. Never share your documents with anyone who is not a named Raahi consultant.",
  },
  {
    q: "How do I track my application?",
    a: "Enter your booking number in the tracker on this page. Your consultant also updates you on WhatsApp at every stage.",
  },
];

/** Demo lookup used by the status tracker; real bookings would come from the operations system. */
export const demoTracking: Record<string, { name: string; package: string; stageIndex: number; updatedOn: string }> = {
  "RH-2026-1042": { name: "M. A***", package: "Standard Umrah · 12 Nights", stageIndex: 3, updatedOn: "2026-10-09" },
  "RH-2026-1077": { name: "S. T***", package: "Family Umrah · 14 Nights", stageIndex: 1, updatedOn: "2026-10-10" },
  "RH-2026-1101": { name: "H. R***", package: "Economy Umrah · 10 Nights", stageIndex: 4, updatedOn: "2026-10-08" },
};
