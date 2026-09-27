"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

import { ArrowIcon, CheckIcon } from "@/components/icons";
import type { Solution } from "@/lib/solutions";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
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
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid grid-cols-1 gap-8 border-b border-white/[0.1] py-12 sm:py-14 lg:grid-cols-12 lg:items-end lg:gap-10 lg:py-16"
        >
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#27d59b]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Operating environments
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:text-4xl lg:text-[48px]">
              Technology follows
              <br />
              <span className="font-normal text-white/40">
                the operation.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-white/40">
              Explore the operating environments where connected hardware,
              field data and platform intelligence come together.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            SOLUTION LIST
        ===================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="divide-y divide-white/[0.1]"
        >
          {solutions.map((solution) => (
            <motion.article
              key={solution.slug}
              variants={itemVariants}
              className="group relative"
            >
              <Link
                href={`/solutions/${solution.slug}`}
                className="relative block outline-none"
              >
                {/* Active vertical signal */}
                <span className="absolute left-0 top-0 h-0 w-px bg-[#27d59b] transition-all duration-500 group-hover:h-full" />

                <div className="grid grid-cols-1 gap-7 py-8 sm:py-9 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10">
                  {/* -------------------------------------------------
                      NUMBER
                  ------------------------------------------------- */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#27d59b]/70">
                        {solution.number}
                      </span>

                      <span className="h-px w-5 bg-white/[0.15] transition-all duration-500 group-hover:w-8 group-hover:bg-[#27d59b]/50" />
                    </div>
                  </div>

                  {/* -------------------------------------------------
                      TITLE / HEADLINE
                  ------------------------------------------------- */}
                  <div className="lg:col-span-4">
                    <h3 className="font-heading text-xl font-semibold leading-tight tracking-[-0.03em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-2xl">
                      {solution.name}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/38 transition-colors duration-300 group-hover:text-white/55">
                      {solution.headline}
                    </p>
                  </div>

                  {/* -------------------------------------------------
                      PRIORITIES
                  ------------------------------------------------- */}
                  <div className="lg:col-span-5">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
                      {solution.priorities.slice(0, 4).map((priority) => (
                        <div
                          key={priority}
                          className="flex items-start gap-3 text-xs leading-5 text-white/38 transition-colors duration-300 group-hover:text-white/55"
                        >
                          <span className="mt-[3px] flex h-3 w-3 shrink-0 items-center justify-center text-[#27d59b]/70">
                            <CheckIcon />
                          </span>

                          <span>{priority}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* -------------------------------------------------
                      ACTION
                  ------------------------------------------------- */}
                  <div className="lg:col-span-2 lg:flex lg:justify-end">
                    <div className="flex items-center gap-4">
                      <span className="hidden font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-white/25 transition-colors duration-300 group-hover:text-white/50 sm:inline">
                        Explore
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center border border-white/[0.16] text-white/45 transition-all duration-400 group-hover:border-[#27d59b]/60 group-hover:bg-[#27d59b] group-hover:text-[#081b24]">
                        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            BOTTOM SYSTEM STRIP
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-4 border-t border-white/[0.1] py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              Hardware
            </span>

            <span className="h-3 w-px bg-white/[0.12]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              Connectivity
            </span>

            <span className="h-3 w-px bg-white/[0.12]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              Platform
            </span>

            <span className="h-3 w-px bg-white/[0.12]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              Action
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#27d59b]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
              Built around the field
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}