"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { Logo } from "@/components/Logo";
import { ContactActions } from "@/components/ContactActions";

export function Header() {
  // NOTE: `locale` and `setLocale` were used by the language switcher, which is
  // temporarily commented out below. Re-add them to this destructure when re-enabling it.
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isProducts = pathname === "/products" || pathname.startsWith("/products/");
  const isContact = pathname === "/contact";
  const isAbout = pathname === "/about";
  const isPeb = pathname === "/pre-engineered-buildings";
  const isCanopy = pathname === "/petrol-pump-canopy";
  const isCareers = pathname === "/careers";
  const isWhyUs = pathname === "/why-choose-us";
  const isFAQs = pathname === "/faqs";
  // const isQuote = pathname === "/request-a-quote"; // used by the commented-out Request a Quote button

  // Header main nav links
  const navLinks = [
    { href: "/", label: t.nav.home, icon: "home", active: isHome },
    { href: "/about", label: t.nav.aboutUs, icon: "info", active: isAbout },
    { href: "/products", label: t.nav.products, icon: "inventory_2", active: isProducts },
    { href: "/pre-engineered-buildings", label: t.nav.peb, shortLabel: t.nav.pebShort, icon: "warehouse", active: isPeb },
    { href: "/petrol-pump-canopy", label: t.nav.canopy, shortLabel: t.nav.canopyShort, icon: "local_gas_station", active: isCanopy },
    { href: "/contact", label: t.nav.contact, icon: "call", active: isContact },
  ];

  // Secondary links for mobile drawer
  const drawerSecondaryLinks = [
    { href: "/why-choose-us", label: t.nav.whyChooseUs, icon: "verified", active: isWhyUs },
    { href: "/faqs", label: t.nav.faqs, icon: "help", active: isFAQs },
    { href: "/careers", label: t.nav.careers, icon: "work", active: isCareers },
  ];

  return (
    <header
      className={`site-header fixed top-0 start-0 w-full z-[60] h-20 flex items-center transition-all duration-300 border-b border-[#F87B1B]/30 shadow-xl ${
        scrolled ? "bg-[#11224E] shadow-2xl" : "bg-[#11224E]"
      }`}
      style={{ backgroundColor: "#11224E", color: "#ffffff" }}
    >
      <div className="flex justify-between items-center gap-2 px-4 md:px-margin-desktop max-w-container-max mx-auto w-full min-w-0 overflow-hidden">
        {/* Brand Logo Component - Always high-contrast white & gold */}
        <Logo size="md" variant="footer" />

        {/* Desktop Navigation - High contrast white text with gold active indicator */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 font-bold text-[13px] xl:text-[14px] tracking-wide whitespace-nowrap transition-all inline-flex items-center gap-1.5 ${
                link.active ? "active-nav-link font-extrabold" : "hover:text-[#F87B1B]"
              }`}
              style={{ color: link.active ? "#F87B1B" : "#ffffff" }}
            >
              <span
                className="material-symbols-outlined text-[20px] hidden 2xl:inline"
                style={{ fontVariationSettings: link.active ? "'FILL' 1" : "'FILL' 0" }}
                aria-hidden="true"
              >
                {link.icon}
              </span>
              {link.shortLabel ?? link.label}
            </Link>
          ))}
        </nav>

        {/* Action Panel */}
        <div className="hidden lg:flex items-center gap-4 flex-shrink-0 ms-4">
          {/*
            -- Language Switcher (temporarily disabled; English only for now) --
            Requires `locale` and `setLocale` from useLanguage().

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#09112a] border border-white/20">
            <button
              onClick={() => setLocale("en")}
              className="px-3 py-1 text-xs rounded-lg font-black transition-all cursor-pointer"
              style={{
                backgroundColor: locale === "en" ? "#F87B1B" : "rgba(255, 255, 255, 0.15)",
                color: locale === "en" ? "#11224E" : "#ffffff",
              }}
            >
              {locale === "ar" ? "الإنجليزية" : "EN"}
            </button>
            <button
              onClick={() => setLocale("ar")}
              className="px-3 py-1 text-xs rounded-lg font-black transition-all cursor-pointer"
              style={{
                backgroundColor: locale === "ar" ? "#F87B1B" : "rgba(255, 255, 255, 0.15)",
                color: locale === "ar" ? "#11224E" : "#ffffff",
              }}
            >
              {locale === "ar" ? "العربية" : "AR"}
            </button>
          </div>
          */}

          {/*
            -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --
            Requires `isQuote` above.

          <Link href="/request-a-quote">
            <button
              className={`bg-[#F87B1B] text-[#11224E] font-extrabold px-5 py-2.5 rounded-xl hover:bg-white hover:text-[#11224E] transition-all shadow-md cursor-pointer text-sm flex items-center gap-2 border border-[#F87B1B] ${
                isQuote ? "ring-2 ring-white" : ""
              }`}
              style={{ backgroundColor: "#F87B1B", color: "#11224E" }}
            >
              <span className="material-symbols-outlined text-lg">request_quote</span>
              <span>{t.nav.requestQuote}</span>
            </button>
          </Link>
          */}

          {/* Call action (WhatsApp lives in the floating button) */}
          <ContactActions variant="onDark" size="sm" channels="call" />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          {/*
            -- Mobile Language Switcher (temporarily disabled; English only for now) --

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#09112a] border border-white/20">
            <button
              onClick={() => setLocale("en")}
              className="px-2.5 py-1 text-xs rounded font-black transition-all cursor-pointer"
              style={{
                backgroundColor: locale === "en" ? "#F87B1B" : "transparent",
                color: locale === "en" ? "#11224E" : "#ffffff",
              }}
            >
              {locale === "ar" ? "إنجليزي" : "EN"}
            </button>
            <button
              onClick={() => setLocale("ar")}
              className="px-2.5 py-1 text-xs rounded font-black transition-all cursor-pointer"
              style={{
                backgroundColor: locale === "ar" ? "#F87B1B" : "transparent",
                color: locale === "ar" ? "#11224E" : "#ffffff",
              }}
            >
              {locale === "ar" ? "عربي" : "AR"}
            </button>
          </div>
          */}

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white hover:text-[#F87B1B] focus:outline-none cursor-pointer p-1.5 rounded-lg bg-[#09112a] border border-white/20"
            aria-label="Open Navigation Drawer"
          >
            <span className="material-symbols-outlined text-2xl" style={{ color: "#ffffff" }}>
              menu
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Off-Canvas Side Drawer (Left Side) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[70] lg:hidden">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sliding Side Drawer Panel (Always Left Side) */}
          <div
            className="fixed top-0 bottom-0 left-0 w-4/5 max-w-sm text-white px-5 py-4 shadow-2xl flex flex-col justify-between gap-4 transition-transform duration-300 z-50 border-r border-white/20 overflow-y-auto"
            style={{ backgroundColor: "#11224E", color: "#ffffff" }}
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex justify-between items-center pb-3 border-b border-white/15">
                <Logo size="sm" variant="footer" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 hover:text-white p-1 rounded-lg hover:bg-white/10"
                  aria-label="Close Drawer"
                >
                  <span className="material-symbols-outlined text-2xl" style={{ color: "#ffffff" }}>
                    close
                  </span>
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <nav className="py-3 flex flex-col gap-0.5 text-start" aria-label="Mobile navigation">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-bold text-[15px] py-2 px-3 rounded-lg transition-colors flex items-center gap-2.5"
                    style={{
                      backgroundColor: link.active ? "#F87B1B" : "transparent",
                      color: link.active ? "#11224E" : "#ffffff",
                    }}
                  >
                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                ))}
                <span className="my-2 border-t border-white/15" aria-hidden="true" />
                {drawerSecondaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-medium text-sm py-1.5 px-3 rounded-lg transition-colors flex items-center gap-2.5"
                    style={{
                      backgroundColor: link.active ? "rgba(255,255,255,0.2)" : "transparent",
                      color: link.active ? "#F87B1B" : "#ffffff",
                    }}
                  >
                    <span className="material-symbols-outlined text-lg" aria-hidden="true">
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Action CTA */}
            <div className="pt-4 border-t border-white/15">
              {/*
                -- Request a Quote Button (temporarily replaced by WhatsApp / Call) --

              <Link href="/request-a-quote" onClick={() => setMobileMenuOpen(false)}>
                <button
                  className="w-full font-extrabold py-3.5 rounded-xl transition-all shadow-md cursor-pointer text-sm flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#F87B1B", color: "#11224E" }}
                >
                  <span className="material-symbols-outlined text-lg">request_quote</span>
                  <span>{t.nav.requestQuote}</span>
                </button>
              </Link>
              */}
              <ContactActions variant="onDark" size="md" fullWidth channels="call" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
