"use client";

import { motion } from "framer-motion";

const devices = [
  {
    number: "01",
    name: "Vehicle",
    detail: "Telematics",
  },
  {
    number: "02",
    name: "E-Lock",
    detail: "Security",
  },
  {
    number: "03",
    name: "Sensors",
    detail: "Field data",
  },
  {
    number: "04",
    name: "Video",
    detail: "Visual layer",
  },
];

export function PlatformDataFlow() {
  return (
    <section
      aria-label="VIoT data flow from connected field devices into the operating platform"
      className="relative overflow-hidden border border-white/[0.08] bg-[#071a22]"
    >
      {/* Very subtle technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="grid border-b border-white/[0.08] lg:grid-cols-12">

          <div className="border-b border-white/[0.08] px-6 py-7 sm:px-8 lg:col-span-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-9">
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Data architecture
              </span>

              <span className="h-px w-8 bg-white/15" />

              <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">
                VIoT / 01
              </span>
            </div>

            <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-4xl lg:text-[46px]">
              From field signal
              <span className="text-white/30"> to operational action.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 sm:text-[15px]">
              Vehicle, security, sensor and visual data moves through one
              connected architecture — from hardware deployed in the field to
              the VIoT platform where teams monitor, understand and respond.
            </p>
          </div>

          <div className="hidden items-end justify-between px-8 py-9 lg:col-span-4 lg:flex lg:flex-col">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
              Connected operating architecture
            </span>

            <div className="w-full">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                  Signal path
                </span>

                <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.15em] text-[#27d59b]">
                  <span className="h-1.5 w-1.5 bg-[#27d59b]" />
                  Active
                </span>
              </div>

              <div className="h-px w-full bg-white/[0.1]">
                <motion.div
                  className="h-px bg-[#27d59b]"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "68%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            ARCHITECTURE
        ===================================================== */}

        <div className="overflow-x-auto">
          <div className="min-w-[980px] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">

            {/* Top architecture labels */}

            <div className="grid grid-cols-[180px_1fr_210px] items-center gap-8">

              <div>
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                  Field layer
                </span>

                <div className="mt-2 h-px w-10 bg-[#27d59b]/60" />
              </div>

              <div className="relative flex items-center justify-center">
                <div className="absolute left-0 right-0 h-px bg-white/[0.1]" />

                <div className="relative bg-[#071a22] px-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/30">
                    Data transport
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
                  Intelligence layer
                </span>

                <div className="ml-auto mt-2 h-px w-10 bg-[#27d59b]/60" />
              </div>
            </div>

            {/* =================================================
                GNSS → DEVICES → PLATFORM
            ================================================= */}

            <div className="relative mt-10">

              {/* Main horizontal signal line */}

              <div className="absolute left-[8%] right-[8%] top-[73px] h-px bg-white/[0.12]" />

              <motion.div
                aria-hidden="true"
                className="absolute left-[8%] top-[72px] h-[2px] w-[14%] bg-[#27d59b]"
                animate={{
                  left: ["8%", "78%"],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* GNSS */}

              <div className="relative mx-auto w-[150px]">

                <div className="flex h-[150px] flex-col items-center justify-center border border-[#27d59b]/25 bg-[#0a222c]">

                  <div className="relative flex h-12 w-12 items-center justify-center border border-[#27d59b]/50">

                    <svg
                      viewBox="0 0 48 48"
                      className="h-7 w-7 text-[#27d59b]"
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
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <rect
                        x="29"
                        y="25"
                        width="13"
                        height="13"
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
                      className="absolute -right-1 -top-1 h-1.5 w-1.5 bg-[#27d59b]"
                      animate={{ opacity: [0.25, 1, 0.25] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                    />
                  </div>

                  <span className="mt-4 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
                    GNSS
                  </span>

                  <span className="mt-1 text-[10px] text-white/30">
                    Position reference
                  </span>
                </div>

                {/* Vertical connector */}

                <div className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-[#27d59b]/30" />
              </div>

              {/* Device layer */}

              <div className="relative mt-8 grid grid-cols-4 gap-5">

                {devices.map((device, index) => (
                  <div
                    key={device.number}
                    className="group relative border border-white/[0.09] bg-[#0a222c] px-5 py-5 transition-colors duration-300 hover:border-[#27d59b]/40"
                  >
                    {/* top connector */}

                    <div className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-white/[0.1]" />

                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[9px] text-[#27d59b]">
                        {device.number}
                      </span>

                      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/20">
                        Edge
                      </span>
                    </div>

                    <div className="mt-7 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center border border-white/[0.1]">
                        {index === 0 && (
                          <svg
                            viewBox="0 0 32 32"
                            className="h-5 w-5 text-[#27d59b]"
                            fill="none"
                          >
                            <path
                              d="M3 9h16v11H3zM19 13h5l5 5v2H19z"
                              stroke="currentColor"
                              strokeWidth="1.3"
                            />
                            <circle
                              cx="9"
                              cy="23"
                              r="2.5"
                              stroke="currentColor"
                              strokeWidth="1.3"
                            />
                            <circle
                              cx="24"
                              cy="23"
                              r="2.5"
                              stroke="currentColor"
                              strokeWidth="1.3"
                            />
                          </svg>
                        )}

                        {index === 1 && (
                          <svg
                            viewBox="0 0 32 32"
                            className="h-5 w-5 text-[#ffb321]"
                            fill="none"
                          >
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
                            <circle
                              cx="16"
                              cy="20"
                              r="1.5"
                              fill="currentColor"
                            />
                          </svg>
                        )}

                        {index === 2 && (
                          <svg
                            viewBox="0 0 32 32"
                            className="h-5 w-5 text-[#27d59b]"
                            fill="none"
                          >
                            <circle
                              cx="16"
                              cy="20"
                              r="2"
                              fill="currentColor"
                            />
                            <path
                              d="M10 16a8 8 0 0112 0M6 12a14 14 0 0120 0"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}

                        {index === 3 && (
                          <svg
                            viewBox="0 0 32 32"
                            className="h-5 w-5 text-white/60"
                            fill="none"
                          >
                            <rect
                              x="4"
                              y="8"
                              width="18"
                              height="15"
                              rx="2"
                              stroke="currentColor"
                              strokeWidth="1.3"
                            />
                            <path
                              d="M22 12l7-4v16l-7-4"
                              stroke="currentColor"
                              strokeWidth="1.3"
                            />
                          </svg>
                        )}
                      </span>

                      <div>
                        <h3 className="font-heading text-sm font-semibold tracking-[-0.01em] text-white">
                          {device.name}
                        </h3>

                        <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-white/30">
                          {device.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-white/[0.07] pt-3">
                      <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/20">
                        Connected endpoint
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Data convergence */}

              <div className="relative mt-10">

                <div className="absolute left-[12.5%] top-0 h-8 w-px bg-white/[0.12]" />
                <div className="absolute left-[37.5%] top-0 h-8 w-px bg-white/[0.12]" />
                <div className="absolute left-[62.5%] top-0 h-8 w-px bg-white/[0.12]" />
                <div className="absolute left-[87.5%] top-0 h-8 w-px bg-white/[0.12]" />

                <div className="mx-auto h-8 w-px bg-[#27d59b]/30" />

                <div className="mx-auto mt-0 max-w-[540px] border border-[#27d59b]/30 bg-[#0b2630]">

                  <div className="flex items-center gap-5 px-6 py-5">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#27d59b]/40">
                      <svg
                        viewBox="0 0 32 32"
                        className="h-5 w-5 text-[#27d59b]"
                        fill="none"
                      >
                        <rect
                          x="4"
                          y="5"
                          width="24"
                          height="22"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.3"
                        />

                        <path
                          d="M8 21l5-6 4 4 7-9"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <circle
                          cx="8"
                          cy="21"
                          r="1"
                          fill="currentColor"
                        />

                        <circle
                          cx="13"
                          cy="15"
                          r="1"
                          fill="currentColor"
                        />

                        <circle
                          cx="17"
                          cy="19"
                          r="1"
                          fill="currentColor"
                        />

                        <circle
                          cx="24"
                          cy="10"
                          r="1"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                          VIoT Platform
                        </h3>

                        <span className="h-1.5 w-1.5 bg-[#27d59b]" />
                      </div>

                      <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]/70">
                        Monitor · Analyse · Respond
                      </p>
                    </div>

                    <div className="ml-auto hidden text-right sm:block">
                      <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/20">
                        Unified data
                      </span>

                      <div className="mt-1 flex items-center justify-end gap-1.5">
                        <span className="h-1 w-1 bg-[#27d59b]" />
                        <span className="h-1 w-6 bg-[#27d59b]/30" />
                        <span className="h-1 w-2 bg-[#27d59b]/15" />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/[0.07] px-6 py-3">
                    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-white/25">
                      Connected data / operational view
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom flow */}

              <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">
                  Hardware
                </span>

                <div className="flex flex-1 items-center px-5">
                  <div className="h-px flex-1 bg-white/[0.08]" />

                  <motion.span
                    className="mx-3 h-1.5 w-1.5 bg-[#27d59b]"
                    animate={{
                      opacity: [0.25, 1, 0.25],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                    }}
                  />

                  <div className="h-px flex-1 bg-white/[0.08]" />
                </div>

                <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/20">
                  Intelligence
                </span>
              </div>

            </div>
          </div>

          {/* =====================================================
              FOOTER
          ===================================================== */}

          <div className="border-t border-white/[0.08] px-6 py-4 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/20">
                Data depth depends on hardware, vehicle & deployment
                configuration
              </span>

              <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-[#27d59b]/60">
                VIoT Connected Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}