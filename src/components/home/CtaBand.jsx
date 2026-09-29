"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

function ConnectedVehicleVisual() {
  return (
    <div className="relative h-full min-h-[390px] overflow-hidden bg-[#e9eeeb]">
      {/* =================================================
          SOFT ATMOSPHERE
      ================================================= */}

      <div className="absolute inset-0">
        <div className="absolute left-[15%] top-[12%] h-[280px] w-[280px] rounded-full bg-signal-dark/[0.045] blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-ink/[0.035] blur-3xl" />
      </div>

      {/* =================================================
          TECHNICAL SVG
      ================================================= */}

      <svg
        viewBox="0 0 700 500"
        className="absolute inset-0 h-full w-full"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Road / trajectory */}
        <path
          d="M-40 405 C110 330 180 350 300 365 S510 405 740 260"
          stroke="rgba(8,27,36,0.10)"
          strokeWidth="1"
        />

        <path
          d="M-40 425 C110 350 190 370 310 385 S520 425 740 280"
          stroke="rgba(8,27,36,0.045)"
          strokeWidth="16"
        />

        {/* Signal route */}
        <motion.path
          d="M55 170 C180 120 250 205 355 180 S530 90 660 125"
          stroke="rgba(0,124,103,0.20)"
          strokeWidth="1"
          strokeDasharray="3 12"
          animate={{
            strokeDashoffset: [0, -180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Vertical connection */}
        <path
          d="M355 65 V180"
          stroke="rgba(8,27,36,0.07)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />

        {/* Satellite signal arcs */}
        <path
          d="M305 105 C325 80 355 80 380 105"
          stroke="rgba(0,124,103,0.16)"
          strokeWidth="1"
        />

        <path
          d="M285 85 C325 40 370 40 400 85"
          stroke="rgba(0,124,103,0.08)"
          strokeWidth="1"
        />

        {/* Small network nodes */}
        <circle
          cx="355"
          cy="62"
          r="3"
          fill="#007c67"
          fillOpacity="0.7"
        />

        <circle
          cx="55"
          cy="170"
          r="2"
          fill="#007c67"
          fillOpacity="0.5"
        />

        <circle
          cx="660"
          cy="125"
          r="2"
          fill="#007c67"
          fillOpacity="0.5"
        />

        {/* Route marker */}
        <circle
          cx="510"
          cy="350"
          r="3"
          fill="#007c67"
          fillOpacity="0.55"
        />

        {/* Fine technical marks */}
        <path
          d="M90 115h45M112 93v45"
          stroke="rgba(8,27,36,0.07)"
        />

        <path
          d="M570 375h55M597 348v55"
          stroke="rgba(8,27,36,0.06)"
        />

        {/* Moving signal */}
        <motion.circle
          r="3"
          fill="#007c67"
          animate={{
            cx: [55, 180, 355, 520, 660],
            cy: [170, 145, 180, 105, 125],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* =================================================
          TOP LABEL
      ================================================= */}

      <div className="absolute left-6 top-6 right-6 flex items-start justify-between">
        <div>
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-signal-dark">
            Connected mobility
          </span>

          <h3 className="mt-2 max-w-[250px] font-heading text-xl font-semibold leading-tight tracking-[-0.035em] text-ink sm:text-2xl">
            From the road
            <br />
            to the platform.
          </h3>
        </div>

        <motion.span
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="mt-1 h-2 w-2 bg-signal-dark"
        />
      </div>

      {/* =================================================
          VEHICLE
      ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          opacity: {
            duration: 0.8,
          },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-[19%] left-[7%] right-[7%] h-[170px] sm:h-[190px]"
      >
        <Image
          src="/image/truck-pn.png"
          alt="Connected VIoT vehicle"
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-contain"
        />
      </motion.div>

      {/* =================================================
          VEHICLE SIGNAL
      ================================================= */}

      <motion.div
        className="absolute bottom-[31%] left-[48%] flex items-center gap-2"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
        }}
      >
        <span className="h-2 w-2 bg-signal-dark" />

        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-ink/45">
          Telemetry active
        </span>
      </motion.div>

      {/* =================================================
          BOTTOM INFO
      ================================================= */}

      <div className="absolute bottom-6 left-6 right-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-signal-dark" />

          <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-muted">
            Vehicle → Network → VIoT
          </span>
        </div>

        <p className="mt-2 max-w-sm text-[11px] leading-5 text-muted">
          Location, diagnostics and events move from connected hardware into
          one operational view.
        </p>
      </div>

      {/* Corner marks */}
      <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-ink/10" />
      <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-ink/10" />
      <span className="absolute bottom-4 left-4 h-5 w-5 border-b border-l border-ink/10" />
      <span className="absolute bottom-4 right-4 h-5 w-5 border-b border-r border-ink/10" />
    </div>
  );
}

export function CtaBand() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-paper">
      {/* =================================================
          SECTION ATMOSPHERE
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-signal-dark/[0.025] blur-3xl"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <svg
          viewBox="0 0 1600 700"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <motion.path
            d="M-100 600 C260 430 430 490 700 540 S1200 650 1700 350"
            stroke="rgba(0,124,103,0.055)"
            strokeWidth="1"
            strokeDasharray="3 18"
            animate={{
              strokeDashoffset: [0, -200],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <path
            d="M900 760 C1040 560 1180 490 1360 350 S1510 160 1700 80"
            stroke="rgba(8,27,36,0.035)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="grid gap-7 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-signal-dark" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Start a conversation
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-ink sm:text-5xl lg:text-[60px]">
              Have a vehicle, asset
              <br />
              or{" "}
              <span className="text-muted">
                access challenge?
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-sm leading-7 text-muted">
              Tell us what you need to track, monitor or secure. Our team can
              help identify the right VIoT solution for your operation.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            CTA CARD
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-12 overflow-hidden bg-white shadow-[0_20px_70px_rgba(8,27,36,0.07)]"
        >
          <div className="grid lg:grid-cols-12">
            {/* =================================================
                VISUAL
            ================================================= */}

            <div className="lg:col-span-5">
              <ConnectedVehicleVisual />
            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    className="flex min-h-[390px] items-center px-6 py-10 sm:px-10 lg:px-12"
                  >
                    <div className="max-w-md">
                      <motion.div
                        initial={{
                          scale: 0.7,
                          opacity: 0,
                        }}
                        animate={{
                          scale: 1,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="flex h-11 w-11 items-center justify-center bg-signal-dark text-sm font-semibold text-white"
                      >
                        ✓
                      </motion.div>

                      <span className="mt-5 block font-mono text-[8px] uppercase tracking-[0.18em] text-signal-dark">
                        Request received
                      </span>

                      <h3 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink">
                        Thank you for reaching out.
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted">
                        Our team will review your requirement and get back to
                        you with the next steps.
                      </p>

                      <div className="mt-7 flex items-center gap-3">
                        <span className="h-px w-8 bg-signal-dark" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
                          team@viot.in
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-11"
                  >
                    <div className="mb-8">
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal-dark">
                        Enquiry
                      </span>

                      <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                        Tell us what you need.
                      </h3>
                    </div>

                    <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="cta-name"
                          className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                        >
                          Your name
                        </label>

                        <input
                          id="cta-name"
                          required
                          type="text"
                          placeholder="Your name"
                          className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/45 transition-colors focus:border-signal-dark focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cta-email"
                          className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                        >
                          Work email
                        </label>

                        <input
                          id="cta-email"
                          required
                          type="email"
                          placeholder="name@company.com"
                          className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/45 transition-colors focus:border-signal-dark focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cta-phone"
                          className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                        >
                          Phone number
                        </label>

                        <input
                          id="cta-phone"
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/45 transition-colors focus:border-signal-dark focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="cta-looking"
                          className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                        >
                          Looking for
                        </label>

                        <select
                          id="cta-looking"
                          defaultValue="Fleet Intelligence"
                          className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink focus:border-signal-dark focus:outline-none"
                        >
                          <option>Fleet Intelligence</option>
                          <option>Asset Intelligence</option>
                          <option>Access Control</option>
                          <option>Platform Demo</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="max-w-xs text-[11px] leading-5 text-muted">
                          Share your requirement and our team will help map the
                          right connected solution.
                        </p>

                        <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.14em] text-muted/70">
                          team@viot.in
                        </span>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{
                          y: -2,
                        }}
                        whileTap={{
                          scale: 0.98,
                        }}
                        className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-3.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-signal-dark sm:w-auto"
                      >
                        Send enquiry

                        <ArrowIcon className="h-3 w-3 text-white transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Bottom micro line */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            Fleet · Asset · Access
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            One connected ecosystem
          </span>
        </div>
      </div>
    </section>
  );
}