"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSupplyChain() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-white border-y border-outline-variant/30 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <div className="text-start space-y-8">
          <h2 className="text-2xl md:text-4xl font-bold text-primary">
            {t.servicesPage.supplyChain.title}
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed">
            {t.servicesPage.supplyChain.desc}
          </p>
          <div className="space-y-6 pt-4">
            {t.servicesPage.supplyChain.features.map((feat, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-2xl">
                    {feat.icon}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-primary">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-secondary">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Map */}
        <div className="relative h-[450px] bg-surface-container rounded-3xl border border-outline-variant/30 overflow-hidden group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkKCpJJgELiAWP76F6-6e-FXFTvC2QaprjEuOFeusZWqkMP9Ppj5oF8nkY5aIJ4AgIrPjOT9mxlq4nkY06JAf5LDMDJcrCkoIXBbxm0MB9NLrr87nZ4RNxgftNtdIJF-7lhEoPNBbEEGuSLurkK9pcknUWyQKwwHjNQV8OsY7OYyNArCORGYpoxdKsULlVfTI91RFAjibPYTgJIgSRh3kIthTC-q1d7qnTVejI_vQQXzzgeiBrhstJ"
            alt={t.servicesPage.supplyChain.mapAlt}
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-300"
          />
          {/* Map Pin Overlays */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-tertiary-fixed-dim rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-tertiary-fixed-dim rounded-full animate-pulse delay-75"></div>
          <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-tertiary-fixed-dim rounded-full animate-ping delay-150"></div>
          <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-tertiary-fixed-dim rounded-full animate-pulse"></div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="bg-primary/95 text-white px-6 py-3 rounded-lg text-xs font-bold backdrop-blur shadow-md">
              {t.servicesPage.supplyChain.mapLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
