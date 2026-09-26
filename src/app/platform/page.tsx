import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";
import { ProcessReveal, Reveal } from "@/components/motion";
import { PlatformDataFlow } from "./_components/platform-data-flow";

export const metadata: Metadata = { 
  title: "Fleet Intelligence Platform", 
  description: "One operating picture for every VIoT device: live map, zones, alerts, analytics, driver behaviour and API access.", 
  alternates: { canonical: "/platform" } 
};

const features = [
  ["01", "Live fleet view", "Current asset position, trip state and the health of the device feeding the data."],
  ["02", "Zones and geofences", "Define operating areas and know when a vehicle or secured asset crosses the line."],
  ["03", "Real-time exceptions", "Surface tamper, panic, unauthorised movement and low-battery events while action is still possible."],
  ["04", "Fleet analytics", "Turn trip and event history into patterns for operations, security and maintenance decisions."],
  ["05", "Driver behaviour", "See movement patterns that warrant coaching, review or closer attention."],
  ["06", "API access", "Move trusted VIoT data into an ERP, TMS or another system already used by the business."],
];

const modules = [
  { id: "fleet-management", number: "01", name: "Fleet Management", status: "Core platform", copy: "Live fleet position, trip state, device health, zones and exceptions in one operating view." },
  { id: "ev-management", number: "02", name: "EV Management", status: "Deployment scoped", copy: "Bring available battery, charging and vehicle data into the fleet workflow after the supported vehicle inputs are confirmed." },
  { id: "e-lock", number: "03", name: "E Lock", status: "Connected security", copy: "Read lock state, tamper and unauthorised-access events with the location and time context needed to respond." },
  { id: "video", number: "04", name: "Video", status: "In development", copy: "A planned visual-safety layer for the VIoT platform. It is in active development and is not currently available to order." },
  { id: "fuel-monitoring", number: "05", name: "Fuel Monitoring", status: "Configuration dependent", copy: "Evaluate fuel inputs, reporting logic and installation constraints against the actual vehicle and operating requirement." },
];

export default function PlatformPage() {
  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      
      {/* 1. Compact Page Hero */}
      <PageHero 
        breadcrumb="Platform / Operating Picture"
        title="One operating picture for"
        titleHighlight="every device."
        lede="Live map, zones, alerts, analytics, driver behaviour and API access designed around the VIoT hardware ecosystem."
      />

      {/* Interactive Data Flow Section */}
      <section className="bg-ink text-white py-12 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <PlatformDataFlow />
        </div>
      </section>

      {/* 2. Platform Modules Section (Light Background) */}
      <section className="py-24 md:py-32 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal-dark shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                Platform Areas
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-[1.15]">
                Five views for different <br />
                <span className="text-muted">operating jobs.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                Each area works from the data available in the deployment. Modules and depth are confirmed against the hardware, vehicle and integration scope.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id} 
                id={module.id}
                className="group flex flex-col justify-between p-8 rounded-2xl border border-line bg-white shadow-2xs transition-all duration-300 hover:border-signal-dark hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-signal-dark tracking-widest">{module.number}</span>
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-signal/10 text-signal-dark border border-signal/30 font-medium">
                      {module.status}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-ink tracking-tight group-hover:text-signal-dark transition-colors">
                    {module.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                    {module.copy}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-line">
                  <Link 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-signal-dark transition-transform group-hover:translate-x-1" 
                    href={`/contact?interest=${module.id}`}
                  >
                    Discuss this module <ArrowIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Operating Loop (Dark Section) */}
      <section className="py-24 md:py-32 bg-ink text-white border-b border-white/15 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 space-y-16">
          <Reveal direction="left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                The Operating Loop
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Capture. Deliver. Read. Act.
              </h2>
            </div>
          </Reveal>

          <ProcessReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-signal">01 / EDGE</span>
              <h3 className="text-base font-semibold text-white">Capture</h3>
              <p className="text-xs text-white/60 leading-relaxed">The device records position, vehicle and security events.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-signal">02 / NETWORK</span>
              <h3 className="text-base font-semibold text-white">Deliver</h3>
              <p className="text-xs text-white/60 leading-relaxed">Live reporting with fallback and offline storage for interruptions.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-signal">03 / PLATFORM</span>
              <h3 className="text-base font-semibold text-white">Read</h3>
              <p className="text-xs text-white/60 leading-relaxed">One operating picture makes the current state visible.</p>
            </div>
            <div className="p-6 rounded-xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-signal">04 / TEAM</span>
              <h3 className="text-base font-semibold text-white">Act</h3>
              <p className="text-xs text-white/60 leading-relaxed">Alerts and history give teams the context to respond.</p>
            </div>
          </ProcessReveal>
        </div>
      </section>

      {/* 4. Capabilities Feature Table (Light Background) */}
      <section className="py-24 md:py-32 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal-dark shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                Capabilities
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-[1.15]">
                Useful when something changes.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                The platform is organised around decisions, not a wall of charts. See the current state, find the exception, and trace what led to it.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map(([number, title, copy]) => (
              <div key={number} className="flex gap-5 p-6 rounded-2xl border border-line bg-white shadow-2xs">
                <span className="font-mono text-xs font-semibold text-signal-dark">{number}</span>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">{copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Integrations & Closing CTA Band */}
      <section className="relative py-28 md:py-36 bg-ink text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 space-y-16">
          
          {/* Integration Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-white/10 pb-16">
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                Integrations
              </div>
              <h2 className="font-heading text-3xl font-semibold text-white tracking-tight">
                Keep the systems your operation already uses.
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                API access lets VIoT data feed an ERP, TMS or a partner-built workflow. The platform can be the operating surface, the source system, or both—depending on the deployment.
              </p>
              <div>
                <Link 
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-white transition-colors whitespace-nowrap" 
                  href="/contact"
                >
                  Discuss an integration 
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Final CTA Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between rounded-3xl border border-white/10 bg-ink-2/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-widest text-signal">Get Started</span>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Evaluate the platform fit.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start lg:text-right">
              <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm leading-relaxed">
                Connect your devices or discuss module requirements directly with Bharat or Vyom.
              </p>
              <div className="w-full sm:w-auto flex lg:justify-end">
                <Link 
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
                  href="/contact"
                >
                  Talk to VIoT 
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}