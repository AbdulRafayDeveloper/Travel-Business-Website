"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ProductSpecsTable() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12 text-start">
      {/* Product Overview */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-1 bg-primary"></div>
          <h2 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
            {t.scrapDetail.overview.title}
          </h2>
        </div>
        <p className="text-base md:text-lg text-on-surface/80 leading-relaxed">
          {t.scrapDetail.overview.p}
        </p>
      </section>

      {/* Material Specifications */}
      <section className="bg-white rounded-2xl border border-outline-variant p-6 md:p-8 shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">
          {t.scrapDetail.specs.title}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b border-outline-variant">
              <tr>
                {t.scrapDetail.specs.headers.map((hdr, index) => (
                  <th
                    key={index}
                    className="py-4 px-6 text-xs md:text-sm font-bold text-primary uppercase tracking-widest text-start"
                  >
                    {hdr}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30">
              {t.scrapDetail.specs.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="py-4 px-6 font-bold text-on-surface text-sm md:text-base text-start">
                    {row[0]}
                  </td>
                  <td className="py-4 px-6 text-on-surface/70 text-sm md:text-base text-start">
                    {row[1]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
