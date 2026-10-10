import Link from "next/link";
import { Logo } from "@/components/graphics/Logo";
import { GeoPattern } from "@/components/graphics/GeoPattern";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { contactNumber, offices, siteConfig, whatsappUrl } from "@/config/site";
import { legalNav, planHref, primaryNav, secondaryNav } from "@/config/navigation";
import { packages } from "@/data/packages";
import { paymentMethods } from "@/data/company";

const headingClass = "eyebrow mb-4 text-gold";
const linkClass = "text-sm text-white/75 transition-colors hover:text-white";

const socialLinks = [
  { href: siteConfig.social.facebook, label: "Facebook", icon: "thumb_up" },
  { href: siteConfig.social.instagram, label: "Instagram", icon: "photo_camera" },
  { href: siteConfig.social.youtube, label: "YouTube", icon: "play_circle" },
  { href: siteConfig.social.tiktok, label: "TikTok", icon: "music_note" },
];

export function Footer() {
  const headOffice = offices.find((o) => o.isHeadOffice) ?? offices[0];
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <GeoPattern color="#D4A53A" opacity={0.07} size={96} />

      {/* Callback band */}
      <div className="relative border-b border-white/10">
        <div className="mx-auto flex max-w-container-max flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between md:px-margin-desktop">
          <div>
            <p className="urdu text-xl text-gold-pale md:text-2xl">{siteConfig.taglineUrdu}</p>
            <p className="display-title mt-1 text-3xl text-white md:text-4xl">
              Talk to a <em className="text-gold">real consultant</em> today.
            </p>
            <p className="mt-2 text-white/75">{siteConfig.callbackPromise}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl("Assalam o Alaikum, I would like a call back about Umrah packages.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 font-bold text-white hover:bg-whatsapp-deep">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
            </a>
            <a href={contactNumber.telUrl} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 font-bold text-haram-deep hover:bg-gold-pale">
              <Icon name="call" filled className="text-[20px]" /> <span dir="ltr">{contactNumber.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="relative mx-auto grid max-w-container-max gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:px-margin-desktop lg:grid-cols-[1.3fr_0.9fr_1fr_1fr_1.1fr]">
        <div className="space-y-5">
          <Logo tone="light" size="md" />
          <p className="max-w-xs text-sm leading-relaxed text-white/75">{siteConfig.tagline} Transparent Umrah packages from Pakistan with real prices, inspected hotels and support on every step.</p>
          <ul className="space-y-1.5 text-sm text-white/80">
            {siteConfig.licences.map((l) => (
              <li key={l.label} className="flex items-start gap-2">
                <Icon name="verified" className="mt-0.5 text-[16px] text-gold" />
                <span>
                  <span className="font-semibold text-white">{l.label}</span>
                  <br />
                  <span className="text-white/65">{l.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Explore</h3>
          <ul className="space-y-2.5">
            {primaryNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href={planHref} className={linkClass}>Plan your Umrah</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Packages</h3>
          <ul className="space-y-2.5">
            {packages.map((p) => (
              <li key={p.slug}>
                <Link href={`/umrah-packages/${p.slug}`} className={linkClass}>{p.shortName}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Company</h3>
          <ul className="space-y-2.5">
            {secondaryNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
            {legalNav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Head office</h3>
          <address className="space-y-3 text-sm not-italic text-white/80">
            <p className="flex items-start gap-2">
              <Icon name="location_on" className="mt-0.5 text-[18px] text-gold" />
              <span>{headOffice.address}</span>
            </p>
            <p className="flex items-start gap-2">
              <Icon name="schedule" className="mt-0.5 text-[18px] text-gold" />
              <span>{headOffice.hours}<br /><span className="text-white/60">WhatsApp {siteConfig.supportHours}</span></span>
            </p>
            <p className="flex items-start gap-2">
              <Icon name="mail" className="mt-0.5 text-[18px] text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </p>
            <p className="flex items-start gap-2">
              <Icon name="call" className="mt-0.5 text-[18px] text-gold" />
              <a href={contactNumber.telUrl} dir="ltr" className="font-semibold text-white hover:text-gold">{contactNumber.display}</a>
            </p>
          </address>
          <div className="mt-5 flex items-center gap-2">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${siteConfig.name} on ${s.label}`} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/75 transition-colors hover:border-gold hover:bg-gold hover:text-haram-deep">
                <Icon name={s.icon} className="text-[18px]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Payment + legal */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-container-max flex-col gap-4 px-4 py-5 text-xs text-white/60 sm:px-6 md:px-margin-desktop lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} All rights reserved. Prices shown in PKR per person; updated {siteConfig.pricesUpdatedOn}.
          </p>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Accepted payment methods">
            {paymentMethods.map((m) => (
              <li key={m.id} className="flex items-center gap-1.5">
                <Icon name={m.icon} className="text-[16px] text-gold" />
                {m.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
