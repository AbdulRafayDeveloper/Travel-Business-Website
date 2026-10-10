"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";
import { SectionHeading } from "@/components/SectionHeading";

/** Company introduction: offset-framed photo, dashed checklist, link to /about. */
export function HomeAboutTeaser() {
  const { t } = useLanguage();
  const a = t.homePage.aboutTeaser;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 photo-frame me-4">
          <div className="relative h-[340px] md:h-[480px] overflow-hidden">
            <Image
              src={siteImages.aboutOverview}
              alt={t.about.overview.imgAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeading kicker={a.tag} title={a.title} lede={a.desc} />
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
            {a.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-on-surface text-lg font-semibold text-start">
                <span className="mt-3 block w-6 h-0.5 bg-[#F87B1B] flex-shrink-0" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 font-display text-xl md:text-2xl font-bold uppercase tracking-wide text-primary border-b-[3px] border-[#F87B1B] pb-1 hover:text-[#F87B1B] transition-colors"
          >
            {a.cta}
            <span className="material-symbols-outlined text-2xl rtl:rotate-180">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
