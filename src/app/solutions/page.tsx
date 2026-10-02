"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Box,
  Camera,
  ChevronRight,
  Cpu,
  LockKeyhole,
  MapPinned,
  PackageSearch,
  Radio,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

import { CtaBand } from "@/components/home/CtaBand";
import { solutions } from "@/lib/solutions";

import { SolutionsScrolly } from "./_components/solutions-scrolly";

const ease = [0.16, 1, 0.3, 1] as const;

const solutionIcons = [
  Truck,
  Camera,
  LockKeyhole,
  PackageSearch,
  Radio,
  ShieldCheck,
  Cpu,
  Activity,
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
      <span
        className={`h-px w-8 ${
          dark ? "bg-[#27d59b]" : "bg-[#007c67]"
        }`}
      />

      <span
        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-[#27d59b]" : "text-[#007c67]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#081b24] text-white lg:min-h-[720px]">
        {/* Background system */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* Green atmosphere */}
          <div className="absolute -right-[12%] -top-[18%] h-[650px] w-[650px] rounded-full bg-[#27d59b]/[0.035] blur-3xl" />

          <div className="absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-[#007c67]/[0.08] blur-3xl" />

          {/* Technical rings */}
          <div className="absolute -right-[120px] top-[8%] h-[560px] w-[560px] rounded-full border border-white/[0.05]" />

          <div className="absolute -right-[35px] top-[16%] h-[390px] w-[390px] rounded-full border border-[#27d59b]/[0.1]" />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute right-[30px] top-[22%] h-[270px] w-[270px] rounded-full border border-white/[0.06]"
          >
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#27d59b]" />
          </motion.div>

          {/* Flow line */}
          <svg
            viewBox="0 0 1600 800"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <path
              d="M-100 590 C220 500 330 270 620 350 S980 690 1280 470 S1510 270 1720 330"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />

            <motion.path
              d="M-100 590 C220 500 330 270 620 350 S980 690 1280 470 S1510 270 1720 330"
              stroke="rgba(39,213,155,0.22)"
              strokeWidth="1"
              strokeDasharray="3 20"
              animate={{
                strokeDashoffset: [0, -220],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </svg>

          {/* Signal points */}
          <motion.span
            className="absolute left-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
            animate={{
              x: [0, 160, 320],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.span
            className="absolute right-[22%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
            animate={{
              y: [0, 90, 180],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5.5,
              delay: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:px-8 lg:min-h-[720px] lg:px-12 lg:pt-10">
          {/* Top */}
          <div className="flex items-center justify-between">
            <SectionLabel dark>Solutions</SectionLabel>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 sm:block">
              VIoT / Connected intelligence
            </span>
          </div>

          {/* Hero content */}
          <div className="grid grid-cols-1 items-end gap-14 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease }}
              className="relative z-10 lg:col-span-8"
            >
              <h1 className="max-w-5xl font-heading text-[clamp(3.4rem,7vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
                Technology that
                <br />
                <span className="font-normal text-[#27d59b]">
                  fits the operation.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Connected solutions built around the vehicles, assets, people
                and spaces that keep your business moving.
              </p>
            </motion.div>

            {/* Hero visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease }}
              className="relative hidden min-h-[300px] lg:col-span-4 lg:block"
            >
              <div className="absolute right-0 top-0 h-full w-px bg-white/[0.08]" />

              <div className="absolute right-10 top-1/2 -translate-y-1/2">
                <div className="relative h-[240px] w-[240px]">
                  <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
                  <div className="absolute inset-7 rounded-full border border-white/[0.06]" />
                  <div className="absolute inset-14 rounded-full border border-[#27d59b]/20" />

                  <div className="absolute left-1/2 top-0 h-full w-px bg-white/[0.06]" />
                  <div className="absolute left-0 top-1/2 h-px w-full bg-white/[0.06]" />

                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-5"
                  >
                    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#27d59b] shadow-[0_0_0_6px_rgba(39,213,155,0.08)]" />
                  </motion.div>

                  <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#27d59b]/30 bg-[#081b24]">
                    <span className="h-2 w-2 rounded-full bg-[#27d59b]" />
                  </div>

                  <div className="absolute -right-3 top-8 h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                  <div className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#27d59b]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-between border-t border-white/[0.1] pt-5"
          >
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/55">
                08 connected solutions
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#27d59b]">
              Explore
              <ArrowDownRight className="h-3.5 w-3.5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <section className="bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <SectionLabel>Solution ecosystem</SectionLabel>

              <h2 className="mt-6 max-w-5xl font-heading text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#081b24] sm:text-5xl lg:text-[64px]">
                One connected layer.
                <br />
                <span className="font-normal text-[#007c67]">
                  Built for real work.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:pb-1">
              <p className="max-w-md text-sm leading-7 text-[#081b24]/65 sm:text-base">
                From mobility and assets to security and connected spaces,
                choose the solution that fits your operation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          SOLUTION GRID
      ========================================================= */}
      <section className="bg-[#f4f6f2] pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                Explore
              </span>

              <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.035em] text-[#081b24] sm:text-3xl">
                Solutions for the field.
              </h3>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#007c67] sm:block">
              {String(solutions.length).padStart(2, "0")} solutions
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[index % solutionIcons.length];

              return (
                <motion.a
                  key={solution.slug}
                  href={`#solution-${solution.slug}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.045,
                    ease,
                  }}
                  whileHover={{ y: -5 }}
                  className="group relative min-h-[270px] overflow-hidden bg-white p-6 shadow-[0_8px_35px_rgba(8,27,36,0.035)] transition-shadow duration-500 hover:shadow-[0_24px_65px_rgba(8,27,36,0.1)] sm:p-7"
                >
                  {/* Hover background */}
                  <div className="pointer-events-none absolute inset-0 bg-[#27d59b]/[0.025] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Green edge */}
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#27d59b] transition-all duration-500 group-hover:w-full" />

                  <div className="relative flex h-full flex-col justify-between">
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center border border-[#007c67]/15 bg-[#f4f6f2] text-[#007c67] transition-all duration-500 group-hover:border-[#27d59b] group-hover:bg-[#27d59b] group-hover:text-[#081b24]">
                        <Icon className="h-[19px] w-[19px]" strokeWidth={1.7} />
                      </div>

                      <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#007c67]">
                        {solution.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-12">
                      <h4 className="font-heading text-xl font-semibold tracking-[-0.035em] text-[#081b24] sm:text-[21px]">
                        {solution.name}
                      </h4>

                      <p className="mt-3 max-w-[270px] text-sm leading-6 text-[#081b24]/65">
                        {solution.headline}
                      </p>
                    </div>

                    {/* Bottom */}
                    <div className="mt-8 flex items-center justify-between border-t border-[#007c67]/10 pt-4">
                      <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                        Explore
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center border border-[#007c67]/15 text-[#007c67] transition-all duration-300 group-hover:border-[#27d59b] group-hover:bg-[#27d59b] group-hover:text-[#081b24]">
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SOLUTION ARCHITECTURE
      ========================================================= */}
      <section className="relative bg-[#081b24]">
        <div className="mx-auto max-w-[1440px]">
          <div className="px-6 pb-10 pt-20 sm:px-8 lg:px-12 lg:pb-14 lg:pt-28">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <SectionLabel dark>How it connects</SectionLabel>

                <h3 className="mt-5 max-w-4xl font-heading text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[60px]">
                  From connected data
                  <br />
                  <span className="font-normal text-[#27d59b]">
                    to action.
                  </span>
                </h3>
              </div>

              <div className="lg:col-span-4">
                <p className="max-w-sm text-sm leading-7 text-white/60 lg:justify-self-end lg:text-right">
                  The right hardware, connectivity and intelligence work
                  together as one system.
                </p>
              </div>
            </div>
          </div>

          <SolutionsScrolly solutions={solutions} />
        </div>
      </section>

      {/* =========================================================
          CLOSING
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end"
          >
            <div className="lg:col-span-8">
              <SectionLabel>VIoT</SectionLabel>

              <h2 className="mt-6 max-w-5xl font-heading text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#081b24] sm:text-5xl lg:text-[64px]">
                Different operations.
                <br />
                <span className="font-normal text-[#007c67]">
                  One connected intelligence.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#081b24]/65">
                Connect the physical world to the information your teams need
                to make better operational decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}