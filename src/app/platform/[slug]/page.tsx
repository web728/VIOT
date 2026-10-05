import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon } from "@/components/icons";
import { getPlatformModule, platformModules } from "@/lib/platform-modules";

export const dynamicParams = false;

type PlatformDetailParams = {
  params: Promise<{ slug: string }>;
};

type Module = NonNullable<ReturnType<typeof getPlatformModule>>;

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
  const softGreen = dark ? "rgba(39,213,155,0.07)" : "rgba(0,124,103,0.06)";

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
        />

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
          stroke={dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.045)"}
          strokeWidth="1"
        />
      </svg>

      <div
        className={`absolute right-[3%] top-[10%] h-[420px] w-[420px] rounded-full border ${
          dark ? "border-white/[0.035]" : "border-[#081b24]/[0.045]"
        }`}
      />
      <div
        className={`absolute right-[9%] top-[17%] h-[285px] w-[285px] rounded-full border ${
          dark ? "border-[#27d59b]/[0.06]" : "border-[#007c67]/[0.06]"
        }`}
      />
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

function HeroSignalVisual({ module }: { module: Module }) {
  const items = module.capabilities.slice(0, 4);

  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="absolute inset-6 rounded-full border border-[#27d59b]/10" />
      <div className="absolute inset-14 rounded-full border border-white/[0.05]" />

      <div className="relative rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
          <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
            {module.name}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
        </div>

        <div className="mt-4 space-y-2.5">
          {items.map((item, index) => (
            <div
              key={item}
              className="grid grid-cols-[28px_1fr_auto] items-center gap-3 rounded-xl border border-white/[0.07] bg-[#0a2029]/90 px-3.5 py-3"
            >
              <span className="font-mono text-[8px] text-[#27d59b]">
                0{index + 1}
              </span>
              <span className="text-[11px] leading-5 text-white/68">{item}</span>
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-4 w-4 rounded-full border border-[#27d59b]/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
              </span>
            </div>
          ))}
        </div>

        <div className="relative mt-5 h-16 overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.018]">
          <svg
            viewBox="0 0 420 64"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 44 C82 8 145 56 214 30 S334 8 420 28"
              stroke="rgba(39,213,155,0.22)"
              strokeWidth="1.1"
              strokeDasharray="3 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-120"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>
    </div>
  );
}

function EngineVisual({
  module,
  engineTitle,
}: {
  module: Module;
  engineTitle: string;
}) {
  const inputs = module.signals.slice(0, 4);
  const outputs = module.outcomes.slice(0, 3);

  return (
    <div className="relative mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_18px_55px_rgba(8,27,36,0.055)]">
      <div className="grid gap-0 lg:grid-cols-[1fr_0.88fr_1fr]">
        <div className="divide-y divide-[#d8e2de] border-b border-[#d8e2de] lg:border-b-0 lg:border-r">
          {inputs.map((item, index) => (
            <div key={item} className="flex items-center gap-3 px-5 py-4 sm:px-6">
              <span className="font-mono text-[8px] text-[#007c67]">
                0{index + 1}
              </span>
              <span className="text-[12px] leading-5 text-[#26373e]">{item}</span>
            </div>
          ))}
        </div>

        <div className="relative flex min-h-[190px] items-center justify-center overflow-hidden bg-[#081b24] px-6 py-8 text-center text-white">
          <svg
            viewBox="0 0 300 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M-20 40 C60 40 72 110 150 110"
              stroke="rgba(39,213,155,0.28)"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-120"
                dur="7s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M-20 180 C60 180 72 110 150 110"
              stroke="rgba(39,213,155,0.18)"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-120"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M150 110 C220 110 232 58 320 58"
              stroke="rgba(39,213,155,0.26)"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-120"
                dur="7.5s"
                repeatCount="indefinite"
              />
            </path>
            <path
              d="M150 110 C220 110 232 164 320 164"
              stroke="rgba(39,213,155,0.18)"
              strokeWidth="1.2"
              strokeDasharray="3 12"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-120"
                dur="8.5s"
                repeatCount="indefinite"
              />
            </path>
          </svg>

          <div className="relative z-10 rounded-xl border border-[#27d59b]/20 bg-[#27d59b]/[0.055] px-5 py-4">
            <p className="font-heading text-lg font-semibold tracking-[-0.025em]">
              {engineTitle}
            </p>
          </div>
        </div>

        <div className="divide-y divide-[#d8e2de] border-t border-[#d8e2de] lg:border-l lg:border-t-0">
          {outputs.map((item, index) => (
            <div key={item} className="flex items-center gap-3 px-5 py-4 sm:px-6">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#27d59b]" />
              <span className="text-[12px] leading-5 text-[#26373e]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClientSolutionPage({ module }: { module: Module }) {
  const content = module.solutionContent;

  if (!content) return null;

  return (
    <>
      <section className="relative min-h-[590px] overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          <SectionLabel dark>{module.name}</SectionLabel>

          <div className="grid items-center gap-12 py-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
                {module.number}
              </span>

              <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                {module.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/64 sm:text-[15px]">
                {module.lede}
              </p>
            </div>

            <div className="lg:col-span-5">
              <HeroSignalVisual module={module} />
            </div>
          </div>

          <div className="border-t border-white/[0.09] pt-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/35">
              {module.name}
            </span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>02</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.problemTitle}
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-7">
              {content.problemParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-3xl text-sm leading-7 text-[#607078]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>03</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.coversTitle}
          </h2>

          <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f8faf8]">
            <div className="hidden grid-cols-[1fr_1.35fr_1.35fr] border-b border-[#d8e2de] bg-white px-6 py-4 md:grid">
              {["Capability", "What it does", "What it changes on the ground"].map(
                (heading) => (
                  <span
                    key={heading}
                    className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#007c67]"
                  >
                    {heading}
                  </span>
                ),
              )}
            </div>

            <div className="divide-y divide-[#d8e2de]">
              {content.capabilityRows.map((row) => (
                <div
                  key={row.name}
                  className="grid gap-4 px-5 py-5 md:grid-cols-[1fr_1.35fr_1.35fr] md:px-6"
                >
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.025em]">
                    {row.name}
                  </h3>

                  <p className="text-[13px] leading-6 text-[#607078]">
                    {row.whatItDoes}
                  </p>

                  <p className="text-[13px] leading-6 text-[#26373e]">
                    {row.whatItChanges}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {content.capabilityClosing ? (
            <p className="mt-6 max-w-4xl text-sm leading-7 text-[#607078]">
              {content.capabilityClosing}
            </p>
          ) : null}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>04</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.differenceTitle}
          </h2>

          <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
            <div className="divide-y divide-white/[0.08]">
              {content.differences.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[70px_0.9fr_1.55fr]"
                >
                  <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-[#27d59b]">
                    4.{index + 1}
                  </span>

                  <h3 className="font-heading text-xl font-semibold tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-6 text-white/58">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>05</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.engineTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineCaption}
          </p>

          <EngineVisual module={module} engineTitle={content.engineTitle} />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineText}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>06</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.proofTitle}
          </h2>

          <div className="mt-6 max-w-4xl space-y-5">
            {content.proofParagraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-sm leading-7 text-[#607078]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>07</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.supportTitle}
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-7">
              {content.supportParagraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-7 text-white/58"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>08 / Contact / Enquiry</SectionLabel>

          <div className="mt-6 rounded-2xl border border-[#c8d5d0] bg-white px-6 py-8 shadow-[0_16px_45px_rgba(8,27,36,0.05)] sm:px-8 lg:flex lg:items-end lg:justify-between lg:gap-8">
            <div>
              <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {content.ctaHeading}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#607078]">
                {content.ctaSubheading}
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-7 inline-flex h-11 shrink-0 items-center gap-3 rounded-lg border border-[#27d59b] bg-[#27d59b] px-5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white lg:mt-0"
            >
              {content.ctaHeading}
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function FleetIntelligencePage({ module }: { module: Module }) {
  const content = module.fleetIntelligence;

  if (!content) return null;

  return (
    <>
      <section className="relative min-h-[590px] overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          <SectionLabel dark>Fleet Intelligence</SectionLabel>

          <div className="grid items-center gap-12 py-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="max-w-4xl font-heading text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                {module.headline}
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/64 sm:text-[15px]">
                {module.lede}
              </p>
            </div>

            <div className="lg:col-span-5">
              <HeroSignalVisual module={module} />
            </div>
          </div>

          <div className="border-t border-white/[0.09] pt-4">
            <Link
              href={content.productHref}
              className="group inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-[#27d59b]"
            >
              Vehicle Telematics
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>02</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.problemTitle}
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-7">
              {content.problemParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-[#607078]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>03 / What Fleet Intelligence Actually Covers</SectionLabel>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.coversIntro}
          </p>

          <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f8faf8]">
            <div className="hidden grid-cols-[1fr_1.35fr_1.35fr] border-b border-[#d8e2de] bg-white px-6 py-4 md:grid">
              {["Capability", "What it does", "What it changes on the ground"].map(
                (heading) => (
                  <span
                    key={heading}
                    className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#007c67]"
                  >
                    {heading}
                  </span>
                ),
              )}
            </div>

            <div className="divide-y divide-[#d8e2de]">
              {content.capabilityRows.map((row) => (
                <div
                  key={row.name}
                  className="grid gap-4 px-5 py-5 md:grid-cols-[1fr_1.35fr_1.35fr] md:px-6"
                >
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.025em]">
                    {row.name}
                  </h3>
                  <p className="text-[13px] leading-6 text-[#607078]">
                    {row.whatItDoes}
                  </p>
                  <p className="text-[13px] leading-6 text-[#26373e]">
                    {row.whatItChanges}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-[#607078]">
            {content.capabilityClosing}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>04 / {content.differenceTitle}</SectionLabel>

          <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
            <div className="divide-y divide-white/[0.08]">
              {content.differences.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-4 p-5 sm:p-6 lg:grid-cols-[70px_0.9fr_1.55fr]"
                >
                  <span className="font-mono text-[8px] font-semibold tracking-[0.16em] text-[#27d59b]">
                    4.{index + 1}
                  </span>

                  <h3 className="font-heading text-xl font-semibold tracking-[-0.025em]">
                    {item.title}
                  </h3>

                  <p className="text-[13px] leading-6 text-white/58">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>05</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.engineTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineCaption}
          </p>

          <EngineVisual module={module} engineTitle={content.engineTitle} />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineText}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>06 / {content.proofTitle}</SectionLabel>

          <div className="mt-6 max-w-4xl space-y-5">
            {content.proofParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-[#607078]">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>07</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.supportTitle}
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-7">
              {content.supportParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-white/58">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>08 / Contact / Enquiry</SectionLabel>

          <div className="mt-6 rounded-2xl border border-[#c8d5d0] bg-white px-6 py-8 shadow-[0_16px_45px_rgba(8,27,36,0.05)] sm:px-8 lg:flex lg:items-end lg:justify-between lg:gap-8">
            <div>
              <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
                {content.ctaHeading}
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#607078]">
                {content.ctaSubheading}
              </p>
            </div>

            <Link
              href="/contact"
              className="group mt-7 inline-flex h-11 shrink-0 items-center gap-3 rounded-lg border border-[#27d59b] bg-[#27d59b] px-5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white lg:mt-0"
            >
              {content.ctaHeading}
              <ArrowIcon className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function GenericModulePage({ module }: { module: Module }) {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:px-8 lg:px-12">
          <SectionLabel dark>{module.name}</SectionLabel>

          <div className="max-w-4xl py-14">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
              {module.number}
            </span>

            <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.7rem,5vw,5.15rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              {module.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px]">
              {module.lede}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white">
            <div className="divide-y divide-[#d8e2de]">
              {module.capabilities.map((item, index) => (
                <div
                  key={item}
                  className="grid gap-3 px-5 py-4 sm:grid-cols-[42px_1fr] sm:px-6"
                >
                  <span className="font-mono text-[8px] text-[#007c67]">
                    0{index + 1}
                  </span>
                  <span className="text-[13px] leading-6 text-[#26373e]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default async function PlatformDetailPage({
  params,
}: PlatformDetailParams) {
  const { slug } = await params;
  const module = getPlatformModule(slug);

  if (!module) notFound();

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {module.fleetIntelligence ? (
        <FleetIntelligencePage module={module} />
      ) : module.solutionContent ? (
        <ClientSolutionPage module={module} />
      ) : (
        <GenericModulePage module={module} />
      )}
    </main>
  );
}
