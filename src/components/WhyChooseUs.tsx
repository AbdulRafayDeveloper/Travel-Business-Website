"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-section-gap bg-white border-y border-outline-variant/30 px-4 md:px-margin-desktop">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-section-gap items-center">
        {/* Left: Image */}
        <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-sm">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkS81j4RGNZoTpKvGfzzQk7gUada28DothFo5EfVX9olQaJn5sb2E6qBJpUmf8MCdZJvQIpTMN-o9zCYfI1hweFH-oW5qqf5XVERCDuqDVSNyOY83iXtF40z3bTAMUpM_y5esYJQIwR9pJ3ou48r9Utvj1ziTj2RngVZFBWhgfdrD1NRGG5S7Givf3ioL7cbT3FGjM_DBCWyYsW8eubcwBEyMO-JK-_XZficZzkI7ivo4gCkgE1My3"
            alt={t.whyUs.imgAlt}
            fill
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* Right: Content List */}
        <div className="text-start">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            {t.whyUs.title}
          </h2>
          <ul className="space-y-6">
            {t.whyUs.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-primary text-white p-2 rounded-lg mt-1 flex-shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-secondary">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
