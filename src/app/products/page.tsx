"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { ProductsSection } from "@/components/home/ProductsSection";
import { CtaBand } from "@/components/home/CtaBand";
import { ArrowIcon } from "@/components/icons";

export default function ProductsPage() {
  return (
    <div className="bg-[#081b24] text-white selection:bg-[#24C491] selection:text-[#081b24] overflow-hidden">
      
      {/* 1. Page Hero with Signature Brand Background */}
      <section className="relative bg-gradient-to-b from-[#06141a] via-[#081b24] to-[#081b24]  overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#24C491]/10 rounded-full blur-[150px] pointer-events-none" />
        <PageHero 
          breadcrumb="Products / Device & Hardware Layer"
          title="Hardware that treats every packet as"
          titleHighlight="accountable."
          lede="Five hardware lines organised around one idea: the relevant event has to survive the trip from the field to the platform."
        />
      </section>

      {/* 2. Interactive Products Section */}
      <div className="bg-white">
        <ProductsSection />
      </div>

      {/* 3. Supplemental Enterprise Value Section */}
      <section className="py-24 md:py-32 bg-[#081b24] text-white relative overflow-hidden border-t border-b border-white/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#24C491]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
          >
            <div className="space-y-3 max-w-2xl text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#24C491] bg-[#24C491]/10 border border-[#24C491]/30 px-3.5 py-1.5 rounded-full inline-block">
                The Hardware Standard
              </span>
              <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-white">
                Engineered for extreme conditions.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-slate-300 max-w-md font-sans leading-relaxed text-left md:text-right">
              From commercial transport across rural highways to secure multi-container shipping, our devices are built to survive what cheaper hardware drops.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Zero-Drop Firmware",
                desc: "Refined over years of field deployments on Indian networks to ensure uninterrupted data packets during signal blind spots."
              },
              {
                num: "02",
                title: "Wide Input Voltage",
                desc: "9–36V wide input range support designed specifically to protect commercial vehicle electronics against power surges."
              },
              {
                num: "03",
                title: "Unified Platform Sync",
                desc: "Every sensor, dashcam, and e-lock feeds instantly into the same central master console with zero vendor hand-off."
              }
            ].map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="group p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl space-y-4 transition-all duration-300 hover:border-[#24C491] hover:bg-white/[0.08] hover:shadow-[0_15px_35px_rgba(36,196,145,0.12)] text-left"
              >
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#24C491]/15 text-[#24C491] border border-[#24C491]/30">
                  {item.num}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Band Component with 3D Truck */}
      <CtaBand />

    </div>
  );
}