/**
 * Clinical Specialization & Areas of Expertise Component
 * 
 * Lists 12 clinical specialties derived strictly from Dr. Maya Reynolds' profile.
 * Implements hover transitions on checklist rows and subtle scroll reveal.
 */

import React from "react";
import { Check } from "lucide-react";
import { CLINICAL_FOCUS_DATA } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function Expertise() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Title */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.16em] uppercase text-[#B96B4D] block mb-3">
                Clinical Specialization
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-normal text-[#3E2432] leading-[1.18]">
                Key focus areas in my Santa Monica practice.
              </h3>
              <p className="mt-4 text-base sm:text-lg text-[#6B6365] font-normal leading-relaxed">
                Dr. Maya combines practical, evidence-based tools with depth-oriented psychological care tailored specifically for adults.
              </p>
            </Reveal>
          </div>

          {/* Right Checklist Grid */}
          <div className="lg:col-span-7">
            <Reveal delayMs={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-4 xl:gap-y-5">
                {CLINICAL_FOCUS_DATA.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#FAF7F2] transition-all duration-300 border border-transparent hover:border-[#E8E2D9] hover:translate-x-1"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#3E2432]/10 text-[#3E2432] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-base sm:text-[1.0625rem] text-[#2A2426] font-medium tracking-normal">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
