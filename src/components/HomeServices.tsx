"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";
import { productImages, siteImages } from "@/constants/images";
import { SectionHeading } from "@/components/SectionHeading";

/** Photo per service, in the same order as translations.homePage.services.items */
const serviceImages: string[] = [
  productImages["cable-tray"],
  productImages["roof-sheets"],
  productImages["racks"],
  productImages["shuttering-plate"],
  productImages["grating"],
  productImages["perforated-plate"],
  productImages["pallet"],
  productImages["solar-stands"],
  productImages["peb"],
  productImages["petrol-pump-canopy"],
  productImages["mezzanine"],
  productImages["railings"],
  productImages["steel-gates"],
  productImages["water-tanks"],
  productImages["poles"],
  productImages["cnc-cutting"],
  productImages["welding"],
  productImages["galvanizing"],
  siteImages.sourcing,
  siteImages.logistics,
];

/**
 * Service explorer: an index of service names on the left; the selected one
 * is shown large on the right. On phones each row expands in place.
 */
export function HomeServices() {
  const { t } = useLanguage();
  const s = t.homePage.services;
  const [active, setActive] = useState(0);
  const current = s.items[active];

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <SectionHeading kicker={s.tag} title={s.title} lede={s.subtitle} className="mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Index */}
          <ol className="lg:col-span-5 border-t rule">
            {s.items.map((item, index) => {
              const isActive = index === active;
              return (
                <li key={index} className="border-b rule">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-expanded={isActive}
                    className={`w-full flex items-center gap-4 py-3.5 text-start cursor-pointer transition-colors ${
                      isActive ? "text-[#F87B1B]" : "text-primary hover:text-[#F87B1B]"
                    }`}
                  >
                    <span className={`block w-1.5 self-stretch ${isActive ? "bg-[#F87B1B]" : "bg-transparent"}`} aria-hidden="true" />
                    <span className="font-display text-base font-semibold text-primary/50 w-7">{String(index + 1).padStart(2, "0")}</span>
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    <span className="font-display text-xl md:text-2xl font-bold uppercase leading-none flex-1">{item.title}</span>
                    <span className="material-symbols-outlined text-xl lg:hidden">{isActive ? "expand_less" : "expand_more"}</span>
                  </button>
                  {/* Phone / tablet: expand in place */}
                  {isActive && (
                    <div className="lg:hidden pb-5 ps-12 text-start">
                      <div className="relative h-48 overflow-hidden rounded-sm mb-3">
                        <Image src={serviceImages[index]} alt={item.title} fill sizes="100vw" className="object-cover" />
                      </div>
                      <p className="text-base md:text-lg text-secondary leading-relaxed">{item.desc}</p>
                      <Link href={item.href} className="inline-flex items-center gap-1 mt-3 font-bold text-primary border-b-2 border-[#F87B1B]">
                        {t.homePage.products.learnMore}
                        <span className="material-symbols-outlined text-lg rtl:rotate-180">arrow_forward</span>
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Desktop detail panel */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="sticky top-28">
              <div className="photo-frame me-4">
                <div className="relative h-[520px] overflow-hidden">
                  <Image key={active} src={serviceImages[active]} alt={current.title} fill sizes="60vw" className="object-cover" priority={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11224E] via-[#11224E]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white hero-text-shadow text-start">
                    <p className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-[#F87B1B] mb-2">
                      {String(active + 1).padStart(2, "0")} / {String(s.items.length).padStart(2, "0")}
                    </p>
                    <h3 className="display-title text-4xl xl:text-5xl mb-3">{current.title}</h3>
                    <p className="text-lg text-white/95 max-w-xl leading-relaxed">{current.desc}</p>
                    <Link
                      href={current.href}
                      className="inline-flex items-center gap-2 mt-5 bg-[#F87B1B] text-primary font-display text-xl font-bold uppercase tracking-wide px-6 py-3 rounded-md hover:bg-white transition-colors"
                    >
                      {t.homePage.products.learnMore}
                      <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t rule pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="display-title text-3xl md:text-4xl text-primary">{s.cta}</p>
          <ContactActions variant="onLight" size="lg" showNumber />
        </div>
      </div>
    </section>
  );
}
