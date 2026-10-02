"use client";

import { motion } from "framer-motion";
import { DataFlowVisual } from "./DataFlowVisual";

const divisions = [
  {
    number: "01",
    title: "Fleet Intelligence",
    text: "Vehicles, journeys and driver activity.",
  },
  {
    number: "02",
    title: "Asset Intelligence",
    text: "Cargo, equipment and connected sensors.",
  },
  {
    number: "03",
    title: "Access Control",
    text: "Physical access and security events.",
  },
];

/* Same background animation as the Platform section */

function ServiceMapBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft atmosphere */}
      <div className="absolute -right-[18%] top-[4%] h-[600px] w-[600px] rounded-full bg-signal/[0.035] blur-3xl" />

      <div className="absolute -left-[20%] bottom-[5%] h-[500px] w-[500px] rounded-full bg-white/[0.018] blur-3xl" />

      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
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
      >
        <path
          d="M-120 190 C190 160 270 430 520 430 S900 150 1210 270 S1510 470 1720 390"
          stroke="rgba(255,255,255,0.065)"
          strokeWidth="1"
        />

        <motion.path
          d="M-120 720 C180 670 330 510 580 560 S930 790 1190 650 S1480 430 1730 500"
          stroke="rgba(39,213,155,0.11)"
          strokeWidth="1"
          strokeDasharray="3 18"
          animate={{ strokeDashoffset: [0, -220] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />

        <path
          d="M140 1040 C290 760 480 730 690 510 S1050 190 1460 -80"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />

        <motion.path
          d="M-80 550 C230 520 410 310 670 330 S1050 640 1700 310"
          stroke="rgba(39,213,155,0.12)"
          strokeWidth="1"
          strokeDasharray="2 22"
          animate={{ strokeDashoffset: [0, 180] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Moving signals */}
      <motion.span
        className="absolute left-[18%] top-[31%] h-1.5 w-1.5 bg-signal"
        animate={{ x: [0, 130, 260], opacity: [0, 0.8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="absolute left-[58%] top-[64%] h-1.5 w-1.5 bg-signal"
        animate={{ x: [0, -110, -220], opacity: [0, 0.75, 0] }}
        transition={{ duration: 6, delay: 1.2, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="absolute right-[17%] top-[28%] h-1 w-1 bg-signal"
        animate={{ y: [0, 70, 140], opacity: [0, 0.7, 0] }}
        transition={{ duration: 5.5, delay: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Large subtle rings */}
      <motion.div
        className="absolute right-[3%] top-[8%] h-[480px] w-[480px] rounded-full border border-white/[0.04]"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute right-[9%] top-[16%] h-[320px] w-[320px] rounded-full border border-signal/[0.055]"
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
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
          className="absolute h-1 w-1 bg-white/20"
          style={{ left, top }}
          animate={{ opacity: [0.08, 0.4, 0.08] }}
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

export function ServiceMapSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <ServiceMapBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Intro */}
        <div className="grid gap-7 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal">
              The connected layer
            </p>

            <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl lg:text-[52px]">
              Every signal has a journey.
              <br />
              <span className="text-white/40">VIoT makes it useful.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end lg:col-span-5"
          >
            <p className="max-w-md text-sm leading-6 text-white/50 sm:text-[15px] sm:leading-6">
              From the first signal received by a device to the information
              used by an operations team, VIoT connects the physical world
              with the decisions that follow.
            </p>
          </motion.div>
        </div>

        {/* Data-flow illustration */}
        <div className="mt-10 lg:mt-12">
          <DataFlowVisual />
        </div>

        {/* Divisions */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12">
          <div className="grid sm:grid-cols-3">
            {divisions.map((division, index) => (
              <motion.div
                key={division.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`py-4 sm:py-2 ${
                  index > 0
                    ? "border-t border-white/10 sm:border-l sm:border-t-0 sm:pl-7"
                    : ""
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[9px] text-white/25">
                    {division.number}
                  </span>

                  <h3 className="font-heading text-sm font-medium text-white">
                    {division.title}
                  </h3>
                </div>

                <p className="mt-1.5 pl-7 text-xs text-white/40">
                  {division.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}