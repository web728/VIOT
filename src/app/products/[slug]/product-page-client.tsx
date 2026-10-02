"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronRight,
  Radio,
  Database,
  Activity,
  ShieldCheck,
  Zap,
} from "lucide-react";

import {
  breadcrumbSchema,
  StructuredData,
} from "@/components/structured-data";

import { CtaBand } from "@/components/home/CtaBand";

import type { ReactNode } from "react";

/* =========================================================
   PRODUCT IMAGE
========================================================= */

function getProductImage(slug: string) {
  switch (slug) {
    case "vehicle-telematics":
      return "/image/video.png";

    case "video-telematics":
      return "/image/car.jpeg";

    case "smart-locks":
      return "/image/lock.png";

    case "asset-tracking":
      return "/image/lab.jpeg";

    case "iot-sensors":
      return "/image/ev.jpeg";

    default:
      return "/image/video.png";
  }
}

/* =========================================================
   APPROVED VIOT SVG ANIMATION
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
      {/* subtle atmosphere */}

      <div
        className={`absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full blur-3xl ${
          dark
            ? "bg-[#27d59b]/[0.025]"
            : "bg-[#27d59b]/[0.025]"
        }`}
      />

      <div
        className={`absolute -right-56 bottom-[5%] h-[620px] w-[620px] rounded-full blur-3xl ${
          dark
            ? "bg-white/[0.012]"
            : "bg-[#007c67]/[0.025]"
        }`}
      />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        {/* flowing engineering path */}

        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke={
            dark
              ? "rgba(255,255,255,0.055)"
              : "rgba(8,27,36,0.07)"
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

        {/* approved green dashed flow */}

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

        {/* secondary flow */}

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

        {/* diagonal engineering line */}

        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={
            dark
              ? "rgba(255,255,255,0.035)"
              : "rgba(8,27,36,0.045)"
          }
          strokeWidth="1"
        />
      </svg>

      {/* rotating engineering rings */}

      <motion.div
        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${
          dark
            ? "border-white/[0.035]"
            : "border-[#081b24]/[0.04]"
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
            : "border-[#007c67]/[0.055]"
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
            : "border-[#081b24]/[0.03]"
        }`}
      />

      {/* moving signal points */}

      <motion.span
        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 bg-[#27d59b]"
        animate={{
          x: [0, 90, 180],
          y: [0, 20, 0],
          opacity: [0.1, 0.7, 0],
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
          opacity: [0.1, 0.7, 0],
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
              : "bg-[#081b24]/15"
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
   REVEAL
========================================================= */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
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
        amount: 0.15,
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
   PAGE
========================================================= */

type ProductFlow = {
  source: string;
  device: string;
  data: string;
  output: string;
};

type ProductPageProduct = {
  id: string;
  name: string;
  shortName: string;
  headline: string;
  lede: string;
  description: string;
  slug: string;
  number: string;
  points: string[];
  specs: [string, string][];
  note?: string | null;
};

type RelatedProduct = Pick<
  ProductPageProduct,
  "id" | "name" | "shortName" | "slug" | "number"
>;

type ProductPageClientProps = {
  product: ProductPageProduct;
  related: RelatedProduct[];
  productImage: string;
  flow: ProductFlow;
};

export default function ProductPageClient({
  product,
  related,
  productImage,
  flow,
}: ProductPageClientProps) {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.lede,
    sku: `VIOT-${product.id.toUpperCase()}`,
    category: "Connected telematics and IoT hardware",
    url: `https://viot.tech/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "VIoT",
    },
  };

  const journey = [
    {
      number: "01",
      title: flow.source,
      label: "Physical world",
      icon: Activity,
    },
    {
      number: "02",
      title: flow.device,
      label: "Capture",
      icon: Radio,
    },
    {
      number: "03",
      title: flow.data,
      label: "Connected data",
      icon: Database,
    },
    {
      number: "04",
      title: flow.output,
      label: "Operational action",
      icon: Zap,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24]">
      <StructuredData data={productSchema} />

      <StructuredData
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Products",
            path: "/products",
          },
          {
            name: product.name,
            path: `/products/${product.slug}`,
          },
        ])}
      />

      {/* =====================================================
          01 — HERO
      ===================================================== */}

 <section className="relative min-h-[66vh] max-h-[680px] overflow-hidden bg-[#081b24] text-white">
  <VIoTSVGBackground dark />

  {/* VIDEO */}

  <motion.div
    initial={{ opacity: 0, scale: 1.03 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="absolute inset-0 z-[1]"
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

    {/* readability overlay */}

    <div className="absolute inset-0 bg-[#081b24]/40" />

    <div className="absolute inset-y-0 left-0 w-[72%] bg-gradient-to-r from-[#081b24] via-[#081b24]/85 to-transparent" />

    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#081b24] to-transparent" />
  </motion.div>

  {/* CONTENT */}

  <div className="relative z-10 mx-auto flex min-h-[66vh] max-w-[1440px] items-center px-6 py-20 sm:px-8 lg:px-12 xl:px-16">
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="max-w-[720px]"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#27d59b]" />

        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27d59b]">
          VIoT / {product.shortName}
        </span>
      </div>

      <h1 className="mt-7 max-w-[700px] font-heading text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em]">
        {product.headline}
      </h1>

      <p className="mt-7 max-w-[540px] text-[15px] leading-7 text-white/70">
        {product.lede}
      </p>
    </motion.div>
  </div>

  {/* bottom line */}

  <div className="absolute bottom-0 left-0 right-0 z-10 px-6 sm:px-8 lg:px-12">
    <div className="h-px bg-white/10" />
  </div>
</section>

      {/* =====================================================
          02 — PRODUCT SHOWCASE
      ===================================================== */}

    <section className="relative overflow-hidden bg-[#f4f6f2]">
  <VIoTSVGBackground />

  <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
    <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
      
      {/* IMAGE */}

      <Reveal className="lg:col-span-7">
        <div className="group relative overflow-hidden bg-[#081b24]">
          <div className="relative aspect-[4/3]">
            <Image
              src={productImage}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/45 to-transparent" />

            {/* subtle scan */}

            <motion.div
              className="absolute left-0 right-0 h-px bg-[#27d59b]/60"
              animate={{
                top: ["15%", "85%", "15%"],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </Reveal>

      {/* CONTENT */}

      <Reveal
        delay={0.1}
        className="lg:col-span-5"
      >
        <h2 className="font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] text-[#081b24] sm:text-5xl">
          {product.name}
        </h2>

        <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#081b24]/65">
          {product.description}
        </p>

        <div className="mt-9 border-t border-[#007c67]/20">
          {product.points.map((point, index) => (
            <motion.div
              key={point}
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
              }}
              className="flex gap-4 border-b border-[#007c67]/15 py-4"
            >
              <span className="font-mono text-[8px] text-[#007c67]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-[13px] leading-6 text-[#081b24]/80">
                {point}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-6">
          <a
            href="#specifications"
            className="group inline-flex items-center gap-2 border-b border-[#081b24] pb-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-colors hover:border-[#007c67] hover:text-[#007c67]"
          >
            Specifications

            <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="/contact"
            className="group inline-flex min-h-11 items-center gap-3 bg-[#081b24] px-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:bg-[#007c67]"
          >
            Enquire

            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </div>
  </div>
</section>
      {/* =====================================================
          03 — CONNECTED JOURNEY
      ===================================================== */}

   <section className="relative overflow-hidden bg-[#081b24] text-white">
  <VIoTSVGBackground dark />

  <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
    
    <Reveal>
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#27d59b]" />

          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#27d59b]">
            Connected journey
          </span>
        </div>

        <h2 className="mt-5 font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[56px]">
          From the physical world
          <br />
          <span className="text-[#27d59b]">
            to action.
          </span>
        </h2>
      </div>
    </Reveal>

    <div className="mt-16 grid border-y border-white/10 lg:grid-cols-4">
      {journey.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.number}
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.55,
              delay: index * 0.1,
            }}
            className="group relative border-b border-white/10 p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[8px] text-[#27d59b]">
                {item.number}
              </span>

              <Icon className="h-4 w-4 text-[#27d59b]/60 transition-colors group-hover:text-[#27d59b]" />
            </div>

            <h3 className="mt-12 font-heading text-xl font-semibold tracking-[-0.02em]">
              {item.title}
            </h3>

            <div className="mt-4 h-px w-8 bg-[#27d59b]/50 transition-all duration-500 group-hover:w-16" />

            <p className="mt-4 text-[11px] uppercase tracking-[0.1em] text-white/45">
              {item.label}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>

      {/* =====================================================
          04 — SPECIFICATIONS
      ===================================================== */}

      <section
        id="specifications"
        className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]"
      >
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* intro */}

            <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#007c67]">
                  Technical profile
                </span>
              </div>

              <h2 className="mt-5 max-w-sm font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-4xl">
                The details behind
                <br />
                <span className="text-[#007c67]">
                  the hardware.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-[#607078]">
                Only confirmed capabilities are presented here. Final
                deployment fit depends on the vehicle, asset, environment and
                operating requirement.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-[#007c67]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#607078]">
                  Technical information
                </span>
              </div>
            </Reveal>

            {/* specs */}

            <Reveal
              delay={0.08}
              className="lg:col-span-7 lg:col-start-6"
            >
              <div className="border-t border-[#cdd5d2]">
                {product.specs.map(([name, value], index) => (
                  <motion.div
                    key={name}
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group grid gap-3 border-b border-[#cdd5d2] py-5 sm:grid-cols-[220px_1fr]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-[#9aa5a1] transition-colors group-hover:text-[#007c67]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <strong className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#607078]">
                        {name}
                      </strong>
                    </div>

                    <span className="text-[13px] font-medium leading-6 text-[#081b24] transition-colors group-hover:text-[#007c67]">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {product.note && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="mt-8 border-l-2 border-[#ffb321] bg-[#ffb321]/[0.06] px-5 py-4"
                >
                  <p className="text-xs leading-6 text-[#607078]">
                    <strong className="font-semibold text-[#a56d00]">
                      Clear status:
                    </strong>{" "}
                    {product.note}
                  </p>
                </motion.div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — RELATED PRODUCTS
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-white">
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
          <Reveal>
            <div className="flex flex-col gap-5 border-b border-[#cdd5d2] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#007c67]">
                  Continue exploring
                </span>

                <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                  More from the
                  <span className="text-[#007c67]">
                    {" "}
                    VIoT ecosystem.
                  </span>
                </h2>
              </div>

              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-colors hover:text-[#007c67]"
              >
                View all products

                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid border-t border-[#cdd5d2] sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => {
              const image = getProductImage(item.slug);

              return (
                <Reveal
                  key={item.slug}
                  delay={index * 0.06}
                  className={`group relative overflow-hidden border-b border-[#cdd5d2] sm:border-b-0 ${
                    index < related.length - 1
                      ? "lg:border-r"
                      : ""
                  }`}
                >
                  <Link
                    href={`/products/${item.slug}`}
                    className="block"
                  >
                    {/* image */}

                    <div className="relative aspect-[4/3] overflow-hidden bg-[#081b24]">
                      <Image
                        src={image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/80 via-transparent to-transparent" />

                      <span className="absolute left-4 top-4 font-mono text-[8px] text-[#27d59b]">
                        {item.number}
                      </span>

                      <span className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center border border-white/20 text-white transition-colors group-hover:border-[#27d59b] group-hover:text-[#27d59b]">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>

                      <div className="absolute bottom-4 left-4 right-14">
                        <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/45">
                          Connected hardware
                        </span>

                        <h3 className="mt-1 font-heading text-base font-semibold leading-tight text-white">
                          {item.shortName}
                        </h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — CTA
      ===================================================== */}

      <CtaBand />
    </main>
  );
}