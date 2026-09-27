"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    number: "01",
    title: "Satellite",
    caption: "POSITION",
    type: "satellite",
  },
  {
    number: "02",
    title: "Device",
    caption: "CAPTURE",
    type: "device",
  },
  {
    number: "03",
    title: "Network",
    caption: "TRANSFER",
    type: "network",
  },
  {
    number: "04",
    title: "VIoT Platform",
    caption: "INTERPRET",
    type: "platform",
  },
  {
    number: "05",
    title: "Action",
    caption: "RESPOND",
    type: "action",
  },
];

function NodeGraphic({ type }: { type: string }) {
  if (type === "satellite") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="18"
          y="18"
          width="12"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M15 15L8 8M33 15L40 8M15 33L8 40M33 33L40 40"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M5 5H13V13M35 5H43V13M5 35V43H13M35 43H43V35"
          stroke="currentColor"
          strokeWidth="1.3"
        />
      </svg>
    );
  }

  if (type === "device") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="11"
          y="10"
          width="26"
          height="28"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <rect
          x="17"
          y="16"
          width="14"
          height="9"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="20" cy="31" r="1.5" fill="currentColor" />
        <circle cx="28" cy="31" r="1.5" fill="currentColor" />
        <path
          d="M20 20H28M24 25V28"
          stroke="currentColor"
          strokeWidth="1.1"
        />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <circle
          cx="24"
          cy="24"
          r="3"
          fill="currentColor"
        />
        <path
          d="M17 17C13.2 20.8 13.2 27.2 17 31M31 17C34.8 20.8 34.8 27.2 31 31"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M12 12C5.5 18.6 5.5 29.4 12 36M36 12C42.5 18.6 42.5 29.4 36 36"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "platform") {
    return (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="10"
          width="32"
          height="27"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M8 17H40"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="13" cy="13.5" r="1" fill="currentColor" />
        <circle cx="17" cy="13.5" r="1" fill="currentColor" />
        <path
          d="M14 30L19 25L23 28L30 20L35 24"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path
        d="M10 35L19 26L25 30L38 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 16H38V24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="10"
        cy="35"
        r="2"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

export function ServiceMapVisual() {
  return (
    <div className="relative">
      {/* Main data line */}
      <div className="absolute left-0 right-0 top-[82px] h-px bg-white/12" />

      {/* Moving signal */}
      <motion.div
        initial={{ left: "0%", opacity: 0 }}
        whileInView={{
          left: ["0%", "100%"],
          opacity: [0, 1, 1, 0],
        }}
        viewport={{ once: true }}
        transition={{
          duration: 3.2,
          delay: 0.4,
          ease: "linear",
        }}
        className="absolute top-[78px] z-30 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-signal shadow-[0_0_18px_rgba(39,213,155,0.9)]"
      />

      <div className="grid grid-cols-5">
        {nodes.map((node, index) => (
          <div
            key={node.number}
            className={`relative ${
              index === 0
                ? "text-left"
                : index === nodes.length - 1
                  ? "text-right"
                  : "text-center"
            }`}
          >
          

            {/* Meaningful SVG */}
            <div
              className={`relative z-10 mt-6 inline-flex h-[58px] w-[58px] items-center justify-center border bg-ink text-white/45 transition-all duration-300 ${
                index === 3
                  ? "border-signal/60 text-signal"
                  : "border-white/15"
              }`}
            >
              <NodeGraphic type={node.type} />

              {/* Active glow ring */}
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{
                  opacity: [0, 0.8, 0],
                  scale: [0.85, 1.25, 1.45],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.9 + index * 0.64,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute inset-[-7px] border border-signal/60"
              />

              {/* Active core */}
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: [0, 1, 0],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.9 + index * 0.64,
                  ease: "easeOut",
                }}
                className="pointer-events-none absolute inset-0 bg-signal/10"
              />
            </div>

            {/* Text */}
            <div
              className={`mt-5 ${
                index === 0
                  ? "text-left"
                  : index === nodes.length - 1
                    ? "text-right"
                    : "text-center"
              }`}
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-signal">
                {node.caption}
              </p>

              <h3 className="mt-2 font-heading text-sm font-medium text-white sm:text-base">
                {node.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom annotation */}
      <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
          Physical world
        </span>

        <span className="mx-6 hidden h-px flex-1 bg-white/10 sm:block" />

        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
          Operational intelligence
        </span>
      </div>
    </div>
  );
}