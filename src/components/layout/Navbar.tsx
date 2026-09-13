/**
 * Navigation Bar Component
 * 
 * "use client" is required here because this component manages interactive client state:
 * 1. Mobile menu toggle open/close.
 * 2. Window scroll event listeners to determine user scroll direction for smart hide/reveal.
 */
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  // Local state for mobile menu drawer open/close
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // States to control smart scroll visibility and elevated styling
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // useRef stores the previous scroll position without triggering extra component re-renders
  const lastScrollY = useRef(0);

  // 8–12px threshold avoids unwanted flickering caused by micro-scrolls or rubber-banding
  const SCROLL_THRESHOLD = 10;

  useEffect(() => {
    /**
     * Smart Scroll Handler:
     * - Keeps navbar visible at the very top of the page (<= 15px).
     * - Hides navbar when scrolling downward to maximize screen reading space.
     * - Reveals navbar smoothly when scrolling upward for quick navigation access.
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always keep navbar visible at the top of the page
      if (currentScrollY <= 15) {
        setIsVisible(true);
        setIsScrolled(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      setIsScrolled(true);

      const scrollDifference = currentScrollY - lastScrollY.current;

      // Only toggle state when the user's scroll delta exceeds the threshold
      if (Math.abs(scrollDifference) >= SCROLL_THRESHOLD) {
        if (scrollDifference > 0 && !mobileMenuOpen) {
          // Scrolling down: slide navbar up out of view (keep visible if mobile drawer is open)
          setIsVisible(false);
        } else if (scrollDifference < 0) {
          // Scrolling up: smoothly slide navbar back into view
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    // Passive listener improves scroll performance by telling the browser preventDefault won't be called
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup listener on unmount to prevent memory leaks
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  // Navigation menu: About | How I Work | Approach | FAQ | Contact (links to /contact page)
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "How I Work", href: "/#who-i-work-with" },
    { name: "Approach", href: "/#approach" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* 
        Sticky header with CSS transform/opacity transition.
        When hidden: moves up (-translate-y-full) and disables pointer events so it doesn't block clicks.
        When scrolled: adds a backdrop blur and soft shadow for elevated contrast against underlying content.
      */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(42,36,38,0.07)] border-b border-[#E8E2D9]/80"
            : "bg-[#FAF7F2]/98 backdrop-blur-sm"
        }`}
      >
        <div className="w-full max-w-[1580px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between h-24 md:h-28">
          {/* Brand Wordmark (Editorial Serif + Terracotta Italic Degree) */}
          <Link href="/" className="flex flex-col group" aria-label="Dr. Maya Reynolds Homepage">
            <div className="font-serif text-[1.85rem] sm:text-[2.1rem] leading-tight tracking-[-0.01em] text-[#3E2432]">
              <span>Dr. Maya Reynolds</span>
              <span className="font-serif italic font-normal text-[#B96B4D] ml-1.5 text-[1.65rem] sm:text-[1.85rem]">
                PsyD
              </span>
            </div>
            <span className="text-[0.625rem] sm:text-[0.6875rem] uppercase tracking-[0.22em] text-[#6B6365] font-medium mt-0.5">
              LICENSED CLINICAL PSYCHOLOGIST
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10 xl:space-x-12 text-[0.9375rem] font-medium tracking-[0.01em] text-[#2A2426]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link-hover py-1 text-[#2A2426] hover:text-[#3E2432] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Primary Header CTA -> Links directly to the consultation/contact page */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="btn-plum text-[0.75rem] tracking-[0.1em] font-semibold px-8 py-3.5"
            >
              SCHEDULE A CONSULTATION
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#3E2432] focus:outline-none focus:ring-2 focus:ring-[#3E2432]/30 rounded-lg"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

       

        {/* Mobile Slide-Down Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-t border-[#E8E2D9] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#6B6365] pb-2 border-b border-[#E8E2D9]">
              SANTA MONICA, CA
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-medium text-[#2A2426] py-2 border-b border-[#E8E2D9]/40"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-plum w-full text-center py-3.5"
              >
                SCHEDULE A CONSULTATION
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
