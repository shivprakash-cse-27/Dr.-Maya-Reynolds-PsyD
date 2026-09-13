/**
 * Office & Telehealth Section Component
 * 
 * Showcases Dr. Maya Reynolds' two therapeutic settings:
 * 1. The physical, in-person Santa Monica office at 123th Street 45 W.
 * 2. Secure virtual telehealth practice covering all adult clients in California.
 * Utilizes Next.js Image component with responsive sizes attributes for optimized image loading.
 */

import React from "react";
import Image from "next/image";
import { MapPin, Sun, Shield, Monitor } from "lucide-react";

export default function Office() {
  return (
    <section id="office" className="bg-[#FAF7F2] py-20 sm:py-24 lg:py-32 xl:py-36 border-b border-[#E8E2D9]">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw]">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-[0.8125rem] font-semibold tracking-[0.16em] uppercase text-[#B96B4D] mb-3">
            Therapy Settings
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-normal text-[#3E2432]">
            Therapy that fits your life.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#626A66] font-normal leading-relaxed">
            Whether you choose in-person sessions in Santa Monica or secure California telehealth, each setting is cultivated for safety, calm, and grounded presence.
          </p>
        </div>

        {/* Dual Setting Cards: 7-column desktop card for in-person office & 5-column for telehealth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl xl:max-w-7xl mx-auto mb-16">
          
          {/* =====================================================
              CARD 1: In-Person Santa Monica Office
          ====================================================== */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E2D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#3E2432] mb-4">
                <MapPin className="w-4 h-4 text-[#B96B4D]" />
                <span>In-Person Therapy • Santa Monica, California</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#3E2432] mb-4">
                The Santa Monica Practice
              </h3>

              <p className="text-sm sm:text-base text-[#626A66] leading-relaxed mb-6">
                My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
              </p>

              {/* Exact Office Address from Profile */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8E2D9] mb-6">
                <p className="text-xs uppercase font-semibold tracking-wider text-[#626A66] mb-1">Office Address</p>
                <p className="font-serif text-lg font-medium text-[#3E2432]">123th Street 45 W, Santa Monica, CA 90401</p>
              </div>

              {/* Environmental Qualities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm text-[#2A2426]">
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-[#B96B4D]" />
                  <span>Abundant natural daylight</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#B96B4D]" />
                  <span>Quiet, private &amp; confidential</span>
                </div>
              </div>
            </div>

            {/* 
              Responsive Office Interior Image:
              Uses next/image with fill and sizes for responsive bandwidth optimization
            */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E8E2D9]">
              <Image
                src="/images/maya/office-1.jpg"
                alt="Natural light interior of Dr. Maya Reynolds therapy office in Santa Monica"
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* =====================================================
              CARD 2: Secure California Telehealth
          ====================================================== */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#E8E2D9] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-[#3E2432] mb-4">
                <Monitor className="w-4 h-4 text-[#B96B4D]" />
                <span>Statewide Access</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#3E2432] mb-4">
                Secure Telehealth
              </h3>

              <p className="text-sm sm:text-base text-[#626A66] leading-relaxed mb-6">
                Secure telehealth sessions are offered for adult clients residing anywhere in California. Enjoy thoughtful, evidence-based therapy from the comfort and privacy of your home or private office.
              </p>

              <div className="space-y-3 mb-6 bg-[#FAF7F2] p-5 rounded-2xl border border-[#E8E2D9] text-xs sm:text-sm text-[#2A2426]">
                <p className="font-medium text-[#3E2432]">Convenient for busy schedules:</p>
                <p className="text-[#626A66]">Ideal for high-achieving professionals, entrepreneurs, and creatives across Los Angeles, the Bay Area, and throughout California.</p>
              </div>
            </div>

            {/* Responsive Telehealth / Office Image 2 */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-[#E8E2D9]">
              <Image
                src="/images/maya/office-2.jpg"
                alt="Comfortable and grounded seating area in Dr. Maya Reynolds Santa Monica office"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
