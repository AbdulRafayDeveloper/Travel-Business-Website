import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { getBaseUrl, siteConfig } from "@/constants/site";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const BASE_URL = getBaseUrl();

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#11224E",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      `${siteConfig.name} | International Aluminum & Metal Trading Company`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "aluminum trading company",
    "metal trading",
    "non-ferrous metals supplier",
    "aluminum scrap",
    "copper scrap",
    "zinc trading",
    "metal export",
    "industrial metals",
    "AluTrade Global",
    "aluminum supplier Pakistan",
    "metal trading company Pakistan",
    "scrap metal exporter Pakistan",
  ],
  authors: [{ name: siteConfig.name, url: BASE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title:
      `${siteConfig.name} | International Aluminum & Metal Trading Company`,
    description:
      "Leading global supplier of aluminum scrap, copper, zinc, and recyclable metals. Serving 50+ countries with ISO-certified quality and world-class logistics.",
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — International Aluminum & Metal Trading`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      `${siteConfig.name} | International Aluminum & Metal Trading Company`,
    description:
      "Leading global supplier of aluminum scrap, copper, zinc, and recyclable metals. Serving 50+ countries with ISO-certified quality.",
    creator: "@alutradeglobal",
    site: "@alutradeglobal",
    images: [`${BASE_URL}/og-image.png`],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-US": BASE_URL,
      "ar": `${BASE_URL}?lang=ar`,
    },
  },
  icons: {
    icon: [
      { url: "/icon", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/icon", "/favicon.ico"],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/logo-icon.svg", color: "#11224E" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://lh3.googleusercontent.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://lh3.googleusercontent.com"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full font-sans bg-background text-on-background">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold focus:text-sm"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          {children}
          <ScrollToTop />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}
