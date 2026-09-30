"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Play,
  Radio,
  ShieldCheck,
  Truck,
  Box,
  LockKeyhole,
  Activity,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Products — Fleet, Asset & Access Intelligence",
  description:
    "Explore VIoT hardware for vehicle telematics, video telematics, smart locks, asset tracking and IoT sensing.",
  alternates: {
    canonical: "/products",
  },
};

const productGroups = [
  {
    id: "fleet",
    title: "Fleet Intelligence",
    description:
      "Connected hardware for understanding vehicle location, movement and operational events.",
    icon: Truck,
    products: [
      {
        title: "Vehicle Telematics",
        description:
          "Connected vehicle hardware that captures location, movement and operational data for the VIoT platform.",
        image: "/image/video.png",
        href: "/products/vehicle-telematics",
        label: "Vehicle / Telematics",
      },
      {
        title: "Video Telematics",
        description:
          "A visual layer for vehicle operations, combining vehicle context with camera-based information.",
        image: "/image/car.jpeg",
        href: "/products/video-telematics",
        label: "Vehicle / Video",
      },
    ],
  },
  {
    id: "asset",
    title: "Asset Intelligence",
    description:
      "Hardware for securing, locating and sensing the assets that move through your operation.",
    icon: Box,
    products: [
      {
        title: "Smart Logistics Locks",
        description:
          "Electronic locking technology designed to connect physical cargo security with digital visibility.",
        image: "/image/lock.png",
        href: "/products/smart-logistics-locks",
        label: "Asset / Security",
      },
      {
        title: "Smart Infra Locks",
        description:
          "Connected locking systems for infrastructure and controlled physical access requirements.",
        image: "/image/lock.png",
        href: "/products/smart-infra-locks",
        label: "Infrastructure / Security",
      },
      {
        title: "Asset Tracking",
        description:
          "Tracking hardware for assets that need visibility even when they are not connected to a vehicle.",
        image: "/image/lab.jpeg",
        href: "/products/asset-trackers",
        label: "Asset / Tracking",
      },
      {
        title: "IoT Sensors",
        description:
          "Connected sensing for applications where environmental or operational conditions need to be monitored.",
        image: "/image/ev.jpeg",
        href: "/products/iot-sensors",
        label: "Asset / Sensing",
      },
    ],
  },
  {
    id: "access",
    title: "Access Control",
    description:
      "Connected systems for controlling and understanding access to physical environments.",
    icon: LockKeyhole,
    products: [
      {
        title: "Access Control",
        description:
          "Connected access technology designed to bring physical entry events into a unified operational view.",
        image: "/image/lock.png",
        href: "/products/access-control",
        label: "Access / Control",
      },
    ],
  },
];

const flowSteps = [
  {
    title: "Satellite",
    description: "Location signals begin at the edge.",
    icon: Radio,
  },
  {
    title: "Device",
    description: "Connected hardware captures the field event.",
    icon: Activity,
  },
  {
    title: "Network",
    description: "Telemetry travels securely to the platform.",
    icon: Radio,
  },
  {
    title: "VIoT Platform",
    description: "Raw signals become useful operational context.",
    icon: Activity,
  },
  {
    title: "Action",
    description: "Teams respond with the information they need.",
    icon: ShieldCheck,
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : undefined
      }
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function PremiumCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 35, mass: 0.35 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 35, mass: 0.35 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, [data-cursor]")));
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 md:block"
    >
      <motion.div
        animate={{ width: active ? 44 : 8, height: active ? 44 : 8, opacity: active ? 0.9 : 0.65 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="flex items-center justify-center rounded-full border border-[#27d59b]/70 bg-[#27d59b]/[0.06] backdrop-blur-sm"
      >
        {active && <span className="font-mono text-[7px] font-semibold uppercase tracking-[0.16em] text-[#27d59b]">View</span>}
      </motion.div>
    </motion.div>
  );
}

function ProductsAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-[#27d59b]/[0.045] blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#081b24]/[0.035] blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <svg
        viewBox="0 0 1600 1000"
        className="absolute inset-0 h-full w-full opacity-60"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-100 690 C220 470 420 520 690 690 S1150 890 1700 590"
          stroke="#007c67"
          strokeOpacity="0.08"
          strokeWidth="1"
          strokeDasharray="3 16"
          animate={{
            strokeDashoffset: [0, -160],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M-120 270 C180 80 440 100 680 320 S1120 610 1710 230"
          stroke="#081b24"
          strokeOpacity="0.055"
          strokeWidth="1"
          animate={{
            pathLength: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <path
          d="M150 1020 C300 720 520 700 760 460 S1220 120 1570 -40"
          stroke="#081b24"
          strokeOpacity="0.035"
          strokeWidth="1"
        />
      </svg>

      <motion.div
        className="absolute left-[22%] top-[24%] h-1.5 w-1.5 rounded-full bg-[#007c67]"
        animate={{
          x: [0, 100, 190],
          y: [0, 25, 5],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[61%] top-[70%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, -90, -170],
          y: [0, -20, 10],
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

function ProductHero() {
  const ref = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 80, damping: 20 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[78vh] overflow-hidden bg-[#f4f6f2]"
      onMouseMove={handlePointerMove}
      onMouseLeave={resetPointer}
    >
      <ProductsAtmosphere />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(8,27,36,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(8,27,36,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <motion.div
        aria-hidden="true"
        style={{ x: useTransform(smoothX, [-0.5, 0.5], [-18, 18]), y: useTransform(smoothY, [-0.5, 0.5], [-12, 12]) }}
        className="pointer-events-none absolute right-[9%] top-[18%] hidden h-32 w-32 rounded-full border border-[#007c67]/10 lg:block"
      />

      <div className="relative z-10 mx-auto grid min-h-[78vh] max-w-[1440px] items-center gap-12 px-6 py-24 sm:px-8 lg:grid-cols-12 lg:px-12 lg:py-28 xl:px-16">
        <motion.div
          style={{ y: textY }}
          className="lg:col-span-7"
        >
          <Reveal>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007c67]" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#607078]">
                VIoT / Products
              </span>
            </div>

            <h1 className="max-w-4xl font-heading text-[clamp(3.2rem,7vw,6.9rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-[#081b24]">
              Hardware built for
              <span className="block text-[#007c67]">
                the physical world.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-[15px] leading-7 text-[#607078] sm:text-base">
              Connected devices for vehicles, assets and controlled access —
              designed to capture what is happening in the field and make it
              useful to the people operating it.
            </p>
          </Reveal>
        </motion.div>

        <motion.div
          style={{ y: imageY, x: useTransform(smoothX, [-0.5, 0.5], [8, -8]), rotate: useTransform(smoothX, [-0.5, 0.5], [-0.8, 0.8]) }}
          className="relative lg:col-span-5"
        >
          <Reveal delay={0.12}>
            <div className="group relative mx-auto aspect-[4/3] max-w-[570px] overflow-hidden bg-[#e8eeeb] shadow-[0_30px_90px_rgba(8,27,36,0.12)] ring-1 ring-black/[0.05]">
              <Image
                src="/image/video.png"
                alt="VIoT connected vehicle hardware"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.025]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/35 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-white">
                <span className="h-2 w-2 rounded-full bg-[#27d59b] shadow-[0_0_12px_rgba(39,213,155,0.7)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
                  Connected hardware
                </span>
              </div>

              <div className="absolute right-5 top-5 flex items-center gap-2 border border-white/20 bg-[#081b24]/45 px-3 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/75">Edge / Online</span>
              </div>

              <div className="absolute inset-x-5 top-1/2 h-px origin-left scale-x-0 bg-[#27d59b]/60 transition-transform duration-700 group-hover:scale-x-100" />
            </div>
          </Reveal>
        </motion.div>
      </div>
    </section>
  );
}

function DataFlowSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#081b24] text-white">
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute left-[15%] top-[18%] h-[420px] w-[420px] rounded-full border border-white/[0.05]"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute right-[8%] bottom-[5%] h-[320px] w-[320px] rounded-full border border-[#27d59b]/[0.08]"
          animate={{ rotate: -360 }}
          transition={{
            duration: 48,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Connected journey
              </p>

              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[4.2rem]">
                From signal
                <span className="text-white/35"> to action.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-white/45 lg:col-span-5 lg:ml-auto">
              Every connected operation begins at the edge. The device
              captures what is happening, the network carries it and the VIoT
              platform turns that signal into operational context.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-12 lg:mt-16">
          <div className="relative overflow-hidden bg-black">
            <div className="aspect-video">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/image/video.png"
              >
                <source
                  src="/video/products-data-flow.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <motion.div
              aria-hidden="true"
              className="absolute left-[8%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#27d59b] shadow-[0_0_18px_#27d59b]"
              animate={{ x: [0, 260, 520, 780], y: [0, 35, -15, 25], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute bottom-5 left-5 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#27d59b] text-[#081b24]">
                <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/70">
                Live data journey
              </span>
            </div>
          </div>
        </Reveal>

        {/* Interactive story */}
        <div className="mt-10">
          <div className="grid gap-2 md:grid-cols-5">
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              const active = index === activeStep;

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="group text-left"
                >
                  <motion.div
                    animate={{
                      backgroundColor: active
                        ? "rgba(39,213,155,0.08)"
                        : "rgba(255,255,255,0)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="relative h-full px-4 py-5"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <Icon
                        className={`h-4 w-4 transition-colors ${
                          active
                            ? "text-[#27d59b]"
                            : "text-white/25 group-hover:text-white/55"
                        }`}
                      />

                      <ChevronRight
                        className={`h-3.5 w-3.5 transition-all ${
                          active
                            ? "translate-x-0 text-[#27d59b]"
                            : "-translate-x-1 text-white/15 group-hover:translate-x-0 group-hover:text-white/40"
                        }`}
                      />
                    </div>

                    <h3
                      className={`font-heading text-sm font-semibold transition-colors ${
                        active ? "text-white" : "text-white/55"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`mt-2 text-xs leading-5 transition-colors ${
                        active ? "text-white/55" : "text-white/25"
                      }`}
                    >
                      {step.description}
                    </p>

                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-[#27d59b]"
                      initial={{ width: 0 }}
                      animate={{
                        width: active ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.35 }}
                    />
                  </motion.div>
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-7 max-w-xl text-sm text-white/40"
          >
            {flowSteps[activeStep].description}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  featured = false,
}: {
  product: (typeof productGroups)[number]["products"][number];
  featured?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={featured ? "lg:col-span-2" : ""}
    >
      <Link href={product.href} className="group block">
        <div
          className={`relative overflow-hidden bg-[#e8eeeb] shadow-[0_14px_50px_rgba(8,27,36,0.06)] ring-1 ring-black/[0.045] transition-shadow duration-500 group-hover:shadow-[0_24px_70px_rgba(8,27,36,0.12)] ${
            featured
              ? "aspect-[2/1] sm:aspect-[2.15/1]"
              : "aspect-[16/10]"
          }`}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 90vw"
                : "(max-width: 1024px) 50vw, 42vw"
            }
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/55 via-transparent to-transparent opacity-55 transition-opacity duration-500 group-hover:opacity-90" />
          <div className="absolute left-5 top-5 flex items-center gap-2 border border-white/15 bg-[#081b24]/35 px-2.5 py-1.5 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 -translate-y-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/75">Connected</span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/75">
              {product.label}
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#081b24] opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-5">
          <div>
            <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#081b24] sm:text-2xl">
              {product.title}
            </h3>

            <p className="mt-2 max-w-xl text-[13px] leading-6 text-[#607078]">
              {product.description}
            </p>
          </div>

          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#607078] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#007c67]" />
        </div>
      </Link>
    </motion.div>
  );
}

function ProductEcosystem() {
  const [activeGroup, setActiveGroup] = useState("all");

  const visibleGroups = useMemo(() => {
    if (activeGroup === "all") return productGroups;

    return productGroups.filter((group) => group.id === activeGroup);
  }, [activeGroup]);

  return (
    <section className="relative overflow-hidden bg-[#f4f6f2]">
      <ProductsAtmosphere />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                Product ecosystem
              </p>

              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
                Hardware for every
                <span className="text-[#007c67]"> part of the operation.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-[#607078] lg:col-span-5 lg:ml-auto">
              Vehicle, asset and access hardware designed to work as one
              connected ecosystem.
            </p>
          </div>
        </Reveal>

        {/* Category interaction */}
        <Reveal delay={0.08} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All products" },
              { id: "fleet", label: "Fleet Intelligence" },
              { id: "asset", label: "Asset Intelligence" },
              { id: "access", label: "Access Control" },
            ].map((filter) => {
              const active = activeGroup === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  data-cursor
                  onClick={() => setActiveGroup(filter.id)}
                  className={`rounded-full px-4 py-2.5 text-[11px] font-semibold transition-all duration-300 ${
                    active
                      ? "bg-[#081b24] text-white"
                      : "bg-white text-[#607078] hover:bg-[#e7ece9] hover:text-[#081b24]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-14 space-y-20 lg:mt-20">
          {visibleGroups.map((group, groupIndex) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: groupIndex * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="mb-9 grid gap-6 lg:grid-cols-12 lg:items-end">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-[#007c67]" />

                      <h3 className="font-heading text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <p className="max-w-xl text-sm leading-6 text-[#607078] lg:col-span-5 lg:col-start-8">
                    {group.description}
                  </p>
                </div>

                <div
                  className={`grid gap-10 ${
                    group.products.length === 1
                      ? "lg:grid-cols-1"
                      : group.products.length === 2
                        ? "lg:grid-cols-2"
                        : "lg:grid-cols-2"
                  }`}
                >
                  {group.products.map((product, index) => (
                    <ProductCard
                      key={product.title}
                      product={product}
                      featured={
                        group.products.length > 2 && index === 0
                      }
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HardwareToPlatform() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0.2, 0.55, 0.85],
    [0, 1, 1],
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0d2935] text-white"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
              Beyond the device
            </p>

            <h2 className="mt-5 max-w-2xl font-heading text-4xl font-semibold leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-[4rem]">
              Hardware is only
              <span className="text-white/35"> the beginning.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
              The value of connected hardware comes from what happens to its
              data. VIoT connects the edge with the platform so teams can move
              from physical events to operational context.
            </p>
          </Reveal>

          <div className="relative lg:col-span-5 lg:col-start-8">
            <div className="relative">
              <motion.div
                style={{ scaleX: lineScale }}
                className="absolute left-0 right-0 top-[27px] h-px origin-left bg-[#27d59b]/50"
              />

              <div className="relative grid grid-cols-4 gap-4">
                {[
                  {
                    title: "Capture",
                    icon: Activity,
                  },
                  {
                    title: "Transmit",
                    icon: Radio,
                  },
                  {
                    title: "Understand",
                    icon: Activity,
                  },
                  {
                    title: "Act",
                    icon: ShieldCheck,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0d2935] ring-1 ring-white/[0.10]">
                        <Icon className="h-4 w-4 text-[#27d59b]" />
                      </div>

                      <p className="mt-5 text-xs font-semibold text-white/75">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24]">
      <PremiumCursor />
      <ProductHero />

      <DataFlowSection />

      <ProductEcosystem />

      <HardwareToPlatform />

      <CtaBand />
    </main>
  );
}