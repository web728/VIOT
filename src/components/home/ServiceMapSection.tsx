"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "GPS Tracking", desc: "Real-time location and movement monitoring.", x: 400, y: 45 },
  { title: "Vehicle Telematics", desc: "Monitor driver behavior, speed, and health.", x: 640, y: 165 },
  { title: "Video Telematics", desc: "AI-powered dashcams for cabin safety.", x: 640, y: 435 },
  { title: "Fuel Sensor", desc: "Detect fuel theft and consumption patterns.", x: 400, y: 555 },
  { title: "E-Lock", desc: "Smart electronic locks for container doors.", x: 160, y: 435 },
  { title: "IoT Sensor", desc: "Cargo temperature and humidity tracking.", x: 160, y: 165 },
];

export function ServiceMapSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 sm:py-32 px-6 lg:px-12 overflow-hidden rounded-t-[48px] mt-[-60px] z-30 shadow-[0_-25px_50px_rgba(0,0,0,0.08)] border-t border-slate-200/80">
      
      {/* Clean Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl text-center relative z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 bg-emerald-100/80 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block">
          Ecosystem Hub
        </span>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-5xl text-slate-900">
          One Platform. Total Command.
        </h2>
        <p className="mt-3 text-slate-600 max-w-xl mx-auto text-sm sm:text-base font-sans">
          Explore our core intelligence modules radiating from the centralized command nexus. Hover or tap any node to inspect telemetry details.
        </p>

        {/* Desktop Radial Command Hub Container */}
        <div className="relative mt-12 hidden lg:flex items-center justify-center h-[640px] w-full max-w-[840px] mx-auto">
          
          {/* Optimized SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
            {services.map((service, idx) => (
              <motion.line
                key={service.title}
                x1="400"
                y1="300"
                x2={service.x}
                y2={service.y}
                stroke={hoveredIdx === idx ? "#059669" : "#cbd5e1"}
                strokeWidth={hoveredIdx === idx ? "3" : "1.5"}
                strokeDasharray="6 6"
                animate={{ strokeDashoffset: [0, -24] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            ))}
          </svg>

          {/* Premium Center Hub Badge (VIoT) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 rounded-full bg-[#081b24] text-white flex flex-col items-center justify-center shadow-[0_10px_30px_rgba(8,27,36,0.25)] border-4 border-emerald-500/40">
            <span className="font-heading font-extrabold text-xl tracking-wider text-emerald-400">VIoT</span>
            <span className="text-[9px] font-mono text-slate-300 mt-0.5 uppercase tracking-widest">Command</span>
            <div className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping opacity-20 pointer-events-none" />
          </div>

          {/* Spread-out Radial Service Nodes */}
          {services.map((service, idx) => {
            const leftPercent = (service.x / 800) * 100;
            const topPercent = (service.y / 600) * 100;

            return (
              <div
                key={service.title}
                className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${leftPercent}%`, top: `${topPercent}%` }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div className="relative group cursor-pointer flex flex-col items-center">
                  {/* Premium Service Badge */}
                  <div className={`px-5 py-3 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300 flex items-center gap-3 border ${
                    hoveredIdx === idx 
                      ? "bg-emerald-600 text-white border-emerald-500 scale-105 shadow-[0_10px_25px_rgba(16,185,129,0.3)]" 
                      : "bg-white text-slate-800 border-slate-200/90 hover:border-emerald-400"
                  }`}>
                    <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-lg ${
                      hoveredIdx === idx ? "bg-emerald-700 text-white" : "bg-emerald-50 text-emerald-600 border border-emerald-200/60"
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold tracking-wide whitespace-nowrap">{service.title}</span>
                  </div>

                  {/* Dark Contrast Hover Description Tooltip */}
                  <motion.div 
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ 
                      opacity: hoveredIdx === idx ? 1 : 0, 
                      y: hoveredIdx === idx ? 0 : 8,
                      scale: hoveredIdx === idx ? 1 : 0.95
                    }}
                    className={`absolute top-full mt-3 w-60 p-3.5 bg-slate-900 text-white text-xs rounded-xl shadow-2xl border border-slate-800 text-center z-40 transition-opacity ${
                      hoveredIdx === idx ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                  >
                    <p className="leading-relaxed text-slate-300 font-sans">{service.desc}</p>
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rotate-45 border-t border-l border-slate-800" />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Optimized Responsive View (Maintains exact cards & premium feel) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 lg:hidden">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 flex flex-col items-center text-center transition-all active:scale-[0.98]"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold text-xs mb-2.5 font-mono">
                0{idx + 1}
              </div>
              <h3 className="font-semibold text-slate-900 text-sm tracking-tight">{service.title}</h3>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed font-sans">{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}