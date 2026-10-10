"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { contactNumber, siteConfig } from "@/constants/site";
import { siteImages } from "@/constants/images";
import { IconTileGrid, PageCta, PageHero, PageIntro, ProcessSteps } from "@/components/PageSections";

export function CareersContent() {
  const { t } = useLanguage();
  const c = t.careersPage;

  return (
    <>
      <PageHero
        image={siteImages.careersHero}
        imageAlt={c.hero.bgAlt}
        breadcrumbHome={c.breadcrumbs.home}
        breadcrumbCurrent={c.breadcrumbs.current}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
      />
      <PageIntro tag={c.intro.tag} title={c.intro.title} paragraphs={[c.intro.desc]} image={siteImages.aboutOverview} imageAlt={t.about.overview.imgAlt} />
      <IconTileGrid title={c.roles.title} items={c.roles.items} columns={3} />
      <ProcessSteps title={c.how.title} steps={c.how.steps} />
      <section className="px-4 md:px-margin-desktop pb-4">
        <div className="max-w-container-max mx-auto text-center">
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Job%20Application`}
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            <span className="material-symbols-outlined">mail</span>
            {c.how.emailLabel}: {siteConfig.contact.email}
          </a>
          <span className="mx-3 text-outline-variant">|</span>
          <a href={contactNumber.whatsappUrl} target="_blank" rel="noopener noreferrer" dir="ltr" className="text-primary font-bold hover:underline">
            WhatsApp: {contactNumber.display}
          </a>
        </div>
      </section>
      <PageCta title={c.cta.title} desc={c.cta.desc} />
    </>
  );
}
