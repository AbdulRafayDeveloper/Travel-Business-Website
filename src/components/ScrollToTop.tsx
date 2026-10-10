"use client";

import React, { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className="fixed bottom-24 end-6 z-40 w-12 h-12 rounded-full bg-primary text-white shadow-xl hover:bg-primary-container hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer border border-white/20"
    >
      <span className="material-symbols-outlined text-2xl">arrow_upward</span>
    </button>
  );
}
