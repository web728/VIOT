"use client";



import type { ReactNode } from "react";



import { useEffect, useMemo, useState } from "react";



import { createPortal } from "react-dom";



import Image from "next/image";



import Link from "next/link";



import { AnimatePresence, motion } from "framer-motion";



import {



  Activity,



  ArrowLeft,



  ArrowRight,



  ArrowUpRight,



  ChevronRight,



  Database,



  Radio,



  Zap,



} from "lucide-react";



import {



  breadcrumbSchema,



  StructuredData,



} from "@/components/structured-data";



import { CtaBand } from "@/components/home/CtaBand";



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



type ProductListingItem = {

  id: string;

  name: string;

  imagePlaceholder: string;

  description: string;

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

  keyCapabilities?: string[];

  howItWorks?: string;

  builtFor?: string[];

  listingItems?: ProductListingItem[];

};



type RelatedProduct = Pick<



  ProductPageProduct,



  "id" | "name" | "shortName" | "slug" | "number"



>;



const relatedProductCatalog: RelatedProduct[] = [



  { id: "vehicle-telematics", number: "01", name: "Vehicle Telematics", shortName: "Vehicle telematics", slug: "vehicle-telematics" },



  { id: "video-telematics", number: "02", name: "Video Telematics", shortName: "Video telematics", slug: "video-telematics" },



  { id: "smart-logistics-locks", number: "03", name: "Smart Logistics Locks", shortName: "Logistics locks", slug: "smart-logistics-locks" },



  { id: "infra-locks", number: "04", name: "Smart Infra Locks", shortName: "Infra locks", slug: "smart-infra-locks" },



  { id: "asset-trackers", number: "05", name: "Asset Trackers", shortName: "Asset trackers", slug: "asset-trackers" },



  { id: "iot-sensors", number: "06", name: "IoT Sensors", shortName: "IoT sensors", slug: "iot-sensors" },



];



type ProductPageClientProps = {



  product: ProductPageProduct;



  related: RelatedProduct[];



  productImage: string;



  flow: ProductFlow;



};



type SpecificationTarget = {



  id: string;



  title: string;



  specs: [string, string][];



  note?: string | null;



};



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



function getVariantImage(variantId: string, fallback: string) {



  if (variantId === "basic-tracking-device") {



    return "/image/basic-tracking.png";



  }



  if (variantId === "advanced-tracking-device") {



    return "/image/advanced-tracking.png";



  }



  return fallback;



}



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



      transition={{



        duration: 0.6,



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



      aria-hidden="true"



      className={`pointer-events-none absolute inset-0 overflow-hidden ${



        dark ? "opacity-100" : "opacity-100"



      }`}



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



          stroke={dark ? "rgba(255,255,255,0.055)" : "rgba(8,27,36,0.11)"}



          strokeWidth="1"



          initial={{ pathLength: 0 }}



          whileInView={{ pathLength: 1 }}



          viewport={{ once: true }}



          transition={{ duration: 2.4, ease: "easeOut" }}



        />



        <motion.path



          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"



          stroke={dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.20)"}



          strokeWidth="1.2"



          strokeDasharray="3 15"



          animate={{ strokeDashoffset: [0, -180] }}



          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}



        />



        <motion.path



          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"



          stroke={dark ? "rgba(39,213,155,0.075)" : "rgba(0,124,103,0.13)"}



          strokeWidth="1"



          strokeDasharray="2 20"



          animate={{ strokeDashoffset: [0, 180] }}



          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}



        />



        <path



          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"



          stroke={dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.045)"}



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



          dark ? "border-[#27d59b]/[0.055]" : "border-[#007c67]/[0.055]"



        }`}



        animate={{ rotate: -360 }}



        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}



      />



      <motion.span



        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"



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



    </div>



  );



}



function SpecificationsModal({



  target,



  onClose,



}: {



  target: SpecificationTarget | null;



  onClose: () => void;



}) {



  const [mounted, setMounted] = useState(false);



  useEffect(() => {



    setMounted(true);



  }, []);



  useEffect(() => {



    if (!target) return;



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



      if (event.key === "Escape") onClose();



    };



    window.addEventListener("keydown", handleEscape);



    return () => {



      body.style.overflow = previousBodyOverflow;



      body.style.paddingRight = previousBodyPaddingRight;



      html.style.overflow = previousHtmlOverflow;



      window.removeEventListener("keydown", handleEscape);



    };



  }, [target, onClose]);



  if (!mounted || !target) return null;



  return createPortal(



    <AnimatePresence>



      <motion.div



        key={`specifications-${target.id}`}



        initial={{ opacity: 0 }}



        animate={{ opacity: 1 }}



        exit={{ opacity: 0 }}



        transition={{ duration: 0.18 }}



        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#081b24]/95 px-4 py-4 sm:px-6 sm:py-6"



        role="dialog"



        aria-modal="true"



        aria-labelledby={`spec-title-${target.id}`}



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



                  id={`spec-title-${target.id}`}



                  className="mt-3 font-heading text-2xl font-semibold leading-[1.05] tracking-[-0.035em] text-[#081b24] sm:text-[28px]"



                >



                  {target.title}



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



                {target.specs.map(([label, value], index) => (



                  <div



                    key={`${target.id}-${label}`}



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






          </div>



        </motion.div>



      </motion.div>



    </AnimatePresence>,



    document.body,



  );



}



function ProductDetailBlock({



  id,



  number,



  eyebrow,



  title,



  description,



  points,



  image,



  imageAlt,



  index,



  onSpecifications,



}: {



  id: string;



  number: string;



  eyebrow: string;



  title: string;



  description: string;



  points: string[];



  image: string;



  imageAlt: string;



  index: number;



  onSpecifications: () => void;



}) {



  const isAlternate = index % 2 === 1;



  return (



    <section



      id={id}



      className={`relative overflow-hidden border-b border-[#d3ddd9] ${



        isAlternate ? "bg-white" : "bg-[#f4f6f2]"



      }`}



    >



      <VIoTSVGBackground />



      <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">



        <div className="grid gap-7 lg:grid-cols-12 lg:items-stretch">



          <Reveal



            className={`lg:col-span-7 ${



              isAlternate ? "lg:order-2" : "lg:order-1"



            }`}



          >



            <div className="group relative h-full overflow-hidden rounded-2xl border border-[#c7d5d0] bg-[#eef2ef] shadow-[0_18px_50px_rgba(8,27,36,0.08)]">



              <div className="relative aspect-[16/10] lg:h-full lg:min-h-[440px] lg:aspect-auto">



                <Image



                  src={image}



                  alt={imageAlt}



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



              </div>



            </div>



          </Reveal>



          <Reveal



            delay={0.08}



            className={`lg:col-span-5 ${



              isAlternate ? "lg:order-1" : "lg:order-2"



            }`}



          >



            <div className="flex h-full flex-col rounded-2xl border border-[#c7d5d0] bg-white/80 p-6 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm sm:p-7 lg:p-8">



              <div>



                <div className="flex items-center gap-3">



                  <span className="flex h-7 min-w-7 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.04] px-2 font-mono text-[8px] font-semibold text-[#007c67]">



                    {number}



                  </span>



                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">



                    {eyebrow}



                  </span>



                </div>



                <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl">



                  {title}



                </h2>



                <p className="mt-4 max-w-lg text-sm leading-7 text-[#607078]">



                  {description}



                </p>



              </div>



              <div className="mt-7 space-y-2.5">



                {points.map((point, pointIndex) => (



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



                  onClick={onSpecifications}



                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#081b24] bg-[#081b24] px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67]"



                >



                  Specifications



                  <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />



                </button>



                <Link



                  href="/contact"



                  className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#c7d5d0] bg-white px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-[#081b24] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#007c67] hover:bg-[#f4fffc] hover:text-[#007c67]"



                >



                  Enquire



                  <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />



                </Link>



              </div>



            </div>



          </Reveal>



        </div>



      </div>



    </section>



  );



}





function ProductExtendedContent({

  product,

  onSpecifications,

}: {

  product: ProductPageProduct;

  onSpecifications: () => void;

}) {

  const isSmartInfra = product.slug === "smart-infra-locks";

  const isIoTSensors = product.slug === "iot-sensors";



  if (!isSmartInfra && !isIoTSensors) return null;



  return (

    <>

      {isSmartInfra ? (

        <>

          <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-white">

            <VIoTSVGBackground />



            <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

              <Reveal>

                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

                  <div className="lg:col-span-4">

                    <div className="flex items-center gap-3">

                      <span className="h-px w-8 bg-[#27d59b]" />

                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                        Overview

                      </span>

                    </div>



                    <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl">

                      Smart Infra Locks

                    </h2>

                  </div>



                  <div className="lg:col-span-8">

                    <div className="rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2]/92 p-6 shadow-[0_18px_48px_rgba(8,27,36,0.05)] backdrop-blur-sm sm:p-7 lg:p-8">

                      <p className="text-[15px] leading-8 text-[#42545b]">

                        Battery-free, keyless locking for the access points that matter most — cabinets, manholes, gates, containers, and security doors across critical infrastructure sites. Every access is logged, authorised remotely, and visible on the VIoT platform, so site teams stop depending on physical keys and start managing access the way they manage every other asset.

                      </p>

                    </div>

                  </div>

                </div>

              </Reveal>

            </div>

          </section>



          <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-[#f4f6f2]">

            <VIoTSVGBackground />



            <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

              <Reveal>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-[#27d59b]" />

                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                    Key capabilities

                  </span>

                </div>



                <div className="mt-7 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/90 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm">

                  <div className="divide-y divide-[#d8e1de]">

                    {(product.keyCapabilities ?? []).map((item, index) => (

                      <motion.div

                        key={`${product.id}-capability-${index}`}

                        initial={{ opacity: 0, y: 12 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true, amount: 0.2 }}

                        transition={{ duration: 0.42, delay: index * 0.04 }}

                        className="grid gap-4 px-5 py-5 sm:grid-cols-[64px_1fr] sm:items-start sm:px-6 lg:px-7"

                      >

                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#007c67]/12 bg-[#007c67]/[0.04] font-mono text-[8px] font-semibold text-[#007c67]">

                          {String(index + 1).padStart(2, "0")}

                        </span>



                        <p className="max-w-4xl text-[14px] leading-7 text-[#42545b]">

                          {item}

                        </p>

                      </motion.div>

                    ))}

                  </div>

                </div>

              </Reveal>

            </div>

          </section>



          <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-[#081b24] text-white">

            <VIoTSVGBackground dark />



            <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

              <Reveal>

                <div className="grid gap-8 lg:grid-cols-12 lg:items-start">

                  <div className="lg:col-span-4">

                    <div className="flex items-center gap-3">

                      <span className="h-px w-8 bg-[#27d59b]" />

                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">

                        How it works

                      </span>

                    </div>

                  </div>



                  <div className="lg:col-span-8">

                    <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-7 lg:p-8">

                      <p className="text-[15px] leading-8 text-white/72">

                        {product.howItWorks}

                      </p>

                    </div>

                  </div>

                </div>

              </Reveal>

            </div>

          </section>



          <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-white">

            <VIoTSVGBackground />



            <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

              <Reveal>

                <div className="flex items-center gap-3">

                  <span className="h-px w-8 bg-[#27d59b]" />

                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                    Built for

                  </span>

                </div>



                <div className="mt-7 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2]/92 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm">

                  <div className="divide-y divide-[#d8e1de]">

                    {(product.builtFor ?? []).map((item, index) => (

                      <div

                        key={`${product.id}-built-for-${index}`}

                        className="grid gap-3 px-5 py-4 sm:grid-cols-[42px_1fr] sm:items-start sm:px-6 lg:px-7"

                      >

                        <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-md border border-[#007c67]/10 bg-white font-mono text-[7px] text-[#007c67]">

                          {String(index + 1).padStart(2, "0")}

                        </span>



                        <p className="text-[14px] leading-7 text-[#42545b]">

                          {item}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </Reveal>

            </div>

          </section>



          <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-[#f4f6f2]">

            <VIoTSVGBackground />



            <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

              <Reveal>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

                  <div>

                    <div className="flex items-center gap-3">

                      <span className="h-px w-8 bg-[#27d59b]" />

                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">

                        Technical specifications

                      </span>

                    </div>

                  </div>



                  <button

                    type="button"

                    onClick={onSpecifications}

                    className="group inline-flex h-10 shrink-0 items-center gap-2 self-start rounded-lg border border-[#081b24] bg-[#081b24] px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67] sm:self-auto"

                  >

                    Open specifications

                    <ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />

                  </button>

                </div>



                <div className="mt-7 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_18px_50px_rgba(8,27,36,0.05)]">

                  <div className="hidden grid-cols-[230px_1fr] border-b border-[#d8e1de] bg-[#eef2ef] px-6 py-3 sm:grid">

                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#607078]">

                      Parameter

                    </span>

                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#607078]">

                      Specification

                    </span>

                  </div>



                  <div className="divide-y divide-[#d8e1de]">

                    {product.specs.map(([label, value], index) => (

                      <div

                        key={`${product.id}-inline-spec-${label}`}

                        className="grid gap-2 px-5 py-4 sm:grid-cols-[230px_1fr] sm:gap-6 sm:px-6"

                      >

                        <div className="flex items-start gap-2">

                          <span className="mt-0.5 font-mono text-[7px] text-[#9aa5a1]">

                            {String(index + 1).padStart(2, "0")}

                          </span>



                          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-[#007c67]">

                            {label}

                          </span>

                        </div>



                        <p className="text-[13px] leading-6 text-[#42545b]">

                          {value}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </Reveal>

            </div>

          </section>

        </>

      ) : null}



      {isIoTSensors ? (
        <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-white">
          <VIoTSVGBackground />

          <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
            <Reveal>
              <div className="max-w-4xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#27d59b]" />
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                    IoT sensor range
                  </span>
                </div>

                <p className="mt-5 text-[15px] leading-8 text-[#42545b]">
                  Five sensor types cover fuel, temperature, humidity, load / axle and ambient light monitoring. Each sensor connects through the relevant GPS-device interface and sends its readings into the platform for live visibility, trends and alerts.
                </p>
              </div>
            </Reveal>

            <div className="mt-8 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2]/92 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm">
              <div className="divide-y divide-[#d8e1de]">
                {(product.listingItems ?? []).map((item, index) => (
                  <Reveal
                    key={item.id}
                    delay={Math.min(index * 0.05, 0.2)}
                  >
                    <div className="grid gap-4 px-5 py-6 sm:grid-cols-[64px_1fr] sm:items-start sm:px-6 lg:px-7 lg:py-7">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#007c67]/12 bg-white font-mono text-[8px] font-semibold text-[#007c67]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="max-w-4xl">
                        <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] text-[#081b24] sm:text-3xl">
                          {item.name}
                        </h3>

                        <p className="mt-3 text-[14px] leading-8 text-[#42545b]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* {product.note ? (
              <Reveal>
                <div className="mt-6 rounded-xl border border-[#d4dfdb] bg-[#f4f6f2] px-5 py-4">
                  <p className="text-[12px] leading-6 text-[#607078]">
                    {product.note}
                  </p>
                </div>
              </Reveal>
            ) : null} */}
          </div>
        </section>
      ) : null}

    </>

  );

}



function RelatedProducts({



  currentSlug,



}: {



  currentSlug: string;



}) {



  const trackId = "related-products-track";



  const visibleProducts = relatedProductCatalog.filter(



    (item) => item.slug !== currentSlug,



  );



  const scrollTrack = (direction: "left" | "right") => {



    const track = document.getElementById(trackId);



    if (!track) return;



    const firstCard = track.querySelector<HTMLElement>("[data-related-card]");



    const cardWidth = firstCard?.offsetWidth ?? 300;



    const gap = 16;



    track.scrollBy({



      left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),



      behavior: "smooth",



    });



  };



  return (



    <section className="relative overflow-hidden border-b border-[#d3ddd9] bg-white">



      <VIoTSVGBackground />



      <div className="relative z-10 mx-auto max-w-[1360px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">



        <div className="flex items-end justify-between gap-5">



          <div className="flex items-center gap-3">



            <span className="h-px w-8 bg-[#27d59b]" />



            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">



              More connected products



            </span>



          </div>



          <div className="hidden shrink-0 items-center gap-2 sm:flex">



            <button



              type="button"



              aria-label="Scroll products left"



              onClick={() => scrollTrack("left")}



              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#c7d5d0] bg-white text-[#081b24] shadow-[0_8px_22px_rgba(8,27,36,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#007c67]/30 hover:text-[#007c67]"



            >



              <ArrowLeft className="h-4 w-4" />



            </button>



            <button



              type="button"



              aria-label="Scroll products right"



              onClick={() => scrollTrack("right")}



              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#081b24] bg-[#081b24] text-white shadow-[0_8px_22px_rgba(8,27,36,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#007c67] hover:bg-[#007c67]"



            >



              <ArrowRight className="h-4 w-4" />



            </button>



          </div>



        </div>



        <div



          id={trackId}



          className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"



        >



          {visibleProducts.map((item) => {



            const image = getProductImage(item.slug);



            return (



              <Link



                key={item.id}



                data-related-card



                href={`/products/${item.slug}`}



                className="group w-[260px] min-w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2] shadow-[0_14px_36px_rgba(8,27,36,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#007c67]/30 hover:bg-white hover:shadow-[0_18px_42px_rgba(8,27,36,0.08)] sm:w-[280px] sm:min-w-[280px] lg:w-[300px] lg:min-w-[300px]"



              >



                <div className="relative aspect-[4/3] overflow-hidden border-b border-[#d4dfdb] bg-[#eef2ef]">



                  <Image



                    src={image}



                    alt={item.name}



                    fill



                    sizes="300px"



                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-[1.025]"



                  />



                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/10 via-transparent to-white/[0.03]" />



                  <span className="absolute left-4 top-4 rounded-md border border-[#007c67]/10 bg-white/80 px-2 py-1 font-mono text-[7px] font-semibold tracking-[0.16em] text-[#007c67] backdrop-blur-sm">



                    {item.number}



                  </span>



                </div>



                <div className="p-5">



                  <div className="flex items-start justify-between gap-4">



                    <div className="min-w-0">



                      <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#607078]">



                        {item.shortName}



                      </span>



                      <h3 className="mt-2 font-heading text-xl font-semibold leading-[1.05] tracking-[-0.025em] text-[#081b24]">



                        {item.name}



                      </h3>



                    </div>



                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#c7d5d0] bg-white text-[#007c67] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">



                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />



                    </span>



                  </div>



                </div>



              </Link>



            );



          })}



        </div>



        <div className="mt-3 flex items-center justify-between sm:hidden">



          <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#607078]">



            Swipe to explore



          </span>



          <div className="flex items-center gap-2">



            <button



              type="button"



              aria-label="Scroll products left"



              onClick={() => scrollTrack("left")}



              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#c7d5d0] bg-white text-[#081b24]"



            >



              <ArrowLeft className="h-3.5 w-3.5" />



            </button>



            <button



              type="button"



              aria-label="Scroll products right"



              onClick={() => scrollTrack("right")}



              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#081b24] bg-[#081b24] text-white"



            >



              <ArrowRight className="h-3.5 w-3.5" />



            </button>



          </div>



        </div>



      </div>



    </section>



  );



}



export default function ProductPageClient({



  product,



  related,



  productImage,



  flow,



}: ProductPageClientProps) {



  const [specTarget, setSpecTarget] = useState<SpecificationTarget | null>(



    null,



  );



  const currentProductImage =



    getProductImage(product.slug) || productImage;



  const detailItems = useMemo(() => {



    if (product.slug === "vehicle-telematics" && product.variants?.length) {



      return product.variants.map((variant, index) => ({



        id: variant.id,



        number: String(index + 1).padStart(2, "0"),



        eyebrow: variant.eyebrow ?? product.shortName,



        title: variant.name,



        description: variant.description,



        points: variant.features,



        image: getVariantImage(variant.id, currentProductImage),



        specs: variant.specs,



        note: variant.note,



      }));



    }



    return [



      {



        id: "overview",



        number: product.number,



        eyebrow: "Product overview",



        title: product.name,



        description: product.description,



        points: product.points,



        image: currentProductImage,



        specs: product.specs,



        note: product.note,



      },



    ];



  }, [currentProductImage, product]);



  const firstDetailId = detailItems[0]?.id ?? "overview";



  const productSchema = {



    "@context": "https\\\\://schema.org",



    "@type": "Product",



    name: product.name,



    description: product.lede,



    image: currentProductImage,



    sku: `VIOT-${product.id.toUpperCase()}`,



    category: "Connected fleet, asset and access hardware",



    url: `https\\\\://viot.tech/products/${product.slug}`,



    brand: {



      "@type": "Brand",



      name: "VIoT",



    },



  };



  return (



    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24]">



      <StructuredData data={productSchema} />



      <StructuredData



        data={breadcrumbSchema([



          { name: "Home", path: "/" },



          { name: "Products", path: "/products" },



          {



            name: product.name,



            path: `/products/${product.slug}`,



          },



        ])}



      />



      <section className="relative min-h-[590px] overflow-hidden bg-[#081b24] text-white sm:min-h-[630px]">



        <VIoTSVGBackground dark />



        <div className="absolute inset-0 z-[1]">



          <div className="absolute inset-y-0 right-0 w-full lg:w-[52%]">



            <motion.div



              initial={{ opacity: 0, scale: 0.97 }}



              animate={{ opacity: 1, scale: 1 }}



              transition={{



                duration: 1,



                ease: [0.16, 1, 0.3, 1],



              }}



              className="absolute inset-5 sm:inset-8 lg:inset-12"



            >



              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] shadow-[0_28px_90px_rgba(0,0,0,0.18)] backdrop-blur-sm">



                <Image



                  src={currentProductImage}



                  alt={product.name}



                  fill



                  priority



                  sizes="(max-width: 1024px) 100vw, 52vw"



                  className="object-contain p-8 sm:p-10 lg:p-12"



                />



                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/22 via-transparent to-white/[0.025]" />



                <motion.div



                  className="absolute left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#27d59b]/60 to-transparent"



                  animate={{



                    top: ["20%", "80%", "20%"],



                    opacity: [0, 0.6, 0],



                  }}



                  transition={{



                    duration: 6,



                    repeat: Infinity,



                    ease: "easeInOut",



                  }}



                />



              </div>



            </motion.div>



          </div>



          <div className="absolute inset-0 bg-gradient-to-r from-[#081b24] via-[#081b24]/97 via-[50%] to-[#081b24]/20" />



          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#081b24] to-transparent" />



        </div>



        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1440px] items-center px-6 py-24 sm:min-h-[630px] sm:px-8 lg:px-12 xl:px-16">



          <motion.div



            initial={{ opacity: 0, y: 24 }}



            animate={{ opacity: 1, y: 0 }}



            transition={{



              duration: 0.75,



              ease: [0.16, 1, 0.3, 1],



            }}



            className="max-w-[690px]"



          >



            <div className="flex items-center gap-3">



              <span className="h-px w-9 bg-[#27d59b]" />



              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27d59b]">



                VIoT / {product.shortName}



              </span>



            </div>



            <h1 className="mt-6 max-w-[680px] font-heading text-[clamp(2.65rem,5vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.06em]">



              {product.headline}



            </h1>



            <p className="mt-6 max-w-[540px] text-sm leading-7 text-white/65 sm:text-[15px]">



              {product.lede}



            </p>



            <div className="mt-8 flex flex-wrap gap-3">



              <a



                href={`#${firstDetailId}`}



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



      {detailItems.map((item, index) => (



        <ProductDetailBlock



          key={item.id}



          id={item.id}



          number={item.number}



          eyebrow={item.eyebrow}



          title={item.title}



          description={item.description}



          points={item.points}



          image={item.image}



          imageAlt={item.title}



          index={index}



          onSpecifications={() =>



            setSpecTarget({



              id: item.id,



              title: item.title,



              specs: item.specs,



              note: item.note,



            })



          }



        />



      ))}



      <ProductExtendedContent

        product={product}

        onSpecifications={() =>

          setSpecTarget({

            id: product.id,

            title: product.name,

            specs: product.specs,

            note: product.note,

          })

        }

      />



      <RelatedProducts currentSlug={product.slug} />



      <CtaBand />



      <SpecificationsModal



        target={specTarget}



        onClose={() => setSpecTarget(null)}



      />



    </main>



  );



}