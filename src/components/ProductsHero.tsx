"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ProductsHero() {
  const { locale, t } = useLanguage();

  return (
    <section className="relative h-[450px] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/products_hero.png"
          alt={t.productsPage.hero.bgAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 hero-overlay z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-on-primary text-start">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm opacity-95 mb-6">
          <Link className="hover:underline" href="/">
            {t.productsPage.breadcrumbs.home}
          </Link>
          <span className={`mx-1 material-symbols-outlined text-[14px] ${locale === "ar" ? "rotate-180" : ""}`}>
            chevron_right
          </span>
          <span className="font-bold">{t.productsPage.breadcrumbs.current}</span>
        </nav>
        <h1 className="display-title text-5xl md:text-7xl max-w-4xl mb-6">
          {t.productsPage.hero.title}
        </h1>
        <p className="text-base md:text-lg max-w-xl leading-relaxed">
          {t.productsPage.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
