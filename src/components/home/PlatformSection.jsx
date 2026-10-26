"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

/* =========================================================
   DATA (content only - no UI here)
========================================================= */

const SOLUTIONS_HREF = "/solutions"; // change if your solution page route is different

// icon keys: "fleet" | "ev" | "video" | "fuel" | "elock"
const platformBlocks = [
  {
    title: "Fleet Management Solution",
    desc: "Track, monitor, and optimize fleet operations in real time.",
    icon: "fleet",
    span: "lg:col-span-3",
  },
  {
    title: "EV Management System",
    desc: "Monitor EV performance, battery health, and vehicle efficiency.",
    icon: "ev",
    span: "lg:col-span-3",
  },
  {
    title: "Video Telematics Solution",
    desc: "Enhance fleet safety with real-time video insights and monitoring.",
    icon: "video",
    span: "lg:col-span-2",
  },
  {
    title: "Fuel Monitoring Solution",
    desc: "Monitor fuel consumption, detect losses, and improve efficiency.",
    icon: "fuel",
    span: "lg:col-span-2",
  },
  {
    title: "E-Lock Solution",
    desc: "Secure cargo and assets with intelligent electronic locking and tracking.",
    icon: "elock",
    span: "lg:col-span-2",
  },
];

/* =========================================================
   ICONS
========================================================= */

function BlockIcon({ name }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "h-5 w-5",
  };

  switch (name) {
    case "fleet":
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "ev":
      return (
        <svg {...common}>
          <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3" />
        </svg>
      );
    case "fuel":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" />
        </svg>
      );
    case "elock":
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 018 0v3" />
        </svg>
      );
    default:
      return null;
  }
}

/* =========================================================
   PLATFORM BACKGROUND
========================================================= */

function PlatformArchitecture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -right-[18%] top-[3%] h-[620px] w-[620px] rounded-full bg-signal/[0.025] blur-3xl" />
      <div className="absolute -left-[18%] bottom-[2%] h-[520px] w-[520px] rounded-full bg-white/[0.012] blur-3xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Architecture paths */}
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M-120 190 C190 160 270 430 520 430 S900 150 1210 270 S1510 470 1720 390"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
        />

        <motion.path
          d="M-120 720 C180 670 330 510 580 560 S930 790 1190 650 S1480 430 1730 500"
          stroke="rgba(39,213,155,0.08)"
          strokeWidth="1"
          strokeDasharray="3 18"
          animate={{ strokeDashoffset: [0, -220] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        <path
          d="M140 1040 C290 760 480 730 690 510 S1050 190 1460 -80"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />

        <motion.path
          d="M-80 550 C230 520 410 310 670 330 S1050 640 1700 310"
          stroke="rgba(39,213,155,0.08)"
          strokeWidth="1"
          strokeDasharray="2 22"
          animate={{ strokeDashoffset: [0, 180] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Moving signal points */}
      <motion.span
        className="absolute left-[18%] top-[31%] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{ x: [0, 130, 260], opacity: [0, 0.6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="absolute left-[58%] top-[64%] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{ x: [0, -110, -220], opacity: [0, 0.55, 0] }}
        transition={{ duration: 6.5, delay: 1.2, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="absolute right-[17%] top-[28%] h-1 w-1 rounded-full bg-signal"
        animate={{ y: [0, 70, 140], opacity: [0, 0.5, 0] }}
        transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Rings */}
      <motion.div
        className="absolute right-[3%] top-[8%] h-[480px] w-[480px] rounded-full border border-white/[0.025]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute right-[9%] top-[16%] h-[320px] w-[320px] rounded-full border border-signal/[0.04]"
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
      />

      {/* Nodes */}
      {[
        ["12%", "22%"],
        ["29%", "68%"],
        ["43%", "17%"],
        ["55%", "82%"],
        ["71%", "24%"],
        ["85%", "70%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{ left, top }}
          animate={{ opacity: [0.06, 0.3, 0.06] }}
          transition={{
            duration: 3.5 + index * 0.35,
            delay: index * 0.25,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   VIOT CORE FLOW
========================================================= */

function PlatformCore() {
  return (
    <>
      {/* Desktop */}
      <div className="relative mt-14 hidden h-[140px] lg:block">
        <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-white/[0.07]" />

        <motion.div
          className="absolute top-1/2 h-px w-32 bg-gradient-to-r from-transparent via-signal/80 to-transparent"
          animate={{ left: ["7%", "93%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        {/* Input */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </span>

            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Connected inputs
              </span>
              <span className="mt-1.5 block text-[11px] leading-none text-white/45">
                Vehicles · Assets · Sensors
              </span>
            </div>
          </div>
        </div>

        {/* VIoT Core */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.025, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative flex h-[84px] w-[84px] items-center justify-center rounded-2xl border border-signal/25 bg-[#0B0F0E]/95 shadow-[0_16px_50px_rgba(0,0,0,0.25),0_0_35px_rgba(39,213,155,0.035)] backdrop-blur-md">
            <Image
              src="/logo/logo-bg.png"
              alt="VIoT"
              width={96}
              height={96}
              className="relative z-10 h-[58px] w-[58px] object-contain"
            />
          </div>
        </motion.div>

        {/* Output */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
          <div className="flex items-center justify-end gap-3">
            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Operational output
              </span>
              <span className="mt-1.5 block text-[11px] leading-none text-white/45">
                Visibility · Alerts · Decisions
              </span>
            </div>

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-12 lg:hidden">
        <div className="grid">
          <div className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Connected inputs
              </span>
              <span className="mt-1.5 block text-xs text-white/45">
                Vehicles · Assets · Sensors
              </span>
            </div>
          </div>

          <div className="ml-[3px] h-7 w-px bg-white/[0.08]" />

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-signal/25 bg-[#0B0F0E] shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
            <Image
              src="/logo/logo-bg.png"
              alt="VIoT"
              width={64}
              height={64}
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="ml-[3px] h-7 w-px bg-white/[0.08]" />

          <div className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Operational output
              </span>
              <span className="mt-1.5 block text-xs text-white/45">
                Visibility · Alerts · Decisions
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   SOLUTION CARD
========================================================= */

function SolutionCard({ block, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.018] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-signal/30 hover:bg-white/[0.03] sm:p-8 ${block.span}`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-signal/0 blur-3xl transition-all duration-500 group-hover:bg-signal/[0.08]" />

      {/* Top row */}
      <div className="relative flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-signal/25 bg-signal/[0.06] text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-ink">
          <BlockIcon name={block.icon} />
        </span>

     
      </div>

      {/* Content */}
      <h3 className="relative mt-8 font-heading text-[20px] font-semibold leading-[1.2] tracking-[-0.025em] text-white sm:text-[22px]">
        {block.title}
      </h3>

      <p className="relative mt-3 max-w-[460px] text-[14px] leading-[1.75] text-white/45 transition-colors duration-300 group-hover:text-white/60">
        {block.desc}
      </p>

      {/* Bottom accent line */}
      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

/* =========================================================
   MAIN PLATFORM SECTION
========================================================= */

export function PlatformSection() {
  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-ink text-white"
    >
      <PlatformArchitecture />

      <div className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24 xl:px-12">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/80" />
              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.16em] text-signal">
                The VIoT platform
              </span>
            </div>

            <h2 className="max-w-[760px] font-heading text-[34px] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-[40px] lg:text-[46px]">
              One operating layer
              <br />
              <span className="text-signal">for every connected system.</span>
            </h2>
          </div>

          {/* Header CTA (desktop) */}
          <div className="hidden lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href={SOLUTIONS_HREF}
              className="group inline-flex items-center gap-3 font-mono text-[9px] font-medium uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 hover:text-signal"
            >
              All solutions
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.1] transition-all duration-300 group-hover:translate-x-0.5 group-hover:border-signal/40">
                <ArrowIcon className="h-2.5 w-2.5" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* 5 BLOCKS */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
          {platformBlocks.map((block, index) => (
            <SolutionCard key={block.title} block={block} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex justify-center"
        >
          <Link
            href={SOLUTIONS_HREF}
            className="group inline-flex h-12 items-center gap-3 rounded-lg border border-signal bg-signal px-6 text-[10px] font-bold uppercase tracking-[0.07em] !text-ink shadow-[0_10px_28px_rgba(39,213,155,0.12)] transition-all duration-300 hover:-translate-y-px hover:border-white hover:bg-white hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]"
          >
            <span className="!text-ink">Explore more</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-ink/10 bg-ink/10">
              <ArrowIcon className="h-2.5 w-2.5 !text-ink transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.div>

        {/* SYSTEM ARCHITECTURE */}
        {/* <PlatformCore /> */}
      </div>
    </section>
  );
}