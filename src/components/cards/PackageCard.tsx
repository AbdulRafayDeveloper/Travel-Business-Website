import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { PriceBlock } from "@/components/ui/PriceBlock";
import { Stars } from "@/components/ui/Stars";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { whatsappUrl } from "@/config/site";
import { getHotel } from "@/data/hotels";
import type { UmrahPackage } from "@/types";
import { cn, formatDistance, nightsToDays, tierLabels } from "@/lib/utils";

interface PackageCardProps {
  pkg: UmrahPackage;
  /** Background behind the card, used to colour the ticket notches. */
  surface?: "ivory" | "sand";
  className?: string;
}

export function packageWhatsAppMessage(pkg: UmrahPackage): string {
  return `Assalam o Alaikum, I am interested in the ${pkg.name} package (from PKR ${pkg.prices.quad.toLocaleString("en-PK")} per person, quad). Please share availability and details.`;
}

/** Ticket-stub style package card: photo, stub details, perforation, Q/T/D prices. */
export function PackageCard({ pkg, surface = "ivory", className }: PackageCardProps) {
  const makkah = getHotel(pkg.makkah.hotelId);
  const madinah = getHotel(pkg.madinah.hotelId);
  const href = `/umrah-packages/${pkg.slug}`;

  return (
    <article className={cn("ticket-notch flex h-full flex-col rounded-2xl border border-line bg-white shadow-card transition-transform hover:-translate-y-1", surface === "sand" && "on-sand", className)} style={{ ["--notch-top" as string]: "calc(100% - 176px)" }}>
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden rounded-t-2xl">
        <Image src={pkg.image} alt={`${pkg.name} — ${makkah.name}`} fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <Badge tone={pkg.tier === "vip" ? "night" : pkg.tier === "premium" ? "gold" : "green"}>{tierLabels[pkg.tier]} · {pkg.stars}★</Badge>
          {pkg.seatsLeft !== undefined && <Badge tone="sunset" icon="local_fire_department">{pkg.seatsLeft} seats left</Badge>}
        </div>
        <div className="hero-overlay-bottom absolute inset-x-0 bottom-0 p-4 text-white">
          <p className="eyebrow !tracking-[0.16em] text-gold-pale">{nightsToDays(pkg.nights)}</p>
          <h3 className="font-display text-2xl font-semibold leading-tight">{pkg.name}</h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col px-5 pt-4">
        <ul className="space-y-2 text-sm text-ink">
          <li className="flex items-start gap-2">
            <Icon name="mosque" className="mt-0.5 text-[18px] text-haram" />
            <span>
              <span className="font-semibold">Makkah</span> · {pkg.makkah.nights}N {makkah.name}
              <span className="text-slate"> · {makkah.shuttle ? "free shuttle" : `${formatDistance(makkah.distanceM)} walk`}</span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="mosque" className="mt-0.5 text-[18px] text-haram" />
            <span>
              <span className="font-semibold">Madinah</span> · {pkg.madinah.nights}N {madinah.name}
              <span className="text-slate"> · {formatDistance(madinah.distanceM)} walk</span>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="restaurant" className="mt-0.5 text-[18px] text-haram" />
            <span>{pkg.meals}</span>
          </li>
          <li className="flex items-start gap-2">
            <Icon name="flight" className="mt-0.5 text-[18px] text-haram" />
            <span>{pkg.airlines.join(" / ")} · from {pkg.departureCities.slice(0, 3).join(", ")}{pkg.departureCities.length > 3 ? " +" : ""}</span>
          </li>
        </ul>
        <div className="mt-auto flex items-center justify-between pt-4 text-xs text-slate">
          <span className="flex items-center gap-1.5"><Stars value={pkg.stars} /> hotels</span>
          <span className="flex items-center gap-1"><Icon name="verified" className="text-[14px] text-haram" /> Visa + transfers + ziyarat</span>
        </div>
      </div>

      <div className="perforated mx-5 my-4" aria-hidden="true" />

      <div className="px-5 pb-5">
        <PriceBlock prices={pkg.prices} size="sm" />
        <p className="mt-1 text-[0.7rem] text-slate">Per person · includes visa, flights, hotels &amp; transfers</p>
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <Link href={href} className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-haram px-4 py-2.5 text-sm font-bold text-white hover:bg-haram-deep">
            View details <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
          <a href={whatsappUrl(packageWhatsAppMessage(pkg))} target="_blank" rel="noopener noreferrer" aria-label={`Ask about ${pkg.name} on WhatsApp`} className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-whatsapp text-white hover:bg-whatsapp-deep">
            <WhatsAppIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
