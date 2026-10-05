import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowIcon, CheckIcon } from "@/components/icons";
import { CtaBand } from "@/components/home/CtaBand";
import { getPlatformModule, platformModules } from "@/lib/platform-modules";

export const dynamicParams = false;

type PlatformDetailParams = {
  params: Promise<{ slug: string }>;
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
      </svg>
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

function GenericModulePage({
  module,
}: {
  module: NonNullable<ReturnType<typeof getPlatformModule>>;
}) {
  const related = platformModules
    .filter((item) => item.slug !== module.slug)
    .slice(0, 4);

  return (
    <>
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
        </div>
      </section>

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
              <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/80 shadow-[0_16px_45px_rgba(8,27,36,0.05)]">
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

      <section className="relative overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.018]">
            <div className="grid md:grid-cols-3">
              {[
                { number: "01", title: "Signals", items: module.signals },
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
                { number: "03", title: "Outcomes", items: module.outcomes },
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
                  <h3 className="mt-6 font-heading text-lg font-semibold">
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

      <CtaBand />
    </>
  );
}

function FleetIntelligencePage({
  module,
}: {
  module: NonNullable<ReturnType<typeof getPlatformModule>>;
}) {
  const content = module.fleetIntelligence;

  if (!content) return <GenericModulePage module={module} />;

  return (
    <>
      <section className="relative min-h-[590px] overflow-hidden bg-[#081b24] text-white">
        <VIoTBackground dark />
        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1440px] flex-col justify-between px-6 pb-8 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          <div>
            <SectionLabel dark>Fleet Intelligence</SectionLabel>
          </div>

          <div className="grid items-center gap-10 py-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="max-w-4xl font-heading text-[clamp(2.8rem,5.2vw,5.3rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
                {module.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-[15px]">
                {module.lede}
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5">
                <div className="rounded-xl border border-white/[0.08] bg-[#0b222c] p-5">
                  <div className="space-y-3">
                    {["Driver behaviour", "Route", "Maintenance"].map((item) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-3"
                      >
                        <span className="text-[11px] text-white/70">{item}</span>
                        <span className="h-2 w-2 rounded-full bg-[#27d59b]" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
          <SectionLabel>2. The Problem</SectionLabel>
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
                  className="text-sm leading-7 text-[#607078]"
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
          <SectionLabel>3. What Fleet Intelligence Actually Covers</SectionLabel>
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
          <SectionLabel dark>4. How VIoT Does This Differently</SectionLabel>
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
          <SectionLabel>5. One Engine, Not Three Dashboards</SectionLabel>
          <p className="mt-4 text-sm leading-7 text-[#607078]">
            {content.engineCaption}
          </p>

          <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_16px_45px_rgba(8,27,36,0.05)]">
            <div className="grid md:grid-cols-3">
              {[
                "Driver Behavior Scoring",
                "Route & Geofence Intelligence",
                "Maintenance & Health Alerts",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`p-5 text-center sm:p-6 ${
                    index !== 2
                      ? "border-b border-[#d8e2de] md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <h3 className="font-heading text-lg font-semibold">{item}</h3>
                </div>
              ))}
            </div>

            <div className="border-t border-[#d8e2de] bg-[#081b24] px-5 py-8 text-center text-white">
              <div className="mx-auto max-w-md rounded-xl border border-[#27d59b]/20 bg-[#27d59b]/[0.05] px-5 py-4">
                <p className="font-heading text-xl font-semibold">
                  Fleet Intelligence Engine
                </p>
              </div>
              <div className="mx-auto mt-5 max-w-md rounded-xl border border-white/[0.09] bg-white/[0.04] px-5 py-4">
                <p className="font-heading text-xl font-semibold">
                  One score. One action list.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-[#607078]">
            {content.engineText}
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white">
        <VIoTBackground />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>6. Where This Is Proven</SectionLabel>
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
          <SectionLabel dark>7. Built to Last</SectionLabel>
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

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.09]">
            <div className="grid grid-cols-4">
              {["Install", "", "", ""].map((item, index) => (
                <div
                  key={index}
                  className={`min-h-14 p-4 ${
                    index !== 3 ? "border-r border-white/[0.08]" : ""
                  }`}
                >
                  {item ? (
                    <p className="text-center text-[11px] text-white/58">{item}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <SectionLabel>8. Contact / Enquiry</SectionLabel>
          <div className="mt-6 rounded-2xl border border-[#c8d5d0] bg-white px-6 py-8 shadow-[0_16px_45px_rgba(8,27,36,0.05)] sm:px-8">
            <h2 className="max-w-2xl font-heading text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">
              {content.ctaHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#607078]">
              {content.ctaSubheading}
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex h-11 items-center gap-3 rounded-lg border border-[#27d59b] bg-[#27d59b] px-5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
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

export default async function PlatformDetailPage({
  params,
}: PlatformDetailParams) {
  const { slug } = await params;
  const module = getPlatformModule(slug);

  if (!module) notFound();

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">
      {module.slug === "fleet-management" ? (
        <FleetIntelligencePage module={module} />
      ) : (
        <GenericModulePage module={module} />
      )}
    </main>
  );
}
