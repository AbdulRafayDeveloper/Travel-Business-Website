"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { productImages, siteImages } from "@/constants/images";

/** Photo per solution, in the same order as servicesPage.solutions.items */
const solutionImages: string[] = [
  siteImages.sourcing,
  productImages["cnc-cutting"],
  siteImages.aboutGallery[1],
  siteImages.aboutGallery[2],
  siteImages.aboutGallery[0],
  siteImages.logistics,
  siteImages.aboutGallery[3],
  siteImages.aboutOverview,
];

/** Solutions as a horizontal, snap-scrolling strip of tall photo panels. */
export function ServicesGrid() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap overflow-hidden">
      <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto flex items-end justify-between gap-6 mb-8 text-start">
        <h2 className="display-title text-4xl md:text-6xl text-primary">{t.servicesPage.solutions.title}</h2>
        <span className="hidden md:inline-flex items-center gap-2 font-display text-lg font-semibold uppercase tracking-[0.2em] text-secondary">
          {t.servicesPage.solutions.scrollHint}
          <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
        </span>
      </div>
      <div className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory ps-4 md:ps-[max(40px,calc((100vw-1280px)/2+40px))] pe-4 pb-4">
        {t.servicesPage.solutions.items.map((item, index) => (
          <figure key={index} className="relative flex-shrink-0 w-[78vw] sm:w-[360px] h-[440px] md:h-[500px] snap-start overflow-hidden rounded-sm text-start">
            <Image src={solutionImages[index]} alt={item.bgAlt} fill sizes="(max-width: 640px) 78vw, 360px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11224E] via-[#11224E]/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white hero-text-shadow">
              <span className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-[#F87B1B]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="display-title text-3xl mt-1 mb-2">{item.title}</h3>
              <p className="text-base md:text-lg text-white/95 leading-snug">{item.desc}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
