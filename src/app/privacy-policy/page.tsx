import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SchemaOrg, buildWebPageSchema } from "@/components/SchemaOrg";
import { getBaseUrl, siteConfig } from "@/constants/site";

const BASE_URL = getBaseUrl();

export const metadata: Metadata = {
  title: { absolute: `Privacy Policy | ${siteConfig.name}` },
  description:
    "Learn how AluTrade Global collects, protects, and uses your personal and commercial data in accordance with international privacy regulations.",
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      "AluTrade Global privacy policy detailing data protection, cookie usage, and international compliance standards for global metal trading.",
    url: `${BASE_URL}/privacy-policy`,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "introduction", title: "1. Introduction", icon: "gavel" },
    { id: "information-collected", title: "2. Information We Collect", icon: "dataset" },
    { id: "use-of-information", title: "3. How We Use Your Information", icon: "rule" },
    { id: "data-protection", title: "4. Data Protection & Security", icon: "security" },
    { id: "third-party-disclosures", title: "5. Third-Party Disclosures", icon: "hub" },
    { id: "contact-us", title: "6. Compliance & Contact", icon: "mail" },
  ];

  return (
    <>
      <SchemaOrg
        schema={buildWebPageSchema({
          name: "Privacy Policy",
          description: "AluTrade Global Privacy Policy",
          url: `${BASE_URL}/privacy-policy`,
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
              <span className="text-white font-bold">Privacy Policy</span>
            </nav>

            <h1
              className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
              style={{ color: "#ffffff" }}
            >
              Privacy Policy
            </h1>
            <p
              className="max-w-2xl text-sm md:text-base leading-relaxed mb-6"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              Learn how AluTrade Global collects, protects, and manages corporate client data and international metal trading communications.
            </p>

            {/* Metadata Chips */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="bg-[#09112a] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#F87B1B]">verified_user</span>
                <span>ISO 27001 Compliant</span>
              </span>
              <span className="bg-[#09112a] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#F87B1B]">event</span>
                <span>Effective Date: Jan 1, 2026</span>
              </span>
              <span className="bg-[#09112a] border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium text-white flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#F87B1B]">schedule</span>
                <span>4 Min Read</span>
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
                Need legal assistance?
                <a
                  href="mailto:info@alutradeglobal.com"
                  className="block mt-1 font-bold text-[#1b3576] hover:underline"
                >
                  Contact Legal Team →
                </a>
              </div>
            </aside>

            {/* Document Content Cards */}
            <div className="col-span-1 lg:col-span-9 space-y-8 text-start w-full">
              {/* Section 1 */}
              <div
                id="introduction"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">gavel</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    1. Introduction & Corporate Commitment
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  AluTrade Global (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy, confidentiality, and security of corporate clients, international supply chain partners, and website visitors. This Privacy Policy details how we collect, process, manage, and safeguard information transmitted through our digital platform and commercial trading infrastructure.
                </p>
              </div>

              {/* Section 2 */}
              <div
                id="information-collected"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">dataset</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    2. Information We Collect
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
                  To execute international non-ferrous metal trading services and verify trade compliance, we collect the following structured data categories:
                </p>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b3576] text-xl mt-0.5 shrink-0">
                      domain
                    </span>
                    <div>
                      <h4 className="font-bold text-[#11224E] text-sm md:text-base mb-1">
                        Commercial & Contact Information
                      </h4>
                      <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                        Registered company names, corporate tax IDs, authorized representative names, business email addresses, telephone numbers, and physical facility addresses provided during RFQ or contract submissions.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b3576] text-xl mt-0.5 shrink-0">
                      inventory_2
                    </span>
                    <div>
                      <h4 className="font-bold text-[#11224E] text-sm md:text-base mb-1">
                        Metal Sourcing Specifications
                      </h4>
                      <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                        Target metal scrap grades (e.g., UBC, 6061/6063 aluminum, Birch/Cliff copper), volume requirements, LME benchmark pricing preferences, and port delivery terms.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#f8fafc] border border-gray-200 flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1b3576] text-xl mt-0.5 shrink-0">
                      lan
                    </span>
                    <div>
                      <h4 className="font-bold text-[#11224E] text-sm md:text-base mb-1">
                        Technical Telemetry
                      </h4>
                      <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                        IP address details, browser specifications, device identifiers, and site usage patterns captured automatically for security auditing and server load management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                id="use-of-information"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">rule</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    3. How We Use Your Information
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
                  We process collected data exclusively for legitimate commercial operations and regulatory compliance:
                </p>

                <ul className="space-y-3">
                  {[
                    "Generating formal spot and contract price quotations based on current LME rates.",
                    "Coordinating shipping logistics, bills of lading, and port customs clearance documentation.",
                    "Fulfilling Know Your Customer (KYC) and Anti-Money Laundering (AML) trade screening protocols.",
                    "Enhancing cybersecurity, preventing unauthorized access, and auditing infrastructure stability.",
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
                id="data-protection"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">security</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    4. Data Protection & Cybersecurity Standards
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed mb-6">
                  We maintain bank-grade technical and organizational safeguards to ensure data integrity across all global communication channels:
                </p>

                <div className="p-6 rounded-xl bg-[#11224E] text-white border border-[#F87B1B]/40 space-y-3">
                  <div className="flex items-center gap-2 text-[#F87B1B] font-bold text-sm">
                    <span className="material-symbols-outlined">shield</span>
                    <span>Zero Data Commercialization Guarantee</span>
                  </div>
                  <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                    AluTrade Global does NOT sell, rent, lease, or monetize client trade data or contact lists under any circumstances. All data is processed strictly for trade execution.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div
                id="third-party-disclosures"
                className="bg-white p-6 md:p-10 rounded-2xl border border-[#dce2f7] shadow-sm hover:shadow-md transition-shadow scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">hub</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-[#11224E]">
                    5. Third-Party Operational Disclosures
                  </h2>
                </div>
                <p className="text-sm md:text-base text-gray-800 leading-relaxed">
                  Information is shared with vetted third parties strictly to fulfill contractual obligations. These include accredited ocean carriers, independent surveying agencies (e.g., SGS, Alex Stewart) for metal quality inspection, and international financial institutions handling Letters of Credit (L/C).
                </p>
              </div>

              {/* Section 6 */}
              <div
                id="contact-us"
                className="bg-[#11224E] text-white p-6 md:p-10 rounded-2xl border border-[#F87B1B]/30 shadow-md scroll-mt-28 w-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F87B1B] text-[#11224E] flex items-center justify-center font-bold shrink-0">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    6. Data Protection Inquiries & Compliance Contact
                  </h2>
                </div>
                <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6">
                  For data requests, privacy inquiries, or trade documentation compliance assistance, please reach out to our legal department:
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:info@alutradeglobal.com"
                    className="bg-[#F87B1B] text-[#11224E] font-bold px-6 py-3 rounded-xl hover:bg-white transition-colors flex items-center gap-2 text-sm"
                  >
                    <span className="material-symbols-outlined text-base">email</span>
                    <span>Email Compliance Team</span>
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
