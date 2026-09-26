"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: string;
}

function AnimatedCounter({ value }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numericPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9,]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 1800;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(easeProgress * numericPart));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, numericPart]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
      {numericPart > 0 ? formattedCount : value}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Divisions, one team", value: "3" },
    { label: "Hardware & sensor product lines", value: "5" },
    { label: "Devices deployed in India", value: "5,000+" },
    { label: "Devices deployed internationally", value: "500+" },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] opacity-[0.03] [background-size:16px_16px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x divide-slate-100">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start text-left p-4 sm:p-6 rounded-2xl bg-slate-50/50 sm:bg-transparent border border-slate-100 sm:border-0"
            >
              <div className="flex items-baseline gap-1.5">
                <AnimatedCounter value={stat.value} />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mb-1 flex-shrink-0" />
              </div>
              <span className="mt-2.5 text-[11px] sm:text-xs lg:text-sm font-medium text-slate-500 uppercase tracking-widest font-mono leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}