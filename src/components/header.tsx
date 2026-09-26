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
        className="inline-flex items-center gap-1 text-[13px] font-semibold transition-colors"
      >
        {label}
        <svg
          width="7"
          height="4"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform duration-200 ${hover ? "rotate-180" : ""}`}
        >
          <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
                  className="group flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-semibold text-[#081b24] transition-all hover:bg-[#f4f6f2] hover:text-[#007c67]"
                >
                  <span className="text-[#081b24]">{itemLabel}</span>
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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setMobileExpanded(null);
  };

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div
        style={{
          backgroundColor: isScrolled ? "#ffffff" : "#0d2935",
          borderColor: isScrolled ? "#cdd5d2" : "rgba(255, 255, 255, 0.15)",
        }}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-5 transition-all duration-300 shadow-xl border"
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
            className="hidden items-center justify-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-bold tracking-wide whitespace-nowrap transition-all hover:opacity-90 hover:shadow-md lg:inline-flex"
          >
            Get in touch 
            <span className="scale-75 inline-flex items-center"><ArrowIcon /></span>
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
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-x-4 top-20 z-50 mx-auto max-h-[82vh] max-w-6xl overflow-y-auto rounded-3xl border border-[#cdd5d2] bg-white p-5 shadow-2xl lg:hidden"
    >
      <div className="flex flex-col gap-1.5 pb-3">

        {/* Home */}
        <Link
          href="/"
          onClick={close}
          className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
            pathname === "/"
              ? "bg-[#f4f6f2] !text-[#007c67]"
              : "!text-[#07151c] hover:bg-[#f4f6f2] hover:!text-[#007c67]"
          }`}
        >
          Home
        </Link>

        {/* About */}
        <Link
          href="/about"
          onClick={close}
          className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
            pathname === "/about"
              ? "bg-[#f4f6f2] !text-[#007c67]"
              : "!text-[#07151c] hover:bg-[#f4f6f2] hover:!text-[#007c67]"
          }`}
        >
          About Us
        </Link>

        {/* Navigation Items */}
        {navItems.map((n) => {
          const isExpanded = mobileExpanded === n.label;

          return (
            <div
              key={n.href}
              className="mt-1 overflow-hidden rounded-2xl border border-[#e5eae7] bg-[#f8faf9]"
            >
              <div className="flex items-center justify-between px-4 py-2.5">

                <Link
                  href={n.href}
                  onClick={close}
                  className="!text-[#07151c] text-sm font-bold transition-colors hover:!text-[#007c67]"
                >
                  {n.label}
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    setMobileExpanded(isExpanded ? null : n.label)
                  }
                  className="p-2 !text-[#07151c] focus:outline-none"
                  aria-label={`Toggle ${n.label} menu`}
                >
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    className={`transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M1 1L4.5 4.5L8 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-1 border-t border-[#e5eae7] bg-white px-3 pb-3 pt-1"
                  >
                    {n.links.map(([label, href]) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={close}
                        className="flex items-center justify-between rounded-xl px-3 py-2 text-[13px] font-semibold !text-[#07151c] transition-colors hover:bg-[#f4f6f2] hover:!text-[#007c67]"
                      >
                        <span>{label}</span>

                        <span className="text-xs font-mono !text-[#009f7f]">
                          →
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Contact Button */}
      <div className="mt-2 border-t border-[#e5eae7] pt-2">
        <Link
          href="/contact"
          onClick={close}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#27d59b] px-4 py-3 text-sm font-bold !text-[#07151c] shadow-sm transition-colors hover:bg-[#081b24] hover:!text-white"
        >
          Get in touch

          <span className="inline-flex scale-90 items-center">
            <ArrowIcon />
          </span>
        </Link>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </header>
  );
}