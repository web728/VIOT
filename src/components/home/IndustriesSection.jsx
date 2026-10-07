"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/icons";

const sectors = [
  { num: "01", title: "Logistics & Supply Chain", desc: "End-to-end shipment and fleet visibility across routes." },
  { num: "02", title: "Pharma & Chemicals", desc: "Cold-chain compliance with real-time temperature breach alerts." },
  { num: "03", title: "Data Centres", desc: "Auditable access control, facility security & equipment tracking." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function IndustriesSection() {
  return (
    <section className="relative bg-ink py-20 md:py-28 text-white overflow-hidden" id="solutions">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-amber/[0.03] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10 space-y-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
          02 - Who We Serve
        </motion.div>

        {/* Featured Banner / Hero Grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/10 bg-ink-2/40 backdrop-blur-md p-6 sm:p-8 shadow-xl"
        >
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-white/10 group aspect-[16/10]">
            <Image
              src="/image/car.jpeg" 
              alt="Smart Container Lock and Tracking" 
              width={500} 
              height={350} 
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 text-[10px] font-mono text-signal uppercase tracking-wider bg-ink/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
              Live Field Deployment
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-mono font-semibold text-signal uppercase tracking-wider">
              For organisations that can&apos;t afford to guess
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
              Built for critical sectors across India.
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans max-w-xl">
              From Logistics and Supply Chain to Pharma, Mining, and Data Centres, VIoT delivers hardware and software engineered for tough conditions and strict compliance.
            </p>
            <div className="pt-2">
              <Link 
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink-2/60 px-6 py-2.5 text-xs font-semibold text-white transition-all hover:border-signal hover:bg-ink-2" 
                href="/solutions"
              >
                See all solutions 
                <ArrowIcon className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 3 Sector Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2"
        >
          {sectors.map((sector) => (
            <motion.div
              key={sector.num}
              variants={itemVariants}
              className="group p-5 rounded-xl border border-white/10 bg-ink-2/30 backdrop-blur-sm space-y-2 transition-all duration-300 hover:border-signal/40 hover:bg-ink-2 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-signal">{sector.num}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-signal transition-colors" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-signal transition-colors">
                {sector.title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}