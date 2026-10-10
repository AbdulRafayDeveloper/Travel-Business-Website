"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/graphics/Logo";
import { Icon } from "@/components/ui/Icon";
import { LinkButton } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { contactNumber, siteConfig, whatsappUrl } from "@/config/site";
import { planHref, primaryNav, secondaryNav } from "@/config/navigation";
import { cn } from "@/lib/utils";

const DRAWER_ID = "mobile-navigation";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the drawer is open and close it on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-shadow", scrolled ? "shadow-soft" : "")}>
      {/* Utility strip */}
      <div className="hidden bg-haram-deep text-white lg:block">
        <div className="mx-auto flex h-9 max-w-container-max items-center justify-between px-margin-desktop text-xs">
          <p className="flex items-center gap-2 text-white/85">
            <Icon name="verified" className="text-[16px] text-gold" />
            Licensed Umrah operator · Lahore · Karachi · Islamabad · Since {siteConfig.foundedYear}
          </p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/85">
              <span className="h-2 w-2 rounded-full bg-whatsapp" aria-hidden="true" />
              Consultants online {siteConfig.supportHours}
            </span>
            <a href={contactNumber.telUrl} className="flex items-center gap-1.5 font-bold hover:text-gold">
              <Icon name="call" className="text-[16px]" filled />
              <span dir="ltr">{contactNumber.display}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-haram-deep/10 bg-ivory/95 backdrop-blur supports-[backdrop-filter]:bg-ivory/85">
        <div className="mx-auto flex h-[68px] max-w-container-max items-center justify-between gap-4 px-4 sm:px-6 md:px-margin-desktop lg:h-[76px]">
          <Logo size="md" />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={cn(
                  "relative rounded-md px-3 py-2 text-[0.9rem] font-semibold text-ink transition-colors hover:text-haram xl:px-3.5",
                  isActive(link.href) && "text-haram after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={whatsappUrl("Assalam o Alaikum, I want to plan my Umrah. Please guide me.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-whatsapp/40 text-whatsapp transition-colors hover:bg-whatsapp hover:text-white"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <LinkButton href={planHref} variant="primary" size="sm" icon="arrow_forward">
              Plan my Umrah
            </LinkButton>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href={contactNumber.telUrl} aria-label={`Call ${contactNumber.display}`} className="flex h-11 w-11 items-center justify-center rounded-lg bg-haram text-white">
              <Icon name="call" filled className="text-[22px]" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls={DRAWER_ID}
              aria-label="Open menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-haram/25 text-haram-deep cursor-pointer"
            >
              <Icon name="menu" className="text-[26px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div
        id={DRAWER_ID}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn("fixed inset-0 z-[60] lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setOpen(false)}
          className={cn("absolute inset-0 bg-night/70 backdrop-blur-sm transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
        />
        <div
          className={cn(
            "absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col bg-ivory shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full rtl:-translate-x-full",
          )}
        >
          <div className="flex h-[68px] items-center justify-between border-b border-line px-5">
            <Logo size="sm" />
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-10 w-10 items-center justify-center rounded-lg text-haram-deep hover:bg-sand cursor-pointer">
              <Icon name="close" className="text-[26px]" />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-0.5">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 font-semibold text-ink",
                      isActive(link.href) ? "bg-haram text-white" : "hover:bg-sand",
                    )}
                  >
                    <Icon name={link.icon} className={cn("text-[22px]", isActive(link.href) ? "text-gold" : "text-haram")} />
                    <span className="flex flex-col">
                      {link.label}
                      {link.description && <span className={cn("text-xs font-normal", isActive(link.href) ? "text-white/80" : "text-slate")}>{link.description}</span>}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-6 mb-2 px-3 text-slate">More</p>
            <ul className="grid grid-cols-2 gap-1">
              {secondaryNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn("flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold", isActive(link.href) ? "bg-haram-soft text-haram-deep" : "text-ink hover:bg-sand")}
                  >
                    <Icon name={link.icon} className="text-[18px] text-gold-deep" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Any click inside the footer closes the drawer before navigation */}
          <div className="space-y-2 border-t border-line bg-sand px-5 py-4" onClickCapture={() => setOpen(false)}>
            <LinkButton href={planHref} variant="primary" fullWidth icon="arrow_forward">
              Plan my Umrah
            </LinkButton>
            <LinkButton href={whatsappUrl("Assalam o Alaikum, I want to plan my Umrah. Please guide me.")} variant="whatsapp" fullWidth>
              WhatsApp us
            </LinkButton>
            <p className="pt-1 text-center text-xs text-slate">
              Support {siteConfig.supportHours}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
