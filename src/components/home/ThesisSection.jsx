"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@/components/icons";

const points = [
  "Fleet Intelligence & Asset Intelligence — ours, end-to-end",
  "Access Control — internationally curated and localised",
  "India-first support, global standard",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function ThesisSection() {
  return (
    <section className="relative bg-white py-28 md:py-36 text-ink overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start"
        >
          {/* Eyebrow / Section Index Column */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#cdd5d2] bg-[#f4f6f2] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-[#007c67]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
              01 — Core Thesis
            </div>
          </motion.div>

          {/* Main Content Column */}
          <motion.div variants={itemVariants} className="lg:col-span-9">
            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-[#081b24] md:text-5xl">
              Everything you need to know where your fleet, your assets and your buildings stand.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#607078] md:text-lg font-sans">
              We own what we can — and curate, with the same accountability, what we should. No vendor hand-offs, no reconciling data across separate apps.
            </p>

            {/* Feature Points Grid */}
            <motion.ul 
              variants={containerVariants}
              className="mt-12 grid grid-cols-1 gap-4 border-t border-[#cdd5d2] pt-10 sm:grid-cols-3 sm:gap-6"
            >
              {points.map((point) => (
                <motion.li
                  key={point}
                  variants={itemVariants}
                  className="group flex flex-col justify-between rounded-2xl border border-[#cdd5d2]/60 bg-[#f4f6f2]/50 p-5 transition-all duration-300 hover:border-[#27d59b] hover:bg-white hover:shadow-[0_10px_30px_rgba(8,27,36,0.06)]"
                >
                  <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#007c67]/10 text-[#007c67] group-hover:bg-[#27d59b] group-hover:text-[#081b24] transition-colors">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold leading-snug text-[#081b24]">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}