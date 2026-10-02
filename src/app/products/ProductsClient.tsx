"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Radio,
  Activity,
  ShieldCheck,
  BatteryCharging,
  Gauge,
  Cpu,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { CtaBand } from "@/components/home/CtaBand";

/* =========================================================
   TYPES
========================================================= */

type Feature = {
  icon: typeof Radio;
  title: string;
  text: string;
};

type MainProduct = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  features: Feature[];
};

type EcosystemProduct = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  gallery: string[];
};

/* =========================================================
   MAIN PRODUCTS
   Client specifically requested these 3 products.
========================================================= */

const mainProducts: MainProduct[] = [
  {
    id: "basic-tracking-device",
    number: "01",
    title: "Basic Tracking Device",
    category: "Vehicle Tracking",

    description:
      "A dependable tracking device for businesses that need essential vehicle visibility, location intelligence and everyday operational monitoring.",

    image: "/image/basic-tracking.png",

    gallery: [
      "/image/basic-tracking.png",
      "/image/basic-tracking-2.png",
      "/image/basic-tracking-3.png",
    ],

    features: [
      {
        icon: Radio,
        title: "Live Location",
        text: "Track vehicle location and movement with connected positioning data.",
      },
      {
        icon: Activity,
        title: "Operational Visibility",
        text: "Understand essential vehicle movement and operating events.",
      },
      {
        icon: ShieldCheck,
        title: "Reliable Connectivity",
        text: "Designed for dependable day-to-day field operations.",
      },
    ],
  },

  {
    id: "advanced-tracking-device",
    number: "02",
    title: "Advanced Tracking Device",
    category: "Advanced Vehicle Intelligence",

    description:
      "A more capable tracking platform for operations that require deeper vehicle visibility, richer telemetry and greater operational control.",

    image: "/image/advanced-tracking.png",

    gallery: [
      "/image/advanced-tracking.png",
      "/image/advanced-tracking-2.png",
      "/image/advanced-tracking-3.png",
    ],

    features: [
      {
        icon: Activity,
        title: "Advanced Telemetry",
        text: "Capture richer operational information from connected vehicles.",
      },
      {
        icon: Gauge,
        title: "Vehicle Intelligence",
        text: "Turn vehicle activity into useful operational context.",
      },
      {
        icon: ShieldCheck,
        title: "Event Visibility",
        text: "Stay informed when important operational events occur.",
      },
    ],
  },

  {
    id: "ev-tracking-device",
    number: "03",
    title: "EV Tracking Device",
    category: "Electric Vehicle Intelligence",

    description:
      "Connected tracking designed for electric mobility, bringing vehicle visibility and connected intelligence into EV operations.",

    image: "/image/ev-tracking.png",

    gallery: [
      "/image/ev-tracking.png",
      "/image/ev-tracking-2.png",
      "/image/ev-tracking-3.png",
    ],

    features: [
      {
        icon: BatteryCharging,
        title: "EV Ready",
        text: "Designed around the requirements of connected electric mobility.",
      },
      {
        icon: Zap,
        title: "Connected Monitoring",
        text: "Bring EV movement and operational information into one view.",
      },
      {
        icon: Cpu,
        title: "Smart Data",
        text: "Connect vehicle information with the wider VIoT platform.",
      },
    ],
  },
];

/* =========================================================
   MORE FROM VIOT ECOSYSTEM

   These are separate from the 3 primary products.
   AIS 140 intentionally NOT included.
========================================================= */

const ecosystemProducts: EcosystemProduct[] = [
  {
    id: "vehicle-telematics",
    number: "01",
    title: "Vehicle Telematics",
    category: "Fleet Intelligence",
    description:
      "Connected vehicle intelligence for location, movement and operational visibility.",
    href: "/products/vehicle-telematics",
    gallery: [
      "/image/video.png",
      "/image/video.png",
    ],
  },

  {
    id: "video-telematics",
    number: "02",
    title: "Video Telematics",
    category: "Fleet Intelligence",
    description:
      "Camera-based vehicle intelligence combining visual context with connected operations.",
    href: "/products/video-telematics",
    gallery: [
      "/image/car.jpeg",
      "/image/car.jpeg",
    ],
  },

  {
    id: "smart-logistics-locks",
    number: "03",
    title: "Smart Logistics Locks",
    category: "Asset Intelligence",
    description:
      "Connected electronic locking technology for cargo security and physical asset protection.",
    href: "/products/smart-logistics-locks",
    gallery: [
      "/image/lock.png",
      "/image/lock.png",
    ],
  },

  {
    id: "smart-infra-locks",
    number: "04",
    title: "Smart Infra Locks",
    category: "Access & Infrastructure",
    description:
      "Connected locking systems for controlled physical infrastructure.",
    href: "/products/smart-infra-locks",
    gallery: [
      "/image/lock.png",
      "/image/lock.png",
    ],
  },

  {
    id: "asset-tracking",
    number: "05",
    title: "Asset Tracking",
    category: "Asset Intelligence",
    description:
      "Connected tracking for equipment, cargo and assets operating beyond vehicles.",
    href: "/products/asset-trackers",
    gallery: [
      "/image/lab.jpeg",
      "/image/lab.jpeg",
    ],
  },

  {
    id: "iot-sensors",
    number: "06",
    title: "IoT Sensors",
    category: "Asset Intelligence",
    description:
      "Connected sensing for environmental and operational conditions.",
    href: "/products/iot-sensors",
    gallery: [
      "/image/ev.jpeg",
      "/image/ev.jpeg",
    ],
  },

  {
    id: "access-control",
    number: "07",
    title: "Access Control",
    category: "Access Intelligence",
    description:
      "Connected access technology for physical entry and security events.",
    href: "/products/access-control",
    gallery: [
      "/image/lock.png",
      "/image/lock.png",
    ],
  },
];

/* =========================================================
   SCROLL REVEAL
========================================================= */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   APPROVED VIOT SVG ANIMATION

   KEEP THIS VISUAL LANGUAGE:
   - flowing paths
   - dashed green data flow
   - rotating engineering rings
   - moving signal points
========================================================= */

function VIoTSVGBackground({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        dark ? "opacity-100" : "opacity-90"
      }`}
      aria-hidden="true"
    >
      {/* atmospheric depth */}

      <div
        className={`absolute -left-48 top-[12%] h-[520px] w-[520px] rounded-full blur-3xl ${
          dark
            ? "bg-[#27d59b]/[0.025]"
            : "bg-[#27d59b]/[0.025]"
        }`}
      />

      <div
        className={`absolute -right-56 bottom-[8%] h-[650px] w-[650px] rounded-full blur-3xl ${
          dark
            ? "bg-white/[0.012]"
            : "bg-[#081b24]/[0.025]"
        }`}
      />

      {/* =====================================================
          FLOWING SVG PATHS
      ===================================================== */}

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* Upper path */}

        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke={
            dark
              ? "rgba(255,255,255,0.055)"
              : "rgba(8,27,36,0.09)"
          }
          strokeWidth="1"
          initial={{
            pathLength: 0,
          }}
          whileInView={{
            pathLength: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 2.4,
            ease: "easeOut",
          }}
        />

        {/* MAIN GREEN FLOW */}

        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke={
            dark
              ? "rgba(39,213,155,0.15)"
              : "rgba(0,124,103,0.13)"
          }
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

        {/* diagonal engineering path */}

        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={
            dark
              ? "rgba(255,255,255,0.035)"
              : "rgba(8,27,36,0.055)"
          }
          strokeWidth="1"
        />

        {/* lower flow */}

        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke={
            dark
              ? "rgba(39,213,155,0.075)"
              : "rgba(0,124,103,0.065)"
          }
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
        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${
          dark
            ? "border-white/[0.035]"
            : "border-[#081b24]/[0.045]"
        }`}
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
        className={`absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border ${
          dark
            ? "border-[#27d59b]/[0.055]"
            : "border-[#007c67]/[0.06]"
        }`}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div
        className={`absolute right-[17%] top-[27%] h-[150px] w-[150px] rounded-full border ${
          dark
            ? "border-white/[0.025]"
            : "border-[#081b24]/[0.035]"
        }`}
      />

      <div
        className={`absolute -left-[180px] bottom-[18%] h-[460px] w-[460px] rounded-full border ${
          dark
            ? "border-white/[0.025]"
            : "border-[#081b24]/[0.035]"
        }`}
      />

      {/* =====================================================
          MOVING SIGNAL POINTS
      ===================================================== */}

      <motion.span
        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 bg-[#27d59b]"
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
        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 bg-[#27d59b]"
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
        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 bg-[#27d59b]"
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

      {/* ambient points */}

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
          className={`absolute h-1 w-1 ${
            dark
              ? "bg-white/20"
              : "bg-[#081b24]/20"
          }`}
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
   HERO
========================================================= */

function ProductHero() {
  return (
    <section className="relative mx-auto h-[84vh] min-h-[560px] max-h-[720px] overflow-hidden bg-[#081b24] text-white">
      {/* =====================================================
          APPROVED VIOT SVG BACKGROUND
      ===================================================== */}

      <VIoTSVGBackground dark />

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(255,255,255,0.5) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =====================================================
          VIDEO — BACKGROUND VISUAL
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 1.025,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute inset-0 z-[2] overflow-hidden"
      >
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/image/video.png"
        >
          <source
            src="/video/products-hero.mp4"
            type="video/mp4"
          />
        </video>

        {/* =================================================
            GLOBAL VIDEO OVERLAY
        ================================================= */}

        <div className="absolute inset-0 bg-[#081b24]/30" />

        {/* =================================================
            LEFT DARK GRADIENT
            This keeps text readable
        ================================================= */}

        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#081b24] via-[#081b24]/95 via-[42%] to-[#081b24]/15" />

        {/* =================================================
            BOTTOM CINEMATIC BLEND
        ================================================= */}

        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#081b24] to-transparent" />

        {/* =================================================
            TOP BLEND
        ================================================= */}

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#081b24]/45 to-transparent" />
      </motion.div>

      {/* =====================================================
          ANIMATED TELEMETRY POINT
      ===================================================== */}

      <motion.span
        className="pointer-events-none absolute left-[48%] top-[43%] z-[4] h-2 w-2 bg-[#27d59b] shadow-[0_0_18px_rgba(39,213,155,0.7)]"
        animate={{
          x: [0, 100, 220, 380],
          y: [0, -15, 20, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-[10] mx-auto flex h-full max-w-[1440px] items-center px-7 sm:px-10 lg:px-14 xl:px-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-[680px]"
        >
          {/* =================================================
              KICKER
          ================================================= */}

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#27d59b]" />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#27d59b]">
              VIoT / Products
            </span>
          </div>

          {/* =================================================
              HEADING
          ================================================= */}

          <h1 className="mt-7 max-w-[650px] font-heading text-[clamp(3rem,5.3vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            <span className="block whitespace-nowrap">
              Hardware that moves
            </span>

            <span className="mt-2 block whitespace-nowrap text-[#27d59b]">
              with you.
            </span>
          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p className="mt-7 max-w-[500px] text-[14px] leading-[1.8] text-white/55 sm:text-[15px]">
            Connected tracking hardware designed to capture what is
            happening in the field and turn vehicle movement into useful
            operational intelligence.
          </p>

          {/* =================================================
              PRODUCT INDICATORS
          ================================================= */}

          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            {[
              "Basic Tracking",
              "Advanced Tracking",
              "EV Tracking",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 bg-[#27d59b]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/50">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          LIVE DATA LABEL
      ===================================================== */}

      <div className="absolute bottom-7 right-7 z-[11] border border-white/10 bg-[#081b24]/75 px-4 py-3 backdrop-blur-md sm:right-10 lg:right-14">
        <div className="flex items-center gap-2">
          <motion.span
            animate={{
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 bg-[#27d59b]"
          />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/65">
            Live vehicle data
          </span>
        </div>
      </div>

      {/* =====================================================
          BOTTOM STATUS LINE
      ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-[10] px-7 pb-4 sm:px-10 lg:px-14">
        <div className="h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
/* =========================================================
   PRODUCT CAROUSEL
========================================================= */

function ProductCarousel({
  product,
}: {
  product: MainProduct;
}) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) =>
      current === product.gallery.length - 1
        ? 0
        : current + 1
    );
  };

  const previous = () => {
    setActive((current) =>
      current === 0
        ? product.gallery.length - 1
        : current - 1
    );
  };

  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#081b24]">
        <AnimatePresence mode="wait">
          <motion.div
            key={product.gallery[active]}
            initial={{
              opacity: 0,
              scale: 1.025,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="absolute inset-0"
          >
            <Image
              src={product.gallery[active]}
              alt={`${product.title} image ${active + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/45 via-transparent to-transparent" />

        {/* framing */}

        <span className="absolute left-5 top-5 h-5 w-5 border-l border-t border-white/40" />

        <span className="absolute right-5 top-5 h-5 w-5 border-r border-t border-white/40" />

        <span className="absolute bottom-5 left-5 h-5 w-5 border-b border-l border-white/40" />

        <span className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-white/40" />

        {/* category */}

        <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/10 bg-[#081b24]/60 px-3 py-2 backdrop-blur-md">
          <span className="h-1.5 w-1.5 bg-[#27d59b]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/70">
            {product.category}
          </span>
        </div>

        {/* controls */}

        <div className="absolute bottom-5 right-5 flex gap-2">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#081b24]/75 text-white transition-colors hover:border-[#27d59b] hover:text-[#27d59b]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="flex h-9 w-9 items-center justify-center border border-white/15 bg-[#081b24]/75 text-white transition-colors hover:border-[#27d59b] hover:text-[#27d59b]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* bottom label */}

        <div className="absolute bottom-6 left-7">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/60">
            Product / {product.number}
          </span>

          <h3 className="mt-1 font-heading text-xl font-semibold text-white sm:text-2xl">
            {product.title}
          </h3>
        </div>
      </div>

      {/* thumbnails */}

      <div className="mt-3 grid grid-cols-3 gap-2">
        {product.gallery.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`relative aspect-[4/3] overflow-hidden border transition-all ${
              active === index
                ? "border-[#27d59b]"
                : "border-[#cdd5d2] opacity-55 hover:opacity-100"
            }`}
          >
            <Image
              src={image}
              alt=""
              fill
              sizes="180px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SPECIFICATIONS BUTTON
   Future client specs can be inserted into modal.
========================================================= */

function SpecificationsButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 bg-[#081b24] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#007c67]"
      >
        Specifications

        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081b24]/80 px-5 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#f4f6f2] p-7 sm:p-9"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 font-mono text-[9px] uppercase tracking-[0.15em] text-[#607078] hover:text-[#081b24]"
              >
                Close
              </button>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">
                Technical profile
              </span>

              <h3 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-[#081b24]">
                Specifications
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#607078]">
                Product specifications will be added here once the final
                technical information is provided by the client.
              </p>

              <div className="mt-7 grid gap-px border border-[#cdd5d2] bg-[#cdd5d2] sm:grid-cols-2">
                {[
                  "Connectivity",
                  "Power Input",
                  "Installation",
                  "Platform",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-[#f4f6f2] p-5"
                  >
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#007c67]">
                      {item}
                    </span>

                    <p className="mt-2 text-xs text-[#607078]">
                      Technical details to be provided.
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   MAIN PRODUCT SECTION
========================================================= */

function MainProductSection({
  product,
}: {
  product: MainProduct;
}) {
  return (
    <section
      id={product.id}
      className="relative overflow-hidden border-t border-[#cdd5d2] bg-[#f4f6f2]"
    >
      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <Reveal>
          <div className="flex flex-col gap-5 border-b border-[#cdd5d2] pb-7 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="pt-1 font-mono text-[9px] font-semibold tracking-[0.16em] text-[#007c67]">
                {product.number}
              </span>

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#607078]">
                  {product.category}
                </span>

                <h2 className="mt-2 font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">
                  {product.title}
                </h2>
              </div>
            </div>

            <span className="max-w-xs text-xs leading-5 text-[#607078] lg:text-right">
              Connected hardware built for real-world operations.
            </span>
          </div>
        </Reveal>

        {/* =====================================================
            MAIN PRODUCT EXPERIENCE
        ===================================================== */}

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* =================================================
              PRODUCT VISUAL
          ================================================= */}

          <Reveal className="lg:col-span-7">
            <div className="relative">
              <ProductCarousel product={product} />

              {/* small technical rail */}

              <div className="mt-3 flex items-center justify-between border-t border-[#cdd5d2] pt-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#607078]">
                  VIoT / Connected Hardware
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#007c67]">
                  0{product.number} / 03
                </span>
              </div>
            </div>
          </Reveal>

          {/* =================================================
              PRODUCT INFORMATION
          ================================================= */}

          <Reveal
            delay={0.08}
            className="flex flex-col justify-center lg:col-span-5"
          >
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                <span className="h-1.5 w-1.5 bg-[#27d59b]" />
                Product intelligence
              </span>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#607078]">
                {product.description}
              </p>
            </div>

            {/* FEATURES */}

            <div className="mt-9 border-t border-[#cdd5d2]">
              {product.features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      x: 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group flex gap-4 border-b border-[#cdd5d2] py-5"
                  >
                    {/* icon */}

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#007c67]/20 bg-white text-[#007c67] transition-all duration-300 group-hover:border-[#27d59b] group-hover:bg-[#007c67] group-hover:text-white">
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* text */}

                    <div>
                      <h3 className="font-heading text-sm font-semibold tracking-[-0.015em] text-[#081b24]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-sm text-xs leading-5 text-[#607078]">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <div className="mt-8 flex items-center gap-5">
              <SpecificationsButton />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#607078]">
                Technical details
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TECHNICAL PROFILE
   Replaces Connected Journey banner.
========================================================= */

function TechnicalProfile() {
  const items = [
    {
      number: "01",
      title: "Connectivity",
      text: "Communication and network specifications.",
    },
    {
      number: "02",
      title: "Power Input",
      text: "Power requirements and operating range.",
    },
    {
      number: "03",
      title: "Installation",
      text: "Physical installation and deployment details.",
    },
    {
      number: "04",
      title: "Platform",
      text: "Connected platform and data capabilities.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#081b24] text-white">
      <VIoTSVGBackground dark />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
              Technical Profile
            </span>

            <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[4.2rem]">
              The details behind
              <br />
              <span className="text-[#27d59b]">
                the hardware.
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
            className="lg:col-span-5"
          >
            <p className="max-w-lg text-sm leading-7 text-white/45 lg:ml-auto">
              Detailed technical content for each product will be placed here
              once the final specifications are supplied.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 18,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group bg-[#081b24] p-6 transition-colors duration-300 hover:bg-[#0d2935]"
            >
              <span className="font-mono text-[9px] text-[#27d59b]">
                {item.number}
              </span>

              <h3 className="mt-8 font-heading text-base font-semibold">
                {item.title}
              </h3>

              <div className="mt-4 h-px w-8 bg-[#27d59b]/60 transition-all duration-300 group-hover:w-14" />

              <p className="mt-4 text-xs leading-6 text-white/35">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   ECOSYSTEM CAROUSEL
========================================================= */

function EcosystemCarousel({
  product,
}: {
  product: EcosystemProduct;
}) {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((current) =>
      current === product.gallery.length - 1
        ? 0
        : current + 1
    );
  };

  const previous = () => {
    setActive((current) =>
      current === 0
        ? product.gallery.length - 1
        : current - 1
    );
  };

  return (
    <div className="group">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#081b24]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${product.id}-${active}`}
            initial={{
              opacity: 0,
              scale: 1.025,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.45,
            }}
            className="absolute inset-0"
          >
            <Image
              src={product.gallery[active]}
              alt={`${product.title} image`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/80 via-transparent to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#27d59b]">
            {product.category}
          </span>
        </div>

        {/* carousel buttons */}

        <div className="absolute right-4 top-4 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={previous}
            aria-label={`Previous ${product.title} image`}
            className="flex h-8 w-8 items-center justify-center border border-white/15 bg-[#081b24]/75 text-white hover:border-[#27d59b] hover:text-[#27d59b]"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={`Next ${product.title} image`}
            className="flex h-8 w-8 items-center justify-center border border-white/15 bg-[#081b24]/75 text-white hover:border-[#27d59b] hover:text-[#27d59b]"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[8px] tracking-[0.16em] text-white/45">
              {product.number}
            </span>

            <h3 className="mt-1 font-heading text-xl font-semibold tracking-[-0.025em] text-white">
              {product.title}
            </h3>
          </div>

          <Link
            href={product.href}
            aria-label={`Explore ${product.title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#27d59b] hover:text-[#27d59b]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs leading-6 text-[#607078]">
          {product.description}
        </p>

        <div className="mt-3 flex gap-1.5">
          {product.gallery.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Show image ${index + 1}`}
              className={`h-1 transition-all ${
                active === index
                  ? "w-7 bg-[#27d59b]"
                  : "w-3 bg-[#cdd5d2]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MORE FROM ECOSYSTEM
========================================================= */

function MoreFromEcosystem() {
  return (
    <section className="relative overflow-hidden border-t border-[#cdd5d2] bg-[#f4f6f2]">
      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                More from the VIoT ecosystem
              </span>

              <h2 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#081b24] sm:text-5xl lg:text-[4.2rem]">
                Connected products for
                <br />
                <span className="text-[#007c67]">
                  every operating environment.
                </span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-7 text-[#607078] lg:col-span-4 lg:ml-auto">
              Explore the wider VIoT ecosystem across fleet intelligence,
              asset intelligence and connected access.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemProducts.map((product, index) => (
            <Reveal
              key={product.id}
              delay={index * 0.05}
            >
              <EcosystemCarousel product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function ProductsClient() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24]">
      {/* 01 */}
      <ProductHero />

      {/* 02 / 03 / 04 */}
      {mainProducts.map((product) => (
        <MainProductSection
          key={product.id}
          product={product}
        />
      ))}

      {/* Connected Journey removed.
          Technical Profile takes its place. */}

      <TechnicalProfile />

      {/* More from VIoT Ecosystem */}
      <MoreFromEcosystem />

      {/* CTA */}
      <CtaBand />
    </main>
  );
}