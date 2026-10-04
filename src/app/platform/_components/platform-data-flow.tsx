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

function FlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-40 top-[8%] h-[420px] w-[420px] rounded-full bg-[#27d59b]/[0.018] blur-3xl" />
      <div className="absolute -right-48 bottom-[2%] h-[520px] w-[520px] rounded-full bg-white/[0.012] blur-3xl" />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 245 C130 70 390 115 625 290 S1050 605 1760 245"
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        />

        <motion.path
          d="M-180 690 C115 470 395 520 680 675 S1140 860 1780 555"
          stroke="rgba(39,213,155,0.13)"
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M-120 460 C230 335 420 410 650 505 S1060 690 1730 450"
          stroke="rgba(39,213,155,0.06)"
          strokeWidth="1"
          strokeDasharray="2 20"
          animate={{ strokeDashoffset: [0, 180] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <motion.div
        className="absolute right-[3%] top-[9%] h-[360px] w-[360px] rounded-full border border-white/[0.03]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute right-[8%] top-[15%] h-[250px] w-[250px] rounded-full border border-[#27d59b]/[0.05]"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />

      <motion.span
        className="absolute left-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{ x: [0, 90, 180], opacity: [0.1, 0.75, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute right-[20%] top-[60%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{ x: [0, -80, -160], opacity: [0, 0.65, 0] }}
        transition={{ duration: 6, delay: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
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

export function PlatformDataFlow() {
  return (
    <section
      aria-label="VIoT connected data flow from field devices into the operating platform"
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071a22] text-white shadow-[0_22px_65px_rgba(0,0,0,0.18)]"
    >
      <FlowBackground />

      <div className="relative z-10">
        {/* Header */}
        <div className="grid border-b border-white/[0.08] lg:grid-cols-12">
          <div className="px-5 py-6 sm:px-6 lg:col-span-8 lg:border-r lg:border-white/[0.08] lg:px-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Connected data architecture
              </span>
              <span className="h-px w-7 bg-white/12" />
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">
                VIoT / Platform
              </span>
            </div>

            <h2 className="max-w-2xl font-heading text-2xl font-semibold leading-[1.03] tracking-[-0.035em] text-white sm:text-3xl">
              From connected field events{" "}
              <span className="font-normal text-[#27d59b]">
                to one operational view.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-[13px] leading-6 text-white/45">
              Tracking devices, smart locks, video and sensors feed a common
              platform layer for visibility, context and response.
            </p>
          </div>

          <div className="hidden items-center px-6 lg:col-span-4 lg:flex">
            <div className="w-full">
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/24">
                Operating principle
              </span>
              <div className="mt-3 flex items-center gap-2">
                {["Capture", "Deliver", "Understand", "Respond"].map(
                  (item, index) => (
                    <div key={item} className="flex min-w-0 flex-1 items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#27d59b]" />
                      <span className="truncate font-mono text-[7px] uppercase tracking-[0.12em] text-white/42">
                        {item}
                      </span>
                      {index < 3 && <span className="h-px flex-1 bg-white/[0.08]" />}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="overflow-x-auto">
          <div className="min-w-[920px] px-5 py-8 sm:px-6 lg:px-7 lg:py-9">
            <div className="grid grid-cols-[1fr_80px_1.15fr_80px_1fr] items-center gap-4">
              <div>
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/24">
                  Connected edge
                </span>
                <div className="mt-2 h-px w-9 bg-[#27d59b]/55" />
              </div>

              <div />

              <div className="text-center">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/24">
                  Network & data transport
                </span>
                <div className="mx-auto mt-2 h-px w-9 bg-[#27d59b]/55" />
              </div>

              <div />

              <div className="text-right">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/24">
                  Intelligence layer
                </span>
                <div className="ml-auto mt-2 h-px w-9 bg-[#27d59b]/55" />
              </div>
            </div>

            <div className="relative mt-7 grid grid-cols-[1fr_80px_1.15fr_80px_1fr] items-stretch gap-4">
              {/* Edge */}
              <div className="grid grid-cols-2 gap-3">
                {edgeSources.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    className="group rounded-xl border border-white/[0.08] bg-[#0a222c]/85 p-4 transition-all duration-300 hover:border-[#27d59b]/25 hover:bg-[#0d2935]"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[8px] text-[#27d59b]">
                        {item.number}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.09] text-[#27d59b]">
                        <EdgeIcon type={item.icon} />
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-[15px] font-semibold tracking-[-0.02em] text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-[10px] leading-5 text-white/34">
                      {item.detail}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Edge → Transport */}
              <div className="relative flex items-center justify-center">
                <div className="absolute left-0 right-0 h-px bg-white/[0.09]" />
                <motion.span
                  className="relative h-2 w-5 rounded-full border border-[#27d59b]/25 bg-[#27d59b]"
                  animate={{ x: [-20, 20, -20], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Transport */}
              <div className="relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5">
                <div className="absolute inset-x-5 top-1/2 h-px bg-white/[0.07]" />

                <div className="relative z-10 grid h-full grid-cols-3 gap-3">
                  {[
                    ["4G", "Connectivity"],
                    ["GNSS", "Position"],
                    ["Cloud", "Data layer"],
                  ].map(([title, text], index) => (
                    <div
                      key={title}
                      className="flex min-h-[126px] flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#081b24]/75 px-3 text-center"
                    >
                      <motion.span
                        className="h-2 w-2 rounded-full bg-[#27d59b]"
                        animate={{ opacity: [0.25, 1, 0.25] }}
                        transition={{ duration: 1.8, delay: index * 0.35, repeat: Infinity }}
                      />
                      <strong className="mt-3 font-heading text-base font-semibold text-white">
                        {title}
                      </strong>
                      <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.13em] text-white/28">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transport → Platform */}
              <div className="relative flex items-center justify-center">
                <div className="absolute left-0 right-0 h-px bg-white/[0.09]" />
                <motion.span
                  className="relative h-2 w-5 rounded-full border border-[#27d59b]/25 bg-[#27d59b]"
                  animate={{ x: [-20, 20, -20], opacity: [0.35, 1, 0.35] }}
                  transition={{ duration: 3.2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Platform */}
              <div className="overflow-hidden rounded-2xl border border-[#27d59b]/22 bg-[#0b2630]/95 shadow-[0_16px_42px_rgba(0,0,0,0.16)]">
                <div className="flex items-center gap-4 border-b border-white/[0.07] px-5 py-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#27d59b]/28 bg-[#081b24]/80">
                    <Image
                      src="/logo/logo-bg.png"
                      alt="VIoT"
                      width={56}
                      height={56}
                      className="h-8 w-8 object-contain"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-heading text-base font-semibold tracking-[-0.02em] text-white">
                        VIoT Platform
                      </h3>
                      <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                    </div>
                    <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.14em] text-[#27d59b]/68">
                      Monitor · Analyse · Respond
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.07]">
                  {platformOutputs.map((item) => (
                    <div key={item} className="px-4 py-3.5">
                      <span className="text-[10px] font-medium leading-5 text-white/62">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom rail */}
            <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-4">
              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
                Physical world
              </span>

              <div className="flex flex-1 items-center px-4">
                <div className="h-px flex-1 bg-white/[0.07]" />
                <motion.span
                  className="mx-3 h-1.5 w-1.5 rounded-full bg-[#27d59b]"
                  animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                <div className="h-px flex-1 bg-white/[0.07]" />
              </div>

              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
                Operational intelligence
              </span>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
}
