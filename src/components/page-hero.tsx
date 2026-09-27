"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  titleHighlight?: string;
  lede: string;
  bgImage?: string;
}

export function PageHero({
  breadcrumb,
  title,
  titleHighlight,
  lede,
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2] px-6 pt-24 pb-10 text-[#081b24] sm:pt-28 sm:pb-12 md:pt-30 md:pb-14 lg:px-12">
      {/* Optional background image */}
      {bgImage && (
        <div className="pointer-events-none absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.055]"
          />

          <div className="absolute inset-0 bg-[#f4f6f2]/90" />
        </div>
      )}

      {/* Extremely subtle structural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(#081b24 1px, transparent 1px), linear-gradient(90deg, #081b24 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
          {/* =====================================================
              LEFT — MAIN HERO CONTENT
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:col-span-8"
          >
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#27d59b]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                {breadcrumb}
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#081b24] sm:text-5xl md:text-[3.7rem] lg:text-[4.25rem]">
              {title}{" "}
              {titleHighlight && (
                <span className="font-normal text-[#879399]">
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#607078] sm:text-base">
              {lede}
            </p>
          </motion.div>

          {/* =====================================================
              RIGHT — CLEAN NEGATIVE SPACE
          ===================================================== */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="relative h-full min-h-[170px]">
              {/* Single architectural divider */}
              <div className="absolute right-0 top-0 h-full w-px bg-[#cdd5d2]" />

              {/* Small quiet identifier */}
              <div className="absolute bottom-0 right-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#cdd5d2]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#a0aaae]">
                  VIoT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM INFORMATION LINE
        ===================================================== */}
        <div className="mt-10 flex items-center justify-between border-t border-[#cdd5d2] pt-4 sm:mt-12">
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#a0aaae]">
            Connected operations
          </span>

          <div className="hidden items-center gap-4 sm:flex">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#a0aaae]">
              Fleet
            </span>

            <span className="h-3 w-px bg-[#cdd5d2]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#a0aaae]">
              Asset
            </span>

            <span className="h-3 w-px bg-[#cdd5d2]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#a0aaae]">
              Access
            </span>
          </div>

          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">
            <span className="h-1.5 w-1.5 bg-[#27d59b]" />
            VIoT
          </span>
        </div>
      </div>
    </section>
  );
}