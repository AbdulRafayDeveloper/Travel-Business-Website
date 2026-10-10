import { PackageCard } from "@/components/cards/PackageCard";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { featuredPackages, packages } from "@/data/packages";
import { formatDate } from "@/lib/utils";

export function HomeFeaturedPackages() {
  return (
    <section className="bg-sand py-section-sm md:py-section" aria-label="Featured packages">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            number="01"
            eyebrow="Umrah packages"
            urdu="ہر بجٹ کے لیے عمرہ پیکج"
            title={<>Packages with <em>every price</em> on the table.</>}
            lede="Quad, Triple and Double rates per person, hotels named, distance to the Haram in metres. Compare and choose without a single phone call if you prefer."
          />
          <div className="flex flex-col items-start gap-2 md:items-end">
            <p className="flex items-center gap-1.5 text-sm text-slate">
              <Icon name="update" className="text-[18px] text-haram" /> Prices updated {formatDate(siteConfig.pricesUpdatedOn)}
            </p>
            <LinkButton href="/umrah-packages" variant="outline" icon="arrow_forward">All {packages.length} packages</LinkButton>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredPackages.slice(0, 6).map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} surface="sand" />
          ))}
        </div>
      </Container>
    </section>
  );
}
