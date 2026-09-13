/**
 * Final Consultation Call to Action (CTA) Component
 * 
 * Invites prospective clients to begin their therapeutic journey.
 * Features dual portrait & office vignettes with gentle hover scaling,
 * scroll reveals, and button micro-interactions.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function AppointmentCTA() {
  return (
    <section id="contact" className="relative bg-[#3E2432] text-white py-20 sm:py-24 lg:py-32 xl:py-36 overflow-hidden">
      {/* Organic Warm Glow with subtle slow float */}
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#B96B4D]/20 rounded-full blur-3xl pointer-events-none animate-botanical-float" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FAF7F2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left max-w-2xl xl:max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-[0.14em] uppercase text-[#E8E2D9] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#B96B4D]" />
                <span>Begin Your Process</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.75rem] leading-[1.15] font-normal text-[#FAF7F2]">
                You don&apos;t have to keep pushing through on your own.
              </h2>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="space-y-4 text-base sm:text-lg xl:text-xl text-[#FAF7F2]/85 font-light leading-relaxed">
                <p>
                  Therapy can be a space to slow down, understand what you&apos;re carrying, and build a more sustainable way forward.
                </p>
                <p>
                  If you’re looking for a therapist who combines practical tools with depth-oriented work—and who understands the realities of living and working in a fast-paced environment—I may be a good fit.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={180}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="btn-plum border border-white/20 text-xs sm:text-sm tracking-[0.08em] uppercase px-9 py-4 font-semibold shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Schedule a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-2 text-xs sm:text-sm text-[#FAF7F2]/80 font-light">
                <MapPin className="w-4 h-4 text-[#B96B4D] shrink-0" />
                <span>In-person in Santa Monica (123th Street 45 W) &amp; California Telehealth</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column Arched Portrait & Office Vignette with subtle hover scaling */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delayMs={200} className="w-full max-w-[380px] sm:max-w-[420px] xl:max-w-[460px] h-[460px] sm:h-[500px] relative">
              {/* Main Portrait Frame */}
              <div className="absolute top-0 left-0 w-[270px] sm:w-[300px] xl:w-[330px] aspect-[4/5] rounded-t-[12rem] rounded-b-[2rem] shadow-2xl overflow-hidden bg-[#FAF7F2] border-4 border-white/20 z-10 group">
                <Image
                  src="/images/maya/maya-portrait.png"
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  sizes="330px"
                  className="object-cover object-top filter contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Overlapping Santa Monica Office Detail Frame */}
              <div className="absolute bottom-0 right-0 w-[200px] sm:w-[220px] xl:w-[240px] aspect-[4/5] rounded-t-[10rem] rounded-b-[1.75rem] shadow-2xl overflow-hidden bg-white z-20 border-4 border-[#3E2432] group">
                <Image
                  src="/images/maya/office-1.jpg"
                  alt="Santa Monica therapy office natural light"
                  fill
                  sizes="240px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
