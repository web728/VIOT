"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ArrowIcon,
  SignalIcon,
  PinIcon,
  LockIcon,
  PulseIcon,
} from "@/components/icons";

const products = [
  {
    id: "vehicle-telematics",
    title: "Vehicle Telematics",
    meta: "Fleet Intelligence",
    summary: "Real-time location, ignition & diagnostic tracking.",
    subDesc:
      "Reliable 2G/4G tracking built for rigorous Indian road conditions.",
    details:
      "Built on firmware refined over years of field deployments on Indian roads and networks. Provides instant alerts on harsh driving, idle times, and precise geofence tracking.",
    points: [
      "2G / 4G connectivity across all regions",
      "Live ignition & engine diagnostics",
      "9–36V wide input range support",
      "Instant tampering & power-cut alerts",
    ],
    image: "/image/video.png",
    icon: <SignalIcon />,
    href: "/products/vehicle-telematics",
  },
  {
    id: "video-telematics",
    title: "Video Telematics",
    meta: "Fleet Intelligence",
    summary: "Dashcams turning footage into evidence & coaching.",
    subDesc:
      "AI-powered ADAS & DMS alerting to prevent accidents proactively.",
    details:
      "Combines road-facing and in-cabin cameras with AI intelligence to flag distracted driving, drowsiness, and near-misses in real time before incidents occur.",
    points: [
      "Front + cabin view dual recording",
      "AI-powered ADAS & DMS alerting",
      "Event-triggered automated clip upload",
      "Live streaming on demand",
    ],
    image: "/image/car.jpeg",
    icon: <PinIcon />,
    href: "/products/video-telematics",
  },
  {
    id: "smart-locks",
    title: "Smart Locks (E-Lock)",
    meta: "Asset Intelligence",
    summary: "Tamper-evident electronic locking for cargo.",
    subDesc:
      "Secure container doors remotely via PIN or RFID credentials.",
    details:
      "Remote-controlled container security ensuring cargo remains untouched from dispatch to delivery. Operates via secure PIN or RFID authentication.",
    points: [
      "10,000 / 12,000 mAh long-life battery",
      "Remote lock & unlock via platform",
      "Real-time breach & tamper detection",
      "Tied directly to shipment records",
    ],
    image: "/image/lock.png",
    icon: <LockIcon />,
    href: "/products/smart-locks",
  },
  {
    id: "asset-tracking",
    title: "Asset Tracking",
    meta: "Asset Intelligence",
    summary: "Long-standby trackers for non-motorised assets.",
    subDesc:
      "Durable battery & solar-powered tracking for idle equipment.",
    details:
      "Designed specifically for generators, trailers, and machinery that sit idle between deployments in remote or outdoor yards.",
    points: [
      "Extended standby battery life",
      "Solar-rechargeable variant available",
      "Instant motion & geofence alerts",
      "Same unified platform dashboard",
    ],
    image: "/image/lab.jpeg",
    icon: <SignalIcon />,
    href: "/products/asset-tracking",
  },
  {
    id: "iot-sensors",
    title: "IoT Sensors",
    meta: "Asset Intelligence",
    summary: "Temperature, fuel, load & Bluetooth sensors.",
    subDesc:
      "Continuous cold-chain and pilferage compliance monitoring.",
    details:
      "Precision wireless sensors providing continuous compliance monitoring for cold-chain shipments, fuel levels, and heavy vehicle load limits.",
    points: [
      "Cold-chain temperature tracking",
      "Real-time fuel pilferage alerts",
      "Axle load compliance logging",
      "Bluetooth close-proximity tagging",
    ],
    image: "/image/ev.jpeg",
    icon: <PulseIcon />,
    href: "/products/iot-sensors",
  },
];

/* =========================================================
   SECTION BACKGROUND
   Different from the Hero:
   flowing physical-world / engineering ecosystem
========================================================= */

function ProductsEcosystemBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft atmospheric depth */}
      <div className="absolute -left-48 top-[12%] h-[520px] w-[520px] rounded-full bg-signal-dark/[0.025] blur-3xl" />

      <div className="absolute -right-56 bottom-[8%] h-[650px] w-[650px] rounded-full bg-ink/[0.025] blur-3xl" />

      {/* Large flowing ecosystem paths */}
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* Upper path */}
        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke="rgba(8,27,36,0.09)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            ease: "easeOut",
          }}
        />

        {/* Main green flow */}
        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke="rgba(0,124,103,0.13)"
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{
            strokeDashoffset: [0, -180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Diagonal engineering path */}
        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke="rgba(8,27,36,0.055)"
          strokeWidth="1"
        />

        {/* Lower flowing path */}
        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke="rgba(0,124,103,0.065)"
          strokeWidth="1"
          strokeDasharray="2 20"
          animate={{
            strokeDashoffset: [0, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* =====================================================
          ENGINEERING RINGS
      ===================================================== */}

      <motion.div
        className="absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border border-ink/[0.045]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border border-signal-dark/[0.06]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute right-[17%] top-[27%] h-[150px] w-[150px] rounded-full border border-ink/[0.035]" />

      {/* Left subtle arc */}
      <div className="absolute -left-[180px] bottom-[18%] h-[460px] w-[460px] rounded-full border border-ink/[0.035]" />

      {/* =====================================================
          MOVING SIGNAL POINTS
      ===================================================== */}

      <motion.span
        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 bg-signal-dark"
        animate={{
          x: [0, 90, 180],
          y: [0, 20, 0],
          opacity: [0.1, 0.65, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 bg-signal-dark"
        animate={{
          x: [0, -70, -150],
          y: [0, -25, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 6,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 bg-signal-dark"
        animate={{
          x: [0, -55, -120],
          opacity: [0.1, 0.65, 0],
        }}
        transition={{
          duration: 5,
          delay: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small ambient points */}
      {[
        ["12%", "20%"],
        ["25%", "78%"],
        ["39%", "16%"],
        ["58%", "84%"],
        ["68%", "22%"],
        ["79%", "72%"],
        ["91%", "52%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-1 w-1 bg-ink/20"
          style={{
            left,
            top,
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + index * 0.25,
            delay: index * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   PRODUCT IMAGE
========================================================= */

function ProductImage({ product }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const imageX = useSpring(mouseX, {
    stiffness: 90,
    damping: 22,
  });

  const imageY = useSpring(mouseY, {
    stiffness: 90,
    damping: 22,
  });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x * 4);
    mouseY.set(y * 4);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative h-full w-full overflow-hidden bg-ink"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Real product image */}
      <motion.div
        style={{
          x: imageX,
          y: imageY,
        }}
        className="absolute inset-[-1%]"
      >
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover"
        />

        {/* Extremely subtle treatment */}
        <div className="absolute inset-0 bg-black/[0.06]" />
      </motion.div>

      {/* Minimal framing */}
      <span className="absolute left-5 top-5 h-5 w-5 border-l border-t border-white/50" />

      <span className="absolute right-5 top-5 h-5 w-5 border-r border-t border-white/50" />

      <span className="absolute bottom-5 left-5 h-5 w-5 border-b border-l border-white/50" />

      <span className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-white/50" />

      {/* Product information */}
      <div className="absolute bottom-7 left-7">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 bg-signal"
          />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/75">
            {product.meta}
          </span>
        </div>

        <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.035em] text-white sm:text-3xl">
          {product.title}
        </h3>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */
/* =========================================================
   SOLUTIONS SECTION
   Background animation intentionally unchanged.
========================================================= */

const solutions = [
  {
    id: "vehicle-tracking",
    number: "01",
    title: "Vehicle Tracking",
    href: "/products/vehicle-telematics",
  },
  {
    id: "video-telematics",
    number: "02",
    title: "Video Telematics",
    href: "/products/video-telematics",
  },
  {
    id: "building-access",
    number: "03",
    title: "Building Access Management",
    href: "/products/access-control",
  },
];

export function ProductsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeSolution = solutions[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === solutions.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? solutions.length - 1 : current - 1
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
      id="products"
      className="relative overflow-hidden border-t border-line bg-paper"
    >
      {/* =====================================================
          SAME SVG BACKGROUND ANIMATION — DO NOT CHANGE
      ===================================================== */}

      <ProductsEcosystemBackground />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">

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
          className="grid gap-6 border-b border-line pb-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-signal-dark" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Solutions
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-4xl lg:text-[50px]">
              8 Solutions
            </h2>
          </div>

         
        </motion.div>

        {/* =================================================
            SOLUTION EXPERIENCE
        ================================================= */}

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">

          {/* =================================================
              SOLUTION NAVIGATION
          ================================================= */}

          <div className="lg:col-span-5">
            <div className="border-t border-line">

              {solutions.map((solution, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={solution.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative block w-full border-b border-line text-left outline-none"
                  >
                    {/* Active indicator */}

                    <motion.span
                      initial={false}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="absolute left-0 top-0 h-full w-[2px] origin-top bg-signal-dark"
                    />

                    <div
                      className={`flex items-center gap-5 py-7 pl-5 pr-3 transition-all duration-300 ${
                        isActive
                          ? "bg-white"
                          : "bg-transparent group-hover:bg-white/60"
                      }`}
                    >
                      {/* Number */}

                      <span
                        className={`font-mono text-[9px] tracking-[0.14em] transition-colors ${
                          isActive
                            ? "text-signal-dark"
                            : "text-muted"
                        }`}
                      >
                        {solution.number}
                      </span>

                      {/* Heading */}

                      <div className="min-w-0 flex-1">
                        <h3
                          className={`font-heading text-lg font-semibold tracking-[-0.025em] transition-colors sm:text-xl ${
                            isActive
                              ? "text-ink"
                              : "text-ink/60 group-hover:text-ink"
                          }`}
                        >
                          {solution.title}
                        </h3>
                      </div>

                      {/* Arrow */}

                      <motion.span
                        animate={{
                          x: isActive ? 2 : 0,
                          rotate: isActive ? 0 : -45,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors ${
                          isActive
                            ? "border-signal-dark bg-signal-dark text-white"
                            : "border-line text-muted group-hover:border-signal-dark group-hover:text-signal-dark"
                        }`}
                      >
                        <ArrowIcon className="h-2.5 w-2.5" />
                      </motion.span>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Solution count */}

            <div className="mt-7 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                Solution portfolio
              </span>

              <span className="font-mono text-[9px] font-semibold tracking-[0.12em] text-signal-dark">
                08
              </span>
            </div>
          </div>

          {/* =================================================
              SOLUTION VISUAL
          ================================================= */}

          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
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
                  y: -12,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative overflow-hidden border border-ink/10 bg-ink"
              >
                {/* =================================================
                    SAME VISUAL LANGUAGE — NO EXTRA ANIMATION
                ================================================= */}

                <div className="relative min-h-[360px] overflow-hidden sm:min-h-[430px]">

                  {/* Background grid */}

                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(255,255,255,0.18) 1px,
                          transparent 1px
                        ),
                        linear-gradient(
                          90deg,
                          rgba(255,255,255,0.18) 1px,
                          transparent 1px
                        )
                      `,
                      backgroundSize: "56px 56px",
                    }}
                  />

                  {/* Large technical rings */}

                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 55,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-28 -top-28 h-[430px] w-[430px] rounded-full border border-white/[0.08]"
                  />

                  <motion.div
                    animate={{
                      rotate: -360,
                    }}
                    transition={{
                      duration: 38,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -right-5 top-5 h-[300px] w-[300px] rounded-full border border-signal/[0.12]"
                  />

                  {/* Signal line */}

                  <svg
                    viewBox="0 0 900 500"
                    className="absolute inset-0 h-full w-full"
                    fill="none"
                  >
                    <motion.path
                      d="M-80 360 C160 160 290 420 470 245 S720 80 980 190"
                      stroke="rgba(39,213,155,0.45)"
                      strokeWidth="1"
                      strokeDasharray="3 14"
                      animate={{
                        strokeDashoffset: [0, -180],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <path
                      d="M-60 390 C180 190 310 430 490 260 S750 110 980 210"
                      stroke="rgba(255,255,255,0.12)"
                      strokeWidth="1"
                    />
                  </svg>

                  {/* Moving signal */}

                  <motion.span
                    animate={{
                      x: [0, 130, 280],
                      y: [0, -18, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-[18%] top-[58%] h-1.5 w-1.5 bg-signal"
                  />

                  <motion.span
                    animate={{
                      x: [0, -100, -220],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 6,
                      delay: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-[20%] top-[30%] h-1.5 w-1.5 bg-signal"
                  />

                  {/* Central content */}

                  <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                    <div className="relative z-10 max-w-xl">

                      <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-7 bg-signal" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-signal">
                          Solution {activeSolution.number}
                        </span>

                        <span className="h-px w-7 bg-signal" />
                      </div>

                      <h3 className="font-heading text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                        {activeSolution.title}
                      </h3>

                      <Link
                        href={activeSolution.href}
                        className="group mt-8 inline-flex h-11 items-center gap-3 bg-signal px-5 text-[10px] font-bold uppercase tracking-[0.1em] text-ink transition-all duration-300 hover:bg-white"
                      >
                        Explore solution

                        <span className="flex h-6 w-6 items-center justify-center bg-ink/10 transition-colors group-hover:bg-ink">
                          <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  {/* Technical corner labels */}

                  <div className="absolute left-5 top-5">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/40">
                      VIoT / Intelligence
                    </span>
                  </div>

                  <div className="absolute bottom-5 right-5">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/40">
                      Connected systems
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom CTA */}

            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                One platform · connected intelligence
              </span>

              <Link
                href="/contact"
                className="group inline-flex w-fit items-center gap-3 border border-ink bg-ink px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.08em] !text-white transition-all duration-300 hover:border-signal-dark hover:bg-signal-dark"
              >
                Talk to our team

                <ArrowIcon className="h-2.5 w-2.5 !text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}