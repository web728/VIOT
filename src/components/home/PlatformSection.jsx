"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

const platformModules = [
  {
    title: "Fleet Management",
    eyebrow: "Fleet Intelligence",
    tagline: "Live GPS, ignition & geofencing telemetry.",
    desc: "Real-time vehicle location, route history and geofencing for your entire fleet on one map. Ignition status and trip logs update instantly.",
    features: [
      "Live location & geofencing",
      "Route history & trip logs",
      "Ignition status monitoring",
      "Role-based team access",
    ],
  },
  {
    title: "EV Management",
    eyebrow: "Fleet Intelligence",
    tagline: "Battery health & range telemetry.",
    desc: "Battery health, charging status and range telemetry for electric fleets, unified on the same dashboard as combustion vehicles.",
    features: [
      "Battery health monitoring",
      "Charging status & history",
      "Range telemetry",
      "Unified fleet view",
    ],
  },
  {
    title: "E-Lock Security",
    eyebrow: "Asset Intelligence",
    tagline: "Remote container lock & breach alerts.",
    desc: "Remote lock/unlock, tamper alerts and access logs for every E-Lock device in the field, tied directly to shipment records.",
    features: [
      "Remote lock / unlock",
      "Tamper & breach alerts",
      "Full access history",
      "Shipment record linking",
    ],
  },
  {
    title: "Video Telematics",
    eyebrow: "Fleet Intelligence",
    tagline: "AI dashcams & automated clip upload.",
    desc: "Live streaming on demand and event-triggered clip retrieval from every dashcam in the fleet, without manual SD-card pulls.",
    features: [
      "Live streaming on demand",
      "Event-triggered clip upload",
      "ADAS / DMS alert review",
      "Footage retention control",
    ],
  },
  {
    title: "Fuel Monitoring",
    eyebrow: "Fleet Intelligence",
    tagline: "Pilferage detection & drain logs.",
    desc: "Fuel-level tracking and pilferage alerts across the fleet, with drain and refuel events logged automatically per vehicle.",
    features: [
      "Fuel-level tracking",
      "Pilferage / drain alerts",
      "Refuel event logging",
      "Per-vehicle history",
    ],
  },
  {
    title: "Access Control",
    eyebrow: "Access Intelligence",
    tagline: "Facility gates & credential sync.",
    desc: "Door and facility hardware reporting into its own certified platform — door status, access logs and credential management.",
    features: [
      "Door status & access logs",
      "Credential management",
      "Certified platform",
      "Unified team support",
    ],
  },
];

/* =========================================================
   PLATFORM BACKGROUND
========================================================= */

function PlatformArchitecture() {
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
          animate={{
            strokeDashoffset: [0, -220],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
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
          animate={{
            strokeDashoffset: [0, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Moving signals */}
      <motion.span
        className="absolute left-[18%] top-[31%] h-1.5 w-1.5 bg-signal"
        animate={{
          x: [0, 130, 260],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute left-[58%] top-[64%] h-1.5 w-1.5 bg-signal"
        animate={{
          x: [0, -110, -220],
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
        className="absolute right-[17%] top-[28%] h-1 w-1 bg-signal"
        animate={{
          y: [0, 70, 140],
          opacity: [0, 0.7, 0],
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
        className="absolute right-[3%] top-[8%] h-[480px] w-[480px] rounded-full border border-white/[0.04]"
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
        className="absolute right-[9%] top-[16%] h-[320px] w-[320px] rounded-full border border-signal/[0.055]"
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
          className="absolute h-1 w-1 bg-white/20"
          style={{ left, top }}
          animate={{
            opacity: [0.08, 0.4, 0.08],
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

/* =========================================================
   VIOT CORE FLOW
========================================================= */

function PlatformCore() {
  return (
    <>
      {/* Desktop */}
      <div className="relative mt-7 hidden h-[140px] lg:block">
        {/* Connection path only — no section border */}
        <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-white/[0.08]" />

        {/* Moving signal */}
        <motion.div
          className="absolute top-1/2 h-px w-32 bg-gradient-to-r from-transparent via-signal to-transparent"
          animate={{
            left: ["7%", "93%"],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* INPUT */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center border border-white/10">
              <span className="h-1.5 w-1.5 bg-signal" />
            </span>

            <div>
              <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">
                Connected inputs
              </span>

              <span className="mt-1 block text-[11px] text-white/50">
                Vehicles · Assets · Sensors
              </span>
            </div>
          </div>
        </div>

        {/* VIOT CORE */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative flex h-[72px] w-[72px] items-center justify-center border border-signal/50 bg-ink">
            <div className="absolute inset-2 border border-white/[0.07]" />

            <div className="relative text-center">
              <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-signal">
                VIoT
              </span>

              <span className="mt-1 block font-mono text-[7px] uppercase tracking-[0.12em] text-white/25">
                Core
              </span>
            </div>
          </div>
        </motion.div>

        {/* OUTPUT */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
          <div className="flex items-center justify-end gap-3">
            <div>
              <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">
                Operational output
              </span>

              <span className="mt-1 block text-[11px] text-white/50">
                Visibility · Alerts · Decisions
              </span>
            </div>

            <span className="flex h-8 w-8 items-center justify-center border border-white/10">
              <span className="h-1.5 w-1.5 bg-signal" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-8 lg:hidden">
        <div className="grid gap-0">
          <div className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 bg-signal" />

            <div>
              <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">
                Connected inputs
              </span>

              <span className="mt-1 block text-xs text-white/50">
                Vehicles · Assets · Sensors
              </span>
            </div>
          </div>

          <div className="ml-[3px] h-7 w-px bg-white/10" />

          <div className="flex items-center gap-4 py-3">
            <div className="flex h-12 w-12 items-center justify-center border border-signal/50 bg-ink">
              <div className="text-center">
                <span className="block font-mono text-[8px] tracking-[0.16em] text-signal">
                  VIoT
                </span>

                <span className="mt-1 block font-mono text-[6px] uppercase text-white/25">
                  Core
                </span>
              </div>
            </div>

            <span className="text-xs text-white/45">
              Connected intelligence layer
            </span>
          </div>

          <div className="ml-[3px] h-7 w-px bg-white/10" />

          <div className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 bg-signal" />

            <div>
              <span className="block font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">
                Operational output
              </span>

              <span className="mt-1 block text-xs text-white/50">
                Visibility · Alerts · Decisions
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* =========================================================
   MAIN PLATFORM SECTION
========================================================= */

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);

  const activeModule = platformModules[activeTab];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActiveTab((current) =>
          current === platformModules.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveTab((current) =>
          current === 0 ? platformModules.length - 1 : current - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-ink text-white"
    >
      <PlatformArchitecture />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-7 pb-2 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-signal" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal">
                The VIoT platform
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl lg:text-[62px]">
              One operating layer
              <br />
              <span className="text-white/35">
                for every connected system.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-white/45">
              Fleet, vehicle, security and asset data come together in one
              platform so teams can see what is happening and act on it.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            MODULE NAVIGATION
        ================================================= */}

        <div className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {platformModules.map((module, index) => {
              const isActive = activeTab === index;

              return (
                <button
                  key={module.title}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`group relative min-h-[82px] border-b border-white/[0.06] px-4 py-5 text-left transition-colors duration-300 md:min-h-[92px] lg:border-b-0 ${
                    index !== 0
                      ? "lg:border-l lg:border-white/[0.08]"
                      : ""
                  } ${
                    isActive
                      ? "bg-white/[0.035]"
                      : "hover:bg-white/[0.02]"
                  }`}
                >
                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-signal"
                  />

                  <div className="flex items-center justify-between">
                    <span
                      className={`h-1.5 w-1.5 transition-colors ${
                        isActive
                          ? "bg-signal"
                          : "bg-white/15 group-hover:bg-white/30"
                      }`}
                    />

                    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/20">
                      {module.eyebrow}
                    </span>
                  </div>

                  <p
                    className={`mt-4 font-heading text-[11px] font-medium leading-4 transition-colors sm:text-xs ${
                      isActive
                        ? "text-white"
                        : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {module.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            ACTIVE MODULE
        ================================================= */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.title}
            initial={{
              opacity: 0,
              y: 12,
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
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid lg:grid-cols-12"
          >
            {/* LEFT */}
            <div className="py-9 lg:col-span-7 lg:border-r lg:border-white/[0.07] lg:py-10 lg:pr-14">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 bg-signal" />

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal">
                  {activeModule.eyebrow}
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-4xl lg:text-[44px]">
                {activeModule.title}
              </h3>

              <p className="mt-3 max-w-xl font-mono text-[10px] leading-5 text-signal/70 sm:text-xs">
                {activeModule.tagline}
              </p>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
                {activeModule.desc}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
  href="/platform"
  className="group inline-flex items-center gap-3 border border-signal bg-signal px-5 py-2.5 text-xs font-semibold text-ink transition-colors hover:border-white hover:bg-white hover:!text-ink"
>
  Explore platform

  <ArrowIcon className="h-3 w-3 !text-ink transition-transform duration-300 group-hover:translate-x-1" />
</Link>

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
                  Connected intelligence layer
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="pb-7 pt-2 lg:col-span-5 lg:py-10 lg:pl-12">
              <div className="flex items-end justify-between pb-3">
                <div>
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Core capabilities
                  </span>

                  <span className="mt-2 block h-px w-7 bg-signal/60" />
                </div>
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
                      delay: index * 0.05,
                    }}
                    className="group flex items-center gap-4 border-b border-white/[0.06] py-4"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-white/10 transition-colors duration-300 group-hover:border-signal">
                      <span className="h-1.5 w-1.5 bg-signal" />
                    </span>

                    <span className="text-xs leading-5 text-white/55 transition-colors duration-300 group-hover:text-white/90">
                      {feature}
                    </span>

                    <span className="ml-auto text-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-signal">
                      <ArrowIcon className="h-2.5 w-2.5" />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* =================================================
            SYSTEM ARCHITECTURE
        ================================================= */}

        <PlatformCore />
      </div>
    </section>
  );
}