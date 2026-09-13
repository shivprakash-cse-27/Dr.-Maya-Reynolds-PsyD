/**
 * Therapeutic Approach & Modalities Component
 * 
 * Explains Dr. Maya Reynolds' warm, collaborative, and grounded philosophy.
 * Highlights the 4 evidence-based modalities: CBT, EMDR, Mindfulness, and Somatics.
 * Uses scroll reveal animations and subtle card elevations on hover.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { MODALITIES_DATA } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function HowWeWork() {
  return (
    <section id="approach" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-center">
          
          {/* Left Content: Maya's approach */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left max-w-2xl xl:max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 text-xs sm:text-[0.8125rem] font-semibold tracking-[0.14em] text-[#B96B4D] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Therapeutic Approach &amp; Modalities</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] leading-[1.18] font-normal text-[#3E2432]">
                A warm, collaborative, and grounded approach.
              </h2>
            </Reveal>

            <Reveal delayMs={100}>
              <div className="space-y-4 text-base sm:text-lg text-[#6B6365] font-normal leading-relaxed">
                <p>
                  Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods to help clients understand both the emotional and physiological sides of what they’re experiencing.
                </p>
                <p>
                  Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working—especially for high-achievers who have spent years pushing through stress.
                </p>
              </div>
            </Reveal>

            {/* 4 Modalities Cards with subtle hover lift */}
            <Reveal delayMs={180}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {MODALITIES_DATA.map((mod, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#3E2432]/30 hover:shadow-md"
                  >
                    <h3 className="font-serif text-lg font-semibold text-[#3E2432] mb-1.5">
                      {mod.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6365] leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delayMs={240}>
              <div className="pt-3">
                <Link
                  href="#services"
                  className="btn-plum text-xs sm:text-sm tracking-[0.08em] uppercase px-8 py-4 font-semibold inline-flex items-center gap-2 group"
                >
                  <span>Explore Specializations</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Arched Calm Office Setting Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Reveal delayMs={150} className="w-full max-w-[400px] sm:max-w-[460px] xl:max-w-[500px]">
              <div className="relative aspect-[4/5] rounded-t-[14rem] rounded-b-[2rem] shadow-xl overflow-hidden bg-white border-4 border-white group">
                <Image
                  src="/images/maya/office-1.jpg"
                  alt="Quiet and private Santa Monica therapy office with natural light"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 460px, 500px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2432]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-sm">
                  <p className="font-serif text-lg italic text-[#FAF7F2]">In-Person &amp; Telehealth</p>
                  <p className="text-xs text-white/80">Available in Santa Monica or securely across California</p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
