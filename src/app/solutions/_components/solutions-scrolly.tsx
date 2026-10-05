"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowIcon, CheckIcon } from "@/components/icons";

import type { Solution } from "@/lib/solutions";

const ease = [0.16, 1, 0.3, 1] as const;

/* =========================================================*

  BACKGROUND*

*========================================================= */

function SolutionsBackground() {

  return (

    <div

      aria-hidden="true"

      className="pointer-events-none absolute inset-0 overflow-hidden"

    >

      {/* Atmospheric depth */}

      <div className="absolute -left-48 top-[12%] h-[500px] w-[500px] rounded-full bg-[#27d59b]/[0.018] blur-3xl" />

      <div className="absolute -right-56 bottom-[8%] h-[620px] w-[620px] rounded-full bg-white/[0.01] blur-3xl" />

      {/* Flow system */}

      <svg

        viewBox="0 0 1600 1000"

        preserveAspectRatio="none"

        className="absolute inset-0 h-full w-full"

        fill="none"

      >

        <motion.path

          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"

          stroke="rgba(255,255,255,0.045)"

          strokeWidth="1"

          initial={{ pathLength: 0 }}

          whileInView={{ pathLength: 1 }}

          viewport={{ once: true }}

          transition={{

            duration: 2.4,

            ease: "easeOut",

          }}

        />

        <motion.path

          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"

          stroke="rgba(39,213,155,0.14)"

          strokeWidth="1.2"

          strokeDasharray="3 15"

          animate={{

            strokeDashoffset: [0, -180],

          }}

          transition={{

            duration: 12,

            repeat: Infinity,

            ease: "linear",

          }}

        />

        <path

          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"

          stroke="rgba(255,255,255,0.03)"

          strokeWidth="1"

        />

        <motion.path

          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"

          stroke="rgba(39,213,155,0.07)"

          strokeWidth="1"

          strokeDasharray="2 20"

          animate={{

            strokeDashoffset: [0, 180],

          }}

          transition={{

            duration: 15,

            repeat: Infinity,

            ease: "linear",

          }}

        />

      </svg>

      {/* Rings */}

      <motion.div

        className="absolute right-[4%] top-[12%] h-[420px] w-[420px] rounded-full border border-white/[0.03]"

        animate={{

          rotate: 360,

        }}

        transition={{

          duration: 60,

          repeat: Infinity,

          ease: "linear",

        }}

      />

      <motion.div

        className="absolute right-[9%] top-[18%] h-[290px] w-[290px] rounded-full border border-[#27d59b]/[0.05]"

        animate={{

          rotate: -360,

        }}

        transition={{

          duration: 42,

          repeat: Infinity,

          ease: "linear",

        }}

      />

      {/* Signals */}

      <motion.span

        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{

          x: [0, 90, 180],

          y: [0, 20, 0],

          opacity: [0.1, 0.65, 0],

        }}

        transition={{

          duration: 5.5,

          repeat: Infinity,

          ease: "easeInOut",

        }}

      />

      <motion.span

        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{

          x: [0, -70, -150],

          y: [0, -25, 0],

          opacity: [0, 0.7, 0],

        }}

        transition={{

          duration: 6,

          delay: 1,

          repeat: Infinity,

          ease: "easeInOut",

        }}

      />

      <motion.span

        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{

          x: [0, -55, -120],

          opacity: [0.1, 0.65, 0],

        }}

        transition={{

          duration: 5,

          delay: 1.8,

          repeat: Infinity,

          ease: "easeInOut",

        }}

      />

    </div>

  );

}

/* =========================================================*

  SOLUTIONS SCROLLY*

*========================================================= */

export function SolutionsScrolly({

  solutions,

}: {

  solutions: Solution[];

}) {

  return (

    <section className="relative overflow-hidden bg-[#081b24] text-white">

      <SolutionsBackground />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* =====================================================*

           HEADER*

       ===================================================== */}

        {/* <div className="px-1 pb-7 pt-1 sm:pb-8">

          <div className="grid gap-5 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="mb-4 flex items-center gap-3">

                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">

                  Solutions

                </span>

              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] text-white sm:text-4xl lg:text-[46px]">

                Built around{" "}

                <span className="font-normal text-[#27d59b]">

                  the way work moves.

                </span>

              </h2>

            </div>

            <div className="lg:col-span-4">

              <p className="max-w-md text-[13px] leading-6 text-white/50 lg:ml-auto lg:text-right">

                Connected technology designed around the real conditions of

                your operation.

              </p>

            </div>

          </div>

        </div> */}

        {/* =====================================================*

           OUTER SOLUTIONS FRAME*

       ===================================================== */}

        <div

          className="

            overflow-hidden rounded-2xl

            border border-white/[0.09]

            bg-white/[0.018]

            shadow-[0_18px_50px_rgba(0,0,0,0.10)]

            backdrop-blur-[2px]

          "

        >

          {/* ===================================================*

             SOLUTIONS*

         =================================================== */}

          <div className="divide-y divide-white/[0.08]">

            {solutions.map((solution, index) => {

              const priorities = Array.isArray(solution.priorities)

                ? solution.priorities.slice(0, 3)

                : [];

              return (

                <motion.article

                  id={`solution-${solution.slug}`}

                  key={solution.slug}

                  initial={{

                    opacity: 0,

                    y: 14,

                  }}

                  whileInView={{

                    opacity: 1,

                    y: 0,

                  }}

                  viewport={{

                    once: true,

                    amount: 0.08,

                  }}

                  transition={{

                    duration: 0.5,

                    delay: Math.min(index * 0.03, 0.14),

                    ease,

                  }}

                  className="group relative"

                >

                  <Link

                    href={`/solutions/${solution.slug}`}

                    className="

                      relative block px-5 py-6

                      outline-none

                      transition-colors duration-300

                      hover:bg-white/[0.025]

                      focus-visible:bg-white/[0.025]

                      sm:px-6

                      lg:px-7 lg:py-7

                    "

                  >

                    {/* subtle active edge */}

                    <span

                      className="

                        absolute bottom-4 left-0 top-4

                        w-[2px] rounded-full bg-[#27d59b]

                        opacity-0

                        transition-all duration-300

                        group-hover:opacity-100

                      "

                    />

                    <div className="grid gap-5 lg:grid-cols-12 lg:items-center lg:gap-7">

                      {/* NUMBER */}

                      <div className="flex items-center justify-between lg:col-span-1 lg:block">

                        <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#27d59b]">

                          {solution.number}

                        </span>

                        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20 lg:hidden">

                          Solution

                        </span>

                      </div>

                      {/* TITLE */}

                      <div className="lg:col-span-4">

                        <h3

                          className="

                            font-heading text-xl font-semibold

                            leading-[1.05] tracking-[-0.03em]

                            text-white

                            transition-transform duration-300

                            group-hover:translate-x-0.5

                            sm:text-[23px]

                          "

                        >

                          {solution.name}

                        </h3>

                        <p className="mt-2 max-w-md text-[13px] leading-6 text-white/52">

                          {solution.headline}

                        </p>

                      </div>

                      {/* PRIORITIES */}

                      <div className="lg:col-span-5">

                        {priorities.length > 0 ? (

                          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">

                            {priorities.map((priority) => (

                              <div

                                key={priority}

                                className="flex items-start gap-2.5 text-[12px] leading-5 text-white/58"

                              >

                                <span

                                  className="

                                    mt-[2px] flex h-4 w-4 shrink-0

                                    items-center justify-center

                                    rounded-md

                                    border border-[#27d59b]/20

                                    bg-[#27d59b]/[0.035]

                                    text-[#27d59b]

                                  "

                                >

                                  <CheckIcon />

                                </span>

                                <span>{priority}</span>

                              </div>

                            ))}

                          </div>

                        ) : (

                          <div className="h-px w-full bg-white/[0.05]" />

                        )}

                      </div>

                      {/* ACTION */}

                      <div className="lg:col-span-2 lg:flex lg:justify-end">

                        <div className="flex items-center justify-between gap-4 lg:justify-end">

                          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">

                            Explore

                          </span>

                          <span

                            className="

                              flex h-9 w-9 items-center justify-center

                              rounded-lg

                              border border-white/15

                              bg-white/[0.02]

                              text-white

                              transition-all duration-300

                              group-hover:border-[#27d59b]

                              group-hover:bg-[#27d59b]

                              group-hover:text-[#081b24]

                            "

                          >

                            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                </motion.article>

              );

            })}

          </div>

        </div>

      </div>

    </section>

  );

}