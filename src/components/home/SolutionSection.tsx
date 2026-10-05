"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

/* =========================================================
   SECTION BACKGROUND
========================================================= */

function SolutionsEcosystemBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-48 top-[12%] h-[520px] w-[520px] rounded-full bg-signal-dark/[0.025] blur-3xl" />
      <div className="absolute -right-56 bottom-[8%] h-[650px] w-[650px] rounded-full bg-ink/[0.025] blur-3xl" />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke="rgba(8,27,36,0.09)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        />

        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke="rgba(0,124,103,0.13)"
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke="rgba(8,27,36,0.055)"
          strokeWidth="1"
        />

        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke="rgba(0,124,103,0.065)"
          strokeWidth="1"
          strokeDasharray="2 20"
          animate={{ strokeDashoffset: [0, 180] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <motion.div
        className="absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border border-ink/[0.045]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border border-signal-dark/[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <div className="absolute right-[17%] top-[27%] h-[150px] w-[150px] rounded-full border border-ink/[0.035]" />
      <div className="absolute -left-[180px] bottom-[18%] h-[460px] w-[460px] rounded-full border border-ink/[0.035]" />

      <motion.span
        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-signal-dark"
        animate={{
          x: [0, 90, 180],
          y: [0, 20, 0],
          opacity: [0.1, 0.65, 0],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-signal-dark"
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
        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-signal-dark"
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

      {[
        ["12%", "20%"],
        ["25%", "78%"],
        ["39%", "16%"],
        ["58%", "84%"],
        ["68%", "22%"],
        ["79%", "72%"],
        ["91%", "52%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-1 w-1 rounded-full bg-ink/20"
          style={{ left, top }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{
            duration: 3 + index * 0.25,
            delay: index * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   SOLUTIONS DATA
========================================================= */

type HomeSolution = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  lede: string;
  priorities: string[];
};

const homeSolutions: HomeSolution[] = [
  {
    slug: "logistics-supply-chain",
    number: "01",
    name: "Logistics & Supply Chain",
    headline: "Connect movement, cargo security and exceptions.",
    lede:
      "Bring vehicle location, cargo-security events and route exceptions into one connected operating view for logistics teams.",
    priorities: [
      "Fleet and trip visibility",
      "Cargo-security and lock events",
      "Route, zone and movement exceptions",
      "ERP / TMS integration",
    ],
  },
  {
    slug: "pharmaceuticals-chemicals",
    number: "02",
    name: "Pharmaceuticals & Chemicals",
    headline: "Protect sensitive movement with traceable context.",
    lede:
      "Connect location, access, tamper and application-specific sensor events around the handling workflows that require tighter operational control.",
    priorities: [
      "Movement and route visibility",
      "Access and tamper context",
      "Temperature and application-specific sensing",
      "Traceable event history",
    ],
  },
  {
    slug: "construction",
    number: "03",
    name: "Construction",
    headline: "See vehicles and assets across changing sites.",
    lede:
      "Track mobile equipment, vehicles and site movement around changing work zones, operating boundaries and field conditions.",
    priorities: [
      "Vehicle and asset location",
      "Site and project geofences",
      "Movement and exception alerts",
      "Field-ready deployment evaluation",
    ],
  },
  {
    slug: "mining",
    number: "04",
    name: "Mining",
    headline: "Keep field visibility working in demanding conditions.",
    lede:
      "Build connected tracking and monitoring around weak signal, power variation, dust, vibration and the operating realities of remote sites.",
    priorities: [
      "Continuous device reporting",
      "Offline data retention",
      "Wide-voltage field compatibility",
      "Device and connectivity health",
    ],
  },
  {
    slug: "fmcg",
    number: "05",
    name: "FMCG",
    headline: "Keep distribution movement and exceptions connected.",
    lede:
      "Connect fleet movement, route activity and cargo-security context across high-frequency distribution operations without adding another isolated system.",
    priorities: [
      "Distribution fleet visibility",
      "Route and zone exceptions",
      "Cargo-security context",
      "Operational system integration",
    ],
  },
  {
    slug: "data-centres",
    number: "06",
    name: "Data Centres",
    headline: "Connect physical access events to the operating view.",
    lede:
      "Bring lock state, access events and exceptions into a connected workflow around controlled infrastructure and response requirements.",
    priorities: [
      "Connected lock-state visibility",
      "Access and exception alerts",
      "Event and location context",
      "Deployment-specific integration",
    ],
  },
  {
    slug: "schools-universities",
    number: "07",
    name: "Schools & Universities",
    headline: "Make transport visibility clear and accountable.",
    lede:
      "Connect vehicle location, route movement and zone exceptions around the institution’s day-to-day transport operation.",
    priorities: [
      "Vehicle location visibility",
      "Route and zone monitoring",
      "Exception-led alerts",
      "Operations-team access",
    ],
  },
  {
    slug: "smart-infrastructure",
    number: "08",
    name: "Smart Infrastructure",
    headline: "Connect field events into one operating system.",
    lede:
      "Combine connected locks, sensors and platform visibility around infrastructure workflows so exceptions can be seen and acted on in context.",
    priorities: [
      "Lock and sensor events",
      "Connected platform visibility",
      "Exception response workflows",
      "Application-specific integration",
    ],
  },
];

/* =========================================================
   SOLUTION SECTION
========================================================= */

export function SolutionSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeSolution = homeSolutions[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === homeSolutions.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? homeSolutions.length - 1 : current - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="solutions"
      className="relative overflow-hidden border-t border-line bg-paper"
    >
      <SolutionsEcosystemBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-6 border-b border-line pb-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-signal-dark" />
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Solutions
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-4xl lg:text-[50px]">
              Solutions for connected operations
            </h2>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5">
            <div className="space-y-3">
              {homeSolutions.map((solution, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={solution.slug}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`
                      group relative block w-full overflow-hidden rounded-xl
                      border text-left outline-none transition-all duration-300
                      focus-visible:ring-2 focus-visible:ring-signal-dark/30
                      focus-visible:ring-offset-2
                      ${
                        isActive
                          ? "border-signal-dark/25 bg-white shadow-[0_12px_35px_rgba(8,27,36,0.07)]"
                          : "border-ink/[0.08] bg-white/45 hover:border-ink/[0.14] hover:bg-white/80 hover:shadow-[0_10px_28px_rgba(8,27,36,0.045)]"
                      }
                    `}
                  >
                    <motion.span
                      initial={false}
                      animate={{
                        scaleY: isActive ? 1 : 0.25,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="absolute bottom-3 left-0 top-3 w-[3px] origin-center rounded-r-full bg-signal-dark"
                    />

                    <div className="flex min-h-[84px] items-center gap-4 px-5 py-5 sm:gap-5 sm:px-6">
                      <div
                        className={`
                          flex h-8 w-8 shrink-0 items-center justify-center
                          rounded-lg border font-mono text-[9px]
                          font-semibold tracking-[0.12em] transition-all duration-300
                          ${
                            isActive
                              ? "border-signal-dark/20 bg-signal-dark/[0.07] text-signal-dark"
                              : "border-ink/[0.08] bg-white/60 text-muted group-hover:border-ink/[0.12]"
                          }
                        `}
                      >
                        {solution.number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3
                          className={`
                            font-heading text-lg font-semibold
                            tracking-[-0.025em] transition-colors duration-300
                            sm:text-xl
                            ${
                              isActive
                                ? "text-ink"
                                : "text-ink/60 group-hover:text-ink"
                            }
                          `}
                        >
                          {solution.name}
                        </h3>
                      </div>

                      <motion.span
                        initial={false}
                        animate={{
                          x: isActive ? 2 : 0,
                          rotate: isActive ? 0 : -45,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className={`
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-lg border transition-all duration-300
                          ${
                            isActive
                              ? "border-signal-dark bg-signal-dark text-white shadow-[0_6px_18px_rgba(0,124,103,0.18)]"
                              : "border-ink/[0.10] bg-white/70 text-muted group-hover:border-signal-dark/30 group-hover:bg-white group-hover:text-signal-dark"
                          }
                        `}
                      >
                        <ArrowIcon
                          className={`h-2.5 w-2.5 ${
                            isActive ? "!text-white" : ""
                          }`}
                        />
                      </motion.span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between px-1">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                Solution portfolio
              </span>

              <span className="rounded-md bg-signal-dark/[0.07] px-2.5 py-1 font-mono text-[9px] font-semibold tracking-[0.12em] text-signal-dark">
                08
              </span>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.slug}
                initial={{ opacity: 0, y: 12, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.995 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative overflow-hidden rounded-2xl border border-ink/10 bg-ink shadow-[0_20px_55px_rgba(8,27,36,0.11)]"
              >
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl sm:min-h-[470px]">
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(255,255,255,0.18) 1px,
                          transparent 1px
                        ),
                        linear-gradient(
                          90deg,
                          rgba(255,255,255,0.18) 1px,
                          transparent 1px
                        )
                      `,
                      backgroundSize: "56px 56px",
                    }}
                  />

                  <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.035] blur-[90px]" />

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 55,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-28 -top-28 h-[430px] w-[430px] rounded-full border border-white/[0.08]"
                  />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 38,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-5 top-5 h-[300px] w-[300px] rounded-full border border-signal/[0.12]"
                  />

                  <svg
                    viewBox="0 0 900 500"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                    aria-hidden="true"
                  >
                    <motion.path
                      d="M-80 360 C160 160 290 420 470 245 S720 80 980 190"
                      stroke="rgba(39,213,155,0.45)"
                      strokeWidth="1"
                      strokeDasharray="3 14"
                      animate={{ strokeDashoffset: [0, -180] }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <path
                      d="M-60 390 C180 190 310 430 490 260 S750 110 980 210"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                    />
                  </svg>

                  <motion.span
                    animate={{
                      x: [0, 130, 280],
                      y: [0, -18, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-[18%] top-[58%] h-1.5 w-1.5 rounded-full bg-signal"
                  />

                  <motion.span
                    animate={{
                      x: [0, -100, -220],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 6,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[20%] top-[30%] h-1.5 w-1.5 rounded-full bg-signal"
                  />

                  <span className="absolute left-5 top-5 h-5 w-5 rounded-tl-md border-l border-t border-white/25" />
                  <span className="absolute right-5 top-5 h-5 w-5 rounded-tr-md border-r border-t border-white/25" />
                  <span className="absolute bottom-5 left-5 h-5 w-5 rounded-bl-md border-b border-l border-white/25" />
                  <span className="absolute bottom-5 right-5 h-5 w-5 rounded-br-md border-b border-r border-white/25" />

                  <div className="absolute inset-0 flex items-center justify-center px-6 text-center sm:px-8">
                    <div className="relative z-10 max-w-2xl">
                      <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-7 bg-signal" />
                        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal">
                          Solution {activeSolution.number}
                        </span>
                        <span className="h-px w-7 bg-signal" />
                      </div>

                      <h3 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                        {activeSolution.name}
                      </h3>

                      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/70 sm:text-[15px]">
                        {activeSolution.headline}
                      </p>

                      <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-white/45">
                        {activeSolution.lede}
                      </p>

                      <div className="mx-auto mt-5 flex max-w-2xl flex-wrap justify-center gap-2">
                        {activeSolution.priorities.map((priority) => (
                          <span
                            key={priority}
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] leading-4 text-white/55"
                          >
                            {priority}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={`/solutions/${activeSolution.slug}`}
                        className="
                          group mt-7 inline-flex h-11 items-center gap-3
                          rounded-lg bg-signal px-5
                          text-[10px] font-bold uppercase tracking-[0.1em]
                          !text-ink shadow-[0_10px_28px_rgba(39,213,155,0.14)]
                          transition-all duration-300
                          hover:-translate-y-0.5 hover:bg-white
                          hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]
                        "
                      >
                        <span className="!text-ink">Explore solution</span>

                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink/10 text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-white">
                          <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:!text-white" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="absolute left-5 top-5">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/40">
                      VIoT / Solutions
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/40">
                      Connected operations
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                Eight operating environments · one connected platform
              </span>

              <Link
                href="/contact"
                className="
                  group inline-flex w-fit items-center gap-3
                  rounded-lg border border-ink bg-ink
                  px-5 py-3 text-[10px] font-semibold uppercase
                  tracking-[0.08em] !text-white
                  shadow-[0_8px_24px_rgba(8,27,36,0.09)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:border-signal-dark
                  hover:bg-signal-dark hover:!text-white
                  hover:shadow-[0_12px_30px_rgba(0,124,103,0.14)]
                "
              >
                <span className="!text-white">Talk to our team</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15 bg-white/[0.05]">
                  <ArrowIcon className="h-2.5 w-2.5 !text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
