"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { CtaBand } from "@/components/home/CtaBand";

type EcosystemProduct = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  gallery: string[];
};

const ecosystemProducts: EcosystemProduct[] = [
  {
    id: "vehicle-telematics",
    number: "01",
    title: "Vehicle Telematics",
    category: "Fleet Intelligence",
    description:
      "Connected vehicle intelligence for location, movement and operational visibility.",
    href: "/products/vehicle-telematics",
    gallery: ["/image/vehicle-telematics.png"],
  },
  {
    id: "video-telematics",
    number: "02",
    title: "Video Telematics",
    category: "Fleet Intelligence",
    description:
      "Camera-based vehicle intelligence combining visual context with connected operations.",
    href: "/products/video-telematics",
    gallery: ["/image/video-telementics.png"],
  },
  {
    id: "smart-logistics-locks",
    number: "03",
    title: "Smart Logistics Locks",
    category: "Asset Intelligence",
    description:
      "Connected electronic locking technology for cargo security and physical asset protection.",
    href: "/products/smart-logistics-locks",
    gallery: ["/image/smart-lock.png"],
  },
  {
    id: "smart-infra-locks",
    number: "04",
    title: "Smart Infra Locks",
    category: "Access & Infrastructure",
    description:
      "Connected locking systems for controlled physical infrastructure.",
    href: "/products/smart-infra-locks",
    gallery: ["/image/smart-infra.png"],
  },
  {
    id: "asset-tracking",
    number: "05",
    title: "Asset Tracking",
    category: "Asset Intelligence",
    description:
      "Connected tracking for equipment, cargo and assets operating beyond vehicles.",
    href: "/products/asset-trackers",
    gallery: ["/image/asset-trackers.png"],
  },
  {
    id: "iot-sensors",
    number: "06",
    title: "IoT Sensors",
    category: "Asset Intelligence",
    description:
      "Connected sensing for environmental and operational conditions.",
    href: "/products/iot-sensors",
    gallery: ["/image/iot-sensors.png"],
  },
  {
    id: "access-control",
    number: "07",
    title: "Access Control",
    category: "Access Intelligence",
    description:
      "Connected access technology for physical entry and security events.",
    href: "/products/access-control",
    gallery: ["/image/access-control.png"],
  },
];

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
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.68,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function VIoTSVGBackground({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        dark ? "opacity-100" : "opacity-90"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute -left-48 top-[12%] h-[520px] w-[520px] rounded-full blur-3xl ${
          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.025]"
        }`}
      />

      <div
        className={`absolute -right-56 bottom-[8%] h-[650px] w-[650px] rounded-full blur-3xl ${
          dark ? "bg-white/[0.012]" : "bg-[#081b24]/[0.025]"
        }`}
      />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke={dark ? "rgba(255,255,255,0.055)" : "rgba(8,27,36,0.09)"}
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            ease: "easeOut",
          }}
        />

        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke={dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.13)"}
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.055)"}
          strokeWidth="1"
        />

        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke={dark ? "rgba(39,213,155,0.075)" : "rgba(0,124,103,0.065)"}
          strokeWidth="1"
          strokeDasharray="2 20"
          animate={{ strokeDashoffset: [0, 180] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      <motion.div
        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${
          dark ? "border-white/[0.035]" : "border-[#081b24]/[0.045]"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className={`absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border ${
          dark ? "border-[#27d59b]/[0.055]" : "border-[#007c67]/[0.06]"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

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
    </div>
  );
}

function ProductHero() {
  return (
    <section className="relative mx-auto h-[84vh] min-h-[560px] max-h-[720px] overflow-hidden bg-[#081b24] text-white">
      <VIoTSVGBackground dark />

      <motion.div
        initial={{ opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
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
          <source src="/video/products-hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#081b24]/30" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#081b24] via-[#081b24]/95 via-[42%] to-[#081b24]/15" />
        <div className="absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#081b24] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#081b24]/45 to-transparent" />
      </motion.div>

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

      <div className="relative z-[10] mx-auto flex h-full max-w-[1440px] items-center px-7 sm:px-10 lg:px-14 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full max-w-[680px]"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#27d59b]" />
            <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-[#27d59b]">
              VIoT / Products
            </span>
          </div>

          <h1 className="mt-7 max-w-[650px] font-heading text-[clamp(3rem,5.3vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white">
            <span className="block">Hardware that moves</span>
            <span className="mt-2 block text-[#27d59b]">with you.</span>
          </h1>

          <p className="mt-7 max-w-[500px] text-[14px] leading-[1.8] text-white/55 sm:text-[15px]">
            Connected tracking hardware designed to capture what is happening in
            the field and turn vehicle movement into useful operational
            intelligence.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[10] px-7 pb-4 sm:px-10 lg:px-14">
        <div className="h-px w-full bg-white/10" />
      </div>
    </section>
  );
}

function ProductRow({
  product,
  index,
}: {
  product: EcosystemProduct;
  index: number;
}) {
  const imageFirst = index % 2 === 0;

  return (
    <section className="relative overflow-hidden border-t border-[#d4dfdb] bg-[#f4f6f2]">
      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          <Reveal
            className={`lg:col-span-7 ${
              imageFirst ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <Link
              href={product.href}
              aria-label={`Explore ${product.title}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#eef2ef] shadow-[0_18px_45px_rgba(8,27,36,0.08)]">
                <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3]">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Image
                      src={product.gallery[0]}
                      alt={`${product.title} image`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-contain p-6 sm:p-8 lg:p-10"
                    />
                  </motion.div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/12 via-transparent to-white/[0.04]" />

                  {/* <div className="absolute left-4 top-4 rounded-lg border border-white/10 bg-[#081b24]/70 px-3 py-2 backdrop-blur-sm">
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]">
                      {product.category}
                    </span>
                  </div> */}
                </div>
              </div>
            </Link>
          </Reveal>

          <Reveal
            delay={0.08}
            className={`lg:col-span-5 ${
              imageFirst ? "lg:order-2" : "lg:order-1"
            }`}
          >
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

              <div className="mt-7">
                <Link
                  href={product.href}
                  className="group inline-flex h-11 items-center gap-3 rounded-lg border border-[#081b24] bg-[#081b24] px-5 text-[10px] font-bold uppercase tracking-[0.1em] text-white! shadow-[0_10px_28px_rgba(8,27,36,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#007c67] hover:bg-[#007c67]"
                >
                  <span>Explore product</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MoreFromEcosystem() {
  return (
    <>
      <section className="relative overflow-hidden border-t border-[#d4dfdb] bg-white">
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <Reveal>
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
          </Reveal>
        </div>
      </section>

      {ecosystemProducts.map((product, index) => (
        <ProductRow key={product.id} product={product} index={index} />
      ))}
    </>
  );
}

export default function ProductsClient() {
  return (
    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      <ProductHero />
      <MoreFromEcosystem />
      <CtaBand />
    </main>
  );
}
