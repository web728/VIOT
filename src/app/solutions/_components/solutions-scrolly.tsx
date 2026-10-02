"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowIcon, CheckIcon } from "@/components/icons";
import type { Solution } from "@/lib/solutions";

const ease = [0.16, 1, 0.3, 1] as const;

function SolutionsBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      {/* Green atmosphere */}
      <div className="absolute -right-[12%] top-[8%] h-[520px] w-[520px] rounded-full bg-[#27d59b]/[0.035] blur-3xl" />

      {/* Signal path */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M-120 650 C180 590 330 330 610 390 S980 710 1260 520 S1510 300 1730 360"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
        />

        <motion.path
          d="M-120 650 C180 590 330 330 610 390 S980 710 1260 520 S1510 300 1730 360"
          stroke="rgba(39,213,155,0.18)"
          strokeWidth="1"
          strokeDasharray="3 22"
          animate={{
            strokeDashoffset: [0, -260],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Signal point */}
      <motion.span
        className="absolute left-[14%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, 180, 360],
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute right-[18%] top-[62%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, -140, -280],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 7,
          delay: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Technical ring */}
      <motion.div
        className="absolute -right-[120px] top-[8%] h-[520px] w-[520px] rounded-full border border-[#27d59b]/[0.055]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 75,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function SolutionsScrolly({
  solutions,
}: {
  solutions: Solution[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#081b24] text-white">
      <SolutionsBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-[#27d59b]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Solutions
              </span>
            </div>

            <h2 className="font-heading text-[clamp(2.8rem,5vw,5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-white">
              Built around
              <br />
              <span className="font-normal text-[#27d59b]">
                the way work moves.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
              Connected technology designed around the real conditions of your
              operation.
            </p>
          </div>
        </div>

        {/* SOLUTIONS */}
        <div className="divide-y divide-white/10">
          {solutions.map((solution, index) => {
            /*
             * IMPORTANT:
             * priorities may not exist for every solution.
             * Never call .slice() directly on it.
             */
            const priorities = Array.isArray(solution.priorities)
              ? solution.priorities.slice(0, 4)
              : [];

            return (
              <motion.article
                key={solution.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.035, 0.18),
                  ease,
                }}
                className="group relative"
              >
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="relative block outline-none"
                >
                  {/* Green hover line */}
                  <span className="absolute left-0 top-0 h-0 w-[2px] bg-[#27d59b] transition-all duration-500 group-hover:h-full" />

                  <div className="grid grid-cols-1 gap-8 py-10 transition-all duration-500 group-hover:pl-5 sm:py-12 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-14">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#27d59b]">
                        {solution.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-4">
                      <h3 className="font-heading text-2xl font-semibold leading-none tracking-[-0.04em] text-white transition-transform duration-500 group-hover:translate-x-1 sm:text-[28px]">
                        {solution.name}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
                        {solution.headline}
                      </p>
                    </div>

                    {/* Priorities */}
                    <div className="lg:col-span-5">
                      {priorities.length > 0 ? (
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                          {priorities.map((priority) => (
                            <div
                              key={priority}
                              className="flex items-start gap-3 text-sm leading-5 text-white/70"
                            >
                              <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center text-[#27d59b]">
                                <CheckIcon />
                              </span>

                              <span>{priority}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="h-px w-full bg-white/[0.06]" />
                      )}
                    </div>

                    {/* Action */}
                    <div className="lg:col-span-2 lg:flex lg:justify-end">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
                          Explore
                        </span>

                        <span className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-all duration-300 group-hover:border-[#27d59b] group-hover:bg-[#27d59b] group-hover:text-[#081b24]">
                          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM */}
        <div className="flex items-center justify-between border-t border-white/10 py-7">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
            {String(solutions.length).padStart(2, "0")} solutions
          </span>

          <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#27d59b]">
            <span className="h-1.5 w-1.5 bg-[#27d59b]" />
            VIoT
          </span>
        </div>
      </div>
    </section>
  );
}