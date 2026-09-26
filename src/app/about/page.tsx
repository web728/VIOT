"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";

const values = [
  { num: "01", title: "Integrity", copy: "State what is ready, what is in development, and where the product is not the right fit." },
  { num: "02", title: "Accountability", copy: "Own the path from hardware to platform instead of sending the customer between vendors." },
  { num: "03", title: "Follow-through", copy: "Monitor deployed devices and stay available after installation—not only before payment." },
];

const founders = [
  { name: "Bharat Kapur", role: "Co-Founder", monogram: "BK" },
  { name: "Vyom Malik", role: "Business Head", monogram: "VM" },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      
      {/* 1. Compact Page Hero */}
      <PageHero 
        breadcrumb="Company / Incorporated May 2026"
        title="A new company."
        titleHighlight="Not a new team."
        lede="VIoT Technologies LLP is headquartered in Noida and built on years in fleet technology, telematics, operations, go-to-market, vendor evaluation and compliance."
      />

      {/* 2. Manifesto Quote & Image Slot Section (Light Background) */}
      <section className="py-24 md:py-32 bg-paper text-ink border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Quote Block */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-signal-dark shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                Why VIoT Exists
              </div>

              <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight leading-[1.3] text-ink">
                &ldquo;This industry trained customers to accept unreliable telematics data as normal. We built VIoT to change that—once and for all.&rdquo;
              </blockquote>

              <p className="text-sm sm:text-base text-muted font-sans leading-relaxed">
                Power cuts, tampering and remote zones are exactly when a fleet manager needs a signal — and exactly when cheap hardware drops it. We started VIoT to bridge that exact reliability gap.
              </p>
            </motion.div>

            {/* Right Column: Office/Team Image Placeholder Slot */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-line bg-white p-3.5 shadow-sm overflow-hidden group">
                <div className="absolute inset-3.5 rounded-xl bg-paper/60 border border-dashed border-line flex flex-col items-center justify-center text-center p-6 transition-colors group-hover:border-signal-dark">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Office / Team Visual</span>
                  <span className="text-[11px] text-muted/70 mt-1">Drop Noida headquarters or team photo here</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. What We Value Section (Dark Background) */}
      <section className="py-24 md:py-32 bg-ink text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl space-y-16 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                What We Value
              </div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-white leading-[1.15]">
                Judge the system by what gets better.
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/70 max-w-md font-sans leading-relaxed">
              Selling a device is not the finish line. The work is complete only when the deployment keeps reporting and the business can act on the data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div 
                key={v.num}
                className="group p-8 rounded-2xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-4 transition-all duration-300 hover:border-signal/40 hover:bg-ink-2 hover:shadow-xl"
              >
                <span className="font-mono text-xs font-semibold text-signal">{v.num}</span>
                <h3 className="text-xl font-semibold text-white tracking-tight">{v.title}</h3>
                <p className="text-sm text-white/65 leading-relaxed font-sans">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Public Team Section (Light Background) */}
      <section className="py-24 md:py-32 bg-paper text-ink border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal-dark shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                The Public Team
              </div>
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-ink leading-[1.15]">
                Two people you can reach.
              </h2>
            </div>
            <p className="text-sm md:text-base text-muted max-w-md font-sans leading-relaxed">
              VIoT is deliberately founder-close at this stage. Every serious conversation reaches Bharat or Vyom directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {founders.map((f) => (
              <div 
                key={f.name}
                className="flex items-center gap-5 p-6 rounded-2xl border border-line bg-white shadow-2xs transition-all hover:border-signal-dark"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-signal/10 border border-signal-dark/30 font-mono text-lg font-bold text-signal-dark flex-shrink-0">
                  {f.monogram}
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-base font-semibold text-ink">{f.name}</h3>
                  <p className="text-xs font-mono text-muted uppercase tracking-wider">{f.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA Band (Dark Section) */}
      <section className="relative py-28 md:py-36 bg-ink text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between rounded-3xl border border-white/10 bg-ink-2/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Direct Conversation
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Bring us the hard question.
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start lg:text-right">
              <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm leading-relaxed">
                Technical fit, deployment design, partnership or an operating problem—write to the team that will actually work on it.
              </p>
              <div className="w-full sm:w-auto flex lg:justify-end">
                <Link 
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
                  href="/contact"
                >
                  Contact Bharat or Vyom 
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}