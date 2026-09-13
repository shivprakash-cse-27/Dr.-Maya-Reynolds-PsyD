/**
 * Root Layout Component
 * 
 * Defines the shared global layout structure, HTML shell,
 * fonts, and SEO metadata for the Dr. Maya Reynolds practice website.
 * Runs as a Server Component in the Next.js App Router for optimal performance.
 */

import type { Metadata } from "next";
import "./globals.css";

// Search Engine Optimization (SEO) & Open Graph metadata
export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist | Santa Monica, CA",
  description:
    "Warm, grounded therapy for adults in Santa Monica, CA & California telehealth. Specializing in anxiety, panic, trauma (EMDR), burnout, perfectionism, and high internal pressure.",
  keywords: [
    "Therapist in Santa Monica",
    "Santa Monica therapist",
    "Anxiety therapist in Santa Monica",
    "Trauma therapist in Santa Monica",
    "Therapy for adults in Santa Monica",
    "Anxiety therapy",
    "Trauma therapy",
    "Burnout therapy",
    "Therapy for professionals",
    "Therapy for entrepreneurs",
    "Therapy for creatives",
    "California telehealth therapy",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
    description:
      "A grounded space to slow down, reconnect, and move forward. Therapy for adults experiencing anxiety, trauma, and burnout in Santa Monica and throughout California.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 'scroll-smooth' ensures gentle animated scrolling when clicking navigation anchors
    <html lang="en" className="scroll-smooth">
      {/* 
        Body styling sets the baseline typography, background color (#FAF7F2 / #F8F5EF), 
        and custom text selection highlights matching the brand's aesthetic.
      */}
      <body className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A2426] antialiased selection:bg-[#E8E2D9] selection:text-[#3E2432]">
        {children}
      </body>
    </html>
  );
}
