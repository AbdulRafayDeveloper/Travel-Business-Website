import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyRaahi } from "@/data/company";
import { siteImages } from "@/data/images";

/** Split layout: sticky arch photo on the left, numbered ruled list on the right. */
export function HomeWhyRaahi() {
  return (
    <section className="relative overflow-hidden bg-haram-mist py-section-sm md:py-section" aria-label="Why Raahi">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading number="03" eyebrow="Why Raahi" urdu="بھروسہ، شفافیت اور خدمت" title={<>Six promises we put <em>in writing</em>.</>} lede="Most Umrah complaints in Pakistan are about surprise charges, hotels far from the Haram and nobody answering the phone. We built the company around fixing those three things." />
          <div className="arch-mask relative mt-8 aspect-[4/5] max-w-sm overflow-hidden">
            <Image src={siteImages.ihram.src} alt={siteImages.ihram.alt} fill sizes="(min-width: 1024px) 420px, 80vw" className="object-cover" />
          </div>
        </div>

        <ol className="divide-y divide-haram/15">
          {whyRaahi.map((item, i) => (
            <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 py-7 first:pt-0">
              <div className="flex flex-col items-center gap-2">
                <span className="font-display text-2xl italic text-gold-deep">0{i + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-haram shadow-card">
                  <Icon name={item.icon} className="text-[24px]" />
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold leading-tight text-haram-deep">{item.title}</h3>
                <p className="mt-2 text-slate">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
