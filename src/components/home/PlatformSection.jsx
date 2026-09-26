"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "@/components/icons";

const platformModules = [
  {
    number: "01",
    title: "Fleet Management",
    tagline: "Live GPS, ignition & geofencing telemetry.",
    desc: "Real-time vehicle location, route history and geofencing for your entire fleet on one map. Ignition status and trip logs update instantly.",
    features: ["Live location & geofencing", "Route history & trip logs", "Ignition status monitoring", "Role-based team access"],
    metric: "100% Active",
    statusColor: "bg-emerald-500",
  },
  {
    number: "02",
    title: "EV Management",
    tagline: "Battery health & range telemetry.",
    desc: "Battery health, charging status and range telemetry for electric fleets, unified on the same dashboard as combustion vehicles.",
    features: ["Battery health monitoring", "Charging status & history", "Range telemetry", "Unified fleet view"],
    metric: "98% Healthy",
    statusColor: "bg-cyan-500",
  },
  {
    number: "03",
    title: "E-Lock Security",
    tagline: "Remote container lock & breach alerts.",
    desc: "Remote lock/unlock, tamper alerts and access logs for every E-Lock device in the field, tied directly to shipment records.",
    features: ["Remote lock / unlock", "Tamper & breach alerts", "Full access history", "Shipment record linking"],
    metric: "Secured",
    statusColor: "bg-amber-500",
  },
  {
    number: "04",
    title: "Video Telematics",
    tagline: "AI dashcams & automated clip upload.",
    desc: "Live streaming on demand and event-triggered clip retrieval from every dashcam in the fleet, without manual SD-card pulls.",
    features: ["Live streaming on demand", "Event-triggered clip upload", "ADAS / DMS alert review", "Footage retention control"],
    metric: "Streaming",
    statusColor: "bg-emerald-500",
  },
  {
    number: "05",
    title: "Fuel Monitoring",
    tagline: "Pilferage detection & drain logs.",
    desc: "Fuel-level tracking and pilferage alerts across the fleet, with drain and refuel events logged automatically per vehicle.",
    features: ["Fuel-level tracking", "Pilferage / drain alerts", "Refuel event logging", "Per-vehicle history"],
    metric: "Optimized",
    statusColor: "bg-emerald-500",
  },
  {
    number: "06",
    title: "Access Control",
    tagline: "Facility gates & credential sync.",
    desc: "Door and facility hardware reporting into its own certified platform — door status, access logs and credential management.",
    features: ["Door status & access logs", "Credential management", "Certified platform", "Unified team support"],
    metric: "Synced",
    statusColor: "bg-indigo-500",
  },
];

export function PlatformSection() {
  const [activeTab, setActiveTab] = useState(0);
  const activeModule = platformModules[activeTab];

  return (
    <section className="bg-[#060f14] text-white py-20 lg:py-24 px-6 lg:px-12 relative overflow-hidden border-t border-slate-800/80" id="platform">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full shadow-sm">
            Unified Architecture
          </span>
          <h2 className="mt-3.5 font-heading text-2xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
            Every device, every division, <span className="text-emerald-400">one master console.</span>
          </h2>
          <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
            Switch between core intelligence modules instantly with zero data reconciliation friction.
          </p>
        </div>

        {/* Interactive Tab Navigation Bar (Compact & Centered) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {platformModules.map((mod, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={mod.number}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md font-semibold scale-105"
                    : "bg-slate-900/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${isActive ? "bg-slate-950/20 text-slate-950" : "bg-slate-800 text-emerald-400"}`}>
                  {mod.number}
                </span>
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Live Command Console Display Box (Compact & Clean) */}
        <div className="bg-slate-900/70 border border-slate-800/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative backdrop-blur-md overflow-hidden">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule.number}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details & Tagline */}
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80">
                  <span className={`w-1.5 h-1.5 rounded-full ${activeModule.statusColor} animate-pulse`} />
                  <span className="font-mono text-[11px] text-slate-300 uppercase tracking-wider">
                    Module {activeModule.number} Active Stream
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {activeModule.title}
                  </h3>
                  <p className="text-emerald-400 font-mono text-xs">
                    {activeModule.tagline}
                  </p>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 font-sans">
                    {activeModule.desc}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-xs font-semibold text-slate-950 transition-all hover:bg-emerald-400 shadow-sm"
                  >
                    Explore specs
                    <ArrowIcon className="w-3 h-3 flex-shrink-0" />
                  </Link>
                  <span className="font-mono text-[11px] text-slate-400 bg-slate-950 px-3.5 py-2 rounded-full border border-slate-800">
                    Status: <strong className="text-emerald-400">{activeModule.metric}</strong>
                  </span>
                </div>
              </div>

              {/* Right Column: Core Capabilities Matrix (Clean 2-Column Alignment) */}
              <div className="lg:col-span-6 bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 sm:p-6 space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-800/70 pb-3">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-widest">
                    System Capabilities
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Real-time
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {activeModule.features.map((feat, i) => (
                    <motion.div
                      key={feat}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.25 }}
                      className="flex items-center gap-2.5 bg-slate-900/90 px-3.5 py-3 rounded-xl border border-slate-800/80 shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                      <span className="text-[11px] sm:text-xs font-medium text-slate-200 leading-snug">{feat}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>Latency: &lt; 45ms</span>
                  <span className="text-emerald-400">● Live Stream Sync</span>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}