import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";
import { PlatformDataFlow } from "./_components/platform-data-flow";

export const metadata: Metadata = {
  title: "Fleet Intelligence Platform",
  description:
    "One operating picture for every VIoT device: live map, zones, alerts, analytics, driver behaviour and API access.",
  alternates: {
    canonical: "/platform",
  },
};

const features = [
  [
    "01",
    "Live fleet view",
    "Current asset position, trip state and the health of the device feeding the data.",
  ],
  [
    "02",
    "Zones and geofences",
    "Define operating areas and know when a vehicle or secured asset crosses the line.",
  ],
  [
    "03",
    "Real-time exceptions",
    "Surface tamper, panic, unauthorised movement and low-battery events while action is still possible.",
  ],
  [
    "04",
    "Fleet analytics",
    "Turn trip and event history into patterns for operations, security and maintenance decisions.",
  ],
  [
    "05",
    "Driver behaviour",
    "See movement patterns that warrant coaching, review or closer attention.",
  ],
  [
    "06",
    "API access",
    "Move trusted VIoT data into an ERP, TMS or another system already used by the business.",
  ],
];

const modules = [
  {
    id: "fleet-management",
    number: "01",
    name: "Fleet Management",
    status: "Core platform",
    copy: "Live fleet position, trip state, device health, zones and exceptions in one operating view.",
  },
  {
    id: "ev-management",
    number: "02",
    name: "EV Management",
    status: "Deployment scoped",
    copy: "Bring available battery, charging and vehicle data into the fleet workflow after the supported vehicle inputs are confirmed.",
  },
  {
    id: "e-lock",
    number: "03",
    name: "E Lock",
    status: "Connected security",
    copy: "Read lock state, tamper and unauthorised-access events with the location and time context needed to respond.",
  },
  {
    id: "video",
    number: "04",
    name: "Video",
    status: "In development",
    copy: "A planned visual-safety layer for the VIoT platform. It is in active development and is not currently available to order.",
  },
  {
    id: "fuel-monitoring",
    number: "05",
    name: "Fuel Monitoring",
    status: "Configuration dependent",
    copy: "Evaluate fuel inputs, reporting logic and installation constraints against the actual vehicle and operating requirement.",
  },
];

export default function PlatformPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

      {/* =========================================================
          01 — HERO
      ========================================================= */}

      <PageHero
        breadcrumb="Platform / Operating Picture"
        title="One operating picture for"
        titleHighlight="every device."
        lede="Live map, zones, alerts, analytics, driver behaviour and API access designed around the VIoT hardware ecosystem."
      />

      {/* =========================================================
          02 — DATA FLOW
      ========================================================= */}

      <section className="border-b border-white/[0.08] bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="mb-10 flex items-end justify-between gap-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#27d59b]">
                  Data architecture
                </span>
              </div>

              <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                From connected hardware
                <span className="text-white/35"> to an operating decision.</span>
              </h2>
            </div>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-white/25 lg:block">
              01 — Signal path
            </span>
          </div>

          <PlatformDataFlow />
        </div>
      </section>

      {/* =========================================================
          03 — PLATFORM MODULES
      ========================================================= */}

      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid grid-cols-1 gap-10 border-b border-[#cdd5d2] pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                  02 / Platform modules
                </span>
              </div>

              <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#081b24] sm:text-4xl lg:text-5xl">
                Five views.
                <br />
                <span className="text-[#8a969a]">
                  Different operating jobs.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="max-w-xl text-sm leading-7 text-[#607078] sm:text-base">
                Each area works from the data available in the deployment.
                Modules and depth are confirmed against the hardware, vehicle
                and integration scope.
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#cdd5d2] border-b border-[#cdd5d2]">
            {modules.map((module) => (
              <Link
                key={module.id}
                id={module.id}
                href={`/contact?interest=${module.id}`}
                className="group grid grid-cols-1 gap-6 py-7 transition-colors duration-300 hover:bg-[#f4f6f2] sm:grid-cols-12 sm:gap-8 sm:py-9"
              >
                {/* Number */}
                <div className="sm:col-span-1">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-[#007c67]">
                    {module.number}
                  </span>
                </div>

                {/* Main */}
                <div className="sm:col-span-6 lg:col-span-5">
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading text-xl font-semibold tracking-[-0.025em] text-[#081b24] transition-colors group-hover:text-[#007c67] sm:text-2xl">
                      {module.name}
                    </h3>

                    <span className="h-1.5 w-1.5 bg-[#27d59b]" />
                  </div>
                </div>

                {/* Description */}
                <div className="sm:col-span-5 lg:col-span-4">
                  <p className="max-w-lg text-sm leading-6 text-[#607078]">
                    {module.copy}
                  </p>
                </div>

                {/* Status + arrow */}
                <div className="flex items-center justify-between sm:col-span-12 sm:mt-1 lg:col-span-2 lg:col-start-11 lg:row-start-1 lg:justify-end">
                  <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#8a969a]">
                    {module.status}
                  </span>

                  <span className="ml-5 flex h-9 w-9 items-center justify-center border border-[#cdd5d2] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">
                    <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#a0aaae]">
              Connected platform areas
            </span>

            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">
              Hardware → Platform
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — OPERATING LOOP
      ========================================================= */}

      <section className="border-b border-white/[0.08] bg-[#06171f] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-9 bg-[#27d59b]" />

                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#27d59b]">
                  03 / The operating loop
                </span>
              </div>

              <h2 className="font-heading text-4xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[60px]">
                Capture.
                <span className="text-white/25"> Deliver.</span>
                <br />
                Read.
                <span className="text-[#27d59b]"> Act.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-lg text-sm leading-7 text-white/45 sm:text-base">
                VIoT turns signals from connected hardware into an operating
                workflow — capturing what happens in the field, delivering it
                reliably, making it visible and helping teams respond.
              </p>
            </div>
          </div>

          {/* Desktop editorial flow */}
          <div className="relative mt-16 lg:mt-20">

            <div className="absolute left-0 right-0 top-[42px] hidden h-px bg-white/[0.12] lg:block" />

            <div className="absolute left-0 top-[42px] hidden h-px w-[75%] bg-[#27d59b] lg:block" />

            <div className="grid grid-cols-1 divide-y divide-white/[0.1] lg:grid-cols-4 lg:divide-x lg:divide-y-0">

              {[
                {
                  number: "01",
                  label: "Edge",
                  title: "Capture",
                  copy: "Connected devices record position, vehicle state and security events directly from the field.",
                  footer: "Hardware · Sensors · Events",
                },
                {
                  number: "02",
                  label: "Network",
                  title: "Deliver",
                  copy: "Signals move through the network with fallback and offline storage when connectivity is interrupted.",
                  footer: "Connectivity · Sync · Fallback",
                },
                {
                  number: "03",
                  label: "Platform",
                  title: "Read",
                  copy: "The platform turns incoming signals into one operating picture of what is happening across the deployment.",
                  footer: "Platform · Analytics · Context",
                },
                {
                  number: "04",
                  label: "Team",
                  title: "Act",
                  copy: "Alerts and event history give teams the context to investigate, respond and make operational decisions.",
                  footer: "Alerts · Response · Decisions",
                },
              ].map((step, index) => (
                <div
                  key={step.number}
                  className="group relative px-0 py-10 lg:min-h-[330px] lg:px-8 lg:py-0 first:lg:pl-0 last:lg:pr-0"
                >
                  <div className="flex h-full flex-col">

                    <div className="flex items-center justify-between lg:pr-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27d59b]">
                        {step.number} / {step.label}
                      </span>

                      <span className="font-mono text-[9px] text-white/20">
                        {index === 3 ? "LIVE" : `0${index + 1}`}
                      </span>
                    </div>

                    <div className="mt-12 lg:mt-16">
                      <span className="font-heading text-3xl font-semibold tracking-[-0.035em] text-white transition-colors group-hover:text-[#27d59b] sm:text-4xl">
                        {step.title}
                      </span>

                      <p className="mt-5 max-w-xs text-sm leading-7 text-white/45">
                        {step.copy}
                      </p>
                    </div>

                    <div className="mt-auto border-t border-white/[0.08] pt-4 lg:mt-auto">
                      <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-white/25">
                        {step.footer}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-6 text-white/30">
              One continuous path from connected hardware to the people
              responsible for the operation.
            </p>

            <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
              <span className="h-1.5 w-1.5 bg-[#27d59b]" />
              Connected operating architecture
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          05 — CAPABILITIES
      ========================================================= */}

      <section className="border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid grid-cols-1 gap-10 border-b border-[#cdd5d2] pb-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                04 / Capabilities
              </span>

              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-[#081b24] sm:text-4xl lg:text-5xl">
                Useful when
                <br />
                <span className="text-[#8a969a]">something changes.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-xl text-sm leading-7 text-[#607078] sm:text-base">
                The platform is organised around decisions, not a wall of
                charts. See the current state, find the exception, and trace
                what led to it.
              </p>
            </div>
          </div>

          <div className="divide-y divide-[#cdd5d2] border-b border-[#cdd5d2]">
            {features.map(([number, title, copy]) => (
              <div
                key={number}
                className="group grid grid-cols-1 gap-5 py-7 transition-colors hover:bg-white sm:grid-cols-12 sm:gap-8 sm:py-8"
              >
                <div className="sm:col-span-1">
                  <span className="font-mono text-[10px] font-semibold text-[#007c67]">
                    {number}
                  </span>
                </div>

                <div className="sm:col-span-4">
                  <h3 className="font-heading text-lg font-semibold tracking-[-0.02em] text-[#081b24] transition-colors group-hover:text-[#007c67] sm:text-xl">
                    {title}
                  </h3>
                </div>

                <div className="sm:col-span-7">
                  <p className="max-w-2xl text-sm leading-6 text-[#607078]">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06 — INTEGRATIONS / CTA
      ========================================================= */}

      <section className="border-b border-white/[0.08] bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid grid-cols-1 gap-10 border-b border-white/[0.1] pb-14 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#27d59b]">
                05 / Integrations
              </span>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Keep the systems your operation
                <span className="text-white/30"> already uses.</span>
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                API access lets VIoT data feed an ERP, TMS or a partner-built
                workflow. The platform can be the operating surface, the source
                system, or both — depending on the deployment.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 border-b border-[#27d59b]/50 pb-2 text-sm font-semibold text-[#27d59b] transition-colors hover:border-white hover:text-white"
              >
                Discuss an integration
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 pt-14 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/25">
                Get started
              </span>

              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-4xl">
                Evaluate the platform fit.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                Connect your devices or discuss module requirements directly
                with Bharat or Vyom.
              </p>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex w-full items-center justify-between border border-[#27d59b] bg-[#27d59b] px-6 py-4 text-sm font-semibold text-[#081b24] transition-all duration-300 hover:bg-white hover:border-white sm:w-auto sm:min-w-[190px]"
              >
                <span>Talk to VIoT</span>

                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}