"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const edgeSources = [
  {
    number: "01",
    name: "Tracking",
    detail: "Vehicle location · events",
    icon: "vehicle",
  },
  {
    number: "02",
    name: "Smart Locks",
    detail: "Lock state · tamper",
    icon: "lock",
  },
  {
    number: "03",
    name: "Video",
    detail: "Live view · AI events",
    icon: "video",
  },
  {
    number: "04",
    name: "IoT Sensors",
    detail: "Temperature · fuel",
    icon: "sensor",
  },
] as const;

const platformOutputs = [
  "Live visibility",
  "Contextual alerts",
  "Event history",
  "API access",
] as const;

const transport = [
  ["4G / LTE", "Connectivity"],
  ["GNSS", "Position"],
  ["Cloud", "Data layer"],
] as const;

function FlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[#27d59b]/[0.025] blur-[130px]" />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-100 250 C250 70 440 190 730 340 S1160 520 1700 225"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />

        <motion.path
          d="M-160 700 C220 470 470 590 760 675 S1220 850 1760 520"
          stroke="rgba(39,213,155,0.12)"
          strokeWidth="1"
          strokeDasharray="2 16"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </svg>

    </div>
  );
}

function EdgeIcon({
  type,
}: {
  type: (typeof edgeSources)[number]["icon"];
}) {
  if (type === "vehicle") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 10h15v10H4zM19 14h5l4 4v2h-9z"
          stroke="currentColor"
          strokeWidth="1.35"
        />
        <circle cx="9" cy="23" r="2.4" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="24" cy="23" r="2.4" stroke="currentColor" strokeWidth="1.35" />
      </svg>
    );
  }

  if (type === "lock") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="7" y="14" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.35" />
        <path d="M11 14V9a5 5 0 0110 0v5" stroke="currentColor" strokeWidth="1.35" />
        <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "video") {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.35" />
        <path d="M22 12l7-4v16l-7-4" stroke="currentColor" strokeWidth="1.35" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="16" cy="20" r="2" fill="currentColor" />
      <path
        d="M10 16a8 8 0 0112 0M6 12a14 14 0 0120 0"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SignalLine({ delay = 0 }: { delay?: number }) {
  return (
    <div className="relative h-px w-full overflow-hidden bg-white/[0.08]">
      <motion.span
        className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-[#27d59b] to-transparent"
        animate={{ x: ["-100%", "700%"] }}
        transition={{
          duration: 3.8,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function PlatformDataFlow() {
  return (
    <section
      aria-label="VIoT connected data flow from field devices into the operating platform"
      className="relative overflow-hidden bg-[#061820] text-white"
    >
      <FlowBackground />

      <div className="relative z-10">
        <div className="border-b border-white/[0.07] px-5 py-8 sm:px-7 lg:px-9 lg:py-10">
          <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#27d59b]">
                Connected data
              </span>

              <h2 className="mt-3 max-w-3xl font-heading text-[clamp(2rem,3.2vw,3.3rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-white">
                From field signals to
                <span className="font-normal text-[#27d59b]"> operational intelligence.</span>
              </h2>
            </div>

         
          </div>
        </div>

        <div className="relative px-5 py-8 sm:px-7 lg:px-9 lg:py-10">
          <div className="hidden lg:grid lg:grid-cols-[0.95fr_1.1fr_1.2fr] lg:gap-10">
            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/28">
                Connected edge
              </span>

              <div className="mt-5 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {edgeSources.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group grid grid-cols-[42px_1fr_auto] items-center gap-4 py-4"
                  >
                    <span className="font-mono text-[8px] text-[#27d59b]/65">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-heading text-[15px] font-semibold tracking-[-0.015em] text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[10px] leading-5 text-white/32">
                        {item.detail}
                      </p>
                    </div>

                    <span className="flex h-9 w-9 items-center justify-center text-[#27d59b] opacity-65 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                      <EdgeIcon type={item.icon} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-col justify-center">
              <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/28">
                Transport
              </span>

              <div className="relative mt-5">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
                  <SignalLine />
                </div>

                <div className="relative grid grid-cols-3 gap-3">
                  {transport.map(([title, label], index) => (
                    <motion.div
                      key={title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
                      className="flex min-h-[138px] flex-col items-center justify-center border-x border-white/[0.06] bg-[#071d26]/88 px-3 text-center backdrop-blur-sm"
                    >
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-[#27d59b]"
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{
                          duration: 1.8,
                          delay: index * 0.3,
                          repeat: Infinity,
                        }}
                      />
                      <strong className="mt-4 font-heading text-[15px] font-semibold tracking-[-0.015em] text-white">
                        {title}
                      </strong>
                      <span className="mt-1.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white/26">
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/28">
                Intelligence layer
              </span>

              <div className="relative mt-5 min-h-[278px] overflow-hidden rounded-2xl border border-[#27d59b]/18 bg-[#08212b]/70 px-6 py-6 backdrop-blur-sm">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#27d59b]/60 to-transparent" />

                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                    <motion.span
                      className="absolute inset-0 rounded-full border border-[#27d59b]/25"
                      animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0, 0.45] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#27d59b]/25 bg-[#061820]">
                      <Image
                        src="/logo/logo-bg.png"
                        alt="VIoT"
                        width={52}
                        height={52}
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                        VIoT Platform
                      </h3>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                    </div>
                    <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.14em] text-[#27d59b]/65">
                      Monitor · Analyse · Respond
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <SignalLine delay={0.8} />
                </div>

                <div className="mt-1 divide-y divide-white/[0.06]">
                  {platformOutputs.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.18 + index * 0.05 }}
                      className="flex items-center justify-between py-3"
                    >
                      <span className="text-[12px] font-medium leading-5 text-white/62">
                        {item}
                      </span>
                      <span className="font-mono text-[7px] text-[#27d59b]/65">
                        0{index + 1}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 lg:hidden">
            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/28">
                Connected edge
              </span>

              <div className="mt-4 divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {edgeSources.map((item) => (
                  <div
                    key={item.number}
                    className="grid grid-cols-[34px_1fr_auto] items-center gap-3 py-4"
                  >
                    <span className="font-mono text-[8px] text-[#27d59b]/60">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-[10px] leading-5 text-white/32">
                        {item.detail}
                      </p>
                    </div>
                    <span className="text-[#27d59b]">
                      <EdgeIcon type={item.icon} />
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/28">
                Transport
              </span>
              <div className="mt-4 grid grid-cols-3 border-y border-white/[0.07]">
                {transport.map(([title, label]) => (
                  <div
                    key={title}
                    className="flex min-h-[105px] flex-col items-center justify-center border-r border-white/[0.06] px-2 text-center last:border-r-0"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                    <strong className="mt-3 font-heading text-sm font-semibold text-white">
                      {title}
                    </strong>
                    <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-white/24">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/28">
                VIoT intelligence
              </span>

              <div className="mt-4 rounded-2xl border border-[#27d59b]/16 bg-[#08212b]/70 p-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo/logo-bg.png"
                    alt="VIoT"
                    width={44}
                    height={44}
                    className="h-9 w-9 object-contain"
                  />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-white">
                      VIoT Platform
                    </h3>
                    <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.12em] text-[#27d59b]/65">
                      Monitor · Analyse · Respond
                    </p>
                  </div>
                </div>

                <div className="mt-5 divide-y divide-white/[0.06]">
                  {platformOutputs.map((item) => (
                    <div key={item} className="py-3 text-[12px] text-white/58">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
