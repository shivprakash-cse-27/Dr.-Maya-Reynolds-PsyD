/**
 * Homepage - Dr. Maya Reynolds, PsyD
 * 
 * Assembles the complete homepage using modular components.
 * Renders on the server as a Server Component for lightning-fast initial load times
 * and pristine search engine indexability.
 */

import React from "react";
import {
  Navbar,
  Hero,
  IntroHope,
  WhoWeHelp,
  QuoteBanner,
  Expertise,
  HowWeWork,
  StatementBanner,
  Specialties,
  AboutMaya,
  Office,
  FAQ,
  AppointmentCTA,
  Footer,
} from "@/components";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F2] text-[#2A2426] selection:bg-[#E8E2D9] selection:text-[#3E2432]">
      {/* 1. Header Navigation: Sticky with smart scroll hide/reveal */}
      <Navbar />

      {/* Semantic <main> landmark: Crucial for screen reader accessibility and landmark navigation */}
      <main className="flex-1">
        {/* Section 1: Hero - Primary value proposition, therapist portrait, and consultation CTAs */}
        <Hero />

        {/* Section 2: Intro - Addresses high-functioning adults and physical tension */}
        <IntroHope />

        {/* Section 3: Who I Work With - Target populations: professionals, entrepreneurs, creatives */}
        <WhoWeHelp />

        {/* Section 4: Quote Banner - Highlights Dr. Maya's grounded therapeutic philosophy */}
        <QuoteBanner />

        {/* Section 5: Clinical Focus - 12 key focus areas strictly from Maya's profile */}
        <Expertise />

        {/* Section 6: How We Work - The 4 core modalities: CBT, EMDR, Mindfulness, Somatic */}
        <HowWeWork />

        {/* Section 7: Trauma Approach - Emphasizes safety, stabilization, and pacing */}
        <StatementBanner />

        {/* Section 8: Core Services - Exactly 3 services (Anxiety, Trauma, Burnout) */}
        <Specialties />

        {/* Section 9: About Dr. Maya - Comprehensive professional biography & credentials */}
        <AboutMaya />

        {/* Section 10: Office & Telehealth - In-person Santa Monica office and California virtual care */}
        <Office />

        {/* Section 11: FAQ - Accordion answering profile-grounded questions */}
        <FAQ />

        {/* Section 12: Final Call to Action - Calming, low-pressure consultation invitation */}
        <AppointmentCTA />
      </main>

      {/* Footer: Multi-column practice directory, address, telehealth note & copyright */}
      <Footer />
    </div>
  );
}
