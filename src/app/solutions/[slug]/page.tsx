import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import {
  breadcrumbSchema,
  StructuredData,
} from "@/components/structured-data";
import { getSolution, solutions } from "@/lib/solutions";
import { CtaBand } from "@/components/home/CtaBand";

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

export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
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

      {/* =========================================================
          01 — HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2]">
        {/* Quiet technical grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#081b24 1px, transparent 1px), linear-gradient(90deg, #081b24 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10">
          <div className="mx-auto max-w-[1440px] px-6 pt-8 sm:px-8 lg:px-12 lg:pt-10">
            <PageHero
              breadcrumb={`Solutions / ${solution.name}`}
              title={solution.headline}
              lede={solution.lede}
            />
          </div>

          {/* Technical identification strip */}
          <div className="border-t border-[#cdd5d2] bg-white/50">
            <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-h-[56px] items-center gap-5 px-6 sm:px-8 lg:px-12">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  {solution.number} / Operating context
                </span>

                <span className="hidden h-4 w-px bg-[#cdd5d2] sm:block" />

                <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#607078] sm:block">
                  Connected operations
                </span>
              </div>

              <div className="border-t border-[#cdd5d2] px-6 py-3 sm:border-l sm:border-t-0 sm:px-8 lg:px-12">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                  VIoT / Solution architecture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02 — SOLUTION FOCUS
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
            {/* Left — narrative */}
            <div className="lg:col-span-6">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  {solution.number} / Evaluation focus
                </span>
              </div>

              <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[48px]">
                What the evaluation
                <br />
                <span className="font-normal text-[#879399]">
                  centres on.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#607078] sm:text-base">
                VIoT starts with the current operation and confirms product,
                connectivity and integration scope before making a deployment
                recommendation.
              </p>

              {/* Priorities */}
              <div className="mt-10 border-t border-[#cdd5d2]">
                {solution.priorities.map((priority, index) => (
                  <div
                    key={priority}
                    className="group flex items-start gap-5 border-b border-[#cdd5d2] py-4 sm:py-5"
                  >
                    <span className="w-6 shrink-0 pt-0.5 font-mono text-[9px] font-semibold tracking-[0.15em] text-[#a0aaae]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                      <CheckIcon />
                    </span>

                    <span className="text-sm font-medium leading-6 text-[#26373e]">
                      {priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — visual composition */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden border border-[#cdd5d2] bg-[#081b24]">
                {/* Image / visual area */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* Use a relevant solution image if available later */}
                  <div className="absolute inset-0 bg-[#0d2935]" />

                  {/* Technical framing */}
                  <div className="absolute inset-5 border border-white/[0.12] sm:inset-7">
                    <div className="absolute left-0 top-0 h-10 w-10 border-l border-t border-[#27d59b]" />
                    <div className="absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#27d59b]" />

                    {/* Central operating context */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex h-44 w-44 items-center justify-center sm:h-52 sm:w-52">
                        {/* Outer rings */}
                        <div className="absolute inset-0 rounded-full border border-white/[0.08]" />
                        <div className="absolute inset-7 rounded-full border border-white/[0.1]" />
                        <div className="absolute inset-14 rounded-full border border-[#27d59b]/30" />

                        {/* Crosshair */}
                        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.07]" />
                        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/[0.07]" />

                        {/* Centre */}
                        <div className="relative flex h-16 w-16 items-center justify-center border border-[#27d59b]/50 bg-[#081b24]">
                          <span className="h-2.5 w-2.5 bg-[#27d59b]" />
                        </div>

                        {/* Data points */}
                        <span className="absolute left-5 top-10 h-1.5 w-1.5 bg-white/50" />
                        <span className="absolute right-7 top-16 h-1.5 w-1.5 bg-[#27d59b]" />
                        <span className="absolute bottom-8 left-12 h-1.5 w-1.5 bg-white/40" />
                        <span className="absolute bottom-12 right-5 h-1.5 w-1.5 bg-white/30" />
                      </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute left-4 top-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                      Operating environment
                    </div>

                    <div className="absolute bottom-4 left-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                      Connected / Field layer
                    </div>

                    <div className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-[0.18em] text-[#27d59b]/70">
                      VIoT
                    </div>
                  </div>
                </div>

                {/* Visual footer */}
                <div className="flex items-center justify-between border-t border-white/[0.1] px-5 py-4 sm:px-7">
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/35">
                    {solution.name}
                  </span>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#27d59b]/80">
                    Field intelligence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — DATA JOURNEY
      ========================================================= */}
      <section className="border-b border-white/[0.08] bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                  02 / Connected workflow
                </span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] sm:text-4xl lg:text-[50px]">
                From field event
                <br />
                <span className="font-normal text-white/40">
                  to operating response.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
                Devices, connectivity and the VIoT platform are evaluated
                together so the operating team can work from one connected
                data path.
              </p>
            </div>
          </div>

          {/* Data path */}
          <div className="mt-14 border-y border-white/[0.1]">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Capture",
                  text: "Vehicle, asset, access or sensor event.",
                },
                {
                  number: "02",
                  title: "Connect",
                  text: "Device data moves through the available network.",
                },
                {
                  number: "03",
                  title: "Understand",
                  text: "VIoT platform turns events into operational context.",
                },
                {
                  number: "04",
                  title: "Respond",
                  text: "Teams act on the event, exception or required workflow.",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={`relative min-h-[190px] border-b border-white/[0.1] p-6 md:min-h-[220px] md:border-b-0 md:p-7 ${
                    index !== 3 ? "md:border-r md:border-white/[0.1]" : ""
                  }`}
                >
                  <span className="font-mono text-[9px] font-semibold tracking-[0.2em] text-[#27d59b]">
                    {item.number}
                  </span>

                  <h3 className="mt-14 font-heading text-lg font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-xs leading-6 text-white/40">
                    {item.text}
                  </p>

                  {index !== 3 && (
                    <span className="absolute bottom-7 right-[-4px] hidden h-2 w-2 bg-[#27d59b] md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — PLATFORM CONNECTION
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                03 / Platform connection
              </span>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-5xl">
                Hardware and platform,
                <br />
                <span className="font-normal text-[#879399]">
                  evaluated as one system.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-md text-sm leading-7 text-[#607078]">
                The deployment starts with the operating requirement and works
                backward into the appropriate device, connectivity and platform
                configuration.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 border-l border-t border-[#cdd5d2] sm:grid-cols-3">
            {[
              {
                number: "01",
                title: "Hardware",
                text: "Select the device or sensing layer around the physical event.",
              },
              {
                number: "02",
                title: "Connectivity",
                text: "Define how information needs to move from the field into the platform.",
              },
              {
                number: "03",
                title: "Platform",
                text: "Bring the resulting information into an operational view.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-b border-r border-[#cdd5d2] bg-white p-6 sm:p-8"
              >
                <span className="font-mono text-[9px] font-semibold tracking-[0.18em] text-[#007c67]">
                  {item.number}
                </span>

                <h3 className="mt-12 font-heading text-lg font-semibold tracking-[-0.02em] text-[#081b24]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#607078]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/platform"
              className="group inline-flex items-center gap-3 border-b border-[#081b24] pb-1.5 text-sm font-semibold text-[#081b24] transition-colors hover:border-[#007c67] hover:text-[#007c67]"
            >
              Explore the VIoT platform
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — FINAL STATEMENT
      ========================================================= */}
      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-4xl">
            <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
              {solution.number} / {solution.name}
            </span>

            <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-5xl">
              Start with the operation.
              <br />
              <span className="font-normal text-[#879399]">
                Then build the connected system around it.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-[#607078] sm:text-base">
              Every deployment has different conditions. VIoT brings the
              relevant hardware, connectivity and platform capabilities into
              that operating context.
            </p>
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