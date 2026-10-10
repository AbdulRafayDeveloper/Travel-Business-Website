import Image from "next/image";
import type { ReactNode } from "react";
import { GeoPattern } from "@/components/graphics/GeoPattern";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { SiteImage } from "@/data/images";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  crumbs: Crumb[];
  eyebrow?: string;
  urdu?: string;
  title: ReactNode;
  lede?: ReactNode;
  image?: SiteImage;
  /** Extra content under the lede (buttons, chips). */
  children?: ReactNode;
  /** "photo" = full-bleed photo with overlay; "band" = plain deep-green band; "split" = text left, arch photo right. */
  variant?: "photo" | "band" | "split";
  className?: string;
}

/** Inner-page hero. Three layouts so consecutive pages never feel identical. */
export function PageHero({ crumbs, eyebrow, urdu, title, lede, image, children, variant = "photo", className }: PageHeroProps) {
  if (variant === "split") {
    return (
      <section className={cn("relative overflow-hidden bg-haram-mist", className)}>
        <GeoPattern color="#0E4D45" opacity={0.05} size={90} />
        <Container className="relative grid items-center gap-8 py-10 md:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Breadcrumbs items={crumbs} />
            {urdu && <p className="urdu mt-5 text-right text-xl text-haram md:text-left md:text-2xl">{urdu}</p>}
            {eyebrow && <p className="eyebrow mt-1 flex items-center gap-2 text-gold-deep"><span className="h-px w-8 bg-gold" aria-hidden="true" />{eyebrow}</p>}
            <h1 className="display-title mt-3 text-4xl text-haram-deep sm:text-5xl lg:text-6xl">{title}</h1>
            {lede && <p className="lede mt-4 max-w-2xl text-slate">{lede}</p>}
            {children && <div className="mt-6">{children}</div>}
          </div>
          {image && (
            <div className="arch-mask relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden lg:max-w-none">
              <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 520px, 80vw" className="object-cover" />
            </div>
          )}
        </Container>
      </section>
    );
  }

  const photo = variant === "photo" && image;
  return (
    <section className={cn("relative isolate overflow-hidden bg-haram-deep text-white", className)}>
      {photo && <Image src={image.src} alt={image.alt} fill priority sizes="100vw" quality={65} className="object-cover" />}
      <div className={cn("absolute inset-0", photo ? "hero-overlay" : "")} aria-hidden="true" />
      <GeoPattern color="#F7EBC9" opacity={photo ? 0.06 : 0.08} size={100} />
      <Container className="relative py-10 md:py-16">
        <Breadcrumbs items={crumbs} tone="dark" />
        {urdu && <p className="urdu mt-6 text-right text-xl text-gold-pale md:text-left md:text-2xl">{urdu}</p>}
        {eyebrow && <p className="eyebrow mt-1 flex items-center gap-2 text-gold"><span className="h-px w-8 bg-gold" aria-hidden="true" />{eyebrow}</p>}
        <h1 className="display-title mt-3 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
        {lede && <p className="lede mt-4 max-w-2xl text-white/85">{lede}</p>}
        {children && <div className="mt-6">{children}</div>}
      </Container>
    </section>
  );
}
