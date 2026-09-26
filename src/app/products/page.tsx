"use client";

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon, LockIcon, PinIcon, PulseIcon, SignalIcon } from "@/components/icons";
import { orderedProducts, type ProductIcon } from "@/lib/products";

function ProductGlyph({ icon }: { icon: ProductIcon }) {
  if (icon === "lock") return <LockIcon />;
  if (icon === "pulse") return <PulseIcon />;
  if (icon === "video") return <PinIcon />;
  return <SignalIcon />;
}

// Mapping each product slug to your specific images in /public/image/
function getProductImage(slug: string): string {
  const imageMap: Record<string, string> = {
    "vehicle-telematics": "/image/truck.jpeg",
    "ev-telematics": "/image/ev.jpeg",
    "smart-lock": "/image/car.jpeg",
    "video-telematics": "/image/eng.jpeg",
    "fuel-sensor": "/image/const.jpeg",
    "cargo-tracker": "/image/coal.jpeg",
    // Fallbacks for any other product slugs using remaining images
    "sensors": "/image/farm.jpeg",
    "diagnostics": "/image/mechn.jpeg",
    "telemetry": "/image/lab.jpeg",
  };
  
  // If slug matches directly or fallback based on index/slug keywords
  if (imageMap[slug]) return imageMap[slug];
  if (slug.includes("ev")) return "/image/ev.jpeg";
  if (slug.includes("lock") || slug.includes("security")) return "/image/car.jpeg";
  if (slug.includes("video") || slug.includes("cam")) return "/image/eng.jpeg";
  if (slug.includes("fuel") || slug.includes("tank")) return "/image/const.jpeg";
  
  // Default cycling fallback across your available images
  return "/image/truck.jpeg";
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProductsPage() {
  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      
      {/* 1. Compact Page Hero */}
      <PageHero 
        breadcrumb="Products / Device Layer"
        title="Hardware that treats every packet as"
        titleHighlight="accountable."
        lede="Six device families organised around one idea: the relevant event has to survive the trip from the field to the platform."
      />

      {/* 2. Product Families with Unique Mapped Images */}
      {orderedProducts.map((product, idx) => {
        const isEven = idx % 2 === 0;
        const imagePath = getProductImage(product.slug);

        return (
          <motion.section 
            key={product.id} 
            id={product.id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className={`relative py-24 md:py-32 border-b border-line transition-colors ${
              isEven ? "bg-paper text-ink" : "bg-ink text-white"
            }`}
          >
            {/* Ambient background glow for dark sections */}
            {!isEven && (
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[250px] bg-signal/[0.04] rounded-full blur-[120px] pointer-events-none" />
            )}

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? "" : "lg:grid-flow-dense"}`}>
                
                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? "" : "lg:col-start-7"}`}>
                  <div className="flex items-center justify-between">
                    <span className={`p-3 rounded-2xl border ${isEven ? "border-line bg-white text-signal-dark shadow-2xs" : "border-white/10 bg-ink-2 text-signal shadow-inner"}`}>
                      <ProductGlyph icon={product.icon} />
                    </span>
                    <span className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full ${
                      product.inDevelopment 
                        ? "bg-amber/10 text-amber border border-amber/30 font-medium" 
                        : "bg-signal/10 text-signal-dark border border-signal/30 font-semibold"
                    }`}>
                      {product.status}
                    </span>
                  </div>

                  <div className="space-y-2.5 text-left">
                    <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                      {product.number} / Device Family
                    </span>
                    <h2 className={`font-heading text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.15] ${isEven ? "text-ink" : "text-white"}`}>
                      {product.name}
                    </h2>
                  </div>

                  <p className={`text-sm sm:text-base leading-relaxed font-sans ${isEven ? "text-muted" : "text-white/70"}`}>
                    {product.description}
                  </p>

                  <div className="pt-2">
                    <Link 
                      className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors whitespace-nowrap ${
                        isEven ? "text-signal-dark hover:text-ink" : "text-signal hover:text-white"
                      }`} 
                      href={`/products/${product.slug}`}
                    >
                      Open product detail 
                      <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </Link>
                  </div>
                </div>

                {/* Visual / Unique Product Image & Specs Column */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? "" : "lg:col-start-1"}`}>
                  
                  {/* Unique Image Container */}
                  <div className={`relative aspect-[16/10] w-full rounded-2xl border p-2 shadow-xs overflow-hidden group ${
                    isEven ? "border-line bg-white" : "border-white/10 bg-ink-2"
                  }`}>
                    <div className="relative w-full h-full rounded-xl overflow-hidden">
                      <Image 
                        src={imagePath} 
                        alt={`${product.name} deployment view`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 left-3 bg-ink/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-mono text-[10px] text-white uppercase tracking-wider">
                        VIoT / {product.shortName}
                      </div>
                    </div>
                  </div>

                  {/* Spec Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {product.specs.slice(0, 4).map(([name, value]) => (
                      <div 
                        key={name}
                        className={`p-4 rounded-xl border transition-all duration-300 ${
                          isEven 
                            ? "border-line bg-white/80 shadow-2xs hover:border-signal-dark hover:-translate-y-0.5" 
                            : "border-white/10 bg-ink-2/50 backdrop-blur-sm hover:border-signal/40 hover:-translate-y-0.5"
                        }`}
                      >
                        <strong className={`block font-mono text-[10px] uppercase tracking-wider ${isEven ? "text-muted" : "text-white/50"}`}>
                          {name}
                        </strong>
                        <span className={`block text-xs sm:text-sm font-semibold mt-1 tracking-tight ${isEven ? "text-ink" : "text-white"}`}>
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {product.note && (
                    <div className={`p-4 rounded-xl border font-sans text-xs sm:text-sm leading-relaxed ${
                      isEven ? "border-amber/40 bg-amber/5 text-ink" : "border-amber/40 bg-amber/10 text-white"
                    }`}>
                      <strong className="font-semibold text-amber">Clear status:</strong> {product.note}
                    </div>
                  )}

                </div>

              </div>
            </div>
          </motion.section>
        );
      })}

      {/* 3. Closing CTA Band */}
      <section className="relative py-28 md:py-36 bg-ink text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between rounded-3xl border border-white/10 bg-ink-2/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl"
          >
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Hardware + Platform
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Evaluate the whole data path.
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start lg:text-right">
              <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm leading-relaxed">
                Tell us what you run, where it operates and what is failing today. We will tell you where VIoT fits—and where it does not.
              </p>
              <div className="w-full sm:w-auto flex lg:justify-end">
                <Link 
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
                  href="/contact"
                >
                  Discuss your fleet 
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}