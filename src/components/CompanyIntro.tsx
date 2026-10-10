"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function CompanyIntro() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        {/* Left Side: Content */}
        <div className="space-y-6 text-start">
          <span className="text-primary font-bold tracking-widest text-sm uppercase block">
            {t.intro.tag}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
            {t.intro.title}
          </h2>
          <p className="text-lg text-secondary leading-relaxed">
            {t.intro.description}
          </p>
          <div className="pt-4">
            <Link href="/about-us">
              <span className="text-primary font-bold flex items-center gap-2 border-b-2 border-primary pb-1 group cursor-pointer hover:opacity-85 transition-opacity inline-flex">
                {t.intro.cta}
                <span
                  className={`material-symbols-outlined transition-transform duration-200 ${
                    locale === "ar"
                      ? "rotate-180 group-hover:-translate-x-1"
                      : "group-hover:translate-x-1"
                  }`}
                >
                  arrow_forward
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side: Image with decorative background element */}
        <div className="relative mt-8 md:mt-0">
          <div
            className={`absolute -top-4 w-24 h-24 bg-tertiary-fixed-dim/20 rounded-2xl -z-10 ${
              locale === "ar" ? "-right-4" : "-left-4"
            }`}
          ></div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTAmSKr2rucA1qZCYcX3KPeeQjjkU-o6xlHarCvpfhLiJBS9E7AgiGh2OLsxEY8N_HuOSDRlapWuz8wft8xn3BwC8lHJQ3oA3OrH5JdVSH-CG0TcPQ9xGnV3K2Ja99j1Vimu6gA1ug_CKbHRZiKTZclZ_Iot7MmMUR4pWZTUKIPBttDy7d7lpuWs8UjAOVs-W_Cryw0L3xvTsDHccR2O3x1ouUafCLMJ8STTYn6vvkAnEB0pejVJbU"
              alt={t.intro.imgAlt}
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
