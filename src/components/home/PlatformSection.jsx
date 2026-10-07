"use client";

import Image from "next/image";
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
    desc: "Live streaming on demand and event-triggered clip retrieval from every dashcam in the fleet, with continuous recording stored on the onboard SD card.",
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
    desc: "Door and facility hardware reporting into its own certified platform - door status, access logs and credential management.",
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
      {/* Ambient glow */}
      <div className="absolute -right-[18%] top-[3%] h-[620px] w-[620px] rounded-full bg-signal/[0.025] blur-3xl" />

      <div className="absolute -left-[18%] bottom-[2%] h-[520px] w-[520px] rounded-full bg-white/[0.012] blur-3xl" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Architecture paths */}
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M-120 190 C190 160 270 430 520 430 S900 150 1210 270 S1510 470 1720 390"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
        />

        <motion.path
          d="M-120 720 C180 670 330 510 580 560 S930 790 1190 650 S1480 430 1730 500"
          stroke="rgba(39,213,155,0.08)"
          strokeWidth="1"
          strokeDasharray="3 18"
          animate={{
            strokeDashoffset: [0, -220],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <path
          d="M140 1040 C290 760 480 730 690 510 S1050 190 1460 -80"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />

        <motion.path
          d="M-80 550 C230 520 410 310 670 330 S1050 640 1700 310"
          stroke="rgba(39,213,155,0.08)"
          strokeWidth="1"
          strokeDasharray="2 22"
          animate={{
            strokeDashoffset: [0, 180],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Moving signal points */}
      <motion.span
        className="absolute left-[18%] top-[31%] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{
          x: [0, 130, 260],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute left-[58%] top-[64%] h-1.5 w-1.5 rounded-full bg-signal"
        animate={{
          x: [0, -110, -220],
          opacity: [0, 0.55, 0],
        }}
        transition={{
          duration: 6.5,
          delay: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute right-[17%] top-[28%] h-1 w-1 rounded-full bg-signal"
        animate={{
          y: [0, 70, 140],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 6,
          delay: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Rings */}
      <motion.div
        className="absolute right-[3%] top-[8%] h-[480px] w-[480px] rounded-full border border-white/[0.025]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-[9%] top-[16%] h-[320px] w-[320px] rounded-full border border-signal/[0.04]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 65,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Nodes */}
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
          className="absolute h-1 w-1 rounded-full bg-white/20"
          style={{ left, top }}
          animate={{
            opacity: [0.06, 0.3, 0.06],
          }}
          transition={{
            duration: 3.5 + index * 0.35,
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
      <div className="relative mt-10 hidden h-[140px] lg:block">
        <div className="absolute left-[12%] right-[12%] top-1/2 h-px bg-white/[0.07]" />

        <motion.div
          className="absolute top-1/2 h-px w-32 bg-gradient-to-r from-transparent via-signal/80 to-transparent"
          animate={{
            left: ["7%", "93%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Input */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </span>

            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Connected inputs
              </span>

              <span className="mt-1.5 block text-[11px] leading-none text-white/45">
                Vehicles · Assets · Sensors
              </span>
            </div>
          </div>
        </div>

        {/* VIOT Core */}
        <motion.div
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="
              relative flex h-[84px] w-[84px]
              items-center justify-center
              rounded-2xl
              border border-signal/25
              bg-[#0B0F0E]/95
              shadow-[0_16px_50px_rgba(0,0,0,0.25),0_0_35px_rgba(39,213,155,0.035)]
              backdrop-blur-md
            "
          >
            <Image
              src="/logo/logo-bg.png"
              alt="VIoT"
              width={96}
              height={96}
              className="relative z-10 h-[58px] w-[58px] object-contain"
            />
          </div>
        </motion.div>

        {/* Output */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-right">
          <div className="flex items-center justify-end gap-3">
            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Operational output
              </span>

              <span className="mt-1.5 block text-[11px] leading-none text-white/45">
                Visibility · Alerts · Decisions
              </span>
            </div>

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-10 lg:hidden">
        <div className="grid">
          <div className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />

            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Connected inputs
              </span>

              <span className="mt-1.5 block text-xs text-white/45">
                Vehicles · Assets · Sensors
              </span>
            </div>
          </div>

          <div className="ml-[3px] h-7 w-px bg-white/[0.08]" />

          <div
            className="
              flex h-14 w-14 shrink-0
              items-center justify-center
              rounded-xl
              border border-signal/25
              bg-[#0B0F0E]
              shadow-[0_8px_24px_rgba(0,0,0,0.18)]
            "
          >
            <Image
              src="/logo/logo-bg.png"
              alt="VIoT"
              width={64}
              height={64}
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="ml-[3px] h-7 w-px bg-white/[0.08]" />

          <div className="flex items-center gap-3 py-3">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />

            <div>
              <span className="block font-mono text-[7px] font-medium uppercase tracking-[0.14em] text-white/25">
                Operational output
              </span>

              <span className="mt-1.5 block text-xs text-white/45">
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
    const handleKeyDown = (e) => {
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

      <div
        className="
          relative z-10 mx-auto
          max-w-[1280px]
          px-5 py-16
          sm:px-8 sm:py-20
          lg:px-10 lg:py-24
          xl:px-12
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
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
          className="grid gap-6 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal/80" />

              <span className="font-mono text-[8px] font-medium uppercase tracking-[0.16em] text-signal">
                The VIoT platform
              </span>
            </div>

            <h2
              className="
                max-w-[760px]
                font-heading
                text-[34px] font-semibold
                leading-[1.08]
                tracking-[-0.035em]
                text-white
                sm:text-[40px]
                lg:text-[46px]
              "
            >
              One operating layer
              <br />
              <span className="text-signal">
                for every connected system.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* =================================================
            MODULE NAVIGATION
        ================================================= */}

        <div className="mt-10 border-y border-white/[0.07]">
          <div
            role="tablist"
            aria-label="Platform modules"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
          >
            {platformModules.map((module, index) => {
              const isActive = activeTab === index;

              return (
                <button
                  key={module.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(index)}
                  className={`
                    group relative min-h-[92px]
                    px-3 py-5 text-left
                    transition-colors duration-300

                    focus-visible:outline-none
                    focus-visible:ring-1
                    focus-visible:ring-inset
                    focus-visible:ring-signal/50

                    md:px-4

                    lg:min-h-[104px]
                    lg:px-5

                    ${
                      index !== platformModules.length - 1
                        ? "lg:border-r lg:border-white/[0.06]"
                        : ""
                    }

                    ${
                      isActive
                        ? "bg-white/[0.025]"
                        : "hover:bg-white/[0.018]"
                    }
                  `}
                >
                  <div className="flex items-center gap-2">
                    <motion.span
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        scale: isActive ? 1 : 0.8,
                      }}
                      className={`
                        h-1.5 w-1.5 shrink-0 rounded-full
                        ${
                          isActive
                            ? "bg-signal shadow-[0_0_12px_rgba(39,213,155,0.55)]"
                            : "bg-white/30"
                        }
                      `}
                    />

                    <span
                      className={`
                        truncate font-mono
                        text-[7px] font-medium uppercase
                        tracking-[0.13em]
                        transition-colors duration-300

                        ${
                          isActive
                            ? "text-signal/70"
                            : "text-white/20 group-hover:text-white/35"
                        }
                      `}
                    >
                      {module.eyebrow}
                    </span>
                  </div>

                  <p
                    className={`
                      mt-4 max-w-[130px]
                      font-heading
                      text-[12px] font-medium
                      leading-[1.35]
                      tracking-[-0.01em]
                      transition-colors duration-300

                      lg:text-[13px]

                      ${
                        isActive
                          ? "text-white"
                          : "text-white/45 group-hover:text-white/75"
                      }
                    `}
                  >
                    {module.title}
                  </p>

                  <motion.span
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute bottom-0 left-3 right-3
                      h-px origin-left
                      bg-signal
                      md:left-4 md:right-4
                      lg:left-5 lg:right-5
                    "
                  />
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
            className="
              mt-8 grid overflow-hidden
              rounded-[22px]
              border border-white/[0.08]
              bg-white/[0.018]
              shadow-[0_24px_70px_rgba(0,0,0,0.16)]
              backdrop-blur-sm
              lg:grid-cols-12
            "
          >
            {/* LEFT */}
            <div
              className="
                px-6 py-8
                sm:px-8 sm:py-10
                lg:col-span-7
                lg:border-r lg:border-white/[0.07]
                lg:px-10 lg:py-12
                xl:px-12
              "
            >
              <div className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />

                <span
                  className="
                    font-mono text-[8px] font-medium uppercase
                    tracking-[0.15em] text-signal/80
                  "
                >
                  {activeModule.eyebrow}
                </span>
              </div>

              <h3
                className="
                  mt-5 max-w-[620px]
                  font-heading
                  text-[32px] font-semibold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-white
                  sm:text-[38px]
                  lg:text-[44px]
                "
              >
                {activeModule.title}
              </h3>

              <p
                className="
                  mt-3 max-w-xl
                  font-mono
                  text-[10px]
                  leading-[1.7]
                  tracking-[0.015em]
                  text-signal/65
                  sm:text-[11px]
                "
              >
                {activeModule.tagline}
              </p>

              <p
                className="
                  mt-6 max-w-[570px]
                  text-[14px]
                  leading-[1.8]
                  tracking-[-0.005em]
                  text-white/45
                  sm:text-[15px]
                "
              >
                {activeModule.desc}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Link
                  href="/platform"
                  className="
                    group inline-flex h-11 items-center gap-3
                    rounded-lg
                    border border-signal
                    bg-signal
                    px-5
                    text-[10px] font-bold uppercase
                    tracking-[0.07em]
                    !text-ink
                    shadow-[0_10px_28px_rgba(39,213,155,0.12)]
                    transition-all duration-300

                    hover:-translate-y-px
                    hover:border-white
                    hover:bg-white
                    hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                  "
                >
                  <span className="!text-ink">
                    Explore platform
                  </span>

                  <span
                    className="
                      flex h-6 w-6 items-center justify-center
                      rounded-md
                      border border-ink/10
                      bg-ink/10
                    "
                  >
                    <ArrowIcon
                      className="
                        h-2.5 w-2.5
                        !text-ink
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </Link>

                <span
                  className="
                    font-mono
                    text-[7px] font-medium uppercase
                    tracking-[0.14em]
                    text-white/20
                  "
                >
                  Connected intelligence layer
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                border-t border-white/[0.07]
                px-6 py-8
                sm:px-8 sm:py-10

                lg:col-span-5
                lg:border-l-0
                lg:border-t-0
                lg:px-10 lg:py-12
              "
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <span
                    className="
                      font-mono
                      text-[8px] font-medium uppercase
                      tracking-[0.15em]
                      text-white/30
                    "
                  >
                    Core capabilities
                  </span>

                  <span className="mt-2.5 block h-px w-7 bg-signal/60" />
                </div>

                <span className="font-mono text-[8px] tracking-[0.1em] text-white/15">
                  0{activeModule.features.length}
                </span>
              </div>

              <div className="divide-y divide-white/[0.065]">
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
                      duration: 0.3,
                      delay: index * 0.045,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      group flex min-h-[62px]
                      items-center gap-4
                      py-4
                    "
                  >
                    <span
                      className="
                        font-mono
                        text-[8px]
                        tracking-[0.08em]
                        text-white/18
                        transition-colors duration-300
                        group-hover:text-signal/65
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        flex-1
                        text-[13px]
                        leading-[1.5]
                        tracking-[-0.005em]
                        text-white/50
                        transition-colors duration-300
                        group-hover:text-white/90
                      "
                    >
                      {feature}
                    </span>

                    <span
                      className="
                        flex h-7 w-7 shrink-0
                        items-center justify-center
                        rounded-full
                        border border-white/[0.07]
                        text-white/20
                        transition-all duration-300

                        group-hover:translate-x-0.5
                        group-hover:border-signal/25
                        group-hover:bg-signal/[0.05]
                        group-hover:text-signal
                      "
                    >
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