"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

const platformModules = [
  {
    number: "01",
    title: "Fleet Management",
    tagline: "Live GPS, ignition & geofencing telemetry.",
    desc: "Real-time vehicle location, route history and geofencing for your entire fleet on one map. Ignition status and trip logs update instantly.",
    features: [
      "Live location & geofencing",
      "Route history & trip logs",
      "Ignition status monitoring",
      "Role-based team access",
    ],
    metric: "100% Active",
  },
  {
    number: "02",
    title: "EV Management",
    tagline: "Battery health & range telemetry.",
    desc: "Battery health, charging status and range telemetry for electric fleets, unified on the same dashboard as combustion vehicles.",
    features: [
      "Battery health monitoring",
      "Charging status & history",
      "Range telemetry",
      "Unified fleet view",
    ],
    metric: "98% Healthy",
  },
  {
    number: "03",
    title: "E-Lock Security",
    tagline: "Remote container lock & breach alerts.",
    desc: "Remote lock/unlock, tamper alerts and access logs for every E-Lock device in the field, tied directly to shipment records.",
    features: [
      "Remote lock / unlock",
      "Tamper & breach alerts",
      "Full access history",
      "Shipment record linking",
    ],
    metric: "Secured",
  },
  {
    number: "04",
    title: "Video Telematics",
    tagline: "AI dashcams & automated clip upload.",
    desc: "Live streaming on demand and event-triggered clip retrieval from every dashcam in the fleet, without manual SD-card pulls.",
    features: [
      "Live streaming on demand",
      "Event-triggered clip upload",
      "ADAS / DMS alert review",
      "Footage retention control",
    ],
    metric: "Streaming",
  },
  {
    number: "05",
    title: "Fuel Monitoring",
    tagline: "Pilferage detection & drain logs.",
    desc: "Fuel-level tracking and pilferage alerts across the fleet, with drain and refuel events logged automatically per vehicle.",
    features: [
      "Fuel-level tracking",
      "Pilferage / drain alerts",
      "Refuel event logging",
      "Per-vehicle history",
    ],
    metric: "Optimized",
  },
  {
    number: "06",
    title: "Access Control",
    tagline: "Facility gates & credential sync.",
    desc: "Door and facility hardware reporting into its own certified platform — door status, access logs and credential management.",
    features: [
      "Door status & access logs",
      "Credential management",
      "Certified platform",
      "Unified team support",
    ],
    metric: "Synced",
  },
];

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeModule = platformModules[activeTab];

  return (
    <section
      id="platform"
      className="overflow-hidden border-t border-white/10 bg-ink text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-6 border-b border-white/10 pb-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-signal" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal">
                The VIoT platform
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-4xl lg:text-[50px]">
              One operating layer for
              <br />
              <span className="text-white/40">
                every connected system.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-sm leading-6 text-white/50 sm:text-[15px] sm:leading-7">
              Fleet, vehicle, security and asset data come together in one
              platform so teams can see what is happening and act on it.
            </p>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* MODULE NAVIGATION */}
        {/* ================================================= */}

        <div className="mt-8 border-b border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {platformModules.map((module, index) => {
              const isActive = activeTab === index;

              return (
                <button
                  key={module.number}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`group relative border-b border-white/10 px-3 py-4 text-left transition-colors duration-300 sm:px-4 lg:border-b-0 ${
                    index !== 0
                      ? "lg:border-l lg:border-white/10"
                      : ""
                  } ${
                    isActive
                      ? "bg-white/[0.035]"
                      : "hover:bg-white/[0.025]"
                  }`}
                >
                  {/* Active line */}
                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-signal"
                  />

                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-[8px] tracking-[0.15em] ${
                        isActive
                          ? "text-signal"
                          : "text-white/25"
                      }`}
                    >
                      {module.number}
                    </span>

                    <span
                      className={`h-1 w-1 ${
                        isActive
                          ? "bg-signal"
                          : "bg-white/15"
                      }`}
                    />
                  </div>

                  <p
                    className={`mt-3 font-heading text-[11px] font-medium leading-4 sm:text-xs ${
                      isActive
                        ? "text-white"
                        : "text-white/45 group-hover:text-white/70"
                    }`}
                  >
                    {module.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================= */}
        {/* ACTIVE MODULE */}
        {/* ================================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.number}
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
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid lg:grid-cols-12"
          >
            {/* ================================================= */}
            {/* LEFT — MODULE DESCRIPTION */}
            {/* ================================================= */}

            <div className="border-b border-white/10 py-8 sm:py-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-12">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.16em] text-white/25">
                  MODULE {activeModule.number}
                </span>

                <span className="h-px w-6 bg-white/15" />

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-signal">
                  {activeModule.metric}
                </span>
              </div>

              <h3 className="mt-5 max-w-xl font-heading text-2xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-3xl">
                {activeModule.title}
              </h3>

              <p className="mt-2 font-mono text-[10px] leading-5 text-signal/80 sm:text-xs">
                {activeModule.tagline}
              </p>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                {activeModule.desc}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-5">
                <Link
                  href="/platform"
                  className="group inline-flex items-center gap-3 border border-signal bg-signal px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-white hover:bg-white"
                >
                  Explore platform

                  <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
                  Connected intelligence layer
                </span>
              </div>
            </div>

            {/* ================================================= */}
            {/* RIGHT — CAPABILITIES */}
            {/* ================================================= */}

            <div className="py-8 sm:py-10 lg:col-span-5 lg:pl-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                  Core capabilities
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/20">
                  {activeModule.number} / 06
                </span>
              </div>

              <div>
                {activeModule.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{
                      opacity: 0,
                      x: 8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.045,
                    }}
                    className="group flex items-start gap-4 border-b border-white/10 py-4"
                  >
                    <span className="mt-[6px] flex h-3 w-3 shrink-0 items-center justify-center border border-white/20 transition-colors group-hover:border-signal">
                      <span className="h-1 w-1 bg-signal" />
                    </span>

                    <span className="text-xs leading-5 text-white/60 transition-colors group-hover:text-white/85">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Small technical footer */}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/20">
                  Fleet
                </span>

                <span className="h-px flex-1 mx-4 bg-white/10" />

                <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-signal/70">
                  VIoT Core
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ================================================= */}
        {/* PLATFORM FLOW */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-8 border-t border-white/10 pt-5 sm:mt-10"
        >
          <div className="grid gap-4 sm:grid-cols-3 sm:items-center">
            <div>
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                Connected inputs
              </span>

              <p className="mt-1 text-[11px] text-white/45">
                Vehicles · assets · sensors · access
              </p>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <span className="h-px flex-1 bg-white/10" />
              <span className="h-1.5 w-1.5 bg-signal" />
              <span className="h-px flex-1 bg-white/10" />
            </div>

            <div className="sm:text-right">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                Operational output
              </span>

              <p className="mt-1 text-[11px] text-white/45">
                Visibility · alerts · decisions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}