"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";

/* =========================================================
   FORM CONFIG
========================================================= */

const lookingForOptions = [
  "Vehicle Telematics",
  "Video Telematics / Dash Cams",
  "Smart Locks (E-Lock)",
  "Asset Tracking",
  "IoT Sensors (Temperature, Fuel, Load)",
  "Building Access Management",
  "Platform Demo",
  "Other",
];

const fleetSizes = ["1–10", "11–50", "51–200", "200+"];

const followUps = {
  "Vehicle Telematics": [
    {
      name: "fleetSize",
      label: "Number of vehicles",
      type: "select",
      options: fleetSizes,
    },
    {
      name: "vehicleType",
      label: "Vehicle type",
      type: "select",
      options: [
        "Trucks",
        "Buses",
        "Cars",
        "Heavy / construction vehicles",
        "Mixed fleet",
      ],
    },
  ],

  "Video Telematics / Dash Cams": [
    {
      name: "fleetSize",
      label: "Number of vehicles",
      type: "select",
      options: fleetSizes,
    },
    {
      name: "cameraSetup",
      label: "Camera setup",
      type: "select",
      options: [
        "Front camera",
        "Front + cabin camera",
        "Not sure yet",
      ],
    },
  ],

  "Smart Locks (E-Lock)": [
    {
      name: "lockQuantity",
      label: "Number of locks",
      type: "select",
      options: ["1–10", "11–50", "51–200", "200+"],
    },
    {
      name: "lockUse",
      label: "Where will they be used",
      type: "select",
      options: [
        "Container / cargo trucks",
        "Warehouses",
        "Infrastructure",
        "Other",
      ],
    },
  ],

  "Asset Tracking": [
    {
      name: "assetType",
      label: "Type of assets",
      type: "text",
      placeholder: "e.g. generators, trailers, machinery",
    },
    {
      name: "assetCount",
      label: "Number of assets",
      type: "select",
      options: ["1–25", "26–100", "101–500", "500+"],
    },
  ],

  "IoT Sensors (Temperature, Fuel, Load)": [
    {
      name: "sensorType",
      label: "Sensor type",
      type: "select",
      options: ["Temperature", "Fuel", "Load", "More than one"],
    },
    {
      name: "fleetSize",
      label: "Number of vehicles",
      type: "select",
      options: fleetSizes,
    },
  ],

  "Building Access Management": [
    {
      name: "siteType",
      label: "Type of site",
      type: "select",
      options: [
        "Data centre",
        "Corporate building",
        "Residential / premium property",
        "Other",
      ],
    },
    {
      name: "accessPoints",
      label: "Number of doors / access points",
      type: "select",
      options: ["1–10", "11–50", "51–200", "200+"],
    },
  ],

  "Platform Demo": [
    {
      name: "demoFocus",
      label: "What would you like to see",
      type: "select",
      options: [
        "Fleet Management",
        "EV Management",
        "E-Lock Security",
        "Video Telematics",
        "Fuel Monitoring",
        "Access Control",
        "Full platform",
      ],
    },
  ],

  Other: [],
};

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

/* =========================================================
   PREMIUM FORM STYLES
========================================================= */

const inputClass =
  "h-11 w-full rounded-lg border border-[#c7d8d2] bg-white/80 px-3.5 text-[12px] text-[#081b24] placeholder:text-[#607078]/45 outline-none transition-all duration-300 hover:border-[#9ebbb2] focus:border-[#007c67] focus:bg-white focus:ring-2 focus:ring-[#007c67]/10";

const labelClass =
  "mb-2 block font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]";

/* =========================================================
   CLIENT-APPROVED SVG BACKGROUND
========================================================= */

function CtaBackgroundAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft atmosphere */}
      <div className="absolute -left-40 top-[15%] h-[360px] w-[360px] rounded-full bg-signal-dark/[0.025] blur-3xl" />

      <div className="absolute -right-40 bottom-[5%] h-[480px] w-[480px] rounded-full bg-ink/[0.02] blur-3xl" />

      {/* Flowing SVG network */}
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-160 250 C120 45 390 95 620 270 S1050 580 1760 225"
          stroke="rgba(8,27,36,0.10)"
          strokeWidth="1"
        />

        <motion.path
          d="M-180 680 C120 455 390 510 680 665 S1130 850 1780 545"
          stroke="rgba(39,213,155,0.18)"
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
          d="M70 980 C250 710 510 675 780 435 S1240 105 1630 -80"
          stroke="rgba(8,27,36,0.06)"
          strokeWidth="1"
        />

        <motion.path
          d="M-120 460 C230 330 420 405 650 500 S1060 680 1730 445"
          stroke="rgba(0,124,103,0.12)"
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

      {/* Engineering rings */}
      <motion.div
        className="absolute right-[3%] top-[8%] h-[330px] w-[330px] rounded-full border border-[#081b24]/[0.06]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute right-[7%] top-[14%] h-[235px] w-[235px] rounded-full border border-[#27d59b]/[0.12]"
        animate={{ rotate: -360 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="absolute right-[13%] top-[23%] h-[115px] w-[115px] rounded-full border border-ink/[0.03]" />

      <div className="absolute -left-[170px] bottom-[10%] h-[370px] w-[370px] rounded-full border border-ink/[0.03]" />

      {/* Moving signal points */}
      <motion.span
        className="absolute left-[17%] top-[27%] h-1 w-1 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, 80, 170],
          y: [0, 18, 0],
          opacity: [0.15, 0.8, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute left-[43%] top-[70%] h-1 w-1 rounded-full bg-signal-dark"
        animate={{
          x: [0, -65, -135],
          y: [0, -20, 0],
          opacity: [0, 0.55, 0],
        }}
        transition={{
          duration: 6,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute right-[18%] top-[37%] h-1 w-1 rounded-full bg-signal-dark"
        animate={{
          x: [0, -50, -110],
          opacity: [0.08, 0.55, 0],
        }}
        transition={{
          duration: 5,
          delay: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Ambient points */}
      {[
        ["12%", "20%"],
        ["24%", "76%"],
        ["38%", "14%"],
        ["57%", "82%"],
        ["67%", "20%"],
        ["78%", "70%"],
        ["90%", "50%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-0.5 w-0.5 rounded-full bg-ink/20"
          style={{
            left,
            top,
          }}
          animate={{
            opacity: [0.08, 0.35, 0.08],
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

/* =========================================================
   FIELD
========================================================= */

function FieldInput({ field }) {
  const id = `cta-${field.name}`;

  return (
    <div className="min-w-0">
      <label htmlFor={id} className={labelClass}>
        {field.label}
      </label>

      {field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          required
          defaultValue=""
          className={inputClass}
        >
          <option value="" disabled>
            Select
          </option>

          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          required
          type="text"
          placeholder={field.placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}

/* =========================================================
   CTA BAND
========================================================= */

export function CtaBand() {
  const [submitted, setSubmitted] = useState(false);
  const [lookingFor, setLookingFor] = useState("");

  const extraFields = lookingFor
    ? followUps[lookingFor] ?? []
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    // TODO:
    // Send payload to your enquiry API / email service.
    console.debug(payload);

    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-[#f4f6f2]">
      {/* =====================================================
          SVG BACKGROUND ANIMATION
      ===================================================== */}

      <CtaBackgroundAnimation />

      {/* Keep background subtle behind content */}
      <div className="pointer-events-none absolute inset-0 bg-[#f4f6f2]/68" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-signal-dark" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-signal-dark">
                Start a conversation
              </span>
            </div>

            <h2 className="mt-3 max-w-2xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#081b24] sm:text-4xl">
              Let&apos;s solve your{" "}
              <span className="text-[#007c67]">
                connected challenge.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-[#607078]">
            Tell us what you need to track, monitor or secure.
          </p>
        </motion.div>

        {/* ===================================================
            FORM CARD
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{
            duration: 0.55,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-8 overflow-hidden rounded-2xl
            border border-[#bfcfc9]/80
            bg-white/90
            shadow-[0_20px_60px_rgba(8,27,36,0.08)]
            backdrop-blur-md
          "
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              /* =================================================
                 SUCCESS
              ================================================= */

              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex min-h-[280px] items-center px-6 py-10 sm:px-9"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-signal-dark text-xs font-semibold text-white shadow-[0_8px_22px_rgba(0,124,103,0.18)]">
                    ✓
                  </div>

                  <span className="mt-4 block font-mono text-[8px] uppercase tracking-[0.16em] text-signal-dark">
                    Request received
                  </span>

                  <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.035em] text-ink">
                    Thank you for reaching out.
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-muted">
                    Our team will review your requirement and get back to you
                    with the next steps.
                  </p>
                </div>
              </motion.div>
            ) : (
              /* =================================================
                 FORM
              ================================================= */

              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-5 sm:p-7 lg:p-9"
              >
                {/* =============================================
                    TOP ROW
                ============================================= */}

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Name */}

                  <div>
                    <label htmlFor="cta-name" className={labelClass}>
                      Your name
                    </label>

                    <input
                      id="cta-name"
                      name="name"
                      required
                      type="text"
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  {/* Company */}

                  <div>
                    <label htmlFor="cta-company" className={labelClass}>
                      Company
                    </label>

                    <input
                      id="cta-company"
                      name="company"
                      required
                      type="text"
                      placeholder="Company name"
                      className={inputClass}
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label htmlFor="cta-email" className={labelClass}>
                      Work email
                    </label>

                    <input
                      id="cta-email"
                      name="email"
                      required
                      type="email"
                      placeholder="name@company.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Phone */}

                  <div>
                    <label htmlFor="cta-phone" className={labelClass}>
                      Phone
                    </label>

                    <input
                      id="cta-phone"
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* =============================================
                    REQUIREMENT ROW
                ============================================= */}

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {/* Looking for */}

                  <div className="lg:col-span-2">
                    <label
                      htmlFor="cta-looking"
                      className={labelClass}
                    >
                      Looking for
                    </label>

                    <select
                      id="cta-looking"
                      name="lookingFor"
                      required
                      value={lookingFor}
                      onChange={(e) => setLookingFor(e.target.value)}
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select an option
                      </option>

                      {lookingForOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}

                  <div className="lg:col-span-2">
                    <label
                      htmlFor="cta-timeline"
                      className={labelClass}
                    >
                      When do you plan to start
                    </label>

                    <select
                      id="cta-timeline"
                      name="timeline"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select timeline
                      </option>

                      {timelines.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* =============================================
                    CONDITIONAL QUESTIONS
                ============================================= */}

                <AnimatePresence mode="wait" initial={false}>
                  {extraFields.length > 0 && (
                    <motion.div
                      key={lookingFor}
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -4,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -4,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        {extraFields.map((field) => (
                          <FieldInput
                            key={field.name}
                            field={field}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* =============================================
                    MESSAGE
                ============================================= */}

                <div className="mt-6">
                  <label
                    htmlFor="cta-message"
                    className={labelClass}
                  >
                    Tell us more
                  </label>

                  <textarea
                    id="cta-message"
                    name="message"
                    rows={4}
                    placeholder="Briefly describe your requirement..."
                    className="
                      w-full resize-none rounded-xl
                      border border-[#c7d8d2]
                      bg-white/80 px-3.5 py-3
                      text-[12px] leading-5 text-ink
                      placeholder:text-muted/45
                      outline-none
                      transition-all duration-300
                      hover:border-[#9ebbb2]
                      focus:border-signal-dark
                      focus:bg-white
                      focus:ring-2 focus:ring-signal-dark/10
                    "
                  />
                </div>

                {/* =============================================
                    BOTTOM
                ============================================= */}

                <div className="mt-7 flex flex-col gap-5 border-t border-[#d8e2de] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="max-w-xl text-[10px] leading-4 text-[#607078]">
                      Share your requirement and our team will help identify
                      the right connected solution.
                    </p>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      group inline-flex h-11 w-full shrink-0
                      items-center justify-center gap-3
                      rounded-lg border border-[#081b24]
                      bg-[#081b24] px-6
                      text-[10px] font-semibold uppercase
                      tracking-[0.12em] !text-white
                      shadow-[0_10px_28px_rgba(8,27,36,0.12)]
                      transition-all duration-300
                      hover:border-[#007c67]
                      hover:bg-[#007c67]
                      hover:shadow-[0_14px_34px_rgba(0,124,103,0.15)]
                      sm:w-auto
                    "
                  >
                    <span className="!text-white">
                      Send enquiry
                    </span>

                    <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15 bg-white/[0.05]">
                      <ArrowIcon className="h-2.5 w-2.5 !text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </motion.button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}