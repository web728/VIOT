"use client";

import Image from "next/image";

import Link from "next/link";

import { motion } from "framer-motion";

import type { ReactNode } from "react";

import { CtaBand } from "@/components/home/CtaBand";
// Add the images from the accompanying public/about folder to your Next.js public/about folder.// Global site Header / Footer remain managed by your existing layout.
const GREEN = "#27d59b";

const DARK = "#081b24";

const fade = {
  initial: { opacity: 0, y: 24 },

  whileInView: { opacity: 1, y: 0 },

  viewport: { once: true, amount: 0.16 },

  transition: {
    duration: 0.66,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
};

type IconName =
  | "shield"
  | "eye"
  | "chart"
  | "chip"
  | "layers"
  | "industry"
  | "search"
  | "settings"
  | "network"
  | "target"
  | "binoculars"
  | "handshake"
  | "users"
  | "bulb"
  | "expand"
  | "arrow";

function Icon({
  name,
  size = 27,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, ReactNode> = {
    shield: (
      <>
        <path d="m12 2 8 4v5c0 5.3-3.4 9-8 11-4.6-2-8-5.7-8-11V6l8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V13M10 20V8M16 20V11M22 20V4" />
        <path d="M2 22h21" />
      </>
    ),

    chip: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <path d="M9 9h6v6H9zM9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4" />
      </>
    ),

    layers: (
      <>
        <path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5" />
      </>
    ),

    industry: (
      <>
        <path d="M3 21V9l6 4V9l6 4V5h6v16H3Z" />
        <path d="M7 17h1M12 17h1M17 17h1" />
      </>
    ),

    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5.5 5.5" />
      </>
    ),

    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M9.5 2h5l.7 2.4 2.2 1.2 2.4-.5 2.5 4.3-1.7 1.8v2.5l1.7 1.9-2.5 4.3-2.4-.6-2.2 1.3-.7 2.4h-5l-.7-2.4-2.2-1.3-2.4.6-2.5-4.3 1.7-1.9v-2.5L2.7 9.4l2.5-4.3 2.4.5 2.2-1.2L9.5 2Z" />
      </>
    ),

    network: (
      <>
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <path d="M12 8v4M5 16v-4h14v4" />
      </>
    ),

    target: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <path d="m12 12 8-8" />
      </>
    ),

    binoculars: (
      <>
        <path d="M7 5h3v12H3V9l4-4ZM17 5h-3v12h7V9l-4-4Z" />
        <circle cx="6" cy="17" r="3" />
        <circle cx="18" cy="17" r="3" />
      </>
    ),

    handshake: (
      <>
        <path d="m2 9 5-5 5 2 3-1 7 5-5 8-3-1-2 2-3-2-2 1-5-5Z" />
        <path d="m8 10 4-4m-2 7 5 4m-8-1 2 1" />
      </>
    ),

    users: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2M4 6a3 3 0 0 0 0 6M20 6a3 3 0 0 1 0 6" />
      </>
    ),

    bulb: (
      <>
        <path d="M9 18h6m-5 3h4M9 15c-2-1.4-3-3-3-5a6 6 0 0 1 12 0c0 2-1 3.6-3 5l-.5 3h-5L9 15Z" />
      </>
    ),

    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" />
        <path d="m3 3 7 7m11-7-7 7M3 21l7-7m11 7-7-7" />
      </>
    ),

    arrow: (
      <>
        <path d="M4 12h16m-6-6 6 6-6 6" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...shared}
    >
      {paths[name]}
    </svg>
  );
}

function BackgroundPaths({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "rgba(39,213,155,.15)" : "rgba(0,124,103,.12)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute -left-40 top-12 h-[450px] w-[450px] rounded-full blur-3xl ${dark ? "bg-[#27d59b]/[.035]" : "bg-[#27d59b]/[.055]"}`}
      />

      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <motion.path
          d="M-90 165 C220 25 350 345 640 270 S1100 20 1540 160"
          stroke={stroke}
          strokeWidth="1.2"
          strokeDasharray="4 18"
          animate={{ strokeDashoffset: [0, -240] }}
          transition={{ duration: 23, repeat: Infinity, ease: "linear" }}
        />

        <motion.path
          d="M-120 580 C240 400 460 675 755 505 S1210 330 1510 480"
          stroke={stroke}
          strokeWidth="1.2"
          strokeDasharray="3 19"
          animate={{ strokeDashoffset: [0, 220] }}
          transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
        />

        <path
          d="M120 800 C420 470 615 495 910 230 S1260 10 1480 -40"
          stroke={stroke}
          strokeOpacity=".52"
        />
      </svg>

      <motion.div
        className={`absolute right-[5%] top-[8%] h-72 w-72 rounded-full border ${dark ? "border-white/[.05]" : "border-[#007c67]/[.06]"}`}
        animate={{ rotate: 360 }}
        transition={{ duration: 65, ease: "linear", repeat: Infinity }}
      />

      {[
        ["14%", "34%"],
        ["59%", "27%"],
        ["78%", "72%"],
      ].map(([left, top], i) => (
        <motion.span
          key={left}
          style={{ left, top }}
          className="absolute h-1.5 w-1.5 rounded-full bg-[#27d59b]"
          animate={{ opacity: [0, 0.6, 0], x: [0, 65, 135] }}
          transition={{
            duration: 5 + i,
            delay: i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      {...fade}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#007c67]">
        {eyebrow}
      </p>

      <h2 className="mt-5 max-w-[920px] font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] text-[#081b24] lg:text-[46px]">
        {title}
      </h2>

      {sub && (
        <p className="mt-5 max-w-[700px] font-sans text-[16px] font-normal leading-[26px] text-[#556770]">
          {sub}
        </p>
      )}
    </motion.div>
  );
}

const capabilityCards = [
  {
    icon: "chip" as IconName,
    title: "Intelligent IoT Hardware",
    image: "/about/sec-3.png",
    desc: "A portfolio of connected devices, including GPS trackers, EV CAN devices, multi-channel cameras, fuel sensors, electronic locks, and industrial monitoring devices.",
  },

  {
    icon: "layers" as IconName,
    title: "Technology Platforms",
    image: "/about/sec-4.png",
    desc: "Centralized platforms that bring device data together through monitoring dashboards, analytics, configurable alerts, and operational reporting.",
  },

  {
    icon: "industry" as IconName,
    title: "Integrated Solutions",
    image: "/about/sec-5.png",
    desc: "Hardware and software working together to address industry-specific requirements across transportation, electric mobility, industrial operations, distribution, and security.",
  },
];

const approach = [
  {
    n: "01",
    icon: "search" as IconName,
    title: "Understand the Challenge",
    desc: "Identify operational gaps, business requirements, and the information needed to make better decisions.",
  },

  {
    n: "02",
    icon: "settings" as IconName,
    title: "Bring Technology Together",
    desc: "Combine suitable hardware, sensors, and platform capabilities into an integrated solution.",
  },

  {
    n: "03",
    icon: "chart" as IconName,
    title: "Turn Data into Intelligence",
    desc: "Transform device-generated information into accessible insights, monitoring dashboards, and actionable alerts.",
  },

  {
    n: "04",
    icon: "network" as IconName,
    title: "Build for Evolving Needs",
    desc: "Develop flexible solutions that can support changing operational requirements and applications.",
  },
];

const principles = [
  {
    icon: "handshake" as IconName,
    title: "Integrity & Transparency",
    desc: "We believe in honest communication, clear commitments, and building relationships based on trust.",
  },

  {
    icon: "users" as IconName,
    title: "Accountability & Responsibility",
    desc: "We take ownership of our commitments and approach every business requirement with responsibility.",
  },

  {
    icon: "chart" as IconName,
    title: "Execution & Follow-Through",
    desc: "We focus on turning ideas into practical solutions through disciplined execution and continuous improvement.",
  },
];

const values = [
  {
    icon: "layers" as IconName,
    title: "Integrated Technology Approach",
    desc: "Bringing hardware and software together for consistent monitoring and operational visibility.",
  },

  {
    icon: "industry" as IconName,
    title: "Industry-Focused Thinking",
    desc: "Addressing real-world challenges through solutions designed around specific business applications.",
  },

  {
    icon: "bulb" as IconName,
    title: "Centralized Intelligence",
    desc: "Making operational information accessible through unified dashboards, alerts, and reports.",
  },

  {
    icon: "expand" as IconName,
    title: "Adaptable Solutions",
    desc: "Supporting different operational environments and evolving enterprise requirements.",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-clip bg-white text-[#081b24]">
      {/* 1 — HERO */}

      <section className="relative isolate min-h-[680px] overflow-hidden bg-[#061a22] text-white sm:min-h-[720px] lg:min-h-[760px]">
        <Image
          src="/about/hero.png"
          alt="VIoT connected mobility and intelligent operations"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover opacity-65"
        />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#061820]/95 via-[#061820]/80 to-[#061820]/30" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-52 bg-gradient-to-t from-[#061820] to-transparent" />

        <BackgroundPaths dark />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-24 pt-32 sm:min-h-[720px] sm:px-8 lg:min-h-[760px] lg:px-12">
          <motion.div {...fade} className="max-w-[680px]">
            <p className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#27d59b]">
              About VIoT
            </p>

            <h1 className="mt-5 max-w-[980px] font-heading text-[36px] font-semibold leading-[0.92] tracking-[-2px] sm:text-[52px] sm:tracking-[-3px] lg:text-[76px] lg:tracking-[-4.5px]">
              Engineering Intelligence for{" "}
              <span className="text-[#27d59b]">the Real World.</span>
            </h1>

            <p className="mt-6 max-w-[700px] font-sans text-[16px] font-normal leading-[28px] text-white/80 lg:text-[18px]">
              We bring together IoT hardware, intelligent software platforms,
              and industry-focused solutions to help businesses gain greater
              visibility, control, and understanding of their operations.
            </p>

            <Link
              href="/solutions"
              className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#27d59b] px-6 font-sans text-[14px] font-semibold leading-[18px] text-[#081b24] transition-transform hover:-translate-y-0.5"
            >
              Explore Our Solutions <Icon name="arrow" size={17} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2 — WHO WE ARE */}

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
        <BackgroundPaths />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-12">
          <motion.div {...fade}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Built on a Simple Idea. Driven by a Clear Purpose."
            />

            <div className="mt-6 max-w-[700px] space-y-4 font-sans text-[16px] font-normal leading-[26px] text-[#556770]">
              <p>
                Across industries, businesses rely on vehicles, equipment, and
                critical assets to keep operations moving. Yet the technology
                used to monitor and manage them often operates in isolation,
                creating gaps in visibility, efficiency, and decision-making.
              </p>

              <p>
                VIoT was founded on the belief that technology should go beyond
                collecting information. It should transform operational data
                into meaningful intelligence.
              </p>

              <p>
                We are building an integrated ecosystem of IoT hardware and
                technology platforms that brings together data, monitoring, and
                operational insights in one place.
              </p>

              <p>
                From mobility and transportation to industrial operations and
                infrastructure security, our focus is on developing practical
                technology solutions that address real business challenges.
              </p>
            </div>

            <div className="mt-7 flex gap-3 rounded-xl border border-[#d8f4e8] bg-[#ecfaf4] p-4 text-[#007c67]">
              <Icon name="target" size={24} className="shrink-0" />
              <p className="font-sans text-[14px] font-semibold leading-[22px]">
                Our purpose is clear: To make technology more intelligent,
                operations more transparent, and decisions more informed.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fade}
            className="relative min-h-[370px] overflow-hidden rounded-2xl bg-[#e5f1f4] shadow-[0_18px_50px_rgba(8,27,36,.1)] sm:min-h-[500px]"
          >
            <Image
              src="/about/sec-2.png"
              alt="Connected transport and urban operations monitored through VIoT"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#081b24]/35 via-transparent to-transparent" />

            <div className="absolute left-4 top-5 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-[11px] font-semibold shadow-md sm:left-8 sm:top-8">
              <Icon name="shield" size={19} className="text-[#007c67]" />
              Safer Operations
            </div>

            <div className="absolute bottom-6 right-4 flex items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-[11px] font-semibold shadow-md sm:right-8">
              <Icon name="chart" size={19} className="text-[#007c67]" />
              Smarter Decisions
            </div>

            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-lg bg-white/95 px-3 py-2 text-[11px] font-semibold shadow-md sm:right-8">
              <Icon name="eye" size={19} className="text-[#007c67]" />
              Greater Visibility
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 — CAPABILITIES */}

      <section className="relative bg-[#f4f9f9] py-14 sm:py-16 lg:py-24">
        <BackgroundPaths />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Our Capabilities"
            title="Hardware and Software. Working as One."
            sub="We combine intelligent devices, technology platforms, and application-focused solutions to help enterprises monitor, manage, and understand their operations."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">
            {capabilityCards.map((item, i) => (
              <motion.article
                {...fade}
                key={item.title}
                className="overflow-hidden rounded-2xl border border-[#e2eeee] bg-white shadow-[0_12px_32px_rgba(8,27,36,.045)]"
              >
                <div className="relative h-[210px] overflow-hidden bg-[#dbe9e8] sm:h-[235px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 text-[#009c7c]">
                    <Icon name={item.icon} />
                  </div>
                  <p className="mb-2 font-mono text-[10px] font-bold tracking-widest text-[#007c67]">
                    0{i + 1}
                  </p>
                  <h3 className="font-heading text-[20px] font-semibold leading-[1.3] tracking-[-0.02em] lg:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] font-normal leading-[22px] text-[#60717a]">
                    {item.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — HOW WE THINK */}

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
        <BackgroundPaths />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="How We Think"
            title="Technology That Starts with the Problem."
            sub="We believe meaningful innovation begins with understanding the operational challenge, not simply introducing another device or software application."
          />

          <p className="mt-5 text-sm font-semibold text-[#334953]">
            Our approach is built around four principles:
          </p>

          <div className="relative mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {approach.map((item, i) => (
              <motion.article
                {...fade}
                key={item.n}
                className="relative min-w-0 border-[#e2eceb] lg:border-r lg:pr-5 lg:last:border-r-0"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e7faf1] text-[#008d73]">
                    <Icon name={item.icon} />
                  </div>
                  <span className="font-mono text-xs text-[#84c5b4]">
                    {item.n}
                  </span>
                </div>

                <h3 className="max-w-[240px] font-heading text-[20px] font-semibold leading-[1.3] lg:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] font-normal leading-[22px] text-[#667780]">
                  {item.desc}
                </p>

                {i < 3 && (
                  <div className="absolute -right-[14px] top-6 hidden text-[#35c8a2] lg:block">
                    <Icon name="arrow" size={18} />
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — DIRECTION */}

      <section className="relative isolate overflow-hidden bg-[#061b24] py-16 text-white sm:py-20 lg:py-24">
        <Image
          src="/about/sec-6.png"
          alt="Road and infrastructure representing the future of intelligent operations"
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061b24]/90 via-[#061b24]/85 to-[#061b24]/65" />
        <BackgroundPaths dark />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-12">
          <motion.div {...fade}>
            <p className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#27d59b]">
              Our Direction
            </p>
            <h2 className="mt-5 max-w-[700px] font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] lg:text-[46px]">
              Building What's Next in Intelligent Operations.
            </h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: "target" as IconName,
                title: "Our Vision",
                desc: "To become a trusted technology partner for enterprises by enabling intelligent, data-driven operations through integrated IoT hardware and technology platforms.",
              },

              {
                icon: "binoculars" as IconName,
                title: "Our Mission",
                desc: "To simplify complex operational challenges by delivering practical, scalable, and reliable IoT solutions that improve visibility, strengthen control, and support informed decision-making.",
              },
            ].map((item) => (
              <motion.article
                {...fade}
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[.075] p-6 backdrop-blur-sm sm:p-7"
              >
                <div className="text-[#55d6bb]">
                  <Icon name={item.icon} size={34} />
                </div>
                <h3 className="mt-5 font-heading text-[20px] font-semibold leading-[1.3] lg:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] font-normal leading-[22px] text-white/75">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — PRINCIPLES */}

      <section className="relative overflow-hidden bg-white pb-14 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-24">
        <BackgroundPaths />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="What Guides Us"
            title="The Principles Behind Everything We Build."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0">
            {principles.map((item) => (
              <motion.article
                {...fade}
                key={item.title}
                className="px-4 text-center md:border-r md:border-[#e5eded] md:px-8 md:last:border-0"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#eafaf5] text-[#008c75]">
                  <Icon name={item.icon} size={33} />
                </div>
                <h3 className="mt-4 font-heading text-[20px] font-semibold leading-[1.3] lg:text-[22px]">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs font-sans text-[14px] font-normal leading-[22px] text-[#65737c]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — VALUE PROPOSITION */}

      <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-14 lg:pb-24">
        <BackgroundPaths />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading
            eyebrow="Our Value Proposition"
            title="Built for Practical Intelligence."
            sub="Technology delivers greater value when devices, platforms, and operational requirements work together."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((item) => (
              <motion.article
                {...fade}
                key={item.title}
                className="rounded-2xl border border-[#e8f0f0] bg-[#f5faf9] p-6"
              >
                <div className="text-[#009877]">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-4 font-heading text-[20px] font-semibold leading-[1.3] lg:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 font-sans text-[14px] font-normal leading-[22px] text-[#61717a]">
                  {item.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — CTA */}

      <CtaBand />
    </main>
  );
}
