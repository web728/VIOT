"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const stats = [
  { value: "3", label: "Divisions, one team" },
  { value: "5", label: "Hardware product lines" },
  { value: "X,XXX+", label: "Devices in India" },
  { value: "XXX+", label: "Global deployments" },
];

// Light-trail streaks — varied lanes, speeds, widths, and a couple in amber for accent
const streaks = [
  { top: "8%", width: 340, duration: 3.2, delay: 0, color: "signal", opacity: 0.5 },
  { top: "18%", width: 220, duration: 4.5, delay: 1.1, color: "signal", opacity: 0.3 },
  { top: "27%", width: 420, duration: 2.8, delay: 0.4, color: "amber", opacity: 0.35 },
  { top: "38%", width: 260, duration: 3.8, delay: 2, color: "signal", opacity: 0.4 },
  { top: "50%", width: 500, duration: 3.4, delay: 0.8, color: "signal", opacity: 0.25 },
  { top: "61%", width: 300, duration: 4.1, delay: 1.6, color: "amber", opacity: 0.3 },
  { top: "71%", width: 240, duration: 2.6, delay: 2.4, color: "signal", opacity: 0.45 },
  { top: "82%", width: 380, duration: 3.9, delay: 0.2, color: "signal", opacity: 0.3 },
  { top: "92%", width: 260, duration: 3.1, delay: 1.4, color: "signal", opacity: 0.35 },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-82px)] w-full items-center justify-center overflow-hidden bg-ink text-white px-6 py-12 lg:py-16">

      {/* Base gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink via-ink to-[#0d2935] pointer-events-none" />

      {/* Light-trail streak field — rotated for a dynamic diagonal flow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-[-15%] rotate-[-8deg]">
          {streaks.map((s, i) => (
            <motion.div
              key={i}
              className="absolute h-px rounded-full"
              style={{
                top: s.top,
                width: s.width,
                background:
                  s.color === "signal"
                    ? `linear-gradient(90deg, transparent, rgba(39,213,155,${s.opacity}) 60%, rgba(39,213,155,${s.opacity + 0.25}) 92%, rgba(39,213,155,0) 100%)`
                    : `linear-gradient(90deg, transparent, rgba(255,179,33,${s.opacity}) 60%, rgba(255,179,33,${s.opacity + 0.2}) 92%, rgba(255,179,33,0) 100%)`,
                boxShadow:
                  s.color === "signal"
                    ? `0 0 6px rgba(39,213,155,${s.opacity})`
                    : `0 0 6px rgba(255,179,33,${s.opacity})`,
              }}
              animate={{ x: ["-40vw", "140vw"] }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Vignette so streaks fade at the edges, keeping center clean for text */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#081b24_78%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/40 via-transparent to-ink pointer-events-none" />

      {/* Breathing ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-signal rounded-full blur-[160px] pointer-events-none z-0"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center my-auto pt-6"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2/80 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-white/85 backdrop-blur-md shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
          Fleet, Asset &amp; Access Intelligence
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="mt-6 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.06]"
        >
          Track what moves. <br />
          Secure what matters.{" "}
          <span className="font-normal text-white/40">Control who gets in.</span>
        </motion.h1>

        {/* Subtitle / Lede */}
        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/70 font-sans"
        >
          VIoT is an Indian IoT company built on three unified divisions: Fleet Intelligence, Asset Intelligence, and Access Control. One platform, total command.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto min-w-[210px] items-center justify-center gap-2.5 rounded-full bg-signal px-9 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:!text-black hover:shadow-[0_0_30px_rgba(39,213,155,0.35)]"
          >
            Talk to us
            <ArrowIcon className="w-3 h-3 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/platform"
            className="inline-flex w-full sm:w-auto min-w-[210px] items-center justify-center gap-2.5 rounded-full border border-white/15 bg-ink-2/40 px-9 py-3.5 text-sm font-medium text-white/90 whitespace-nowrap backdrop-blur-sm transition-all hover:border-signal hover:bg-ink-2 hover:text-white"
          >
            See the platform
          </Link>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          variants={item}
          className="mt-12 grid w-full max-w-3xl grid-cols-2 divide-x divide-white/10 border-t border-white/10 pt-6 md:grid-cols-4 bg-ink-2/40 rounded-2xl p-3 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          {stats.map((s) => (
            <div key={s.label} className="px-2 text-center">
              <strong className="block font-mono text-xl sm:text-2xl font-semibold text-signal tracking-tight">
                {s.value}
              </strong>
              <span className="mt-1 block text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}