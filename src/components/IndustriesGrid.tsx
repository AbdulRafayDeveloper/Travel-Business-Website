"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function IndustriesGrid() {
  const { t } = useLanguage();

  const cardImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCgOBdu2LktZD1evuX1M5FHDndfb685TUY8Gi_j4CHBFqC91MqFvXwnPXJYlJBo1I4KF_ZMcMKAk9mZttPXb4YYo3Ky7CzxyzpWCtfSfaX1GNw8LTzy92PQJ6hoJjs8GgCOYrkBcVH41Uwx7tQP1ckVRUVFtmR2aoNt7ecJa5aj0WvEvFioahzoFJk3-Gxh6EdnLRsCCwGzcHa7Ojroyi0Y7McllmIPeY5ecETIqsSvUgy_VtS6HoPh",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvPsO3VYfri44dslBROYXv_RfdvBB6reCC-SUJbHBEXwVLOk0YGjoFsx5msX3EF6mbEIx-2m-o7KNz2yxNVuAjKDI93DJWmuAUBDREhQCeN8GpkxICp0TzZ5HVfuearL2LTH1XSbsn6Ehrk_aTQoV_VGPXTQYYAcn3f962oI27gVWT6ia4Q9_97655cViR6-dVO9Q6Hu6MUS13iJlUmtqNZMeGqlrRte7jcHNUnoRQ-pbo29uf0X6n",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZE1KtWS99EA3CeiWYtHTaOAwGhZyTXBuHQ4_PJp4KQa7c2KP7CceTPDaL36n-axi1lBVTPYqf6PhabgETwJkk-BC2_1LSfv-peUaCKWB-wZhFtKxYFL2ra_KQ4ld9VEq7VgROZWGVPr82AxdufT_aq16bzveWBz5deY2K54Xak1hsoMUkL3KM-794enG-igHgG11KuR2aR-gg5VxgGpk6-_RNxvIAGqwbk-eZACiSWgKCsNxsAJi0",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBEDE_Ea3z7RQY7FfuftCiNgW3pBMiBdQ6Z37d6YP5cw-1mC0oDl_bg9JZKG9ywf3vKnzNqAYZF2q7iJEZsqbxcRhlVW4Y9XBFFWa6q03KO0BjWX_lvbKMJU-X8T-2P79ui6LxRxmzmoN_FRHOPISRlQ12i-kZG6g3jIowA7W2dphmQPscjprrLQHlDg7hLtWmFZv5xhOIq_qt5tI0XOwMq22nrlt8pUeqPSFPNpypNUHbouQpSSzSb",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBTeFCTR1rlBa6Ixa87PXcWYOW93OdeSY1R4XiV0oGinthfR8E3u2PbsfWpmlW5EJDn7quoAsnw3o0faVFfNKZsfvnf17eWM8IVxWCTD8IUEQhfZ78PqmWFVZmOFcPJdHPLn0nj-Qlp02jslrhuXTyeoXUM7nDYSFdtiPyxj4rhheL3xsYMEhBihfW5SM6wl-YvYjpQXKSdKnoZgpFFk_u0EethxmA3nyLWxhWeUbbsJz9dDZnZ8PA6",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCDkcPtMDcXKezCbl5jlw5r8i5uv46zjmdGAoIl603JJ1K35IvWIUg6Z0mSRPZNKaGu7ltCo5T2rOT5XTAogDaCi4LkEhrm5QVZyAWpLv2WXxljvleS5ESNvQQEd86atkS-_9tJXnkckyHdGt-h5oafYdaxXru4akU70LLhf8Su07PoZ3PGR9HqietxtNuVv9vj5hTzwaNnYrdtJkaoEX0zj32SaL6S0hz2Z4pB2mcRS1cjOdv1yhCu",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwRsu9coPYivr1oBTS6x4bWxp1Hd2QLKQCZQe_yzz4mRb37LbYJeZdlDGDpASZYEAZzv7PQnCDCr8AeFhMhFY_BTx1DwBKNuRRIw_0_17nyweCfsXM1cqzm_ZvHPli89JxDWcGRib7yfY_YW1uPthlOLgxJMrShMiufVGlZz0cvZ_b1s5Ub9um5Tyw8-P3dGwCwlhL_p0tf36ypK5Mhd8OFh7vKoxKMFFOsfOCxNPeeXxqSAhuhack"
  ];

  return (
    <section className="pb-16 md:pb-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {t.industriesPage.cards.map((card, index) => {
          const isDouble = index === 6;

          if (isDouble) {
            return (
              <div
                key={index}
                className="group bg-white border border-outline-variant/30 rounded-[20px] overflow-hidden premium-shadow hover:border-primary transition-all duration-300 lg:col-span-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-full relative min-h-[250px] overflow-hidden">
                    <Image
                      src={cardImages[index]}
                      alt={card.bgAlt}
                      fill
                      sizes="(max-w-1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/5 rounded-lg">
                        <span className="material-symbols-outlined text-primary">
                          {card.icon}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm md:text-base text-secondary mb-6 leading-relaxed">
                      {card.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="group bg-white border border-outline-variant/30 rounded-[20px] overflow-hidden premium-shadow hover:border-primary transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={cardImages[index]}
                    alt={card.bgAlt}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/5 rounded-lg">
                      <span className="material-symbols-outlined text-primary">
                        {card.icon}
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-primary">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-secondary mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0">
                <div className="flex flex-wrap gap-2">
                  {card.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
