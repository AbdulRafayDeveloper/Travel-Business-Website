"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const authorImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB5Hi9Nup031eY__uVm5dQQObuub5NCPO8LMwDKNO1IfJmRBXWYrFRtGZnboa01S2wRLDhXktzdIICV602otdGv1yWINVcF3IVirnJN0Qi6A2z_UcC6-jj_k5x7v2-MG5j9QIht3x5iP_hk28mR7tw24b4hgqW6XgAD-uHNAUlflruyj_lr5P1Xc-t0y_ox7lrIxoYa6GKxXLm2Gj_OtdS0qZUPvudiwN6_pcbMoDL8EKnzgNqad72w",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDASnaGc9fyJ_OHgHw8naeLGiY_g6tn8E4M2mmlTjBoT7ifMiWOsTaXGwrFfuGj4y7UFqNEKuOqumSRUxYY70mIsD-RGyXU8T8scWiO8wlNnGEXjnOmPlJxQ6oXTZZVE97zUcM0AksEsM2M2NeEy3kcnxhQqZvGR2MKrBa1UfY-dwem7IIgeF9fTmRCPezIwIAB3GzcFp7ldd5sq-601ogxkveFHdwDtUbnhVPYa9hu9UUdO0fEwWho",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCAndt13i0eA1gO-BR1cs9PijVQHJgsn59bzG49-5Bcdul_k4R_NbqjxTe44_SL9B1OxHAi-k_zlvAE-Ux6c778-xXRcQbuOa1xkvD5K_jdaZHP2j4x9UeOA2JOL1ZzCUjsMUv_Po8k3EF1AUPutt9hM9N7vVMXf950v7feRPSjk1VXBBm3zJBIB-8vKJZdjoXIepqJ1wOLWb0Q9aGgSrvEea7GG7D1Z9QoQzMxPcwKmjajkTX5AfiA"
  ];

  return (
    <section className="py-16 md:py-section-gap px-4 md:px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {t.testimonials.title}
        </h2>
        <p className="text-sm md:text-base text-secondary mt-4">
          {t.testimonials.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {t.testimonials.items.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white border border-outline-variant rounded-2xl flex flex-col justify-between text-start"
          >
            <p className="text-base text-secondary italic mb-8">
              &quot;{item.quote}&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={authorImages[index]}
                  alt={item.imgAlt}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-primary">
                  {item.author}
                </div>
                <div className="text-xs md:text-sm text-secondary">
                  {item.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
