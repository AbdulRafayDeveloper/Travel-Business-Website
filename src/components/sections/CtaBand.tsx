import Image from "next/image";
import type { ReactNode } from "react";
import { GeoPattern } from "@/components/graphics/GeoPattern";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contactNumber, siteConfig, whatsappUrl } from "@/config/site";
import { planHref } from "@/config/navigation";
import type { SiteImage } from "@/data/images";

interface CtaBandProps {
  title?: ReactNode;
  text?: string;
  whatsappMessage?: string;
  image?: SiteImage;
  primaryHref?: string;
  primaryLabel?: string;
}

/** Closing band for inner pages: photo on the left in a tilted frame, actions on the right. */
export function CtaBand({
  title = <>Ready when <em className="text-gold">you</em> are.</>,
  text = "Tell us your dates, city and budget. A named consultant sends a written quote the same day, and you decide in your own time.",
  whatsappMessage = "Assalam o Alaikum, I want to plan my Umrah. Please guide me.",
  image,
  primaryHref = planHref,
  primaryLabel = "Plan my Umrah",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-haram py-section-sm text-white md:py-section" aria-label="Get in touch">
      <GeoPattern color="#F7EBC9" opacity={0.07} size={96} />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {image ? (
          <div className="relative mx-auto w-full max-w-sm -rotate-2 lg:max-w-none">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-gold" aria-hidden="true" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 420px, 80vw" className="object-cover" />
            </div>
          </div>
        ) : (
          <div className="hidden lg:block">
            <p className="urdu text-4xl text-gold-pale">{siteConfig.taglineUrdu}</p>
          </div>
        )}
        <div>
          <p className="urdu text-xl text-gold-pale lg:hidden">{siteConfig.taglineUrdu}</p>
          <h2 className="display-title mt-2 text-4xl md:text-5xl">{title}</h2>
          <p className="lede mt-4 max-w-xl text-white/85">{text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LinkButton href={primaryHref} variant="gold" size="lg" icon="arrow_forward">{primaryLabel}</LinkButton>
            <LinkButton href={whatsappUrl(whatsappMessage)} variant="whatsapp" size="lg">WhatsApp us</LinkButton>
            <LinkButton href={contactNumber.telUrl} variant="outlineLight" size="lg" icon="call" iconPosition="start">
              <span dir="ltr">{contactNumber.display}</span>
            </LinkButton>
          </div>
          <p className="mt-4 text-sm text-white/70">{siteConfig.callbackPromise} Support {siteConfig.supportHours}.</p>
        </div>
      </Container>
    </section>
  );
}
