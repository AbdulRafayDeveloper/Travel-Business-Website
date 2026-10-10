"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function QuoteForm() {
  const { t, locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState("email");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReset = () => {
    setSubmitted(false);
    setFileName(null);
    setContactMethod("email");
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const inputCls =
    "w-full h-14 bg-[#F8FAFC] border border-[#c2c7d1] rounded-xl px-4 focus:outline-none focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20 transition-all text-[#11224E] text-sm font-medium";
  const labelCls = "block text-sm font-bold text-[#11224E] mb-2";

  const sectionHeader = (num: string, title: string) => (
    <div className="flex items-center gap-3 mb-8">
      <span className="w-8 h-8 rounded-full bg-[#11224E] text-[#F87B1B] flex items-center justify-center font-bold text-sm shrink-0">
        {num}
      </span>
      <h3 className="text-xl font-bold text-[#11224E]">{title}</h3>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#dce2f7]">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-12" noValidate>
          {/* Section 1 */}
          <section>
            {sectionHeader("1", t.quotePage.form.sec1Title)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quote-fullname" className={labelCls}>
                  {t.quotePage.form.lblFullName}
                </label>
                <input
                  id="quote-fullname"
                  type="text"
                  required
                  placeholder={t.quotePage.form.phFullName}
                  className={inputCls}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="quote-company" className={labelCls}>
                  {t.quotePage.form.lblCompany}
                </label>
                <input
                  id="quote-company"
                  type="text"
                  required
                  placeholder={t.quotePage.form.phCompany}
                  className={inputCls}
                  autoComplete="organization"
                />
              </div>
              <div>
                <label htmlFor="quote-email" className={labelCls}>
                  {t.quotePage.form.lblEmail}
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  placeholder={t.quotePage.form.phEmail}
                  className={inputCls}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="quote-phone" className={labelCls}>
                  {t.quotePage.form.lblPhone}
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  required
                  placeholder={t.quotePage.form.phPhone}
                  className={inputCls}
                  autoComplete="tel"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="quote-country" className={labelCls}>
                  {t.quotePage.form.lblCountry}
                </label>
                <select id="quote-country" className={inputCls}>
                  <option>Pakistan</option>
                  <option>United Arab Emirates</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Germany</option>
                  <option>India</option>
                  <option>China</option>
                  <option>Saudi Arabia</option>
                  <option>Turkey</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            {sectionHeader("2", t.quotePage.form.sec2Title)}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="quote-product" className={labelCls}>
                  {t.quotePage.form.lblProduct}
                </label>
                <select id="quote-product" className={inputCls}>
                  <option>Aluminum Scrap</option>
                  <option>Copper Scrap</option>
                  <option>Zinc Alloys</option>
                  <option>Other / Mixed Loads</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-quantity" className={labelCls}>
                    {t.quotePage.form.lblQuantity}
                  </label>
                  <input
                    id="quote-quantity"
                    type="number"
                    required
                    placeholder="0.00"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="quote-unit" className={labelCls}>
                    {t.quotePage.form.lblUnit}
                  </label>
                  <select id="quote-unit" className={inputCls}>
                    <option>MT (Metric Tons)</option>
                    <option>LBS</option>
                    <option>KG</option>
                  </select>
                </div>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="quote-destination" className={labelCls}>
                  {t.quotePage.form.lblDestination}
                </label>
                <input
                  id="quote-destination"
                  type="text"
                  placeholder={t.quotePage.form.phDestination}
                  className={inputCls}
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="quote-specs" className={labelCls}>
                  {t.quotePage.form.lblSpecs}
                </label>
                <textarea
                  id="quote-specs"
                  rows={4}
                  placeholder={t.quotePage.form.phSpecs}
                  className="w-full bg-[#F8FAFC] border border-[#c2c7d1] rounded-xl p-4 focus:outline-none focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20 transition-all text-[#11224E] text-sm resize-none font-medium"
                />
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            {sectionHeader("3", t.quotePage.form.sec3Title)}
            <div className="space-y-6">
              {/* File Upload */}
              <div>
                <label htmlFor="quote-file-input" className={labelCls}>
                  {t.quotePage.form.lblUpload}
                </label>
                <div
                  className="border-2 border-dashed border-[#c2c7d1] rounded-xl p-8 text-center bg-[#F8FAFC]/50 hover:bg-[#F8FAFC] transition-all cursor-pointer"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    id="quote-file-input"
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                  />
                  <span className="material-symbols-outlined text-4xl text-[#1b3576] mb-2 block">
                    upload_file
                  </span>
                  {fileName ? (
                    <p className="text-sm text-[#11224E] font-bold">{fileName}</p>
                  ) : (
                    <>
                      <p className="text-sm text-gray-800 font-medium">
                        {t.quotePage.form.dragDrop}
                      </p>
                      <p className="text-xs text-gray-800 mt-1">
                        {t.quotePage.form.maxSize}
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Contact Method */}
              <div>
                <span className={labelCls}>
                  {t.quotePage.form.lblContactMethod}
                </span>
                <div className="flex flex-wrap gap-4">
                  {["email", "phone", "whatsapp"].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center gap-2 cursor-pointer bg-[#F8FAFC] px-5 py-3 rounded-xl border transition-all ${
                        contactMethod === method
                          ? "border-[#11224E] bg-[#11224E]/5 font-bold text-[#11224E]"
                          : "border-gray-200 hover:border-[#11224E]/50 text-gray-800"
                      }`}
                    >
                      <input
                        type="radio"
                        name="contact"
                        value={method}
                        checked={contactMethod === method}
                        onChange={() => setContactMethod(method)}
                        className="text-[#11224E] accent-[#11224E]"
                      />
                      <span className="text-sm capitalize">
                        {method.charAt(0).toUpperCase() + method.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Submit & Linked Terms/Privacy */}
          <div className="pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-[#11224E] text-white font-bold text-lg rounded-2xl shadow-lg hover:bg-[#1b3576] transition-all flex items-center justify-center gap-3 cursor-pointer border border-[#F87B1B]/30"
            >
              {t.quotePage.form.btnSubmit}
              <span className="material-symbols-outlined text-[#F87B1B]">send</span>
            </button>
            
            <p className="text-xs text-gray-800 mt-4 leading-relaxed">
              {locale === "ar" ? (
                <>
                  بتقديمك هذا الطلب، فإنك توافق على{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-[#1b3576] font-bold underline hover:text-[#F87B1B] transition-colors"
                  >
                    شروط الخدمة
                  </Link>{" "}
                  و{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#1b3576] font-bold underline hover:text-[#F87B1B] transition-colors"
                  >
                    سياسة الخصوصية
                  </Link>{" "}
                  الخاصة بنا.
                </>
              ) : (
                <>
                  By submitting, you agree to our{" "}
                  <Link
                    href="/terms-of-service"
                    className="text-[#1b3576] font-bold underline hover:text-[#F87B1B] transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-[#1b3576] font-bold underline hover:text-[#F87B1B] transition-colors"
                  >
                    Privacy Policy
                  </Link>{" "}
                  regarding data handling.
                </>
              )}
            </p>
          </div>
        </form>
      ) : (
        /* Success State */
        <div className="flex flex-col items-center justify-center text-center py-20 space-y-6">
          <div className="w-24 h-24 bg-[#11224E] rounded-full flex items-center justify-center text-[#F87B1B] mb-4">
            <span
              className="material-symbols-outlined text-6xl"
              style={{ fontVariationSettings: "'wght' 700" }}
            >
              check_circle
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#11224E]">
            {t.quotePage.success.title}
          </h2>
          <p className="text-lg text-gray-800 max-w-md mx-auto leading-relaxed">
            {t.quotePage.success.desc}
          </p>
          <div className="flex flex-wrap gap-4 pt-8 justify-center">
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#11224E] text-white font-bold rounded-xl hover:bg-[#1b3576] transition-all cursor-pointer"
            >
              {t.quotePage.success.btnSubmitAnother}
            </button>
            <Link href="/">
              <span className="px-8 py-3 border border-[#11224E] text-[#11224E] font-bold rounded-xl hover:bg-[#11224E]/5 transition-all cursor-pointer inline-block">
                {t.quotePage.success.btnBackHome}
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
