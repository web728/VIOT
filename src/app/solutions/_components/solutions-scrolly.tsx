"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import { ArrowIcon, CheckIcon } from "@/components/icons";
import type { Solution } from "@/lib/solutions";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function SolutionsScrolly({
  solutions,
}: {
  solutions: Solution[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
      {/* Very subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-14 flex flex-col gap-6 border-b border-white/[0.08] pb-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-[#24C491]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#24C491]/80">
                Operating environments
              </span>
            </div>

            <h2 className="max-w-2xl font-heading text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
              Technology follows the operation.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/35">
            Select an environment to see how VIoT can connect field hardware,
            operational data and the teams responsible for action.
          </p>
        </motion.div>

        {/* Solution list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="divide-y divide-white/[0.09]"
        >
          {solutions.map((solution, index) => (
            <motion.article
              key={solution.slug}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                href={`/solutions/${solution.slug}`}
                className="block py-8 outline-none sm:py-10 lg:py-11"
              >
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-center lg:gap-10">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-medium tracking-[0.16em] text-[#24C491]/70">
                        {solution.number}
                      </span>

                      <span className="h-px w-7 bg-white/10 transition-all duration-300 group-hover:w-10 group-hover:bg-[#24C491]/60" />
                    </div>
                  </div>

                  {/* Main title */}
                  <div className="lg:col-span-4">
                    <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#24C491] sm:text-2xl">
                      {solution.name}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-white/40 transition-colors duration-300 group-hover:text-white/55">
                      {solution.lede}
                    </p>
                  </div>

                  {/* Priorities */}
                  <div className="lg:col-span-5">
                    <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {solution.priorities.slice(0, 3).map((priority) => (
                        <div
                          key={priority}
                          className="flex items-start gap-3 text-xs text-white/45 transition-colors duration-300 group-hover:text-white/65"
                        >
                          <span className="mt-[2px] shrink-0 text-[#24C491]">
                            <CheckIcon />
                          </span>

                          <span>{priority}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 lg:flex lg:justify-end">
                    <div className="inline-flex items-center gap-3 font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-white/30 transition-colors duration-300 group-hover:text-white">
                      <span className="hidden sm:inline">
                        Explore environment
                      </span>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] transition-all duration-300 group-hover:border-[#24C491]/50 group-hover:bg-[#24C491] group-hover:text-[#081b24]">
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
            Hardware · Connectivity · Platform · Action
          </p>

          <span className="text-xs text-white/25">
            Built around the conditions in the field.
          </span>
        </motion.div>
      </div>
    </section>
  );
}