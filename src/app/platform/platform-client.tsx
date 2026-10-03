"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";
import { CtaBand } from "@/components/home/CtaBand";
import { PlatformDataFlow } from "./_components/platform-data-flow";

const ease = [0.16, 1, 0.3, 1] as const;

const modules = [
  {
    id: "fleet-intelligence",
    number: "01",
    name: "Fleet Intelligence",
    copy: "Understand vehicle movement, trip activity and operational events through one connected view.",
  },
  {
    id: "energy-intelligence",
    number: "02",
    name: "Energy Intelligence",
    copy: "Bring vehicle, battery and charging information together for clearer EV operations.",
  },
  {
    id: "access-control",
    number: "03",
    name: "Access Control",
    copy: "Connect smart locking and access events with location, time and operational context.",
  },
  {
    id: "video-intelligence",
    number: "04",
    name: "Video Intelligence",
    copy: "Bring video events and vehicle context together to understand incidents faster.",
  },
  {
    id: "resource-intelligence",
    number: "05",
    name: "Resource Intelligence",
    copy: "Turn fuel, temperature, load and sensor signals into useful operational information.",
  },
];

const operatingSteps = [
  {
    number: "01",
    label: "Edge",
    title: "Capture",
    copy: "Devices and sensors capture movement, state and events from the physical world.",
  },
  {
    number: "02",
    label: "Network",
    title: "Deliver",
    copy: "Signals move through the network and stay available through interruptions.",
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
    copy: "See what is happening across connected vehicles, assets and locations.",
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
        className={`font-mono text-[8px] font-semibold uppercase tracking-[0.2em] ${
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

export default function PlatformClient() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* HERO */}
      <section className="relative min-h-[610px] overflow-hidden bg-[#081b24] text-white sm:min-h-[660px]">
        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[610px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:min-h-[660px] sm:px-8 lg:px-12 lg:pt-10">
          <div className="flex items-center justify-between">
            <SectionLabel dark>VIoT Platform</SectionLabel>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 sm:block">
              Connected intelligence
            </span>
          </div>

          <div className="grid items-center gap-10 py-12 lg:grid-cols-12 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-8"
            >
              <h1 className="max-w-5xl font-heading text-[clamp(3rem,6vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-white">
                One connected
                <br />
                <span className="font-normal text-[#27d59b]">
                  layer for the operation.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
                From connected hardware to clear operational decisions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease }}
              className="hidden lg:col-span-4 lg:block"
            >
              <div className="ml-auto w-full max-w-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                    Platform core
                  </span>
                  <span className="h-2 w-2 rounded-full bg-[#27d59b] shadow-[0_0_12px_rgba(39,213,155,0.5)]" />
                </div>

                <div className="relative mt-6 aspect-square rounded-full border border-white/[0.06]">
                  <div className="absolute inset-8 rounded-full border border-white/[0.05]" />
                  <div className="absolute inset-16 rounded-full border border-[#27d59b]/20" />

                  <motion.div
                    className="absolute inset-5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#27d59b]" />
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 flex h-[74px] w-[74px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#27d59b]/30 bg-[#081b24]/95 shadow-[0_10px_28px_rgba(0,0,0,0.18)]">
                    <Image
                      src="/logo/logo-bg.png"
                      alt="VIoT"
                      width={64}
                      height={64}
                      className="h-11 w-11 object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.09] pt-5">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                Hardware · Data · Intelligence
              </span>
            </div>

            <ArrowIcon className="h-3.5 w-3.5 text-[#27d59b]" />
          </div>
        </div>
      </section>

      {/* DATA FLOW */}
      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel dark>Data flow</SectionLabel>

              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] sm:text-4xl lg:text-[50px]">
                From physical signals
                <br />
                <span className="font-normal text-[#27d59b]">
                  to useful action.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/48 lg:ml-auto lg:text-right">
                Hardware captures the signal. The platform connects the data,
                adds context and makes it useful.
              </p>
            </div>
          </div>

          <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018] p-4 shadow-[0_18px_48px_rgba(0,0,0,0.12)] sm:p-5">
            <PlatformDataFlow />
          </div>
        </div>
      </section>

      {/* PLATFORM LAYERS */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel>Platform</SectionLabel>

              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[50px]">
                Five intelligence layers.
                <br />
                <span className="font-normal text-[#007c67]">
                  One connected operation.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#607078] lg:ml-auto lg:text-right">
                Connect vehicles, assets, security and sensor data through one
                operating layer.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/80 shadow-[0_16px_45px_rgba(8,27,36,0.05)] backdrop-blur-sm">
            <div className="divide-y divide-[#d8e2de]">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  href={`/contact?interest=${module.id}`}
                  className="group relative grid gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#27d59b]/[0.035] sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6"
                >
                  <span className="absolute bottom-3 left-0 top-3 w-[2px] rounded-full bg-[#27d59b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="sm:col-span-1">
                    <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#007c67]">
                      {module.number}
                    </span>
                  </div>

                  <div className="sm:col-span-4">
                    <h3 className="font-heading text-xl font-semibold tracking-[-0.03em] text-[#081b24] sm:text-[22px]">
                      {module.name}
                    </h3>
                  </div>

                  <div className="sm:col-span-6">
                    <p className="max-w-xl text-[13px] leading-6 text-[#607078]">
                      {module.copy}
                    </p>
                  </div>

                  <div className="sm:col-span-1 sm:flex sm:justify-end">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#007c67]/15 text-[#007c67] transition-all duration-300 group-hover:border-[#27d59b] group-hover:bg-[#27d59b] group-hover:text-[#081b24]">
                      <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATING LOOP */}
      <section className="relative overflow-hidden bg-[#06171f] text-white">
        <VIoTSVGBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel dark>Operating loop</SectionLabel>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] sm:text-4xl lg:text-[50px]">
                Capture. <span className="text-[#27d59b]">Deliver.</span>
                <br />
                Understand. <span className="text-[#27d59b]">Respond.</span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/45 lg:ml-auto lg:text-right">
                A continuous path from the physical world to the people making
                operational decisions.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.018]">
            <div className="grid lg:grid-cols-4">
              {operatingSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                    ease,
                  }}
                  className={`group min-h-[190px] p-5 sm:p-6 ${
                    index !== operatingSteps.length - 1
                      ? "border-b border-white/[0.08] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
                      {step.number} / {step.label}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full border border-[#27d59b] transition-colors duration-300 group-hover:bg-[#27d59b]" />
                  </div>

                  <h3 className="mt-8 font-heading text-2xl font-semibold tracking-[-0.035em] text-white transition-colors duration-300 group-hover:text-[#27d59b]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-[13px] leading-6 text-white/42">
                    {step.copy}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative overflow-hidden bg-white">
        <VIoTSVGBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>Capabilities</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[50px]">
            Information that
            <br />
            <span className="font-normal text-[#007c67]">
              helps teams act.
            </span>
          </h2>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/85 shadow-[0_14px_40px_rgba(8,27,36,0.045)]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item, index) => (
                <div
                  key={item.number}
                  className={`group min-h-[180px] p-5 transition-colors duration-300 hover:bg-[#27d59b]/[0.03] sm:p-6 ${
                    index < capabilities.length - 3
                      ? "border-b border-[#d8e2de]"
                      : ""
                  } ${
                    index % 3 !== 2 ? "lg:border-r lg:border-[#d8e2de]" : ""
                  } ${
                    index % 2 === 0 ? "sm:border-r sm:border-[#d8e2de] lg:border-r" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] font-semibold tracking-[0.18em] text-[#007c67]">
                      {item.number}
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]/60 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <h3 className="mt-7 font-heading text-lg font-semibold tracking-[-0.025em] text-[#081b24] transition-colors duration-300 group-hover:text-[#007c67] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-[13px] leading-6 text-[#607078]">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
