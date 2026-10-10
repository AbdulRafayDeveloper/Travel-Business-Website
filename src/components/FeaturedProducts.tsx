"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import Link from "next/link";

export function FeaturedProducts() {
  const { locale, t } = useLanguage();

  // Array of image paths matching product order
  const productImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBNOT4dRAIHhCuN-6F8MYhmltZxYX7WlFGaVrHUImb8oVt0l__HDyTQ3utstLYITWKga5yn0sLmwbDR3k8u9QjDkSSmcfki2fXTPp9seRYe0rC5fcHv_SzWhXBrtS7HJGbbQI91HAVJOcBKthPTXsX7ZF0LebuNpQ_3roC9Tb0blns67obNX-w9Qx1RNGueEDAKzqL5s6B4E9_aNpQ87BUhNMkbaKBE3ZoAUdiWE2JRXeTobqfKGvc0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBoI59sFfpOGnwlbQyRalFrY2pmD3wJX5lZtLXWCod8-DArPxg8GKGYuettc1B-dyTSnYt8rnBlWh0Es7RXFwLuPk86g3u_ki8OddB8u6xDqxT09c313DtFHWRDnnk4alDM34zvKj3NZRhEBjJYAs6z9_eiR81UuZp8QI5rD9lLsdcdHA8Fq80eeqf-FYYQsJGdAbsIA2u687LqYKLPYwtoeNrTayMUcQLPqc2Ft5DxxBuddZJCwqnA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBl8yLBTrSqZKXEPSX1KqOZL9ahRq0I67y7mQXqeUMm1ILDnyVZyk4FAQBP2_xZtjv3ayz8s461YmScPGAIx50ZafJS69-7Jr8w4NRgRPVQqpqz2d9EJpPCuo-zUyWwyFzKKqu-Q4g9IKIOvu4oH_V2o4Yh6yXEZlYSWdaahN91hbNHLlpiMd9MqqrBreuzcGzkI7p_xZ72u2dcxxmem7Jym19bdpegeYj4uh2K__kPvXtcNmCGaPOM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBBYaxAzq_uQNOzmS1jkE-ze60trHJbj5q9tDF_sVcL7LYMYONsKAgtAdndJoxAyEGdACBOfIgppJQeFiBKqeQDyTLWHGCdVtzsUfmOKIzrubmo1NCtYGMpk9TbcdmwoItMPv7y3rOnfnV25Hos06poCYeyMsXasoBLajgQLpzJ4ncmoVh-nFvFTMQXf0NzTVxBtkizP2gV_8f4ImJstp8PCsY0yXhN4pDEmToVAQUQozS6fLeHrlln"
  ];

  return (
    <section className="py-16 md:py-section-gap bg-surface-container-low px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            {t.products.title}
          </h2>
          <p className="text-base md:text-lg text-secondary mt-4 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {t.products.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-outline-variant overflow-hidden hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={productImages[index]}
                    alt={item.imgAlt}
                    fill
                    sizes="(max-w-768px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-start">
                  <h4 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-secondary mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="p-6 pt-0 text-start">
                <Link
                  className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
                  href={index === 0 ? "/products/aluminum-scrap" : "#"}
                >
                  {t.products.learnMore}
                  <span className={`material-symbols-outlined text-base transition-transform ${locale === "ar" ? "rotate-180" : ""}`}>
                    chevron_right
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
