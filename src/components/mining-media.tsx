"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function MiningMedia() {
  return (
    <figure className="relative isolate aspect-video overflow-hidden rounded-2xl border border-ink/10 bg-[#102a34] shadow-[0_26px_70px_rgba(8,27,36,0.16)]">
      <Image
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/media/viot-mining-operations.webp"
        alt="Connected haul trucks operating across an open-pit mine at blue hour"
        fill
        sizes="(max-width: 980px) calc(100vw - 48px), 56vw"
      />
      <video
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/viot-mining-operations.webp"
        aria-hidden="true"
      >
        <source src="/media/viot-mining-operations.mp4" type="video/mp4" />
      </video>

      {/* Shade overlay for label legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2] bg-gradient-to-b from-ink/25 via-transparent to-ink/50 bg-gradient-to-r"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(8,27,36,.24) 0%, transparent 35%, rgba(8,27,36,.5) 100%), linear-gradient(90deg, rgba(8,27,36,.17), transparent 48%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 z-[3] rounded-2xl border border-white/10" />

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        aria-hidden="true"
        className="absolute left-5 top-5 z-[4] flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.11em] text-white/90"
      >
        <motion.span
          animate={{ boxShadow: ["0 0 0 0 rgba(39,213,155,0.42)", "0 0 0 9px rgba(39,213,155,0)"] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          className="h-[7px] w-[7px] rounded-full bg-signal"
        />
        Field conditions / connected fleet
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute bottom-[19px] right-[22px] z-[4] text-right font-mono text-[9px] uppercase tracking-[0.11em] text-white/90"
      >
        Live data path · multi-vehicle visibility
      </div>

      <figcaption className="sr-only">
        VIoT connects field vehicles to a shared operational view across demanding mining conditions.
      </figcaption>
    </figure>
  );
}