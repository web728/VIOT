"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { ArrowIcon } from "@/components/icons";
import { HeroVisual } from "./HeroVisual";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Content */}
          <motion.div
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-signal-dark" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Fleet · Asset · Access Intelligence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[42px] font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[64px]"
            >
              Intelligence for
              <br />
              <span className="text-signal-dark">
                everything that moves.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-lg text-base leading-7 text-muted sm:text-[17px]"
            >
              Track vehicles, understand assets and control access through
              connected technology built around real-world operations.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
        <Link
  href="/contact"
  className="group inline-flex h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-semibold !text-white transition-colors hover:bg-ink-2"
>
  Start a conversation
  <ArrowIcon className="h-3.5 w-3.5 !text-white transition-transform duration-300 group-hover:translate-x-1" />
</Link>

              <Link
                href="/platform"
                className="inline-flex h-11 items-center justify-center border border-line px-5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-white"
              >
                Explore the platform
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-10 grid max-w-md grid-cols-3 border-t border-line pt-5"
            >
              <div>
                <span className="font-heading text-xl font-semibold">
                  Fleet
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Intelligence
                </p>
              </div>

              <div className="border-l border-line pl-4">
                <span className="font-heading text-xl font-semibold">
                  Asset
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Intelligence
                </p>
              </div>

              <div className="border-l border-line pl-4">
                <span className="font-heading text-xl font-semibold">
                  Access
                </span>
                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-muted">
                  Control
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Bottom technical strip */}
      <div className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
            Connected operations infrastructure
          </span>

          <div className="flex items-center gap-5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            <span>Vehicles</span>
            <span className="h-1 w-1 bg-signal" />
            <span>Assets</span>
            <span className="h-1 w-1 bg-signal" />
            <span>Access</span>
          </div>
        </div>
      </div>
    </section>
  );
}