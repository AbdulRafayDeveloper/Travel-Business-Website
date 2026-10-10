"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteImages } from "@/constants/images";
import { IconTileGrid, PageCta, PageHero, PageIntro, ProcessSteps } from "@/components/PageSections";

export function CanopyContent() {
  const { t } = useLanguage();
  const c = t.canopyPage;

  return (
    <>
      <PageHero
        image={siteImages.canopyNight}
        imageAlt={c.hero.bgAlt}
        breadcrumbHome={c.breadcrumbs.home}
        breadcrumbCurrent={c.breadcrumbs.current}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
      />
      <PageIntro tag={c.intro.tag} title={c.intro.title} paragraphs={[c.intro.p1, c.intro.p2, c.intro.p3]} image={siteImages.canopyHero} imageAlt={c.hero.bgAlt} />
      <IconTileGrid title={c.services.title} items={c.services.items} columns={4} />
      <ProcessSteps title={c.process.title} steps={c.process.steps} />
      <PageCta title={c.cta.title} desc={c.cta.desc} />
    </>
  );
}
