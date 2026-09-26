"use client";

import { motion } from "framer-motion";

import { PageHero } from "@/components/page-hero";
import { solutions } from "@/lib/solutions";
import { SolutionsScrolly } from "./_components/solutions-scrolly";
import { CtaBand } from "@/components/home/CtaBand";

export default function SolutionsPage() {
  return (
    <div className="overflow-hidden bg-[#081b24] text-white selection:bg-[#24C491] selection:text-[#081b24]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#07161d]">
        {/* Subtle technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Controlled ambient light */}
        <div className="pointer-events-none absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#24C491]/[0.045] blur-[130px]" />

        <div className="relative z-10 pt-8 pb-12 lg:pt-10 lg:pb-14">
          <PageHero
            breadcrumb="Solutions / Operating Environments"
            title="Connected operations, shaped around"
            titleHighlight="the work."
            lede="The right system depends on the field conditions, the event that matters and the person expected to act on it."
          />
        </div>

        {/* Hero metadata */}
        <div className="relative z-10 border-t border-white/[0.07] bg-[#06141a]/70">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-12">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#24C491]" />
                08 Operating contexts
              </span>

              <span className="hidden h-3 w-px bg-white/10 sm:block" />

              <span>Hardware + Unified Platform</span>
            </div>

            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#24C491]/80">
              Scoped before proposal
            </span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-b border-slate-200 bg-[#f4f7f6] text-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#24C491]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  Current solution areas
                </span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#081b24] sm:text-4xl lg:text-5xl">
                One connected system.
                <br />
                <span className="font-normal text-slate-400">
                  Different operating realities.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
                Scroll through the environments below. Each recommendation
                begins with technical and operating fit — not a generic sector
                package.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions */}
      <SolutionsScrolly solutions={solutions} />

      {/* CTA */}
      <CtaBand />
    </div>
  );
}