"use client";

import { motion } from "framer-motion";

const nodes = [
  {
    number: "01",
    title: "Satellite",
    caption: "Position",
    description: "Signal begins in the physical world.",
    type: "satellite",
  },
  {
    number: "02",
    title: "GPS Device",
    caption: "Capture",
    description: "Connected hardware captures movement and telemetry.",
    type: "device",
  },
  {
    number: "03",
    title: "Network",
    caption: "Transfer",
    description: "The data moves securely to the platform.",
    type: "network",
  },
  {
    number: "04",
    title: "VIoT Platform",
    caption: "Interpret",
    description: "Signals become useful operational information.",
    type: "platform",
  },
  {
    number: "05",
    title: "Action",
    caption: "Respond",
    description: "Teams use the information to make decisions.",
    type: "action",
  },
];

function NodeGraphic({ type }: { type: string }) {
  const common = {
    className: "h-5 w-5",
    stroke: "currentColor",
    strokeWidth: 1.4,
    fill: "none",
  };

  if (type === "satellite") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <rect x="18" y="18" width="12" height="12" rx="1" />
        <path d="M15 15L8 8M33 15L40 8M15 33L8 40M33 33L40 40" />
        <path d="M5 5H13V13M35 5H43V13M5 35V43H13M35 43H43V35" />
      </svg>
    );
  }

  if (type === "device") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <rect x="11" y="10" width="26" height="28" rx="2" />
        <rect x="17" y="16" width="14" height="9" rx="1" />
        <circle cx="20" cy="31" r="1.5" fill="currentColor" />
        <circle cx="28" cy="31" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M17 17C13.2 20.8 13.2 27.2 17 31" />
        <path d="M31 17C34.8 20.8 34.8 27.2 31 31" />
        <path d="M12 12C5.5 18.6 5.5 29.4 12 36" />
        <path d="M36 12C42.5 18.6 42.5 29.4 36 36" />
      </svg>
    );
  }

  if (type === "platform") {
    return (
      <svg viewBox="0 0 48 48" {...common}>
        <rect x="8" y="10" width="32" height="27" rx="2" />
        <path d="M8 17H40" />
        <path d="M14 30L19 25L23 28L30 20L35 24" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" {...common}>
      <path d="M10 35L19 26L25 30L38 16" />
      <path d="M30 16H38V24" />
      <circle cx="10" cy="35" r="2" />
    </svg>
  );
}

export function ServiceMapMobile() {
  return (
    <div className="relative">
      {/* Vertical data path */}
      <div className="absolute bottom-9 left-[20px] top-9 w-px bg-white/10" />

      <div>
        {nodes.map((node, index) => (
          <motion.div
            key={node.number}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.45,
              delay: index * 0.07,
            }}
            className="relative flex gap-5 py-5"
          >
            {/* Node */}
            <div
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border bg-ink ${
                index === 3
                  ? "border-signal/60 text-signal"
                  : "border-white/20 text-white/50"
              }`}
            >
              <NodeGraphic type={node.type} />

              {/* Node glow */}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{
                  opacity: [0, 0.7, 0],
                  scale: [0.8, 1.25, 1.45],
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: 0.7 + index * 0.5,
                }}
                className="pointer-events-none absolute inset-[-5px] border border-signal/50"
              />
            </div>

            {/* Content */}
            <div className="pt-0.5">
              <div className="flex items-center gap-2">
            

                <span className="h-px w-4 bg-white/15" />

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-signal">
                  {node.caption}
                </span>
              </div>

              <h3 className="mt-2 font-heading text-base font-medium text-white">
                {node.title}
              </h3>

              <p className="mt-1.5 max-w-sm text-xs leading-5 text-white/40">
                {node.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}