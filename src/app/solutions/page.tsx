"use client";

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

export default function SolutionsPage() {

  return (

    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

      <section className="relative min-h-[610px] overflow-hidden bg-[#081b24] text-white sm:min-h-[650px]">

        <VIoTSVGBackground dark />

       <div className="relative z-10 mx-auto flex min-h-[610px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-24 sm:min-h-[650px] sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">

          <div className="grid items-end gap-10 lg:grid-cols-12">

            <motion.div

              initial={{ opacity: 0, y: 26 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, ease }}

              className="lg:col-span-8"

            >

              <h1 className="max-w-5xl font-heading text-[clamp(3.1rem,6vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.06em]">

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

            <motion.div

              initial={{ opacity: 0, scale: 0.96 }}

              animate={{ opacity: 1, scale: 1 }}

              transition={{ duration: 0.9, delay: 0.12, ease }}

              className="hidden lg:col-span-4 lg:block"

            >

              <div className="ml-auto max-w-[290px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-sm">

                <div className="flex items-center justify-between">

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">

                    Solution system

                  </span>

                  <span className="h-2 w-2 rounded-full bg-[#27d59b] shadow-[0_0_12px_rgba(39,213,155,0.45)]" />

                </div>

                <div className="relative mt-5 aspect-square rounded-full border border-white/[0.06]">

                  <div className="absolute inset-7 rounded-full border border-white/[0.05]" />

                  <div className="absolute inset-14 rounded-full border border-[#27d59b]/20" />

                  <motion.div

                    className="absolute inset-5"

                    animate={{ rotate: -360 }}

                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

                  >

                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#27d59b]" />

                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#27d59b]/25 bg-[#081b24]">

                    <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#27d59b]" />

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            transition={{ duration: 0.7, delay: 0.4 }}

            className="flex items-center justify-between border-t border-white/[0.1] pt-5"

          >

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/50">

                {String(solutions.length).padStart(2, "0")} connected solutions

              </span>

            </div>

            <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#27d59b]">

              Explore

              <ArrowDownRight className="h-3.5 w-3.5" />

            </div>

          </motion.div>

        </div>

      </section>

      {/* <section className="relative overflow-hidden bg-[#f4f6f2]">

        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12">

          <motion.div

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true, amount: 0.3 }}

            transition={{ duration: 0.7, ease }}

            className="grid gap-8 lg:grid-cols-12 lg:items-end"

          >

            <div className="lg:col-span-8">

              <SectionLabel>Solution ecosystem</SectionLabel>

              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[54px]">

                One connected layer.

                <br />

                <span className="font-normal text-[#007c67]">

                  Built for real work.

                </span>

              </h2>

            </div>

          </motion.div>

        </div>

      </section> */}

      
      <section className="relative overflow-hidden border-y border-[#cdd5d2] bg-white">
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease }}
            className="grid gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-5">
              <SectionLabel>Connected operating model</SectionLabel>

              <h2 className="mt-5 max-w-xl font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">
                Connect.
                <br />
                <span className="font-normal text-[#007c67]">
                  Understand. Act.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2]/80 shadow-[0_16px_42px_rgba(8,27,36,0.05)]">
                <div className="absolute left-[16.66%] right-[16.66%] top-[36px] hidden h-px bg-[#007c67]/12 sm:block" />

                <div className="grid sm:grid-cols-3">
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
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                        ease,
                      }}
                      className="relative border-b border-[#cdd5d2] px-5 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-6 sm:py-7"
                    >
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white font-mono text-[8px] font-semibold text-[#007c67] shadow-[0_6px_16px_rgba(8,27,36,0.04)]">
                        0{index + 1}
                      </div>

                      <h3 className="mt-5 font-heading text-lg font-semibold tracking-[-0.025em] text-[#081b24]">
                        {item.label}
                      </h3>

                      <p className="mt-2 max-w-[240px] text-[13px] leading-6 text-[#607078]">
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