"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ContactActions } from "@/components/ContactActions";
import { SectionHeading } from "@/components/SectionHeading";

/* Shared building blocks for the solution pages (PEB, canopy, careers). */

interface PageHeroProps {
  image: string;
  imageAlt: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  title: string;
  subtitle: string;
}

export function PageHero({ image, imageAlt, breadcrumbHome, breadcrumbCurrent, title, subtitle }: PageHeroProps) {
  const { locale } = useLanguage();
  return (
    <section className="relative min-h-[62vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 hero-overlay z-10" />
      </div>
      <div className="relative z-20 hero-text-shadow px-4 md:px-margin-desktop max-w-container-max mx-auto w-full text-white text-start pt-32 pb-14 md:pb-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-base mb-6">
          <Link className="hover:underline" href="/">
            {breadcrumbHome}
          </Link>
          <span className={`mx-1 material-symbols-outlined text-[16px] ${locale === "ar" ? "rotate-180" : ""}`}>chevron_right</span>
          <span className="font-bold">{breadcrumbCurrent}</span>
        </nav>
        <div className="border-s-4 border-[#F87B1B] ps-5 md:ps-8">
          <h1 className="display-title text-5xl md:text-7xl max-w-4xl mb-5">{title}</h1>
          <p className="text-lg md:text-2xl max-w-2xl leading-relaxed mb-8">{subtitle}</p>
          <ContactActions variant="onDark" size="lg" />
        </div>
      </div>
    </section>
  );
}

interface IntroProps {
  tag: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
}

export function PageIntro({ tag, title, paragraphs, image, imageAlt }: IntroProps) {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className={`max-w-container-max mx-auto grid grid-cols-1 ${image ? "lg:grid-cols-12" : ""} gap-12 lg:gap-16 items-center`}>
        <div className={image ? "lg:col-span-7" : ""}>
          <SectionHeading kicker={tag} title={title} />
          <div className="mt-6 space-y-5 max-w-3xl text-start">
            {paragraphs.map((p, i) => (
              <p key={i} className={`leading-relaxed ${i === 0 ? "text-xl md:text-2xl text-on-surface" : "text-lg md:text-xl text-secondary"}`}>
                {p}
              </p>
            ))}
          </div>
        </div>
        {image && (
          <div className="lg:col-span-5 photo-frame me-4">
            <div className="relative h-[320px] md:h-[460px] overflow-hidden">
              <Image src={image} alt={imageAlt ?? title} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface IconTileGridProps {
  title: string;
  desc?: string;
  items: ReadonlyArray<{ title: string; icon: string }>;
  tone?: "light" | "dark";
  columns?: 3 | 4 | 5;
}

/** A numbered, ruled index list in two columns (replaces the old tile grid). */
export function IconTileGrid({ title, desc, items, tone = "light" }: IconTileGridProps) {
  const dark = tone === "dark";
  return (
    <section className={`py-16 md:py-section-gap px-4 md:px-margin-desktop ${dark ? "bg-primary text-white" : "bg-paper"}`}>
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <SectionHeading title={title} lede={desc} tone={tone} size="md" className="lg:sticky lg:top-28" />
        </div>
        <ol className={`lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 border-t ${dark ? "border-white/20" : "rule"}`}>
          {items.map((item, i) => (
            <li key={i} className={`flex items-center gap-4 py-4 border-b ${dark ? "border-white/20" : "rule"} text-start`}>
              <span className={`font-display text-lg font-semibold w-8 ${dark ? "text-[#F87B1B]" : "text-primary/50"}`}>{String(i + 1).padStart(2, "0")}</span>
              <span className={`material-symbols-outlined text-3xl ${dark ? "text-[#F87B1B]" : "text-primary"}`}>{item.icon}</span>
              <span className={`font-display text-2xl font-bold uppercase leading-none ${dark ? "text-white" : "text-primary"}`}>{item.title}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

interface ChipListProps {
  title: string;
  items: ReadonlyArray<string>;
}

/** Industries as one large running line separated by orange dots. */
export function ChipList({ title, items }: ChipListProps) {
  return (
    <section className="py-14 md:py-20 px-4 md:px-margin-desktop border-b rule">
      <div className="max-w-container-max mx-auto text-start">
        <p className="font-display text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#F87B1B] mb-4">{title}</p>
        <p className="font-display text-2xl sm:text-3xl md:text-5xl font-bold uppercase text-primary leading-tight">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <>
                  {" "}
                  <span className="text-[#F87B1B] mx-2 md:mx-3" aria-hidden="true">&bull;</span>{" "}
                </>
              )}
              <span className="sm:whitespace-nowrap">{item}</span>
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}

interface ProcessStepsProps {
  title: string;
  steps: ReadonlyArray<{ title: string; desc: string }>;
}

/** Process as a timeline: a continuous line with numbered markers (no cards). */
export function ProcessSteps({ title, steps }: ProcessStepsProps) {
  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <SectionHeading title={title} size="md" className="mb-12" />
        <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-y-10 md:gap-x-8">
          <span className="hidden md:block absolute top-6 inset-x-0 h-0.5 bg-primary/20" aria-hidden="true" />
          <span className="md:hidden absolute top-0 bottom-0 start-6 w-0.5 bg-primary/20" aria-hidden="true" />
          {steps.map((step, i) => (
            <li key={i} className="relative ps-16 md:ps-0 text-start">
              <span className="absolute start-0 top-0 md:static w-12 h-12 rounded-full bg-primary text-[#F87B1B] font-display text-2xl font-bold flex items-center justify-center ring-8 ring-white md:mb-6">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-primary leading-none mb-2">{step.title}</h3>
              <p className="text-base md:text-lg text-secondary leading-relaxed">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

interface PageCtaProps {
  title: string;
  desc: string;
}

export function PageCta({ title, desc }: PageCtaProps) {
  return (
    <section className="bg-primary border-t-8 border-[#F87B1B]">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 text-start">
          <h2 className="display-title text-4xl md:text-6xl text-white mb-4">{title}</h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">{desc}</p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <ContactActions variant="onDark" size="lg" showNumber />
        </div>
      </div>
    </section>
  );
}
