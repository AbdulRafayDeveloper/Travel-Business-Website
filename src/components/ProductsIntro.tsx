"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/SectionHeading";

export function ProductsIntro() {
  const { t } = useLanguage();
  const groups = t.productsPage.groups;
  const jump = [
    { href: "#group-metals", label: groups.metals },
    { href: "#group-steel", label: groups.steel },
    { href: "#group-fabrication", label: groups.fabrication },
  ];

  return (
    <section className="py-14 md:py-20 px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <SectionHeading kicker={t.productsPage.intro.tag} title={t.productsPage.intro.title} lede={t.productsPage.intro.desc} size="md" />
        </div>
        <nav aria-label="Product groups" className="lg:col-span-4 text-start">
          <ol className="border-t-4 border-primary">
            {jump.map((j, i) => (
              <li key={j.href} className="border-b rule">
                <a href={j.href} className="group flex items-center gap-3 py-3 font-display text-xl md:text-2xl font-bold uppercase text-primary hover:text-[#F87B1B] transition-colors">
                  <span className="text-[#F87B1B]">0{i + 1}</span>
                  <span className="flex-1">{j.label}</span>
                  <span className="material-symbols-outlined group-hover:translate-y-0.5 transition-transform">arrow_downward</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
