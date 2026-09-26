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

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-82px)] w-full items-center justify-center overflow-hidden bg-ink text-white px-6 py-12 lg:py-16">
      
      {/* Background Image with Foggy Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 mix-blend-luminosity scale-105 pointer-events-none"
        style={{ backgroundImage: "url('/image/car.jpeg')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-ink/90 via-ink/80 to-ink pointer-events-none" />

      {/* Minimalist animated background glow & floating pulse rings */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.06, 0.12, 0.06],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-signal rounded-full blur-[160px] pointer-events-none z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.07, 0.03],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber rounded-full blur-[140px] pointer-events-none z-0"
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

        {/* CTA Buttons - Increased width & minimal compact arrow */}
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