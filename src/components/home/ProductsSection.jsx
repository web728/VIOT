"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon, SignalIcon, PinIcon, LockIcon, PulseIcon } from "@/components/icons";

const products = [
  {
    id: "vehicle-telematics",
    number: "01",
    title: "Vehicle Telematics",
    meta: "Fleet Intelligence",
    summary: "Real-time location, ignition & diagnostic tracking.",
    subDesc: "Reliable 2G/4G tracking built for rigorous Indian road conditions.",
    details: "Built on firmware refined over years of field deployments on Indian roads and networks. Provides instant alerts on harsh driving, idle times, and precise geofence tracking.",
    points: [
      "2G / 4G connectivity across all regions",
      "Live ignition & engine diagnostics",
      "9–36V wide input range support",
      "Instant tampering & power-cut alerts"
    ],
    image: "/image/video.png", // Aap apni actual image path yahan dal sakte hain
    icon: <SignalIcon />,
    href: "/products/vehicle-telematics"
  },
  {
    id: "video-telematics",
    number: "02",
    title: "Video Telematics",
    meta: "Fleet Intelligence",
    summary: "Dashcams turning footage into evidence & coaching.",
    subDesc: "AI-powered ADAS & DMS alerting to prevent accidents proactively.",
    details: "Combines road-facing and in-cabin cameras with AI intelligence to flag distracted driving, drowsiness, and near-misses in real time before incidents occur.",
    points: [
      "Front + cabin view dual recording",
      "AI-powered ADAS & DMS alerting",
      "Event-triggered automated clip upload",
      "Live streaming on demand"
    ],
    image: "/image/car.jpeg",
    icon: <PinIcon />,
    href: "/products/video-telematics"
  },
  {
    id: "smart-locks",
    number: "03",
    title: "Smart Locks (E-Lock)",
    meta: "Asset Intelligence",
    summary: "Tamper-evident electronic locking for cargo.",
    subDesc: "Secure container doors remotely via PIN or RFID credentials.",
    details: "Remote-controlled container security ensuring cargo remains untouched from dispatch to delivery. Operates via secure PIN or RFID authentication.",
    points: [
      "10,000 / 12,000 mAh long-life battery",
      "Remote lock & unlock via platform",
      "Real-time breach & tamper detection",
      "Tied directly to shipment records"
    ],
    image: "/image/lock.png",
    icon: <LockIcon />,
    href: "/products/smart-locks"
  },
  {
    id: "asset-tracking",
    number: "04",
    title: "Asset Tracking",
    meta: "Asset Intelligence",
    summary: "Long-standby trackers for non-motorised assets.",
    subDesc: "Durable battery & solar-powered tracking for idle equipment.",
    details: "Designed specifically for generators, trailers, and machinery that sit idle between deployments in remote or outdoor yards.",
    points: [
      "Extended standby battery life",
      "Solar-rechargeable variant available",
      "Instant motion & geofence alerts",
      "Same unified platform dashboard"
    ],
    image: "/image/lab.jpeg",
    icon: <SignalIcon />,
    href: "/products/asset-tracking"
  },
  {
    id: "iot-sensors",
    number: "05",
    title: "IoT Sensors",
    meta: "Asset Intelligence",
    summary: "Temperature, fuel, load & Bluetooth sensors.",
    subDesc: "Continuous cold-chain and pilferage compliance monitoring.",
    details: "Precision wireless sensors providing continuous compliance monitoring for cold-chain shipments, fuel levels, and heavy vehicle load limits.",
    points: [
      "Cold-chain temperature tracking",
      "Real-time fuel pilferage alerts",
      "Axle load compliance logging",
      "Bluetooth close-proximity tagging"
    ],
    image: "/image/ev.jpeg",
    icon: <PulseIcon />,
    href: "/products/iot-sensors"
  },
];

export function ProductsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeProduct = products[selectedIndex];

  return (
    <section className="relative bg-slate-50 py-20 lg:py-24 px-6 lg:px-12 text-slate-900 overflow-hidden border-t border-slate-200" id="products">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-xl">
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full">
              Products Ecosystem
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 leading-tight">
              Five hardware lines. <span className="text-slate-400 font-normal">Two divisions.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-sans">
            Different applications, one connected ecosystem reporting into a unified platform. Select any module to inspect specs.
          </p>
        </div>

        {/* Compact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT SIDE: Interactive Product Cards with Expandable Sub-Description */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {products.map((product, idx) => {
              const isActive = selectedIndex === idx;
              return (
                <div
                  key={product.id}
                  onClick={() => setSelectedIndex(idx)}
                  className={`group cursor-pointer rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-emerald-500/20"
                      : "bg-white text-slate-800 border-slate-200 hover:border-emerald-400 hover:bg-slate-50/50 shadow-sm"
                  }`}
                >
                  <div className="p-4 sm:p-5 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <span className={`font-mono text-xs font-bold px-2 py-1 rounded-md transition-colors ${
                        isActive ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600 border border-emerald-200"
                      }`}>
                        {product.number}
                      </span>
                      <div>
                        <span className={`text-[10px] font-mono tracking-wider uppercase block ${isActive ? "text-emerald-400" : "text-slate-400"}`}>
                          {product.meta}
                        </span>
                        <h3 className="text-sm sm:text-base font-semibold tracking-tight mt-0.5">
                          {product.title}
                        </h3>
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                      isActive ? "bg-emerald-500 text-slate-950 rotate-90" : "bg-slate-100 text-slate-400 group-hover:text-emerald-600"
                    }`}>
                      <ArrowIcon className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Expandable Sub-Description inside the left card on click */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-slate-800/80"
                      >
                        <p className="text-xs text-slate-300 leading-relaxed font-sans pt-3">
                          {product.subDesc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Compact Product Detail Panel with Hardware Image & Points */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg flex flex-col justify-between relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Product Hardware Image Top Header */}
                <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner">
                  <Image 
                    src={activeProduct.image} 
                    alt={activeProduct.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase">
                      {activeProduct.meta}
                    </span>
                  </div>
                </div>

                {/* Title & Summary */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {activeProduct.title}
                    </h3>
                    <span className="font-mono text-sm font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                      Module {activeProduct.number}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-800 leading-snug">
                    {activeProduct.summary}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pt-1">
                    {activeProduct.details}
                  </p>
                </div>

                {/* Key Points Bullet Grid */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                    Core Specifications
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeProduct.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-normal">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Action Footer */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-500 font-mono">
                End-to-end supported by VIoT engineers.
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-emerald-700 shadow-sm"
                >
                  Get in touch
                  <ArrowIcon className="w-3 h-3 flex-shrink-0" />
                </Link>
                <Link
                  href={activeProduct.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 transition-all hover:border-emerald-500 hover:text-slate-900"
                >
                  Full Specs
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}