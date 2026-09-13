/**
 * Intro Hope Section Component
 * 
 * Explores the reality of high-functioning adults dealing with exhaustion and overthinking.
 * Uses the reusable Reveal component to fade and translate content smoothly as it scrolls into view.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function IntroHope() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]/60">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Arched Calm Office Setting with gentle hover scale */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <Reveal className="w-full max-w-[420px] sm:max-w-[480px] xl:max-w-[520px]">
              <div className="relative aspect-[4/5] rounded-t-[14rem] rounded-b-[2rem] shadow-xl overflow-hidden bg-[#FAF7F2] border-4 border-[#FAF7F2] group">
                <Image
                  src="/images/maya/office-2.jpg"
                  alt="Dr. Maya Reynolds comfortable, uncluttered therapy space in Santa Monica with natural light"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 480px, 520px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2432]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm font-medium">
                  <p className="font-serif text-lg italic text-[#E8E2D9]">A Quiet, Grounding Environment</p>
                  <p className="text-xs text-white/80">Designed with natural light and an uncluttered feel</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Narrative Text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left max-w-2xl xl:max-w-3xl">
            <Reveal delayMs={100}>
              <div className="inline-block border-l-2 border-[#B96B4D] pl-3 text-xs tracking-[0.14em] uppercase text-[#6B6365] font-semibold mb-4">
                The Reality Behind &ldquo;High Functioning&rdquo;
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] leading-[1.18] font-normal text-[#3E2432]">
                When you look &ldquo;functional&rdquo; on the outside—but internally feel exhausted.
              </h2>
            </Reveal>

            <Reveal delayMs={180}>
              <div className="space-y-5 sm:space-y-6 text-base sm:text-lg xl:text-xl text-[#6B6365] font-normal leading-relaxed">
                <p>
                  Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>

                <p>
                  Clients frequently come to me quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the lingering impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
              </div>
            </Reveal>

            {/* Core Values Bulleted Grid */}
            <Reveal delayMs={240}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] transition-all duration-300 hover:border-[#3E2432]/30 hover:shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#3E2432] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#2A2426]">Warm, grounded &amp; collaborative</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] transition-all duration-300 hover:border-[#3E2432]/30 hover:shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#3E2432] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#2A2426]">Both emotional &amp; physiological awareness</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] transition-all duration-300 hover:border-[#3E2432]/30 hover:shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#3E2432] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#2A2426]">Structured enough to feel supportive</span>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAF7F2] border border-[#E8E2D9] transition-all duration-300 hover:border-[#3E2432]/30 hover:shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#3E2432] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#2A2426]">Space for reflection, depth &amp; insight</span>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="pt-2">
                <Link
                  href="#who-i-work-with"
                  className="inline-flex items-center gap-2 text-sm tracking-[0.06em] font-semibold text-[#3E2432] uppercase hover:text-[#B96B4D] transition-colors group"
                >
                  <span>Read More About Who I Support</span>
                  <span className="text-[#B96B4D] transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
