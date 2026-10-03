"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const devices = [
  { number: "01", name: "Vehicle", detail: "Telematics" },
  { number: "02", name: "E-Lock", detail: "Security" },
  { number: "03", name: "Sensors", detail: "Field data" },
  { number: "04", name: "Video", detail: "Visual layer" },
];

function FlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-40 top-[8%] h-[420px] w-[420px] rounded-full bg-[#27d59b]/[0.02] blur-3xl" />
      <div className="absolute -right-48 bottom-[2%] h-[520px] w-[520px] rounded-full bg-white/[0.012] blur-3xl" />

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 245 C130 70 390 115 625 290 S1050 605 1760 245"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        />

        <motion.path
          d="M-180 690 C115 470 395 520 680 675 S1140 860 1780 555"
          stroke="rgba(39,213,155,0.14)"
          strokeWidth="1.2"
          strokeDasharray="3 15"
          animate={{ strokeDashoffset: [0, -180] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M-120 460 C230 335 420 410 650 505 S1060 690 1730 450"
          stroke="rgba(39,213,155,0.07)"
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

function DeviceIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <path
          d="M3 9h16v11H3zM19 13h5l5 5v2H19z"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="9" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="24" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <rect
          x="7"
          y="14"
          width="18"
          height="13"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <path
          d="M11 14V9a5 5 0 0110 0v5"
          stroke="currentColor"
          strokeWidth="1.3"
        />
        <circle cx="16" cy="20" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <path
          d="M10 16a8 8 0 0112 0M6 12a14 14 0 0120 0"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" fill="none">
      <rect
        x="4"
        y="8"
        width="18"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path d="M22 12l7-4v16l-7-4" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function PlatformDataFlow() {
  return (
    <section
      aria-label="VIoT data flow from connected field devices into the operating platform"
      className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#071a22] text-white"
    >
      <FlowBackground />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="grid border-b border-white/[0.08] lg:grid-cols-12">
          <div className="border-b border-white/[0.08] px-5 py-6 sm:px-6 lg:col-span-8 lg:border-b-0 lg:border-r lg:px-7 lg:py-7">
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Data architecture
              </span>

              <span className="h-px w-7 bg-white/12" />

              <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/25">
                VIoT / 01
              </span>
            </div>

            <h2 className="max-w-2xl font-heading text-2xl font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-3xl">
              From field signal{" "}
              <span className="font-normal text-[#27d59b]">
                to operational action.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-[13px] leading-6 text-white/45">
              Vehicle, security, sensor and visual data converge into one
              operating layer for monitoring, context and response.
            </p>
          </div>

     
        </div>

        {/* ARCHITECTURE */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px] px-5 py-8 sm:px-6 lg:px-7 lg:py-9">
            <div className="grid grid-cols-[170px_1fr_190px] items-center gap-6">
              <div>
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">
                  Field layer
                </span>
                <div className="mt-2 h-px w-9 bg-[#27d59b]/55" />
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute left-0 right-0 h-px bg-white/[0.09]" />
                <div className="relative bg-[#071a22] px-4">
                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/28">
                    Data transport
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/25">
                  Intelligence layer
                </span>
                <div className="ml-auto mt-2 h-px w-9 bg-[#27d59b]/55" />
              </div>
            </div>

            {/* FLOW LINE */}
            <div className="relative mt-8">
              <div className="absolute left-[8%] right-[8%] top-[59px] h-px bg-white/[0.11]" />

              <motion.div
                aria-hidden="true"
                className="absolute left-[8%] top-[58px] h-[2px] w-[12%] rounded-full bg-[#27d59b]"
                animate={{
                  left: ["8%", "79%"],
                  opacity: [0.25, 1, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* GNSS */}
              <div className="relative mx-auto w-[124px]">
                <div className="flex h-[118px] flex-col items-center justify-center rounded-2xl border border-[#27d59b]/20 bg-[#0a222c]/90 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#27d59b]/35 text-[#27d59b]">
                    <svg
                      viewBox="0 0 48 48"
                      className="h-6 w-6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 14l24 24M10 34l24-24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="6"
                        y="10"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <rect
                        x="29"
                        y="25"
                        width="13"
                        height="13"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M34 8c4 2 6 5 7 9"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                      />
                    </svg>

                    <motion.span
                      className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-[#27d59b]"
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                    />
                  </div>

                  <span className="mt-3 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
                    GNSS
                  </span>

                  <span className="mt-1 text-[9px] text-white/30">
                    Position reference
                  </span>
                </div>

                <div className="absolute left-1/2 top-full h-7 w-px -translate-x-1/2 bg-[#27d59b]/25" />
              </div>

              {/* DEVICES */}
              <div className="relative mt-7 grid grid-cols-4 gap-3">
                {devices.map((device, index) => (
                  <div
                    key={device.number}
                    className="group relative rounded-xl border border-white/[0.08] bg-[#0a222c]/90 px-4 py-4 transition-all duration-300 hover:border-[#27d59b]/30 hover:bg-[#0d2935]"
                  >
                    <div className="absolute -top-7 left-1/2 h-7 w-px -translate-x-1/2 bg-white/[0.09]" />

                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[8px] text-[#27d59b]">
                        {device.number}
                      </span>

                      <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/18">
                        Edge
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.09] ${
                          index === 1
                            ? "text-[#ffb321]"
                            : index === 3
                              ? "text-white/55"
                              : "text-[#27d59b]"
                        }`}
                      >
                        <DeviceIcon index={index} />
                      </span>

                      <div>
                        <h3 className="font-heading text-sm font-semibold tracking-[-0.01em] text-white">
                          {device.name}
                        </h3>

                        <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.12em] text-white/28">
                          {device.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CONVERGENCE */}
              <div className="relative mt-8">
                <div className="absolute left-[12.5%] top-0 h-7 w-px bg-white/[0.1]" />
                <div className="absolute left-[37.5%] top-0 h-7 w-px bg-white/[0.1]" />
                <div className="absolute left-[62.5%] top-0 h-7 w-px bg-white/[0.1]" />
                <div className="absolute left-[87.5%] top-0 h-7 w-px bg-white/[0.1]" />

                <div className="mx-auto h-7 w-px bg-[#27d59b]/25" />

                <div className="mx-auto max-w-[500px] overflow-hidden rounded-2xl border border-[#27d59b]/25 bg-[#0b2630]/95 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#27d59b]/30 bg-[#081b24]/80">
                      <Image
                        src="/logo/logo-bg.png"
                        alt="VIoT"
                        width={56}
                        height={56}
                        className="h-8 w-8 object-contain"
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-heading text-base font-semibold tracking-[-0.02em] text-white">
                          VIoT Platform
                        </h3>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                      </div>

                      <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-[#27d59b]/70">
                        Monitor · Analyse · Respond
                      </p>
                    </div>

                    <div className="ml-auto hidden text-right sm:block">
                      <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/20">
                        Unified data
                      </span>

                      <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#27d59b]" />
                        <span className="h-1 w-6 rounded-full bg-[#27d59b]/30" />
                        <span className="h-1 w-2 rounded-full bg-[#27d59b]/15" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.07] px-5 py-3">
                    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/24">
                      Connected data / operational view
                    </span>
                  </div>
                </div>
              </div>

              {/* BOTTOM FLOW */}
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.07] pt-4">
                <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
                  Hardware
                </span>

                <div className="flex flex-1 items-center px-4">
                  <div className="h-px flex-1 bg-white/[0.07]" />

                  <motion.span
                    className="mx-3 h-1.5 w-1.5 rounded-full bg-[#27d59b]"
                    animate={{
                      opacity: [0.25, 1, 0.25],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />

                  <div className="h-px flex-1 bg-white/[0.07]" />
                </div>

                <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/18">
                  Intelligence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="border-t border-white/[0.08] px-5 py-3.5 sm:px-6 lg:px-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/18">
              Data depth depends on hardware and deployment configuration
            </span>

            <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#27d59b]/55">
              VIoT Connected Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
