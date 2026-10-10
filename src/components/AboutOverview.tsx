"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";

export function AboutOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Text Description */}
        <div className="lg:col-span-7 space-y-6 text-start">
          <h2 className="display-title text-4xl md:text-6xl text-primary">{t.about.overview.title}</h2>
          <p className="text-xl md:text-2xl text-on-surface leading-relaxed">{t.about.overview.p1}</p>
          <p className="text-lg md:text-xl text-secondary leading-relaxed">{t.about.overview.p2}</p>
        </div>

        {/* Facility Image */}
        <div className="lg:col-span-5 photo-frame me-4">
          <div className="relative h-[340px] md:h-[440px] w-full overflow-hidden">
            <Image
              src={siteImages.aboutOverview}
              alt={t.about.overview.imgAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
