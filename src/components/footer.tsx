"use client";

import Link from "next/link";
import { ArrowIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative bg-[#06151b] text-white border-t border-white/10 overflow-hidden">
      {/* Subtle ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-signal/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_2fr] lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Tagline Column */}
          <div className="space-y-4">
            <Link className="inline-flex items-center group" href="/" aria-label="VIoT home">
              <span className="font-heading text-3xl font-bold tracking-tight lg:text-4xl">
                V<span className="text-signal transition-transform group-hover:scale-110 inline-block">I</span>oT
              </span>
            </Link>
            <p className="text-sm text-white/60 font-sans max-w-xs leading-relaxed">
              Track what moves. Secure what matters. Control who gets in.
            </p>
            <div className="pt-2 font-mono text-[11px] text-white/40 tracking-wider">
              Fleet, Asset &amp; Access Intelligence
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* Explore Column */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-signal">
                Explore
              </p>
              <Link href="/products" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                Products
              </Link>
              <Link href="/solutions" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                Solutions
              </Link>
              <Link href="/platform" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                Platform
              </Link>
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-signal">
                Company
              </p>
              <Link href="/about" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                Get In Touch
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                Privacy
              </Link>
              <a href="mailto:team@viot.in" className="text-xs sm:text-sm text-white/70 transition-colors hover:text-white">
                team@viot.in
              </a>
            </div>

            {/* Divisions Column */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-signal">
                Divisions
              </p>
              <span className="text-xs text-white/50">Fleet Intelligence</span>
              <span className="text-xs text-white/50">Asset Intelligence</span>
              <span className="text-xs text-white/50">Access Control</span>
            </div>

            {/* Based in Column */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-signal">
                Based in
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-white/60 font-sans">
                Sector 104, Noida <br />
                Uttar Pradesh 201301 <br />
                India
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Bar with Refined Premium Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-[11px] text-white/50">
          <p>© 2026 VIoT Technologies LLP. All rights reserved.</p>
          
          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-end">
            <span className="hidden md:inline text-white/40">AIS-140 certified support available</span>
            
            <a 
              href="mailto:team@viot.in" 
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-2/80 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:border-signal hover:bg-signal hover:text-ink hover:shadow-[0_0_20px_rgba(39,213,155,0.3)] whitespace-nowrap"
            >
              Start a conversation 
              <ArrowIcon className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}