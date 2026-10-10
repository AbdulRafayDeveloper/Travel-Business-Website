"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactForm() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: t.contact.form.subjects[0],
    message: "",
  });

  const [touched, setTouched] = useState({
    email: false,
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const showEmailError = touched.email && !isEmailValid(formData.email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ email: true });

    if (!isEmailValid(formData.email)) {
      return;
    }

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: t.contact.form.subjects[0],
      message: "",
    });
    setTouched({ email: false });
  };

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl border border-[#dce2f7] text-start shadow-md h-full flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-[#11224E] mb-8">
        {t.contact.form.title}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label
              htmlFor="contact-name"
              className={`text-xs md:text-sm font-bold transition-colors block ${
                focusedField === "name"
                  ? "text-[#1b3576]"
                  : "text-[#11224E]"
              }`}
            >
              {t.contact.form.name}
            </label>
            <input
              id="contact-name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-xl border border-[#c2c7d1] focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20 outline-none transition-all text-[#11224E] bg-[#f8fafc] focus:bg-white placeholder-gray-400 font-medium"
              placeholder={t.contact.form.namePlaceholder}
              autoComplete="name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label
              htmlFor="contact-email"
              className={`text-xs md:text-sm font-bold transition-colors block ${
                focusedField === "email"
                  ? "text-[#1b3576]"
                  : "text-[#11224E]"
              }`}
            >
              {t.contact.form.email}
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => {
                setFocusedField(null);
                setTouched({ ...touched, email: true });
              }}
              aria-invalid={showEmailError}
              aria-describedby={showEmailError ? "email-error-msg" : undefined}
              className={`w-full p-4 rounded-xl border ${
                showEmailError ? "border-red-600 focus:ring-red-600/20" : "border-[#c2c7d1] focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20"
              } outline-none transition-all text-[#11224E] bg-[#f8fafc] focus:bg-white placeholder-gray-400 font-medium`}
              placeholder={t.contact.form.emailPlaceholder}
              autoComplete="email"
              required
            />
            {showEmailError && (
              <span
                id="email-error-msg"
                className="text-red-600 text-xs font-semibold flex items-center gap-1 mt-1"
              >
                <span className="material-symbols-outlined text-[16px]">error</span>
                {t.contact.form.errorEmail}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Company Name */}
          <div className="space-y-2">
            <label
              htmlFor="contact-company"
              className={`text-xs md:text-sm font-bold transition-colors block ${
                focusedField === "company"
                  ? "text-[#1b3576]"
                  : "text-[#11224E]"
              }`}
            >
              {t.contact.form.company}
            </label>
            <input
              id="contact-company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-xl border border-[#c2c7d1] focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20 outline-none transition-all text-[#11224E] bg-[#f8fafc] focus:bg-white placeholder-gray-400 font-medium"
              placeholder={t.contact.form.companyPlaceholder}
              autoComplete="organization"
            />
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <label
              htmlFor="contact-subject"
              className={`text-xs md:text-sm font-bold transition-colors block ${
                focusedField === "subject"
                  ? "text-[#1b3576]"
                  : "text-[#11224E]"
              }`}
            >
              {t.contact.form.subject}
            </label>
            <select
              id="contact-subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className="w-full p-4 rounded-xl border border-[#c2c7d1] focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20 outline-none transition-all text-[#11224E] bg-[#f8fafc] focus:bg-white font-medium"
            >
              {t.contact.form.subjects.map((sub, idx) => (
                <option key={idx} value={sub} className="text-[#11224E] bg-white">
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="contact-message"
            className={`text-xs md:text-sm font-bold transition-colors block ${
              focusedField === "message"
                ? "text-[#1b3576]"
                : "text-[#11224E]"
            }`}
          >
            {t.contact.form.message}
          </label>
          <textarea
            id="contact-message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            className="w-full p-4 rounded-xl border border-[#c2c7d1] focus:border-[#11224E] focus:ring-2 focus:ring-[#11224E]/20 outline-none transition-all resize-none text-[#11224E] bg-[#f8fafc] focus:bg-white placeholder-gray-400 font-medium"
            placeholder={t.contact.form.messagePlaceholder}
            rows={5}
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-10 py-4 bg-[#11224E] hover:bg-[#1b3576] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md border border-[#F87B1B]/30"
          >
            {t.contact.form.submit}
            <span className="material-symbols-outlined text-lg text-[#F87B1B]">send</span>
          </button>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="mt-6 p-5 bg-[#11224E] text-white rounded-xl border border-[#F87B1B]/40 flex items-start gap-4 transition-all">
            <span
              className="material-symbols-outlined text-[#F87B1B] mt-0.5 text-2xl"
            >
              check_circle
            </span>
            <div>
              <p className="font-bold text-[#F87B1B] text-base">
                {t.contact.form.success.title}
              </p>
              <p className="text-sm text-white/90 mt-1 leading-relaxed">
                {t.contact.form.success.desc}
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
