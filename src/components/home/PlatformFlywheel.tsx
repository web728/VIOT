"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";
import Image from "next/image";

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

/* EXACTLY 3 SECONDS */
const STEP_DURATION = 3000;

const SIZE = 400;
const CENTER = SIZE / 2;
const RADIUS = 135;
const GAP = 20;

const toRad = (deg: number) => (deg * Math.PI) / 180;

const getPoint = (angle: number, radius = RADIUS) => ({
  x: CENTER + radius * Math.cos(toRad(angle)),
  y: CENTER + radius * Math.sin(toRad(angle)),
});

function createArc(startAngle: number) {
  const start = startAngle + GAP;
  const end = startAngle + 90 - GAP;

  const startPoint = getPoint(start);
  const endPoint = getPoint(end);

  const arc = `
    M ${startPoint.x} ${startPoint.y}
    A ${RADIUS} ${RADIUS} 0 0 1
    ${endPoint.x} ${endPoint.y}
  `;

  const tangentX = -Math.sin(toRad(end));
  const tangentY = Math.cos(toRad(end));

  const backX = -tangentX;
  const backY = -tangentY;

  const arrowLength = 10;

  const wing = (angle: number) => {
    const cos = Math.cos(toRad(angle));
    const sin = Math.sin(toRad(angle));

    return {
      x:
        endPoint.x +
        arrowLength * (backX * cos - backY * sin),
      y:
        endPoint.y +
        arrowLength * (backX * sin + backY * cos),
    };
  };

  const wingOne = wing(28);
  const wingTwo = wing(-28);

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

export function PlatformFlywheel() {
  const [active, setActive] = useState(0);

  /*
   * ================================================================
   * 100% RELIABLE AUTO ROTATION
   * ================================================================
   *
   * 0 → 1 → 2 → 3 → 0 → 1...
   *
   * Every 3000ms.
   *
   * No useReducedMotion()
   * No dependency on Framer Motion
   * No animateMotion
   * No recursive timeout
   */
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
      {/* ============================================================
          BACKGROUND TECHNICAL ANIMATION
          ============================================================ */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 w-[1000px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.11]">
          <svg
            viewBox="0 0 1000 650"
            className="h-auto w-full"
            fill="none"
          >
            {/* Flow path 1 */}
            <motion.path
              d="M20 470 C160 170 280 550 470 300 C650 65 760 520 980 170"
              stroke="#27d59b"
              strokeWidth="1"
              strokeDasharray="3 12"
              animate={{
                strokeDashoffset: [0, -180],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Flow path 2 */}
            <motion.path
              d="M10 180 C190 470 320 80 510 350 C690 600 820 160 990 400"
              stroke="#081b24"
              strokeWidth="1"
              strokeDasharray="2 14"
              animate={{
                strokeDashoffset: [0, 180],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Rotating technical ring */}
            <motion.circle
              cx="500"
              cy="325"
              r="190"
              stroke="#081b24"
              strokeWidth="1"
              strokeDasharray="2 12"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "500px 325px",
              }}
            />

            {/* Second ring */}
            <motion.circle
              cx="500"
              cy="325"
              r="245"
              stroke="#27d59b"
              strokeWidth="0.8"
              strokeDasharray="1 18"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 42,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                transformOrigin: "500px 325px",
              }}
            />

            {/* Moving signal */}
            <motion.circle
              r="3"
              fill="#27d59b"
              animate={{
                cx: [20, 180, 470, 700, 980],
                cy: [470, 300, 300, 200, 170],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.circle
              r="2.5"
              fill="#27d59b"
              animate={{
                cx: [10, 200, 510, 760, 990],
                cy: [180, 420, 350, 250, 400],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
          </svg>
        </div>

        {/* Keep content readable */}
        <div className="absolute inset-0 bg-white/80" />

        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/[0.035] blur-[110px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(255,255,255,0.95)_85%)]" />
      </div>

      {/* ============================================================
          CONTENT
          ============================================================ */}

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
        {/* ============================================================
            LEFT CONTENT
            ============================================================ */}

        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-signal-dark" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal-dark">
              How the platform works
            </span>
          </div>

          <h2 className="font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-ink sm:text-5xl">
            Capture. Deliver.
            <br />
            Read. Act.
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            A single, unbroken path from connected hardware to the teams
            who run the operation.
          </p>

          {/* Active description */}
          <div className="relative mt-8 min-h-[132px] max-w-md border-l-2 border-signal pl-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.number}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal-dark">
                  {currentStep.number} / {currentStep.title}
                </p>

                <p className="mt-2 text-sm leading-6 text-ink">
                  {currentStep.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* 3 second progress line */}
            <motion.div
              key={`progress-${active}`}
              className="absolute bottom-0 left-5 h-[2px] bg-signal"
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 3,
                ease: "linear",
              }}
            />
          </div>

          <Link
            href="/platform"
            className="group mt-8 inline-flex h-12 items-center gap-3 bg-signal px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-ink transition-all duration-300 hover:bg-ink hover:text-white"
          >
            <span>Explore platform</span>

            <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ============================================================
            RIGHT FLYWHEEL
            ============================================================ */}

        <div className="relative mx-auto aspect-square w-full max-w-[460px]">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-[7%] rounded-full border border-ink/[0.07]"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Inner rotating ring */}
          <motion.div
            className="absolute inset-[14%] rounded-full border border-signal/[0.12]"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* ========================================================
              FLYWHEEL SVG
              ======================================================== */}

          <svg
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            {arcs.map((arc, index) => {
              const isActive = index === active;

              return (
                <g key={steps[index].number}>
                  {/* Base arc */}
                  <path
                    d={arc.arc}
                    stroke="rgba(8,27,36,0.13)"
                    strokeWidth="1.5"
                  />

                  {/* Arrow */}
                  <motion.path
                    d={arc.arrow}
                    stroke={isActive ? "#27d59b" : "rgba(8,27,36,0.28)"}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    animate={{
                      opacity: isActive ? 1 : 0.65,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  />

                  {/* Active flowing arc */}
                  {isActive && (
                    <motion.path
                      key={`active-${active}`}
                      d={arc.arc}
                      stroke="#27d59b"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                        opacity: 0.4,
                      }}
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* ========================================================
              CENTER
              ======================================================== */}

<motion.div
  className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
  animate={{
    boxShadow: [
      "0 0 0 7px rgba(39,213,155,0.05)",
      "0 0 0 14px rgba(39,213,155,0.10)",
      "0 0 0 7px rgba(39,213,155,0.05)",
    ],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/logo/logo.png"
    alt="VIoT"
    width={120}
    height={120}
    className="h-24 w-24 object-contain"
  />
</motion.div>

          {/* ========================================================
              FOUR POINTS
              ======================================================== */}

          {steps.map((step, index) => {
            const position = getPoint(step.angle);
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
                    scale: isActive ? 1.08 : 1,
                    y: isActive ? -2 : 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className={`
                    relative flex items-center gap-2 rounded-full border
                    px-3.5 py-2.5 sm:px-4
                    ${
                      isActive
                        ? "border-signal bg-white text-ink shadow-[0_0_0_6px_rgba(39,213,155,0.10),0_12px_30px_rgba(8,27,36,0.08)]"
                        : "border-ink/10 bg-white text-ink/40"
                    }
                  `}
                >
                  {/* Active pulse */}
                  {isActive && (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-signal"
                      animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.45, 0, 0.45],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}

                  {/* Dot */}
                  <span
                    className={`
                      relative h-2 w-2 rounded-full transition-all
                      ${
                        isActive
                          ? "bg-signal shadow-[0_0_10px_rgba(39,213,155,0.65)]"
                          : "bg-ink/15"
                      }
                    `}
                  />

                  {/* Number */}
                  <span className="hidden font-mono text-[10px] tracking-[0.14em] sm:inline">
                    {step.number}
                  </span>

                  {/* Title */}
                  <span className="font-heading text-sm font-semibold">
                    {step.title}
                  </span>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}