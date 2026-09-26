"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon, SignalIcon, PinIcon, LockIcon, PulseIcon } from "@/components/icons";

const products = [
  { number: "01", title: "Vehicle Telematics", copy: "Real-time location, ignition and diagnostic data for commercial fleets.", meta: "Fleet Intelligence", href: "/products/vehicle-telematics", icon: <SignalIcon /> },
  { number: "02", title: "Video Telematics", copy: "Dashcams that turn footage into evidence and coaching data.", meta: "Fleet Intelligence", href: "/products/video-telematics", icon: <PinIcon /> },
  { number: "03", title: "Smart Locks (E-Lock)", copy: "Tamper-evident electronic locking for containers and trailers.", meta: "Asset Intelligence", href: "/products/smart-locks", icon: <LockIcon /> },
  { number: "04", title: "Asset Tracking", copy: "Long-standby trackers for non-motorised equipment and cargo.", meta: "Asset Intelligence", href: "/products/asset-tracking", icon: <SignalIcon /> },
  { number: "05", title: "IoT Sensors", copy: "Temperature, fuel, axle load and Bluetooth sensors on one platform.", meta: "Asset Intelligence", href: "/products/iot-sensors", icon: <PulseIcon /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function ProductsSection() {
  return (
    <section className="relative bg-ink py-20 md:py-28 text-white overflow-hidden" id="products">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2 max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
              <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
              Products Ecosystem
            </div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Five hardware lines. <span className="text-white/40">Two divisions.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed font-sans"
          >
            Different applications, one connected ecosystem reporting into a unified platform.
          </motion.p>
        </div>

        {/* Products Compact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {products.map((product) => (
            <motion.div key={product.number} variants={itemVariants} className="h-full">
              <Link
                href={product.href}
                className="group flex flex-col justify-between p-5 rounded-xl border border-white/10 bg-ink-2/30 backdrop-blur-sm transition-all duration-300 h-full hover:border-signal/40 hover:bg-ink-2 hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-semibold text-white/40 tracking-wider">
                      {product.number}
                    </span>
                    <span className="p-2 rounded-lg border border-white/10 bg-white/5 text-signal group-hover:bg-signal group-hover:text-ink transition-colors">
                      {product.icon}
                    </span>
                  </div>

                  {/* Title & Copy */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-medium tracking-wider uppercase text-signal">
                      {product.meta}
                    </span>
                    <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-signal transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed font-sans line-clamp-2">
                      {product.copy}
                    </p>
                  </div>
                </div>

                {/* Bottom link */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-white/70 group-hover:text-white">
                  <span>Explore range</span>
                  <ArrowIcon className="w-3 h-3 transition-transform group-hover:translate-x-1 text-signal" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}