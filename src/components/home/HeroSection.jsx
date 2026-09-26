"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const backgroundImages = [
  "/image/hero-1.jpg",
  "/image/hero-2.jpg",
  "/image/hero-3.jpg",
  "/image/hero-4.jpg",
];

const IMAGE_DURATION = 5000; // ms per image

function BackgroundCrossfade() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % backgroundImages.length);
    }, IMAGE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={backgroundImages[index]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ opacity: { duration: 1.5, ease: "easeInOut" }, scale: { duration: IMAGE_DURATION / 1000 + 1.5, ease: "linear" } }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImages[index]})` }}
        />
      </AnimatePresence>

      {/* Lightened Overlay - Photos clear dikhengi, text ke liye sirf subtle contrast */}
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {backgroundImages.map((src, i) => (
          <span
            key={src}
            className={`h-1 rounded-full transition-all duration-700 ${
              i === index ? "w-6 bg-emerald-400" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-68px)] lg:min-h-[calc(100vh-82px)] w-full items-center justify-center overflow-hidden bg-slate-950 text-white px-6 py-16 lg:py-24">
      <BackgroundCrossfade />

      {/* Subtle Breathing Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center my-auto pt-4"
      >
        {/* Eyebrow badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/60 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Enterprise IoT &amp; Telematics Ecosystem
        </motion.div>

        {/* Headline — Balanced & Refined (Not overly bold) */}
        <motion.h1
          variants={item}
          className="mt-6 font-heading text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.12]"
        >
          Building the Future of <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent font-bold">
            Connected Operations
          </span>
        </motion.h1>

        {/* Subtitle / Lede */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300 font-sans"
        >
          Transforming Vehicles, Workforce, Assets, Infrastructure &amp; Cities through IoT, AI, and Telematics technology — at enterprise scale across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <Link
            href="/contact"
            className="group inline-flex w-full sm:w-auto min-w-[210px] items-center justify-center gap-2.5 rounded-full bg-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 whitespace-nowrap transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
          >
            Request a Free Demo
            <ArrowIcon className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/platform"
            className="inline-flex w-full sm:w-auto min-w-[210px] items-center justify-center gap-2.5 rounded-full border border-white/20 bg-slate-900/40 px-8 py-3.5 text-sm font-medium text-white whitespace-nowrap backdrop-blur-md transition-all duration-300 hover:border-emerald-400/60 hover:bg-slate-900/70 hover:text-emerald-300"
          >
            Explore
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}