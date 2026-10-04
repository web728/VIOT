"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { CtaBand } from "@/components/home/CtaBand";

import { PlatformFlywheel } from "@/components/home/PlatformFlywheel";

const values = [

  {

    num: "01",

    title: "Integrity",

    copy: "Be clear about what is ready, what depends on configuration, and where a solution is not the right fit.",

  },

  {

    num: "02",

    title: "Accountability",

    copy: "Own the connected path from hardware and deployment through platform visibility and support.",

  },

  {

    num: "03",

    title: "Follow-through",

    copy: "Stay accountable through deployment, operation and ongoing support—not only before implementation.",

  },

];

const disciplines = [
  {
    num: "01",
    title: "Connected Mobility",
    copy: "Vehicle tracking, video and fleet operations.",
  },
  {
    num: "02",
    title: "Asset & Sensor Intelligence",
    copy: "Assets, cargo, fuel, temperature and field sensing.",
  },
  {
    num: "03",
    title: "Connected Security",
    copy: "Smart locks, access state and security events.",
  },
];

/* =========================================================*

  CLIENT-APPROVED VIoT SVG BACKGROUND*

  Same visual language:*

  flowing paths + dashed signal flow + engineering rings*

  + moving signal points.*

*========================================================= */

function ApprovedVIoTBackground({

  dark = false,

}: {

  dark?: boolean;

}) {

  return (

    <div

      className={`pointer-events-none absolute inset-0 overflow-hidden ${

        dark ? "opacity-100" : "opacity-80"

      }`}

      aria-hidden="true"

    >

      {/* subtle atmosphere */}

      <div

        className={`absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full blur-3xl ${

          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.035]"

        }`}

      />

      <div

        className={`absolute -right-56 bottom-[5%] h-[620px] w-[620px] rounded-full blur-3xl ${

          dark ? "bg-white/[0.015]" : "bg-[#007c67]/[0.025]"

        }`}

      />

      {/* =====================================================*

         FLOWING SYSTEM PATHS*

     ===================================================== */}

      <svg

        viewBox="0 0 1600 1000"

        preserveAspectRatio="none"

        className="absolute inset-0 h-full w-full"

        fill="none"

      >

        {/* Upper engineering path */}

        <motion.path

          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"

          stroke={

            dark

              ? "rgba(255,255,255,0.055)"

              : "rgba(8,27,36,0.075)"

          }

          strokeWidth="1"

          initial={{ pathLength: 0 }}

          whileInView={{ pathLength: 1 }}

          viewport={{ once: true }}

          transition={{

            duration: 2.4,

            ease: "easeOut",

          }}

        />

        {/* Main green data flow */}

        <motion.path

          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"

          stroke={

            dark

              ? "rgba(39,213,155,0.14)"

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

              : "rgba(8,27,36,0.05)"

          }

          strokeWidth="1"

        />

        {/* lower flowing path */}

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

      {/* =====================================================*

         ENGINEERING RINGS*

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

      {/* =====================================================*

         MOVING SIGNAL POINTS*

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

            dark ? "bg-white/20" : "bg-[#081b24]/20"

          }`}

          style={{ left, top }}

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

/* =========================================================*

  WHY VIOT IMAGE VISUAL*

*========================================================= */

function WhyVIoTVisual() {

  const technicalPoints = [

    { side: "left", position: "top-[16%]", label: "Field signal", delay: 0 },

    { side: "right", position: "top-[31%]", label: "Connected data", delay: 0.08 },

    { side: "left", position: "bottom-[22%]", label: "Real-time", delay: 0.14 },

    { side: "right", position: "bottom-[14%]", label: "Secure layer", delay: 0.2 },

  ];

  return (

    <div className="relative mx-auto w-full max-w-[600px]">

      <div className="absolute -inset-4 hidden rounded-[28px] border border-[#007c67]/10 sm:block" />

      <div className="relative overflow-hidden rounded-2xl border border-[#bfcfc9] bg-[#081b24] shadow-[0_22px_60px_rgba(8,27,36,0.12)]">

        <div className="relative aspect-[4/3]">

          <Image

            src="/image/about-sec.png"

            alt="VIoT connected technology"

            fill

            priority

            className="object-cover"

          />

          <div className="absolute inset-0 bg-[#081b24]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/35 via-transparent to-transparent" />

          <motion.div

            className="absolute left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#27d59b]/70 to-transparent"

            animate={{

              top: ["8%", "88%", "8%"],

              opacity: [0, 0.75, 0],

            }}

            transition={{

              duration: 5,

              repeat: Infinity,

              ease: "easeInOut",

            }}

          />

          <span className="absolute left-4 top-4 h-5 w-5 rounded-tl-md border-l border-t border-white/35" />

          <span className="absolute right-4 top-4 h-5 w-5 rounded-tr-md border-r border-t border-white/35" />

          <motion.span

            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27d59b]"

            animate={{

              scale: [0.8, 1.15, 0.8],

              opacity: [0.45, 1, 0.45],

              boxShadow: [

                "0 0 0 3px rgba(39,213,155,0.08)",

                "0 0 0 8px rgba(39,213,155,0.12)",

                "0 0 0 3px rgba(39,213,155,0.08)",

              ],

            }}

            transition={{

              duration: 2.2,

              repeat: Infinity,

              ease: "easeInOut",

            }}

          />

        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#081b24]/80 px-5 py-4 backdrop-blur-md">

          <div className="flex items-center justify-between gap-4">

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/55 sm:text-[9px]">

              Field technology

            </span>

            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#27d59b] sm:text-[9px]">

              <motion.span

                className="h-1.5 w-1.5 rounded-full bg-[#27d59b]"

                animate={{ opacity: [0.35, 1, 0.35] }}

                transition={{ duration: 1.8, repeat: Infinity }}

              />

              Connected

            </span>

          </div>

        </div>

      </div>

      {technicalPoints.map((point) => {

        const isLeft = point.side === "left";

        return (

          <motion.div

            key={point.label}

            initial={{ opacity: 0, x: isLeft ? -10 : 10 }}

            whileInView={{ opacity: 1, x: 0 }}

            viewport={{ once: true, amount: 0.3 }}

            transition={{ duration: 0.5, delay: point.delay }}

            className={`absolute hidden sm:block ${point.position} ${

              isLeft ? "-left-3" : "-right-3"

            }`}

          >

            <div className="flex items-center gap-2">

              {isLeft && (

                <>

                  <span className="h-2 w-2 rounded-full border border-[#27d59b] bg-[#081b24]" />

                  <span className="h-px w-8 bg-[#27d59b]/45 lg:w-12" />

                </>

              )}

              <div className="rounded-lg border border-[#007c67]/15 bg-[#f4f6f2]/95 px-3 py-2 shadow-[0_8px_22px_rgba(8,27,36,0.06)] backdrop-blur-md">

                <span className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.16em] text-[#007c67]">

                  {point.label}

                </span>

              </div>

              {!isLeft && (

                <>

                  <span className="h-px w-8 bg-[#27d59b]/45 lg:w-12" />

                  <span className="h-2 w-2 rounded-full border border-[#27d59b] bg-[#081b24]" />

                </>

              )}

            </div>

          </motion.div>

        );

      })}

    </div>

  );

}

/* =========================================================*

  COMPANY OPERATING MODEL*

*========================================================= */

const CYCLE = 4;

const vizNodes = [

  { id: "fleet", x: 66, label: "Fleet", sub: "Vehicles · Trips" },

  { id: "asset", x: 200, label: "Asset", sub: "Cargo · Equipment" },

  { id: "access", x: 334, label: "Access", sub: "Doors · Locks" },

];

const vizPaths = [

  "M66,72 C66,140 150,130 150,192",

  "M200,72 L200,192",

  "M334,72 C334,140 250,130 250,192",

];

const outPath = "M200,248 L200,332";

function OperatingModelIllustration() {

  return (

    <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#c7d5d0] bg-[#f8faf7]/90 p-5 shadow-[0_20px_55px_rgba(8,27,36,0.08)] backdrop-blur-sm sm:p-8">

      <svg

        viewBox="0 0 400 410"

        className="h-auto w-full"

        role="img"

        aria-label="Mobility, asset and security intelligence feeding one VIoT platform and one operating view"

      >

        <defs>

          <marker

            id="about-arrow"

            viewBox="0 0 8 8"

            refX="7"

            refY="4"

            markerWidth="6"

            markerHeight="6"

            orient="auto"

          >

            <path d="M0 0L8 4L0 8z" fill="rgba(8,27,36,0.35)" />

          </marker>

        </defs>

        {[...vizPaths, outPath].map((d) => (

          <path

            key={d}

            d={d}

            fill="none"

            stroke="rgba(8,27,36,0.2)"

            strokeWidth="1.2"

            markerEnd="url(#about-arrow)"

          />

        ))}

        {vizPaths.map((d) => (

          <rect

            key={`dot-${d}`}

            x="-3.5"

            y="-3.5"

            width="7"

            height="7"

            fill="#27d59b"

          >

            <animateMotion

              path={d}

              dur={`${CYCLE}s`}

              repeatCount="indefinite"

              calcMode="linear"

              keyPoints="0;1;1"

              keyTimes="0;0.4;1"

            />

            <animate

              attributeName="opacity"

              values="1;1;0;0"

              keyTimes="0;0.4;0.401;1"

              dur={`${CYCLE}s`}

              repeatCount="indefinite"

            />

          </rect>

        ))}

        <rect x="-3.5" y="-3.5" width="7" height="7" fill="#27d59b">

          <animateMotion

            path={outPath}

            dur={`${CYCLE}s`}

            begin={`${0.4 * CYCLE}s`}

            repeatCount="indefinite"

            calcMode="linear"

          />

          <animate

            attributeName="opacity"

            values="1;1;0;0"

            keyTimes="0;0.4;0.401;1"

            dur={`${CYCLE}s`}

            begin={`${0.4 * CYCLE}s`}

            repeatCount="indefinite"

          />

        </rect>

        {vizNodes.map((n) => (

          <g key={n.id}>

            <rect

              x={n.x - 58}

              y="8"

              width="116"

              height="64"

              rx="10"

              ry="10"

              fill="#ffffff"

              stroke="#007c67"

              strokeOpacity="0.25"

            />

            <text

              x={n.x}

              y="36"

              textAnchor="middle"

              fill="#081b24"

              fontSize="15"

              fontWeight="600"

            >

              {n.label}

            </text>

            <text

              x={n.x}

              y="55"

              textAnchor="middle"

              fill="#607078"

              fontSize="11"

            >

              {n.sub}

            </text>

          </g>

        ))}

        <rect x="140" y="192" width="120" height="56" rx="11" ry="11" fill="#081b24" />

        <rect

          x="140"

          y="192"

          width="120"

          height="56"

          rx="11"

          ry="11"

          fill="none"

          stroke="#27d59b"

          strokeOpacity="0.7"

        />

      <image

  href="/logo/logo.png"

  x="145"

  y="195"

  width="110"

  height="45"

  preserveAspectRatio="xMidYMid meet"

/>

<text

  x="200"

  y="236"

  textAnchor="middle"

  fill="rgba(255,255,255,0.6)"

  fontSize="11"

>

  Platform

</text>

        <rect

          x="100"

          y="332"

          width="200"

          height="64"

          rx="11"

          ry="11"

          fill="#ffffff"

          stroke="#007c67"

          strokeOpacity="0.25"

        />

        <text

          x="200"

          y="361"

          textAnchor="middle"

          fill="#081b24"

          fontSize="15"

          fontWeight="600"

        >

          One operating view

        </text>

        <text

          x="200"

          y="380"

          textAnchor="middle"

          fill="#607078"

          fontSize="11"

        >

          Alerts · Decisions

        </text>

      </svg>

    </div>

  );

}

/* =========================================================*

  PAGE*

*========================================================= */

export default function AboutPage() {

  return (

    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

      {/* =====================================================*

         01 — HERO*

     ===================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#081b24] text-white sm:min-h-[680px]">

        <ApprovedVIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-24 sm:min-h-[680px] sm:px-8 lg:px-12">

          <div className="w-full max-w-4xl">

            <motion.div

              initial={{ opacity: 0, y: 18 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.7,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="flex items-center gap-3"

            >

              <span className="h-px w-10 bg-[#27d59b]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">

                Company / About VIoT

              </span>

            </motion.div>

            <motion.h1

              initial={{ opacity: 0, y: 28 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.8,

                delay: 0.08,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="mt-7 max-w-4xl font-heading text-[44px] font-semibold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px]"

            >

              Technology that connects

              <br />

              <span className="text-[#27d59b]">

                the physical world.

              </span>

            </motion.h1>

            <motion.p

              initial={{ opacity: 0, y: 18 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.65,

                delay: 0.18,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base"

            >

              VIoT brings dependable hardware, connected intelligence and

              operational technology together across vehicles, assets and

              physical spaces.

            </motion.p>

            <motion.div

              initial={{ opacity: 0, y: 15 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.6,

                delay: 0.28,

              }}

              className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4"

            >

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">

                  Hardware

                </span>

              </div>

              <div className="h-4 w-px bg-white/10" />

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">

                  Intelligence

                </span>

              </div>

              <div className="h-4 w-px bg-white/10" />

              <div className="flex items-center gap-3">

                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">

                  Action

                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================*

         02 — WHY VIOT*

     ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">

        <ApprovedVIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">

            {/* Copy */}

            <motion.div

              initial={{ opacity: 0, y: 24 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.2 }}

              transition={{

                duration: 0.7,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="relative z-10 lg:col-span-6"

            >

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-10 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                  01 / Why VIoT exists

                </span>

              </div>

              <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">

                Connected systems should

                <br />

                <span className="text-[#007c67]">

                  work when it matters.

                </span>

              </h2>

              <blockquote className="mt-7 max-w-xl rounded-xl border border-[#007c67]/10 border-l-[3px] border-l-[#27d59b] bg-white/55 px-5 py-4 font-heading text-xl font-medium leading-[1.35] tracking-[-0.025em] text-[#081b24] shadow-[0_10px_30px_rgba(8,27,36,0.035)] backdrop-blur-sm sm:text-2xl">

                “Connected systems earn trust only when they keep working at

                the moment it matters most.”

              </blockquote>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#607078] sm:text-[15px]">

                Power cuts, tampering and remote operating environments are

                exactly when dependable technology matters most. VIoT was

                built to close that reliability gap across vehicles, assets

                and controlled physical access.

              </p>

              <div className="mt-8 flex items-center gap-3">

                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-[#007c67]">

                  Built for real operating conditions

                </span>

              </div>

            </motion.div>

            {/* Existing image + premium points */}

            <motion.div

              initial={{ opacity: 0, scale: 0.97 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true, amount: 0.2 }}

              transition={{

                duration: 0.8,

                ease: [0.16, 1, 0.3, 1],

              }}

              className="relative z-10 lg:col-span-6"

            >

              <WhyVIoTVisual />

            </motion.div>

          </div>

        </div>

      </section>

   <PlatformFlywheel/>

      {/* =====================================================*

         03 — WHAT WE VALUE*

     ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/10 bg-[#081b24] text-white">

        <ApprovedVIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">

            <motion.div

              initial={{ opacity: 0, y: 20 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.2 }}

              transition={{ duration: 0.65 }}

              className="lg:col-span-4"

            >

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-9 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">

                  02 / What we value

                </span>

              </div>

              <h2 className="font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">

                The way we build

                <br />

                <span className="text-[#27d59b]">matters.</span>

              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">

                Technology is only part of the relationship. We care about

                what happens before deployment, during implementation and long

                after the system goes live.

              </p>

            </motion.div>

            <div className="lg:col-span-8">

              <div className="border-y border-white/10">

                {values.map((value, index) => (

                  <motion.div

                    key={value.num}

                    initial={{ opacity: 0, x: 18 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true, amount: 0.2 }}

                    transition={{

                      duration: 0.55,

                      delay: index * 0.08,

                    }}

                    className="group grid grid-cols-1 gap-4 border-b border-white/10 py-7 last:border-b-0 sm:grid-cols-[60px_180px_1fr] sm:items-start sm:gap-6 sm:py-8"

                  >

                    <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-[#27d59b]">

                      {value.num}

                    </span>

                    <h3 className="font-heading text-lg font-semibold text-white">

                      {value.title}

                    </h3>

                    <p className="max-w-xl text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/70">

                      {value.copy}

                    </p>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================*

         04 — THE COMPANY*

     ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-white">

        <ApprovedVIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">

            <motion.div

              initial={{ opacity: 0, y: 22 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.2 }}

              transition={{ duration: 0.7 }}

              className="lg:col-span-7"

            >

              <div className="mb-6 flex items-center gap-3">

                <span className="h-px w-9 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                  03 / The company

                </span>

              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-5xl">

                Build the system around

                <br />

                <span className="text-[#007c67]">

                  the reality of the operation.

                </span>

              </h2>

              <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-[#607078] sm:text-[15px]">

                <p>

                  VIoT brings hardware, connected intelligence, operational

                  experience and commercial execution together under one

                  connected approach.

                </p>

                <p>

                  Whether it is a vehicle on the road, an asset in a yard or a

                  door in a controlled facility, the need is the same:

                  dependable hardware, data you can trust and a team that stays

                  accountable from selection through deployment.

                </p>

              </div>

              <div className="mt-9 max-w-2xl space-y-3">

                {disciplines.map((item) => (

                  <motion.div

                    key={item.num}

                    whileHover={{ x: 4 }}

                    transition={{ duration: 0.25 }}

                    className="group grid grid-cols-[42px_1fr] gap-3 rounded-xl border border-[#cdd5d2] bg-white/65 px-4 py-4 shadow-[0_8px_24px_rgba(8,27,36,0.025)] transition-all duration-300 hover:border-[#007c67]/25 hover:bg-white hover:shadow-[0_12px_30px_rgba(8,27,36,0.05)] sm:grid-cols-[42px_180px_1fr] sm:items-center sm:px-5"

                  >

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#007c67]/10 bg-[#007c67]/[0.04] font-mono text-[8px] font-semibold tracking-[0.14em] text-[#007c67]">

                      {item.num}

                    </span>

                    <h3 className="font-heading text-base font-semibold text-[#081b24]">

                      {item.title}

                    </h3>

                    <p className="col-start-2 text-sm leading-6 text-[#607078] sm:col-start-auto">

                      {item.copy}

                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

            <motion.div

              initial={{ opacity: 0, y: 22 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, amount: 0.2 }}

              transition={{

                duration: 0.7,

                delay: 0.08,

              }}

              className="lg:col-span-5"

            >

              <OperatingModelIllustration />

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================*

         05 — CTA*

     ===================================================== */}

      <CtaBand />

    </main>

  );

}