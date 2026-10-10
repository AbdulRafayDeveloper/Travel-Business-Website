"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";
import { ChipList, IconTileGrid, PageCta, PageHero, PageIntro, ProcessSteps } from "@/components/PageSections";

export function PebContent() {
  const { t } = useLanguage();
  const p = t.pebPage;

  return (
    <>
      <PageHero
        image={siteImages.pebHero}
        imageAlt={p.hero.bgAlt}
        breadcrumbHome={p.breadcrumbs.home}
        breadcrumbCurrent={p.breadcrumbs.current}
        title={p.hero.title}
        subtitle={p.hero.subtitle}
      />
      <PageIntro tag={p.intro.tag} title={p.intro.title} paragraphs={[p.intro.p1, p.intro.p2]} image={siteImages.pebWarehouse} imageAlt={p.hero.bgAlt} />
      <IconTileGrid title={p.solutions.title} items={p.solutions.items} columns={5} />
      <IconTileGrid title={p.facility.title} desc={p.facility.desc} items={p.facility.items} tone="dark" columns={3} />
      <ChipList title={p.industries.title} items={p.industries.items} />
      <ProcessSteps title={p.process.title} steps={p.process.steps} />
      <PageCta title={p.cta.title} desc={p.cta.desc} />
    </>
  );
}
