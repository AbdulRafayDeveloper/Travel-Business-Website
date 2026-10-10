"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative h-[400px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDUKvOizfmQTRU8ukjDwEf17Pco8-krBOH4mS96rSP__3IMmTRclBzZQmFF4CHDafjAYukSjS0zhljmzo1MQA839uBz4uhFnz3DO6zqWaibU8x0Sr4g1Zfg1n_Z8jC3FB2x710cry4XRmbMjk0D3XGwLZ_hAJERv5UE1AU74hT0JcU8SmX8JGsz_FMC5S_fjEi1sNM6QIk1pJHVY4fBUNmN2n-onm7zguYe3PLnecgoWOiLN9G_2LF"
          alt={t.servicesPage.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary-container mix-blend-multiply opacity-70 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary text-start">
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm opacity-95">
          <Link className="hover:underline" href="/">
            {t.servicesPage.breadcrumbs.home}
          </Link>
          <span className={`mx-1 material-symbols-outlined text-[14px] ${locale === "ar" ? "rotate-180" : ""}`}>
            chevron_right
          </span>
          <span className="font-bold">{t.servicesPage.breadcrumbs.current}</span>
        </nav>
        <h1 className="display-title text-5xl md:text-7xl max-w-4xl mb-6">
          {t.servicesPage.hero.title}
        </h1>
      </div>
    </section>
  );
}
