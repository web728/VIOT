"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowIcon,
  SignalIcon,
  PinIcon,
  LockIcon,
  PulseIcon,
} from "@/components/icons";

const products = [
  {
    id: "vehicle-telematics",
    number: "01",
    title: "Vehicle Telematics",
    meta: "Fleet Intelligence",
    summary: "Real-time location, ignition & diagnostic tracking.",
    subDesc:
      "Reliable 2G/4G tracking built for rigorous Indian road conditions.",
    details:
      "Built on firmware refined over years of field deployments on Indian roads and networks. Provides instant alerts on harsh driving, idle times, and precise geofence tracking.",
    points: [
      "2G / 4G connectivity across all regions",
      "Live ignition & engine diagnostics",
      "9–36V wide input range support",
      "Instant tampering & power-cut alerts",
    ],
    image: "/image/video.png",
    icon: <SignalIcon />,
    href: "/products/vehicle-telematics",
  },
  {
    id: "video-telematics",
    number: "02",
    title: "Video Telematics",
    meta: "Fleet Intelligence",
    summary: "Dashcams turning footage into evidence & coaching.",
    subDesc:
      "AI-powered ADAS & DMS alerting to prevent accidents proactively.",
    details:
      "Combines road-facing and in-cabin cameras with AI intelligence to flag distracted driving, drowsiness, and near-misses in real time before incidents occur.",
    points: [
      "Front + cabin view dual recording",
      "AI-powered ADAS & DMS alerting",
      "Event-triggered automated clip upload",
      "Live streaming on demand",
    ],
    image: "/image/car.jpeg",
    icon: <PinIcon />,
    href: "/products/video-telematics",
  },
  {
    id: "smart-locks",
    number: "03",
    title: "Smart Locks (E-Lock)",
    meta: "Asset Intelligence",
    summary: "Tamper-evident electronic locking for cargo.",
    subDesc:
      "Secure container doors remotely via PIN or RFID credentials.",
    details:
      "Remote-controlled container security ensuring cargo remains untouched from dispatch to delivery. Operates via secure PIN or RFID authentication.",
    points: [
      "10,000 / 12,000 mAh long-life battery",
      "Remote lock & unlock via platform",
      "Real-time breach & tamper detection",
      "Tied directly to shipment records",
    ],
    image: "/image/lock.png",
    icon: <LockIcon />,
    href: "/products/smart-locks",
  },
  {
    id: "asset-tracking",
    number: "04",
    title: "Asset Tracking",
    meta: "Asset Intelligence",
    summary: "Long-standby trackers for non-motorised assets.",
    subDesc:
      "Durable battery & solar-powered tracking for idle equipment.",
    details:
      "Designed specifically for generators, trailers, and machinery that sit idle between deployments in remote or outdoor yards.",
    points: [
      "Extended standby battery life",
      "Solar-rechargeable variant available",
      "Instant motion & geofence alerts",
      "Same unified platform dashboard",
    ],
    image: "/image/lab.jpeg",
    icon: <SignalIcon />,
    href: "/products/asset-tracking",
  },
  {
    id: "iot-sensors",
    number: "05",
    title: "IoT Sensors",
    meta: "Asset Intelligence",
    summary: "Temperature, fuel, load & Bluetooth sensors.",
    subDesc:
      "Continuous cold-chain and pilferage compliance monitoring.",
    details:
      "Precision wireless sensors providing continuous compliance monitoring for cold-chain shipments, fuel levels, and heavy vehicle load limits.",
    points: [
      "Cold-chain temperature tracking",
      "Real-time fuel pilferage alerts",
      "Axle load compliance logging",
      "Bluetooth close-proximity tagging",
    ],
    image: "/image/ev.jpeg",
    icon: <PulseIcon />,
    href: "/products/iot-sensors",
  },
];

export function ProductsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeProduct = products[selectedIndex];

  return (
    <section
      id="products"
      className="overflow-hidden border-t border-line bg-paper"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-4 border-b border-line pb-7 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-7 bg-signal-dark" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Products
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-ink sm:text-4xl lg:text-[48px]">
              Hardware built for the
              <br />
              <span className="text-muted">real world.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-[13px] leading-5.5 text-muted sm:text-sm sm:leading-6">
              Connected devices for vehicles, assets and physical security —
              bringing field data into one operating platform.
            </p>
          </div>
        </motion.div>

        {/* ================================================= */}
        {/* PRODUCT EXPERIENCE */}
        {/* ================================================= */}

        <div className="mt-7 grid gap-7 lg:grid-cols-12 lg:gap-10">
          {/* ================================================= */}
          {/* PRODUCT INDEX */}
          {/* ================================================= */}

          <div className="lg:col-span-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                Product lines
              </span>

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                05 / 05
              </span>
            </div>

            <div className="border-t border-line">
              {products.map((product, index) => {
                const isActive = selectedIndex === index;

                return (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="group relative block w-full border-b border-line text-left outline-none"
                  >
                    {/* Active line */}
                    <motion.span
                      initial={false}
                      animate={{
                        scaleY: isActive ? 1 : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                      className="absolute left-0 top-0 h-full w-[2px] origin-top bg-signal-dark"
                    />

                    <div
                      className={`flex items-start gap-4 py-4 pl-4 transition-colors duration-300 sm:py-[18px] ${
                        isActive
                          ? "bg-white"
                          : "bg-transparent group-hover:bg-white/60"
                      }`}
                    >
                      {/* Number */}
                      <span
                        className={`pt-1 font-mono text-[9px] tracking-[0.12em] ${
                          isActive
                            ? "text-signal-dark"
                            : "text-muted/50"
                        }`}
                      >
                        {product.number}
                      </span>

                      {/* Product information */}
                      <div className="min-w-0 flex-1">
                        <span
                          className={`font-mono text-[8px] uppercase tracking-[0.16em] ${
                            isActive
                              ? "text-signal-dark"
                              : "text-muted"
                          }`}
                        >
                          {product.meta}
                        </span>

                        <h3
                          className={`mt-0.5 font-heading text-[15px] font-medium tracking-[-0.02em] sm:text-base ${
                            isActive ? "text-ink" : "text-ink/70"
                          }`}
                        >
                          {product.title}
                        </h3>

                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.25,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              className="max-w-sm overflow-hidden pr-4 pt-1.5 text-[11px] leading-[18px] text-muted"
                            >
                              {product.subDesc}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Arrow */}
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border transition-all duration-300 ${
                          isActive
                            ? "border-signal-dark bg-signal-dark text-white"
                            : "border-line text-muted group-hover:border-signal-dark group-hover:text-signal-dark"
                        }`}
                      >
                        <motion.span
                          animate={{
                            rotate: isActive ? 0 : -45,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <ArrowIcon className="h-2.5 w-2.5" />
                        </motion.span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================= */}
          {/* PRODUCT DETAIL */}
          {/* ================================================= */}

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* ================================================= */}
                {/* PRODUCT IMAGE */}
                {/* ================================================= */}

                <div className="relative overflow-hidden border border-line bg-white">
                  <div className="relative aspect-[16/7] min-h-[220px] sm:min-h-[250px] lg:min-h-[285px]">
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover"
                      priority={selectedIndex === 0}
                    />

                    {/* Subtle image overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-ink/5 to-transparent" />

                    {/* Top identifier */}
                    <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-6 sm:top-6">
                      <span className="font-mono text-[9px] tracking-[0.16em] text-white/70">
                        {activeProduct.number}
                      </span>

                      <span className="h-px w-6 bg-white/40" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white">
                        {activeProduct.meta}
                      </span>
                    </div>

                    {/* Product name */}
                    <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6">
                      <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/55">
                        VIoT hardware
                      </p>

                      <h3 className="mt-0.5 font-heading text-lg font-medium tracking-[-0.03em] text-white sm:text-xl">
                        {activeProduct.title}
                      </h3>
                    </div>

                    {/* Technical corner marks */}
                    <span className="absolute right-5 top-5 h-5 w-5 border-r border-t border-white/45 sm:right-6 sm:top-6" />

                    <span className="absolute bottom-5 right-5 h-5 w-5 border-b border-r border-white/45 sm:bottom-6 sm:right-6" />
                  </div>
                </div>

                {/* ================================================= */}
                {/* INFORMATION */}
                {/* ================================================= */}

                <div className="grid border-b border-line lg:grid-cols-12">
                  {/* Description */}
                  <div className="border-b border-line py-5 sm:py-6 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-8">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-5 bg-signal-dark" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal-dark">
                        {activeProduct.meta}
                      </span>
                    </div>

                    <h3 className="mt-3 font-heading text-xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-2xl">
                      {activeProduct.summary}
                    </h3>

                    <p className="mt-3 max-w-xl text-xs leading-5.5 text-muted sm:text-[13px] sm:leading-6">
                      {activeProduct.details}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={activeProduct.href}
                        className="group inline-flex items-center gap-3 border-b border-ink pb-1.5 text-[11px] font-semibold text-ink transition-colors hover:border-signal-dark hover:text-signal-dark"
                      >
                        Explore product

                        <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="py-5 sm:py-6 lg:col-span-5 lg:pl-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                        Key specifications
                      </span>

                      <span className="font-mono text-[8px] text-muted">
                        {activeProduct.number} / 05
                      </span>
                    </div>

                    <div className="mt-3">
                      {activeProduct.points.map((point, index) => (
                        <motion.div
                          key={point}
                          initial={{
                            opacity: 0,
                            x: 6,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                          }}
                          className="flex items-start gap-3 border-t border-line py-2.5 first:border-t-0"
                        >
                          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 bg-signal" />

                          <span className="text-[11px] leading-[18px] text-ink/70">
                            {point}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ================================================= */}
                {/* PRODUCT FOOTER */}
                {/* ================================================= */}

                <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                      Connected to VIoT platform
                    </span>

                    <span className="h-1 w-1 bg-signal" />
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex w-fit items-center gap-3 border border-ink bg-ink px-4 py-2 text-[11px] font-semibold text-white transition-colors hover:border-signal-dark hover:bg-signal-dark"
                  >
                    Talk to our team

                    <ArrowIcon className="h-2.5 w-2.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ================================================= */}
        {/* SYSTEM STRIP */}
        {/* ================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="mt-10 border-t border-line pt-4 sm:mt-12"
        >
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
              One hardware ecosystem
            </span>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
              <span>Fleet</span>

              <span className="h-1 w-1 bg-signal" />

              <span>Asset</span>

              <span className="h-1 w-1 bg-signal" />

              <span>Access</span>

              <span className="hidden h-px w-7 bg-line sm:block" />

              <span className="text-signal-dark">
                Unified platform
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}