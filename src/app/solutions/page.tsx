"use client";

import Image from "next/image";

import { ArrowDownRight } from "lucide-react";

import { motion } from "framer-motion";

import { CtaBand } from "@/components/home/CtaBand";

import { solutions } from "@/lib/solutions";

import { SolutionsScrolly } from "./_components/solutions-scrolly";

const ease = [0.16, 1, 0.3, 1] as const;

function SectionLabel({

  children,

  dark = false,

}: {

  children: React.ReactNode;

  dark?: boolean;

}) {

  return (

    <div className="flex items-center gap-3">

      <span className={`h-px w-8 ${dark ? "bg-[#27d59b]" : "bg-[#007c67]"}`} />

      <span

        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.2em] ${

          dark ? "text-[#27d59b]" : "text-[#007c67]"

        }`}

      >

        {children}

      </span>

    </div>

  );

}

function VIoTSVGBackground({ dark = false }: { dark?: boolean }) {

  return (

    <div

      aria-hidden="true"

      className={`pointer-events-none absolute inset-0 overflow-hidden ${

        dark ? "opacity-100" : "opacity-90"

      }`}

    >

      <div

        className={`absolute -left-48 top-[10%] h-[520px] w-[520px] rounded-full blur-3xl ${

          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.025]"

        }`}

      />

      <div

        className={`absolute -right-56 bottom-[6%] h-[640px] w-[640px] rounded-full blur-3xl ${

          dark ? "bg-white/[0.012]" : "bg-[#081b24]/[0.025]"

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

          stroke={dark ? "rgba(255,255,255,0.055)" : "rgba(8,27,36,0.09)"}

          strokeWidth="1"

          initial={{ pathLength: 0 }}

          whileInView={{ pathLength: 1 }}

          viewport={{ once: true }}

          transition={{ duration: 2.4, ease: "easeOut" }}

        />

        <motion.path

          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"

          stroke={dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.13)"}

          strokeWidth="1.2"

          strokeDasharray="3 15"

          animate={{ strokeDashoffset: [0, -180] }}

          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}

        />

        <path

          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"

          stroke={dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.055)"}

          strokeWidth="1"

        />

        <motion.path

          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"

          stroke={dark ? "rgba(39,213,155,0.075)" : "rgba(0,124,103,0.065)"}

          strokeWidth="1"

          strokeDasharray="2 20"

          animate={{ strokeDashoffset: [0, 180] }}

          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}

        />

      </svg>

      <motion.div

        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${

          dark ? "border-white/[0.035]" : "border-[#081b24]/[0.045]"

        }`}

        animate={{ rotate: 360 }}

        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}

      />

      <motion.div

        className={`absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border ${

          dark ? "border-[#27d59b]/[0.055]" : "border-[#007c67]/[0.06]"

        }`}

        animate={{ rotate: -360 }}

        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}

      />

      <div

        className={`absolute right-[17%] top-[27%] h-[150px] w-[150px] rounded-full border ${

          dark ? "border-white/[0.025]" : "border-[#081b24]/[0.035]"

        }`}

      />

      <div

        className={`absolute -left-[180px] bottom-[18%] h-[460px] w-[460px] rounded-full border ${

          dark ? "border-white/[0.025]" : "border-[#081b24]/[0.035]"

        }`}

      />

      <motion.span

        className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{ x: [0, 90, 180], y: [0, 20, 0], opacity: [0.1, 0.65, 0] }}

        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}

      />

      <motion.span

        className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{ x: [0, -70, -150], y: [0, -25, 0], opacity: [0, 0.7, 0] }}

        transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}

      />

      <motion.span

        className="absolute right-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"

        animate={{ x: [0, -55, -120], opacity: [0.1, 0.65, 0] }}

        transition={{ duration: 5, delay: 1.8, repeat: Infinity, ease: "easeInOut" }}

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

          animate={{ opacity: [0.1, 0.4, 0.1] }}

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

function HeroImageVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.12, ease }}
      className="relative mx-auto h-[360px] w-full max-w-[540px] sm:h-[430px] lg:ml-auto lg:h-[500px]"
    >
      <div className="absolute inset-y-[10%] right-[7%] w-[74%] rounded-full bg-[#27d59b]/[0.065] blur-3xl" />

      <motion.div
        className="absolute right-[3%] top-[8%] h-[310px] w-[310px] rounded-full border border-white/[0.055] sm:h-[390px] sm:w-[390px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute bottom-[7%] left-[4%] h-[220px] w-[220px] rounded-full border border-[#27d59b]/[0.085]"
        animate={{ rotate: -360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      />

     

      <motion.span
        className="absolute right-[18%] top-[20%] h-2 w-2 rounded-full bg-[#27d59b] shadow-[0_0_16px_rgba(39,213,155,0.5)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute bottom-[18%] left-[16%] h-1.5 w-1.5 rounded-full bg-white/50"
        animate={{ opacity: [0.15, 0.7, 0.15] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default function SolutionsPage() {

  return (

    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

      <section className="relative min-h-[720px] overflow-hidden bg-[#081b24] text-white sm:min-h-[760px]">
        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-24 sm:min-h-[760px] sm:px-8 sm:pt-28 lg:px-12 lg:pt-32 xl:px-16">
          <div className="grid flex-1 items-center gap-12 py-8 lg:grid-cols-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7"
            >
              <h1 className="max-w-4xl font-heading text-[clamp(3rem,5.7vw,5.9rem)] font-semibold leading-[0.91] tracking-[-0.06em]">
                Technology that
                <br />
                <span className="font-normal text-[#27d59b]">
                  fits the operation.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/62 sm:text-base">
                Connected solutions built around the vehicles, assets, people
                and spaces that keep your business moving.
              </p>
            </motion.div>

            <div className="lg:col-span-5">
              <HeroImageVisual />
            </div>
          </div>
 
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.65, ease }}
            className="grid gap-10 lg:grid-cols-12 lg:gap-14"
          >
            <div className="lg:col-span-4">
              <SectionLabel>Connected operating model</SectionLabel>

              <h2 className="mt-5 max-w-xl font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[50px]">
                Connect.
                <br />
                <span className="font-normal text-[#007c67]">
                  Understand. Act.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="relative">
                <div className="absolute left-[19px] top-5 hidden h-[calc(100%-40px)] w-px bg-[#007c67]/12 sm:block" />

                <div>
                  {[
                    {
                      label: "Connect",
                      text: "Vehicles, assets, locks and sensors",
                    },
                    {
                      label: "Understand",
                      text: "One connected operational view",
                    },
                    {
                      label: "Act",
                      text: "Exceptions, response and decisions",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.52,
                        delay: index * 0.08,
                        ease,
                      }}
                      className="relative grid gap-4 border-b border-[#cdd5d2] py-6 first:pt-0 last:border-b-0 last:pb-0 sm:grid-cols-[72px_180px_1fr] sm:items-center"
                    >
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white font-mono text-[8px] font-semibold text-[#007c67] shadow-[0_8px_22px_rgba(8,27,36,0.05)]">
                        0{index + 1}
                      </div>

                      <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-[#081b24]">
                        {item.label}
                      </h3>

                      <p className="max-w-lg text-[13px] leading-6 text-[#607078]">
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

               
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081b24] text-white">

        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <SectionLabel dark>How it connects</SectionLabel>

              <h3 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] sm:text-4xl lg:text-[52px]">

                From connected data

                <br />

                <span className="font-normal text-[#27d59b]">to action.</span>

              </h3>

            </div>

          </div>

        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">

          <SolutionsScrolly solutions={solutions} />

        </div>

      </section>

      <section className="relative overflow-hidden bg-white">

        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.3 }}

            transition={{ duration: 0.7, ease }}

            className="grid gap-8 rounded-2xl border border-[#cbd7d2] bg-white/85 p-6 shadow-[0_18px_50px_rgba(8,27,36,0.05)] backdrop-blur-sm sm:p-8 lg:grid-cols-12 lg:items-end lg:p-10"

          >

            <div className="lg:col-span-8">

              <SectionLabel>VIoT</SectionLabel>

              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[52px]">

                Different operations.

                <br />

                <span className="font-normal text-[#007c67]">

                  One connected intelligence.

                </span>

              </h2>

            </div>

          </motion.div>

        </div>

      </section>

      <CtaBand />

    </main>

  );

}