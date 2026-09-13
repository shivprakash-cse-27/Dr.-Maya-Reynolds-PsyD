/**
 * Frequently Asked Questions (FAQ) Section Component
 * 
 * "use client" is required for interactive accordion expand/collapse state.
 * Answers smoothly expand and collapse using a CSS grid height transition (grid-template-rows: 0fr -> 1fr)
 * rather than abrupt appearance/disappearance.
 * Strictly adheres to Dr. Maya's profile.
 */
"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS_DATA } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  // openIdx tracks the currently expanded accordion item. Defaults to 0 (first question open).
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // Toggles the accordion: Clicking an open item collapses it (sets null)
  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <Reveal>
              <span className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.16em] uppercase text-[#B96B4D] block mb-3">
                Frequently Asked Questions
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal text-[#3E2432]">
                Questions &amp; Practice Details
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#6B6365]">
                Clear information about Dr. Maya Reynolds&apos; clinical practice, approaches, and settings.
              </p>
            </Reveal>
          </div>

          {/* Accessible Accordion List */}
          <div className="space-y-4">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <Reveal key={idx} delayMs={idx * 60}>
                  <div className="rounded-2xl border border-[#E8E2D9] bg-[#FAF7F2]/50 overflow-hidden transition-all duration-300 hover:border-[#3E2432]/30">
                    {/* 
                      Interactive Accordion Header Button:
                      Includes 'aria-expanded' to announce expansion state to screen readers.
                    */}
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full px-6 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#3E2432]/20 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-xl sm:text-2xl font-medium text-[#3E2432]">
                        {faq.question}
                      </span>
                      
                      {/* Animated Chevron indicator */}
                      <div
                        className={`w-8 h-8 rounded-full border border-[#E8E2D9] flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
                          isOpen ? "rotate-180 bg-[#3E2432] text-white" : "bg-white text-[#3E2432]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {/* 
                      Smooth Height Animation via CSS Grid (grid-template-rows: 0fr -> 1fr)
                      Avoids jerky jumps and provides smooth 350ms easing on answer expand/collapse.
                    */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-350 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 sm:px-8 pb-6 text-sm sm:text-base text-[#6B6365] leading-relaxed border-t border-[#E8E2D9]/40 pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
