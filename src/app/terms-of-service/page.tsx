import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchemaOrg, buildWebPageSchema } from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: { absolute: `Terms of Service | ${siteConfig.name}` },
  description:
    "Review the legal terms, trade conditions, quotation policies, and operational standards governing AluTrade Global metal trading services.",
  alternates: {
    canonical: `${BASE_URL}/terms-of-service`,
  },
  openGraph: {
    title: `Terms of Service | ${siteConfig.name}`,
    description:
      "Official terms of service governing commercial transactions, quality inspections, and international shipments with AluTrade Global.",
    url: `${BASE_URL}/terms-of-service`,
    type: "website",
  },
};

export default function TermsOfServicePage() {
  const sections = [
    { id: "commercial-scope", title: "1. Scope & Agreement", icon: "gavel" },
    { id: "lme-pricing", title: "2. LME Pricing Standards", icon: "trending_up" },
    { id: "quality-standards", title: "3. Quality & Inspection", icon: "verified" },
    { id: "shipping-logistics", title: "4. Shipping & Logistics", icon: "local_shipping" },
    { id: "intellectual-property", title: "5. Intellectual Property", icon: "copyright" },
    { id: "governing-law", title: "6. Legal & Support", icon: "balance" },
  ];

  return (
    <>
      <SchemaOrg
        schema={buildWebPageSchema({
          name: "Terms of Service",
          description: "AluTrade Global Terms of Service",
          url: `${BASE_URL}/terms-of-service`,
        })}
      />
      <Header />
      <main id="main-content" className="pt-20 bg-[#f9f9ff] min-h-screen">
        {/* Header Hero Banner */}
        <section
          className="py-16 px-4 md:px-10 border-b border-[#F87B1B]/30"
          style={{ backgroundColor: "#11224E", color: "#ffffff" }}
        >
          <div className="max-w-[1280px] w-full mx-auto text-start">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs font-semibold mb-4 text-[#F87B1B]">
              <Link href="/" className="hover:underline hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/90">Legal</span>
              <span>/</span>
              <span className="text-white font-bold">Terms of Service</span>
            </nav>

            <h1
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "#ffffff" }}
            >
              Terms of Service
            </h1>
            <p
              className="max-w-2xl text-sm md:text-base leading-relaxed mb-6"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Commercial conditions, benchmark quotation policies, and quality standards governing international non-ferrous metal trading transactions.
            </p>

            {/* Document Metadata Chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="bg-[#09112a] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#F87B1B]">gavel</span>
                <span>LME Linked Contracts</span>
              </span>
              <span className="bg-[#09112a] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#F87B1B]">event</span>
                <span>Effective Date: Jan 1, 2026</span>
              </span>
              <span className="bg-[#09112a] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#F87B1B]">schedule</span>
                <span>5 Min Read</span>
              </span>
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="py-16 px-4 md:px-10 max-w-[1280px] w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            {/* Desktop Table of Contents Sticky Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 bg-white p-6 rounded-2xl border border-[#dce2f7] shadow-sm text-start">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#11224E] mb-4 pb-2 border-b border-gray-200">
                Document Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="flex items-center gap-2.5 text-xs font-semibold text-gray-800 hover:text-[#11224E] hover:bg-[#f1f3ff] p-2.5 rounded-xl transition-all"
                  >
                    <span className="material-symbols-outlined text-base text-[#1b3576]">
                      {sec.icon}
                    </span>
                    <span>{sec.title}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-800">
                Questions about terms?
                <a
                  href="mailto:info@alutradeglobal.com"
                  className="block mt-1 font-bold text-[#1b3576] hover:underline"
                >
                  Contact Legal Desk →
                </a>
              </div>
            </aside>

            {/* Document Content Cards */}
            <div className="col-span-1 lg:col-span-9 space-y-8 text-start w-full">
              {/* Section 1 */}
              <div
                id="commercial-scope"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">gavel</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    1. Commercial Scope & Contract Agreement
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  By accessing the AluTrade Global digital platform, submitting Requests for Quotations (RFQs), or executing formal commercial sales agreements with AluTrade Global, your entity agrees to be bound by these Terms of Service. These terms govern all metal procurement, quality verification, shipping, and settlement transactions executed with our firm.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="lme-pricing"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">trending_up</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    2. Metal Pricing & Commodity Benchmark Standards
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
                  Prices quoted for non-ferrous raw materials and recycled metals (aluminum, copper, zinc, lead) are established using international commodity benchmarks:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b3576] text-xl mt-0.5 shrink-0">
                      show_chart
                    </span>
                    <div>
                      <h4 className="font-bold text-[#11224E] text-sm md:text-base mb-1">
                        LME Index Settlement
                      </h4>
                      <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                        Spot prices fluctuate based on real-time London Metal Exchange (LME) settlement rates. Spot quotes are valid for a specified window detailed on the Proforma Invoice.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b3576] text-xl mt-0.5 shrink-0">
                      contract
                    </span>
                    <div>
                      <h4 className="font-bold text-[#11224E] text-sm md:text-base mb-1">
                        Contractual Lock-In
                      </h4>
                      <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                        Final metal prices are locked upon mutual execution of the official Sales Contract and issuance of the confirmed Proforma Invoice.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b3576] text-xl mt-0.5 shrink-0">
                      anchor
                    </span>
                    <div>
                      <h4 className="font-bold text-[#11224E] text-sm md:text-base mb-1">
                        International Incoterms 2020
                      </h4>
                      <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                        Shipping terms (FOB loading port, CFR destination port, CIF) are defined explicitly on all commercial invoices and contracts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                id="quality-standards"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">verified</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    3. Metal Quality & Independent Inspection Protocols
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
                  To ensure furnace-ready purity and compliance for industrial buyers:
                </p>

                <ul className="space-y-3">
                  {[
                    "All aluminum and non-ferrous metal shipments strictly comply with ISRI (Institute of Scrap Recycling Industries) specifications.",
                    "Pre-shipment inspection certificates issued by independent international survey agencies (SGS, Alex Stewart) are provided upon request.",
                    "Chemical composition and moisture tolerance thresholds are explicitly stipulated in sales contracts prior to vessel loading.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-800">
                      <span className="material-symbols-outlined text-[#F87B1B] text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Section 4 */}
              <div
                id="shipping-logistics"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">local_shipping</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    4. Shipping, Port Logistics & Force Majeure
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  AluTrade Global coordinates ocean freight container shipments through Tier-1 shipping lines. Delivery schedules provided prior to departure represent estimates based on ocean carrier vessel schedules. Neither party shall be liable for delays caused by acts of God, port labor strikes, maritime blockades, or extreme weather force majeure events.
                </p>
              </div>

              {/* Section 5 */}
              <div
                id="intellectual-property"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">copyright</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    5. Intellectual Property Rights
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  All trademarks, service marks, logo designs, text descriptions, layout frameworks, and media assets published on this platform are the property of AluTrade Global and protected by international intellectual property laws.
                </p>
              </div>

              {/* Section 6 */}
              <div
                id="governing-law"
                className="bg-[#11224E] text-white p-6 md:p-10 rounded-2xl border border-[#F87B1B]/30 shadow-md scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F87B1B] text-[#11224E] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">balance</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    6. Governing Law & Legal Contact Desk
                  </h2>
                </div>
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">
                  These terms are governed by international commercial trade law standards. For contract inquiries or legal trade clarifications, please contact our legal desk:
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:info@alutradeglobal.com"
                    className="bg-[#F87B1B] text-[#11224E] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="material-symbols-outlined text-base">email</span>
                    <span>Contact Legal Desk</span>
                  </a>
                  <Link
                    href="/contact"
                    className="bg-white/10 border border-white/20 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="material-symbols-outlined text-base">contact_support</span>
                    <span>Visit Contact Center</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
