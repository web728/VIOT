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

export function ProductsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeProduct = products[selectedIndex];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === products.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? products.length - 1 : current - 1
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
      {/* Entire section background */}
      <ProductsEcosystemBackground />

      {/* Main content */}
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
          className="grid gap-5 border-b border-line pb-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-signal-dark" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Products
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-4xl lg:text-[50px]">
              Hardware built for the
              <br />
              <span className="text-muted">
                real world.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="max-w-md text-[13px] leading-6 text-muted sm:text-sm">
              Connected devices for vehicles, assets and physical security —
              bringing field data into one operating platform.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            PRODUCT EXPERIENCE
        ================================================= */}

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* =================================================
              PRODUCT NAVIGATION
          ================================================= */}

          <div className="lg:col-span-4">
            <div className="border-t border-line">
              {products.map((product, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative block w-full border-b border-line text-left outline-none"
                  >
                    {/* Active line */}
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
                      className={`flex items-center gap-4 py-5 pl-5 pr-3 transition-all duration-300 ${
                        isActive
                          ? "bg-white"
                          : "bg-transparent group-hover:bg-white/60"
                      }`}
                    >
                      {/* Icon */}
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-colors ${
                          isActive
                            ? "border-signal-dark text-signal-dark"
                            : "border-line text-muted group-hover:border-signal-dark group-hover:text-signal-dark"
                        }`}
                      >
                        {product.icon}
                      </span>

                      {/* Name */}
                      <div className="min-w-0 flex-1">
                        <span
                          className={`font-mono text-[8px] uppercase tracking-[0.16em] ${
                            isActive
                              ? "text-signal-dark"
                              : "text-muted"
                          }`}
                        >
                          {product.meta}
                        </span>

                        <h3
                          className={`mt-1 font-heading text-[15px] font-medium tracking-[-0.02em] ${
                            isActive
                              ? "text-ink"
                              : "text-ink/65"
                          }`}
                        >
                          {product.title}
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
                        className={`flex h-7 w-7 shrink-0 items-center justify-center border ${
                          isActive
                            ? "border-signal-dark bg-signal-dark text-white"
                            : "border-line text-muted group-hover:border-signal-dark group-hover:text-signal-dark"
                        }`}
                      >
                        <ArrowIcon className="h-2.5 w-2.5" />
                      </motion.span>
                    </div>

                    {/* Active description */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            height: 0,
                          }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className="overflow-hidden bg-white pl-[68px] pr-8"
                        >
                          <p className="pb-5 text-[11px] leading-[18px] text-muted">
                            {product.subDesc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PRODUCT VISUAL
          ================================================= */}

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
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
              >
                {/* Image */}
                <div className="relative h-[330px] overflow-hidden border border-ink/10 sm:h-[390px] lg:h-[460px]">
                  <ProductImage product={activeProduct} />
                </div>

                {/* =================================================
                    PRODUCT INFORMATION
                ================================================= */}

                <div className="grid border-b border-line lg:grid-cols-12">
                  {/* Description */}
                  <div className="border-b border-line py-6 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-8">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-5 bg-signal-dark" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal-dark">
                        {activeProduct.meta}
                      </span>
                    </div>

                    <h3 className="mt-3 font-heading text-xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-2xl">
                      {activeProduct.summary}
                    </h3>

                    <p className="mt-3 max-w-xl text-xs leading-6 text-muted sm:text-[13px]">
                      {activeProduct.details}
                    </p>

                    <Link
                      href={activeProduct.href}
                      className="group mt-5 inline-flex items-center gap-3 border-b border-ink pb-1.5 text-[11px] font-semibold text-ink transition-colors hover:border-signal-dark hover:text-signal-dark"
                    >
                      Explore product

                      <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Specifications */}
                  <div className="py-6 lg:col-span-5 lg:pl-8">
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                      Key specifications
                    </span>

                    <div className="mt-3">
                      {activeProduct.points.map((point, index) => (
                        <motion.div
                          key={point}
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
                          className="flex items-start gap-3 border-t border-line py-2.5 first:border-t-0"
                        >
                          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 bg-signal" />

                          <span className="text-[11px] leading-[18px] text-ink/70">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom action */}
                <div className="flex flex-col gap-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                    Connected hardware · Unified platform
                  </span>

                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-3 border border-ink bg-ink px-4 py-2.5 text-[11px] font-semibold !text-white transition-colors hover:border-signal-dark hover:bg-signal-dark"
                  >
                    Talk to our team

                    <ArrowIcon className="h-2.5 w-2.5 !text-white" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}