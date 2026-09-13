import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-84px)] overflow-hidden bg-[#F8F4EE]"
    >
      {/* ============================================================
          DECORATIVE BACKGROUND
          These shapes add depth without distracting from the content.
      ============================================================ */}

      {/* Soft top-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-[#E8D8D1]/50 blur-3xl"
      />

      {/* Soft bottom-left glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#DCE1D8]/40 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1580px] px-6 sm:px-10 lg:px-14">

        {/* ============================================================
            HERO GRID
        ============================================================ */}

        <div className="grid min-h-[calc(100svh-84px)] grid-cols-1 items-center gap-14 py-12 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-14">

          {/* ==========================================================
              LEFT CONTENT
          ========================================================== */}

          <div className="relative z-10 lg:col-span-6">

            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3 animate-hero-eyebrow">

              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#B96B4D]"
              />

              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#625B5D] sm:text-xs">
                Licensed Clinical Psychologist · Santa Monica, CA
              </p>

            </div>

            {/* ========================================================
                MAIN H1
            ======================================================== */}

            <h1
              className="
                max-w-[760px]
                font-serif
                text-[3.5rem]
                font-normal
                leading-[0.97]
                tracking-[-0.04em]
                text-[#432338]
                animate-hero-h1
                sm:text-[4.5rem]
                md:text-[5.1rem]
                lg:text-[4.65rem]
                xl:text-[5.45rem]
              "
            >
              <span className="block">
                Therapy for
              </span>

              <span className="block font-serif italic text-[#B96B4D]">
                anxiety, trauma &
              </span>

              <span className="block">
                <span className="font-serif italic text-[#B96B4D]">
                  burnout
                </span>{" "}
                in Santa Monica
              </span>
            </h1>

            {/* Supporting copy */}
            <p
              className="
                mt-8
                max-w-[585px]
                text-[1rem]
                leading-[1.75]
                text-[#625B5D]
                animate-hero-text
                sm:text-[1.08rem]
                lg:text-[1.15rem]
              "
            >
              A warm, grounded space for adults who feel overwhelmed,
              stuck in overthinking, or exhausted by the pressure to
              keep pushing.
            </p>

            {/* ========================================================
                CTA BUTTONS
            ======================================================== */}

            <div className="mt-9 flex flex-wrap gap-4 animate-hero-cta">

              {/* Primary CTA */}
              <Link
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#432338]
                  px-7
                  py-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  shadow-[0_10px_30px_rgba(67,35,56,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#542B45]
                  hover:shadow-[0_15px_35px_rgba(67,35,56,0.22)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#B96B4D]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F8F4EE]
                  sm:px-8
                  sm:text-[11px]
                "
              >
                <span>
                  Schedule a Consultation
                </span>

                <span
                  aria-hidden="true"
                  className="inline-block text-sm transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="#approach"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#6B3C56]
                  bg-transparent
                  px-7
                  py-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#432338]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#432338]
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#B96B4D]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#F8F4EE]
                  sm:px-8
                  sm:text-[11px]
                "
              >
                Explore My Approach
              </Link>

            </div>

            {/* ========================================================
                AVAILABILITY
            ======================================================== */}

            <div
              className="
                mt-9
                flex
                flex-col
                gap-5
                text-sm
                text-[#625B5D]
                animate-hero-availability
                sm:flex-row
                sm:items-center
                sm:gap-5
              "
            >

              {/* In person */}
              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#DED3C9]
                    bg-[#EFE7DE]
                  "
                >
                  <svg
                    className="h-[18px] w-[18px] text-[#B96B4D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span>
                  In-person in Santa Monica
                </span>

              </div>

              {/* Divider */}
              <span
                aria-hidden="true"
                className="hidden h-8 w-px bg-[#D8CEC5] sm:block"
              />

              {/* Telehealth */}
              <div className="flex items-center gap-3">

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#DED3C9]
                    bg-[#EFE7DE]
                  "
                >
                  <svg
                    className="h-[18px] w-[18px] text-[#B96B4D]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                    />
                    <path d="M8 21h8" />
                    <path d="M12 19v2" />
                  </svg>
                </span>

                <span className="max-w-[220px]">
                  Secure telehealth throughout California
                </span>

              </div>

            </div>

            {/* ========================================================
                EDITORIAL TAGLINE
            ======================================================== */}

            <div
              className="
                mt-10
                flex
                items-center
                gap-4
                animate-hero-tagline
              "
            >
              <span
                aria-hidden="true"
                className="h-px w-12 bg-[#879487]"
              />

              <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#625B5D] sm:text-[10px]">
                A calmer, more grounded you
              </span>
            </div>

          </div>

          {/* ==========================================================
              RIGHT IMAGE
          ========================================================== */}

          <div className="relative lg:col-span-6">

            <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">

              {/* ======================================================
                  TERRACOTTA DECORATIVE CIRCLE
              ====================================================== */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -left-8
                  -top-10
                  h-[145px]
                  w-[145px]
                  rounded-full
                  bg-[#D9A995]
                  opacity-80
                  animate-botanical-float
                  sm:-left-12
                  sm:-top-12
                  sm:h-[180px]
                  sm:w-[180px]
                "
              />

              {/* ======================================================
                  SAGE DECORATIVE SHAPE
              ====================================================== */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-10
                  -right-6
                  h-[150px]
                  w-[150px]
                  rounded-full
                  bg-[#AAB5A7]
                  opacity-60
                  blur-[1px]
                  sm:-bottom-12
                  sm:-right-10
                  sm:h-[190px]
                  sm:w-[190px]
                "
              />

              {/* ======================================================
                  IMAGE FRAME
              ====================================================== */}

              <div
                className="
                  relative
                  aspect-[0.86]
                  overflow-hidden
                  rounded-[3rem]
                  border-[6px]
                  border-[#E7DCD2]
                  bg-[#E9E2DA]
                  shadow-[0_30px_80px_rgba(67,35,56,0.16)]
                  animate-hero-portrait
                  group
                  sm:rounded-[3.5rem]
                "
              >

                <Image
                  src="/images/maya/maya-portrait.png"
                  alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="
                    object-cover
                    object-center
                    transition-transform
                    duration-1000
                    ease-out
                    group-hover:scale-[1.015]
                  "
                />

                {/* Image overlay */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#432338]/10
                    via-transparent
                    to-white/10
                  "
                />

                {/* Inner frame */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[2.65rem]
                    ring-1
                    ring-inset
                    ring-white/50
                    sm:rounded-[3.1rem]
                  "
                />

              </div>

              {/* ======================================================
                  FLOATING PROFILE CARD
              ====================================================== */}

              <div
                className="
                  absolute
                  -bottom-7
                  left-5
                  right-5
                  z-20
                  rounded-[1.4rem]
                  border
                  border-[#DED2C8]
                  bg-[#FAF7F2]/95
                  px-5
                  py-5
                  shadow-[0_20px_50px_rgba(67,35,56,0.16)]
                  backdrop-blur-xl
                  animate-hero-card
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_25px_60px_rgba(67,35,56,0.2)]
                  sm:left-auto
                  sm:right-5
                  sm:w-[350px]
                  sm:px-6
                  sm:py-5
                "
              >

                <div className="flex items-center justify-between gap-4">

                  {/* Name */}
                  <div>

                    <div className="font-serif text-[1.25rem] leading-tight text-[#432338] sm:text-[1.4rem]">

                      Dr. Maya Reynolds

                      <span className="ml-1 font-serif italic text-[#B96B4D]">
                        , PsyD
                      </span>

                    </div>

                    <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.17em] text-[#625B5D] sm:text-[10px]">
                      Licensed Clinical Psychologist
                    </p>

                  </div>

                  {/* Location icon */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#DCCFC5]
                      bg-[#F0E7DF]
                    "
                  >
                    <svg
                      className="h-[18px] w-[18px] text-[#B96B4D]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                  </div>

                </div>

                {/* Card footer */}
                <div className="mt-4 flex items-center gap-3">

                  <span
                    aria-hidden="true"
                    className="h-[2px] w-8 bg-[#B96B4D]"
                  />

                  <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-[#879487] sm:text-[9px]">
                    Santa Monica, California
                  </span>

                </div>

              </div>

              {/* ======================================================
                  VERTICAL EDITORIAL TEXT
              ====================================================== */}

              <div
                className="
                  absolute
                  -right-5
                  top-1/2
                  hidden
                  -translate-y-1/2
                  translate-x-full
                  xl:block
                "
              >

                <div className="flex items-start gap-5">

                  <div
                    aria-hidden="true"
                    className="mt-1 h-32 w-px bg-[#BEB6AF]"
                  />

                  <div className="font-serif text-[11px] italic leading-[2.2] text-[#625B5D]">

                    <div>
                      Pause.
                    </div>

                    <div>
                      Reconnect.
                    </div>

                    <div>
                      Move forward.
                    </div>

                  </div>

                </div>

              </div>

              {/* ======================================================
                  TOP LOCATION LABEL
              ====================================================== */}


            </div>

          </div>

        </div>

      </div>

      {/* ==============================================================
          BOTTOM EDITORIAL DETAIL
      ============================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-4
          left-6
          hidden
          font-serif
          text-[clamp(2rem,4vw,4rem)]
          italic
          leading-none
          text-[#D9B9A9]/40
          lg:block
          lg:left-14
        "
      >
        <span>
          Healing
        </span>

        <span className="ml-5">
          is a kinder way forward.
        </span>
      </div>

      {/* Bottom border */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 h-px bg-[#E4DCD4]"
      />

    </section>
  );
}