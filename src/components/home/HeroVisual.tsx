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
  <div className="relative w-full max-w-[540px] lg:ml-auto">
    <div className="relative aspect-[16/10] overflow-hidden border border-ink/10 bg-ink">
      <AnimatePresence initial={false}>
        <motion.div
          key={images[index]}
          initial={{
            opacity: 0,
            scale: 1.025,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="VIoT connected operations"
            fill
            priority={index === 0}
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 540px"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/10" />

      {/* baaki same code */}
    </div>

    {/* controls same */}
  </div>
);
}