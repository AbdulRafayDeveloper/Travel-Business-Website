import Link from "next/link";
import { packageWhatsAppMessage } from "@/components/cards/PackageCard";
import { LinkButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { contactNumber, whatsappUrl } from "@/config/site";
import { planHref } from "@/config/navigation";
import type { RoomType, UmrahPackage } from "@/types";
import { formatDate, formatPkr, roomLabels } from "@/lib/utils";

interface PackagePriceCardProps {
  pkg: UmrahPackage;
}

const rooms: Array<{ key: RoomType; note: string }> = [
  { key: "quad", note: "4 in a room · best value" },
  { key: "triple", note: "3 in a room" },
  { key: "double", note: "2 in a room · couples" },
];

/** Sticky booking aside: per-person price ledger, deposit note, CTAs. */
export function PackagePriceCard({ pkg }: PackagePriceCardProps) {
  return (
    <aside className="rounded-2xl border border-line bg-white p-5 shadow-soft md:p-6" aria-label="Prices and booking">
      <p className="eyebrow text-gold-deep">Per person · all inclusive</p>
      <ul className="mt-3 divide-y divide-line">
        {rooms.map((r) => (
          <li key={r.key} className="flex items-center justify-between py-3">
            <div>
              <p className="font-bold text-ink">{roomLabels[r.key]}</p>
              <p className="text-xs text-slate">{r.note}</p>
            </div>
            <p className="font-display text-2xl font-semibold text-haram-deep">
              <span className="me-1 align-top font-sans text-xs font-bold">PKR</span>
              {formatPkr(pkg.prices[r.key], false)}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-1.5 text-xs text-slate"><Icon name="update" className="text-[16px] text-haram" /> Prices updated {formatDate(pkg.pricesUpdatedOn)} · child discount on request</p>

      <div className="mt-5 rounded-lg bg-sand p-3 text-sm text-ink">
        <p className="font-bold">Confirm with PKR 50,000 per person</p>
        <p className="text-slate">Balance 21 days before departure. Instalments available, no extra fee.</p>
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <LinkButton href={whatsappUrl(packageWhatsAppMessage(pkg))} variant="whatsapp" size="lg" fullWidth>Ask on WhatsApp</LinkButton>
        <LinkButton href={`${planHref}?package=${pkg.slug}`} variant="primary" size="lg" fullWidth icon="arrow_forward">Request this package</LinkButton>
        <LinkButton href={contactNumber.telUrl} variant="outline" fullWidth icon="call" iconPosition="start"><span dir="ltr">{contactNumber.display}</span></LinkButton>
      </div>
      {pkg.seatsLeft !== undefined && (
        <p className="mt-4 flex items-center gap-1.5 text-sm font-bold text-sunset"><Icon name="local_fire_department" className="text-[18px]" /> Only {pkg.seatsLeft} seats left on this departure</p>
      )}
      <p className="mt-4 text-xs text-slate">
        Free cancellation before visa submission (minus PKR 5,000). See the <Link href="/refund-policy" className="font-semibold text-haram underline">refund policy</Link>.
      </p>
    </aside>
  );
}
