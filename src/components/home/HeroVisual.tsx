"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/image/hero-1.jpg",
  "/image/hero-2.jpg",
  "/image/hero-3.jpg",
  "/image/hero-4.jpg",
];

const labels = [
  "Fleet intelligence",
  "Asset intelligence",
  "Connected operations",
  "Access intelligence",
];

export function HeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[620px] lg:ml-auto">
      <div className="relative aspect-[4/3] overflow-hidden bg-ink-2">
        <AnimatePresence initial={false}>
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={images[index]}
              alt="VIoT connected operations"
              fill
              priority={index === 0}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 620px"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/10" />

        {/* Small image label */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-ink/90 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.16em] text-white">
          <span className="h-1.5 w-1.5 bg-signal" />
          {labels[index]}
        </div>

        {/* Image count */}
        <div className="absolute right-4 top-4 font-mono text-[9px] tracking-[0.15em] text-white/75">
          0{index + 1} / 04
        </div>
      </div>

      <div className="mt-3 flex gap-1.5">
        {images.map((image, i) => (
          <button
            key={image}
            type="button"
            aria-label={`Show image ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-300 ${
              i === index
                ? "w-10 bg-signal"
                : "w-5 bg-ink/20 hover:bg-ink/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}