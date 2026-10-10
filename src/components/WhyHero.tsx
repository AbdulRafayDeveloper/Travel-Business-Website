"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function WhyHero() {
  const { locale, t } = useLanguage();
  const w = t.whyChooseUsPage;

  // Split title at the last sentence for golden accent
  const titleParts = locale === "ar"
    ? { plain: "الدقة. القوة. ", accent: "لماذا تختار ألوتريد جلوبال." }
    : { plain: "Precision. Power. ", accent: "Why Choose AluTrade Global." };

  return (
    <section className="relative h-[60vh] min-h-[450px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/why_hero.png"
          alt={w.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(135deg, rgba(27, 53, 118, 0.92) 0%, rgba(17, 34, 78, 0.75) 100%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-white text-start">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/90 mb-4">
          <Link className="hover:text-white transition-colors" href="/">
            {w.breadcrumbs.home}
          </Link>
          <span className={`material-symbols-outlined text-[14px] ${locale === "ar" ? "rotate-180" : ""}`}>
            chevron_right
          </span>
          <span className="font-bold text-white">{w.breadcrumbs.current}</span>
        </nav>

        {/* Title with golden accent on last line */}
        <h1 className="display-title text-5xl md:text-7xl max-w-4xl mb-6">
          {titleParts.plain}
          <br />
          <span className="text-[#F87B1B]">{titleParts.accent}</span>
        </h1>

        <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
          {w.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
