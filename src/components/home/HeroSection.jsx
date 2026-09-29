"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowIcon } from "@/components/icons";
import { HeroVisual } from "./HeroVisual";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useSpring(mouseX, {
    stiffness: 55,
    damping: 22,
  });

  const backgroundY = useSpring(mouseY, {
    stiffness: 55,
    damping: 22,
  });

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  mouseX.set(x * 22);
  mouseY.set(y * 18);
};

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-[#f4f6f2] text-ink"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ================================================= */}
      {/* FULL HERO BACKGROUND                               */}
      {/* ================================================= */}

      <motion.div
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="pointer-events-none absolute -inset-8"
      >
        {/* Fine technical grid */}
       <div
  className="absolute inset-0 opacity-[0.25]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(0,124,103,0.12) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,124,103,0.12) 1px, transparent 1px)
    `,
    backgroundSize: "176px 176px",
  }}
/>

        {/* Larger grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,124,103,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,124,103,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "192px 192px",
          }}
        />

        {/* Large technical rings */}
        <div className="absolute -right-[160px] top-[8%] h-[620px] w-[620px] rounded-full border border-ink/[0.055]" />
        <div className="absolute -right-[90px] top-[15%] h-[480px] w-[480px] rounded-full border border-signal-dark/[0.09]" />
        <div className="absolute -right-[20px] top-[23%] h-[330px] w-[330px] rounded-full border border-ink/[0.055]" />

        <div className="absolute -left-[280px] bottom-[-320px] h-[700px] w-[700px] rounded-full border border-ink/[0.045]" />
        <div className="absolute -left-[180px] bottom-[-220px] h-[500px] w-[500px] rounded-full border border-signal-dark/[0.06]" />

        {/* ================================================= */}
        {/* NETWORK MAP                                       */}
        {/* ================================================= */}

        <svg
          viewBox="0 0 1600 850"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          {/* Main route */}
          <path
            d="M-50 570 C190 470 300 640 520 520 S850 250 1080 390 S1350 610 1660 330"
            stroke="rgba(8,27,36,0.12)"
            strokeWidth="1"
          />

          {/* Secondary route */}
          <path
            d="M-80 300 C180 210 300 390 510 330 S820 150 1040 250 S1360 400 1680 190"
            stroke="rgba(0,124,103,0.13)"
            strokeWidth="1"
          />

          {/* Vertical signal path */}
          <path
            d="M290 -50 C340 160 280 290 410 420 S580 650 720 900"
            stroke="rgba(8,27,36,0.07)"
            strokeWidth="1"
          />

          {/* Long diagonal */}
          <path
            d="M-100 780 C260 600 500 700 760 520 S1200 250 1700 150"
            stroke="rgba(8,27,36,0.055)"
            strokeWidth="1"
          />

          {/* Active telemetry route */}
          <motion.path
            d="M-40 620 C180 520 320 650 540 520 S850 270 1080 390 S1370 590 1640 320"
            stroke="#27d59b"
            strokeWidth="1.5"
            strokeDasharray="8 14"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: [0.15, 0.55, 0.15],
            }}
            transition={{
              pathLength: {
                duration: 2.8,
                ease: "easeInOut",
              },
              opacity: {
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />

          {/* Network nodes */}
          {[
            [180, 545],
            [520, 520],
            [850, 320],
            [1080, 390],
            [1380, 535],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r="5"
                fill="#f4f6f2"
                stroke="rgba(8,27,36,0.2)"
              />

              <motion.circle
                cx={cx}
                cy={cy}
                r="2"
                fill="#27d59b"
                animate={{
                  opacity: [0.25, 1, 0.25],
                  r: [2, 3.5, 2],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              />
            </g>
          ))}
        </svg>

        {/* Floating data packets */}
        {[
          { left: "12%", top: "63%", delay: 0 },
          { left: "28%", top: "42%", delay: 0.7 },
          { left: "43%", top: "58%", delay: 1.4 },
          { left: "58%", top: "31%", delay: 0.4 },
          { left: "72%", top: "48%", delay: 1.9 },
          { left: "86%", top: "35%", delay: 1 },
        ].map((point, i) => (
          <motion.div
            key={i}
            className="absolute h-1.5 w-1.5 bg-signal-dark"
            style={{
              left: point.left,
              top: point.top,
            }}
            animate={{
              opacity: [0.15, 0.9, 0.15],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2.6,
              delay: point.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* ================================================= */}
      {/* BACKGROUND TELEMETRY LABELS                       */}
      {/* ================================================= */}

      <div className="pointer-events-none absolute inset-0">
      

     

        {/* Mid left */}
        <div className="absolute left-[7%] top-[44%] hidden items-center gap-2 lg:flex">
          <span className="h-1.5 w-1.5 bg-signal-dark" />
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/35">
            GNSS SIGNAL
          </span>
        </div>

        {/* Mid right */}
        <div className="absolute right-[6%] top-[52%] hidden items-center gap-2 lg:flex">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-ink/35">
            4G / LTE
          </span>
          <span className="h-1.5 w-1.5 bg-signal-dark" />
        </div>

      
      </div>

      {/* ================================================= */}
      {/* CONTENT                                           */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-70px)] max-w-[1440px] items-center px-6 pb-20 pt-28 sm:px-8 lg:px-12 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            className="relative z-20 max-w-xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-signal-dark" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Fleet · Asset · Access Intelligence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[64px]"
            >
              Intelligence for
              <br />
              <span className="text-signal-dark">
                everything that moves.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-[17px]"
            >
              Track vehicles, understand assets and control access through
              connected technology built around real-world operations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-semibold !text-white transition-colors hover:bg-ink-2"
              >
                Start a conversation

                <ArrowIcon className="h-3.5 w-3.5 !text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/platform"
                className="inline-flex h-11 items-center justify-center border border-line bg-white/40 px-5 text-sm font-semibold text-ink backdrop-blur-[2px] transition-colors hover:border-ink hover:bg-white"
              >
                Explore the platform
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-md grid-cols-3 border-t border-line pt-5"
            >
              <div>
                <span className="font-heading text-xl font-semibold">
                  Fleet
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Intelligence
                </p>
              </div>

              <div className="border-l border-line pl-4">
                <span className="font-heading text-xl font-semibold">
                  Asset
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Intelligence
                </p>
              </div>

              <div className="border-l border-line pl-4">
                <span className="font-heading text-xl font-semibold">
                  Access
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Control
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative z-10"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* ================================================= */}
      {/* BOTTOM SYSTEM STRIP                               */}
      {/* ================================================= */}

      <div className="relative z-20 border-t border-line bg-white/75 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
            Connected operations infrastructure
          </span>

          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            <span>GPS</span>
            <span className="h-1 w-1 bg-signal" />

            <span>Network</span>
            <span className="h-1 w-1 bg-signal" />

            <span>Telemetry</span>
            <span className="h-1 w-1 bg-signal" />

            <span>Platform</span>
          </div>
        </div>
      </div>
    </section>
  );
}