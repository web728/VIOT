"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import { ArrowIcon } from "./icons";

import Image from "next/image";

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

  ["Fleet Management", "/platform/fleet-management"],

  ["EV Management", "/platform/ev-management"],

  ["E-Lock", "/platform/e-lock"],

  ["Video", "/platform/video"],

  ["Fuel Monitoring", "/platform/fuel-monitoring"],

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

              ? hover

                ? "#007c67"

                : "#081b24"

              : hover

                ? "#27d59b"

                : "#ffffff",

        }}

        className="inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[-0.01em] transition-colors duration-200"

      >

        {label}

        <svg

          width="7"

          height="4"

          viewBox="0 0 9 6"

          fill="none"

          className={`transition-transform duration-200 ${

            hover ? "rotate-180" : ""

          }`}

        >

          <path

            d="M1 1L4.5 4.5L8 1"

            stroke="currentColor"

            strokeWidth="2"

            strokeLinecap="round"

          />

        </svg>

      </Link>

      <AnimatePresence>

        {hover && (

          <motion.div

            initial={{

              opacity: 0,

              y: 6,

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

              scale: 0.985,

            }}

            transition={{

              duration: 0.18,

              ease: [0.16, 1, 0.3, 1],

            }}

      className="absolute left-1/2 top-full z-30 mt-2 w-fit min-w-48 max-w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-[#d9e0dd] bg-white p-1.5 shadow-[0_18px_45px_rgba(8,27,36,0.14)]"

          >

            <div className="flex flex-col gap-0.5">

              {links.map(([itemLabel, itemHref]) => (

                <Link

                  key={itemHref}

                  href={itemHref}

               className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-[11px] font-semibold !text-[#081b24] transition-colors duration-150 hover:bg-[#f3f7f5] hover:!text-[#007c67]"

                >

                <span className="!text-[#081b24] group-hover:!text-[#007c67]">

  {itemLabel}

</span>

                  <span className="translate-x-[-2px] font-mono text-[11px] text-[#27d59b] opacity-0 transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100">

                    →

                  </span>

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

    const update = () => {

      setIsScrolled(window.scrollY > 20);

    };

    update();

    window.addEventListener("scroll", update, {

      passive: true,

    });

    return () => {

      window.removeEventListener("scroll", update);

    };

  }, []);

  useEffect(() => {

    document.body.style.overflow = open ? "hidden" : "unset";

    return () => {

      document.body.style.overflow = "unset";

    };

  }, [open]);

  return (

  <header className="fixed left-0 top-0 z-50 w-full rounded-xl px-3 pt-3 sm:px-5">

      {/* Main Navbar */}

      <div

        style={{

          backgroundColor: isScrolled ? "#ffffff" : "#0d2935",

          borderColor: isScrolled

            ? "#d8e0dd"

            : "rgba(255,255,255,0.12)",

        }}

className="relative mx-auto flex h-[56px] max-w-4xl items-center justify-between rounded-[10px] border px-4 shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300"

      >

        {/* Logo */}

      <Link

  href="/"

  aria-label="VIoT home"

  onClick={close}

  className="group flex shrink-0 items-center"

>

  <Image

    src="/logo/logo.png"

    alt="VIoT"

    width={120}

    height={40}

    priority

    className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"

  />

</Link>

        {/* Desktop Navigation */}

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex">

          <Link

            href="/"

            style={{

              color:

                pathname === "/"

                  ? "#27d59b"

                  : isScrolled

                    ? "#081b24"

                    : "#ffffff",

            }}

            className="text-[12px] font-semibold tracking-[-0.01em] transition-colors hover:text-[#27d59b]"

          >

            Home

          </Link>

          <Link

            href="/about"

            style={{

              color:

                pathname === "/about"

                  ? "#27d59b"

                  : isScrolled

                    ? "#081b24"

                    : "#ffffff",

            }}

            className="text-[12px] font-semibold tracking-[-0.01em] transition-colors hover:text-[#27d59b]"

          >

            About

          </Link>

          {navItems.map((item) => (

            <NavGroup

              key={item.href}

              label={item.label}

              href={item.href}

              links={item.links}

              active={pathname.startsWith(item.href)}

              isScrolled={isScrolled}

            />

          ))}

        </nav>

        {/* Right Action */}

        <div className="flex items-center gap-2.5">

          <Link

            href="/contact"

            style={{

              backgroundColor: isScrolled ? "#081b24" : "#27d59b",

              color: isScrolled ? "#ffffff" : "#081b24",

            }}

            className="hidden h-9 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3.5 text-[11px] font-bold tracking-[0.01em] transition-all duration-200 hover:scale-[1.02] hover:opacity-95 lg:inline-flex"

          >

            Get in touch

            <span className="inline-flex scale-[0.72] items-center">

              <ArrowIcon />

            </span>

          </Link>

          {/* Mobile Button */}

          <button

            type="button"

            aria-label={open ? "Close menu" : "Open menu"}

            aria-expanded={open}

            onClick={() => setOpen((v) => !v)}

            style={{

              backgroundColor: isScrolled

                ? "#f3f6f4"

                : "rgba(255,255,255,0.08)",

              borderColor: isScrolled

                ? "#d8e0dd"

                : "rgba(255,255,255,0.16)",

            }}

            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-[10px] border transition-colors lg:hidden"

          >

            <span

              className={`block h-[1.5px] w-[18px] transition-transform duration-300 ${

                open

                  ? "translate-y-[3.25px] rotate-45 bg-[#081b24]"

                  : isScrolled

                    ? "bg-[#081b24]"

                    : "bg-white"

              }`}

            />

            <span

              className={`block h-[1.5px] w-[18px] transition-transform duration-300 ${

                open

                  ? "-translate-y-[3.25px] -rotate-45 bg-[#081b24]"

                  : isScrolled

                    ? "bg-[#081b24]"

                    : "bg-white"

              }`}

            />

          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{

              opacity: 0,

              y: -8,

              scale: 0.985,

            }}

            animate={{

              opacity: 1,

              y: 0,

              scale: 1,

            }}

            exit={{

              opacity: 0,

              y: -8,

              scale: 0.985,

            }}

            transition={{

              duration: 0.18,

              ease: [0.16, 1, 0.3, 1],

            }}

            className="absolute inset-x-3 top-[67px] z-50 mx-auto max-h-[82vh] max-w-5xl overflow-y-auto rounded-2xl border border-[#d8e0dd] bg-white p-3.5 shadow-[0_20px_50px_rgba(8,27,36,0.16)] sm:inset-x-5 lg:hidden"

          >

            <div className="flex flex-col gap-1">

              {/* Home */}

              <Link

                href="/"

                onClick={close}

                className={`rounded-lg px-3.5 py-2.5 text-[13px] font-bold transition-colors ${

                  pathname === "/"

                    ? "bg-[#f3f7f5] !text-[#007c67]"

                    : "!text-[#07151c] hover:bg-[#f3f7f5] hover:!text-[#007c67]"

                }`}

              >

                Home

              </Link>

              {/* About */}

              <Link

                href="/about"

                onClick={close}

                className={`rounded-lg px-3.5 py-2.5 text-[13px] font-bold transition-colors ${

                  pathname === "/about"

                    ? "bg-[#f3f7f5] !text-[#007c67]"

                    : "!text-[#07151c] hover:bg-[#f3f7f5] hover:!text-[#007c67]"

                }`}

              >

                About Us

              </Link>

              {/* Navigation Groups */}

              {navItems.map((item) => {

                const isExpanded = mobileExpanded === item.label;

                return (

                  <div

                    key={item.href}

                    className="overflow-hidden rounded-xl border border-[#e3e9e6] bg-[#f8faf9]"

                  >

                    <div className="flex items-center justify-between px-3.5 py-2.5">

                      <Link

                        href={item.href}

                        onClick={close}

                        className="!text-[#07151c] text-[13px] font-bold transition-colors hover:!text-[#007c67]"

                      >

                        {item.label}

                      </Link>

                      <button

                        type="button"

                        onClick={() =>

                          setMobileExpanded(

                            isExpanded ? null : item.label

                          )

                        }

                        className="p-1.5 !text-[#07151c]"

                        aria-label={`Toggle ${item.label} menu`}

                      >

                        <svg

                          width="8"

                          height="5"

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

                    <AnimatePresence>

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

                          className="flex flex-col gap-0.5 border-t border-[#e3e9e6] bg-white px-2.5 pb-2.5 pt-1"

                        >

                          {item.links.map(([label, href]) => (

                            <Link

                              key={href}

                              href={href}

                              onClick={close}

                              className="flex items-center justify-between rounded-lg px-3 py-2 text-[12px] font-semibold !text-[#07151c] transition-colors hover:bg-[#f3f7f5] hover:!text-[#007c67]"

                            >

                              <span>{label}</span>

                              <span className="font-mono text-[11px] !text-[#009f7f]">

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

            {/* Mobile CTA */}

            <div className="mt-2.5 border-t border-[#e5eae7] pt-2.5">

              <Link

                href="/contact"

                onClick={close}

                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#27d59b] px-4 py-2.5 text-[13px] font-bold !text-[#07151c] transition-all hover:bg-[#081b24] hover:!text-white"

              >

                Get in touch

                <span className="inline-flex scale-75 items-center">

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