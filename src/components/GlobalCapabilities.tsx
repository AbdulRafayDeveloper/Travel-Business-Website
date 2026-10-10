"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function GlobalCapabilities() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t.capabilities.title}
          </h2>
          <p className="text-sm md:text-base text-secondary mt-4">
            {t.capabilities.subtitle}
          </p>
        </div>

        <div className="relative h-[400px] bg-slate-100 rounded-2xl flex items-center justify-center overflow-hidden border border-outline-variant/30 shadow-inner">
          {/* Map Overlay Image */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPO6eqxLn8rYlhlEsZbHy5uMautJrfAU2fvFVm4o6KmIn9wygNNTOngRAYqi3LaN3LwkblKXJiTSrJB89PeoRo5fwlaHb8fT-URoSrFk-22md0Q46bPDvwlg2S9kS6vD1l9ElXpkyZjY9aPO_JE-ryQ43kTS1E-AbKa0W79Z8dKRgGlCU48Et5_gmuLwLBegpmP_TcBX3clQuJXLgoCGQ6QwqPGqt1KjX-fAhV-pvwXIJzPykyJQI7"
              alt={t.capabilities.mapAlt}
              fill
              sizes="(max-w-1280px) 100vw, 1280px"
              className="object-cover grayscale"
            />
          </div>

          {/* Stats Flex Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row gap-12 text-center">
            {t.capabilities.stats.map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-4xl md:text-5xl font-extrabold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-bold text-secondary uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
