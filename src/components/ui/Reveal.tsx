"use client";

/**
 * Reveal Wrapper Component
 * 
 * Uses IntersectionObserver to smoothly fade and translate content upward
 * by ~24px as it scrolls into the viewport.
 * - Lightweight and performant (disconnects after triggering once).
 * - Avoids heavy window scroll listeners.
 * - Respects prefers-reduced-motion via CSS.
 */

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export default function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delayMs > 0) {
            setTimeout(() => {
              setIsRevealed(true);
            }, delayMs);
          } else {
            setIsRevealed(true);
          }
          // Disconnect after revealing once to preserve CPU and battery
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12, // Triggers when 12% of the element is visible
        rootMargin: "0px 0px -40px 0px", // Triggers slightly before element enters view
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`reveal-fade-up ${isRevealed ? "is-revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
