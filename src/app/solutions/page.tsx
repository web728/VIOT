"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/home/CtaBand";
import { solutions } from "@/lib/solutions";

import { SolutionsScrolly } from "./_components/solutions-scrolly";

const ease = [0.16, 1, 0.3, 1] as const;

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[680px] overflow-hidden bg-[#f4f6f2]">
        {/* Architectural background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute inset-0 opacity-[0.028]"
            style={{
              backgroundImage:
                "linear-gradient(#081b24 1px, transparent 1px), linear-gradient(90deg, #081b24 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          <div className="absolute -right-40 top-10 h-[620px] w-[620px] rounded-full border border-[#081b24]/[0.06]" />
          <div className="absolute -right-20 top-30 h-[460px] w-[460px] rounded-full border border-[#27d59b]/[0.12]" />
          <div className="absolute right-20 top-50 h-[280px] w-[280px] rounded-full border border-[#081b24]/[0.05]" />

          <div className="absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-[#27d59b]" />

          <div className="absolute right-[8%] top-[48%] h-px w-[28%] rotate-[-24deg] bg-[#081b24]/10" />
          <div className="absolute right-[18%] top-[62%] h-px w-[18%] rotate-[18deg] bg-[#081b24]/10" />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          {/* Top meta */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
              Solutions / Operating Environments
            </span>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#879399] sm:block">
              VIoT / 2026
            </span>
          </div>

          {/* Hero copy */}
          <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="lg:col-span-8"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  Connected intelligence
                </span>
              </div>

              <h1 className="max-w-5xl font-heading text-[clamp(3.2rem,7vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#081b24]">
                Technology shaped
                <br />
                <span className="font-normal text-[#89959a]">
                  around the work.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-[#607078] sm:text-base">
                Connected systems built around the conditions, assets, people
                and decisions that define each operating environment.
              </p>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="relative hidden min-h-[300px] lg:col-span-4 lg:block"
            >
              <div className="absolute inset-y-0 right-0 w-px bg-[#081b24]/10" />

              <div className="absolute right-10 top-1/2 -translate-y-1/2">
                <div className="relative h-[230px] w-[230px]">
                  <div className="absolute inset-0 rounded-full border border-[#081b24]/10" />
                  <div className="absolute inset-7 rounded-full border border-[#081b24]/10" />
                  <div className="absolute inset-14 rounded-full border border-[#27d59b]/25" />

                  <div className="absolute left-1/2 top-0 h-full w-px bg-[#081b24]/10" />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-[#081b24]/10" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-3"
                  >
                    <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#27d59b] shadow-[0_0_0_5px_rgba(39,213,155,0.08)]" />
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#081b24]" />

                  <span className="absolute -right-2 top-7 font-mono text-[8px] uppercase tracking-[0.16em] text-[#879399]">
                    FIELD
                  </span>

                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.16em] text-[#879399]">
                    CONNECTED LAYER
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom technical strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col justify-between gap-4 border-t border-[#081b24]/10 pt-5 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-5">
              <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#607078]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                Field intelligence
              </span>

              <span className="hidden h-4 w-px bg-[#081b24]/10 sm:block" />

              <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#879399] sm:block">
                Hardware + Connectivity + Platform
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#007c67]">
              Explore environments
              <ArrowDownRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                01 / Solution areas
              </span>

              <h2 className="mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#081b24] sm:text-5xl lg:text-[64px]">
                One connected system.
                <br />
                <span className="font-normal text-[#9aa4a8]">
                  Different operating realities.
                </span>
              </h2>
            </div>

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
          SOLUTION SELECTOR
      ========================================================= */}
      <section className="bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#607078]">
                Operating environments
              </span>

              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-[#081b24] sm:text-3xl">
                Built around the field.
              </h3>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#879399] sm:block">
              {String(solutions.length).padStart(2, "0")} environments
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden bg-[#081b24]/10 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => (
              <motion.a
                href={`#solution-${solution.slug}`}
                key={solution.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease,
                }}
                whileHover={{ y: -3 }}
                className="group relative flex min-h-[190px] flex-col justify-between bg-white p-6 transition-shadow duration-500 hover:shadow-[0_18px_50px_rgba(8,27,36,0.08)] sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#a1aaad]">
                    {solution.number}
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-[#a7b0b3] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#007c67]" />
                </div>

                <div>
                  <h4 className="font-heading text-base font-semibold tracking-[-0.02em] text-[#081b24]">
                    {solution.name}
                  </h4>

                  <p className="mt-3 max-w-[260px] text-xs leading-5 text-[#7b878c]">
                    {solution.headline}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#27d59b] transition-all duration-500 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SCROLL EXPERIENCE
      ========================================================= */}
      <section className="relative bg-[#081b24]">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-6 pb-10 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-28">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                  02 / Solution architecture
                </span>

                <h3 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[60px]">
                  From field conditions
                  <br />
                  <span className="font-normal text-white/35">
                    to action.
                  </span>
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-white/40 lg:col-span-4 lg:justify-self-end lg:text-right">
                Explore how connected hardware and platform intelligence adapt
                to the realities of different operating environments.
              </p>
            </div>
          </div>

          <SolutionsScrolly solutions={solutions} />
        </div>
      </section>

      {/* =========================================================
          CLOSING
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                03 / One connected layer
              </span>

              <h2 className="mt-6 max-w-5xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#081b24] sm:text-5xl lg:text-[64px]">
                Different environments.
                <br />
                <span className="font-normal text-[#9aa4a8]">
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

      <CtaBand />
    </main>
  );
}