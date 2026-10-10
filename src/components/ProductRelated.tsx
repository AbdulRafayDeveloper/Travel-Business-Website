"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function ProductRelated() {
  const { locale, t } = useLanguage();

  const relatedImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3McV2wqXJZo3bLM6DkjhUdemo-OTRqdamBm1YMnphNTgLaCPMzfVg2t27Ala0YcZ9naIL9zvg8_H9B0N7V9KGj-5ZuEkayc2jO61E-f_7HBXvdtmVl6TNyfEFPw5Rk2RiwdxDX6icUH7r_IDdhr2HHpxo5Ris-jFZ2DjK2W419An3MgKj7iqHIAWAfGupre1IpUV9gXMceZyNumfrwAxvtQuKzwOY5NBbjMx197533Q0zKCeMhUpO",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAu_2x22LhlhOmd39q8brjPIW7EpRCQwdqb1XMguEftIpEJ55XBAWNZp9ixzz7o5_RDIU1iL5Pu7RJqQWtNfigBMIekjAG4lJXWjGwB7gEFvOO43m7RyhpDSQYbuXGkNZCdhAga6cYx4Mt0_ZtrJofbsAUvwu2OXGJS3xUbzVrkjEZX0ID0TyzyugkBvyDn6H2vnSuoR2XHm9_WwBpmBlDr5vu73CLqm5tLNyDuht8ZIg_IlQRDbf5D",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDvY7zjd_d5fihdakSohmhOq9RgE3myUzzQqnyuZpdUasJtuOgLxiav10m_abM9jCnBVsa0_-QJVgUWnE6uOBY3Heub92U200vmPqWJwtSk7XPoBtDAMddCq-PNGIcIY8YCPNChgEWakYD8gvHKH2aemOTauboggLLBHIZWJMCefqd_-zbQ6zc6V22uVtUvh7RhfDnIctFqWrFjH7Q9ePkCl2jZgNIseN27Grxjiu0Xv1YimFHOdGmp"
  ];

  return (
    <section className="mt-16 md:mt-section-gap text-start">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
        {t.scrapDetail.related.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {t.scrapDetail.related.items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-outline-variant overflow-hidden group hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={relatedImages[index]}
                  alt={item.imgAlt}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary mb-4 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link
                className="text-primary font-bold flex items-center gap-2 group/link text-sm"
                href="/products"
              >
                {t.scrapDetail.related.viewDetails}
                <span className={`material-symbols-outlined text-base transition-transform group-hover/link:translate-x-1 ${locale === "ar" ? "rotate-180 group-hover/link:-translate-x-1" : ""}`}>
                  arrow_right_alt
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
