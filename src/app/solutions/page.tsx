"use client";

import { motion } from "framer-motion";

import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/home/CtaBand";
import { solutions } from "@/lib/solutions";

import { SolutionsScrolly } from "./_components/solutions-scrolly";

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* =========================================================
          01 — HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        {/* Very subtle technical structure */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#081b24 1px, transparent 1px), linear-gradient(90deg, #081b24 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Quiet architectural block */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-full w-[32%] border-l border-[#cdd5d2]/70"
        />

        <div className="relative z-10">
          <div className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-8 lg:px-12 lg:pt-10">
            <PageHero
              breadcrumb="Solutions / Operating Environments"
              title="Technology shaped around"
              titleHighlight="the work."
              lede="Connected systems built around the conditions, assets, people and decisions that define each operating environment."
            />
          </div>

          {/* Hero technical strip */}
          <div className="border-t border-[#cdd5d2] bg-white/45">
            <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-h-[54px] items-center gap-5 px-6 sm:px-8 lg:px-12">
                <span className="flex items-center gap-2 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#607078]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                  08 operating contexts
                </span>

                <span className="hidden h-4 w-px bg-[#cdd5d2] sm:block" />

                <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#607078] sm:block">
                  Hardware + Platform
                </span>
              </div>

              <div className="border-t border-[#cdd5d2] px-6 py-3 sm:border-l sm:border-t-0 sm:px-8 lg:px-12">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                  Solution architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — INTRODUCTION
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
          >
            {/* Main statement */}
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  01 / Solution areas
                </span>
              </div>

              <h2 className="max-w-4xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[54px]">
                One connected system.
                <br />
                <span className="font-normal text-[#879399]">
                  Different operating realities.
                </span>
              </h2>
            </div>

            {/* Supporting copy */}
            <div className="lg:col-span-4 lg:pb-1">
              <p className="max-w-md text-sm leading-7 text-[#607078] sm:text-base">
                Every environment creates different signals, risks and
                decisions. VIoT brings the relevant hardware, connectivity and
                platform capabilities together around the way work actually
                happens.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          03 — SOLUTION INDEX
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="mb-8 flex items-end justify-between border-b border-[#cdd5d2] pb-5">
            <div>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#607078]">
                Operating environments
              </span>

              <h3 className="mt-2 font-heading text-xl font-semibold tracking-[-0.025em] text-[#081b24] sm:text-2xl">
                Built around the field.
              </h3>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#879399] sm:block">
              01 — 08
            </span>
          </div>

          {/* Compact editorial index */}
          <div className="grid grid-cols-1 border-l border-t border-[#cdd5d2] sm:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, index) => (
  <motion.div
    key={solution.slug}
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.04,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="group relative min-h-[118px] border-b border-r border-[#cdd5d2] bg-white p-5 transition-colors duration-300 hover:bg-[#eef3f0] sm:min-h-[132px] sm:p-6"
  >
    <span className="absolute left-0 top-0 h-0 w-0.5 bg-[#27d59b] transition-all duration-300 group-hover:h-full" />

    <div className="flex h-full flex-col justify-between gap-8">
      <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#a0aaae]">
        {solution.number}
      </span>

      <div>
        <h4 className="font-heading text-sm font-semibold tracking-[-0.015em] text-[#081b24]">
          {solution.name}
        </h4>

        <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#7a858a]">
          {solution.headline}
        </p>
      </div>
    </div>
  </motion.div>
))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — SOLUTION SCROLL EXPERIENCE
      ========================================================= */}
      <section className="bg-[#081b24]">
        <div className="mx-auto max-w-[1440px]">
          <div className="border-b border-white/[0.08] px-6 py-8 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#27d59b]" />

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                    02 / Solution architecture
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
                  From field conditions to action.
                </h3>
              </div>

              <p className="max-w-sm text-xs leading-6 text-white/40 sm:text-right">
                Explore how connected hardware and platform intelligence can
                adapt to different operating environments.
              </p>
            </div>
          </div>

          <SolutionsScrolly solutions={solutions} />
        </div>
      </section>

      {/* =========================================================
          05 — CLOSING STATEMENT
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                03 / One connected layer
              </span>

              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-5xl">
                Different environments.
                <br />
                <span className="font-normal text-[#879399]">
                  One connected intelligence layer.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#607078]">
                Start with the operational problem. Then connect the devices,
                data and workflows required to make it visible and actionable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          06 — CTA
      ========================================================= */}
      <CtaBand />
    </main>
  );
}