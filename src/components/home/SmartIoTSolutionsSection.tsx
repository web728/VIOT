"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

function VIoTSVGBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-44 top-[8%] h-[460px] w-[460px] rounded-full bg-[#27d59b]/[0.035] blur-3xl" />
      <div className="absolute -right-52 bottom-[4%] h-[560px] w-[560px] rounded-full bg-[#007c67]/[0.03] blur-3xl" />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke="rgba(8,27,36,0.08)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        />

        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke="rgba(0,124,103,0.16)"
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke="rgba(0,124,103,0.08)"
          strokeWidth="1"
          strokeDasharray="2 20"
          animate={{ strokeDashoffset: [0, 180] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <motion.div
        className="absolute right-[7%] top-[12%] h-[320px] w-[320px] rounded-full border border-[#081b24]/[0.045]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute right-[12%] top-[22%] h-[210px] w-[210px] rounded-full border border-[#007c67]/[0.06]"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="absolute left-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{ x: [0, 80, 160], y: [0, 18, 0], opacity: [0.15, 0.8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function SmartIoTSolutionsSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
      <VIoTSVGBackground />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.72, ease }}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#27d59b]" />
              <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.16em] text-[#007c67]">
                Smart IoT Solutions
              </span>
            </div>

            <h2 className="mt-5 max-w-[920px] font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] text-[#081b24] lg:text-[46px]">
              Smart IoT Solutions for Connected Mobility
            </h2>

            <p className="mt-5 max-w-[700px] font-heading text-[22px] font-semibold leading-[1.3] text-[#007c67] lg:text-[26px]">
              Intelligent Hardware. Powerful Platform. Smarter Operations.
            </p>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <div className="border-l border-[#c8d5d0] pl-5 sm:pl-6">
              <p className="max-w-[700px] font-sans text-[16px] font-normal leading-[26px] text-[#607078]">
                An integrated portfolio of IoT devices and technology platforms built to
                enhance vehicle intelligence, asset visibility, operational safety,
                and efficiency across industries.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.92 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mt-10 h-px origin-left bg-gradient-to-r from-[#007c67]/30 via-[#c8d5d0] to-transparent lg:mt-12"
        />
      </div>
    </section>
  );
}
