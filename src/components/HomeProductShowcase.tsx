"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { productImages, type ProductId } from "@/constants/images";
import { SectionHeading } from "@/components/SectionHeading";

/** Photo per row, in the same order as translations.homePage.products.items */
const rowImageIds: ProductId[] = [
  "aluminum-scrap",
  "copper-scrap",
  "zinc",
  "recyclable-metals",
  "steel-sheets",
  "steel-bars",
  "steel-beams",
  "steel-coils",
  "steel-pipes",
  "angles-channels",
  "chequered-plate",
  "purlins",
  "wire-mesh",
  "scaffolding",
];

/** Home product catalog: sticky heading on the left, a divided index list on the right. */
export function HomeProductShowcase() {
  const { t } = useLanguage();
  const p = t.homePage.products;
  const groups = t.productsPage.groups;

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop bg-paper overflow-x-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading kicker={p.tag} title={p.title} lede={p.subtitle} />
            <Link
              href="/products"
              className="mt-8 inline-flex max-w-full items-center gap-3 bg-primary text-white font-display text-lg md:text-xl font-bold uppercase tracking-wide px-5 md:px-7 py-4 rounded-md hover:bg-[#F87B1B] hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">inventory_2</span>
              {p.viewAll}
            </Link>
          </div>
        </div>

        <ol className="lg:col-span-8 border-t rule">
          {p.items.map((item, index) => {
            const groupLabel = index === 0 ? groups.metals : index === 4 ? groups.steel : null;
            return (
              <React.Fragment key={index}>
                {groupLabel && (
                  <li className="pt-8 pb-3 font-display text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#F87B1B] text-start" aria-hidden="true">
                    {groupLabel}
                  </li>
                )}
                <li className="border-b rule">
                  <Link href={item.href} className="group flex items-center gap-5 md:gap-8 py-5 text-start">
                    <span className="font-display text-xl md:text-2xl font-semibold text-primary/50 w-8 flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="relative w-24 h-20 md:w-36 md:h-24 flex-shrink-0 overflow-hidden rounded-sm bg-paper-dark">
                      <Image
                        src={productImages[rowImageIds[index]]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 96px, 144px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-2xl md:text-3xl font-bold uppercase text-primary leading-none group-hover:text-[#F87B1B] transition-colors">
                        {item.title}
                      </span>
                      <span className="block text-base md:text-lg text-secondary mt-2 leading-snug">{item.description}</span>
                    </span>
                    <span className="material-symbols-outlined text-3xl text-primary/40 group-hover:text-[#F87B1B] group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1 transition-all flex-shrink-0 hidden sm:block">
                      arrow_forward
                    </span>
                  </Link>
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
