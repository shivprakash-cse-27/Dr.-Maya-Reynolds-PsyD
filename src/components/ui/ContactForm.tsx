"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Read access key securely from .env (with fallback)
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "d82703ad-8fcd-40f4-80be-eb176df5276d";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        form.reset();
      } else {
        setResult(data.message || "Error submitting form.");
      }
    } catch {
      setResult("Error submitting form. Please check connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="form-name" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432] mb-1.5">
          Name <span className="text-[#B96B4D]">*</span>
        </label>
        <input
          type="text"
          id="form-name"
          name="name"
          placeholder="Your Full Name"
          required
          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="form-email" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432] mb-1.5">
          Email <span className="text-[#B96B4D]">*</span>
        </label>
        <input
          type="email"
          id="form-email"
          name="email"
          placeholder="Your Email Address"
          required
          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="form-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432] mb-1.5">
          Phone <span className="text-[11px] font-normal lowercase tracking-normal text-[#6B6365]">(optional)</span>
        </label>
        <input
          type="tel"
          id="form-phone"
          name="phone"
          placeholder="Your Phone Number"
          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="form-message" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432] mb-1.5">
          Message <span className="text-[#B96B4D]">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          placeholder="How can Dr. Maya help you?"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-plum w-full px-8 py-3.5 text-xs tracking-wider uppercase font-semibold cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed transition-all"
      >
        {isSubmitting ? "Sending...." : "Submit Form"}
      </button>

      {result && (
        <span
          className={`block text-xs font-medium text-center p-3 rounded-xl ${
            result.includes("Successfully")
              ? "bg-[#8F9E92]/15 text-[#3E2432] border border-[#8F9E92]/30"
              : "bg-[#B96B4D]/10 text-[#B96B4D] border border-[#B96B4D]/30"
          }`}
        >
          {result}
        </span>
      )}
    </form>
  );
}