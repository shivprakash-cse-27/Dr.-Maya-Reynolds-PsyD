/**
 * Contact Page Component - Dr. Maya Reynolds, PsyD
 * 
 * "use client" is required for interactive form submission state, field handling,
 * and user feedback.
 * 
 * Grounded in Dr. Maya's single source of truth profile:
 * - In-person Santa Monica office: 123th Street 45 W, Santa Monica, CA 90401
 * - California telehealth availability
 * - Does NOT invent unsupported pricing, fake phone numbers, or insurance claims.
 */
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Footer } from "@/components";
import Reveal from "@/components/ui/Reveal";
import { MapPin, Monitor, CheckCircle2, Send, Clock, ShieldCheck, ArrowLeft, Phone } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preference: "in-person", // in-person or telehealth
    focus: "anxiety", // anxiety, trauma, burnout, other
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const form = e.currentTarget;
    const formPayload = new FormData(form);

    // Read access key from environment variable with user's fallback
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "d82703ad-8fcd-40f4-80be-eb176df5276d";
    formPayload.append("access_key", accessKey);
    formPayload.append("subject", `New Therapy Consultation Inquiry from ${formData.name}`);
    formPayload.append("from_name", "Dr. Maya Reynolds Therapy Practice");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setSubmitted(true);
      } else {
        setResult(data.message || "Error submitting form. Please try again.");
      }
    } catch {
      setResult("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#2A2426] selection:bg-[#E8E2D9] selection:text-[#3E2432]">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* =====================================================
            HERO HEADER
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-14 md:pt-14 md:pb-20 border-b border-[#E8E2D9]">
          <div className="mx-auto w-full max-w-[1580px] px-6 sm:px-10 lg:px-14">
            
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6B6365] hover:text-[#3E2432] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Homepage</span>
              </Link>
            </div>

            <Reveal>
              <div className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#B96B4D]/30 px-3.5 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 rounded-full bg-[#B96B4D]" />
                <p className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] uppercase text-[#6B6365]">
                  CONSULTATION &amp; INQUIRIES · SANTA MONICA, CA
                </p>
              </div>

              <h1 className="max-w-[850px] font-serif text-[2.75rem] sm:text-[3.75rem] md:text-[4.25rem] font-normal leading-[1.08] tracking-[-0.02em] text-[#3E2432]">
                Begin your therapeutic journey with{" "}
                <span className="italic font-normal text-[#B96B4D]">Dr. Maya Reynolds</span>.
              </h1>

              <p className="mt-6 max-w-[640px] text-base sm:text-lg text-[#6B6365] leading-relaxed">
                Whether you prefer in-person sessions at the Santa Monica office or secure California telehealth, please fill out the form below to connect.
              </p>
            </Reveal>

          </div>
        </section>

        {/* =====================================================
            CONTACT FORM & PRACTICE DETAILS SPLIT SECTION
        ====================================================== */}
        <section className="py-16 sm:py-20 lg:py-28">
          <div className="mx-auto w-full max-w-[1580px] px-6 sm:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* LEFT: Consultation Inquiry Form */}
              <div className="lg:col-span-7">
                <Reveal>
                  <div className="bg-white rounded-3xl p-8 sm:p-10 md:p-12 border border-[#E8E2D9] shadow-sm">
                    {submitted ? (
                      <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in-95 duration-400">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FAF7F2] text-[#3E2432] border border-[#E8E2D9] mb-2">
                          <CheckCircle2 className="w-8 h-8 text-[#B96B4D]" />
                        </div>
                        <h2 className="font-serif text-3xl text-[#3E2432]">
                          Inquiry Received
                        </h2>
                        <p className="text-base text-[#6B6365] max-w-md mx-auto leading-relaxed">
                          Thank you for reaching out, {formData.name || "friend"}. Dr. Maya Reynolds will review your details with complete confidentiality and be in touch soon at {formData.email}{formData.phone ? ` or via phone at ${formData.phone}` : ""} regarding consultation availability.
                        </p>
                        <div className="pt-4">
                          <button
                            type="button"
                            onClick={() => {
                              setSubmitted(false);
                              setResult("");
                              setFormData({
                                name: "",
                                email: "",
                                phone: "",
                                preference: "in-person",
                                focus: "anxiety",
                                message: "",
                              });
                            }}
                            className="btn-pill-outline text-xs font-semibold px-6 py-3 cursor-pointer"
                          >
                            Send Another Message
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#3E2432] mb-2">
                            Request a Consultation
                          </h2>
                          <p className="text-sm text-[#6B6365]">
                            All inquiries are held with strict therapeutic privacy and professional confidentiality.
                          </p>
                        </div>

                        {/* Name & Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                          <div className="space-y-2">
                            <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                              Full Name <span className="text-[#B96B4D]">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="e.g., Sarah Jenkins"
                              className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
                            />
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                              Email Address <span className="text-[#B96B4D]">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="e.g., sarah@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
                            />
                          </div>
                        </div>

                        {/* Phone Number & Session Location */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                                Phone Number <span className="text-[11px] font-normal lowercase tracking-normal text-[#6B6365]">(optional)</span>
                              </label>
                              <span className="text-[11px] text-[#6B6365]">Call or SMS</span>
                            </div>
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="e.g., (310) 555-0192"
                                className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label htmlFor="preference" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                              Session Location
                            </label>
                            <select
                              id="preference"
                              name="preference"
                              value={formData.preference}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
                            >
                              <option value="in-person">In-Person (Santa Monica, CA)</option>
                              <option value="telehealth">Secure Telehealth (California)</option>
                            </select>
                          </div>
                        </div>

                        {/* Primary Clinical Focus */}
                        <div className="space-y-2">
                          <label htmlFor="focus" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                            Primary Clinical Focus
                          </label>
                          <select
                            id="focus"
                            name="focus"
                            value={formData.focus}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors"
                          >
                            <option value="anxiety">Anxiety &amp; Panic Therapy</option>
                            <option value="trauma">Trauma &amp; EMDR Processing</option>
                            <option value="burnout">Burnout &amp; Perfectionism</option>
                            <option value="other">General Stress / Life Transitions</option>
                          </select>
                        </div>

                        {/* Message textarea */}
                        <div className="space-y-2">
                          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                            How can Dr. Maya support you? <span className="text-[#B96B4D]">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Briefly describe what you are experiencing and what you hope to focus on in therapy..."
                            className="w-full px-4 py-3 rounded-xl border border-[#E8E2D9] bg-[#FAF7F2]/50 text-sm text-[#2A2426] placeholder-[#6B6365]/50 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 focus:border-[#3E2432] transition-colors resize-none"
                          />
                        </div>

                        {/* Privacy notice */}
                        <div className="flex items-start gap-2.5 text-xs text-[#6B6365] bg-[#FAF7F2] p-4 rounded-xl border border-[#E8E2D9]/60">
                          <ShieldCheck className="w-4 h-4 text-[#B96B4D] shrink-0 mt-0.5" />
                          <span>
                            Confidentiality note: Submitting this form does not establish a formal therapist-client relationship until an initial consultation is held and mutual agreement is reached.
                          </span>
                        </div>

                        {/* Result feedback message on error */}
                        {result && !submitted && (
                          <div className="p-4 rounded-xl bg-[#B96B4D]/10 border border-[#B96B4D]/30 text-xs text-[#B96B4D] font-medium animate-in fade-in duration-200">
                            {result}
                          </div>
                        )}

                        {/* Submit button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-plum w-full sm:w-auto px-10 py-4 text-xs tracking-[0.12em] font-semibold flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                            <span>{isSubmitting ? "Sending..." : "Send Consultation Inquiry"}</span>
                            <Send className={`w-3.5 h-3.5 transition-transform duration-300 ${isSubmitting ? "animate-pulse" : "group-hover:translate-x-1"}`} />
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>

              {/* RIGHT: Practice Details, Office Address & Telehealth Information */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Office Setting Card */}
                <Reveal delayMs={100}>
                  <div className="bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-sm space-y-6">
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                      <MapPin className="w-4 h-4 text-[#B96B4D]" />
                      <span>Santa Monica Practice</span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#3E2432]">
                        In-Person Office
                      </h3>
                      <p className="font-serif text-lg text-[#3E2432] font-medium mt-1">
                        123th Street 45 W
                      </p>
                      <p className="text-sm text-[#6B6365]">
                        Santa Monica, CA 90401
                      </p>
                    </div>

                    <p className="text-sm text-[#6B6365] leading-relaxed">
                      A quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment.
                    </p>

                    {/* Office Image */}
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#E8E2D9]">
                      <Image
                        src="/images/maya/office-1.jpg"
                        alt="Natural light interior of Dr. Maya Reynolds Santa Monica office"
                        fill
                        sizes="(max-width: 1024px) 100vw, 450px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                </Reveal>

                {/* Telehealth Card */}
                <Reveal delayMs={180}>
                  <div className="bg-white rounded-3xl p-8 border border-[#E8E2D9] shadow-sm space-y-5">
                    <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                      <Monitor className="w-4 h-4 text-[#B96B4D]" />
                      <span>California Telehealth</span>
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl font-medium text-[#3E2432]">
                        Virtual Therapy Across California
                      </h3>
                      <p className="text-sm text-[#6B6365] mt-2 leading-relaxed">
                        Secure telehealth video appointments are available for adult clients residing anywhere within the state of California, ideal for busy entrepreneurs, executives, and creatives.
                      </p>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-[#6B6365] pt-2 border-t border-[#E8E2D9]">
                      <Clock className="w-4 h-4 text-[#B96B4D]" />
                      <span>By appointment only · Individual therapy for adults (18+)</span>
                    </div>
                  </div>
                </Reveal>

              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
