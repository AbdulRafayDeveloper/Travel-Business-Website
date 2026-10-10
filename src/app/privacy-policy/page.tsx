import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/layout/LegalPage";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

const title = "Privacy Policy";
const description = "How Raahi Umrah & Travel collects, uses, stores and shares your personal data, including passport and CNIC copies used for Umrah visa processing.";
const path = "/privacy-policy";

export const metadata: Metadata = buildMetadata({ title, description, path });

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    paragraphs: ["We collect only what is needed to plan and process your Umrah trip."],
    bullets: [
      "Contact details: name, mobile number, email, city.",
      "Trip preferences you give us: dates, duration, hotel category, number of travellers, notes.",
      "Travel documents when you book: passport copy, photograph, CNIC or B-form, vaccination records and, where relevant, relationship documents.",
      "Payment records: receipts and booking numbers. We do not store card numbers.",
      "Website usage: standard server logs (IP address, pages visited, browser type) used for security and performance.",
    ],
  },
  {
    heading: "How we use it",
    paragraphs: ["Your data is used to quote, book and operate your trip, and to contact you about it."],
    bullets: [
      "Preparing quotes and booking confirmations.",
      "Submitting visa applications through Saudi-licensed Umrah operators and the systems required by Saudi authorities.",
      "Booking flights, hotels and transport with airlines and hotels.",
      "Sending travel information, reminders and support messages on WhatsApp, SMS, email or phone.",
      "Meeting legal and regulatory obligations in Pakistan and Saudi Arabia.",
    ],
  },
  {
    heading: "Who we share it with",
    paragraphs: ["We share personal data only with parties needed to deliver your trip, and only the data they need."],
    bullets: [
      "Saudi-licensed Umrah operators and Saudi government visa systems (passport, photo, traveller details).",
      "Airlines, hotels and transport providers (names, passport details, dates).",
      "Our Saudi ground partner who meets groups at airports (names, flight details, contact numbers).",
      "Payment providers and banks (transaction details only).",
      "Authorities where required by law.",
      "We never sell personal data or share it for marketing by others.",
    ],
  },
  {
    heading: "Storage and security",
    paragraphs: [
      "Documents sent to us on WhatsApp or through the website are stored in access-controlled systems available only to the consultants handling your booking. Passport and CNIC copies are deleted from working devices after the trip is completed and retained in secure storage only as long as regulations require (currently up to five years for financial and travel records).",
      "Website forms are transmitted over HTTPS. The document picker on the visa page validates files in your browser; in this demo version nothing is uploaded from that form.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [],
    bullets: [
      "Ask what data we hold about you and receive a copy.",
      "Ask us to correct or delete data we no longer need for an active booking or legal retention.",
      "Opt out of promotional messages at any time by replying STOP on WhatsApp or emailing us.",
      "Withdraw consent for visa processing before submission; after submission, deletion is subject to Saudi rules.",
    ],
  },
  {
    heading: "Cookies and analytics",
    paragraphs: ["This website uses no advertising cookies. Essential technical storage may be used to remember your preferences within a session. If analytics are added in future, this policy will be updated and a notice shown."],
  },
  {
    heading: "Contact",
    paragraphs: [`Privacy questions: ${siteConfig.email}, or write to ${siteConfig.legalName}, Head Office, Lahore. We reply within seven working days.`],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title={title} description={description} path={path} updatedOn="2026-10-01" intro="We handle passports, CNICs and family details for a living, so we take privacy seriously. This page explains in plain language what we collect and why." sections={sections} />;
}
