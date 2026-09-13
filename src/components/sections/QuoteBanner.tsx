/**
 * Grounded Quote Banner Component
 * 
 * Features Dr. Maya Reynolds' core philosophical reflection on insight,
 * resilience, and client collaboration.
 * Uses slow-pulsing background decorative rings and scroll reveal.
 */

import React from "react";
import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function QuoteBanner() {
  return (
    <section className="relative bg-[#3E2432] text-[#FAF7F2] py-24 sm:py-28 lg:py-36 xl:py-40 overflow-hidden">
      {/* Background Decorative Rings with gentle slow float */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-[#FAF7F2]/5 pointer-events-none animate-botanical-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-[#B96B4D]/15 pointer-events-none" />

      <div className="relative z-10 max-w-4xl xl:max-w-5xl mx-auto px-6 sm:px-10 text-center">
        <Reveal>
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 mb-8 transition-transform duration-500 hover:scale-110">
            <Quote className="w-6 h-6 text-[#B96B4D]" />
          </div>

          {/* Main Quote Heading: Explicitly pure cream/white text color with high contrast */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.65rem] xl:text-[3.15rem] leading-[1.35] font-normal !text-[#FAF7F2] tracking-normal">
            &ldquo;I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.&rdquo;
          </h2>

          {/* Attribution */}
          <div className="mt-8 flex flex-col items-center">
            <span className="text-base sm:text-lg font-serif font-medium !text-[#FAF7F2]">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="text-xs tracking-[0.14em] uppercase !text-[#FAF7F2]/80 font-light mt-1">
              Licensed Clinical Psychologist • Santa Monica, California
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
