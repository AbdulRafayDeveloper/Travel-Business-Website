"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { productImageFor } from "@/constants/images";
import { contactNumber } from "@/constants/site";

type ProductGroup = "metals" | "steel" | "fabrication";

const GROUP_ORDER: ProductGroup[] = ["metals", "steel", "fabrication"];

/** Products as a divided catalog list: photo, name, specs, price link. No cards. */
export function ProductsGrid() {
  const { t } = useLanguage();
  const { categories, groups } = t.productsPage;

  return (
    <section className="pb-16 md:pb-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      {GROUP_ORDER.map((group, gi) => {
        const items = categories.filter((c) => c.group === group);
        if (items.length === 0) return null;
        return (
          <div key={group} id={`group-${group}`} className="mb-16 last:mb-0 scroll-mt-28">
            <div className="flex items-end justify-between gap-6 border-b-4 border-primary pb-4 mb-2">
              <h2 className="display-title text-3xl md:text-5xl text-primary">
                <span className="text-[#F87B1B] me-3">0{gi + 1}</span>
                {groups[group]}
              </h2>
              <span className="font-display text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-secondary whitespace-nowrap">
                {items.length} {t.productsPage.itemsLabel}
              </span>
            </div>

            <ol>
              {items.map((prod, index) => {
                const image = productImageFor(prod.id);
                return (
                  <li key={prod.id} id={prod.id} className="border-b rule scroll-mt-28">
                    <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10">
                      {/* Visual */}
                      <div className="md:col-span-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-primary">
                          {image ? (
                            <Image
                              src={image}
                              alt={prod.bgAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-[#F87B1B]" role="img" aria-label={prod.bgAlt}>
                              <span className="material-symbols-outlined text-8xl">{prod.icon}</span>
                            </div>
                          )}
                          <span className="absolute top-0 start-0 bg-[#F87B1B] text-primary font-display text-base font-bold uppercase tracking-[0.15em] px-3 py-1">
                            {prod.label}
                          </span>
                        </div>
                      </div>

                      {/* Copy */}
                      <div className="md:col-span-5">
                        <div className="flex items-baseline gap-3 mb-3">
                          <span className="font-display text-xl font-semibold text-primary/50">{String(index + 1).padStart(2, "0")}</span>
                          <h3 className="display-title text-3xl md:text-4xl text-primary">{prod.title}</h3>
                        </div>
                        <ul className="space-y-2 border-s-2 border-[#F87B1B] ps-4">
                          {prod.specs.map((spec, specIdx) => (
                            <li key={specIdx} className="text-base md:text-lg text-on-surface leading-snug">
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action */}
                      <div className="md:col-span-3 flex flex-wrap md:flex-col md:items-end md:justify-between gap-4">
                        <a
                          href={contactNumber.telUrl}
                          dir="ltr"
                          className="font-display text-xl md:text-2xl font-bold text-primary hover:text-[#F87B1B] transition-colors whitespace-nowrap"
                        >
                          {contactNumber.display}
                        </a>
                        <Link
                          href={prod.link}
                          className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wide text-primary border-b-[3px] border-[#F87B1B] pb-1 hover:text-[#F87B1B] transition-colors whitespace-nowrap"
                        >
                          {prod.btnText}
                          <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
                        </Link>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>
        );
      })}
    </section>
  );
}
