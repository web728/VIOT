"use client";

import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

type ShowcaseProduct = {
  id: string;
  meta: string;
  title: string;
  spec: string;
  href: string;
  image: string;
};

const products: ShowcaseProduct[] = [
  {
    id: "vehicle-telematics",
    meta: "Fleet Intelligence",
    title: "Vehicle Telematics",
    spec: "4G connectivity · 9–90V input · vehicle immobilisation",
    href: "/products/vehicle-telematics",
    image: "/products/vehicle-telematics.png",
  },
  {
    id: "video-telematics",
    meta: "Fleet Intelligence",
    title: "Video Telematics",
    spec: "3-channel HD · ADAS / DMS / BSD · 4G remote connectivity",
    href: "/products/video-telematics",
    image: "/products/video-telematics.png",
  },
  {
    id: "smart-logistics-locks",
    meta: "Asset Intelligence",
    title: "Smart Logistics Locks",
    spec: "4G + GNSS · 12000mAh battery · tamper alerts",
    href: "/products/smart-logistics-locks",
    image: "/products/smart-locks.png",
  },
  {
    id: "smart-infra-locks",
    meta: "Access Intelligence",
    title: "Smart Infra Locks",
    spec: "Lock-state visibility · exception-led monitoring",
    href: "/products/smart-infra-locks",
    image: "/products/access-management.png",
  },
  {
    id: "asset-trackers",
    meta: "Asset Intelligence",
    title: "Asset Trackers",
    spec: "7800 / 10000mAh · magnetic mount · geo-fence alerts",
    href: "/products/asset-trackers",
    image: "/products/asset-tracking.png",
  },
  {
    id: "iot-sensors",
    meta: "Asset Intelligence",
    title: "IoT Sensors",
    spec: "Temperature · fuel · application-specific sensing",
    href: "/products/iot-sensors",
    image: "/products/iot-sensors.png",
  },
];

/* =========================================================*

  SAME SVG BACKGROUND ANIMATION*

*========================================================= */

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

      {/* Engineering rings */}

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

      {/* Moving signal points */}

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

export function ProductsShowcase() {

  return (

    <section className="relative overflow-hidden border-t border-line bg-paper">

      <ProductsEcosystemBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        {/* Header */}

        <div className="mb-10 border-b border-line pb-8">

          <div className="mb-4 flex items-center gap-3">

            <span className="h-px w-8 bg-signal-dark" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal-dark">

              Products

            </span>

          </div>

          <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">

            Our products

          </h2>

        </div>

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (

            <motion.div

              key={product.id}

              initial={{ opacity: 0, y: 12 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true, margin: "-60px" }}

              transition={{

                duration: 0.5,

                delay: (index % 3) * 0.08,

                ease: [0.16, 1, 0.3, 1],

              }}

            >

              <Link

                href={product.href}

                className="group block rounded-2xl border border-line bg-white p-3 transition-colors duration-300 hover:border-signal-dark"

              >

                {/* Image — no text on top of it */}

                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink">

                  <Image

                    src={product.image}

                    alt={product.title}

                    fill

                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"

                  />

                </div>

                {/* Content below image */}

                <div className="px-2 pb-2 pt-5">

                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-dark">

                    {product.meta}

                  </span>

                  <div className="mt-2 flex items-start justify-between gap-4">

                    <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-ink">

                      {product.title}

                    </h3>

                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-signal-dark group-hover:bg-signal-dark group-hover:text-white">

                      <ArrowIcon className="h-2.5 w-2.5" />

                    </span>

                  </div>

                  <div className="mt-4 border-t border-line pt-4">

                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">

                      Key specification

                    </p>

                    <p className="mt-1.5 text-sm font-medium text-ink">

                      {product.spec}

                    </p>

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

}