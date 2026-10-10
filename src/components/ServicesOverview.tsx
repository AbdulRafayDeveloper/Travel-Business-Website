"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

export function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <section className="py-14 md:py-20 px-4 md:px-margin-desktop bg-paper border-y rule">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <SectionHeading kicker={t.servicesPage.breadcrumbs.current} title={t.servicesPage.overview.title} size="md" />
        </div>
        <p className="lg:col-span-7 text-lg md:text-xl text-on-surface leading-relaxed text-start lg:pt-14">
          {t.servicesPage.overview.p}
        </p>
      </div>
    </section>
  );
}
