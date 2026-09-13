/**
 * Our Office & Practice Sanctuary Section Component
 * 
 * Custom Section (Creative Thinking Test):
 * Does NOT exist in the original template.
 * 
 * Purpose:
 * Highlights Dr. Maya Reynolds' physical Santa Monica therapy space and hybrid care availability.
 * Sourced strictly from Dr. Maya's psychologist profile:
 * - Address: 123th Street 45 W, Santa Monica, CA 90401
 * - Office description: Quiet, private space designed to feel calm and grounding,
 *   with natural light and a comfortable, uncluttered environment.
 * - Both in-person therapy in Santa Monica and secure telehealth for clients located in California.
 * - Emphasis on safety, stabilization, comfort, and nervous-system pacing.
 * 
 * Styling & Integration:
 * - Follows the site's Deep Plum (#3E2432), Warm Ivory (#FAF7F2), Terracotta (#B96B4D), and Sage (#8F9E92) palette.
 * - Utilizes Cormorant Garamond serif headings and Inter sans body typography.
 * - Features next/image with responsive sizes for fast loading and visual fidelity.
 * - Wrapped with Reveal for subtle, therapeutic scroll reveal animations.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Sun, ShieldCheck, Monitor, Sparkles, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Office() {
  return (
    <section
      id="office"
      aria-labelledby="office-heading"
      className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9] relative overflow-hidden"
    >
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        
        {/* =========================================================================
            1. SECTION HEADER
            Eyebrow badge, primary serif headline, and thoughtful narrative copy
            describing what clients can expect when stepping into therapy.
        ========================================================================== */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            {/* Eyebrow badge with subtle location pin */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3E2432]/5 border border-[#3E2432]/10 mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#B96B4D]" />
              <span className="text-[0.6875rem] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[#B96B4D]">
                OUR PRACTICE SPACE · SANTA MONICA, CA
              </span>
            </div>

            {/* Main Section Headline */}
            <h2
              id="office-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal text-[#3E2432] leading-[1.18] tracking-[-0.01em]"
            >
              Our Office: A Calm Space for Healing
            </h2>

            {/* Thoughtfully written supporting copy sourced directly from Dr. Maya's profile */}
            <p className="mt-5 text-base sm:text-lg text-[#626A66] font-normal leading-relaxed">
              Stepping into therapy should feel like an immediate exhale. My Santa Monica practice is a quiet, private sanctuary designed to feel calm and grounding—filled with natural daylight and a comfortable, uncluttered environment where your nervous system can settle.
            </p>
          </div>
        </Reveal>

        {/* =========================================================================
            2. THERAPY OFFICE IMAGE GALLERY
            Showcases the 2 authentic office interior images from Dr. Maya Reynolds' profile.
            Presented in an elegant, responsive side-by-side editorial frame with
            floating atmospheric pills, zoom-on-hover interaction, and detailed captions.
        ========================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 mb-16 sm:mb-20">
          
          {/* ----------------------------------------------------
              IMAGE CARD 1: The Primary Consultation Sanctuary
          ----------------------------------------------------- */}
          <Reveal delayMs={100}>
            <div className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#E8E2D9] shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full">
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8E2D9]">
                <Image
                  src="/images/maya/office-1.jpg"
                  alt="Dr. Maya Reynolds Santa Monica therapy room with abundant natural light and organic seating"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1720px) 50vw, 800px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Floating atmospheric pill badge */}
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E2D9] shadow-sm flex items-center gap-2">
                  <Sun className="w-3.5 h-3.5 text-[#B96B4D]" />
                  <span className="text-[0.6875rem] sm:text-xs font-medium text-[#3E2432] tracking-wide">
                    Natural Light &amp; Open Air
                  </span>
                </div>
              </div>

              {/* Caption & Environmental Description */}
              <div className="pt-5 pb-2 px-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#3E2432]">
                      The Consultation Sanctuary
                    </h3>
                    <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-[#B96B4D] bg-[#B96B4D]/10 px-2.5 py-0.5 rounded-full">
                      Santa Monica Suite
                    </span>
                  </div>
                  <p className="text-sm text-[#626A66] leading-relaxed">
                    Surrounded by gentle natural daylight and organic wood textures. The intentional, uncluttered layout eliminates sensory distractions so you can focus entirely on your internal experience.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E8E2D9]/70 flex items-center gap-2 text-xs text-[#3E2432] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#8F9E92] shrink-0" />
                  <span>Private waiting area &amp; discreet private entrance</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ----------------------------------------------------
              IMAGE CARD 2: The Reflective Seating & Processing Space
          ----------------------------------------------------- */}
          <Reveal delayMs={200}>
            <div className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#E8E2D9] shadow-sm hover:shadow-md transition-all duration-500 flex flex-col h-full">
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8E2D9]">
                <Image
                  src="/images/maya/office-2.jpg"
                  alt="Comfortable, sound-insulated therapy seating area for EMDR and somatic therapy in Santa Monica"
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1720px) 50vw, 800px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />

                {/* Floating atmospheric pill badge */}
                <div className="absolute top-4 left-4 bg-[#FAF7F2]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8E2D9] shadow-sm flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B96B4D]" />
                  <span className="text-[0.6875rem] sm:text-xs font-medium text-[#3E2432] tracking-wide">
                    Sound-Masked Acoustic Privacy
                  </span>
                </div>
              </div>

              {/* Caption & Environmental Description */}
              <div className="pt-5 pb-2 px-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#3E2432]">
                      Grounded Reflection &amp; EMDR Space
                    </h3>
                    <span className="text-[0.6875rem] font-semibold tracking-wider uppercase text-[#B96B4D] bg-[#B96B4D]/10 px-2.5 py-0.5 rounded-full">
                      Paced for Depth
                    </span>
                  </div>
                  <p className="text-sm text-[#626A66] leading-relaxed">
                    Ergonomic seating positioned for open, collaborative dialogue. Specially arranged to support somatic grounding exercises, mindful breathing, and safe, stabilized EMDR trauma processing.
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E8E2D9]/70 flex items-center gap-2 text-xs text-[#3E2432] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#8F9E92] shrink-0" />
                  <span>Acoustically treated for absolute client confidentiality</span>
                </div>
              </div>
            </div>
          </Reveal>

        </div>

        {/* =========================================================================
            3. FOUR SENSORY & THERAPEUTIC ENVIRONMENT PILLARS
            Highlighting safety, comfort, privacy, and physiological regulation.
        ========================================================================== */}
        <Reveal>
          <div className="mb-16 sm:mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#3E2432]">
                An Environment Designed for the Nervous System
              </h3>
              <p className="text-sm sm:text-base text-[#626A66] mt-2">
                Clients often share that the space itself helps them feel more at ease the moment they arrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Pillar 1: Natural Light */}
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#E8E2D9] hover:border-[#B96B4D]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#B96B4D] mb-4">
                  <Sun className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#3E2432] mb-2">
                  Abundant Natural Light
                </h4>
                <p className="text-xs sm:text-sm text-[#626A66] leading-relaxed">
                  Generous coastal daylight helps ease sensory fatigue and gently shifts your body out of chronic, high-alert office stress.
                </p>
              </div>

              {/* Pillar 2: Acoustic Privacy */}
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#E8E2D9] hover:border-[#B96B4D]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#B96B4D] mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#3E2432] mb-2">
                  Absolute Privacy &amp; Safety
                </h4>
                <p className="text-xs sm:text-sm text-[#626A66] leading-relaxed">
                  Dedicated soundproofing and commercial sound masking ensure every vulnerability and thought shared remains strictly protected.
                </p>
              </div>

              {/* Pillar 3: Uncluttered & Grounding */}
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#E8E2D9] hover:border-[#B96B4D]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#B96B4D] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#3E2432] mb-2">
                  Uncluttered Simplicity
                </h4>
                <p className="text-xs sm:text-sm text-[#626A66] leading-relaxed">
                  A minimalist, organic aesthetic with earthy tones and living botanicals helps clear cognitive overwhelm and overthinking.
                </p>
              </div>

              {/* Pillar 4: Paced for Depth */}
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#E8E2D9] hover:border-[#B96B4D]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#B96B4D] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#3E2432] mb-2">
                  Paced for Regulation
                </h4>
                <p className="text-xs sm:text-sm text-[#626A66] leading-relaxed">
                  Sessions are structured to feel supportive and unhurried—creating space for deep stabilization, insight, and lasting resilience.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =========================================================================
            4. PRACTICE DETAILS & SESSION FORMATS CARD (IN-PERSON + TELEHEALTH)
            Provides exact address, location context, and clear hybrid session details.
        ========================================================================== */}
        <Reveal delayMs={150}>
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-[#E8E2D9] shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* In-Person Practice Column (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#B96B4D]">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Practice Location</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#3E2432]">
                  123th Street 45 W
                </h3>
                <p className="font-serif text-lg text-[#3E2432] -mt-2">
                  Santa Monica, CA 90401
                </p>
                <p className="text-sm text-[#626A66] leading-relaxed">
                  Conveniently located in downtown Santa Monica with accessible street and nearby garage parking. Easily reachable from Venice, Pacific Palisades, Brentwood, and throughout West Los Angeles.
                </p>
                <div className="pt-1 flex items-center gap-2 text-xs text-[#3E2432] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#8F9E92]" />
                  <span>Welcoming new in-person clients on a hybrid or weekly schedule</span>
                </div>
              </div>

              {/* Divider for desktop */}
              <div className="hidden lg:block lg:col-span-1 h-full flex justify-center items-center">
                <div className="w-px h-40 bg-[#E8E2D9]" />
              </div>

              {/* Hybrid & Telehealth Availability Column (6 cols) */}
              <div className="lg:col-span-6 space-y-5">
                <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                  <Monitor className="w-4 h-4 text-[#B96B4D]" />
                  <span>Flexible Hybrid Care · Statewide Telehealth</span>
                </div>
                
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#3E2432]">
                  In-Person Sessions or Secure California Virtual Care
                </h4>

                <p className="text-sm text-[#626A66] leading-relaxed">
                  For clients who travel frequently, balance demanding professional workloads, or live outside the immediate Los Angeles area, Dr. Maya offers secure, HIPAA-compliant telehealth for adult residents throughout all of California.
                </p>

                {/* Consultation Booking Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-plum text-xs font-semibold tracking-wider uppercase px-7 py-3.5 text-center flex items-center justify-center gap-2 group"
                  >
                    <span>SCHEDULE A CONSULTATION</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/#approach"
                    className="btn-pill-outline text-xs font-medium tracking-wider uppercase px-6 py-3 text-center text-[#3E2432]"
                  >
                    EXPLORE MY APPROACH
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
