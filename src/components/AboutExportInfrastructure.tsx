"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function AboutExportInfrastructure() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        {t.about.export.title}
      </h2>
      <p className="text-sm md:text-base text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
        {t.about.export.desc}
      </p>
      <div className="relative rounded-2xl overflow-hidden bg-surface-container p-4 border border-outline-variant/30">
        <div className="relative w-full h-[300px] md:h-[450px]">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzQ9uZKeuOmTXDQrnYf6EOp3cEytuwmg_uANnHrvXn6NbGBfZEEQrytOmWwOSwYIbiqOS8roqS6eLME8hdBwtq53ZykqR2uorhHLQnrrK7qjuAcEVir7UyLYEgP8xYi3VomxiStBF7RJhpvH8rtOyCuDR7JX5L-5NjbXxegibZ_yb5N9x5oHNS5laCtwXxpXX9wiRqawz1_0Fmvz90VGQLo4nL8Q7p44Wf5hEgyU1_1LflI32pNi3P"
            alt={t.about.export.mapAlt}
            fill
            sizes="(max-w-1280px) 100vw, 1280px"
            className="object-contain opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="bg-primary text-white text-xs md:text-sm px-4 py-2 rounded-full shadow-lg font-bold">
            {t.about.export.badge}
          </span>
        </div>
      </div>
    </section>
  );
}
