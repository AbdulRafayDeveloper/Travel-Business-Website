import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PackagesIncluded } from "@/components/sections/PackagesIncluded";
import { PaymentPlans } from "@/components/sections/PaymentPlans";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { PackagesExplorer } from "@/features/packages/PackagesExplorer";
import { siteConfig } from "@/config/site";
import { faqGroups } from "@/data/faqs";
import { siteImages } from "@/data/images";
import { cheapestPackagePrice, packages } from "@/data/packages";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildPackageSchema, buildWebPageSchema } from "@/lib/seo";
import { formatDate, formatPkr } from "@/lib/utils";

const title = "Umrah Packages from Pakistan 2026 to 2027 with Prices";
const description = `Compare ${packages.length} Umrah packages from Lahore, Karachi and Islamabad with per-person prices for Quad, Triple and Double rooms, named Makkah and Madinah hotels, airlines and inclusions. From ${formatPkr(cheapestPackagePrice)}.`;
const path = "/umrah-packages";

export const metadata: Metadata = buildMetadata({ title, description, path, photo: "packagesHero" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Umrah Packages", path },
];

const packageFaqs = faqGroups[0].items;

export default function UmrahPackagesPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildWebPageSchema({ name: title, description, path, type: "CollectionPage" })} />
      <JsonLd data={buildFaqSchema(packageFaqs)} />
      <JsonLd data={packages.map(buildPackageSchema)} />

      <PageHero
        crumbs={crumbs}
        variant="photo"
        image={siteImages.packagesHero}
        urdu="عمرہ پیکجز، مکمل قیمتوں کے ساتھ"
        eyebrow={`${packages.length} packages, prices updated ${formatDate(siteConfig.pricesUpdatedOn)}`}
        title={<>Umrah packages with <em className="text-gold">honest prices</em>.</>}
        lede="Filter by hotel category, length and departure city. Every price is per person and already includes visa, flights, hotels, transfers and ziyarat."
      >
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/85">
          <li className="flex items-center gap-1.5"><Icon name="price_check" filled className="text-[18px] text-gold" /> No hidden charges</li>
          <li className="flex items-center gap-1.5"><Icon name="directions_walk" className="text-[18px] text-gold" /> Distance in metres</li>
          <li className="flex items-center gap-1.5"><Icon name="compare_arrows" className="text-[18px] text-gold" /> Compare up to three</li>
          <li className="flex items-center gap-1.5"><Icon name="edit" className="text-[18px] text-gold" /> Every package customisable</li>
        </ul>
      </PageHero>

      <section className="bg-ivory pb-section-sm md:pb-section" aria-label="Package catalogue">
        <Container>
          <PackagesExplorer packages={packages} />
        </Container>
      </section>

      <PackagesIncluded />
      <PaymentPlans />
      <FaqSection items={packageFaqs} eyebrow="Package questions" lede="The questions families ask most before choosing a package." />
      <CtaBand image={siteImages.tawaf} title={<>Want a package built <em className="text-gold">around you</em>?</>} text="Different hotel, extra nights, a group from your masjid, or a budget to match: tell us and we quote in writing the same day." whatsappMessage="Assalam o Alaikum, I would like a customised Umrah package quote." />
    </>
  );
}
