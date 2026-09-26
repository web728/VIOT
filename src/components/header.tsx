"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowIcon } from "./icons";

const productLinks = [
  ["Vehicle telematics", "/products/vehicle-telematics"],
  ["Video telematics", "/products/video-telematics"],
  ["Smart Logistics locks", "/products/smart-logistics-locks"],
  ["Smart Infra Locks", "/products/smart-infra-locks"],
  ["Asset Trackers", "/products/asset-trackers"],
  ["IoT Sensors", "/products/iot-sensors"],
] as const;

const solutionLinks = [
  ["Logistics & Supply Chain", "/solutions/logistics-supply-chain"],
  ["Pharmaceuticals & Chemicals", "/solutions/pharmaceuticals-chemicals"],
  ["Construction", "/solutions/construction"],
  ["Mining", "/solutions/mining"],
  ["FMCG", "/solutions/fmcg"],
  ["Data Centres", "/solutions/data-centres"],
  ["Schools & Universities", "/solutions/schools-universities"],
  ["Smart Infrastructure", "/solutions/smart-infrastructure"],
] as const;

const platformLinks = [
  ["Fleet Management", "/platform#fleet-management"],
  ["EV Management", "/platform#ev-management"],
  ["E Lock", "/platform#e-lock"],
  ["Video", "/platform#video"],
  ["Fuel Monitoring", "/platform#fuel-monitoring"],
] as const;

const navItems = [
  { label: "Products", href: "/products", links: productLinks },
  { label: "Solutions", href: "/solutions", links: solutionLinks },
  { label: "Platform", href: "/platform", links: platformLinks },
] as const;

function NavGroup({
  label,
  href,
  links,
  active,
  isScrolled,
}: {
  label: string;
  href: string;
  links: ReadonlyArray<readonly [string, string]>;
  active: boolean;
  isScrolled: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative py-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={href}
        style={{
          color: active 
            ? "#27d59b" 
            : isScrolled 
            ? (hover ? "#007c67" : "#081b24") 
            : (hover ? "#27d59b" : "#ffffff"),
        }}
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors"
      >
        {label}
        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform duration-200 ${hover ? "rotate-180" : ""}`}
        >
          <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </Link>

      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-20 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-[#cdd5d2] bg-white p-2 shadow-[0_20px_50px_rgba(8,27,36,0.2)]"
          >
            <div className="flex flex-col gap-0.5">
              {links.map(([itemLabel, itemHref]) => (
                <Link
                  key={itemHref}
                  href={itemHref}
                  className="group flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-medium text-[#081b24] transition-all hover:bg-[#f4f6f2] hover:text-[#007c67] hover:translate-x-0.5"
                >
                  <span className="font-medium text-[#081b24]">{itemLabel}</span>
                  <span className="text-[#27d59b] opacity-0 transition-opacity group-hover:opacity-100 font-mono text-xs">→</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div
        style={{
          backgroundColor: isScrolled ? "#ffffff" : "#0d2935",
          borderColor: isScrolled ? "#cdd5d2" : "rgba(255, 255, 255, 0.15)",
        }}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 shadow-xl"
      >
        {/* Brand Logo */}
        <Link href="/" aria-label="VIoT home" className="flex items-center gap-2 group py-1" onClick={close}>
          <span 
            style={{ color: isScrolled ? "#081b24" : "#ffffff" }}
            className="font-heading text-xl font-bold tracking-tight transition-colors"
          >
            V<span className="text-[#27d59b] transition-transform group-hover:scale-110 inline-block">I</span>oT
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            style={{
              color: pathname === "/" 
                ? "#27d59b" 
                : isScrolled 
                ? "#081b24" 
                : "#ffffff",
            }}
            className="text-[13px] font-semibold transition-colors hover:text-[#27d59b]"
          >
            Home
          </Link>
          <Link
            href="/about"
            style={{
              color: pathname === "/about" 
                ? "#27d59b" 
                : isScrolled 
                ? "#081b24" 
                : "#ffffff",
            }}
            className="text-[13px] font-semibold transition-colors hover:text-[#27d59b]"
          >
            About
          </Link>
          {navItems.map((n) => (
            <NavGroup key={n.href} label={n.label} href={n.href} links={n.links} active={pathname.startsWith(n.href)} isScrolled={isScrolled} />
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            style={{
              backgroundColor: isScrolled ? "#081b24" : "#27d59b",
              color: isScrolled ? "#ffffff" : "#081b24",
            }}
            className="hidden items-center justify-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all hover:opacity-90 hover:shadow-md lg:inline-flex"
          >
            Get in touch <ArrowIcon />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              backgroundColor: isScrolled ? "#f4f6f2" : "rgba(255, 255, 255, 0.1)",
              borderColor: isScrolled ? "#cdd5d2" : "rgba(255, 255, 255, 0.2)",
            }}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] rounded-xl border lg:hidden transition-colors"
          >
            <span className={`block h-[1.5px] w-5 transition-transform duration-300 ${open ? "translate-y-[3.75px] rotate-45 bg-[#081b24]" : isScrolled ? "bg-[#081b24]" : "bg-white"}`} />
            <span className={`block h-[1.5px] w-5 transition-transform duration-300 ${open ? "-translate-y-[3.75px] -rotate-45 bg-[#081b24]" : isScrolled ? "bg-[#081b24]" : "bg-white"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-[#cdd5d2] bg-white p-4 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 pb-2">
              <Link href="/" onClick={close} className="rounded-xl px-3.5 py-3 text-sm font-semibold text-[#081b24] hover:bg-[#f4f6f2]">Home</Link>
              <Link href="/about" onClick={close} className="rounded-xl px-3.5 py-3 text-sm font-semibold text-[#081b24] hover:bg-[#f4f6f2]">About Us</Link>
              
              {navItems.map((n) => (
                <div key={n.href} className="border-t border-[#cdd5d2] pt-2 mt-1">
                  <Link href={n.href} onClick={close} className="block px-3.5 py-2 text-sm font-bold text-[#081b24]">{n.label}</Link>
                  <div className="flex flex-col gap-1 py-1 pl-3">
                    {n.links.map(([label, href]) => (
                      <Link key={href} href={href} onClick={close} className="rounded-lg px-3 py-2 text-[13px] font-medium text-[#607078] hover:bg-[#f4f6f2] hover:text-[#081b24]">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              onClick={close}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#27d59b] px-4 py-3 text-sm font-bold text-[#081b24] shadow-sm hover:bg-[#081b24] hover:text-white transition-colors"
            >
              Get in touch <ArrowIcon />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}