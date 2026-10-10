import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { DepartureList } from "@/components/cards/DepartureList";
import { PackageCard } from "@/components/cards/PackageCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PackageHotels } from "@/components/packages/PackageHotels";
import { PackageInclusions } from "@/components/packages/PackageInclusions";
import { PackageItinerary } from "@/components/packages/PackageItinerary";
import { PackagePriceCard } from "@/components/packages/PackagePriceCard";
import { PackageSummaryBar } from "@/components/packages/PackageSummaryBar";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stars } from "@/components/ui/Stars";
import { departuresForPackage } from "@/data/departures";
import { faqGroups } from "@/data/faqs";
import { getHotel } from "@/data/hotels";
import { howItWorks } from "@/data/company";
import { getPackage, packages, relatedPackages } from "@/data/packages";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata, buildPackageSchema } from "@/lib/seo";
import { formatPkr, nightsToDays, tierLabels } from "@/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) return { title: "Package not found" };
  const makkah = getHotel(pkg.makkah.hotelId);
  const madinah = getHotel(pkg.madinah.hotelId);
  return buildMetadata({
    title: `${pkg.name} from ${formatPkr(pkg.prices.quad)} per person`,
    description: `${pkg.nights}-night ${tierLabels[pkg.tier]} Umrah package from ${pkg.departureCities.slice(0, 3).join(", ")}: ${pkg.makkah.nights} nights at ${makkah.name} (Makkah) and ${pkg.madinah.nights} nights at ${madinah.name} (Madinah). Quad ${formatPkr(pkg.prices.quad)}, Triple ${formatPkr(pkg.prices.triple)}, Double ${formatPkr(pkg.prices.double)}. Visa, flights, transfers and ziyarat included.`,
    path: `/umrah-packages/${pkg.slug}`,
    image: pkg.image,
    type: "article",
  });
}

const bookingFaqs = [faqGroups[2].items[0], faqGroups[2].items[1], faqGroups[2].items[2], faqGroups[0].items[2], faqGroups[0].items[3]];

export default async function PackageDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) notFound();

  const path = `/umrah-packages/${pkg.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Umrah Packages", path: "/umrah-packages" },
    { name: pkg.shortName, path },
  ];
  const departures = departuresForPackage(pkg.slug);
  const related = relatedPackages(pkg);

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(crumbs)} />
      <JsonLd data={buildPackageSchema(pkg)} />
      <JsonLd data={buildFaqSchema(bookingFaqs)} />

      {/* Hero: photo left, title right, no overlay band */}
      <section className="bg-ivory">
        <Container className="pt-6 md:pt-8">
          <Breadcrumbs items={crumbs} />
        </Container>
        <Container className="mt-5 grid gap-8 pb-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-soft">
            <Image src={pkg.image} alt={`${pkg.name}, ${getHotel(pkg.makkah.hotelId).name}`} fill priority sizes="(min-width: 1024px) 680px, 100vw" className="object-cover" />
            <div className="absolute start-4 top-4 flex gap-2">
              <Badge tone={pkg.tier === "vip" ? "night" : pkg.tier === "premium" ? "gold" : "green"}>{tierLabels[pkg.tier]} · {pkg.stars}★</Badge>
              {pkg.tags.includes("popular") && <Badge tone="sunset" icon="trending_up">Most booked</Badge>}
            </div>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2 text-gold-deep"><span className="h-px w-8 bg-gold" aria-hidden="true" />{nightsToDays(pkg.nights)}</p>
            <h1 className="display-title mt-3 text-4xl text-haram-deep sm:text-5xl lg:text-6xl">{pkg.name}</h1>
            <p className="lede mt-4 text-slate">{pkg.bestFor}</p>
            <ul className="mt-6 space-y-2">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-ink"><Icon name="check_circle" filled className="mt-0.5 text-[20px] text-haram" />{h}</li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-sm text-slate"><Stars value={pkg.stars} /> {pkg.stars}-star hotels in both cities · from {formatPkr(pkg.prices.quad)} per person</p>
          </div>
        </Container>
      </section>

      <PackageSummaryBar pkg={pkg} />

      {/* Body: content left, sticky price card right */}
      <section className="bg-ivory py-section-sm md:py-section">
        <Container className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-14">
          <div className="space-y-16">
            <div id="hotels">
              <SectionHeading number="01" eyebrow="Your hotels" title={<>Where you will <em>stay</em>.</>} size="md" />
              <div className="mt-8"><PackageHotels makkah={pkg.makkah} madinah={pkg.madinah} /></div>
            </div>

            <div id="itinerary">
              <SectionHeading number="02" eyebrow="Day by day" title={<>Your <em>{pkg.nights + 1}-day</em> itinerary.</>} size="md" lede={`Transport: ${pkg.transport}.`} />
              <div className="mt-8"><PackageItinerary days={pkg.itinerary} /></div>
            </div>

            <div id="inclusions">
              <SectionHeading number="03" eyebrow="Inclusions" title={<>What is <em>in</em> the price.</>} size="md" />
              <div className="mt-8"><PackageInclusions inclusions={pkg.inclusions} exclusions={pkg.exclusions} /></div>
            </div>

            <div id="departures">
              <SectionHeading number="04" eyebrow="Dates" title={departures.length ? <>Upcoming <em>departures</em>.</> : <>Dates on <em>request</em>.</>} size="md" lede={departures.length ? "Group dates with a Raahi leader. Private dates for families are available on request." : "This package is offered on private dates. Tell us your preferred week and we confirm flights within a day."} />
              {departures.length > 0 && <div className="mt-6 border-t border-line"><DepartureList departures={departures} showPackage={false} /></div>}
            </div>

            <div id="booking">
              <SectionHeading number="05" eyebrow="Booking" title={<>Four steps to <em>confirm</em>.</>} size="md" />
              <ol className="mt-8 grid gap-6 sm:grid-cols-2">
                {howItWorks.map((s) => (
                  <li key={s.step} className="flex gap-4 rounded-xl border border-line bg-white p-4">
                    <span className="font-display text-3xl italic text-gold-deep">{s.step}</span>
                    <div>
                      <p className="font-bold text-ink">{s.title}</p>
                      <p className="mt-1 text-sm text-slate">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <PackagePriceCard pkg={pkg} />
          </div>
        </Container>
      </section>

      <FaqSection items={bookingFaqs} eyebrow="Before you book" lede="Deposit, instalments, children and customisation." />

      <section className="bg-sand py-section-sm md:py-section" aria-label="Related">
        <Container>
          <SectionHeading eyebrow="You may also like" title={<>Similar <em>packages</em>.</>} size="md" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PackageCard key={p.slug} pkg={p} surface="sand" />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title={<>Make this package <em className="text-gold">yours</em>.</>} text="Change the hotel, add nights or travel on your own dates. Tell us what you need and we send a revised written quote the same day." whatsappMessage={`Assalam o Alaikum, I would like to customise the ${pkg.name} package.`} />
    </>
  );
}
