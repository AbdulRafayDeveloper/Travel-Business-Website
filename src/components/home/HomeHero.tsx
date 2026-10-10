import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { GeoPattern } from "@/components/graphics/GeoPattern";
import { QuickPlanner } from "@/features/inquiry/QuickPlanner";
import { contactNumber, siteConfig, whatsappUrl } from "@/config/site";
import { siteImages } from "@/data/images";
import { cheapestPackagePrice } from "@/data/packages";
import { formatPkr } from "@/lib/utils";

const trustChips = [
  { icon: "verified", text: "Licensed operator" },
  { icon: "price_check", text: "No hidden charges" },
  { icon: "star", text: `${siteConfig.stats.rating} · ${siteConfig.stats.reviews} reviews` },
  { icon: "support_agent", text: "WhatsApp 9 am – 11 pm" },
];

const WHATSAPP_INTRO = "Assalam o Alaikum, I want to plan my Umrah. Please guide me.";

/**
 * Hero sized to fit the first viewport on every device. On phones the planner card is rendered
 * directly below the hero (overlapping its edge) so the hero itself fits above the fold; from lg
 * the planner sits inside the hero's right column.
 */
export function HomeHero() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[calc(100svh-68px-72px)] items-center overflow-hidden bg-haram-deep text-white lg:min-h-[calc(100svh-112px)]"
        aria-labelledby="hero-title"
      >
        <Image src={siteImages.homeHero.src} alt={siteImages.homeHero.alt} fill priority fetchPriority="high" sizes="100vw" quality={70} className="object-cover object-center" />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <GeoPattern color="#F7EBC9" opacity={0.08} size={110} className="mix-blend-soft-light" />

        <div className="relative mx-auto grid w-full max-w-container-max items-center gap-8 px-4 py-6 sm:px-6 md:px-margin-desktop lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-8">
          <div className="rise">
            <p className="urdu text-right text-xl text-gold-pale sm:text-2xl lg:text-left lg:text-3xl">{siteConfig.taglineUrdu}</p>
            <p className="eyebrow mt-1 flex items-center gap-2 text-gold">
              <span className="h-px w-8 bg-gold" aria-hidden="true" /> Umrah from Pakistan · 2026 – 27
            </p>
            <h1 id="hero-title" className="display-title mt-3 text-[2.35rem] leading-[1.02] sm:text-6xl lg:text-7xl">
              Umrah, planned <em className="text-gold">honestly</em>, from PKR {formatPkr(cheapestPackagePrice, false)}.
            </h1>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg lg:mt-4 lg:text-xl">
              Real per-person prices for Quad, Triple and Double rooms, named hotels and their distance from the Haram. Licensed in Pakistan, trusted by {siteConfig.stats.pilgrims} pilgrims since {siteConfig.foundedYear}.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <LinkButton href="/umrah-packages" variant="gold" size="md" icon="arrow_forward" className="!px-3 sm:!px-6">
                See packages
              </LinkButton>
              <LinkButton href={whatsappUrl(WHATSAPP_INTRO)} variant="outlineLight" size="md" icon="chat" iconPosition="start" className="!px-3 sm:!px-6">
                WhatsApp us
              </LinkButton>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-white/85 sm:flex sm:flex-wrap sm:gap-x-6 sm:text-sm">
              {trustChips.map((c) => (
                <li key={c.text} className="flex items-center gap-1.5">
                  <Icon name={c.icon} filled className="text-[16px] text-gold sm:text-[18px]" />
                  {c.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise rise-delay-2 hidden lg:block lg:w-full lg:max-w-md lg:justify-self-end">
            <QuickPlanner />
            <p className="mt-3 text-center text-xs text-white/70">
              Or call{" "}
              <a href={contactNumber.telUrl} dir="ltr" className="font-bold text-gold-pale underline-offset-2 hover:underline">
                {contactNumber.display}
              </a>{" "}
              · consultants speak Urdu, Punjabi &amp; English
            </p>
          </div>
        </div>
      </section>

      {/* Phone / tablet: planner directly under the hero, overlapping its bottom edge */}
      <div className="relative z-10 -mt-5 px-4 pb-6 sm:px-6 lg:hidden">
        <div className="mx-auto max-w-xl">
          <QuickPlanner />
        </div>
      </div>
    </>
  );
}
