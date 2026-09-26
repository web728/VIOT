"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  titleHighlight?: string;
  lede: string;
}

export function PageHero({ breadcrumb, title, titleHighlight, lede }: PageHeroProps) {
  return (
    <section className="relative flex items-center overflow-hidden bg-ink text-white pt-20 pb-14 md:pt-24 md:pb-16 px-6 border-b border-white/10">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#27d59b_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[250px] bg-signal/[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Breadcrumb, Title & Lede */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 space-y-3 text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3 py-0.5 font-mono text-[10px] uppercase tracking-widest text-signal shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
            {breadcrumb}
          </div>

          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-[1.12]">
            {title} {titleHighlight && <span className="font-normal text-white/50">{titleHighlight}</span>}
          </h1>

          <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-white/70 font-sans">
            {lede}
          </p>
        </motion.div>

        {/* Right Column: Clean Floating IoT Signal Wave SVG (No Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 hidden lg:flex items-center justify-end"
        >
          <div className="relative w-full max-w-[280px] h-[100px] flex items-center justify-end">
            <svg className="w-full h-full text-signal" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pulsing Signal Waves */}
              <path d="M10 50C40 20 70 80 100 50C130 20 160 80 190 50C220 20 250 80 270 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-40" />
              <path d="M30 70C60 45 90 95 120 70C150 45 180 95 210 70C235 50 255 70 270 60" stroke="#ffb321" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" className="opacity-60" />
              <path d="M10 30C50 10 90 70 130 30C170 -10 210 70 270 30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="opacity-90" />
              
              {/* Active Nodes */}
              <circle cx="100" cy="50" r="4" fill="#27d59b" className="animate-ping" />
              <circle cx="100" cy="50" r="3" fill="#27d59b" />
              <circle cx="190" cy="50" r="4" fill="#ffb321" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}