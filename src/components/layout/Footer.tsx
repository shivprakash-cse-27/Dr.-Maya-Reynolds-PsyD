/**
 * Practice Footer Component
 * 
 * Provides Santa Monica practice details, California telehealth notes,
 * licensing information, and primary navigation links.
 * Employs subtle hover transitions on all interactive elements.
 */

import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  return (
    <footer className="bg-[#2A1822] text-[#FAF7F2] border-t border-[#3E2432]">
      {/* Practice Directory & Location Context */}
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-[4vw] py-16 sm:py-20 xl:py-24">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Column 1: Brand & Practice Bio (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <Link href="/" className="inline-block group" aria-label="Dr. Maya Reynolds Homepage">
                <span className="font-serif text-2xl sm:text-3xl text-white font-medium group-hover:text-[#FAF7F2]/90 transition-colors duration-200">
                  Dr. Maya Reynolds<span className="text-[#B96B4D] font-sans font-light text-xl ml-1">, PsyD</span>
                </span>
                <p className="text-xs uppercase tracking-[0.16em] text-[#E8E2D9]/80 font-normal mt-0.5">
                  Licensed Clinical Psychologist
                </p>
              </Link>

              <p className="text-sm text-[#FAF7F2]/75 font-light leading-relaxed max-w-md pt-2">
                Offering grounded, evidence-based therapy for adults in Santa Monica, California and throughout the state via secure telehealth. Specialized in anxiety, panic, trauma (EMDR), burnout, and perfectionism.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#E8E2D9]">
                <span className="w-2 h-2 rounded-full bg-[#B96B4D]" />
                <span>Welcoming Adult Clients for In-Person &amp; Virtual Sessions</span>
              </div>
            </div>

            {/* Column 2: Navigation Links (3 cols) */}
            <div className="md:col-span-3 space-y-3.5">
              <h4 className="font-serif text-lg font-medium text-[#E8E2D9] uppercase tracking-wider text-xs">
                Practice Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-[#FAF7F2]/80 font-light">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    Meet Dr. Maya Reynolds
                  </Link>
                </li>
                <li>
                  <Link href="/#who-i-work-with" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    Who I Work With
                  </Link>
                </li>
                <li>
                  <Link href="/#approach" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    Approach &amp; Modalities
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    Specialized Services
                  </Link>
                </li>
                <li>
                  <Link href="/#office" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    Santa Monica Office &amp; Telehealth
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block font-medium text-[#B96B4D]">
                    Contact &amp; Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Office & Practice Details (4 cols) */}
            <div className="md:col-span-4 space-y-3.5">
              <h4 className="font-serif text-lg font-medium text-[#E8E2D9] uppercase tracking-wider text-xs">
                Office Location
              </h4>
              <div className="space-y-2.5 text-sm text-[#FAF7F2]/80 font-light leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B96B4D] shrink-0 mt-1" />
                  <p>
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-3">
                  <p className="text-xs uppercase font-semibold tracking-wider text-[#E8E2D9] mb-1">
                    California Telehealth
                  </p>
                  <p className="text-xs text-white/70">
                    Providing secure telehealth sessions for adults located anywhere in California.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#E8E2D9] hover:text-white transition-colors group"
                  >
                    <span>Request Initial Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </div>

      {/* Dark Legal & Licensing Disclaimer Strip */}
      <div className="bg-[#1A0E15] text-white/60 py-6 px-6 sm:px-10 lg:px-[4vw] border-t border-white/5 text-xs font-light">
        <div className="w-full max-w-[1720px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            Dr. Maya Reynolds, PsyD • Licensed Clinical Psychologist • Santa Monica, CA
          </p>
          <p className="text-white/40 text-[0.75rem]">
            © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
