"use client";

import Link from "next/link";

import { ArrowIcon } from "./icons";

const exploreLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Platform", href: "/platform" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Get In Touch", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
];

const divisions = [
  {
    number: "01",
    title: "Fleet Intelligence",
    href: "/products/fleet-intelligence",
  },
  {
    number: "02",
    title: "Asset Intelligence",
    href: "/products/asset-intelligence",
  },
  {
    number: "03",
    title: "Access Control",
    href: "/products/access-control",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06151b] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22]"
        style={{
          backgroundImage: "url('/image/foot.png')",
        }}
      />

      {/* Controlled dark overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[#06151b]/[0.62]" />

      {/* Subtle technical grid — intentionally very faint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="border-b border-white/[0.10] py-16 sm:py-20 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* =================================================
                BRAND
            ================================================= */}

            <div className="lg:col-span-5">
              <Link
                href="/"
                aria-label="VIoT home"
                className="group inline-flex items-center"
              >
                <span className="font-heading text-[42px] font-bold leading-none tracking-[-0.065em] text-white sm:text-[48px]">
                  V
                  <span className="text-[#27d59b] transition-colors duration-300 group-hover:text-white">
                    I
                  </span>
                  oT
                </span>
              </Link>

              <div className="mt-7 max-w-lg">
                <p className="font-heading text-[20px] font-medium leading-[1.35] tracking-[-0.025em] text-white/90 sm:text-[22px]">
                  Track what moves. Secure what matters. Control who gets in.
                </p>

                <p className="mt-5 max-w-md text-[13px] leading-6 text-white/45">
                  Connected intelligence for vehicles, assets and controlled
                  access — built around the hardware and operations that keep
                  businesses moving.
                </p>
              </div>

              {/* Technical descriptor */}
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-9 bg-[#27d59b]" />

                <span className="font-mono text-[8px] font-medium uppercase tracking-[0.2em] text-white/35">
                  Fleet · Asset · Access Intelligence
                </span>
              </div>
            </div>

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 sm:gap-x-10">
                {/* Explore */}
                <div>
                  <p className="mb-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                    Explore
                  </p>

                  <nav className="flex flex-col">
                    {exploreLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-2 border-b border-white/[0.06] py-3 text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                      >
                        <span className="h-px w-0 bg-[#27d59b] transition-all duration-200 group-hover:w-3" />

                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Company */}
                <div>
                  <p className="mb-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                    Company
                  </p>

                  <nav className="flex flex-col">
                    {companyLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-2 border-b border-white/[0.06] py-3 text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                      >
                        <span className="h-px w-0 bg-[#27d59b] transition-all duration-200 group-hover:w-3" />

                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>

                  <a
                    href="mailto:team@viot.in"
                    className="mt-5 inline-block text-[11px] text-white/35 transition-colors hover:text-[#27d59b]"
                  >
                    team@viot.in
                  </a>
                </div>

                {/* Divisions */}
                <div className="col-span-2 sm:col-span-1">
                  <p className="mb-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                    Divisions
                  </p>

                  <div className="flex flex-col">
                    {divisions.map((division) => (
                      <Link
                        key={division.number}
                        href={division.href}
                        className="group flex items-start gap-2.5 border-b border-white/[0.06] py-3"
                      >
                        <span className="pt-[2px] font-mono text-[7px] text-white/20 transition-colors duration-200 group-hover:text-[#27d59b]">
                          {division.number}
                        </span>

                        <span className="text-[12px] leading-5 text-white/50 transition-colors duration-200 group-hover:text-white">
                          {division.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <p className="mb-5 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                    Based in
                  </p>

                  <address className="not-italic text-[12px] leading-6 text-white/45">
                    Sector 104, Noida
                    <br />
                    Uttar Pradesh 201301
                    <br />
                    India
                  </address>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                    <span className="font-mono text-[7px] uppercase tracking-[0.17em] text-white/30">
                      India
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            CTA / CONTACT BAND
        ===================================================== */}

        <div className="border-b border-white/[0.10] py-12 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
            {/* CTA heading */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                  Start a conversation
                </span>

                <span className="h-px w-8 bg-white/15" />
              </div>

              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-[44px]">
                Have a fleet, asset or access problem to solve?
              </h2>

              <p className="mt-4 max-w-xl text-[13px] leading-6 text-white/40">
                Tell us what you are trying to monitor, secure or control.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <Link
                href="/contact"
                className="group flex w-full items-center justify-between border border-white/20 bg-white/[0.035] px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:border-[#27d59b] hover:bg-[#27d59b] hover:text-[#06151b] sm:w-[220px]"
              >
                <span>Talk to VIoT</span>

                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="flex flex-col gap-5 py-6 text-[9px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono tracking-[0.04em]">
            © 2026 VIoT Technologies LLP. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="font-mono tracking-[0.04em]">
              AIS-140 certified support available
            </span>

            <span className="hidden h-3 w-px bg-white/10 sm:block" />

            <a
              href="mailto:team@viot.in"
              className="font-mono text-white/40 transition-colors hover:text-[#27d59b]"
            >
              team@viot.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}