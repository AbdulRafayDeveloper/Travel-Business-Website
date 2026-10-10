"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { contactNumber, siteConfig } from "@/constants/site";

// Keep the footer column short; the full range lives on the products page.
const FOOTER_FABRICATION_LIMIT = 8;

const headingClass = "text-xs font-bold uppercase tracking-[0.18em] text-[#F87B1B] mb-5";
const linkClass = "text-sm text-white/70 hover:text-white transition-colors";

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.aboutUs, href: "/about" },
    { label: t.nav.products, href: "/products" },
    { label: t.nav.peb, href: "/pre-engineered-buildings" },
    { label: t.nav.canopy, href: "/petrol-pump-canopy" },
    { label: t.nav.whyChooseUs, href: "/why-choose-us" },
    { label: t.nav.faqs, href: "/faqs" },
    { label: t.nav.careers, href: "/careers" },
    { label: t.nav.contact, href: "/contact" },
    // { label: t.nav.requestQuote, href: "/request-a-quote" }, // temporarily hidden (WhatsApp / Call instead)
  ];

  const fabricationLinks = t.productsPage.categories
    .filter((c) => c.group === "fabrication")
    .slice(0, FOOTER_FABRICATION_LIMIT)
    .map((c) => ({ label: c.title, href: `/products#${c.id}` }));

  const contactRows = [
    { icon: "location_on", content: <span>{t.contact.info.addressVal}</span> },
    {
      icon: "call",
      content: (
        <a href={contactNumber.telUrl} dir="ltr" className="font-semibold text-white hover:text-[#F87B1B] transition-colors">
          {contactNumber.display}
        </a>
      ),
    },
    {
      icon: "mail",
      content: (
        <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#F87B1B] transition-colors break-all">
          {siteConfig.contact.email}
        </a>
      ),
    },
    { icon: "schedule", content: <span>{t.contact.info.hoursVal}</span> },
  ];

  const socialLinks = [
    { href: "https://linkedin.com", icon: "share", label: "AluTrade Global on LinkedIn" },
    { href: "https://facebook.com", icon: "groups", label: "AluTrade Global Community" },
  ];

  return (
    <footer
      className="site-footer text-white rounded-none border-t border-white/10"
      style={{ backgroundColor: "#11224E", color: "#ffffff" }}
    >
      <div className="py-14 md:py-16 px-4 md:px-margin-desktop max-w-container-max mx-auto text-start">
        <div className="grid grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.85fr_1.4fr] gap-x-6 gap-y-10 lg:gap-x-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-5">
            <Logo variant="footer" size="md" />
            <p className="text-sm leading-relaxed text-white/70 max-w-xs">{t.footer.description}</p>
            {/* Compact icon-only contact buttons; the full CTA lives in the section above the footer */}
            <div className="flex items-center gap-3">
              <a
                href={contactNumber.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t.contactActions.whatsapp}: ${contactNumber.display}`}
                title={t.contactActions.whatsapp}
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#1DB954] hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href={contactNumber.telUrl}
                aria-label={`${t.contactActions.call}: ${contactNumber.display}`}
                title={t.contactActions.call}
                className="w-10 h-10 rounded-full bg-[#F87B1B] text-[#11224E] flex items-center justify-center hover:bg-white hover:scale-105 transition-all"
              >
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                  call
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={headingClass}>{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link className={linkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fabrication */}
          <div>
            <h3 className={headingClass}>{t.footer.fabrication}</h3>
            <ul className="space-y-2.5">
              {fabricationLinks.map((item) => (
                <li key={item.href}>
                  <Link className={linkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#F87B1B] hover:text-white transition-colors"
                >
                  {t.homePage.products.viewAll}
                  <span className="material-symbols-outlined text-base rtl:rotate-180" aria-hidden="true">
                    arrow_forward
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className={headingClass}>{t.footer.contactTitle}</h3>
            <ul className="space-y-3.5 text-sm text-white/80">
              {contactRows.map((row) => (
                <li key={row.icon} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-[#F87B1B] text-[20px] leading-5 shrink-0"
                    aria-hidden="true"
                  >
                    {row.icon}
                  </span>
                  <div className="leading-5">{row.content}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="px-4 md:px-margin-desktop max-w-container-max mx-auto py-5 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/60">
          <p className="text-center lg:text-start">
            © 2026 AluTrade Global. All Rights Reserved.
            <span className="hidden lg:inline text-white/30"> · </span>
            <span className="hidden lg:inline">{t.footer.tagline}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            <Link className="whitespace-nowrap hover:text-white transition-colors" href="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="whitespace-nowrap hover:text-white transition-colors" href="/terms-of-service">
              Terms of Service
            </Link>
            <span className="h-4 w-px bg-white/15" aria-hidden="true" />
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-white/15 flex items-center justify-center text-white/70 hover:text-[#11224E] hover:bg-[#F87B1B] hover:border-[#F87B1B] transition-colors"
                >
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
