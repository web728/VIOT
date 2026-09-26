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
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#06151b] text-white">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}
     <div
  className="pointer-events-none absolute inset-0 opacity-[0.65] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/image/foot.png')",
  }}
/>

      <div className="pointer-events-none absolute bottom-[-140px] left-1/2 h-[360px] w-[700px] -translate-x-1/2 rounded-full blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}
        <div className="grid gap-16 py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">

          {/* =================================================
              BRAND
          ================================================= */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="VIoT home"
              className="group inline-flex items-center"
            >
              <span className="font-heading text-[42px] font-bold leading-none tracking-[-0.055em] text-white sm:text-[48px]">
                V
                <span className="text-[#27d59b] transition-colors duration-300 group-hover:text-white">
                  I
                </span>
                oT
              </span>
            </Link>

            <p className="mt-7 max-w-md text-[17px] font-medium leading-7 tracking-[-0.015em] text-white/75">
              Track what moves. Secure what matters. Control who gets in.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/40">
              Connected intelligence for vehicles, assets and controlled
              access — built around the hardware and operations that keep
              businesses moving.
            </p>

            {/* Brand descriptor */}
            <div className="mt-9 flex items-center gap-3">
              <span className="h-px w-8 bg-[#27d59b]" />

              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-white/35">
                Fleet · Asset · Access Intelligence
              </span>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:col-span-7 lg:gap-x-8">

            {/* Explore */}
            <div>
              <p className="mb-6 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                Explore
              </p>

              <nav className="flex flex-col gap-4">
                {exploreLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-white/55 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company */}
            <div>
              <p className="mb-6 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                Company
              </p>

              <nav className="flex flex-col gap-4">
                {companyLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="w-fit text-sm text-white/55 transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <a
                href="mailto:team@viot.in"
                className="mt-5 block w-fit text-xs leading-5 text-white/35 transition-colors hover:text-[#27d59b]"
              >
                team@viot.in
              </a>
            </div>

            {/* Divisions */}
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-6 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                Divisions
              </p>

              <div className="flex flex-col gap-4">
                {divisions.map((division) => (
                  <Link
                    key={division.number}
                    href={division.href}
                    className="group flex items-start gap-2.5"
                  >
                    <span className="pt-0.5 font-mono text-[8px] text-white/20 transition-colors group-hover:text-[#27d59b]">
                      {division.number}
                    </span>

                    <span className="text-sm leading-5 text-white/55 transition-colors group-hover:text-white">
                      {division.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="mb-6 font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                Based in
              </p>

              <address className="not-italic text-sm leading-6 text-white/50">
                Sector 104, Noida
                <br />
                Uttar Pradesh 201301
                <br />
                India
              </address>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.17em] text-white/30">
                  India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            LARGE CTA STRIP
        ===================================================== */}
        <div className="border-y border-white/[0.08] py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#27d59b]">
                Start a conversation
              </p>

              <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                Have a fleet, asset or access problem to solve?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                Tell us what you are trying to monitor, secure or control.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#27d59b] px-7 py-3.5 text-sm font-semibold text-[#06151b] transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(39,213,155,0.18)] sm:w-auto"
            >
              Talk to VIoT

              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}
        <div className="flex flex-col gap-5 py-7 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">

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
              className="font-mono text-white/45 transition-colors hover:text-[#27d59b]"
            >
              team@viot.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}