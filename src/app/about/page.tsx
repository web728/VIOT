"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/home/CtaBand";

const values = [
  {
    num: "01",
    title: "Integrity",
    copy: "State what is ready, what is in development, and where the product is not the right fit.",
  },
  {
    num: "02",
    title: "Accountability",
    copy: "Own the path from hardware to platform instead of sending the customer between vendors.",
  },
  {
    num: "03",
    title: "Follow-through",
    copy: "Monitor deployed devices and stay available after installation—not only before payment.",
  },
];

const founders = [
  {
    name: "Bharat Kapur",
    role: "Co-Founder",
    email: "bharat@viot.tech",
    desc: "Leading core hardware architecture, firmware engineering, and end-to-end telemetry deployment standards across enterprise operations in India.",
  },
  {
    name: "Vyom Malik",
    role: "Business Head",
    email: "vyom@viot.tech",
    desc: "Driving strategic partnerships, go-to-market execution, client integrations, and vendor evaluation frameworks for large-scale logistics fleets.",
  },
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* =========================================================
          01 — HERO
      ========================================================= */}
      <PageHero
        breadcrumb="Company / Incorporated May 2026"
        title="A new company."
        titleHighlight="Not a new team."
        lede="VIoT Technologies LLP is headquartered in Noida and built on years in fleet technology, telematics, operations, go-to-market, vendor evaluation and compliance."
      />

      {/* =========================================================
          02 — WHY VIOT EXISTS
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            {/* Statement */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  01 / Why VIoT exists
                </span>
              </div>

              <blockquote className="max-w-3xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">
                “This industry trained customers to accept unreliable
                telematics data as normal.”
              </blockquote>

              <p className="mt-7 max-w-2xl text-base leading-7 text-[#607078]">
                Power cuts, tampering and remote zones are exactly when a
                fleet manager needs a signal — and exactly when cheap hardware
                drops it. We started VIoT to bridge that exact reliability
                gap.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#879399]">
                  Built for Indian road & network conditions
                </span>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5"
            >
              <div className="relative overflow-hidden border border-[#cdd5d2] bg-[#081b24]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/image/about.png"
                    alt="VIoT telematics and connected technology"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Quiet image treatment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/45 to-transparent" />

                  {/* Image label */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[#081b24]/75 px-5 py-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/50">
                        VIoT / Field technology
                      </span>

                      <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-[#27d59b]">
                        <span className="h-1.5 w-1.5 bg-[#27d59b]" />
                        Connected
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — WHAT WE VALUE
      ========================================================= */}
      <section className="border-b border-white/[0.08] bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-4"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                  02 / What we value
                </span>
              </div>

              <h2 className="max-w-sm font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-4xl">
                The way we build
                <br />
                <span className="font-normal text-white/40">
                  matters.
                </span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                Technology is only part of the relationship. We care about
                what happens before deployment, during implementation and long
                after the system goes live.
              </p>
            </motion.div>

            {/* Values */}
            <div className="lg:col-span-8">
              <div className="border-y border-white/[0.1]">
                {values.map((value, index) => (
                  <motion.div
                    key={value.num}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group grid grid-cols-1 gap-4 border-b border-white/[0.1] py-7 last:border-b-0 sm:grid-cols-[60px_180px_1fr] sm:items-start sm:gap-6 sm:py-8"
                  >
                    <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#27d59b]/70">
                      {value.num}
                    </span>

                    <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                      {value.title}
                    </h3>

                    <p className="max-w-xl text-sm leading-7 text-white/40 transition-colors duration-300 group-hover:text-white/65">
                      {value.copy}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — PEOPLE
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-1 gap-7 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  03 / The team
                </span>
              </div>

              <h2 className="font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">
                People behind
                <br />
                <span className="font-normal text-[#879399]">
                  the platform.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#607078] lg:ml-auto">
                Technical depth and commercial execution working together to
                solve real operational problems.
              </p>
            </div>
          </motion.div>

          {/* Team list */}
          <div className="mt-12 border-t border-[#cdd5d2]">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group grid grid-cols-1 gap-7 border-b border-[#cdd5d2] py-8 sm:grid-cols-[70px_230px_1fr_auto] sm:items-center sm:gap-8 sm:py-9"
              >
                {/* Number */}
                <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#a0aaae]">
                  0{index + 1}
                </span>

                {/* Name */}
                <div>
                  <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-[#081b24]">
                    {founder.name}
                  </h3>

                  <p className="mt-1 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                    {founder.role}
                  </p>
                </div>

                {/* Description */}
                <p className="max-w-xl text-sm leading-7 text-[#607078]">
                  {founder.desc}
                </p>

                {/* Contact */}
                <Link
                  href={`mailto:${founder.email}`}
                  className="group/mail inline-flex items-center gap-2 text-xs font-medium text-[#081b24] transition-colors hover:text-[#007c67]"
                >
                  <Mail
                    size={14}
                    strokeWidth={1.7}
                    className="text-[#007c67]"
                  />

                  <span>{founder.email}</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5"
                  />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — CLOSING STATEMENT
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                04 / The company
              </span>

              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-5xl">
                Build the system around
                <br />
                <span className="font-normal text-[#879399]">
                  the reality of the operation.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#607078]">
                VIoT brings hardware, telemetry, operational experience and
                commercial execution together under one connected approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — CTA
      ========================================================= */}
      <CtaBand />
    </main>
  );
}