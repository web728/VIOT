"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";
import { solutions } from "@/lib/solutions";
import { SolutionsScrolly } from "./_components/solutions-scrolly";

export default function SolutionsPage() {
  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      
      {/* 1. Compact Page Hero using Reusable Component */}
      <PageHero 
        breadcrumb="Solutions / Operating Environments"
        title="Connected operations, shaped around"
        titleHighlight="the work."
        lede="The right system depends on the field conditions, the event that matters and the person expected to act on it."
      />

      {/* Hero Meta Strip */}
      <section className="bg-ink text-white py-6 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-white/60">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              08 Operating contexts
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Hardware + platform</span>
          </div>
          <span className="text-signal font-semibold">Scoped before proposal</span>
        </div>
      </section>

      {/* 2. Solutions Intro Section (Light Background) */}
      <section className="py-20 md:py-28 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end"
          >
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal-dark shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                Current Solution Areas
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-[1.15]">
                One system approach. <br />
                <span className="text-muted">Different operating realities.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                Scroll through the environments below. Each recommendation begins with technical and operating fit—not a generic sector package.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Interactive Solutions Scrolly Component */}
      <SolutionsScrolly solutions={solutions} />

      {/* 4. Closing CTA Band */}
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
                Scope the Real Workflow
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Describe the operating environment.
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start lg:text-right">
              <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm leading-relaxed">
                Share the assets, field conditions, current system and the event your team needs to see.
              </p>
              <div className="w-full sm:w-auto flex lg:justify-end">
                <Link 
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
                  href="/contact"
                >
                  Write to VIoT 
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