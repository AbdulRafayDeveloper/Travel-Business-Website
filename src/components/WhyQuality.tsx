"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function WhyQuality() {
  const { t } = useLanguage();
  const qa = t.whyChooseUsPage.qa;
  const supply = t.whyChooseUsPage.supply;

  return (
    <section className="py-16 md:py-24 px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT: Lab image with ISO badge overlay */}
        <div className="relative">
          <div className="rounded-[20px] overflow-hidden shadow-xl border border-outline-variant/40">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPackzDdHYgLWNqhp3ZxwOTsQP88mR5cYUnbQSZqAaWdtH9IItFgco0lzXy2vL44Fh3J8LTuCAqyJhsNRP0qhbQ9-wZA7FknyXCbaf1Pkmrdp7cGYGBty8fORFDnzBlPlRPCP0wsv1KGFHDwY3zwLsrXjDJJ3s71uJ38uMok6QsJw7hWOnc56cqGylEwG0cMfnLTsR1NI_9tIuNChFrQ-oRmZV_AHx_B9a5IZwLnmu_8BTGOIrLhuf"
              alt={qa.imageAlt}
              width={700}
              height={500}
              className="w-full h-[480px] object-cover"
            />
          </div>
          {/* ISO 9001 floating badge — bottom-right of image */}
          <div className="absolute -bottom-6 end-4 md:-bottom-8 md:-end-6 bg-white p-6 rounded-2xl shadow-xl border border-primary/10 max-w-[260px] hidden sm:block z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
              <span className="text-lg font-bold text-primary">{qa.certified}</span>
            </div>
            <p className="text-sm text-secondary leading-snug">{qa.certifiedDesc}</p>
          </div>
        </div>

        {/* RIGHT: QA Standards + Global Supply */}
        <div className="space-y-14 pt-0 md:pt-4">

          {/* Quality Assurance Standards */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-5 flex items-center gap-3 text-start">
              <span className="material-symbols-outlined text-[36px]">fact_check</span>
              {qa.title}
            </h2>
            <p className="text-sm md:text-base text-secondary mb-5 leading-relaxed text-start">
              {qa.desc}
            </p>
            <ul className="space-y-4 text-start">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">check_circle</span>
                <p className="text-sm">
                  <span className="font-bold text-on-surface">{qa.bullet1Title} </span>
                  <span className="text-secondary">{qa.bullet1Desc}</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-0.5 text-[20px]">check_circle</span>
                <p className="text-sm">
                  <span className="font-bold text-on-surface">{qa.bullet2Title} </span>
                  <span className="text-secondary">{qa.bullet2Desc}</span>
                </p>
              </li>
            </ul>
          </div>

          {/* Global Supply Capabilities */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-5 flex items-center gap-3 text-start">
              <span className="material-symbols-outlined text-[36px]">language</span>
              {supply.title}
            </h2>
            <p className="text-sm md:text-base text-secondary mb-6 leading-relaxed text-start">
              {supply.desc}
            </p>

            {/* Interactive Map Placeholder */}
            <div className="rounded-[20px] overflow-hidden border border-outline-variant/40 h-56 grayscale hover:grayscale-0 transition-all duration-500 relative bg-surface-container-high">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, #11224E 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/10 text-[180px]">map</span>
              </div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-start">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  {supply.mapLabel}
                </span>
                <div className="w-10 h-0.5 bg-primary mt-2 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
