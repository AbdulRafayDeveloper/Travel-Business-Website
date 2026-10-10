"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function QuoteHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/quote_hero.png"
          alt={t.quotePage.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-container opacity-80 z-10" style={{ background: "linear-gradient(rgba(27, 53, 118, 0.85), rgba(17, 34, 78, 0.9))" }} />
      </div>
      <div className="relative z-20 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-white text-start">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1 text-sm opacity-95">
          <Link className="hover:underline" href="/">{t.quotePage.breadcrumbs.home}</Link>
          <span className={`material-symbols-outlined text-[14px] mx-1 ${locale === "ar" ? "rotate-180" : ""}`}>chevron_right</span>
          <span className="font-bold">{t.quotePage.breadcrumbs.current}</span>
        </nav>
        <h1 className="display-title text-5xl md:text-7xl max-w-4xl mb-6">
          {t.quotePage.hero.title}
        </h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed">
          {t.quotePage.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
