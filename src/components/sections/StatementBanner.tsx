/**
 * Trauma Philosophy & Stabilization Section Component
 * 
 * Explains Dr. Maya Reynolds' trauma philosophy: beginning with safety,
 * stabilization, pacing, and nervous system regulation.
 * Features scroll reveals and card micro-interactions.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function StatementBanner() {
  return (
    <section className="relative bg-[#3E2432] text-white py-20 sm:py-24 lg:py-32 overflow-hidden border-b border-[#E8E2D9]">
      {/* Background Architectural Glow and Soft Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/images/maya/office-2.jpg"
          alt="Santa Monica Therapy Practice"
          fill
          className="object-cover object-center filter blur-sm scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#3E2432] via-[#3E2432]/95 to-[#3E2432]" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 px-4 py-1.5 rounded-full text-xs font-medium tracking-[0.14em] text-[#E8E2D9] uppercase mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B96B4D]" />
              <span>Trauma Philosophy &amp; Stabilization</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-[#FAF7F2] leading-[1.18]">
              Trauma work begins with <span className="italic text-[#B96B4D] font-light">safety</span>.
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#FAF7F2]/85 font-light leading-relaxed max-w-2xl mx-auto mt-4">
              My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
            </p>
          </Reveal>

          {/* 3 Pillars with Staggered Fade Up and Hover Lift */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
            <Reveal delayMs={100}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 h-full">
                <ShieldCheck className="w-6 h-6 text-[#B96B4D] mb-3" />
                <h3 className="font-serif text-xl font-medium text-[#FAF7F2] mb-2">Paced Carefully</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Prioritizing nervous system safety and stabilization before processing deeper material.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={180}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 h-full">
                <HeartHandshake className="w-6 h-6 text-[#B96B4D] mb-3" />
                <h3 className="font-serif text-xl font-medium text-[#FAF7F2] mb-2">Complex Patterns</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Supporting single-incident trauma as well as complex patterns stemming from childhood or chronic stress.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={260}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 h-full">
                <Compass className="w-6 h-6 text-[#B96B4D] mb-3" />
                <h3 className="font-serif text-xl font-medium text-[#FAF7F2] mb-2">Daily Regulation</h3>
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                  Empowering you with somatic regulation skills that bring genuine calm outside the therapy room.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delayMs={320}>
            <div className="pt-4">
              <Link
                href="#contact"
                className="btn-plum border border-white/20 text-xs sm:text-sm tracking-[0.08em] uppercase px-8 py-4 font-semibold shadow-lg"
              >
                Consult with Dr. Maya
              </Link>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
