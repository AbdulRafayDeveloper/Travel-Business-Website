"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ContactHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact_hero.png"
          alt={t.contact.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 industrial-overlay z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 hero-text-shadow text-center text-on-primary px-4">
        <nav aria-label="Breadcrumb" className="flex justify-center gap-1 text-sm opacity-90 mb-4 items-center">
          <Link className="hover:underline" href="/">
            {t.contact.breadcrumbs.home}
          </Link>
          <span className={`mx-1 material-symbols-outlined text-[12px] ${locale === "ar" ? "rotate-180" : ""}`}>
            chevron_right
          </span>
          <span className="font-bold">{t.contact.breadcrumbs.current}</span>
        </nav>
        <h1 className="display-title text-5xl md:text-7xl max-w-4xl mb-6">
          {t.contact.hero.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          {t.contact.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
