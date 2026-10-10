"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";

export function ProductShowcase() {
  const { t } = useLanguage();

  const showcaseImages = siteImages.aluminumShowcase;

  return (
    <section className="mt-16 md:mt-section-gap text-start">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-1 bg-primary"></div>
        <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
          {t.scrapDetail.showcase.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {showcaseImages.map((src, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-outline-variant/30 relative"
          >
            <Image
              src={src}
              alt={t.scrapDetail.showcase.imgAlts[index]}
              fill
              sizes="(max-w-768px) 50vw, 25vw"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
