"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowIcon, LockIcon, PinIcon, PulseIcon, SignalIcon } from "@/components/icons";
import type { ProductIcon } from "@/lib/products";

type Product = {
  id: string;
  slug: string;
  number: string;
  name: string;
  description: string;
  status: string;
  inDevelopment?: boolean;
  icon: ProductIcon;
  note?: string;
  specs: Array<[string, string]>;
};

function ProductGlyph({ icon }: { icon: ProductIcon }) {
  if (icon === "lock") return <LockIcon className="h-4 w-4" />;
  if (icon === "pulse") return <PulseIcon className="h-4 w-4" />;
  if (icon === "video") return <PinIcon className="h-4 w-4" />;
  return <SignalIcon className="h-4 w-4" />;
}

export function ProductSection({ product, index }: { product: Product; index: number }) {
  const isEven = index % 2 === 0;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={sectionRef}
      id={product.id}
      className={`relative border-b border-line/80 py-20 md:py-28 ${
        isEven ? "bg-paper text-ink" : "bg-ink text-white"
      }`}
    >
      {/* Ambient glow — overflow-hidden lives HERE, not on the section itself,
          so the sticky column below isn't blocked by a clipping ancestor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full blur-[130px] ${
            isEven ? "right-[-8%] bg-signal/20" : "left-[-8%] bg-signal/10"
          }`}
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left — pinned column with scroll-progress rail */}
          <div className="lg:col-span-5">
            <div className="flex gap-5 lg:sticky lg:top-28">
              <motion.div
                style={{ opacity: lineOpacity }}
                className="relative hidden w-px shrink-0 self-stretch lg:block"
              >
                <div className={`absolute inset-0 ${isEven ? "bg-line" : "bg-white/10"}`} />
                <motion.div
                  style={{ top: dotY }}
                  className="absolute -left-[3px] h-[7px] w-[7px] rounded-full bg-signal shadow-[0_0_8px_rgba(39,213,155,0.6)]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-1.5 font-mono text-xs ${
                      isEven ? "border-line bg-white/80 text-ink" : "border-white/10 bg-ink-2 text-signal"
                    }`}
                  >
                    <ProductGlyph icon={product.icon} />
                    <span className="font-semibold uppercase tracking-wider">{product.number}</span>
                  </div>

                  <span
                    className={`rounded-full border px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wider ${
                      product.inDevelopment
                        ? "border-amber/30 bg-amber/10 text-amber"
                        : isEven
                        ? "border-signal/30 bg-signal/15 text-signal-dark"
                        : "border-signal/40 bg-signal/20 text-signal"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>

                <h2
                  className={`font-heading text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl ${
                    isEven ? "text-ink" : "text-white"
                  }`}
                >
                  {product.name}
                </h2>

                <p className={`text-base leading-relaxed sm:text-lg ${isEven ? "text-muted" : "text-white/70"}`}>
                  {product.description}
                </p>

                <Link
                  href={`/products/${product.slug}`}
                  className={`group inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    isEven ? "text-signal-dark hover:text-ink" : "text-signal hover:text-white"
                  }`}
                >
                  <span className="border-b border-current pb-0.5">Explore product specifications</span>
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right — scrolling content with reveal animations */}
          <div className="space-y-5 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative aspect-[16/10] w-full overflow-hidden rounded-2xl border p-2.5 shadow-xl ${
                isEven ? "border-line bg-white" : "border-white/10 bg-ink-2"
              }`}
            >
              <div
                className={`absolute inset-2.5 flex flex-col items-center justify-center rounded-xl border border-dashed p-6 text-center transition-colors duration-300 ${
                  isEven
                    ? "border-line bg-paper/50 group-hover:border-signal-dark/60"
                    : "border-white/15 bg-ink/50 group-hover:border-signal/60"
                }`}
              >
                <svg className="pointer-events-none absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" aria-hidden="true">
                  {[
                    "M0,16 L0,0 L16,0",
                    "M calc(100% - 16px),0 L 100%,0 L 100%,16",
                    "M0,calc(100% - 16px) L0,100% L16,100%",
                    "M calc(100% - 16px),100% L 100%,100% L 100%,calc(100% - 16px)",
                  ].map((d, i) => (
                    <path
                      key={i}
                      d={d}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className={isEven ? "text-signal-dark/30" : "text-signal/30"}
                    />
                  ))}
                </svg>

                <div className="z-10 space-y-1.5">
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
                    Device Asset Slot
                  </span>
                  <p className="mx-auto max-w-xs text-xs text-muted/70">
                    Product render or photography for <span className="font-medium">{product.name}</span>
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {product.specs.slice(0, 6).map(([name, value], specIdx) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4, delay: specIdx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-xl border p-4 transition-colors ${
                    isEven
                      ? "border-line/80 bg-white/80 hover:border-signal-dark/40"
                      : "border-white/10 bg-ink-2/50 hover:border-white/20"
                  }`}
                >
                  <strong
                    className={`block font-mono text-[11px] uppercase tracking-wider ${
                      isEven ? "text-muted" : "text-white/50"
                    }`}
                  >
                    {name}
                  </strong>
                  <span className={`mt-1 block text-sm font-semibold ${isEven ? "text-ink" : "text-white"}`}>
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>

            {product.note && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl border border-amber/40 p-4 text-sm ${
                  isEven ? "bg-amber/[0.04] text-ink" : "bg-amber/[0.1] text-white"
                }`}
              >
                <strong className="mr-1.5 font-semibold text-amber">Compliance note:</strong>
                {product.note}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}