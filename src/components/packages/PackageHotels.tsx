import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Stars } from "@/components/ui/Stars";
import { getHotel } from "@/data/hotels";
import type { HotelStay } from "@/types";
import { formatDistance } from "@/lib/utils";

interface PackageHotelsProps {
  makkah: HotelStay;
  madinah: HotelStay;
}

/** Two hotel panels with arch photos and distance ledgers. */
export function PackageHotels({ makkah, madinah }: PackageHotelsProps) {
  const stays = [
    { label: "Makkah", stay: makkah, hotel: getHotel(makkah.hotelId), gate: "Masjid al-Haram" },
    { label: "Madinah", stay: madinah, hotel: getHotel(madinah.hotelId), gate: "Masjid an-Nabawi" },
  ];
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {stays.map(({ label, stay, hotel, gate }) => (
        <article key={hotel.id} className="flex flex-col">
          <div className="arch-mask relative aspect-[4/3] overflow-hidden">
            <Image src={hotel.image} alt={hotel.name} fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
          </div>
          <p className="eyebrow mt-4 text-gold-deep">{label} · {stay.nights} nights</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-haram-deep">{hotel.name}</h3>
          <Stars value={hotel.stars} className="mt-1" />
          <dl className="mt-4 divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between gap-4 py-2"><dt className="text-slate">Distance to {gate}</dt><dd className="font-semibold text-ink">{formatDistance(hotel.distanceM)} · {hotel.walkMinutes} min walk</dd></div>
            <div className="flex justify-between gap-4 py-2"><dt className="text-slate">Shuttle</dt><dd className="font-semibold text-ink">{hotel.shuttle ? "Free, 24 hours" : "Not needed"}</dd></div>
            <div className="flex justify-between gap-4 py-2"><dt className="text-slate">Meals</dt><dd className="font-semibold text-ink">{hotel.meals}</dd></div>
            <div className="flex justify-between gap-4 py-2"><dt className="text-slate">Rooms</dt><dd className="font-semibold text-ink">{hotel.roomType}</dd></div>
          </dl>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {hotel.amenities.map((a) => (
              <li key={a} className="flex items-center gap-1 rounded-md bg-sand px-2 py-1 text-xs font-semibold text-ink"><Icon name="check" className="text-[14px] text-haram" />{a}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
