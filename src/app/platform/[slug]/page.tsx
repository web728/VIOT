import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon, CheckIcon } from "@/components/icons";
import { CtaBand } from "@/components/home/CtaBand";
import {
  getPlatformModule,
  platformModules,
} from "@/lib/platform-modules";

export const dynamicParams = false;

type PlatformDetailParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return platformModules.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PlatformDetailParams): Promise<Metadata> {
  const { slug } = await params;
  const module = getPlatformModule(slug);

  if (!module) return {};

  return {
    title: `${module.name} | VIoT Platform`,
    description: module.lede,
    alternates: {
      canonical: `/platform/${slug}`,
    },
  };
}

function VIoTBackground({ dark = false }: { dark?: boolean }) {
  const line = dark ? "rgba(255,255,255,0.05)" : "rgba(8,27,36,0.07)";
  const green = dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.12)";
  const softGreen = dark
    ? "rgba(39,213,155,0.07)"
    : "rgba(0,124,103,0.06)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute -left-48 top-[10%] h-[500px] w-[500px] rounded-full blur-3xl ${
          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.022]"
        }`}
      />

      <div
        className={`absolute -right-56 bottom-[5%] h-[620px] w-[620px] rounded-full blur-3xl ${
          dark ? "bg-white/[0.012]" : "bg-[#081b24]/[0.022]"
        }`}
      />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke={line}
          strokeWidth="1"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset="1"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="1"
            to="0"
            dur="2.4s"
            fill="freeze"
          />
        </path>

        <path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke={green}
          strokeWidth="1.2"
          strokeDasharray="3 15"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-180"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke={softGreen}
          strokeWidth="1"
          strokeDasharray="2 20"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;180"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={line}
          strokeOpacity="0.65"
          strokeWidth="1"
        />
      </svg>

      <div className="absolute right-[4%] top-[12%] h-[420px] w-[420px] rounded-full border border-white/[0.035]">
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <g>
            <circle cx="50" cy="1.4" r="1.1" fill="#27d59b" opacity="0.65" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="60s"
              repeatCount="indefinite"
            />
          </g>
        </svg>
      </div>

      <div className="absolute right-[9%] top-[18%] h-[290px] w-[290px] rounded-full border border-[#27d59b]/[0.055]" />

      <span className="absolute left-[19%] top-[31%] h-1.5 w-1.5 rounded-full bg-[#27d59b] opacity-60" />
      <span className="absolute left-[46%] top-[69%] h-1.5 w-1.5 rounded-full bg-[#27d59b] opacity-45" />
      <span className="absolute right-[18%] top-[38%] h-1.5 w-1.5 rounded-full bg-[#27d59b] opacity-55" />
    </div>
  );
}

function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-8 ${dark ? "bg-[#27d59b]" : "bg-[#007c67]"}`} />
      <span
        className={`font-mono text-[8px] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-[#27d59b]" : "text-[#007c67]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

export default async function PlatformDetailPage({
  params,
}: PlatformDetailParams) {
  const { slug } = await params;
  const module = getPlatformModule(slug);

  if (!module) notFound();

  const related = platformModules
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {/* HERO */}
      <section className="relative min-h-[560px] overflow-hidden bg-[#081b24] text-white sm:min-h-[600px]">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-between px-6 pb-7 pt-8 sm:min-h-[600px] sm:px-8 lg:px-12 lg:pt-10">
          <div className="flex items-center justify-between">
            <SectionLabel dark>Platform / {module.name}</SectionLabel>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 sm:block">
              VIoT / Connected intelligence
            </span>
          </div>

          <div className="max-w-4xl py-14 sm:py-16">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
              {module.number} / {module.eyebrow}
            </span>

            <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.7rem,5vw,5.15rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
              {module.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px]">
              {module.lede}
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.09] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/35">
              {module.name}
            </span>

            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.17em] text-[#27d59b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
              Connected operations
            </span>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionLabel>{module.number} / Module overview</SectionLabel>

              <h2 className="mt-5 max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                One operating layer.
                <br />
                <span className="font-normal text-[#007c67]">
                  Built around the event.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#607078]">
                {module.description}
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/80 shadow-[0_16px_45px_rgba(8,27,36,0.05)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-[#d8e2de] px-5 py-4 sm:px-6">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                    Core capabilities
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#607078]">
                    {String(module.capabilities.length).padStart(2, "0")} points
                  </span>
                </div>

                <div className="divide-y divide-[#d8e2de]">
                  {module.capabilities.map((item, index) => (
                    <div
                      key={item}
                      className="grid gap-3 px-5 py-4 sm:grid-cols-[36px_24px_1fr] sm:items-start sm:px-6"
                    >
                      <span className="font-mono text-[8px] font-semibold tracking-[0.15em] text-[#9aa5a1]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-5 w-5 items-center justify-center rounded-md border border-[#007c67]/15 bg-[#007c67]/[0.035] text-[#007c67]">
                        <CheckIcon />
                      </span>

                      <span className="text-[13px] font-medium leading-6 text-[#26373e]">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATA PATH */}
      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel dark>Connected data path</SectionLabel>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                From field signal
                <br />
                <span className="font-normal text-[#27d59b]">
                  to operating context.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/48 lg:ml-auto">
                The module connects the signal, its context and the action that follows.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
            <div className="grid md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Signals",
                  items: module.signals,
                },
                {
                  number: "02",
                  title: "Platform",
                  items: [
                    "Connected data layer",
                    "Operational context",
                    "Event history",
                    "Exception visibility",
                  ],
                },
                {
                  number: "03",
                  title: "Outcomes",
                  items: module.outcomes,
                },
              ].map((group, index) => (
                <div
                  key={group.number}
                  className={`p-5 sm:p-6 ${
                    index !== 2
                      ? "border-b border-white/[0.08] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[8px] font-semibold tracking-[0.18em] text-[#27d59b]">
                    {group.number}
                  </span>

                  <h3 className="mt-6 font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                    {group.title}
                  </h3>

                  <div className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-[12px] leading-5 text-white/55"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#27d59b]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="relative overflow-hidden bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Platform modules</SectionLabel>

              <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl">
                More from the{" "}
                <span className="text-[#007c67]">VIoT platform.</span>
              </h2>
            </div>

            <Link
              href="/platform"
              className="group inline-flex h-10 w-fit items-center gap-2 rounded-lg border border-[#c7d5d0] bg-white px-4 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:border-[#007c67]/30 hover:text-[#007c67]"
            >
              View platform
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f8faf8]">
            <div className="divide-y divide-[#d8e2de]">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/platform/${item.slug}`}
                  className="group grid gap-3 px-5 py-5 transition-colors duration-300 hover:bg-white sm:grid-cols-[55px_1fr_auto] sm:items-center sm:px-6"
                >
                  <span className="font-mono text-[8px] font-semibold tracking-[0.18em] text-[#007c67]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-heading text-lg font-semibold tracking-[-0.025em] text-[#081b24]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[12px] leading-5 text-[#607078]">
                      {item.eyebrow}
                    </p>
                  </div>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c7d5d0] bg-white text-[#081b24] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">
                    <ArrowIcon className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
