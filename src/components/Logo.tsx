"use client";

import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "default" | "footer" | "icon-only";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "default", size = "md", className = "" }: LogoProps) {
  const isFooter = variant === "footer";
  const isIconOnly = variant === "icon-only";

  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  const iconSizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <Link
      href="/"
      aria-label="AluTrade Global Homepage"
      className={`inline-flex items-center gap-3 transition-opacity hover:opacity-95 cursor-pointer ${className}`}
    >
      {/* Brand Icon Mark */}
      <div
        className={`relative rounded-xl bg-gradient-to-br from-[#1b3576] to-[#11224E] flex items-center justify-center shadow-sm shrink-0 border border-white/10 ${iconSizes[size]}`}
      >
        {/* Vector SVG Graphic Icon */}
        <svg
          viewBox="0 0 100 100"
          className="w-3/4 h-3/4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon Outline */}
          <path
            d="M50 10 L85 28 V72 L50 90 L15 72 V28 Z"
            stroke="#E2E8F0"
            strokeWidth="3"
            strokeLinejoin="round"
            opacity="0.35"
          />
          {/* "A" Pillar */}
          <path
            d="M32 75 L47 25 H53 L68 75 H56 L52 60 H48 L44 75 H32 Z"
            fill="#F8FAFC"
          />
          {/* Gold Ribbon */}
          <path
            d="M22 65 Q 50 32, 78 43 Q 50 54, 22 65 Z"
            fill="#F87B1B"
          />
          {/* Diamond Center */}
          <polygon points="50,40 55,48 50,56 45,48" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Text (omitted if icon-only) */}
      {!isIconOnly && (
        <div className="flex flex-col text-start">
          <div
            className={`font-black tracking-tight leading-none ${
              size === "sm"
                ? "text-lg"
                : size === "lg"
                ? "text-2xl md:text-3xl"
                : "text-xl md:text-2xl"
            }`}
          >
            <span
              className={
                isFooter
                  ? "text-white"
                  : "text-primary"
              }
            >
              AluTrade
            </span>
            <span className="text-[#F87B1B] ms-1">Global</span>
          </div>
          <span
            className={`font-bold tracking-[0.2em] uppercase mt-1 ${
              size === "sm"
                ? "text-[9px]"
                : "text-[10px] md:text-[11px]"
            } ${
              isFooter
                ? "text-white/85"
                : "text-secondary"
            }`}
          >
            Metal Trading
          </span>
        </div>
      )}
    </Link>
  );
}
