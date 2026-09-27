"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "./icons";

const productLinks = [
  ["Vehicle Telematics", "/products/vehicle-telematics"],
  ["Video Telematics", "/products/video-telematics"],
  ["Smart Logistics Locks", "/products/smart-logistics-locks"],
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
  ["Video Telematics", "/platform#video"],
  ["Fuel Monitoring", "/platform#fuel-monitoring"],
] as const;

const navItems = [
  {
    label: "Products",
    href: "/products",
    links: productLinks,
  },
  {
    label: "Solutions",
    href: "/solutions",
    links: solutionLinks,
  },
  {
    label: "Platform",
    href: "/platform",
    links: platformLinks,
  },
] as const;

function DesktopNavGroup({
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
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={href}
        style={{
          color: active
            ? isScrolled
              ? "#007c67"
              : "#27d59b"
            : isScrolled
              ? "#24353d"
              : "rgba(255,255,255,0.82)",
        }}
        className="group relative flex h-full items-center gap-2 px-[13px] text-[12px] font-semibold tracking-[-0.01em] transition-colors duration-200"
      >
        {label}

        <svg
          width="8"
          height="5"
          viewBox="0 0 9 6"
          fill="none"
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            d="M1 1L4.5 4.5L8 1"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>

        <span
          className={`absolute bottom-0 left-[13px] right-[13px] h-[2px] origin-center bg-current transition-transform duration-300 ${
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 7,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 5,
              scale: 0.99,
            }}
            transition={{
              duration: 0.18,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-1/2 top-full z-50 w-[540px] -translate-x-1/2 border-x border-b border-[#d9e1de] bg-white shadow-[0_22px_50px_rgba(8,27,36,0.12)]"
          >
            {/* Dropdown header */}
            <div className="flex items-center justify-between border-b border-[#e5eae7] px-6 py-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] bg-[#27d59b]" />

                  <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">
                    VIoT / {label}
                  </p>
                </div>

                <p className="mt-1.5 font-heading text-[13px] font-semibold tracking-[-0.02em] text-[#081b24]">
                  Explore {label.toLowerCase()}
                </p>
              </div>

              <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#9aa5a1]">
                {String(links.length).padStart(2, "0")} ITEMS
              </span>
            </div>

            {/* Dropdown links */}
            <div className="grid grid-cols-2 gap-x-7 px-4 py-2">
              {links.map(([itemLabel, itemHref], index) => (
                <Link
                  key={itemHref}
                  href={itemHref}
                  className="group flex min-h-[52px] items-center gap-3 border-b border-[#edf0ef] px-2 transition-colors"
                >
                  <span className="font-mono text-[8px] text-[#a5afab] transition-colors duration-200 group-hover:text-[#007c67]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex-1 text-[11px] font-semibold tracking-[-0.01em] text-[#24353d] transition-colors duration-200 group-hover:text-[#007c67]">
                    {itemLabel}
                  </span>

                  <span className="translate-x-[-4px] text-[12px] text-[#27d59b] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>

            {/* Dropdown footer */}
            <div className="flex items-center justify-between border-t border-[#e5eae7] bg-[#f7f9f8] px-6 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-[4px] w-[4px] bg-[#27d59b]" />

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#78847f]">
                  Connected intelligence
                </span>
              </div>

              <Link
                href={href}
                className="font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-[#007c67] transition-colors hover:text-[#081b24]"
              >
                View all →
              </Link>
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* Main header */}
      <div
        style={{
          backgroundColor: isScrolled
            ? "rgba(255,255,255,0.97)"
            : "rgba(8,27,36,0.90)",
          borderBottomColor: isScrolled
            ? "#dce3e0"
            : "rgba(255,255,255,0.10)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        className="border-b transition-all duration-300"
      >
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Logo */}
          <Link
            href="/"
            aria-label="VIoT home"
            onClick={close}
            className="group flex shrink-0 items-center"
          >
            <span
              style={{
                color: isScrolled ? "#081b24" : "#ffffff",
              }}
              className="font-heading text-[26px] font-bold leading-none tracking-[-0.065em] transition-colors duration-300"
            >
              V
              <span className="text-[#27d59b]">I</span>
              oT
            </span>

            <span
              style={{
                backgroundColor: isScrolled
                  ? "#dce4e1"
                  : "rgba(255,255,255,0.18)",
              }}
              className="ml-3 hidden h-4 w-px transition-colors duration-300 sm:block"
            />

            <span
              style={{
                color: isScrolled
                  ? "#7b8985"
                  : "rgba(255,255,255,0.48)",
              }}
              className="ml-3 hidden font-mono text-[7px] uppercase tracking-[0.18em] transition-colors duration-300 xl:block"
            >
              Connected Intelligence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="ml-auto hidden h-full items-center lg:flex">
            {/* Home */}
            <Link
              href="/"
              style={{
                color:
                  pathname === "/"
                    ? isScrolled
                      ? "#007c67"
                      : "#27d59b"
                    : isScrolled
                      ? "#24353d"
                      : "rgba(255,255,255,0.82)",
              }}
              className="group relative flex h-full items-center px-[13px] text-[12px] font-semibold tracking-[-0.01em] transition-colors"
            >
              Home

              <span
                className={`absolute bottom-0 left-[13px] right-[13px] h-[2px] bg-current transition-transform duration-300 ${
                  pathname === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            {/* About */}
            <Link
              href="/about"
              style={{
                color:
                  pathname === "/about"
                    ? isScrolled
                      ? "#007c67"
                      : "#27d59b"
                    : isScrolled
                      ? "#24353d"
                      : "rgba(255,255,255,0.82)",
              }}
              className="group relative flex h-full items-center px-[13px] text-[12px] font-semibold tracking-[-0.01em] transition-colors"
            >
              About

              <span
                className={`absolute bottom-0 left-[13px] right-[13px] h-[2px] bg-current transition-transform duration-300 ${
                  pathname === "/about"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>

            {/* Dropdown groups */}
            {navItems.map((item) => (
              <DesktopNavGroup
                key={item.href}
                label={item.label}
                href={item.href}
                links={item.links}
                active={pathname.startsWith(item.href)}
                isScrolled={isScrolled}
              />
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="ml-7 hidden lg:block">
            <Link
              href="/contact"
              style={{
                backgroundColor: isScrolled ? "#081b24" : "#27d59b",
                color: isScrolled ? "#ffffff" : "#081b24",
              }}
              className="group relative inline-flex h-10 items-center gap-3 overflow-hidden px-5 text-[10px] font-bold uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#007c67] hover:text-white"
            >
              <span className="relative z-10">Get in touch</span>

              <ArrowIcon className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />

              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#27d59b] transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            style={{
              borderColor: isScrolled
                ? "#d6dfdb"
                : "rgba(255,255,255,0.18)",
            }}
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] border transition-colors lg:hidden"
          >
            <span
              className={`block h-px w-[17px] transition-all duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
              style={{
                backgroundColor: isScrolled ? "#081b24" : "#ffffff",
              }}
            />

            <span
              className={`block h-px w-[17px] transition-all duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
              style={{
                backgroundColor: isScrolled ? "#081b24" : "#ffffff",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-0 right-0 top-[70px] max-h-[calc(100vh-70px)] overflow-y-auto border-b border-[#dce3e0] bg-white lg:hidden"
          >
            <div className="mx-auto max-w-2xl px-5 py-4 sm:px-8">
              {/* Home */}
              <Link
                href="/"
                onClick={close}
                className={`flex items-center justify-between border-b border-[#e5eae7] py-4 text-sm font-semibold ${
                  pathname === "/"
                    ? "text-[#007c67]"
                    : "text-[#081b24]"
                }`}
              >
                <span>Home</span>

                <span className="font-mono text-[8px] text-[#9aa5a1]">
                  01
                </span>
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={close}
                className={`flex items-center justify-between border-b border-[#e5eae7] py-4 text-sm font-semibold ${
                  pathname === "/about"
                    ? "text-[#007c67]"
                    : "text-[#081b24]"
                }`}
              >
                <span>About</span>

                <span className="font-mono text-[8px] text-[#9aa5a1]">
                  02
                </span>
              </Link>

              {/* Mobile groups */}
              {navItems.map((item, itemIndex) => {
                const isExpanded =
                  mobileExpanded === item.label;

                const isActive = pathname.startsWith(item.href);

                return (
                  <div
                    key={item.href}
                    className="border-b border-[#e5eae7]"
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        onClick={close}
                        className={`flex-1 py-4 text-sm font-semibold ${
                          isActive
                            ? "text-[#007c67]"
                            : "text-[#081b24]"
                        }`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        aria-label={`Toggle ${item.label}`}
                        onClick={() =>
                          setMobileExpanded(
                            isExpanded ? null : item.label,
                          )
                        }
                        className="p-3 text-[#081b24]"
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
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="overflow-hidden bg-[#f6f8f7]"
                        >
                          {item.links.map(
                            ([label, href], linkIndex) => (
                              <Link
                                key={href}
                                href={href}
                                onClick={close}
                                className="group flex items-center gap-3 px-4 py-3 text-[11px] font-medium text-[#24353d] transition-colors hover:text-[#007c67]"
                              >
                                <span className="font-mono text-[7px] text-[#9aa5a1]">
                                  {String(
                                    linkIndex + 1,
                                  ).padStart(2, "0")}
                                </span>

                                <span className="flex-1">
                                  {label}
                                </span>

                                <span className="font-mono text-[10px] text-[#27d59b]">
                                  →
                                </span>
                              </Link>
                            ),
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-5">
                <Link
                  href="/contact"
                  onClick={close}
                  className="group flex h-12 w-full items-center justify-center gap-3 bg-[#081b24] text-[10px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#007c67]"
                >
                  Get in touch

                  <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mobile footer detail */}
              <div className="flex items-center justify-between py-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#9aa5a1]">
                  VIoT Technologies
                </span>

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#9aa5a1]">
                  Connected Intelligence
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}