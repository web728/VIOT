"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/icons";

export function CtaBand() {
  return (
    <section className="relative bg-ink py-24 md:py-32 border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between rounded-3xl border border-signal/20 bg-signal-dark/25 backdrop-blur-xl p-8 sm:p-12 shadow-2xl"
        >
          {/* Left Column: Heading & Eyebrow */}
          <div className="lg:col-span-7 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              Get In Touch
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
              Let&apos;s bring what moves, what matters and who gets in — under one roof.
            </h2>
          </div>

          {/* Right Column: Subtext & Action Button */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start sm:items-center">
            <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm lg:text-right">
              Talk to us about your fleet, your facilities, or your next tender.
            </p>
            <Link 
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
              href="/contact"
            >
              Talk to us 
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}