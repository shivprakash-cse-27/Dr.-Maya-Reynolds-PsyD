/**
 * Specialized Services Section Component
 * 
 * Features exactly THREE core clinical services as specified in Dr. Maya Reynolds' profile:
 * 1. Anxiety Therapy in Santa Monica
 * 2. Trauma Therapy in Santa Monica
 * 3. Burnout & Perfectionism Therapy
 */

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/content";

export default function Specialties() {
  return (
    <section id="services" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.16em] uppercase text-[#B96B4D] mb-3">
            Core Specialized Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] 2xl:text-[3.5rem] font-normal text-[#3E2432]">
            Therapy tailored to high-achieving adults.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#6B6365] font-normal leading-relaxed">
            Offered in-person at the Santa Monica office and statewide across California via secure telehealth.
          </p>
        </div>

        {/* 
          3-Card Grid:
          Responsive layout stacks on mobile/tablet (grid-cols-1) and expands to 3 equal cards on md+ screens.
          Uses 'organic-card' utility class for smooth hover elevation.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 max-w-6xl xl:max-w-7xl mx-auto">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={idx}
              className="organic-card p-8 sm:p-10 flex flex-col justify-between border border-[#E8E2D9] bg-white group hover:border-[#3E2432] transition-all"
            >
              <div>
                {/* Service index number and service modality badge */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl sm:text-4xl text-[#B96B4D] font-light">
                    {service.number}
                  </span>
                  <span className="text-[0.6875rem] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-[#FAF7F2] text-[#3E2432] border border-[#E8E2D9]">
                    {service.badge}
                  </span>
                </div>

                {/* Service Heading */}
                <h3 className="font-serif text-2xl sm:text-[1.75rem] font-medium text-[#3E2432] mb-4 leading-snug">
                  {service.title}
                </h3>

                {/* Service Narrative Description */}
                <p className="text-sm sm:text-base text-[#6B6365] font-normal leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Key clinical focus highlights */}
                <div className="space-y-2 mb-8 border-t border-[#E8E2D9]/60 pt-6">
                  {service.focus.map((item, i) => (
                    <div key={i} className="flex items-center text-xs sm:text-sm text-[#2A2426]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B96B4D] mr-2.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Card Action Button */}
              <div>
                <Link
                  href="#contact"
                  className="w-full inline-flex items-center justify-between py-3.5 px-5 rounded-full border border-[#3E2432] text-xs font-semibold uppercase tracking-wider text-[#3E2432] group-hover:bg-[#3E2432] group-hover:text-white transition-all"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
