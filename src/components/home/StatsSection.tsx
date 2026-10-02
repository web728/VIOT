"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
        // Make sure final value is always exact
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

export function StatsSection() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`
                relative py-7 sm:py-8
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

                <span className="h-1 w-1 bg-signal" />
              </div>

              {/* Number */}
              <div className="flex items-baseline">
                <AnimatedCounter value={stat.number} />
              </div>

              {/* Label */}
              <p className="mt-3 max-w-[190px] text-[10px] font-medium uppercase leading-5 tracking-[0.13em] text-muted sm:text-[11px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

     
    </section>
  );
}