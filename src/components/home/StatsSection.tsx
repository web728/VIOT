"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ------------------------------------------------------------------
   BACKGROUND ANIMATION
   Same visual language as ServiceMapSection
------------------------------------------------------------------- */

function StatsBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft atmosphere */}
<div className="absolute -right-[18%] top-[4%] h-[600px] w-[600px] rounded-full bg-signal/[0.07] blur-3xl" />

<div className="absolute -left-[20%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-ink/[0.045] blur-3xl" />

      {/* Very subtle grid */}
    <div
  className="absolute inset-0 opacity-[0.025]"
  style={{
    backgroundImage: `
      linear-gradient(rgba(8,27,36,0.55) 1px, transparent 1px),
      linear-gradient(90deg, rgba(8,27,36,0.55) 1px, transparent 1px)
    `,
    backgroundSize: "90px 90px",
  }}
/>

      {/* System paths */}
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {/* Static path */}
     <path
  d="M-120 190 C190 160 270 430 520 430 S900 150 1210 270 S1510 470 1720 390"
  stroke="rgba(8,27,36,0.12)"
  strokeWidth="1"
/>

<motion.path
  d="M-120 720 C180 670 330 510 580 560 S930 790 1190 650 S1480 430 1730 500"
  stroke="rgba(39,213,155,0.28)"
  strokeWidth="1.2"
  strokeDasharray="3 18"
  animate={{ strokeDashoffset: [0, -220] }}
  transition={{
    duration: 16,
    repeat: Infinity,
    ease: "linear",
  }}
/>

<path
  d="M140 1040 C290 760 480 730 690 510 S1050 190 1460 -80"
  stroke="rgba(8,27,36,0.08)"
  strokeWidth="1"
/>

<motion.path
  d="M-80 550 C230 520 410 310 670 330 S1050 640 1700 310"
  stroke="rgba(39,213,155,0.30)"
  strokeWidth="1.2"
  strokeDasharray="2 22"
  animate={{ strokeDashoffset: [0, 180] }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "linear",
  }}
/>
      </svg>

      {/* Moving signals */}

      <motion.span
    className="absolute left-[18%] top-[31%] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{
          x: [0, 130, 260],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute left-[58%] top-[64%] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{
          x: [0, -110, -220],
          opacity: [0, 0.65, 0],
        }}
        transition={{
          duration: 6,
          delay: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute right-[17%] top-[28%] h-1 w-1 rounded-full bg-signal"
        animate={{
          y: [0, 70, 140],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Large subtle rings */}

      <motion.div
        className="absolute right-[3%] top-[8%] h-[480px] w-[480px] rounded-full border border-ink/[0.055]"
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
        className="absolute right-[9%] top-[16%] h-[320px] w-[320px] rounded-full border border-signal/[0.07]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient nodes */}

      {[
        ["12%", "22%"],
        ["29%", "68%"],
        ["43%", "17%"],
        ["55%", "82%"],
        ["71%", "24%"],
        ["85%", "70%"],
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
            duration: 3 + index * 0.35,
            delay: index * 0.25,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   COUNTER
------------------------------------------------------------------- */

interface CounterProps {
  value: string;
}

function AnimatedCounter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.25,
  });

  const numericPart =
    parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;

  const suffix = value.replace(/[0-9,]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || numericPart === 0) return;

    let startTime: number | null = null;
    let frameId: number;

    const duration = 1400;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * numericPart));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(numericPart);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [isInView, numericPart]);

  return (
    <span
      ref={ref}
      className="font-heading text-[34px] font-semibold leading-none tracking-[-0.04em] text-ink sm:text-[42px] lg:text-[48px]"
    >
      {numericPart > 0 ? count.toLocaleString() : value}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------
   STATS
------------------------------------------------------------------- */

const stats = [
  {
    number: "6",
    label: "Products",
  },
  {
    number: "8",
    label: "Solutions",
  },
  {
    number: "5,000+",
    label: "Devices deployed in India",
  },
  {
    number: "500+",
    label: "Devices deployed internationally",
  },
];

/* ------------------------------------------------------------------
   SECTION
------------------------------------------------------------------- */

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      {/* Background animation */}
      <StatsBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Section intro */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal-dark" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                At a glance
              </span>
            </div>

            <h2 className="max-w-xl font-heading text-2xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
              Built across vehicles, assets and access.
            </h2>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                relative min-w-0 py-7 sm:py-8
                ${
                  index % 2 !== 0
                    ? "border-l border-line pl-5 sm:pl-7"
                    : "pr-5 sm:pr-7"
                }
                ${
                  index >= 2
                    ? "border-t border-line lg:border-t-0"
                    : ""
                }
                ${
                  index > 0
                    ? "lg:border-l lg:border-line lg:pl-7"
                    : ""
                }
                ${
                  index === 0
                    ? "lg:pr-7"
                    : ""
                }
              `}
            >
              {/* Small index */}
              <div className="mb-5 flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-[0.16em] text-muted">
                  0{index + 1}
                </span>

                <span className="h-1 w-1 rounded-full bg-signal" />
              </div>

              {/* Number */}
              <div className="flex min-w-0 items-baseline">
                <AnimatedCounter value={stat.number} />
              </div>

              {/* Label */}
              <p className="mt-3 max-w-[190px] break-words text-[10px] font-medium uppercase leading-5 tracking-[0.13em] text-muted sm:text-[11px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}