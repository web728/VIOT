"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/icons";

const modules = [
  { num: "01", title: "Fleet Management", desc: "Live location, route history & geofencing" },
  { num: "02", title: "EV Management", desc: "Battery health, charging status & range telemetry" },
  { num: "03", title: "E-Lock", desc: "Remote lock/unlock & tamper alerts" },
  { num: "04", title: "Video", desc: "Live streaming & event-triggered clip retrieval" },
  { num: "05", title: "Fuel Monitoring", desc: "Fuel tracking & automatic drain/refuel logs" },
  { num: "06", title: "Access Control", desc: "Door status, logs & credential management" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export function PlatformSection() {
  return (
    <section className="relative bg-ink py-20 md:py-28 border-t border-b border-white/10 overflow-hidden" id="platform">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              Unified Platform
            </div>

            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl text-white leading-tight">
              Every device, every division, <br />
              <span className="text-white/40">one place to look.</span>
            </h2>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans max-w-md">
              Live location, ignition alerts, e-lock status, EV battery health, fuel readings, and access control door status — six modules across all three divisions.
            </p>

            <div className="pt-1">
              <Link 
                className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-xs font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(39,213,155,0.3)]"
                href="/platform"
              >
                Explore the platform 
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 6 Modules Compact Stack */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="lg:col-span-7 space-y-2.5"
          >
            {modules.map((mod, i) => (
              <motion.div 
                key={mod.num}
                variants={itemVariants}
                className={`group px-4 py-3 rounded-xl border transition-all flex items-center justify-between backdrop-blur-sm ${
                  i === 0 
                    ? 'bg-ink-2 border-signal/40 shadow-md' 
                    : 'bg-ink-2/30 border-white/10 hover:border-signal/40 hover:bg-ink-2/60'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className="font-mono text-[11px] font-semibold text-white/40">{mod.num}</span>
                  <strong className="text-xs sm:text-sm font-semibold text-white group-hover:text-signal transition-colors">
                    {mod.title}
                  </strong>
                </div>
                <span className="text-[11px] text-white/50 font-sans text-right max-w-[200px] sm:max-w-none truncate sm:overflow-visible">
                  {mod.desc}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}