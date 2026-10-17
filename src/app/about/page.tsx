"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CtaBand } from "@/components/home/CtaBand";
import { PlatformFlywheel } from "@/components/home/PlatformFlywheel";
const values = [
  {
    num: "01",
    title: "Integrity & transparency",
    copy: "Be clear about what is ready, what depends on configuration, and where a solution is not the right fit.",
  },
  {
    num: "02",
    title: "Accountability & responsibility",
    copy: "Own the connected path from hardware and deployment through platform visibility and support.",
  },
  {
    num: "03",
    title: "Execution & Follow-through",
    copy: "Stay accountable through deployment, operation and ongoing support-not only before implementation.",
  },
];
function ApprovedVIoTBackground({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${
        dark ? "opacity-100" : "opacity-80"
      }`}
      aria-hidden="true"
    >
      <div
        className={`absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full blur-3xl ${
          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.035]"
        }`}
      />
      <div
        className={`absolute -right-56 bottom-[5%] h-[620px] w-[620px] rounded-full blur-3xl ${
          dark ? "bg-white/[0.015]" : "bg-[#007c67]/[0.025]"
        }`}
      />
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke={
            dark
              ? "rgba(255,255,255,0.055)"
              : "rgba(8,27,36,0.075)"
          }
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 2.4,
            ease: "easeOut",
          }}
        />
        <motion.path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke={
            dark
              ? "rgba(39,213,155,0.14)"
              : "rgba(0,124,103,0.13)"
          }
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{
            strokeDashoffset: [0, -180],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={
            dark
              ? "rgba(255,255,255,0.035)"
              : "rgba(8,27,36,0.05)"
          }
          strokeWidth="1"
        />
        <motion.path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke={
            dark
              ? "rgba(39,213,155,0.075)"
              : "rgba(0,124,103,0.065)"
          }
          strokeWidth="1"
          strokeDasharray="2 20"
          animate={{
            strokeDashoffset: [0, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>
      <motion.div
        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${
          dark
            ? "border-white/[0.035]"
            : "border-[#081b24]/[0.045]"
        }`}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border ${
          dark
            ? "border-[#27d59b]/[0.055]"
            : "border-[#007c67]/[0.06]"
        }`}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div
        className={`absolute right-[17%] top-[27%] h-[150px] w-[150px] rounded-full border ${
          dark
            ? "border-white/[0.025]"
            : "border-[#081b24]/[0.035]"
        }`}
      />
      <div
        className={`absolute -left-[180px] bottom-[18%] h-[460px] w-[460px] rounded-full border ${
          dark
            ? "border-white/[0.025]"
            : "border-[#081b24]/[0.035]"
        }`}
      />
      <motion.span
        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, 90, 180],
          y: [0, 20, 0],
          opacity: [0.1, 0.65, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, -70, -150],
          y: [0, -25, 0],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 6,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.span
        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, -55, -120],
          opacity: [0.1, 0.65, 0],
        }}
        transition={{
          duration: 5,
          delay: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {[
        ["12%", "20%"],
        ["25%", "78%"],
        ["39%", "16%"],
        ["58%", "84%"],
        ["68%", "22%"],
        ["79%", "72%"],
        ["91%", "52%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className={`absolute h-1 w-1 rounded-full ${
            dark ? "bg-white/20" : "bg-[#081b24]/20"
          }`}
          style={{ left, top }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + index * 0.25,
            delay: index * 0.3,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}


function WhyVIoTBackgroundImage() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <Image
        src="/image/about-sec.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[55%_center]"
      />
      {/* Slightly muted image for legible, premium text contrast. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,22,30,0.92)_0%,rgba(8,27,36,0.84)_48%,rgba(6,22,30,0.89)_100%)]" />
      {/* Retain the existing image scan/pulse motion, now behind the content. */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute inset-x-5 h-px bg-gradient-to-r from-transparent via-[#27d59b]/70 to-transparent"
          animate={{
            top: ["8%", "88%", "8%"],
            opacity: [0, 0.75, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.span
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27d59b]"
          animate={{
            scale: [0.8, 1.15, 0.8],
            opacity: [0.45, 1, 0.45],
            boxShadow: [
              "0 0 0 3px rgba(39,213,155,0.08)",
              "0 0 0 8px rgba(39,213,155,0.12)",
              "0 0 0 3px rgba(39,213,155,0.08)",
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}


export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] antialiased selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* Values hero: balanced navbar clearance, muted image, and minimalist underlined rows. */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#081b24] text-white lg:min-h-[680px] xl:min-h-[680px]">
        <WhyVIoTBackgroundImage />
        <ApprovedVIoTBackground dark />
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-6 pb-16 pt-[132px] sm:px-8 sm:pb-[72px] sm:pt-[144px] lg:min-h-[640px] lg:px-12 lg:pb-[64px] lg:pt-[140px] xl:min-h-[660px] xl:pb-[72px] xl:pt-[148px]">
          <div className="grid w-full grid-cols-1 items-center gap-11 sm:gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              className="min-w-0 lg:col-span-5 lg:pr-2 xl:pr-5"
            >
              <div className="mb-4 sm:mb-5">
                <span className="font-mono text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#27d59b]">
                  What we value
                </span>
              </div>
              <h2 className="max-w-[600px] font-heading text-[clamp(1.875rem,3.05vw,2.65rem)] font-semibold leading-[1.16] tracking-[-0.038em] text-[#F5F9F7] sm:text-[clamp(2.1rem,3.1vw,2.75rem)]">
                Technology is only part of the relationship. We care about what happens before deployment, during implementation and long
                <span className="text-[#27d59b]"> after the system goes live.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="min-w-0 w-full lg:col-span-7"
            >
              <h3 className="mb-5 font-heading text-[26px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#F5F9F7] sm:mb-6 sm:text-[30px]">
                Our values
              </h3>
              <div className="divide-y divide-white/20 border-y border-white/25">
                {values.map((value, index) => (
                  <motion.div
                    key={value.num}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                    }}
                    className="group grid min-w-0 grid-cols-[28px_minmax(0,1fr)] gap-x-4 gap-y-1.5 py-[18px] sm:gap-x-5 sm:py-5 lg:py-[18px] xl:grid-cols-[28px_minmax(0,180px)_minmax(0,1fr)] xl:gap-x-4 xl:py-[19px]"
                  >
                    <span className="font-mono text-[10px] font-semibold leading-6 tracking-[0.16em] text-[#27d59b]">
                      {value.num}
                    </span>
                    <h4 className="min-w-0 font-heading text-[16px] font-semibold leading-[1.4] tracking-[-0.015em] text-[#F1F7F5]">
                      {value.title}
                    </h4>
                    <p className="col-start-2 min-w-0 text-[13px] leading-[1.65] tracking-[0.005em] text-[#CAD9D5] transition-colors duration-300 group-hover:text-[#F3FAF7] sm:text-sm xl:col-start-3">
                      {value.copy}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PlatformFlywheel />

      <section className="relative min-h-[600px] overflow-hidden bg-[#081b24] text-white sm:min-h-[650px]">
        <ApprovedVIoTBackground dark />
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] items-center px-6 py-20 sm:min-h-[650px] sm:px-8 sm:py-24 lg:px-12">
          <div className="w-full max-w-[920px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 shrink-0 bg-[#27d59b]" />
              <span className="font-mono text-[10px] font-semibold uppercase leading-5 tracking-[0.18em] text-[#27d59b] sm:tracking-[0.2em]">
                Company / About VIoT
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 max-w-[900px] font-heading text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-[40px] sm:leading-[1.09] lg:text-[50px]"
            >
              VIoT brings dependable hardware, connected intelligence and operational technology together
              <br />
              <span className="text-[#27d59b]"> across vehicles, assets and physical spaces</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
