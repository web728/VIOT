"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Capture",
    angle: -90,
    desc: "Connected hardware records location, vehicle status and security events at the source, exactly as they happen in the field.",
  },
  {
    number: "02",
    title: "Deliver",
    angle: 0,
    desc: "Every signal travels over resilient connectivity, with offline storage and automatic fallback so no data is lost when the network drops.",
  },
  {
    number: "03",
    title: "Read",
    angle: 90,
    desc: "Incoming data is brought together into a single, real-time view of the entire operation, with the context needed to understand it.",
  },
  {
    number: "04",
    title: "Act",
    angle: 180,
    desc: "Intelligent alerts and a complete event history help teams investigate quickly and decide with confidence.",
  },
];

const STEP_DURATION = 3000;

/* =========================================================
   FLYWHEEL GEOMETRY
========================================================= */

const SIZE = 400;
const CENTER = SIZE / 2;

/*
  Arc sits slightly inside the step pills.
  This prevents arrow heads from ever touching / entering
  the pills and keeps all four gaps visually identical.
*/
const ARC_RADIUS = 116;
const NODE_RADIUS = 148;

const ARC_START_GAP = 15;
const ARC_END_GAP = 21;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const getPoint = (angle: number, radius: number) => ({
  x: CENTER + radius * Math.cos(toRad(angle)),
  y: CENTER + radius * Math.sin(toRad(angle)),
});

function createArc(startAngle: number) {
  const start = startAngle + ARC_START_GAP;
  const end = startAngle + 90 - ARC_END_GAP;

  const startPoint = getPoint(start, ARC_RADIUS);
  const endPoint = getPoint(end, ARC_RADIUS);

  const arc = `
    M ${startPoint.x} ${startPoint.y}
    A ${ARC_RADIUS} ${ARC_RADIUS} 0 0 1
    ${endPoint.x} ${endPoint.y}
  `;

  /*
    Tangent direction at the end of clockwise SVG arc.
  */
  const tangentX = -Math.sin(toRad(end));
  const tangentY = Math.cos(toRad(end));

  const arrowLength = 8;
  const arrowSpread = 0.52;

  const baseX = endPoint.x - tangentX * arrowLength;
  const baseY = endPoint.y - tangentY * arrowLength;

  const normalX = -tangentY;
  const normalY = tangentX;

  const halfWidth = arrowLength * arrowSpread;

  const wingOne = {
    x: baseX + normalX * halfWidth,
    y: baseY + normalY * halfWidth,
  };

  const wingTwo = {
    x: baseX - normalX * halfWidth,
    y: baseY - normalY * halfWidth,
  };

  return {
    arc,
    arrow: `
      M ${wingOne.x} ${wingOne.y}
      L ${endPoint.x} ${endPoint.y}
      L ${wingTwo.x} ${wingTwo.y}
    `,
  };
}

const arcs = steps.map((step) => createArc(step.angle));

/* =========================================================
   SAME ECOSYSTEM BACKGROUND
   NO GRID
========================================================= */

function EcosystemBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Atmospheric depth */}
      <div className="absolute -left-48 top-[10%] h-[520px] w-[520px] rounded-full bg-signal-dark/[0.025] blur-3xl" />

      <div className="absolute -right-56 bottom-[4%] h-[650px] w-[650px] rounded-full bg-ink/[0.025] blur-3xl" />

      {/* Flowing ecosystem paths */}
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* Upper structural path */}
        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke="rgba(8,27,36,0.075)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{
            pathLength: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 2.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        />

        {/* Main animated green signal path */}
        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke="rgba(0,124,103,0.14)"
          strokeWidth="1.15"
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

        {/* Engineering path */}
        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke="rgba(8,27,36,0.05)"
          strokeWidth="1"
        />

        {/* Secondary animated flow */}
        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke="rgba(0,124,103,0.07)"
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

      {/* Large engineering rings */}
      <motion.div
        className="absolute right-[3%] top-[8%] h-[430px] w-[430px] rounded-full border border-ink/[0.04]"
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
        className="absolute right-[8%] top-[15%] h-[300px] w-[300px] rounded-full border border-signal-dark/[0.055]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute right-[16%] top-[24%] h-[150px] w-[150px] rounded-full border border-ink/[0.03]" />

      {/* Left ambient arc */}
      <div className="absolute -left-[180px] bottom-[12%] h-[460px] w-[460px] rounded-full border border-ink/[0.03]" />

      {/* Moving signals */}
      <motion.span
        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-signal-dark"
        animate={{
          x: [0, 90, 180],
          y: [0, 20, 0],
          opacity: [0, 0.65, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-signal-dark"
        animate={{
          x: [0, -70, -150],
          y: [0, -25, 0],
          opacity: [0, 0.65, 0],
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
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 5,
          delay: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient points */}
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
          style={{
            left,
            top,
          }}
          animate={{
            opacity: [0.08, 0.35, 0.08],
          }}
          transition={{
            duration: 3 + index * 0.25,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Very light readability wash */}
      <div className="absolute inset-0 bg-white/[0.24]" />
    </div>
  );
}

/* =========================================================
   PLATFORM FLYWHEEL
========================================================= */

export function PlatformFlywheel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, STEP_DURATION);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  const currentStep = steps[active];

  return (
    <section className="relative overflow-hidden border-t border-line bg-white">
      <EcosystemBackground />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12 lg:py-24">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-signal-dark" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal-dark">
              How the platform works
            </span>
          </div>

          <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.03] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[56px]">
            Capture. Deliver.
            <br />
            Read. Act.
          </h2>

          <p className="mt-6 max-w-md text-[15px] leading-7 text-muted sm:text-base">
            A single, unbroken path from connected hardware to the teams who
            run the operation.
          </p>

          {/* Active description */}
          <div className="relative mt-9 min-h-[138px] max-w-md border-l border-signal-dark/25 pl-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.number}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.32,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-signal-dark">
                    {currentStep.number}
                  </span>

                  <span className="h-px w-5 bg-signal-dark/30" />

                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-signal-dark">
                    {currentStep.title}
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-ink/80">
                  {currentStep.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Progress rail */}
            <div className="absolute bottom-0 left-6 h-px w-[calc(100%-1.5rem)] overflow-hidden bg-ink/[0.08]">
              <motion.div
                key={`progress-${active}`}
                className="h-full bg-signal-dark"
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: STEP_DURATION / 1000,
                  ease: "linear",
                }}
                style={{
                  transformOrigin: "left center",
                }}
              />
            </div>
          </div>

        <Link
  href="/platform"
className="group mt-9 inline-flex h-12 items-center gap-4 rounded-lg bg-ink px-6 text-[10px] font-bold uppercase tracking-[0.1em] !text-white transition-all duration-300 hover:bg-signal-dark hover:!text-white"
>
  <span className="!text-white">
    Explore platform
  </span>

 <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/20 text-white">
    <ArrowIcon className="h-2.5 w-2.5 !text-white transition-transform duration-300 group-hover:translate-x-0.5" />
  </span>
</Link>
        </div>

        {/* =====================================================
            RIGHT FLYWHEEL
        ===================================================== */}

        <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center py-4 sm:py-8">
          {/* Ambient glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.035] blur-[85px]" />

          <div className="relative aspect-square w-full max-w-[480px]">
            {/* Outer orbit */}
            <motion.div
              className="absolute inset-[8.5%] rounded-full border border-ink/[0.055]"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 55,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Middle orbit */}
            <motion.div
              className="absolute inset-[14.5%] rounded-full border border-signal-dark/[0.07]"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Inner orbit */}
            <div className="absolute inset-[25%] rounded-full border border-ink/[0.045]" />

            {/* -------------------------------------------------
                FLYWHEEL SVG
            ------------------------------------------------- */}

            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="absolute inset-0 h-full w-full overflow-visible"
              fill="none"
              aria-hidden="true"
            >
              {arcs.map((arc, index) => {
                const isActive = index === active;

                return (
                  <g key={steps[index].number}>
                    {/* Base route */}
                    <path
                      d={arc.arc}
                      stroke="rgba(8,27,36,0.14)"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                    />

                    {/* Inactive / active arrow */}
                    <motion.path
                      d={arc.arrow}
                      stroke={
                        isActive
                          ? "#27d59b"
                          : "rgba(8,27,36,0.28)"
                      }
                      strokeWidth={isActive ? 1.9 : 1.45}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{
                        opacity: isActive ? 1 : 0.7,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    />

                    {/* Active arc */}
                    {isActive && (
                      <motion.path
                        key={`active-arc-${active}`}
                        d={arc.arc}
                        stroke="#27d59b"
                        strokeWidth="2.6"
                        strokeLinecap="round"
                        initial={{
                          pathLength: 0,
                          opacity: 0.35,
                        }}
                        animate={{
                          pathLength: 1,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.75,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    )}
                  </g>
                );
              })}

              {/* Inner subtle technical ticks */}
              {Array.from({ length: 24 }).map((_, index) => {
                const angle = index * 15;
                const inner = getPoint(angle, 91);
                const outer = getPoint(
                  angle,
                  index % 3 === 0 ? 97 : 94
                );

                return (
                  <line
                    key={angle}
                    x1={inner.x}
                    y1={inner.y}
                    x2={outer.x}
                    y2={outer.y}
                    stroke={
                      index % 3 === 0
                        ? "rgba(0,124,103,0.16)"
                        : "rgba(8,27,36,0.07)"
                    }
                    strokeWidth="1"
                  />
                );
              })}
            </svg>

            {/* -------------------------------------------------
                CENTER
            ------------------------------------------------- */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="relative flex h-[92px] w-[92px] items-center justify-center rounded-full bg-white shadow-[0_14px_50px_rgba(8,27,36,0.08)] sm:h-[104px] sm:w-[104px]"
                animate={{
                  boxShadow: [
                    "0 14px 50px rgba(8,27,36,0.08), 0 0 0 0px rgba(39,213,155,0.04)",
                    "0 14px 50px rgba(8,27,36,0.08), 0 0 0 10px rgba(39,213,155,0.07)",
                    "0 14px 50px rgba(8,27,36,0.08), 0 0 0 0px rgba(39,213,155,0.04)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 rounded-full border border-ink/[0.075]" />

                <div className="absolute inset-[8px] rounded-full border border-signal-dark/[0.08]" />

                <Image
                  src="/logo/logo.png"
                  alt="VIoT"
                  width={120}
                  height={120}
                  className="relative z-10 h-[72px] w-[72px] object-contain sm:h-[82px] sm:w-[82px]"
                />
              </motion.div>
            </div>

            {/* -------------------------------------------------
                FOUR IDENTICAL STEP NODES
            ------------------------------------------------- */}

            {steps.map((step, index) => {
              const position = getPoint(step.angle, NODE_RADIUS);
              const isActive = active === index;

              return (
                <div
                  key={step.number}
                  style={{
                    left: `${(position.x / SIZE) * 100}%`,
                    top: `${(position.y / SIZE) * 100}%`,
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.045 : 1,
                    }}
                    transition={{
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`
                      relative flex h-10 w-[94px] items-center justify-center
                      gap-2 rounded-full border px-3
                      sm:h-11 sm:w-[112px] sm:px-4
                      ${
                        isActive
                          ? "border-signal-dark bg-white text-ink shadow-[0_10px_32px_rgba(8,27,36,0.10),0_0_0_5px_rgba(39,213,155,0.08)]"
                          : "border-ink/[0.10] bg-white/95 text-ink/55 shadow-[0_6px_20px_rgba(8,27,36,0.035)]"
                      }
                    `}
                  >
                    {/* Pulse */}
                    {isActive && (
                      <motion.span
                        className="pointer-events-none absolute inset-0 rounded-full border border-signal-dark/40"
                        initial={{
                          scale: 1,
                          opacity: 0.4,
                        }}
                        animate={{
                          scale: [1, 1.13],
                          opacity: [0.35, 0],
                        }}
                        transition={{
                          duration: 1.8,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    )}

                    {/* Status dot */}
                    <span
                      className={`
                        relative h-1.5 w-1.5 shrink-0 rounded-full
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-signal-dark shadow-[0_0_8px_rgba(39,213,155,0.75)]"
                            : "bg-ink/20"
                        }
                      `}
                    />

                    {/* Number */}
                    <span
                      className={`
                        hidden font-mono text-[8px] font-semibold
                        tracking-[0.12em] sm:inline
                        ${
                          isActive
                            ? "text-signal-dark"
                            : "text-ink/35"
                        }
                      `}
                    >
                      {step.number}
                    </span>

                    {/* Divider */}
                    <span className="hidden h-3 w-px bg-ink/10 sm:block" />

                    {/* Title */}
                    <span className="whitespace-nowrap font-heading text-[12px] font-semibold tracking-[-0.01em] sm:text-[13px]">
                      {step.title}
                    </span>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}