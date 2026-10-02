"use client";

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Metadata } from "next";

import { ArrowIcon } from "@/components/icons";
import { PlatformDataFlow } from "./_components/platform-data-flow";

/*
  NOTE:
  This page is intentionally client-side because the approved
  VIoT SVG background contains Framer Motion animation.
*/

/* ============================================================
   METADATA
============================================================ */

export const metadata: Metadata = {
  title: "VIoT Platform | Connected Intelligence",
  description:
    "One connected platform for vehicle, asset, security and sensor intelligence.",
  alternates: {
    canonical: "/platform",
  },
};

/* ============================================================
   EASING
============================================================ */

const ease = [0.16, 1, 0.3, 1] as const;

/* ============================================================
   APPROVED VIoT SVG BACKGROUND
============================================================ */

function VIoTSVGBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Atmospheric light */}
      <div className="absolute -right-[18%] top-[-12%] h-[620px] w-[620px] rounded-full bg-[#27d59b]/[0.035] blur-3xl" />

      <div className="absolute -left-[18%] bottom-[-20%] h-[520px] w-[520px] rounded-full bg-[#007c67]/[0.06] blur-3xl" />

      {/* Technical grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* ========================================================
          SYSTEM PATHS
      ======================================================== */}

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* Static system path */}
        <path
          d="M-120 190 C190 160 270 430 520 430 S900 150 1210 270 S1510 470 1720 390"
          stroke="rgba(255,255,255,0.055)"
          strokeWidth="1"
        />

        {/* Animated signal path */}
        <motion.path
          d="M-120 720 C180 670 330 510 580 560 S930 790 1190 650 S1480 430 1730 500"
          stroke="rgba(39,213,155,0.16)"
          strokeWidth="1"
          strokeDasharray="3 18"
          animate={{
            strokeDashoffset: [0, -220],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Secondary path */}
        <path
          d="M140 1040 C290 760 480 730 690 510 S1050 190 1460 -80"
          stroke="rgba(255,255,255,0.035)"
          strokeWidth="1"
        />

        {/* Second animated signal */}
        <motion.path
          d="M-80 550 C230 520 410 310 670 330 S1050 640 1700 310"
          stroke="rgba(39,213,155,0.12)"
          strokeWidth="1"
          strokeDasharray="2 22"
          animate={{
            strokeDashoffset: [0, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Third subtle path */}
        <path
          d="M-100 830 C260 760 380 820 620 680 S1020 420 1740 620"
          stroke="rgba(255,255,255,0.025)"
          strokeWidth="1"
        />
      </svg>

      {/* ========================================================
          MOVING SIGNALS
      ======================================================== */}

      <motion.span
        className="absolute left-[15%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, 140, 280],
          opacity: [0, 0.9, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute left-[55%] top-[65%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, -120, -240],
          opacity: [0, 0.75, 0],
        }}
        transition={{
          duration: 6,
          delay: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute right-[17%] top-[26%] h-1 w-1 rounded-full bg-[#27d59b]"
        animate={{
          y: [0, 80, 160],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ========================================================
          ROTATING TECHNICAL RINGS
      ======================================================== */}

      <motion.div
        className="absolute right-[2%] top-[5%] h-[560px] w-[560px] rounded-full border border-white/[0.045]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-[8%] top-[13%] h-[410px] w-[410px] rounded-full border border-[#27d59b]/[0.07]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-[15%] top-[21%] h-[270px] w-[270px] rounded-full border border-white/[0.05]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#27d59b]" />
      </motion.div>

      {/* ========================================================
          AMBIENT NODES
      ======================================================== */}

      {[
        ["12%", "22%"],
        ["27%", "69%"],
        ["42%", "16%"],
        ["55%", "81%"],
        ["72%", "24%"],
        ["86%", "69%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{ left, top }}
          animate={{
            opacity: [0.06, 0.35, 0.06],
          }}
          transition={{
            duration: 3 + index * 0.4,
            delay: index * 0.2,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   DATA
============================================================ */

const modules = [
  {
    id: "fleet-intelligence",
    number: "01",
    name: "Fleet Intelligence",
    copy: "Understand vehicle movement, trip activity and operational events through one connected view.",
  },
  {
    id: "energy-intelligence",
    number: "02",
    name: "Energy Intelligence",
    copy: "Bring vehicle, battery and charging information together for clearer EV operations.",
  },
  {
    id: "access-control",
    number: "03",
    name: "Access Control",
    copy: "Connect smart locking and access events with location, time and operational context.",
  },
  {
    id: "video-intelligence",
    number: "04",
    name: "Video Intelligence",
    copy: "Bring video events and vehicle context together to understand incidents faster.",
  },
  {
    id: "resource-intelligence",
    number: "05",
    name: "Resource Intelligence",
    copy: "Turn fuel, temperature, load and sensor signals into useful operational information.",
  },
];

const operatingSteps = [
  {
    number: "01",
    label: "Edge",
    title: "Capture",
    copy: "Devices and sensors capture movement, state and events from the physical world.",
  },
  {
    number: "02",
    label: "Network",
    title: "Deliver",
    copy: "Signals move securely through the network and remain available through interruptions.",
  },
  {
    number: "03",
    label: "Platform",
    title: "Understand",
    copy: "VIoT turns incoming signals into a connected picture of the operation.",
  },
  {
    number: "04",
    label: "Action",
    title: "Respond",
    copy: "Teams get the context needed to investigate, respond and decide.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Live visibility",
    copy: "See what is happening across connected vehicles, assets and locations.",
  },
  {
    number: "02",
    title: "Contextual alerts",
    copy: "Surface meaningful events with the context needed to understand them.",
  },
  {
    number: "03",
    title: "Operational analytics",
    copy: "Turn historical signals into useful patterns for operational decisions.",
  },
  {
    number: "04",
    title: "Event history",
    copy: "Trace activity over time to investigate incidents and changes.",
  },
  {
    number: "05",
    title: "Connected data",
    copy: "Bring trusted VIoT data into the systems your teams already use.",
  },
  {
    number: "06",
    title: "API access",
    copy: "Extend connected data into ERP, TMS and other business workflows.",
  },
];

/* ============================================================
   PAGE
============================================================ */

export default function PlatformPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#081b24] text-white lg:min-h-[760px]">
        <VIoTSVGBackground />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1440px] flex-col px-6 pb-8 pt-8 sm:px-8 lg:min-h-[760px] lg:px-12 lg:pt-10">
          {/* top line */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#27d59b]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                VIoT Platform
              </span>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 sm:block">
              Connected intelligence
            </span>
          </div>

          {/* main hero */}
          <div className="flex flex-1 items-center py-20 lg:py-24">
            <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12 lg:gap-12">
              {/* heading */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 28,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  ease,
                }}
                className="relative z-20 lg:col-span-8"
              >
                <h1 className="max-w-5xl font-heading text-[clamp(3.5rem,7vw,7.4rem)] font-semibold leading-[0.86] tracking-[-0.07em] text-white">
                  One connected
                  <br />
                  <span className="font-normal text-[#27d59b]">
                    layer for the operation.
                  </span>
                </h1>

                <p className="mt-9 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
                  From connected hardware to clear operational decisions.
                </p>
              </motion.div>

              {/* technical visual */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.1,
                  delay: 0.15,
                  ease,
                }}
                className="relative hidden h-[360px] lg:col-span-4 lg:block"
              >
                <div className="absolute right-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2">
                  {/* outer */}
                  <div className="absolute inset-0 rounded-full border border-white/[0.07]" />

                  {/* inner */}
                  <div className="absolute inset-8 rounded-full border border-[#27d59b]/[0.12]" />

                  <div className="absolute inset-16 rounded-full border border-white/[0.05]" />

                  {/* crosshair */}
                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.05]" />

                  <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.05]" />

                  {/* rotating marker */}
                  <motion.div
                    className="absolute inset-5"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#27d59b]" />
                  </motion.div>

                  {/* center */}
                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#27d59b]/30 bg-[#081b24]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27d59b]" />
                  </div>

                  {/* nodes */}
                  <span className="absolute -right-1 top-[22%] h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                  <span className="absolute -bottom-1 left-[34%] h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                  <span className="absolute bottom-[18%] right-[12%] h-1 w-1 rounded-full bg-white/50" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* bottom signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="flex items-center justify-between border-t border-white/[0.1] pt-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-[#27d59b]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                Hardware · Data · Intelligence
              </span>
            </div>

            <ArrowIcon className="h-3.5 w-3.5 text-[#27d59b]" />
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          DATA FLOW
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27d59b]">
                  Data flow
                </span>
              </div>

              <h2 className="max-w-4xl font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-5xl lg:text-[60px]">
                From physical signals
                <br />
                <span className="font-normal text-[#27d59b]">
                  to useful action.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/50 lg:ml-auto lg:text-right">
                Hardware captures the signal. The platform connects the data,
                adds context and makes it useful.
              </p>
            </div>
          </div>

          <div className="pt-10">
            <PlatformDataFlow />
          </div>
        </div>
      </section>

      {/* ========================================================
          PLATFORM LAYERS
      ======================================================== */}

      <section className="bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#007c67]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  Platform
                </span>
              </div>

              <h2 className="max-w-5xl font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#081b24] sm:text-5xl lg:text-[62px]">
                Five intelligence layers.
                <br />
                <span className="font-normal text-[#007c67]">
                  One connected operation.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#081b24]/60 lg:ml-auto lg:text-right">
                Connect vehicles, assets, security and sensor data through one
                operating layer.
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-[#007c67]/15">
            {modules.map((module) => (
              <Link
                key={module.id}
                href={`/contact?interest=${module.id}`}
                className="group relative grid grid-cols-1 gap-7 border-b border-[#007c67]/10 py-9 transition-all duration-500 hover:bg-[#27d59b]/[0.035] sm:grid-cols-12 sm:items-center sm:gap-8 sm:py-11"
              >
                <span className="absolute left-0 top-0 h-0 w-[2px] bg-[#27d59b] transition-all duration-500 group-hover:h-full" />

                <div className="sm:col-span-1">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#007c67]">
                    {module.number}
                  </span>
                </div>

                <div className="sm:col-span-5">
                  <h3 className="font-heading text-2xl font-semibold tracking-[-0.04em] text-[#081b24] transition-transform duration-500 group-hover:translate-x-1 sm:text-[30px]">
                    {module.name}
                  </h3>
                </div>

                <div className="sm:col-span-5">
                  <p className="max-w-xl text-sm leading-7 text-[#081b24]/60">
                    {module.copy}
                  </p>
                </div>

                <div className="sm:col-span-1 sm:flex sm:justify-end">
                  <span className="flex h-10 w-10 items-center justify-center border border-[#007c67]/20 text-[#007c67] transition-all duration-300 group-hover:border-[#27d59b] group-hover:bg-[#27d59b] group-hover:text-[#081b24]">
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          OPERATING LOOP
      ======================================================== */}

      <section className="relative overflow-hidden bg-[#06171f] text-white">
        <div
          aria-hidden="true"
          className="absolute right-[-12%] top-[-10%] h-[650px] w-[650px] rounded-full border border-[#27d59b]/[0.04]"
        />

        <div className="relative mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                  Operating loop
                </span>
              </div>

              <h2 className="font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-5xl lg:text-[60px]">
                Capture.
                <span className="text-white/25"> Deliver.</span>
                <br />
                Understand.
                <span className="text-[#27d59b]"> Respond.</span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/45 lg:ml-auto lg:text-right">
                A continuous path from the physical world to the people making
                operational decisions.
              </p>
            </div>
          </div>

          <div className="relative mt-16 lg:mt-24">
            <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-white/[0.1] lg:block" />

            <div className="absolute left-0 top-[42px] hidden h-px w-[72%] bg-[#27d59b]/50 lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-4">
              {operatingSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease,
                  }}
                  className={`group relative min-h-[280px] py-10 lg:px-8 lg:py-0 ${
                    index !== 0
                      ? "border-t border-white/[0.1] lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                        {step.number} / {step.label}
                      </span>

                      <span className="h-2 w-2 rounded-full border border-[#27d59b] bg-[#06171f] transition-colors duration-300 group-hover:bg-[#27d59b]" />
                    </div>

                    <div className="mt-14">
                      <h3 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-white transition-colors duration-300 group-hover:text-[#27d59b] sm:text-4xl">
                        {step.title}
                      </h3>

                      <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CAPABILITIES
      ======================================================== */}

      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-[#007c67]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  Capabilities
                </span>
              </div>

              <h2 className="max-w-4xl font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.055em] text-[#081b24] sm:text-5xl lg:text-[60px]">
                Information that
                <br />
                <span className="font-normal text-[#007c67]">
                  helps teams act.
                </span>
              </h2>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 border-t border-[#007c67]/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group min-h-[210px] border-b border-[#007c67]/10 p-7 transition-colors duration-500 hover:bg-[#27d59b]/[0.035] sm:p-8 lg:min-h-[230px] lg:p-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#007c67]">
                    {item.number}
                  </span>

                  <span className="h-1.5 w-1.5 bg-[#27d59b] opacity-60 transition-opacity group-hover:opacity-100" />
                </div>

                <h3 className="mt-12 font-heading text-xl font-semibold tracking-[-0.03em] text-[#081b24] transition-colors duration-300 group-hover:text-[#007c67] sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-[#081b24]/55">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
      ======================================================== */}

      <section className="bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="flex flex-col gap-10 border-t border-white/10 pt-12 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                VIoT Platform
              </span>

              <h2 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-5xl lg:text-[60px]">
                One connected view.
                <br />
                <span className="font-normal text-white/45">
                  Built around your operation.
                </span>
              </h2>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 shrink-0 items-center justify-between gap-8 border border-[#27d59b] bg-[#27d59b] px-6 text-sm font-semibold text-[#081b24] transition-all duration-300 hover:border-white hover:bg-white sm:min-w-[190px]"
            >
              <span>Talk to VIoT</span>

              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}