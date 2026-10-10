"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";

/** Two full-bleed photo panels for the turnkey project pages (no cards, no gaps). */
export function HomeFeaturedProjects() {
  const { t } = useLanguage();
  const f = t.homePage.featured;
  const images = [siteImages.pebHero, siteImages.canopyNight];

  return (
    <section className="bg-primary">
      <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto pt-14 md:pt-20 pb-8 text-start">
        <p className="font-display text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#F87B1B] mb-3">{f.tag}</p>
        <h2 className="display-title text-4xl md:text-6xl text-white max-w-4xl">{f.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {f.items.map((item, index) => (
          <Link key={index} href={item.href} className="group relative h-[380px] md:h-[520px] overflow-hidden text-start">
            <Image
              src={images[index]}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11224E] via-[#11224E]/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-white hero-text-shadow">
              <span className="font-display text-lg font-semibold uppercase tracking-[0.2em] text-[#F87B1B]">0{index + 1}</span>
              <h3 className="display-title text-4xl md:text-5xl mt-2 mb-3">{item.title}</h3>
              <p className="text-lg text-white/95 max-w-md mb-5 leading-relaxed">{item.desc}</p>
              <span className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wide border-b-[3px] border-[#F87B1B] pb-1 group-hover:text-[#F87B1B] transition-colors">
                {item.cta}
                <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
