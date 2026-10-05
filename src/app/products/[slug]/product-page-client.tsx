"use client";

import type { ReactNode } from "react";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";

import {

  Activity,

  ArrowUpRight,

  ChevronRight,

  Database,

  Radio,

  ShieldCheck,

  Zap,

} from "lucide-react";

import {

  breadcrumbSchema,

  StructuredData,

} from "@/components/structured-data";

import { CtaBand } from "@/components/home/CtaBand";

/* =========================================================

   HELPERS

\========================================================= */

function getProductImage(slug: string) {

  switch (slug) {

    case "vehicle-telematics":

      return "/image/vehicle-telematics.png";

    case "video-telematics":

      return "/image/video-telementics.png";

    case "smart-logistics-locks":

      return "/image/smart-lock.png";

    case "smart-infra-locks":

      return "/image/smart-infra.png";

    case "asset-trackers":

      return "/image/asset-trackers.png";

    case "iot-sensors":

      return "/image/iot-sensors.png";

    case "access-control":

      return "/image/access-control.png";

    default:

      return "/image/vehicle-telematics.png";

  }

}

/* =========================================================

   APPROVED VIOT SVG BACKGROUND

\========================================================= */

function VIoTSVGBackground({ dark = false }: { dark?: boolean }) {

  return (

    <div

      className={`pointer-events-none absolute inset-0 overflow-hidden ${

        dark ? "opacity-100" : "opacity-90"

      }`}

      aria-hidden="true"

    >

      <div

        className={`absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full blur-3xl ${

          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.025]"

        }`}

      />

      <div

        className={`absolute -right-56 bottom-[5%] h-[620px] w-[620px] rounded-full blur-3xl ${

          dark ? "bg-white/[0.012]" : "bg-[#007c67]/[0.025]"

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

          stroke={

            dark ? "rgba(255,255,255,0.055)" : "rgba(8,27,36,0.07)"

          }

          strokeWidth="1"

          initial={{ pathLength: 0 }}

          whileInView={{ pathLength: 1 }}

          viewport={{ once: true }}

          transition={{ duration: 2.4, ease: "easeOut" }}

        />

        <motion.path

          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"

          stroke={

            dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.13)"

          }

          strokeWidth="1.2"

          strokeDasharray="3 15"

          animate={{ strokeDashoffset: [0, -180] }}

          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}

        />

        <motion.path

          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"

          stroke={

            dark ? "rgba(39,213,155,0.075)" : "rgba(0,124,103,0.065)"

          }

          strokeWidth="1"

          strokeDasharray="2 20"

          animate={{ strokeDashoffset: [0, 180] }}

          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}

        />

        <path

          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"

          stroke={

            dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.045)"

          }

          strokeWidth="1"

        />

      </svg>

      <motion.div

        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${

          dark ? "border-white/[0.035]" : "border-[#081b24]/[0.04]"

        }`}

        animate={{ rotate: 360 }}

        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}

      />

      <motion.div

        className={`absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border ${

          dark

            ? "border-[#27d59b]/[0.055]"

            : "border-[#007c67]/[0.055]"

        }`}

        animate={{ rotate: -360 }}

        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}

      />

      <div

        className={`absolute right-[17%] top-[27%] h-[150px] w-[150px] rounded-full border ${

          dark ? "border-white/[0.025]" : "border-[#081b24]/[0.03]"

        }`}

      />

      <motion.span

        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{

          x: [0, 90, 180],

          y: [0, 20, 0],

          opacity: [0.1, 0.7, 0],

        }}

        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}

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

        animate={{ x: [0, -55, -120], opacity: [0.1, 0.7, 0] }}

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

/* =========================================================

   REVEAL

\========================================================= */

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

      initial={{ opacity: 0, y: 20 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true, amount: 0.15 }}

      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}

      className={className}

    >

      {children}

    </motion.div>

  );

}

/* =========================================================

   TYPES

\========================================================= */

type ProductFlow = {

  source: string;

  device: string;

  data: string;

  output: string;

};

type ProductVariant = {

  id: string;

  name: string;

  eyebrow?: string;

  headline: string;

  description: string;

  features: string[];

  specs: [string, string][];

  note?: string;

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

  variants?: ProductVariant[];

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

type TrackingDevice = {

  id: "basic-tracking-device" | "advanced-tracking-device";

  number: string;

  title: string;

  category: string;

  description: string;

  image: string;

  points: string[];

  specs: [string, string][];

  note?: string;

};

/* =========================================================

   VEHICLE TELEMATICS DEVICES

\========================================================= */

const trackingDevices: TrackingDevice[] = [

  {

    id: "basic-tracking-device",

    number: "01",

    title: "Basic Tracking Device",

    category: "Vehicle Tracking",

    description:

      "A compact 4G tracking configuration for dependable location reporting, driving-event visibility and remote vehicle immobilisation across a wide range of vehicle power systems.",

    image: "/image/basic-tracking.png",

    points: [

      "4G Cat.1 connectivity keeps vehicle location and operating events connected to the platform.",

      "9–90V operating voltage supports installation across a broad range of vehicle types.",

      "Remote cut-off capability supports controlled vehicle immobilisation when required.",

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

    points: [

      "4G LTE connectivity with cellular fallback supports dependable fleet reporting.",

      "Temperature and fuel sensor integration adds deeper operating context for configured deployments.",

      "Remote immobilisation and SOS input support security and emergency-response workflows.",

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

   

  },

];

/* =========================================================

   SPECIFICATIONS MODAL

\========================================================= */

function SpecificationsModal({
  device,
  onClose,
}: {
  device: TrackingDevice | null;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!device) return;

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
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      html.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [device, onClose]);

  if (!mounted || !device) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        key={`specifications-modal-${device.id}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#081b24]/95 px-4 py-4 sm:px-6 sm:py-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`spec-title-${device.id}`}
        onClick={onClose}
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
          className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:max-h-[88dvh]"
        >
          {/* OPAQUE HEADER */}
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
                  id={`spec-title-${device.id}`}
                  className="mt-3 font-heading text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#081b24] sm:text-[28px]"
                >
                  {device.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="shrink-0 rounded-lg border border-[#cdd5d2] bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#607078] transition-colors duration-300 hover:border-[#007c67]/30 hover:text-[#081b24]"
              >
                Close
              </button>
            </div>
          </div>

          {/* ONLY THIS AREA SCROLLS */}
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
                {device.specs.map(([label, value], index) => (
                  <div
                    key={`${device.id}-${label}`}
                    className="grid gap-1.5 px-4 py-3.5 sm:grid-cols-[165px_1fr] sm:items-start sm:gap-5 sm:px-5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[7px] text-[#9aa5a1]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#007c67]">
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

            {device.note && (
              <div className="mt-4 rounded-xl border border-[#d7e0dc] bg-white px-4 py-3.5">
                <p className="text-[10px] leading-5 text-[#607078]">
                  {device.note}
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

/* =========================================================

   TRACKING DEVICE SECTION

\========================================================= */

function TrackingDeviceSection({

  device,

  index,

  onSpecifications,

}: {

  device: TrackingDevice;

  index: number;

  onSpecifications: (device: TrackingDevice) => void;

}) {

  const isAlternate = index % 2 === 1;

  return (

    <section

      id={device.id}

      className={`relative overflow-hidden border-b border-[#d3ddd9] ${

        isAlternate ? "bg-white" : "bg-[#f4f6f2]"

      }`}

    >

      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="grid gap-7 lg:grid-cols-12 lg:items-stretch">

          <Reveal

            className={`lg:col-span-7 ${

              isAlternate ? "lg:order-2" : ""

            }`}

          >

            <div className="group relative h-full overflow-hidden rounded-2xl border border-[#c7d5d0] bg-[#eef2ef] shadow-[0_18px_50px_rgba(8,27,36,0.08)]">

              <div className="relative aspect-[16/10] lg:h-full lg:min-h-[440px] lg:aspect-auto">

                <Image

                  src={device.image}

                  alt={device.title}

                  fill

                  priority={index === 0}

                  sizes="(max-width: 1024px) 100vw, 58vw"

                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02] sm:p-8 lg:p-10"

                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/12 via-transparent to-white/[0.03]" />

                <motion.div

                  className="absolute left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#27d59b]/55 to-transparent"

                  animate={{

                    top: ["18%", "82%", "18%"],

                    opacity: [0, 0.55, 0],

                  }}

                  transition={{

                    duration: 6,

                    repeat: Infinity,

                    ease: "easeInOut",

                  }}

                />

                {/* <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-[#081b24]/70 px-3 py-2 backdrop-blur-md">

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]">

                    {device.category}

                  </span>

                </div> */}

              </div>

            </div>

          </Reveal>

          <Reveal

            delay={0.08}

            className={`lg:col-span-5 ${

              isAlternate ? "lg:order-1" : ""

            }`}

          >

            <div className="flex h-full flex-col rounded-2xl border border-[#c7d5d0] bg-white/80 p-6 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm sm:p-7 lg:p-8">

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-7 min-w-7 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.04] px-2 font-mono text-[8px] font-semibold text-[#007c67]">

                    {device.number}

                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">

                    {device.category}

                  </span>

                </div>

                <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl">

                  {device.title}

                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#607078]">

                  {device.description}

                </p>

              </div>

              <div className="mt-7 space-y-2.5">

                {device.points.map((point, pointIndex) => (

                  <motion.div

                    key={point}

                    initial={{ opacity: 0, x: 12 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true, amount: 0.25 }}

                    transition={{

                      duration: 0.4,

                      delay: pointIndex * 0.05,

                    }}

                    className="flex items-start gap-3 rounded-xl border border-[#d2ddda] bg-white/65 px-4 py-3.5 transition-all duration-300 hover:border-[#007c67]/20 hover:bg-white"

                  >

                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#007c67]/10 bg-[#007c67]/[0.035] font-mono text-[7px] text-[#007c67]">

                      {String(pointIndex + 1).padStart(2, "0")}

                    </span>

                    <span className="text-[13px] leading-5 text-[#081b24]/75">

                      {point}

                    </span>

                  </motion.div>

                ))}

              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">

                <button

                  type="button"

                  onClick={() => onSpecifications(device)}

                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#081b24] bg-[#081b24] px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67]"

                >

                  Specifications

                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />

                </button>

             <Link
  href="/contact"
  className="
    group inline-flex h-10 items-center gap-2
    rounded-lg
    border border-[#c7d5d0]
    bg-white
    px-4
    text-[9px] font-semibold uppercase tracking-[0.09em]
    text-[#081b24]
    shadow-sm
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-[#007c67]
    hover:bg-[#f4fffc]
    hover:text-[#007c67]
    hover:shadow-[0_8px_20px_rgba(0,124,103,0.12)]
  "
>
  <span className="text-[#081b24] transition-colors duration-300 group-hover:text-[#007c67]">
    Enquire
  </span>

  <ArrowUpRight
    className="
      h-3 w-3
      shrink-0
      text-[#081b24]
      transition-all duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
      group-hover:text-[#007c67]
    "
  />
</Link>

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}

/* =========================================================

   GENERIC PRODUCT OVERVIEW

\========================================================= */

function GenericProductOverview({

  product,

  image,

}: {

  product: ProductPageProduct;

  image: string;

}) {

  return (

    <section

      id="overview"

      className="relative overflow-hidden border-b border-[#d3ddd9] bg-[#f4f6f2]"

    >

      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="grid gap-7 lg:grid-cols-12 lg:items-stretch">

          <Reveal className="lg:col-span-7">

            <div className="group relative h-full overflow-hidden rounded-2xl border border-[#c7d5d0] bg-[#eef2ef] shadow-[0_18px_50px_rgba(8,27,36,0.08)]">

              <div className="relative aspect-[16/10] lg:h-full lg:min-h-[440px] lg:aspect-auto">

                <Image

                  src={image}

                  alt={product.name}

                  fill

                  priority

                  sizes="(max-width: 1024px) 100vw, 58vw"

                  className="object-contain p-6 transition-transform duration-700 group-hover:scale-[1.02] sm:p-8 lg:p-10"

                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/14 via-transparent to-white/[0.03]" />

                <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-[#081b24]/70 px-3 py-2 backdrop-blur-md">

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]">

                    Connected hardware

                  </span>

                </div>

              </div>

            </div>

          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">

            <div className="flex h-full flex-col rounded-2xl border border-[#c7d5d0] bg-white/80 p-6 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm sm:p-7 lg:p-8">

              <div>

                <div className="flex items-center gap-3">

                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.04] font-mono text-[8px] font-semibold text-[#007c67]">

                    {product.number}

                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">

                    Product overview

                  </span>

                </div>

                <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl">

                  {product.name}

                </h2>

                <p className="mt-4 max-w-lg text-sm leading-7 text-[#607078]">

                  {product.description}

                </p>

              </div>

              <div className="mt-7 space-y-2.5">

                {product.points.map((point, index) => (

                  <motion.div

                    key={point}

                    initial={{ opacity: 0, x: 12 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    viewport={{ once: true, amount: 0.25 }}

                    transition={{ duration: 0.4, delay: index * 0.05 }}

                    className="flex items-start gap-3 rounded-xl border border-[#d2ddda] bg-white/65 px-4 py-3.5 transition-all duration-300 hover:border-[#007c67]/20 hover:bg-white"

                  >

                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#007c67]/10 bg-[#007c67]/[0.035] font-mono text-[7px] text-[#007c67]">

                      {String(index + 1).padStart(2, "0")}

                    </span>

                    <span className="text-[13px] leading-5 text-[#081b24]/75">

                      {point}

                    </span>

                  </motion.div>

                ))}

              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">

                <a

                  href="#specifications"

                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#c7d5d0] bg-white px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-[#081b24] transition-all duration-300 hover:border-[#007c67]/30 hover:text-[#007c67]"

                >

                  Specifications

                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />

                </a>

                <Link

                  href="/contact"

                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#081b24] bg-[#081b24] px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-white! transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67]"

                >

                  Enquire

                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                </Link>

              </div>

            </div>

          </Reveal>

        </div>

      </div>

    </section>

  );

}

/* =========================================================

   PAGE

\========================================================= */

export default function ProductPageClient({

  product,

  related,

  productImage,

  flow,

}: ProductPageClientProps) {

  const [specDevice, setSpecDevice] = useState<TrackingDevice | null>(null);

  const isVehicleTelematics = product.slug === "vehicle-telematics";

  const currentProductImage = isVehicleTelematics

    ? trackingDevices[0].image

    : productImage || getProductImage(product.slug);

  const heroTitle = isVehicleTelematics

    ? "Vehicle Telematics"

    : product.headline;

  const heroLede = isVehicleTelematics

    ? "Choose the tracking configuration around the level of connectivity, sensing and control required by the fleet."

    : product.lede;

  const productSchema = {

    "@context": "https://schema.org",

    "@type": "Product",

    name: product.name,

    description: product.lede,

    image: currentProductImage,

    sku: `VIOT-${product.id.toUpperCase()}`,

    category: "Connected fleet, asset and access hardware",

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

          { name: "Home", path: "/" },

          { name: "Products", path: "/products" },

          { name: product.name, path: `/products/${product.slug}` },

        ])}

      />

      {/* HERO */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#081b24] text-white sm:min-h-[610px]">

        <VIoTSVGBackground dark />

        <motion.div

          initial={{ opacity: 0, scale: 1.02 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}

          className="absolute inset-0 z-[1]"

        >

          <video

            className="absolute inset-0 h-full w-full object-cover"

            autoPlay

            muted

            loop

            playsInline

            preload="metadata"

            poster={currentProductImage}

          >

            <source src="/video/products-hero.mp4" type="video/mp4" />

          </video>

          <div className="absolute inset-0 bg-[#081b24]/45" />

          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#081b24] via-[#081b24]/90 via-[48%] to-[#081b24]/20" />

          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#081b24] to-transparent" />

        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center px-6 py-20 sm:min-h-[610px] sm:px-8 lg:px-12 xl:px-16">

          <motion.div

            initial={{ opacity: 0, y: 24 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}

            className="max-w-[690px]"

          >

            <div className="flex items-center gap-3">

              <span className="h-px w-9 bg-[#27d59b]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27d59b]">

                VIoT / {product.shortName}

              </span>

            </div>

            <h1 className="mt-6 max-w-[680px] font-heading text-[clamp(2.65rem,5vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">

              {heroTitle}

            </h1>

            <p className="mt-6 max-w-[540px] text-sm leading-7 text-white/65 sm:text-[15px]">

              {heroLede}

            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <a

                href={

                  isVehicleTelematics ? "#basic-tracking-device" : "#overview"

                }

                className="inline-flex h-11 items-center gap-2 rounded-lg border border-[#27d59b] bg-[#27d59b] px-5 text-[10px] font-bold uppercase tracking-[0.09em] text-[#081b24] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white"

              >

                Product overview

                <ChevronRight className="h-3.5 w-3.5" />

              </a>

              <Link

                href="/contact"

                className="inline-flex h-11 items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-5 text-[10px] font-bold uppercase tracking-[0.09em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/35 hover:bg-white/10"

              >

                Enquire

                <ArrowUpRight className="h-3.5 w-3.5" />

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* VEHICLE TELEMATICS = BASIC + ADVANCED DEVICES */}

      {isVehicleTelematics ? (

        <>

          <TrackingDeviceSection

            device={trackingDevices[0]}

            index={0}

            onSpecifications={setSpecDevice}

          />

          <TrackingDeviceSection

            device={trackingDevices[1]}

            index={1}

            onSpecifications={setSpecDevice}

          />

        </>

      ) : (

        <GenericProductOverview

          product={product}

          image={currentProductImage}

        />

      )}

      {/* CONNECTED JOURNEY */}

      <section className="relative overflow-hidden bg-[#081b24] text-white">

        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

          <Reveal>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-[#27d59b]" />

                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#27d59b]">

                    Connected journey

                  </span>

                </div>

                <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-4xl">

                  From signal to{" "}

                  <span className="text-[#27d59b]">action.</span>

                </h2>

              </div>

              {/* <p className="max-w-sm text-xs leading-6 text-white/40">

                A compact view of how physical-world activity becomes usable

                operational intelligence.

              </p> */}

            </div>

          </Reveal>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {journey.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div

                  key={item.number}

                  initial={{ opacity: 0, y: 14 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true, amount: 0.2 }}

                  transition={{ duration: 0.45, delay: index * 0.07 }}

                  className="group rounded-xl border border-white/[0.08] bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.045]"

                >

                  <div className="flex items-center justify-between">

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#27d59b]/15 bg-[#27d59b]/[0.04] font-mono text-[8px] text-[#27d59b]">

                      {item.number}

                    </span>

                    <Icon className="h-4 w-4 text-[#27d59b]/60 transition-colors group-hover:text-[#27d59b]" />

                  </div>

                  <h3 className="mt-6 font-heading text-base font-semibold leading-snug text-white">

                    {item.title}

                  </h3>

                  <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.14em] text-white/35">

                    {item.label}

                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

      {/* GENERIC SPECIFICATIONS SECTION */}

      {!isVehicleTelematics && (

        <section

          id="specifications"

          className="relative overflow-hidden border-b border-[#d3ddd9] bg-[#f4f6f2]"

        >

          <VIoTSVGBackground />

          <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

            <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

              <Reveal className="lg:col-span-4">

                <div className="lg:sticky lg:top-28">

                  <div className="flex items-center gap-3">

                    <span className="h-px w-8 bg-[#27d59b]" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#007c67]">

                      Technical profile

                    </span>

                  </div>

                  <h2 className="mt-4 max-w-sm font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl">

                    Confirmed product details.

                  </h2>

                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#607078]">

                    Technical details are based on the supplied product

                    documentation; final configuration can vary by deployment.

                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-[#c7d5d0] bg-white/65 px-3 py-2.5">

                    <ShieldCheck className="h-4 w-4 text-[#007c67]" />

                    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#607078]">

                      Technical information

                    </span>

                  </div>

                </div>

              </Reveal>

              <Reveal

                delay={0.08}

                className="lg:col-span-7 lg:col-start-6"

              >

                <div className="overflow-hidden rounded-2xl border border-[#c7d5d0] bg-white/80 shadow-[0_16px_45px_rgba(8,27,36,0.05)] backdrop-blur-sm">

                  {product.specs.map(([name, value], index) => (

                    <motion.div

                      key={name}

                      whileHover={{ x: 3 }}

                      transition={{ duration: 0.2 }}

                      className="group grid gap-2 border-b border-[#d8e1de] px-5 py-4 last:border-b-0 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-5 sm:px-6"

                    >

                      <div className="flex items-center gap-3">

                        <span className="font-mono text-[7px] text-[#9aa5a1] transition-colors group-hover:text-[#007c67]">

                          {String(index + 1).padStart(2, "0")}

                        </span>

                        <strong className="font-mono text-[8px] font-medium uppercase tracking-[0.12em] text-[#607078]">

                          {name}

                        </strong>

                      </div>

                      <span className="text-[13px] font-medium leading-6 text-[#081b24] transition-colors group-hover:text-[#007c67]">

                        {value}

                      </span>

                    </motion.div>

                  ))}

                </div>

              </Reveal>

            </div>

          </div>

        </section>

      )}

      {/* RELATED PRODUCTS */}

      <section className="relative overflow-hidden bg-white">

        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

          <Reveal>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

              <div>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#007c67]">

                  Continue exploring

                </span>

                <h2 className="mt-3 font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">

                  More from the{" "}

                  <span className="text-[#007c67]">VIoT ecosystem.</span>

                </h2>

              </div>

              <Link

                href="/products"

                className="group inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-[#c7d5d0] bg-white px-4 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:border-[#007c67]/30 hover:text-[#007c67]"

              >

                View all products

                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

              </Link>

            </div>

          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {related.map((item, index) => {

              const image = getProductImage(item.slug);

              return (

                <Reveal key={item.slug} delay={index * 0.05}>

                  <Link

                    href={`/products/${item.slug}`}

                    className="group block overflow-hidden rounded-xl border border-[#cbd8d3] bg-[#f8faf8] shadow-[0_10px_28px_rgba(8,27,36,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#007c67]/25 hover:shadow-[0_16px_38px_rgba(8,27,36,0.07)]"

                  >

                    <div className="relative aspect-[16/10] overflow-hidden bg-[#eef2ef]">

                      <Image

                        src={image}

                        alt={item.name}

                        fill

                        sizes="(max-width: 768px) 100vw, 25vw"

                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.035] sm:p-5"

                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/14 via-transparent to-white/[0.03]" />

                      {/* <span className="absolute left-3 top-3 rounded-md border border-white/10 bg-[#081b24]/60 px-2.5 py-1.5 font-mono text-[7px] text-[#27d59b] backdrop-blur-sm">

                        {item.number}

                      </span> */}

                    </div>

                    <div className="flex items-center justify-between gap-4 p-4">

                      <div>

                        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#607078]">

                          Connected hardware

                        </span>

                        <h3 className="mt-1 font-heading text-base font-semibold leading-tight text-[#081b24]">

                          {item.shortName}

                        </h3>

                      </div>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#c7d5d0] bg-white text-[#081b24] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">

                        <ArrowUpRight className="h-3.5 w-3.5" />

                      </span>

                    </div>

                  </Link>

                </Reveal>

              );

            })}

          </div>

        </div>

      </section>

      <CtaBand />

      <SpecificationsModal

        device={specDevice}

        onClose={() => setSpecDevice(null)}

      />

    </main>

  );

}
