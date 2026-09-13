/**
 * Who I Work With Section Component
 * 
 * Details the 6 profile-supported adult populations Dr. Maya Reynolds serves.
 * Each card includes a subtle lift on hover, icon rotate micro-interaction,
 * and enters the viewport using staggered IntersectionObserver reveals.
 */

import React from "react";
import { Briefcase, Compass, ShieldAlert, Sparkles, Brain, Feather } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function WhoWeHelp() {
  const groups = [
    {
      title: "High-Achieving Professionals",
      icon: Briefcase,
      tag: "Burnout & Overthinking",
      description:
        "Professionals navigating the exhaustion of high demands, constant perfectionism, and feeling disconnected from themselves after years of pushing through relentless stress.",
    },
    {
      title: "Entrepreneurs & Creatives",
      icon: Compass,
      tag: "Pacing & Sustainability",
      description:
        "Visionaries dealing with intense internal pressure, constant responsibility, and fast-paced environments where slowing down feels counterintuitive but is deeply needed.",
    },
    {
      title: "Adults Experiencing Anxiety & Panic",
      icon: ShieldAlert,
      tag: "Somatic Tension & Worry",
      description:
        "Individuals dealing with persistent worry, overthinking, panic, sleep disruption, or the physical feeling of always bracing for something to go wrong.",
    },
    {
      title: "Adults Navigating Trauma & Past Patterns",
      icon: Brain,
      tag: "EMDR & Stabilization",
      description:
        "Those processing single-incident trauma or long-standing relational patterns from childhood or chronic stress that continue affecting confidence and safety.",
    },
    {
      title: "Thoughtful & Self-Aware Adults",
      icon: Feather,
      tag: "Depth-Oriented Insight",
      description:
        "People who understand their issues intellectually but struggle to feel regulated, safe, and emotionally at peace in their daily lives and bodies.",
    },
    {
      title: "Individuals Navigating High Internal Pressure",
      icon: Sparkles,
      tag: "Resilience & Self-Compassion",
      description:
        "High-performers wanting to replace harsh self-criticism and tension with grounded self-trust, resilience, and a healthier relationship with themselves.",
    },
  ];

  return (
    <section id="who-i-work-with" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <Reveal>
            <p className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.16em] uppercase text-[#B96B4D] mb-3">
              Target Client Focus
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] leading-[1.18] font-normal text-[#3E2432]">
              For adults who look fine on the outside—but feel different inside.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#6B6365] font-normal leading-relaxed">
              Dr. Maya Reynolds works exclusively with individual adults. Therapy is customized for thoughtful, high-achieving individuals who need a grounded, confidential space to unpack pressure and restore inner calm.
            </p>
          </Reveal>
        </div>

        {/* 6 Responsive Population Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl xl:max-w-7xl mx-auto">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <Reveal key={idx} delayMs={idx * 75}>
                <div className="organic-card p-8 sm:p-9 flex flex-col justify-between border border-[#E8E2D9] bg-white h-full group hover:border-[#3E2432]/30 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] text-[#3E2432] flex items-center justify-center border border-[#E8E2D9] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-6 h-6 text-[#3E2432]" />
                      </div>
                      <span className="text-[0.6875rem] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] text-[#3E2432] border border-[#E8E2D9]">
                        {group.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-[1.625rem] font-medium text-[#3E2432] mb-3 leading-snug">
                      {group.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#6B6365] leading-relaxed">
                      {group.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E8E2D9]/60 flex items-center text-xs font-semibold uppercase tracking-wider text-[#3E2432]">
                    <span>Santa Monica &amp; CA Telehealth</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Notice on Adult Focus */}
        <Reveal delayMs={300}>
          <div className="mt-12 text-center text-xs text-[#6B6365] tracking-wide">
            <span>Practice Scope: Individual Therapy for Adults (18+) • In-Person Santa Monica &amp; California Telehealth</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
