import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon, CheckIcon } from "@/components/icons";
import {
  breadcrumbSchema,
  StructuredData,
} from "@/components/structured-data";
import { CtaBand } from "@/components/home/CtaBand";
import { getSolution, solutions } from "@/lib/solutions";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) return {};

  return {
    title: solution.name,
    description: solution.lede,
    alternates: {
      canonical: `/solutions/${slug}`,
    },
  };
}

/* =========================================================
   VIoT BACKGROUND
   Server-safe SVG animation.
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

/* =========================================================
   SMALL LABEL
========================================================= */

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
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

export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) notFound();

  const priorities = Array.isArray(solution.priorities)
    ? solution.priorities
    : [];

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

  const workflow = [
    {
      number: "01",
      title: "Capture",
      text: "The field event is captured by the relevant device or sensing layer.",
    },
    {
      number: "02",
      title: "Connect",
      text: "Operational data moves through the available connectivity layer.",
    },
    {
      number: "03",
      title: "Understand",
      text: "The platform turns incoming events into useful operating context.",
    },
    {
      number: "04",
      title: "Respond",
      text: "Teams act on the event, exception or required workflow.",
    },
  ];

  const platformLayers = [
    {
      number: "01",
      title: "Hardware",
      text: "Select the device or sensing layer around the physical event.",
    },
    {
      number: "02",
      title: "Connectivity",
      text: "Define how information moves from the field into the platform.",
    },
    {
      number: "03",
      title: "Platform",
      text: "Bring the resulting information into one operational view.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
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

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[560px] overflow-hidden bg-[#081b24] text-white sm:min-h-[600px]">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-between px-6 pb-7 pt-8 sm:min-h-[600px] sm:px-8 lg:px-12 lg:pt-10">
          <div className="flex items-center justify-between">
            <SectionLabel dark>
              Solutions / {solution.name}
            </SectionLabel>

            <span className="hidden font-mono text-[8px] uppercase tracking-[0.18em] text-white/35 sm:block">
              VIoT / Connected intelligence
            </span>
          </div>

          <div className="max-w-4xl py-14 sm:py-16">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">
              {solution.number} / Solution
            </span>

            <h1 className="mt-5 max-w-4xl font-heading text-[clamp(2.9rem,5.5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
              {solution.headline}
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/62 sm:text-[15px]">
              {solution.lede}
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.09] pt-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/35">
              {solution.name}
            </span>

            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.17em] text-[#27d59b]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
              Connected operations
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          SOLUTION FOCUS
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionLabel>{solution.number} / Evaluation focus</SectionLabel>

              <h2 className="mt-5 max-w-xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[46px]">
                Start with the
                <br />
                <span className="font-normal text-[#007c67]">
                  operating requirement.
                </span>
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#607078]">
                VIoT evaluates the operating context first, then aligns the
                device, connectivity and platform configuration around it.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/80 shadow-[0_16px_45px_rgba(8,27,36,0.05)] backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-[#d8e2de] px-5 py-4 sm:px-6">
                  <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                    Evaluation priorities
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#607078]">
                    {String(priorities.length).padStart(2, "0")} points
                  </span>
                </div>

                <div className="divide-y divide-[#d8e2de]">
                  {priorities.map((priority, index) => (
                    <div
                      key={priority}
                      className="grid gap-3 px-5 py-4 sm:grid-cols-[36px_24px_1fr] sm:items-start sm:px-6"
                    >
                      <span className="font-mono text-[8px] font-semibold tracking-[0.15em] text-[#9aa5a1]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex h-5 w-5 items-center justify-center rounded-md border border-[#007c67]/15 bg-[#007c67]/[0.035] text-[#007c67]">
                        <CheckIcon />
                      </span>

                      <span className="text-[13px] font-medium leading-6 text-[#26373e]">
                        {priority}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECTED WORKFLOW
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel dark>Connected workflow</SectionLabel>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-4xl lg:text-[48px]">
                From field event
                <br />
                <span className="font-normal text-[#27d59b]">
                  to operating response.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-white/48 lg:ml-auto">
                Device, connectivity and platform work as one connected path.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
            <div className="grid md:grid-cols-4">
              {workflow.map((item, index) => (
                <div
                  key={item.number}
                  className={`relative min-h-[170px] p-5 sm:p-6 ${
                    index !== workflow.length - 1
                      ? "border-b border-white/[0.08] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[8px] font-semibold tracking-[0.18em] text-[#27d59b]">
                    {item.number}
                  </span>

                  <h3 className="mt-8 font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-6 text-white/40">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM CONNECTION
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-white">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionLabel>Platform connection</SectionLabel>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.03] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[46px]">
                Hardware and platform,
                <br />
                <span className="font-normal text-[#007c67]">
                  evaluated as one system.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4">
              <p className="max-w-md text-sm leading-7 text-[#607078] lg:ml-auto">
                The requirement defines the right hardware, connectivity and
                operating view.
              </p>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#f8faf7]/85 shadow-[0_14px_40px_rgba(8,27,36,0.045)]">
            <div className="grid sm:grid-cols-3">
              {platformLayers.map((item, index) => (
                <div
                  key={item.number}
                  className={`p-5 sm:p-6 ${
                    index !== platformLayers.length - 1
                      ? "border-b border-[#d8e2de] sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[8px] font-semibold tracking-[0.18em] text-[#007c67]">
                    {item.number}
                  </span>

                  <h3 className="mt-7 font-heading text-lg font-semibold tracking-[-0.02em] text-[#081b24]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-[#607078]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <Link
              href="/platform"
              className="group inline-flex h-11 items-center gap-3 rounded-lg border border-[#081b24] bg-[#081b24] px-5 text-[9px] font-semibold uppercase tracking-[0.1em] text-white! transition-all duration-300 hover:border-[#007c67] hover:bg-[#007c67]"
            >
              <span>Explore platform</span>

              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-white/15">
                <ArrowIcon className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand />
    </main>
  );
}
