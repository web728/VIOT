import type { Metadata } from "next";

import type { ReactNode } from "react";

import Link from "next/link";

import { notFound } from "next/navigation";

import { PlatformSectionNav } from "./_components/platform-section-nav";
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

          {items.map((item) => (

            <div

              key={item}

              className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-white/[0.07] bg-[#0a2029]/90 px-3.5 py-3"

            >

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

function DecisionNode({

  children,

  tone = "default",

  className = "",

}: {

  children: ReactNode;

  tone?: "default" | "success" | "alert" | "decision";

  className?: string;

}) {

  const toneClass =

    tone === "success"

      ? "border-[#27d59b]/45 bg-[#27d59b]/[0.08] text-[#081b24]"

      : tone === "alert"

        ? "border-[#b85b5b]/35 bg-[#b85b5b]/[0.055] text-[#081b24]"

        : tone === "decision"

          ? "border-[#007c67]/25 bg-white text-[#081b24]"

          : "border-[#c8d5d0] bg-white text-[#081b24]";

  return (

    <div

      className={`relative z-10 flex min-h-[64px] items-center justify-center rounded-xl border px-4 py-3 text-center shadow-[0_8px_24px_rgba(8,27,36,0.04)] ${toneClass} ${className}`}

    >

      <span className="text-[12px] font-semibold leading-5">{children}</span>

    </div>

  );

}

function DecisionDiamond({

  children,

}: {

  children: ReactNode;

}) {

  return (

    <div className="relative z-10 flex h-[84px] w-[84px] items-center justify-center">

      <div className="absolute inset-[12px] rotate-45 rounded-[10px] border border-[#007c67]/25 bg-white shadow-[0_8px_24px_rgba(8,27,36,0.04)]" />

      <span className="relative z-10 max-w-[66px] text-center text-[10px] font-semibold leading-4 text-[#081b24]">

        {children}

      </span>

    </div>

  );

}

function LoadWeightDecisionVisual() {

  return (

    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-6 lg:p-8">

      <div className="hidden lg:block">

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr] items-center">

          <DecisionNode>Load Placed</DecisionNode>

          <div className="h-px bg-[#007c67]/20" />

          <DecisionNode>

            Weight Check

            <br />

            Total + Axle

          </DecisionNode>

          <div className="h-px bg-[#007c67]/20" />

          <DecisionDiamond>Within Limits?</DecisionDiamond>

          <div className="relative h-px bg-[#007c67]/20">

            <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">

              within limits

            </span>

          </div>

          <DecisionNode tone="success">Cleared to Depart</DecisionNode>

        </div>

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr]">

          <div />

          <div />

          <div />

          <div />

          <div className="flex justify-center">

            <div className="h-12 w-px bg-[#007c67]/20" />

          </div>

          <div />

          <div className="pt-4">

            <DecisionNode tone="success">Logged. Departed.</DecisionNode>

          </div>

        </div>

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr]">

          <div />

          <div />

          <div />

          <div />

          <div className="relative flex justify-center">

            <span className="absolute top-1 font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">

              over limit

            </span>

            <div className="mt-5 h-10 w-px bg-[#007c67]/20" />

          </div>

          <div />

          <div />

        </div>

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr]">

          <div />

          <div />

          <div />

          <div className="col-span-3 flex justify-center">

            <DecisionNode tone="alert" className="w-[190px]">

              Overload Flagged

              <br />

              Held for Reload

            </DecisionNode>

          </div>

          <div />

        </div>

      </div>

      <div className="space-y-3 lg:hidden">

        <DecisionNode>Load Placed</DecisionNode>

        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />

        <DecisionNode>

          Weight Check

          <br />

          Total + Axle

        </DecisionNode>

        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />

        <div className="flex justify-center">

          <DecisionDiamond>Within Limits?</DecisionDiamond>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          <div>

            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">

              within limits

            </p>

            <DecisionNode tone="success">Cleared to Depart</DecisionNode>

            <div className="mx-auto h-5 w-px bg-[#007c67]/20" />

            <DecisionNode tone="success">Logged. Departed.</DecisionNode>

          </div>

          <div>

            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">

              over limit

            </p>

            <DecisionNode tone="alert">

              Overload Flagged

              <br />

              Held for Reload

            </DecisionNode>

          </div>

        </div>

      </div>

    </div>

  );

}

function IndustrialAutomationDecisionVisual() {

  return (

    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-6 lg:p-8">

      <div className="hidden lg:block">

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr] items-center">

          <DecisionNode>Asset Moves</DecisionNode>

          <div className="h-px bg-[#007c67]/20" />

          <DecisionNode>

            Location +<br />

            Zone Check

          </DecisionNode>

          <div className="h-px bg-[#007c67]/20" />

          <DecisionDiamond>Authorized?</DecisionDiamond>

          <div className="relative h-px bg-[#007c67]/20">

            <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">

              authorized

            </span>

          </div>

          <DecisionNode tone="success">Tracked Normally</DecisionNode>

        </div>

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr]">

          <div />

          <div />

          <div />

          <div />

          <div className="flex justify-center">

            <div className="h-12 w-px bg-[#007c67]/20" />

          </div>

          <div />

          <div className="pt-4">

            <DecisionNode tone="success">Logged. Updated.</DecisionNode>

          </div>

        </div>

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr]">

          <div />

          <div />

          <div />

          <div />

          <div className="relative flex justify-center">

            <span className="absolute top-1 font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">

              unauthorized

            </span>

            <div className="mt-5 h-10 w-px bg-[#007c67]/20" />

          </div>

          <div />

          <div />

        </div>

        <div className="grid grid-cols-[1fr_48px_1.15fr_48px_96px_48px_1fr]">

          <div />

          <div />

          <div />

          <div className="col-span-3 flex justify-center">

            <DecisionNode tone="alert" className="w-[190px]">

              Unauthorized

              <br />

              Movement Alert

            </DecisionNode>

          </div>

          <div />

        </div>

      </div>

      <div className="space-y-3 lg:hidden">

        <DecisionNode>Asset Moves</DecisionNode>

        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />

        <DecisionNode>

          Location +<br />

          Zone Check

        </DecisionNode>

        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />

        <div className="flex justify-center">

          <DecisionDiamond>Authorized?</DecisionDiamond>

        </div>

        <div className="grid gap-3 sm:grid-cols-2">

          <div>

            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">

              authorized

            </p>

            <DecisionNode tone="success">Tracked Normally</DecisionNode>

            <div className="mx-auto h-5 w-px bg-[#007c67]/20" />

            <DecisionNode tone="success">Logged. Updated.</DecisionNode>

          </div>

          <div>

            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">

              unauthorized

            </p>

            <DecisionNode tone="alert">

              Unauthorized

              <br />

              Movement Alert

            </DecisionNode>

          </div>

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

function SolutionEngineVisual({

  module,

  engineTitle,

}: {

  module: Module;

  engineTitle: string;

}) {

  if (module.slug === "load-weight-analytics") {

    return <LoadWeightDecisionVisual />;

  }

  if (module.slug === "industrial-automation") {
    return <IndustrialAutomationDecisionVisual />;
  }

  if (module.slug === "e-lock") {
    return <SafeLogisticsVisual />;
  }

  if (module.slug === "video") {
    return <VideoIntelligenceVisual module={module} />;
  }

  return <EngineVisual module={module} engineTitle={engineTitle} />;

}

function InlineSectionLinks({ text }: { text: string }) {
  const parts = text.split(/(\(?Section [2-8]\)?)/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\(?(Section ([2-8]))\)?$/);

        if (!match) {
          return <span key={`${part}-${index}`}>{part}</span>;
        }

        const section = match[2];

        return (
          <a
            key={`${part}-${index}`}
            href={`#section-${section.padStart(2, "0")}`}
            className="font-medium text-[#007c67] underline decoration-[#007c67]/25 underline-offset-2 transition-colors hover:text-[#081b24]"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

function SectionNav() {
  return (
    <PlatformSectionNav
      items={[
        { number: "01", label: "Overview", id: "section-01" },
        { number: "02", label: "Problem", id: "section-02" },
        { number: "03", label: "Coverage", id: "section-03" },
        { number: "04", label: "Difference", id: "section-04" },
        { number: "05", label: "Engine", id: "section-05" },
        { number: "06", label: "Proof", id: "section-06" },
        { number: "07", label: "Built to Last", id: "section-07" },
        { number: "08", label: "Enquiry", id: "section-08" },
      ]}
    />
  );
}

function SafeLogisticsVisual() {
  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-6 lg:p-8">
      <div className="hidden lg:block">
        <div className="grid grid-cols-[1fr_44px_1fr_44px_1fr] items-center">
          <DecisionNode>Lock engages at loading</DecisionNode>
          <div className="h-px bg-[#007c67]/20" />
          <DecisionNode>Stays armed through transit</DecisionNode>
          <div className="h-px bg-[#007c67]/20" />
          <DecisionDiamond>Unlock event</DecisionDiamond>
        </div>

        <div className="grid grid-cols-[1fr_44px_1fr_44px_1fr]">
          <div />
          <div />
          <div />
          <div />
          <div className="flex justify-center">
            <div className="h-10 w-px bg-[#007c67]/20" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">
              declared destination
            </p>
            <DecisionNode tone="success">
              Unlock at declared destination
              <br />
              closes the trip normally
            </DecisionNode>
          </div>

          <div>
            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">
              anywhere else
            </p>
            <DecisionNode tone="alert">
              Treated as tamper
              <br />
              alerts ops in real time
            </DecisionNode>
          </div>
        </div>
      </div>

      <div className="space-y-3 lg:hidden">
        <DecisionNode>Lock engages at loading</DecisionNode>
        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />
        <DecisionNode>Stays armed through transit</DecisionNode>
        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />
        <div className="flex justify-center">
          <DecisionDiamond>Unlock event</DecisionDiamond>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">
              declared destination
            </p>
            <DecisionNode tone="success">
              Unlock at declared destination
              <br />
              closes the trip normally
            </DecisionNode>
          </div>

          <div>
            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">
              anywhere else
            </p>
            <DecisionNode tone="alert">
              Treated as tamper
              <br />
              alerts ops in real time
            </DecisionNode>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoIntelligenceVisual({ module }: { module: Module }) {
  const inputs = module.signals.slice(0, 3);
  const outputs = module.outcomes.slice(0, 3);

  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_18px_55px_rgba(8,27,36,0.055)]">
      <div className="grid lg:grid-cols-[1fr_0.85fr_1fr]">
        <div className="divide-y divide-[#d8e2de] border-b border-[#d8e2de] lg:border-b-0 lg:border-r">
          {inputs.map((item) => (
            <div key={item} className="px-5 py-5 text-[12px] font-medium leading-5 text-[#26373e] sm:px-6">
              {item}
            </div>
          ))}
        </div>

        <div className="relative flex min-h-[210px] items-center justify-center overflow-hidden bg-[#081b24] px-6 py-8">
          <svg
            viewBox="0 0 300 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <path d="M-10 42 C90 42 92 110 150 110" stroke="rgba(39,213,155,0.26)" strokeWidth="1.2" strokeDasharray="3 12">
              <animate attributeName="stroke-dashoffset" values="0;-120" dur="7s" repeatCount="indefinite" />
            </path>
            <path d="M-10 110 C80 110 95 110 150 110" stroke="rgba(39,213,155,0.20)" strokeWidth="1.2" strokeDasharray="3 12">
              <animate attributeName="stroke-dashoffset" values="0;-120" dur="8s" repeatCount="indefinite" />
            </path>
            <path d="M-10 178 C90 178 92 110 150 110" stroke="rgba(39,213,155,0.16)" strokeWidth="1.2" strokeDasharray="3 12">
              <animate attributeName="stroke-dashoffset" values="0;-120" dur="9s" repeatCount="indefinite" />
            </path>
            <path d="M150 110 C220 110 230 66 310 66" stroke="rgba(39,213,155,0.26)" strokeWidth="1.2" strokeDasharray="3 12">
              <animate attributeName="stroke-dashoffset" values="0;-120" dur="7.5s" repeatCount="indefinite" />
            </path>
            <path d="M150 110 C220 110 230 154 310 154" stroke="rgba(39,213,155,0.18)" strokeWidth="1.2" strokeDasharray="3 12">
              <animate attributeName="stroke-dashoffset" values="0;-120" dur="8.5s" repeatCount="indefinite" />
            </path>
          </svg>

          <div className="relative z-10 rounded-xl border border-[#27d59b]/20 bg-[#27d59b]/[0.055] px-5 py-4 text-center text-white">
            <span className="font-heading text-lg font-semibold tracking-[-0.025em]">
              Video Intelligence
            </span>
          </div>
        </div>

        <div className="divide-y divide-[#d8e2de] border-t border-[#d8e2de] lg:border-l lg:border-t-0">
          <div className="px-5 py-5 sm:px-6">
            <span className="mb-2 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
            <p className="text-[12px] font-medium leading-5 text-[#26373e]">
              {outputs[0]}
            </p>
          </div>
          <div className="px-5 py-5 sm:px-6">
            <span className="mb-2 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
            <p className="text-[12px] font-medium leading-5 text-[#26373e]">
              {outputs[1]}
            </p>
            {outputs[2] ? (
              <p className="mt-2 text-[11px] leading-5 text-[#607078]">
                {outputs[2]}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function GenericProofPanel({
  paragraphs,
}: {
  paragraphs: string[];
}) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_16px_45px_rgba(8,27,36,0.05)]">
      <div className="grid lg:grid-cols-2">
        {paragraphs.map((paragraph, index) => (
          <div
            key={paragraph}
            className={`relative p-6 sm:p-7 ${
              index !== paragraphs.length - 1
                ? "border-b border-[#d8e2de] lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
            <p className="text-[13px] leading-7 text-[#405159]">
              <InlineSectionLinks text={paragraph} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SolutionProofPanel({
  module,
  paragraphs,
}: {
  module: Module;
  paragraphs: string[];
}) {
  if (module.slug === "e-lock" && paragraphs[0]) {
    const p = paragraphs[0];
    const introEnd = p.indexOf("Pharmaceutical shipments,");
    const pharmaStart = introEnd;
    const fmcgStart = p.indexOf("High-value FMCG,");
    const freightStart = p.indexOf("Cross-border freight,");

    const intro = introEnd > 0 ? p.slice(0, introEnd).trim() : "";
    const pharma =
      pharmaStart >= 0 && fmcgStart > pharmaStart
        ? p.slice(pharmaStart, fmcgStart).trim()
        : "";
    const fmcg =
      fmcgStart >= 0 && freightStart > fmcgStart
        ? p.slice(fmcgStart, freightStart).trim()
        : "";
    const freight = freightStart >= 0 ? p.slice(freightStart).trim() : "";

    return (
      <div className="mt-8">
        {intro ? (
          <div className="rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2] px-5 py-5 sm:px-6">
            <p className="max-w-4xl text-sm leading-7 text-[#405159]">{intro}</p>
          </div>
        ) : null}

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {[pharma, fmcg, freight].filter(Boolean).map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_12px_34px_rgba(8,27,36,0.045)] sm:p-6"
            >
              <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
              <p className="text-[13px] leading-7 text-[#405159]">{item}</p>
            </div>
          ))}
        </div>

        {paragraphs[1] ? (
          <div className="mt-4 border-l-2 border-[#27d59b] bg-[#27d59b]/[0.045] px-5 py-4">
            <p className="text-sm font-medium leading-7 text-[#081b24]">
              {paragraphs[1]}
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  if (module.slug === "video" && paragraphs[0]) {
    const p = paragraphs[0];
    const defensiveStart = p.indexOf("Tamper-proof footage");
    const developmentalStart = p.indexOf("And the driver-facing alerts");

    const intro =
      defensiveStart > 0 ? p.slice(0, defensiveStart).trim() : "";
    const defensive =
      defensiveStart >= 0 && developmentalStart > defensiveStart
        ? p.slice(defensiveStart, developmentalStart).trim()
        : "";
    const developmental =
      developmentalStart >= 0 ? p.slice(developmentalStart).trim() : "";

    return (
      <div className="mt-8">
        {intro ? (
          <p className="max-w-4xl text-sm leading-7 text-[#607078]">{intro}</p>
        ) : null}

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#c8d5d0] bg-white p-6 shadow-[0_12px_34px_rgba(8,27,36,0.045)]">
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#007c67]">
              Defensive
            </span>
            <p className="mt-4 text-[13px] leading-7 text-[#405159]">
              {defensive}
            </p>
          </div>

          <div className="rounded-2xl border border-[#c8d5d0] bg-white p-6 shadow-[0_12px_34px_rgba(8,27,36,0.045)]">
            <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#007c67]">
              Developmental
            </span>
            <p className="mt-4 text-[13px] leading-7 text-[#405159]">
              {developmental}
            </p>
          </div>
        </div>

        {paragraphs[1] ? (
          <div className="mt-4 border-l-2 border-[#27d59b] bg-[#27d59b]/[0.045] px-5 py-4">
            <p className="text-sm font-medium leading-7 text-[#081b24]">
              {paragraphs[1]}
            </p>
          </div>
        ) : null}
      </div>
    );
  }

  return <GenericProofPanel paragraphs={paragraphs} />;
}

function ClientSolutionPage({ module }: { module: Module }) {
  const content = module.solutionContent;

  if (!content) return null;

  const problemCallout =
    module.slug === "ev-management"
      ? content.problemParagraphs[content.problemParagraphs.length - 1]
      : null;

  const problemBody = problemCallout
    ? content.problemParagraphs.slice(0, -1)
    : content.problemParagraphs;

  return (
    <>
      <section
        id="section-01"
        className="relative min-h-[590px] scroll-mt-28 overflow-hidden bg-[#081b24] text-white"
      >
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
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
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
              VIoT / Connected intelligence
            </span>
          </div>
        </div>
      </section>

      <SectionNav />

      <section
        id="section-02"
        className="relative scroll-mt-28 overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>02</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.problemTitle}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5">
                {problemBody.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-7 text-[#607078]"
                  >
                    <InlineSectionLinks text={paragraph} />
                  </p>
                ))}
              </div>

              {problemCallout ? (
                <div className="mt-7 rounded-2xl border border-[#27d59b]/30 bg-[#27d59b]/[0.055] px-5 py-5 shadow-[0_12px_34px_rgba(8,27,36,0.04)] sm:px-6">
                  <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                  <p className="font-heading text-xl font-semibold leading-[1.3] tracking-[-0.025em] text-[#081b24] sm:text-2xl">
                    <InlineSectionLinks text={problemCallout} />
                  </p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section
        id="section-03"
        className="relative scroll-mt-28 overflow-hidden border-b border-[#cdd5d2] bg-white"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>03</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.coversTitle}
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_16px_45px_rgba(8,27,36,0.045)]">
            <div className="hidden grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-[#d8e2de] bg-[#f4f6f2] px-6 py-4 sm:grid">
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]">
                Capability
              </span>
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]">
                What it does
              </span>
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]">
                What it changes
              </span>
            </div>

            {content.capabilityRows.map((row, index) => (
              <div
                key={row.name}
                className={`grid gap-5 px-5 py-5 sm:grid-cols-[0.8fr_1.1fr_1.1fr] sm:px-6 ${
                  index !== content.capabilityRows.length - 1
                    ? "border-b border-[#d8e2de]"
                    : ""
                }`}
              >
                <h3 className="font-heading text-base font-semibold leading-6 text-[#081b24]">
                  {row.name}
                </h3>
                <p className="text-[13px] leading-6 text-[#607078]">
                  {row.whatItDoes}
                </p>
                <p className="text-[13px] leading-6 text-[#405159]">
                  {row.whatItChanges}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 max-w-4xl border-l-2 border-[#27d59b] pl-5">
            <p className="text-sm leading-7 text-[#607078]">
              <InlineSectionLinks text={content.capabilityClosing} />
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-04"
        className="relative scroll-mt-28 overflow-hidden bg-[#081b24] text-white"
      >
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>04</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.differenceTitle}
          </h2>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {content.differences.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 shadow-[0_16px_44px_rgba(0,0,0,0.10)] backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#27d59b]">
                    4.{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold leading-[1.18] tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/58">
                  <InlineSectionLinks text={item.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section-05"
        className="relative scroll-mt-28 overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>05</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.engineTitle}
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineCaption}
          </p>

          <SolutionEngineVisual
            module={module}
            engineTitle={content.engineTitle}
          />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#607078]">
            <InlineSectionLinks text={content.engineText} />
          </p>
        </div>
      </section>

      <section
        id="section-06"
        className="relative scroll-mt-28 overflow-hidden bg-white"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>06</SectionLabel>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.proofTitle}
          </h2>

          <SolutionProofPanel
            module={module}
            paragraphs={content.proofParagraphs}
          />
        </div>
      </section>

      <section
        id="section-07"
        className="relative scroll-mt-28 overflow-hidden bg-[#081b24] text-white"
      >
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>07</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.supportTitle}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
                {content.supportParagraphs.map((paragraph, index) => (
                  <div
                    key={paragraph}
                    className={`px-5 py-5 sm:px-6 ${
                      index !== content.supportParagraphs.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }`}
                  >
                    <p className="text-sm leading-7 text-white/58">
                      <InlineSectionLinks text={paragraph} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section-08"
        className="relative scroll-mt-28 overflow-hidden bg-[#f4f6f2]"
      >
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

  const problemCallout =
    content.problemParagraphs[content.problemParagraphs.length - 1];
  const problemBody = content.problemParagraphs.slice(0, -1);

  const proofIntro = content.proofParagraphs[0] ?? "";
  const proofDetail = content.proofParagraphs[1] ?? "";

  const longHaulStart = proofDetail.indexOf("A long-haul fleet's");
  const lastMileStart = proofDetail.indexOf("A last-mile fleet's");
  const mixedStart = proofDetail.indexOf("A mixed fleet's");
  const closingStart = proofDetail.indexOf("Three different failure patterns");

  const longHaul =
    longHaulStart >= 0 && lastMileStart > longHaulStart
      ? proofDetail.slice(longHaulStart, lastMileStart).trim()
      : "";
  const lastMile =
    lastMileStart >= 0 && mixedStart > lastMileStart
      ? proofDetail.slice(lastMileStart, mixedStart).trim()
      : "";
  const mixed =
    mixedStart >= 0 && closingStart > mixedStart
      ? proofDetail.slice(mixedStart, closingStart).trim()
      : "";
  const proofClosing =
    closingStart >= 0 ? proofDetail.slice(closingStart).trim() : "";

  return (
    <>
      <section
        id="section-01"
        className="relative min-h-[590px] scroll-mt-28 overflow-hidden bg-[#081b24] text-white"
      >
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
          <SectionLabel dark>Fleet Intelligence</SectionLabel>

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
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/35">
              VIoT / Connected intelligence
            </span>
          </div>
        </div>
      </section>

      <SectionNav />

      <section
        id="section-02"
        className="relative scroll-mt-28 overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>02</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.problemTitle}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-5">
                {problemBody.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-7 text-[#607078]">
                    <InlineSectionLinks text={paragraph} />
                  </p>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-[#27d59b]/30 bg-[#27d59b]/[0.055] px-5 py-5 shadow-[0_12px_34px_rgba(8,27,36,0.04)] sm:px-6">
                <span className="mb-3 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                <p className="font-heading text-xl font-semibold leading-[1.3] tracking-[-0.025em] text-[#081b24] sm:text-2xl">
                  <InlineSectionLinks text={problemCallout} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section-03"
        className="relative scroll-mt-28 overflow-hidden border-b border-[#cdd5d2] bg-white"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>03 / What Fleet Intelligence Actually Covers</SectionLabel>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.coversIntro}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_16px_45px_rgba(8,27,36,0.045)]">
            <div className="hidden grid-cols-[0.8fr_1.1fr_1.1fr] border-b border-[#d8e2de] bg-[#f4f6f2] px-6 py-4 sm:grid">
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]">
                Capability
              </span>
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]">
                What it does
              </span>
              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-[#007c67]">
                What it changes
              </span>
            </div>

            {content.capabilityRows.map((row, index) => (
              <div
                key={row.name}
                className={`grid gap-5 px-5 py-5 sm:grid-cols-[0.8fr_1.1fr_1.1fr] sm:px-6 ${
                  index !== content.capabilityRows.length - 1
                    ? "border-b border-[#d8e2de]"
                    : ""
                }`}
              >
                <h3 className="font-heading text-base font-semibold leading-6 text-[#081b24]">
                  {row.name}
                </h3>
                <p className="text-[13px] leading-6 text-[#607078]">
                  {row.whatItDoes}
                </p>
                <p className="text-[13px] leading-6 text-[#405159]">
                  {row.whatItChanges}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 max-w-4xl border-l-2 border-[#27d59b] pl-5">
            <p className="text-sm leading-7 text-[#607078]">
              <InlineSectionLinks text={content.capabilityClosing} />
            </p>
          </div>
        </div>
      </section>

      <section
        id="section-04"
        className="relative scroll-mt-28 overflow-hidden bg-[#081b24] text-white"
      >
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>04 / {content.differenceTitle}</SectionLabel>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {content.differences.map((item, index) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 shadow-[0_16px_44px_rgba(0,0,0,0.10)] backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#27d59b]">
                    4.{index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                </div>

                <h3 className="mt-5 font-heading text-xl font-semibold leading-[1.18] tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-white/58">
                  <InlineSectionLinks text={item.text} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section-05"
        className="relative scroll-mt-28 overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]"
      >
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

      <section
        id="section-06"
        className="relative scroll-mt-28 overflow-hidden bg-white"
      >
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>06 / {content.proofTitle}</SectionLabel>

          <div className="mt-8 rounded-2xl border border-[#c8d5d0] bg-[#f4f6f2] px-5 py-5 sm:px-6">
            <p className="max-w-4xl text-sm leading-7 text-[#405159]">
              {proofIntro}
            </p>
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-3">
            {[longHaul, lastMile, mixed].filter(Boolean).map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_12px_34px_rgba(8,27,36,0.045)] sm:p-6"
              >
                <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                <p className="text-[13px] leading-7 text-[#405159]">{item}</p>
              </div>
            ))}
          </div>

          {proofClosing ? (
            <div className="mt-4 border-l-2 border-[#27d59b] bg-[#27d59b]/[0.045] px-5 py-4">
              <p className="text-sm font-medium leading-7 text-[#081b24]">
                {proofClosing}
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section
        id="section-07"
        className="relative scroll-mt-28 overflow-hidden bg-[#081b24] text-white"
      >
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel dark>07</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                {content.supportTitle}
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
                {content.supportParagraphs.map((paragraph, index) => (
                  <div
                    key={paragraph}
                    className={`px-5 py-5 sm:px-6 ${
                      index !== content.supportParagraphs.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }`}
                  >
                    <p className="text-sm leading-7 text-white/58">
                      <InlineSectionLinks text={paragraph} />
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section-08"
        className="relative scroll-mt-28 overflow-hidden bg-[#f4f6f2]"
      >
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

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">

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

    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

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