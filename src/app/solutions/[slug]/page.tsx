import type { Metadata } from "next";
import type { ReactNode } from "react";

import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon } from "@/components/icons";
import {
  breadcrumbSchema,
  StructuredData,
} from "@/components/structured-data";
import { getSolution, solutions } from "@/lib/solutions";
import Image from "next/image";

export const dynamicParams = false;

type SolutionPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SolutionPageParams): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: `${solution.name} | VIoT Solutions`,
    description: solution.lede,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
  };
}

/* =========================================================
   VIoT BACKGROUND
   Existing server-safe animated SVG language preserved.
========================================================= */

function VIoTBackground({ dark = false }: { dark?: boolean }) {
  const line = dark ? "rgba(255,255,255,0.05)" : "rgba(8,27,36,0.07)";
  const green = dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.12)";
  const softGreen = dark
    ? "rgba(39,213,155,0.07)"
    : "rgba(0,124,103,0.06)";
  const ring = dark
    ? "border-white/[0.035]"
    : "border-[#081b24]/[0.04]";
  const greenRing = dark
    ? "border-[#27d59b]/[0.055]"
    : "border-[#007c67]/[0.055]";

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
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={line}
          strokeOpacity="0.65"
          strokeWidth="1"
        />

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
      </svg>

      <div
        className={`absolute right-[4%] top-[12%] h-[420px] w-[420px] rounded-full border ${ring}`}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="49"
            fill="none"
            stroke="transparent"
          />
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

      <div
        className={`absolute right-[9%] top-[18%] h-[290px] w-[290px] rounded-full border ${greenRing}`}
      />

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

const capabilityRoutes: Record<string, string> = {
  "Fleet Intelligence": "/platform/fleet-management",
  "Safe Logistics": "/platform/e-lock",
  "Video Intelligence": "/platform/video",
  "Smart Access Monitoring": "/platform/access-control",
  "Temperature & Humidity Monitoring":
    "/platform/temperature-humidity-monitoring",
  "Fuel Monitoring": "/platform/fuel-monitoring",
  "Load/Weight Analytics": "/platform/load-weight-analytics",
};

function CapabilityLink({ name }: { name: string }) {
  const href = capabilityRoutes[name];

  if (!href) {
    return <span>{name}</span>;
  }

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-semibold text-[#081b24] transition-colors duration-300 hover:text-[#007c67]"
    >
      <span>{name}</span>
      <ArrowIcon className="h-3 w-3 text-[#007c67] transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}

function ProofStrip({
  points,
}: {
  points: Array<{ title: string; text: string }>;
}) {
  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/82 shadow-[0_14px_40px_rgba(8,27,36,0.045)] backdrop-blur-sm">
      <div className="grid lg:grid-cols-3">
        {points.map((point, index) => (
          <div
            key={`${point.title}-${index}`}
            className={`p-5 sm:p-6 lg:p-7 ${
              index !== points.length - 1
                ? "border-b border-[#d8e2de] lg:border-b-0 lg:border-r"
                : ""
            }`}
          >
            <span className="mb-5 block h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
            <h3 className="font-heading text-[18px] font-semibold leading-[1.18] tracking-[-0.025em] text-[#081b24]">
              {point.title}
            </h3>
            <p className="mt-3 text-[13px] leading-6 text-[#607078]">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   SECTION 5 VISUALS
   Each visual follows the client document's requested pattern.
========================================================= */

function Node({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "green" | "alert" | "soft";
}) {
  const cls =
    tone === "green"
      ? "border-[#27d59b]/45 bg-[#27d59b]/[0.08]"
      : tone === "alert"
        ? "border-[#b85b5b]/35 bg-[#b85b5b]/[0.055]"
        : tone === "soft"
          ? "border-[#007c67]/20 bg-[#f4f6f2]"
          : "border-[#c8d5d0] bg-white";

  return (
    <div
      className={`flex min-h-[58px] items-center justify-center rounded-xl border px-4 py-3 text-center shadow-[0_8px_24px_rgba(8,27,36,0.04)] ${cls}`}
    >
      <span className="text-[11px] font-semibold leading-5 text-[#081b24]">
        {children}
      </span>
    </div>
  );
}

function LogisticsVisual() {
  const items = [
    "Fleet Intelligence",
    "Safe Logistics",
    "Fuel Monitoring",
    "Load/Weight Analytics",
  ];

  return (
    <div className="relative mt-9 min-h-[430px] overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7">
      <div className="absolute left-1/2 top-1/2 hidden h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#007c67]/10 lg:block" />
      <div className="absolute left-1/2 top-1/2 hidden h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#27d59b]/15 lg:block" />

      <div className="hidden h-[360px] grid-cols-[1fr_220px_1fr] grid-rows-2 items-center gap-x-12 gap-y-10 lg:grid">
        <Node>{items[0]}</Node>
        <div className="row-span-2 flex items-center justify-center">
          <div className="relative flex h-[150px] w-[150px] items-center justify-center rounded-2xl border border-[#007c67]/25 bg-[#081b24] shadow-[0_20px_50px_rgba(8,27,36,0.13)]">
           <div className="flex flex-col items-center justify-center text-center">
  <Image
    src="/logo/logo.png"
    alt="VIoT"
    width={86}
    height={34}
    className="h-auto w-[96px] object-contain"
  />

  {/* <span className="mt-3 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]">
    One Platform
  </span> */}
</div>
            <span className="absolute -left-12 top-1/4 h-px w-12 bg-[#007c67]/20" />
            <span className="absolute -left-12 bottom-1/4 h-px w-12 bg-[#007c67]/20" />
            <span className="absolute -right-12 top-1/4 h-px w-12 bg-[#007c67]/20" />
            <span className="absolute -right-12 bottom-1/4 h-px w-12 bg-[#007c67]/20" />
          </div>
        </div>
        <Node>{items[1]}</Node>
        <Node>{items[2]}</Node>
        <Node>{items[3]}</Node>
      </div>

      <div className="grid gap-3 lg:hidden">
        <div className="mx-auto w-full max-w-[220px]">
          <div className="flex min-h-[86px] items-center justify-center rounded-2xl border border-[#007c67]/25 bg-[#081b24] text-center shadow-[0_16px_40px_rgba(8,27,36,0.12)]">
            <div>
              <span className="font-heading text-xl font-semibold text-white">
                VIoT
              </span>
              <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.16em] text-[#27d59b]">
                One Platform
              </span>
            </div>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <Node key={item}>{item}</Node>
          ))}
        </div>
      </div>
    </div>
  );
}

function PharmaVisual() {
  const items = [
    "Temp and Humidity",
    "Safe Logistics",
    "Smart Access",
    "Fleet Intelligence",
  ];

  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <Node key={item}>{item}</Node>
        ))}
      </div>

      <div className="mx-auto h-8 w-px bg-[#007c67]/20" />

      <div className="mx-auto max-w-[300px]">
        <Node tone="soft">
          One Compliance Record
          <br />
          Timestamped, Tied to each event
        </Node>
      </div>

      <div className="mx-auto h-8 w-px bg-[#007c67]/20" />

      <div className="mx-auto max-w-[340px]">
        <Node tone="green">Retrieved in minutes, not weeks</Node>
      </div>
    </div>
  );
}

function DecisionDiamond({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-[86px] w-[86px] shrink-0 items-center justify-center">
      <div className="absolute inset-[13px] rotate-45 rounded-[10px] border border-[#007c67]/25 bg-white shadow-[0_8px_24px_rgba(8,27,36,0.04)]" />
      <span className="relative z-10 max-w-[66px] text-center text-[10px] font-semibold leading-4 text-[#081b24]">
        {children}
      </span>
    </div>
  );
}

function ConstructionVisual() {
  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7">
      <div className="hidden grid-cols-[1fr_42px_1fr_42px_90px_42px_1fr] items-center lg:grid">
        <Node>Equipment Starts</Node>
        <div className="h-px bg-[#007c67]/20" />
        <Node>Checked vs Window</Node>
        <div className="h-px bg-[#007c67]/20" />
        <DecisionDiamond>Authorized Use?</DecisionDiamond>
        <div className="relative h-px bg-[#007c67]/20">
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">
            yes
          </span>
        </div>
        <Node tone="green">Normal Use Logged</Node>
      </div>

      <div className="hidden grid-cols-[1fr_42px_1fr_42px_90px_42px_1fr] lg:grid">
        <div />
        <div />
        <div />
        <div />
        <div className="relative flex justify-center pt-2">
          <span className="absolute top-1 font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">
            no
          </span>
          <div className="mt-5 h-10 w-px bg-[#007c67]/20" />
        </div>
        <div />
        <div />
      </div>

      <div className="hidden grid-cols-[1fr_42px_1fr_42px_90px_42px_1fr] lg:grid">
        <div />
        <div />
        <div />
        <div className="col-span-3 flex justify-center">
          <div className="w-[190px]">
            <Node tone="alert">Unauthorized Use</Node>
          </div>
        </div>
        <div />
      </div>

      <div className="space-y-3 lg:hidden">
        <Node>Equipment Starts</Node>
        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />
        <Node>Checked vs Window</Node>
        <div className="mx-auto h-5 w-px bg-[#007c67]/20" />
        <div className="flex justify-center">
          <DecisionDiamond>Authorized Use?</DecisionDiamond>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#007c67]">
              yes
            </p>
            <Node tone="green">Normal Use Logged</Node>
          </div>
          <div>
            <p className="mb-2 text-center font-mono text-[7px] uppercase tracking-[0.12em] text-[#607078]">
              no
            </p>
            <Node tone="alert">Unauthorized Use</Node>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiningVisual() {
  const without = [
    "Enters Dead Zone",
    "No Local Record",
    "Signal Returns",
    "Gap in Record",
  ];
  const withViot = [
    "Enters Dead Zone",
    "Data Queued On Device",
    "Signal Returns",
    "Record Synced",
  ];

  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7">
      <div>
        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#607078]">
          Without local queuing
        </span>
        <div className="mt-3 grid gap-3 lg:grid-cols-4">
          {without.map((item, index) => (
            <Node
              key={item}
              tone={index === without.length - 1 ? "alert" : "default"}
            >
              {item}
            </Node>
          ))}
        </div>
      </div>

      <div className="my-6 border-t border-[#d8e2de]" />

      <div>
        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#007c67]">
          With VIoT
        </span>
        <div className="mt-3 grid gap-3 lg:grid-cols-4">
          {withViot.map((item, index) => (
            <Node
              key={item}
              tone={index === 1 || index === withViot.length - 1 ? "green" : "default"}
            >
              {item}
            </Node>
          ))}
        </div>
      </div>
    </div>
  );
}

function FmcgVisual() {
  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7 lg:p-8">
      <div className="relative mx-auto max-w-[900px] py-12">
        <div className="absolute left-[7%] right-[7%] top-1/2 h-px -translate-y-1/2 bg-[#c8d5d0]" />

        <div className="relative grid grid-cols-6 gap-2">
          {[1, 2, 3, 4, 5, 6].map((stop) => {
            const flagged = stop === 4;

            return (
              <div key={stop} className="relative flex flex-col items-center">
                {flagged ? (
                  <div className="absolute bottom-[42px] whitespace-nowrap rounded-lg border border-[#b85b5b]/35 bg-[#b85b5b]/[0.055] px-3 py-2 text-[10px] font-semibold text-[#081b24] shadow-[0_8px_20px_rgba(8,27,36,0.04)]">
                    Short count flagged
                  </div>
                ) : null}

                <span
                  className={`relative z-10 h-4 w-4 rounded-full border ${
                    flagged
                      ? "border-[#b85b5b] bg-[#b85b5b]"
                      : "border-[#9fb0aa] bg-white"
                  }`}
                />
                <span
                  className={`mt-3 font-mono text-[8px] uppercase tracking-[0.12em] ${
                    flagged ? "text-[#b85b5b]" : "text-[#607078]"
                  }`}
                >
                  Stop {stop}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#d8e2de] pt-5">
        <span className="flex items-center gap-2 text-[10px] text-[#607078]">
          <span className="h-2.5 w-2.5 rounded-full border border-[#9fb0aa] bg-white" />
          Recorded normally
        </span>
        <span className="flex items-center gap-2 text-[10px] text-[#607078]">
          <span className="h-2.5 w-2.5 rounded-full bg-[#b85b5b]" />
          Flagged for review
        </span>
      </div>
    </div>
  );
}

function SchoolsVisual() {
  const steps = [
    "Boards at Stop",
    "En Route",
    "Exits, Confirmed",
    "Logged. Parent Notified.",
  ];

  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7">
      <div className="grid gap-3 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="relative">
            <Node tone={index === steps.length - 1 ? "green" : "default"}>
              {step}
            </Node>
            {index !== steps.length - 1 ? (
              <span className="absolute -right-3 top-1/2 hidden h-px w-3 bg-[#007c67]/20 lg:block" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function SmartInfrastructureVisual() {
  const separate = [
    "Access Vendor",
    "CCTV Vendor",
    "Visitor Mgmt",
    "Manually Matched",
  ];
  const unified = [
    "Access Control",
    "Video",
    "Visitor Mgmt",
    "Unified Record",
  ];

  return (
    <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white p-5 shadow-[0_18px_55px_rgba(8,27,36,0.055)] sm:p-7">
      <div>
        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#607078]">
          Separate Vendor Systems
        </span>
        <div className="mt-3 grid gap-3 lg:grid-cols-4">
          {separate.map((item, index) => (
            <Node
              key={item}
              tone={index === separate.length - 1 ? "alert" : "default"}
            >
              {item}
            </Node>
          ))}
        </div>
      </div>

      <div className="my-6 border-t border-[#d8e2de]" />

      <div>
        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-[#007c67]">
          One VIoT Platform
        </span>
        <div className="mt-3 grid gap-3 lg:grid-cols-4">
          {unified.map((item, index) => (
            <Node
              key={item}
              tone={index === unified.length - 1 ? "green" : "default"}
            >
              {item}
            </Node>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustryEngineVisual({ slug }: { slug: string }) {
  if (slug === "logistics-supply-chain") return <LogisticsVisual />;
  if (slug === "pharmaceuticals-chemicals") return <PharmaVisual />;
  if (slug === "construction") return <ConstructionVisual />;
  if (slug === "mining") return <MiningVisual />;
  if (slug === "fmcg") return <FmcgVisual />;
  if (slug === "schools-universities") return <SchoolsVisual />;
  if (slug === "smart-infrastructure") return <SmartInfrastructureVisual />;
  return null;
}

/* =========================================================
   CLIENT INDUSTRY PAGE
========================================================= */

function ClientIndustryPage({
  solution,
}: {
  solution: NonNullable<ReturnType<typeof getSolution>>;
}) {
  const content = solution.industryContent;

  if (!content) return null;

  return (
    <>
      {/* 1. HERO */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#081b24] text-white sm:min-h-[660px]">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1440px] flex-col justify-between px-6 pb-9 pt-24 sm:min-h-[660px] sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
          {/* <SectionLabel dark>
            Solutions / {solution.name}
          </SectionLabel> */}

          <div className="max-w-5xl py-12 sm:py-14">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
              {solution.number} / Industry
            </span>

            <h1 className="mt-5 max-w-5xl font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white">
              {solution.headline}
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-white/62 sm:text-[15px]">
              {solution.lede}
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <SectionLabel>02 / The problem</SectionLabel>
                <h2 className="mt-5 max-w-lg font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[46px]">
                  {content.problemTitle}
                </h2>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/82 shadow-[0_16px_45px_rgba(8,27,36,0.045)] backdrop-blur-sm">
                {content.problemParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`px-5 py-5 text-[14px] leading-7 text-[#405159] sm:px-7 sm:py-6 ${
                      index !== content.problemParagraphs.length - 1
                        ? "border-b border-[#d8e2de]"
                        : ""
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY MAPPING */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <SectionLabel>03 / How VIoT Maps to This Industry</SectionLabel>

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#607078]">
                {content.mappingIntro}
              </p>
              {content.mappingClosing ? (
                <p className="mt-5 max-w-md text-sm font-medium leading-7 text-[#081b24]">
                  {content.mappingClosing}
                </p>
              ) : null}
            </div>

            <div className="lg:col-span-8">
              <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f8faf7]/85 shadow-[0_16px_45px_rgba(8,27,36,0.045)]">
                <div className="grid grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] border-b border-[#d8e2de] bg-white/80">
                  <span className="px-5 py-4 font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[#007c67] sm:px-6">
                    VIoT Capability
                  </span>
                  <span className="border-l border-[#d8e2de] px-5 py-4 font-mono text-[8px] font-semibold uppercase tracking-[0.17em] text-[#007c67] sm:px-6">
                    Why It Matters Here
                  </span>
                </div>

                {content.capabilityRows.map((row, index) => (
                  <div
                    key={row.name}
                    className={`grid grid-cols-1 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] ${
                      index !== content.capabilityRows.length - 1
                        ? "border-b border-[#d8e2de]"
                        : ""
                    }`}
                  >
                    <div className="px-5 py-5 text-[13px] leading-6 sm:px-6">
                      <CapabilityLink name={row.name} />
                    </div>
                    <div className="border-t border-[#d8e2de] px-5 py-5 text-[13px] leading-6 text-[#607078] sm:border-l sm:border-t-0 sm:px-6">
                      {row.whyItMatters}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFFERENTIATORS */}
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <SectionLabel dark>04 / Different by design</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
            {content.differenceTitle}
          </h2>

          <div className="mt-9 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
            {content.differences.map((item, index) => (
              <div
                key={item.title}
                className={`grid gap-5 px-5 py-6 sm:px-7 sm:py-7 lg:grid-cols-[260px_1fr] lg:gap-9 ${
                  index !== content.differences.length - 1
                    ? "border-b border-white/[0.08]"
                    : ""
                }`}
              >
                <h3 className="font-heading text-lg font-semibold leading-[1.2] tracking-[-0.025em] text-white">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-7 text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CLIENT-SPECIFIC VISUAL */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel>05 / Operating view</SectionLabel>
              <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[46px]">
                {content.engineTitle}
              </h2>
            </div>

            {/* <div className="lg:col-span-4">
              <p className="max-w-md text-[12px] leading-6 text-[#607078] lg:ml-auto">
                {content.engineCaption}
              </p>
            </div> */}
          </div>

          <IndustryEngineVisual slug={solution.slug} />

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineText}
          </p>
        </div>
      </section>

      {/* 6. FIELD PROOF */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <SectionLabel>06 / Field proof</SectionLabel>

          <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[46px]">
            {content.proofTitle}
          </h2>

          <p className="mt-5 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.proofIntro}
          </p>

          <ProofStrip points={content.proofPoints} />
        </div>
      </section>

      {/* 7. LONG-TERM / SUPPORT */}
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionLabel dark>07 / Built to hold up</SectionLabel>
                <h2 className="mt-5 max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                  {content.supportTitle}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-7 text-white/55">
                  {content.supportIntro}
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
                {content.supportPoints.map((point, index) => (
                  <div
                    key={point.title}
                    className={`px-5 py-6 sm:px-7 sm:py-7 ${
                      index !== content.supportPoints.length - 1
                        ? "border-b border-white/[0.08]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#27d59b]" />
                      <div>
                        <h3 className="font-heading text-lg font-semibold leading-[1.2] tracking-[-0.025em] text-white">
                          {point.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-7 text-white/52">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {content.supportClosing ? (
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/58">
                  {content.supportClosing}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT / ENQUIRY */}
      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/88 p-6 shadow-[0_18px_55px_rgba(8,27,36,0.055)] backdrop-blur-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <SectionLabel>08 / Contact / Enquiry</SectionLabel>
                <h2 className="mt-5 max-w-4xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[46px]">
                  {content.ctaHeading}
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#607078]">
                  {content.ctaSubheading}
                </p>
              </div>

              <div className="lg:col-span-4 lg:flex lg:justify-end">
                <Link
                  href="/contact"
                  className="group inline-flex h-11 items-center gap-3 rounded-lg border border-[#081b24] bg-[#081b24] px-5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white! transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67]"
                >
                  <span>Contact / Enquiry</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15">
                    <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   FALLBACK
   Data Centres stays on its existing generic content until
   its new client content document is supplied.
========================================================= */

function GenericIndustryPage({
  solution,
}: {
  solution: NonNullable<ReturnType<typeof getSolution>>;
}) {
  const priorities = Array.isArray(solution.priorities)
    ? solution.priorities
    : [];

  return (
    <>
      <section className="relative min-h-[600px] overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
          <SectionLabel dark>
            Solutions / {solution.name}
          </SectionLabel>

          <div className="max-w-4xl py-14">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
              {solution.number} / Industry
            </span>

            <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.93] tracking-[-0.055em] text-white">
              {solution.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px]">
              {solution.lede}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <SectionLabel>Evaluation priorities</SectionLabel>

          <div className="mt-7 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/82 shadow-[0_16px_45px_rgba(8,27,36,0.045)]">
            {priorities.map((priority, index) => (
              <div
                key={priority}
                className={`px-5 py-5 text-[13px] font-medium leading-6 text-[#26373e] sm:px-7 ${
                  index !== priorities.length - 1
                    ? "border-b border-[#d8e2de]"
                    : ""
                }`}
              >
                {priority}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default async function SolutionPage({
  params,
}: SolutionPageParams) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${solution.name} connected operations solution`,
    description: solution.lede,
    url: `https://viot.tech/solutions/${solution.slug}`,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    provider: {
      "@id": "https://viot.tech/#organization",
    },
  };

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] antialiased selection:bg-[#27d59b] selection:text-[#081b24]">
      <StructuredData data={serviceSchema} />
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          {
            name: solution.name,
            path: `/solutions/${solution.slug}`,
          },
        ])}
      />

      {solution.industryContent ? (
        <ClientIndustryPage solution={solution} />
      ) : (
        <GenericIndustryPage solution={solution} />
      )}
    </main>
  );
}
