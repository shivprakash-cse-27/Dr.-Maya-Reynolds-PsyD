/**
 * About Dr. Maya Reynolds Section Component
 * 
 * Provides an authentic, comprehensive biographical narrative derived strictly
 * from Dr. Maya Reynolds' official psychologist profile.
 * Highlights clinical focus, target populations, integrative modalities (CBT, EMDR, Somatic),
 * and Santa Monica practice credentials.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, MapPin } from "lucide-react";

export default function AboutMaya() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        
        {/* Split grid: 5 cols portrait + credentials card, 7 cols biographical narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* =====================================================
              LEFT: Dr. Maya Reynolds Portrait with Organic Frame
          ====================================================== */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[400px] sm:max-w-[460px] xl:max-w-[500px]">
              
              {/* Arched image container */}
              <div className="relative aspect-[4/5] rounded-t-[14rem] rounded-b-[2rem] overflow-hidden shadow-2xl bg-[#FAF7F2] border-4 border-[#FAF7F2] group">
                <Image
                  src="/images/maya/maya-portrait.png"
                  alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 460px, 500px"
                  className="object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating Credentials Pill */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 bg-[#3E2432] text-white p-4 rounded-2xl shadow-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#B96B4D] shrink-0" />
                  <div>
                    <p className="font-serif text-sm font-semibold tracking-wide">Dr. Maya Reynolds, PsyD</p>
                    <p className="text-[0.6875rem] text-[#FAF7F2]/80 font-light">Licensed Clinical Psychologist</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[0.6875rem] text-[#FAF7F2] font-medium shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#B96B4D]" />
                  <span>Santa Monica, CA</span>
                </div>
              </div>

            </div>
          </div>

          {/* =====================================================
              RIGHT: Professional Biography (Derived strictly from SSoT Profile)
          ====================================================== */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-2xl xl:max-w-3xl pt-8 lg:pt-0">
            <div className="inline-block border-l-2 border-[#B96B4D] pl-3 text-xs tracking-[0.14em] uppercase text-[#6B6365] font-semibold">
              Meet Your Psychologist
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal text-[#3E2432] leading-[1.18]">
              Meet Dr. Maya Reynolds, PsyD
            </h2>

            <p className="font-serif italic text-lg sm:text-xl text-[#B96B4D]">
              Licensed Clinical Psychologist in Santa Monica, California
            </p>

            {/* Authentic Biographical Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#6B6365] font-normal leading-relaxed">
              <p>
                I’m a licensed clinical psychologist offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>

              <p>
                My work often focuses on anxiety, panic, trauma, and burnout. I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth.
              </p>

              <p>
                I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
              </p>
            </div>

            {/* Core Practice Commitments Grid */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-center gap-2.5 text-sm text-[#2A2426] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#3E2432] shrink-0" />
                <span>Santa Monica In-Person &amp; CA Telehealth</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2A2426] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#3E2432] shrink-0" />
                <span>Paced &amp; Regulated Trauma Work</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2A2426] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#3E2432] shrink-0" />
                <span>Adults, Professionals &amp; Creatives</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#2A2426] font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#3E2432] shrink-0" />
                <span>Deeper Relationship with Yourself</span>
              </div>
            </div>

            {/* Schedule Consultation Call to Action */}
            <div className="pt-4">
              <Link
                href="#contact"
                className="btn-plum text-xs sm:text-sm tracking-[0.08em] uppercase px-8 py-4 font-semibold"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
