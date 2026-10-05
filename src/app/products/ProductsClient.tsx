"use client";

import Image from "next/image";

import Link from "next/link";

import {

  ArrowUpRight,

  Radio,

  Activity,

  ShieldCheck,

  BatteryCharging,

  Gauge,

} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import type { ReactNode } from "react";

import { useEffect, useState } from "react";

import { createPortal } from "react-dom";

import { CtaBand } from "@/components/home/CtaBand";

/* =========================================================****

TYPES***

****========================================================= */

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

  specs: [string, string][];

  note?: string;

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

/* =========================================================****

*MAIN PRODUCTS****

*Client-supplied primary product set.****

****========================================================= */

const mainProducts: MainProduct[] = [

  {

    id: "basic-tracking-device",

    number: "01",

    title: "Basic Tracking Device",

    category: "Vehicle Tracking",

    description:

      "A compact 4G tracking configuration for dependable location reporting, driving-event visibility and remote vehicle immobilisation across a wide range of vehicle power systems.",

    image: "/image/basic-tracking.png",

    gallery: [

      "/image/basic-tracking.png"

    ],

    features: [

      {

        icon: Radio,

        title: "4G Connectivity",

        text: "4G Cat.1 connectivity keeps vehicle location and operating events connected to the platform.",

      },

      {

        icon: Gauge,

        title: "9–90V Operating Voltage",

        text: "Wide-voltage compatibility supports installation across a broad range of vehicle types.",

      },

      {

        icon: ShieldCheck,

        title: "Vehicle Immobilisation",

        text: "Remote cut-off capability supports controlled vehicle immobilisation when required.",

      },

    ],

    specs: [

      ["Network", "4G Cat.1"],

      ["Positioning", "GPS + BDS"],

      ["Input voltage", "9–90V DC"],

      ["Standby current", "<5mA"],

      ["Driving events", "Harsh acceleration, braking and cornering"],

      ["Alerts", "Movement, speeding, geo-fence and vehicle battery events"],

      ["Control", "Remote cut-off / immobilisation"],

      ["Interface", "Optional TTL expansion"],

      ["Operating temperature", "-20°C to +70°C"],

      ["Ingress protection", "IPX4"],

      ["Dimensions", "80 × 31 × 13 mm"],

      ["Weight", "28 g"],

    ],

   
  },

  {

    id: "advanced-tracking-device",

    number: "02",

    title: "Advanced Tracking Device",

    category: "Advanced Vehicle Intelligence",

    description:

      "An advanced 4G vehicle-tracking configuration for fleets that need richer telemetry, temperature and fuel integration, SOS workflows and remote operational control.",

    image: "/image/advanced-tracking.png",

    gallery: [

      "/image/advanced-tracking.png"

    ],

    features: [

      {

        icon: Radio,

        title: "4G Connectivity",

        text: "4G LTE connectivity with cellular fallback supports dependable fleet reporting.",

      },

      {

        icon: Activity,

        title: "Temperature & Fuel Sensors",

        text: "Optional temperature and fuel-level peripherals add deeper operating context.",

      },

      {

        icon: ShieldCheck,

        title: "Immobilisation + SOS",

        text: "Remote cut-off and SOS input support security and emergency-response workflows.",

      },

    ],

    specs: [

      ["Network", "4G LTE with GSM fallback"],

      ["Positioning", "GPS + BDS + LBS"],

      ["Positioning accuracy", "<2.5 m CEP50"],

      ["Input voltage", "9–90V DC"],

      ["Backup battery", "500mAh / 3.7V Li-Polymer"],

      ["Interfaces", "2 × TTL + digital input/output"],

      ["Sensor support", "Temperature and fuel-level peripherals"],

      ["Safety", "SOS input + multiple event alarms"],

      ["Control", "Remote fuel / power cut-off"],

      ["Bluetooth", "BLE 5.0 accessory support"],

      ["Operating temperature", "-20°C to +70°C"],

      ["Dimensions", "106 × 54.5 × 16.5 mm"],

      ["Weight", "90 g"],

    ],

    note:

      "Temperature and fuel functions depend on the selected peripheral configuration.",

  },

  {

    id: "video-telematics",

    number: "03",

    title: "Video Telematics",

    category: "AI Dash Camera",

    description:

      "A connected three-channel AI video system that combines road and cabin visibility with driver-safety intelligence, positioning and 4G remote monitoring.",

    image: "/image/video-telementics.png",

    gallery: [

      "/image/video-telementics.png"

    ],

    features: [

      {

        icon: Activity,

        title: "Triple-Channel HD",

        text: "One 1080P front camera and two 720P channels provide simultaneous road and cabin coverage.",

      },

      {

        icon: ShieldCheck,

        title: "ADAS · DMS · BSD",

        text: "AI-assisted safety functions detect driver and road-risk events for faster review.",

      },

      {

        icon: Radio,

        title: "4G Remote Connectivity",

        text: "Built-in 4G supports live preview, remote monitoring, cloud connectivity and OTA updates.",

      },

    ],

    specs: [

      ["Camera channels", "3 channels"],

      ["Front camera", "1080P Full HD · 115° wide angle"],

      ["Additional cameras", "2 × 720P HD"],

      ["AI functions", "ADAS, DMS and BSD"],

      ["Cellular network", "Built-in 4G LTE"],

      ["Positioning", "GPS + Beidou"],

      ["Storage", "TF card support up to 512GB"],

      ["Compression", "H.265 / H.264"],

      ["Audio", "Built-in microphone and speaker"],

      ["Live operations", "Live preview + voice intercom"],

      ["Power supply", "DC 10V–36V"],

      ["Power consumption", "<5W"],

      ["Operating temperature", "-25°C to +70°C"],

      ["Dimensions", "120 × 77 × 55 mm"],

      ["Weight", "260 g"],

    ],

    note:

      "Supplier device names are intentionally omitted. Final camera configuration is confirmed before deployment.",

  },

  {

    id: "smart-logistics-locks",

    number: "04",

    title: "Smart Logistics Locks",

    category: "Cargo Security",

    description:

      "A connected logistics lock combining 4G and GNSS positioning with lock-state visibility, long battery life and tamper-aware cargo security workflows.",

    image: "/image/smart-lock.png",

    gallery: [

      "/image/smart-lock.png"

    ],

    features: [

      {

        icon: Radio,

        title: "4G + GNSS",

        text: "Connected positioning keeps lock events tied to location and operational context.",

      },

      {

        icon: BatteryCharging,

        title: "12000mAh Battery",

        text: "A rechargeable high-capacity battery supports long-duration logistics deployments.",

      },

      {

        icon: ShieldCheck,

        title: "Tamper Protection",

        text: "Shell-open, lock-cut and lock-failure events can be reported to the platform.",

      },

    ],

    specs: [

      ["Connectivity", "4G cellular + GNSS positioning"],

      ["Battery", "12000mAh rechargeable lithium battery"],

      ["Access methods", "IC card, BLE, SMS, platform, app, geo-fence and timing"],

      ["Bluetooth", "Bluetooth 5.1"],

      ["RFID", "13.56MHz · ISO14443A"],

      ["Security events", "Shell-open, lock-cut, lock-failure and low-power alerts"],

      ["Positioning", "GNSS + assisted / network positioning"],

      ["Protection", "IP68"],

      ["Power saving", "Moving/static, latent and scheduled wake modes"],

      ["Charging", "DC 12V / 2A"],

      ["Operating temperature", "-30°C to +80°C"],

      ["Dimensions", "140 × 86 × 38 mm"],

      ["Lock formats", "Rope-type and pole-type configurations"],

    ],

    note:

      "Exact lock format and regional communication bands depend on deployment configuration.",

  },

];

/* =========================================================****

*MORE FROM VIOT ECOSYSTEM****

*These are separate from the 4 primary products.****

*AIS 140 intentionally NOT included.****

****========================================================= */

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

      "/image/vehicle-telematics.png"

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

      "/image/video-telementics.png"

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

      "/image/smart-lock.png"

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

      "/image/smart-infra.png"

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

      "/image/asset-trackers.png"

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

      "/image/iot-sensors.png"

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

      "/image/access-control.png"

    ],

  },

];

/* =========================================================****

*SCROLL REVEAL****

****========================================================= */

function Reveal({

  children,

  className = "",

  delay = 0,

}: {

  children: ReactNode;

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

/* =========================================================****

*APPROVED VIOT SVG ANIMATION****

*KEEP THIS VISUAL LANGUAGE:****

*- flowing paths****

*- dashed green data flow****

*- rotating engineering rings****

*- moving signal points****

****========================================================= */

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

      {/* =====================================================****

      FLOWING SVG PATHS****

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

      {/* =====================================================****

      ENGINEERING RINGS****

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

      {/* =====================================================****

      MOVING SIGNAL POINTS****

  ===================================================== */}

      <motion.span

        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

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

        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

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

        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

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

          className={`absolute h-1 w-1 rounded-full ${

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

/* =========================================================****

HERO***

****========================================================= */

function ProductHero() {

  return (

    <section className="relative mx-auto h-[84vh] min-h-[560px] max-h-[720px] overflow-hidden bg-[#081b24] text-white">

      {/* =====================================================****

      APPROVED VIOT SVG BACKGROUND****

  ===================================================== */}

      <VIoTSVGBackground dark />

      {/* =====================================================****

      TECHNICAL GRID****

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

      {/* =====================================================****

      VIDEO — BACKGROUND VISUAL****

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

        {/* =================================================****

        GLOBAL VIDEO OVERLAY****

    ================================================= */}

        <div className="absolute inset-0 bg-[#081b24]/30" />

        {/* =================================================****

        LEFT DARK GRADIENT****

        This keeps text readable****

    ================================================= */}

        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#081b24] via-[#081b24]/95 via-[42%] to-[#081b24]/15" />

        {/* =================================================****

        BOTTOM CINEMATIC BLEND****

    ================================================= */}

        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#081b24] to-transparent" />

        {/* =================================================****

        TOP BLEND****

    ================================================= */}

        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#081b24]/45 to-transparent" />

      </motion.div>

      {/* =====================================================****

      ANIMATED TELEMETRY POINT****

  ===================================================== */}

      <motion.span

        className="pointer-events-none absolute left-[48%] top-[43%] z-[4] h-2 w-2 rounded-full bg-[#27d59b] shadow-[0_0_18px_rgba(39,213,155,0.7)]"

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

      {/* =====================================================****

      MAIN CONTENT****

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

          {/* =================================================****

          KICKER****

      ================================================= */}

          <div className="flex items-center gap-3">

            <span className="h-px w-9 bg-[#27d59b]" />

            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#27d59b]">

              VIoT / Products

            </span>

          </div>

          {/* =================================================****

          HEADING****

      ================================================= */}

          <h1 className="mt-7 max-w-[650px] font-heading text-[clamp(3rem,5.3vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">

            <span className="block whitespace-nowrap">

              Hardware that moves

            </span>

            <span className="mt-2 block whitespace-nowrap text-[#27d59b]">

              with you.

            </span>

          </h1>

          {/* =================================================****

          DESCRIPTION****

      ================================================= */}

          <p className="mt-7 max-w-[500px] text-[14px] leading-[1.8] text-white/55 sm:text-[15px]">

            Connected tracking hardware designed to capture what is

            happening in the field and turn vehicle movement into useful

            operational intelligence.

          </p>

          {/* =================================================****

          PRODUCT INDICATORS****

      ================================================= */}

          <div className="mt-8 flex flex-wrap items-center gap-2.5">

            {[

              "Basic Tracking",

              "Advanced Tracking",

              "Video Telematics",

              "Smart Logistics",

            ].map((item) => (

              <div

                key={item}

                className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 backdrop-blur-sm"

              >

                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/50">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </motion.div>

      </div>

      {/* =====================================================****

      LIVE DATA LABEL****

  ===================================================== */}

      <div className="absolute bottom-7 right-7 z-[11] rounded-xl border border-white/10 bg-[#081b24]/75 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:right-10 lg:right-14">

        <div className="flex items-center gap-2">

          <motion.span

            animate={{

              opacity: [0.35, 1, 0.35],

            }}

            transition={{

              duration: 1.8,

              repeat: Infinity,

            }}

            className="h-1.5 w-1.5 rounded-full bg-[#27d59b]"

          />

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/65">

            Live vehicle data

          </span>

        </div>

      </div>

      {/* =====================================================****

      BOTTOM STATUS LINE****

  ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 z-[10] px-7 pb-4 sm:px-10 lg:px-14">

        <div className="h-px w-full bg-white/10" />

      </div>

    </section>

  );

}

/* =========================================================****

*PRODUCT CAROUSEL****

****========================================================= */

function ProductCarousel({

  product,

}: {

  product: MainProduct;

}) {

  const [active, setActive] = useState(0);

  const hasMultipleImages = product.gallery.length > 1;

return (

    <div className="relative overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#eef2ef] shadow-[0_18px_45px_rgba(8,27,36,0.09)]">

      <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">

        <AnimatePresence mode="wait">

          <motion.div

            key={product.gallery[active]}

            initial={{ opacity: 0, scale: 1.015 }}

            animate={{ opacity: 1, scale: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 0.4 }}

            className="absolute inset-0 flex items-center justify-center p-5 sm:p-7 lg:p-8"

          >

            <Image

              src={product.gallery[active]}

              alt={product.title}

              fill

              sizes="(max-width: 1024px) 100vw, 56vw"

              className="object-contain p-5 sm:p-7 lg:p-8"

            />

          </motion.div>

        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/18 via-transparent to-white/[0.04]" />

        <div className="absolute left-4 top-4 rounded-lg border border-[#081b24]/10 bg-white/85 px-3 py-2 shadow-[0_6px_18px_rgba(8,27,36,0.06)] backdrop-blur-md sm:left-5 sm:top-5">

          <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-[#607078]">

            {product.category}

          </span>

        </div>

<div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-5">

          <span className="rounded-md bg-white/75 px-2 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#607078] backdrop-blur-sm">

            Product / {product.number}

          </span>

        </div>

      </div>

      {hasMultipleImages && (

        <div className="flex items-center gap-2 border-t border-[#d7e0dc] bg-white/80 px-4 py-3 sm:px-5">

          {product.gallery.map((_, index) => (

            <button

              key={index}

              type="button"

              onClick={() => setActive(index)}

              aria-label={`Show image ${index + 1}`}

              className={`h-1 rounded-full transition-all duration-300 ${

                active === index ? "w-8 bg-[#007c67]" : "w-4 bg-[#081b24]/12 hover:bg-[#081b24]/25"

              }`}

            />

          ))}

        </div>

      )}

    </div>

  );

}

/* =========================================================****

*SPECIFICATIONS BUTTON****

*Future client specs can be inserted into modal.****

****========================================================= */

function SpecificationsButton({
  product,
}: {
  product: MainProduct;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const html = document.documentElement;

    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const previousHtmlOverflow = html.style.overflow;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      html.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const modal =
    mounted && open
      ? createPortal(
          <AnimatePresence>
            <motion.div
              key="specifications-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#081b24]/95 px-4 py-4 sm:px-6 sm:py-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby={`spec-title-${product.id}`}
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.985 }}
                transition={{
                  duration: 0.24,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={(event) => event.stopPropagation()}
                className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:max-h-[88dvh]"
              >
                <div className="shrink-0 border-b border-[#d3ddd9] bg-[#f4f6f2] px-5 py-5 sm:px-6">
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-7 bg-[#27d59b]" />
                        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                          Specifications
                        </span>
                      </div>

                      <h3
                        id={`spec-title-${product.id}`}
                        className="mt-3 font-heading text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#081b24] sm:text-[28px]"
                      >
                        {product.title}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="shrink-0 rounded-lg border border-[#cdd5d2] bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#607078] transition-colors duration-300 hover:border-[#007c67]/30 hover:text-[#081b24]"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div
                  className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-[#f4f6f2] px-5 py-5 sm:px-6"
                  style={{
                    WebkitOverflowScrolling: "touch",
                    overscrollBehavior: "contain",
                  }}
                  onWheel={(event) => event.stopPropagation()}
                  onTouchMove={(event) => event.stopPropagation()}
                >
                  <div className="overflow-hidden rounded-xl border border-[#cdd8d4] bg-white">
                    <div className="divide-y divide-[#d8e1de]">
                      {product.specs.map(([label, value], index) => (
                        <div
                          key={`${label}-${value}`}
                          className="grid gap-1.5 px-4 py-3.5 sm:grid-cols-[150px_1fr] sm:items-start sm:gap-5 sm:px-5"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[7px] text-[#9aa5a1]">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-[#007c67]">
                              {label}
                            </span>
                          </div>

                          <span className="text-[12px] leading-5 text-[#42545b]">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {product.note && (
                    <div className="mt-4 rounded-xl border border-[#d7e0dc] bg-white px-4 py-3.5">
                      <p className="text-[10px] leading-5 text-[#607078]">
                        {product.note}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex h-11 items-center gap-3 rounded-lg border border-[#081b24] bg-[#081b24] px-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_10px_28px_rgba(8,27,36,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#007c67] hover:bg-[#007c67]"
      >
        <span>Specifications</span>
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>

      {modal}
    </>
  );
}

/* =========================================================***

MAIN PRODUCT SECTION***

***========================================================= */

function MainProductSection({

  product,

}: {

  product: MainProduct;

}) {

  return (

    <section

      id={product.id}

      className="relative overflow-hidden border-t border-[#d4dfdb] bg-[#f4f6f2]"

    >

      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">

          <Reveal className="lg:col-span-7 xl:col-span-7">

            <ProductCarousel product={product} />

          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">

            <div className="max-w-xl">

              <div className="flex items-center gap-3">

                <span className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white/70 px-2 font-mono text-[8px] font-semibold tracking-[0.14em] text-[#007c67]">

                  {product.number}

                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#607078]">

                  {product.category}

                </span>

              </div>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[44px]">

                {product.title}

              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-[#607078] sm:text-[15px]">

                {product.description}

              </p>

              <div className="mt-6 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">

                {product.features.map((feature, index) => {

                  const Icon = feature.icon;

                  return (

                    <motion.div

                      key={feature.title}

                      initial={{ opacity: 0, y: 10 }}

                      whileInView={{ opacity: 1, y: 0 }}

                      viewport={{ once: true, amount: 0.25 }}

                      transition={{

                        duration: 0.45,

                        delay: index * 0.06,

                        ease: [0.16, 1, 0.3, 1],

                      }}

                      className="group rounded-xl border border-[#cdd8d4] bg-white/65 p-3.5 backdrop-blur-sm transition-all duration-300 hover:border-[#007c67]/25 hover:bg-white"

                    >

                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.04] text-[#007c67]">

                        <Icon className="h-3.5 w-3.5" />

                      </div>

                      <h3 className="mt-3 font-heading text-[13px] font-semibold text-[#081b24]">

                        {feature.title}

                      </h3>

                      <p className="mt-1 text-[11px] leading-[1.6] text-[#607078]">

                        {feature.text}

                      </p>

                    </motion.div>

                  );

                })}

              </div>

              <div className="mt-7 flex flex-wrap items-center gap-4">

                <SpecificationsButton product={product} />

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#607078]">

                  Technical details

                </span>

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}

/* =========================================================****

*TECHNICAL PROFILE****

*Replaces Connected Journey banner.****

****========================================================= */

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

          <Reveal className="lg:col-span-7 xl:col-span-7">

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

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

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

              className="group rounded-xl border border-white/[0.09] bg-white/[0.025] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.16] hover:bg-white/[0.05]"

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

/* =========================================================****

*ECOSYSTEM CAROUSEL****

****========================================================= */

function EcosystemCarousel({

  product,

}: {

  product: EcosystemProduct;

}) {

  const [active, setActive] = useState(0);

return (

    <article className="group overflow-hidden rounded-2xl border border-[#c9d6d1] bg-white/72 shadow-[0_12px_34px_rgba(8,27,36,0.045)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#007c67]/20 hover:shadow-[0_18px_42px_rgba(8,27,36,0.07)]">

      <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2ef]">

        <AnimatePresence mode="wait">

          <motion.div

            key={`${product.id}-${active}`}

            initial={{ opacity: 0, scale: 1.015 }}

            animate={{ opacity: 1, scale: 1 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 0.4 }}

            className="absolute inset-0"

          >

            <Image

              src={product.gallery[active]}

              alt={`${product.title} image`}

              fill

              sizes="(max-width: 768px) 100vw, 33vw"

              className="object-contain p-5 transition-transform duration-700 group-hover:scale-[1.02] sm:p-6"

            />

          </motion.div>

        </AnimatePresence>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/16 via-transparent to-white/[0.03]" />

        <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#081b24]/55 px-3 py-2 backdrop-blur-sm">

          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]">

            {product.category}

          </span>

        </div>

</div>

      <div className="p-5">

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <div className="flex items-center gap-2.5">

              <span className="font-mono text-[8px] tracking-[0.16em] text-[#007c67]">

                {product.number}

              </span>

              <span className="h-px w-5 bg-[#27d59b]/70" />

            </div>

            <h3 className="mt-2 font-heading text-lg font-semibold tracking-[-0.025em] text-[#081b24] sm:text-xl">

              {product.title}

            </h3>

          </div>

          <Link

            href={product.href}

            aria-label={`Explore ${product.title}`}

            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.035] text-[#007c67] transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67] hover:text-white"

          >

            <ArrowUpRight className="h-4 w-4" />

          </Link>

        </div>

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-[#607078]">

          {product.description}

        </p>

        <div className="mt-4 flex items-center gap-1.5">

          {product.gallery.map((_, index) => (

            <button

              key={index}

              type="button"

              onClick={() => setActive(index)}

              aria-label={`Show image ${index + 1}`}

              className={`h-1 rounded-full transition-all duration-300 ${

                active === index ? "w-7 bg-[#27d59b]" : "w-3 bg-[#cdd5d2]"

              }`}

            />

          ))}

        </div>

      </div>

    </article>

  );

}

/* =========================================================****

*MORE FROM ECOSYSTEM****

****========================================================= */

function MoreFromEcosystem() {

  return (

    <section className="relative overflow-hidden border-t border-[#d4dfdb] bg-[#f4f6f2]">

      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

        <Reveal>

          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">

              <div className="flex items-center gap-3">

                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                  VIoT ecosystem

                </span>

              </div>

              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">

                More connected products,

                <span className="text-[#007c67]"> one ecosystem.</span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-[#607078] lg:col-span-5 lg:ml-auto lg:text-right">

              Explore products across fleet, asset and access intelligence.

            </p>

          </div>

        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {ecosystemProducts.map((product, index) => (

            <Reveal key={product.id} delay={index * 0.04}>

              <EcosystemCarousel product={product} />

            </Reveal>

          ))}

        </div>

      </div>

    </section>

  );

}

/* =========================================================****

PAGE***

****========================================================= */

export default function ProductsClient() {

  return (

    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

      {/* 01 */}

      <ProductHero />

      {/* 02 / 03 / 04 */}

      {mainProducts.map((product) => (

        <MainProductSection

          key={product.id}

          product={product}

        />

      ))}

      {/* Connected Journey removed.****

      Technical Profile takes its place. */}

      <TechnicalProfile />

      {/* More from VIoT Ecosystem */}

      <MoreFromEcosystem />

      {/* CTA */}

      <CtaBand />

    </main>

  );

}