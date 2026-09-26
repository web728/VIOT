"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserRound, ArrowUpRight, Mail } from "lucide-react";

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
    <main className="overflow-hidden bg-[#f4f7f6] text-[#081b24] selection:bg-emerald-300 selection:text-[#081b24]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        breadcrumb="Company / Incorporated May 2026"
        title="A new company."
        titleHighlight="Not a new team."
        lede="VIoT Technologies LLP is headquartered in Noida and built on years in fleet technology, telematics, operations, go-to-market, vendor evaluation and compliance."
      />

     <section className="relative overflow-hidden border-b border-slate-200/80 bg-white py-24 sm:py-28 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">

            {/* LEFT — Manifesto Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full inline-block">
                Why VIoT Exists
              </span>

              <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight text-slate-900 leading-[1.2]">
                “This industry trained customers to accept unreliable telematics data as normal. We built VIoT to change that—
                <span className="text-emerald-600"> once and for all.</span>”
              </blockquote>

              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-sans max-w-2xl">
                Power cuts, tampering and remote zones are exactly when a fleet manager needs a signal — and exactly when cheap hardware drops it. We started VIoT to bridge that exact reliability gap.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <span className="h-px w-10 bg-emerald-500" />
                <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  Built for Indian Road &amp; Network Conditions
                </span>
              </div>
            </motion.div>

            {/* RIGHT — Premium Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-[32px] blur-2xl pointer-events-none" />

                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl">
                  <Image
                    src="/image/about.png"
                    alt="VIoT telematics device and live tracking ecosystem"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-slate-950/80 px-4 py-3 backdrop-blur-xl">
                      <div>
                        <p className="text-xs font-bold text-white">VIoT Hardware Architecture</p>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">Zero-Drop Firmware Core</p>
                      </div>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-slate-950 font-bold text-xs shadow-md">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          VALUES
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#182f38] bg-[#081b24] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-400" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  What We Value
                </span>
              </div>

              <h2 className="max-w-sm text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                The way we build matters.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                Technology is only part of the relationship. We care about
                what happens before deployment, during implementation and long
                after the system goes live.
              </p>
            </motion.div>

            {/* Values list */}
            <div className="lg:col-span-8">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {values.map((value, index) => (
                  <motion.div
                    key={value.num}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group grid gap-5 py-8 sm:grid-cols-[72px_190px_1fr] sm:items-start"
                  >
                    <span className="text-xs font-medium tracking-[0.12em] text-emerald-400/80">
                      {value.num}
                    </span>

                    <h3 className="text-lg font-medium tracking-[-0.015em] text-white">
                      {value.title}
                    </h3>

                    <p className="max-w-xl text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70">
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
          FOUNDERS / TEAM
      ========================================================= */}
      <section className="border-b border-[#dce5e2] bg-[#f4f7f6]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-emerald-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  The Team
                </span>
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-[#081b24] sm:text-4xl lg:text-[48px]">
                People behind the platform.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-500 lg:text-right">
              Technical depth and commercial execution working together to
              solve real operational problems.
            </p>
          </motion.div>

          {/* Team */}
          <div className="grid gap-5 lg:grid-cols-2">
            {founders.map((founder, index) => (
              <motion.article
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-[24px] border border-[#d7e2de] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#bfd0c9]"
              >
                {/* top accent */}
                <div className="h-1 w-full bg-emerald-500/80" />

                <div className="p-7 sm:p-9">
                  {/* Profile row */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-5">
                      {/* USER ICON */}
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d4e0dc] bg-[#f2f7f5] text-emerald-600">
                        <UserRound
                          size={27}
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-[-0.025em] text-[#081b24]">
                          {founder.name}
                        </h3>

                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600">
                          {founder.role}
                        </p>
                      </div>
                    </div>

                    {/* number */}
                    <span className="text-xs font-medium text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-7 h-px bg-[#e7eeeb]" />

                  {/* Description */}
                  <p className="max-w-xl text-[14px] leading-7 text-slate-600">
                    {founder.desc}
                  </p>

                  {/* Contact */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <Link
                      href={`mailto:${founder.email}`}
                      className="group/mail inline-flex items-center gap-2 text-sm font-medium text-[#081b24] transition-colors hover:text-emerald-600"
                    >
                      <Mail
                        size={15}
                        strokeWidth={1.7}
                        className="text-emerald-600"
                      />
                      {founder.email}
                    </Link>

                    <Link
                      href={`mailto:${founder.email}`}
                      aria-label={`Contact ${founder.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d7e2de] text-[#081b24] transition-all duration-300 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white"
                    >
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}
      <CtaBand />
    </main>
  );
}