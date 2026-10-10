import type { Metadata } from "next";
import { HomeDepartures } from "@/components/home/HomeDepartures";
import { HomeDirector } from "@/components/home/HomeDirector";
import { HomeFeaturedPackages } from "@/components/home/HomeFeaturedPackages";
import { HomeFinalCta } from "@/components/home/HomeFinalCta";
import { HomeGuides } from "@/components/home/HomeGuides";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeHotelsTeaser } from "@/components/home/HomeHotelsTeaser";
import { HomeHowItWorks } from "@/components/home/HomeHowItWorks";
import { HomeReviews } from "@/components/home/HomeReviews";
import { HomeStats } from "@/components/home/HomeStats";
import { HomeTrustStrip } from "@/components/home/HomeTrustStrip";
import { HomeVisaBand } from "@/components/home/HomeVisaBand";
import { HomeWhyRaahi } from "@/components/home/HomeWhyRaahi";
import { NoticeRibbon } from "@/components/layout/NoticeRibbon";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/config/site";
import { homeFaqs } from "@/data/faqs";
import { buildFaqSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

const title = `${siteConfig.fullName} | Umrah Packages from Pakistan with Real Prices`;
const description =
  "Transparent Umrah packages from Lahore, Karachi and Islamabad. Quad, Triple and Double prices per person, inspected Makkah and Madinah hotels, visa assistance, group departures and 24/7 WhatsApp support from a licensed operator.";

export const metadata: Metadata = {
  ...buildMetadata({ title, description, path: "" }),
  title: { absolute: title },
};

const notices = [
  { icon: "nights_stay", text: "Ramadan 2027 last-Ashra groups: 14 seats left across Lahore, Karachi and Islamabad.", urdu: "رمضان کے آخری عشرے کی نشستیں محدود ہیں" },
  { icon: "update", text: `All package prices verified on ${formatDate(siteConfig.pricesUpdatedOn)}. The price you see is the price you pay.` },
  { icon: "vaccines", text: "Polio vaccination card is mandatory at Pakistani airports for all Umrah travellers." },
  { icon: "event", text: "December school-holiday departures from Lahore, Karachi and Islamabad now open." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: title, description, path: "" })} />
      <JsonLd data={buildFaqSchema(homeFaqs)} />
      <HomeHero />
      <NoticeRibbon notices={notices} />
      <HomeStats />
      <HomeFeaturedPackages />
      <HomeHowItWorks />
      <HomeWhyRaahi />
      <HomeHotelsTeaser />
      <HomeDepartures />
      <HomeReviews />
      <HomeVisaBand />
      <HomeGuides />
      <HomeTrustStrip />
      <HomeDirector />
      <HomeFinalCta />
    </>
  );
}
