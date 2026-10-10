import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

const title = "Terms & Conditions";
const description = "Booking terms for Raahi Umrah & Travel packages: quotes, deposits, prices, visas, hotels, flights, changes, responsibilities and complaints.";
const path = "/terms-and-conditions";

export const metadata: Metadata = buildMetadata({ title, description, path });

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [`${siteConfig.legalName} ("Raahi", "we") is a licensed Umrah operator in Pakistan. These terms apply to every quote, booking and service we provide. By paying a deposit you accept them.`],
  },
  {
    heading: "Quotes and prices",
    paragraphs: [
      "Prices on the website are per person in Pakistani Rupees for the room sharing shown and include the items listed under 'Included' on each package. They are updated on the date printed under each package and are valid for bookings confirmed with a deposit while that date is current.",
      "A written quote is valid for seven days. Once your deposit is receipted, the quoted price is fixed except for new taxes or fees introduced by Saudi or Pakistani authorities after booking, or airline fuel surcharges applied before ticketing, which are passed on at cost with written notice.",
    ],
  },
  {
    heading: "Booking and payment",
    paragraphs: [],
    bullets: [
      "A deposit of PKR 50,000 per person confirms a booking and starts visa processing.",
      "The balance is due 21 days before departure, or immediately for departures within 21 days.",
      "Instalments are available at no extra charge for departures more than two months away. The schedule is written on your booking form.",
      "Payments must be made only to the official accounts listed on our Payment Safety page. We are not responsible for money paid to any other account.",
      "A receipt with a booking number is issued for every payment.",
    ],
  },
  {
    heading: "Visas",
    paragraphs: [
      "Umrah visas are issued by the Kingdom of Saudi Arabia. Raahi prepares and submits applications through Saudi-licensed Umrah operators but does not issue visas and cannot guarantee approval or processing time. Saudi visa fees and insurance are non-refundable once the application is submitted.",
      "You are responsible for providing accurate documents. Delays or refusals caused by incorrect, expired or incomplete documents are not Raahi's responsibility, although we will help you resolve them where possible.",
    ],
  },
  {
    heading: "Hotels, flights and transport",
    paragraphs: [
      "Hotels are named on each package. If a named hotel becomes unavailable for reasons beyond our control, we provide a hotel of the same star rating and equal or closer distance to the Haram, and inform you in writing before departure. If only a lesser hotel is available you may accept it with a refund of the difference or cancel with a full refund of hotel costs.",
      "Flight times, airlines and routings may change by the airline. Transfers are provided as described on the package. Shared transport may wait for other passengers on the same flight.",
    ],
  },
  {
    heading: "Changes and cancellations",
    paragraphs: ["Cancellation charges are set out in the Refund Policy. Name changes after ticketing are subject to airline charges. Date changes are treated as a cancellation and new booking unless the airline and hotels allow amendment."],
  },
  {
    heading: "Your responsibilities",
    paragraphs: [],
    bullets: [
      "Hold a passport valid for at least six months from your travel date.",
      "Obtain vaccinations required by Pakistani and Saudi authorities, including the polio vaccination card.",
      "Arrive at the airport at the time advised by your group leader.",
      "Follow Saudi laws and the rules of the Haramain, and the instructions of the group leader on safety matters.",
      "Inform us before booking of any medical condition or mobility need so suitable arrangements can be made.",
    ],
  },
  {
    heading: "Our liability",
    paragraphs: [
      "Raahi is responsible for providing the services described in your booking confirmation. We are not liable for loss or delay caused by airlines, weather, government actions, illness, strikes, or other events outside our control, but we will assist you with alternatives at cost. Travel insurance beyond the mandatory Saudi medical cover is recommended and available on request.",
    ],
  },
  {
    heading: "Complaints",
    paragraphs: [`Raise any problem with your group leader or consultant immediately so it can be fixed during the trip. Written complaints to ${siteConfig.email} within 30 days of return are answered by a senior consultant within seven working days. Disputes are subject to the courts of Lahore, Pakistan.`],
  },
];

export default function TermsPage() {
  return <LegalPage title={title} description={description} path={path} updatedOn="2026-10-01" intro="Short, plain-language terms. The parts that matter most are prices, visas, hotels and cancellations, and we have put them first." sections={sections} />;
}
