"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon } from "@/components/icons";
import { CtaBand } from "@/components/home/CtaBand";
import { PlatformDataFlow } from "./_components/platform-data-flow";

const ease = [0.16, 1, 0.3, 1] as const;

const modules = [
  {
    id: "fleet-management",
    number: "01",
    name: "Fleet Management",
    copy: "Bring vehicle location, trip activity, driving events and connected tracking data into one operational view.",
  },
  {
    id: "ev-management",
    number: "02",
    name: "EV Management",
    copy: "Connect vehicle, battery and charging information for clearer day-to-day EV operations.",
  },
  {
    id: "e-lock",
    number: "03",
    name: "E-Lock",
    copy: "Connect smart logistics and infrastructure lock events with location, access state and exception context.",
  },
  {
    id: "video",
    number: "04",
    name: "Video",
    copy: "Bring live video, AI safety events and vehicle context together for faster incident understanding.",
  },
  {
    id: "fuel-monitoring",
    number: "05",
    name: "Fuel Monitoring",
    copy: "Turn fuel and connected sensor signals into useful operational information for monitoring and exception response.",
  },
];

const operatingSteps = [
  {
    number: "01",
    label: "Edge",
    title: "Capture",
    copy: "Tracking devices, cameras, locks and sensors capture movement, state and field events.",
  },
  {
    number: "02",
    label: "Network",
    title: "Deliver",
    copy: "Connected signals move through the network and remain available for operational use.",
  },
  {
    number: "03",
    label: "Platform",
    title: "Understand",
    copy: "VIoT turns incoming signals into one connected operational picture.",
  },
  {
    number: "04",
    label: "Action",
    title: "Respond",
    copy: "Teams get the context needed to investigate, respond and decide.",
  },
];

const capabilities = [
  {
    number: "01",
    title: "Live visibility",
    copy: "See what is happening across connected vehicles, assets, locks and locations.",
  },
  {
    number: "02",
    title: "Contextual alerts",
    copy: "Surface meaningful events with the context needed to understand them.",
  },
  {
    number: "03",
    title: "Operational analytics",
    copy: "Turn historical signals into useful patterns for operational decisions.",
  },
  {
    number: "04",
    title: "Event history",
    copy: "Trace activity over time to investigate incidents and changes.",
  },
  {
    number: "05",
    title: "Connected data",
    copy: "Bring trusted VIoT data into the systems your teams already use.",
  },
  {
    number: "06",
    title: "API access",
    copy: "Extend connected data into ERP, TMS and other business workflows.",
  },
];

function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-[2px] w-7 ${dark ? "bg-[#27d59b]" : "bg-[#007c67]"}`} />
      <span
        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.22em] ${
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
      className={`pointer-events-none absolute inset-0 overflow-hidden ${dark ? "opacity-100" : "opacity-90"}`}
    >
      <div
        className={`absolute -left-48 top-[10%] h-[520px] w-[520px] rounded-full blur-3xl ${
          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.025]"
        }`}
      />
      <div
        className={`absolute -right-56 bottom-[8%] h-[650px] w-[650px] rounded-full blur-3xl ${
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
          className={`absolute h-1 w-1 rounded-full ${dark ? "bg-white/20" : "bg-[#081b24]/20"}`}
          style={{ left, top }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3 + index * 0.25, delay: index * 0.3, repeat: Infinity }}
        />
      ))}
    </div>
  );
}

export default function PlatformClient() {
  return (
    <main className="overflow-hidden bg-[#f3f5f1] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071921] text-white">
        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
         

          <div className="grid min-h-[650px] items-center gap-10 py-12 lg:grid-cols-12 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-7"
            >
              <SectionLabel dark>Unified operating layer</SectionLabel>
              <h1 className="mt-6 max-w-[850px] font-heading text-[clamp(3.25rem,6.2vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-white">
                One connected layer
                <br />
                <span className="font-normal text-[#27d59b]">for the operation.</span>
              </h1>
              <p className="mt-7 max-w-[600px] text-[15px] leading-[1.75] text-white/55 sm:text-base">
                From connected devices and field events to clear operational decisions.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/[0.09] pt-5">
                {['Vehicles', 'Locks', 'Video', 'Sensors', 'Energy'].map((item, index) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="font-mono text-[7px] tracking-[0.16em] text-[#27d59b]/70">0{index + 1}</span>
                    <span className="text-[11px] text-white/42">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease }}
              className="relative hidden min-h-[500px] lg:col-span-5 lg:block"
            >
              <div className="absolute inset-y-[8%] left-[8%] right-0">
                <div className="absolute left-[46%] top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
                <div className="absolute left-[46%] top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#27d59b]/15" />
                <div className="absolute left-[46%] top-1/2 h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />

                <motion.div
                  className="absolute left-[46%] top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#27d59b] shadow-[0_0_16px_rgba(39,213,155,0.65)]" />
                </motion.div>

                <motion.div
                  className="absolute left-[46%] top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                >
                  <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/60" />
                </motion.div>

                <div className="absolute left-[46%] top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <span className="absolute inset-0 rotate-45 border border-[#27d59b]/25 bg-[#071921]/75 backdrop-blur-sm" />
                  <Image src="/logo/logo-bg.png" alt="VIoT" width={64} height={64} className="relative h-11 w-11 object-contain" />
                </div>

                {[
                  { label: 'Capture', className: 'left-[2%] top-[17%]' },
                  { label: 'Deliver', className: 'right-[2%] top-[22%]' },
                  { label: 'Understand', className: 'right-[0%] bottom-[18%]' },
                  { label: 'Respond', className: 'left-[0%] bottom-[21%]' },
                ].map((node, index) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.08, ease }}
                    className={`absolute ${node.className} flex items-center gap-3`}
                  >
                    <span className="h-px w-8 bg-[#27d59b]/35" />
                    <div>
                      <span className="block font-mono text-[7px] uppercase tracking-[0.16em] text-[#27d59b]/70">0{index + 1}</span>
                      <span className="mt-1 block text-[12px] text-white/58">{node.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

         
        </div>
      </section>

      {/* DATA FLOW */}
      <section className="relative overflow-hidden bg-[#071921] pb-16 text-white sm:pb-20">
        <VIoTSVGBackground dark />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
          
          <div className="overflow-hidden border-y border-white/[0.08] bg-white/[0.012] py-1">
            <PlatformDataFlow />
          </div>
        </div>
      </section>

      {/* PLATFORM MODULES */}
      <section className="relative overflow-hidden bg-[#f3f5f1] py-16 sm:py-20 lg:py-24">
        <VIoTSVGBackground />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>Platform</SectionLabel>
              <h2 className="mt-5 max-w-md font-heading text-[clamp(2.6rem,4.2vw,4.6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-[#081b24]">
                Five modules.
                <br />
                <span className="font-normal text-[#007c67]">One operation.</span>
              </h2>
              <p className="mt-6 max-w-sm text-[14px] leading-[1.75] text-[#66757b]">
                Each module solves a specific operational problem while sharing the same connected foundation.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="border-t border-[#cbd6d2]">
                {modules.map((module, index) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.5, delay: index * 0.04, ease }}
                  >
                    <Link
                      href={`/platform/${module.id}`}
                      className="group relative grid gap-4 border-b border-[#cbd6d2] py-6 transition-colors duration-300 sm:grid-cols-12 sm:items-center sm:gap-5 lg:py-7"
                    >
                      <span className="absolute inset-y-0 left-[-18px] w-[3px] scale-y-0 bg-[#27d59b] transition-transform duration-300 group-hover:scale-y-100" />
                      <div className="sm:col-span-1">
                        <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-[#007c67]">{module.number}</span>
                      </div>
                      <div className="sm:col-span-4">
                        <h3 className="font-heading text-[clamp(1.45rem,2vw,2rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-[#081b24] transition-colors duration-300 group-hover:text-[#007c67]">
                          {module.name}
                        </h3>
                      </div>
                      <div className="sm:col-span-6">
                        <p className="max-w-xl text-[13px] leading-[1.65] text-[#65747a]">{module.copy}</p>
                      </div>
                      <div className="sm:col-span-1 sm:flex sm:justify-end">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#081b24]/10 transition-all duration-300 group-hover:border-[#27d59b] group-hover:bg-[#27d59b]">
                          <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING LOOP */}
      <section className="relative overflow-hidden bg-[#06171f] py-16 text-white sm:py-20 lg:py-24">
        <VIoTSVGBackground dark />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-white/[0.08] pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel dark>Operating loop</SectionLabel>
              <h2 className="mt-5 font-heading text-[clamp(2.7rem,4.7vw,5rem)] font-semibold leading-[0.94] tracking-[-0.04em]">
                From field signal
                <br />
                <span className="font-normal text-[#27d59b]">to operational action.</span>
              </h2>
            </div>
          
          </div>

          <div className="relative mt-2">
            <div className="absolute bottom-0 left-[31px] top-0 hidden w-px bg-white/[0.09] sm:block lg:left-1/2" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease }}
              className="absolute bottom-0 left-[31px] top-0 hidden w-px origin-top bg-gradient-to-b from-[#27d59b] via-[#27d59b]/35 to-transparent sm:block lg:left-1/2"
            />

            {operatingSteps.map((step, index) => {
              const right = index % 2 === 1;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.55, delay: index * 0.06, ease }}
                  className="relative grid min-h-[180px] border-b border-white/[0.07] py-7 sm:pl-20 lg:grid-cols-2 lg:pl-0"
                >
                  <div className="absolute left-[24px] top-8 hidden h-4 w-4 rounded-full border-4 border-[#06171f] bg-[#27d59b] shadow-[0_0_0_1px_rgba(39,213,155,0.35)] sm:block lg:left-1/2 lg:-translate-x-1/2" />

                  <div className={right ? 'lg:col-start-2 lg:pl-16' : 'lg:pr-16 lg:text-right'}>
                    <div className={`flex items-center gap-4 ${right ? '' : 'lg:justify-end'}`}>
                      <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#27d59b]">{step.number}</span>
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/28">{step.label}</span>
                    </div>
                    <h3 className="mt-4 font-heading text-[clamp(2rem,3vw,3.5rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>
                    <p className={`mt-4 max-w-md text-[13px] leading-[1.7] text-white/42 ${right ? '' : 'lg:ml-auto'}`}>
                      {step.copy}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative overflow-hidden bg-[#e9eeea] py-16 sm:py-20 lg:py-24">
        <VIoTSVGBackground />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionLabel>Capabilities</SectionLabel>
              <h2 className="mt-5 max-w-3xl font-heading text-[clamp(2.7rem,4.6vw,4.9rem)] font-semibold leading-[0.94] tracking-[-0.04em] text-[#081b24]">
                Information that
                <br />
                <span className="font-normal text-[#007c67]">helps teams act.</span>
              </h2>
            </div>
           
          </div>

          <div className="mt-10 grid border-l border-t border-[#becbc6] sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.04, ease }}
                className="group relative min-h-[230px] border-b border-r border-[#becbc6] p-6 transition-colors duration-300 hover:bg-white/45 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-[#007c67]">{item.number}</span>
                  <span className="h-2 w-2 rounded-full border border-[#007c67]/35 transition-colors duration-300 group-hover:bg-[#27d59b]" />
                </div>
                <div className="mt-12">
                  <h3 className="max-w-[260px] font-heading text-[1.65rem] font-semibold leading-[1.05] tracking-[-0.025em] text-[#081b24] transition-colors duration-300 group-hover:text-[#007c67]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-[13px] leading-[1.7] text-[#65747a]">{item.copy}</p>
                </div>
                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#27d59b] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
