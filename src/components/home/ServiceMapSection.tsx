"use client";

import { motion } from "framer-motion";

import { ServiceMapVisual } from "./ServiceMapVisual";
import { ServiceMapMobile } from "./ServiceMapMobile";

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

export function ServiceMapSection() {
  return (
    <section className="overflow-hidden bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        {/* Intro */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
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

            <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl lg:text-[56px]">
              Every signal has a journey.
              <br />
              <span className="text-white/45">
                VIoT makes it useful.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end lg:col-span-5"
          >
            <p className="max-w-md text-sm leading-6 text-white/55 sm:text-base sm:leading-7">
              From the first signal received by a device to the information
              used by an operations team, VIoT connects the physical world
              with the decisions that follow.
            </p>
          </motion.div>
        </div>

        {/* Desktop visual */}
        <div className="mt-16 hidden lg:block lg:mt-20">
          <ServiceMapVisual />
        </div>

        {/* Mobile visual */}
        <div className="mt-12 lg:hidden">
          <ServiceMapMobile />
        </div>

        {/* Divisions */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20">
          <div className="grid sm:grid-cols-3">
            {divisions.map((division, index) => (
              <motion.div
                key={division.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`
                  py-5 sm:py-2
                  ${
                    index > 0
                      ? "border-t border-white/10 sm:border-l sm:border-t-0 sm:pl-7"
                      : ""
                  }
                `}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-[9px] text-white/25">
                    {division.number}
                  </span>

                  <h3 className="font-heading text-sm font-medium text-white">
                    {division.title}
                  </h3>
                </div>

                <p className="mt-2 pl-7 text-xs text-white/40">
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