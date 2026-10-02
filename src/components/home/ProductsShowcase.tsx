"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

/* Put the 6 images in: /public/image/products/<id>.jpg */

const products = [
  {
    id: "vehicle-telematics",
    meta: "Fleet Intelligence",
    title: "Vehicle Telematics",
    spec: "9–90V wide voltage input range",
    href: "/products/vehicle-telematics",
  },
  {
    id: "video-telematics",
    meta: "Fleet Intelligence",
    title: "Video Telematics",
    spec: "Front + cabin dual-view recording",
    href: "/products/video-telematics",
  },
  {
    id: "smart-locks",
    meta: "Asset Intelligence",
    title: "Smart Locks (E-Lock)",
    spec: "10,000 / 12,000 mAh long-life battery",
    href: "/products/smart-logistics-locks",
  },
  {
    id: "asset-tracking",
    meta: "Asset Intelligence",
    title: "Asset Tracking",
    spec: "Extended standby battery life",
    href: "/products/asset-trackers",
  },
  {
    id: "iot-sensors",
    meta: "Asset Intelligence",
    title: "IoT Sensors",
    spec: "Temperature, fuel and load sensing",
    href: "/products/iot-sensors",
  },
  {
    id: "access-management",
    meta: "Access Intelligence",
    title: "Access Management",
    spec: "Door status and access logs",
    href: "/products/access-control",
  },
];

export function ProductsShowcase() {
  return (
    <section className="border-t border-line bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* Header */}
        <div className="mb-10 border-b border-line pb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-signal-dark" />

            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal-dark">
              Products
            </span>
          </div>

          <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.03em] text-ink sm:text-4xl lg:text-[44px]">
            Our products
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={product.href}
                className="group block rounded-2xl border border-line bg-white p-3 transition-colors duration-300 hover:border-signal-dark"
              >
                {/* Image — no text on top of it */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink">
                  <Image
                    src={`/image/products/${product.id}.jpg`}
                    alt={product.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content below image */}
                <div className="px-2 pb-2 pt-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-signal-dark">
                    {product.meta}
                  </span>

                  <div className="mt-2 flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-semibold tracking-[-0.02em] text-ink">
                      {product.title}
                    </h3>

                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-colors group-hover:border-signal-dark group-hover:bg-signal-dark group-hover:text-white">
                      <ArrowIcon className="h-2.5 w-2.5" />
                    </span>
                  </div>

                  <div className="mt-4 border-t border-line pt-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                      Key specification
                    </p>

                    <p className="mt-1.5 text-sm font-medium text-ink">
                      {product.spec}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}