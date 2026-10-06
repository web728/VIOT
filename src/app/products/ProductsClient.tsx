"use client";



import Image from "next/image";

import Link from "next/link";



import { ArrowUpRight, ChevronRight } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";



import { CtaBand } from "@/components/home/CtaBand";



type EcosystemProduct = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  gallery: string[];
  points: string[];
  specs: [string, string][];
  note?: string;
};



const ecosystemProducts: EcosystemProduct[] = [
  {
    id: "vehicle-telematics", number: "01", title: "Vehicle Telematics", category: "Fleet Intelligence",
    description: "Connected vehicle intelligence for location, movement and operational visibility.",
    href: "/products/vehicle-telematics", gallery: ["/image/vehicle-telementic.png"],
    points: ["4G vehicle connectivity", "9–90V operating range", "Vehicle immobilisation"],
    specs: [["Connectivity", "4G cellular vehicle tracking"], ["Positioning", "GNSS positioning with location history"], ["Power", "Wide-voltage vehicle installation"], ["Control", "Remote immobilisation / cut-off support"], ["Monitoring", "Movement, speed and exception events"], ["Platform", "Connected VIoT operational visibility"]],
  },
  {
    id: "video-telematics", number: "02", title: "Video Telematics", category: "Fleet Intelligence",
    description: "Camera-based vehicle intelligence combining visual context with connected operations.",
    href: "/products/video-telematics", gallery: ["/image/video-telementics.png"],
    points: ["Triple-channel HD recording", "ADAS, DMS & BSD safety intelligence", "4G remote monitoring"],
    specs: [["Camera channels", "3 channels"], ["Front camera", "1080P Full HD · 115° wide angle"], ["Additional cameras", "2 × 720P HD"], ["AI functions", "ADAS, DMS and BSD"], ["Connectivity", "Built-in 4G LTE"], ["Positioning", "GPS + Beidou"], ["Storage", "TF card support up to 512GB"], ["Compression", "H.265 / H.264"], ["Audio", "Built-in microphone and speaker"], ["Live operations", "Live preview + voice intercom"], ["Power supply", "DC 10V–36V"], ["Power consumption", "<5W"], ["Operating temperature", "-25°C to +70°C"], ["Dimensions", "120 × 77 × 55 mm"], ["Weight", "260 g"]],
    note: "Supplier product names are intentionally omitted. Final availability and configuration should be confirmed for the deployment.",
  },
  {
    id: "smart-logistics-locks", number: "03", title: "Smart Logistics Locks", category: "Asset Intelligence",
    description: "Connected electronic locking technology for cargo security and physical asset protection.",
    href: "/products/smart-logistics-locks", gallery: ["/image/smart-lock.png"],
    points: ["4G + GNSS connected locking", "12000mAh rechargeable battery", "Tamper and lock-cut alerts"],
    specs: [["Connectivity", "4G cellular + GNSS positioning"], ["Battery", "12000mAh rechargeable lithium battery"], ["Access", "IC card, BLE, SMS, platform, app, geo-fence and timing"], ["Bluetooth", "Bluetooth 5.1"], ["RFID", "13.56MHz · ISO14443A"], ["Security events", "Shell-open, lock-cut, lock-failure and low-power alerts"], ["Positioning", "GNSS + assisted / network positioning"], ["Protection", "IP68"], ["Power saving", "Moving/static, latent and scheduled wake modes"], ["Charging", "DC 12V / 2A"], ["Operating temperature", "-30°C to +80°C"], ["Dimensions", "140 × 86 × 38 mm"], ["Lock formats", "Rope-type and pole-type configurations"]],
    note: "Exact lock format and regional communication bands depend on the selected deployment configuration.",
  },
  {
    id: "smart-infra-locks", number: "04", title: "Smart Infra Locks", category: "Access & Infrastructure",
    description: "Connected locking systems for controlled physical infrastructure.",
    href: "/products/smart-infra-locks", gallery: ["/image/smart-infra.png"],
    points: ["Lock-state visibility", "Exception-led monitoring", "Deployment-specific access workflows"],
    specs: [["Application", "Infrastructure access workflows"], ["Monitoring", "Lock state and exception events"], ["Platform", "VIoT event visibility"], ["Access", "Defined per deployment"], ["Connectivity", "Defined per site environment"], ["Configuration", "Confirmed during technical evaluation"]],
    note: "No single universal lock specification is implied for infrastructure deployments.",
  },
  {
    id: "asset-tracking", number: "05", title: "Asset Tracking", category: "Asset Intelligence",
    description: "Connected tracking for equipment, cargo and assets operating beyond vehicles.",
    href: "/products/asset-trackers", gallery: ["/image/asset-trackers.png"],
    points: ["7800 / 10000mAh battery options", "Powerful magnetic mounting", "Geo-fence and movement alerts"],
    specs: [["Positioning", "GPS + AGPS + LBS"], ["Battery", "7800mAh / 10000mAh options"], ["Mounting", "Integrated magnetic mounting"], ["Alerts", "Vibration and movement alerts"], ["Geo-fence", "Supported"], ["Voice monitoring", "Supported"], ["Protection", "IP65 dust and water protection"], ["GSM", "850 / 900 / 1800 / 1900 MHz"], ["GPRS", "Class 12 · TCP/IP"], ["GPS channels", "66"], ["Location accuracy", "<10 metres"], ["Operating temperature", "-20°C to +70°C"], ["Dimensions", "86 × 62 × 30 mm"], ["Weight", "255 g"]],
    note: "Battery life depends on reporting frequency, network conditions and operating mode.",
  },
  {
    id: "iot-sensors", number: "06", title: "IoT Sensors", category: "Asset Intelligence",
    description: "Connected sensing for environmental and operational conditions.",
    href: "/products/iot-sensors", gallery: ["/image/iot-sensors.png"],
    points: ["Temperature and fuel monitoring", "Device-to-platform reporting", "Application-specific sensor inputs"],
    specs: [["Purpose", "Application-specific event monitoring"], ["Typical inputs", "Temperature, fuel and other field sensors"], ["Data path", "Connected device to VIoT platform"], ["Hardware", "Selected for the use case"], ["Integration", "Scoped per deployment"]],
    note: "No universal sensor specification is implied. Exact sensor hardware and interfaces are confirmed during technical evaluation.",
  },
  {
    id: "access-control", number: "07", title: "Access Control", category: "Access Intelligence",
    description: "Connected access technology for physical entry and security events.",
    href: "/products/access-control", gallery: ["/image/access-control.png"],
    points: ["Connected access-event visibility", "RFID and credential-based access workflows", "Door and gate state monitoring"],
    specs: [["Visibility", "Connected access-event visibility"], ["Credentials", "RFID and credential-based access workflows"], ["Monitoring", "Door and gate state monitoring"]],
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

          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.045]"

        }`}

      />



      <div

        className={`absolute -right-56 bottom-[8%] h-[650px] w-[650px] rounded-full blur-3xl ${

          dark ? "bg-white/[0.012]" : "bg-[#081b24]/[0.04]"

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

          stroke={dark ? "rgba(255,255,255,0.055)" : "rgba(8,27,36,0.14)"}

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

          stroke={dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.20)"}

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

          stroke={dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.085)"}

          strokeWidth="1"

        />



        <motion.path

          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"

          stroke={dark ? "rgba(39,213,155,0.075)" : "rgba(0,124,103,0.12)"}

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

          dark ? "border-white/[0.035]" : "border-[#081b24]/[0.075]"

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

          dark ? "border-[#27d59b]/[0.055]" : "border-[#007c67]/[0.10]"

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

    <section className="relative mx-auto h-[92vh] min-h-[680px] max-h-[860px] overflow-hidden bg-[#081b24] text-white">

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



      <div className="relative z-[10] mx-auto flex h-full max-w-[1440px] items-center px-7 pt-14 sm:px-10 sm:pt-16 lg:px-14 lg:pt-20 xl:px-16">

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



function SpecificationsModal({ product, onClose }: { product: EcosystemProduct | null; onClose: () => void }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!product) return;

    const body = document.body;
    const html = document.documentElement;
    const scrollY = window.scrollY;

    const previousBody = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      paddingRight: body.style.paddingRight,
    };

    const previousHtmlOverflow = html.style.overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const esc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", esc);

    return () => {
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBody.overflow;
      body.style.position = previousBody.position;
      body.style.top = previousBody.top;
      body.style.left = previousBody.left;
      body.style.right = previousBody.right;
      body.style.width = previousBody.width;
      body.style.paddingRight = previousBody.paddingRight;

      window.removeEventListener("keydown", esc);
      window.scrollTo(0, scrollY);
    };
  }, [product, onClose]);
  if (!mounted || !product) return null;
  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] overflow-y-auto overscroll-none bg-[#081b24]/95 px-4 py-4 sm:px-6 sm:py-6"
        role="dialog"
        aria-modal="true"
        onClick={onClose}
      >
        <div className="flex min-h-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="flex max-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2] shadow-[0_28px_90px_rgba(0,0,0,0.45)] sm:max-h-[88dvh]"
          >
          <div className="shrink-0 border-b border-[#d3ddd9] px-5 py-5 sm:px-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-3"><span className="h-px w-7 bg-[#27d59b]"/><span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">Specifications</span></div>
                <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-[#081b24] sm:text-[28px]">{product.title}</h3>
              </div>
              <button type="button" onClick={onClose} className="rounded-lg border border-[#cdd5d2] bg-white px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#607078]">Close</button>
            </div>
          </div>
          <div
            className="min-h-0 flex-1 overflow-y-scroll overscroll-contain px-5 py-5 sm:px-6 [scrollbar-gutter:stable] touch-pan-y"
            style={{
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "contain",
              touchAction: "pan-y",
            }}
            onWheel={(event) => event.stopPropagation()}
            onTouchMove={(event) => event.stopPropagation()}
          >
            <div className="overflow-hidden rounded-xl border border-[#cdd8d4] bg-white divide-y divide-[#d8e1de]">
              {product.specs.map(([label,value], index) => <div key={`${product.id}-${label}`} className="grid gap-1.5 px-4 py-3.5 sm:grid-cols-[165px_1fr] sm:gap-5 sm:px-5"><div className="flex items-center gap-2"><span className="font-mono text-[7px] text-[#9aa5a1]">{String(index+1).padStart(2,"0")}</span><span className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-[#007c67]">{label}</span></div><span className="text-[12px] leading-5 text-[#42545b]">{value}</span></div>)}
            </div>
            {/* {product.note ? <div className="mt-4 rounded-xl border border-[#d7e0dc] bg-white px-4 py-3.5"><p className="text-[10px] leading-5 text-[#607078]">{product.note}</p></div> : null} */}
          </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>, document.body
  );
}

function ProductRow({ product, index, onSpecifications }: { product: EcosystemProduct; index: number; onSpecifications: (product: EcosystemProduct) => void }) {
  const imageFirst = index % 2 === 0;
  return (
    <section className="relative overflow-hidden border-t border-[#d4dfdb] bg-[#f4f6f2]">
      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <Reveal className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
            <Link href={product.href} aria-label={`Explore ${product.title}`} className="group block h-full">
              <div className="relative h-full overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#eef2ef] shadow-[0_18px_45px_rgba(8,27,36,0.08)]">
                <div className="relative aspect-[4/3] h-full min-h-[440px] sm:aspect-[16/10] lg:aspect-auto">
                  <motion.div className="absolute inset-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.55, ease: [0.16,1,0.3,1] }}><Image src={product.gallery[0]} alt={`${product.title} image`} fill sizes="(max-width: 1024px) 100vw, 58vw" className="object-contain p-6 sm:p-8 lg:p-10"/></motion.div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#081b24]/12 via-transparent to-white/[0.04]" />
                </div>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08} className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
            <div className="flex h-full min-h-[440px] flex-col rounded-2xl border border-[#c7d5d0] bg-white/80 p-6 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm sm:p-7 lg:p-8">
              <div className="flex items-center gap-3"><span className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white/70 px-2 font-mono text-[8px] font-semibold tracking-[0.14em] text-[#007c67]">{product.number}</span><span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#607078]">{product.category}</span></div>
              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[44px]">{product.title}</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-[#607078] sm:text-[15px]">{product.description}</p>
              <div className="mt-7 space-y-2.5">{product.points.map((point,pointIndex)=><motion.div key={point} initial={{opacity:0,x:12}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.25}} transition={{duration:0.4,delay:pointIndex*0.05}} className="flex items-start gap-3 rounded-xl border border-[#d2ddda] bg-white/65 px-4 py-3.5"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#007c67]/10 bg-[#007c67]/[0.035] font-mono text-[7px] text-[#007c67]">{String(pointIndex+1).padStart(2,"0")}</span><span className="text-[13px] leading-5 text-[#081b24]/75">{point}</span></motion.div>)}</div>
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-7"><button type="button" onClick={()=>onSpecifications(product)} className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#081b24] bg-[#081b24] px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-white transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67]">Specifications<ChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"/></button><Link href={product.href} className="group inline-flex h-10 items-center gap-2 rounded-lg border border-[#c7d5d0] bg-white px-4 text-[9px] font-semibold uppercase tracking-[0.09em] text-[#081b24] transition-all duration-300 hover:border-[#007c67] hover:text-[#007c67]">Explore product<ArrowUpRight className="h-3 w-3"/></Link></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function MoreFromEcosystem({ onSpecifications }: { onSpecifications: (product: EcosystemProduct) => void }) {

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

        <ProductRow key={product.id} product={product} index={index} onSpecifications={onSpecifications} />

      ))}

    </>

  );

}



export default function ProductsClient() {
  const [specProduct, setSpecProduct] = useState<EcosystemProduct | null>(null);

  return (

    <main className="relative overflow-x-clip bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      <div className="relative z-10">
        <ProductHero />

        <MoreFromEcosystem onSpecifications={setSpecProduct} />

        <CtaBand />
      </div>

      <SpecificationsModal
        product={specProduct}
        onClose={() => setSpecProduct(null)}
      />
    </main>

  );

}
