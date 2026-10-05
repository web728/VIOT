"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const exploreLinks = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/solutions" },
  { label: "Solutions", href: "/platform" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Privacy", href: "/privacy" },
];

const divisions = [
  {
    label: "Fleet Intelligence",
    href: "/products/fleet-intelligence",
  },
  {
    label: "Asset Intelligence",
    href: "/products/asset-intelligence",
  },
  {
    label: "Access Control",
    href: "/products/access-control",
  },
];

const contactLinks = [
  { label: "Get In Touch", href: "/contact" },
  { label: "team@viot.in", href: "mailto:team@viot.in" },
];

const columns = [
  { title: "Explore", links: exploreLinks },
  { title: "Company", links: companyLinks },
  { title: "Divisions", links: divisions },
  { title: "Contact", links: contactLinks },
];

/* =========================================================
   FOOTER BACKGROUND ANIMATION
========================================================= */

function FooterArchitecture() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow */}
      <div className="absolute -left-[12%] top-[5%] h-[420px] w-[420px] rounded-full bg-[#27d59b]/[0.055] blur-3xl" />

      <div className="absolute -right-[10%] bottom-[-40%] h-[460px] w-[460px] rounded-full bg-white/[0.025] blur-3xl" />

      {/* SVG system */}
      <svg
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
        fill="none"
        className="absolute inset-0 h-full w-full"
      >
        {/* Static architecture paths */}
        <path
          d="M-100 430 C180 330 300 490 530 370 S830 140 1090 230 S1410 480 1710 310"
          stroke="rgba(255,255,255,0.055)"
          strokeWidth="1"
        />

        <path
          d="M-50 135 C250 50 430 240 650 180 S1010 20 1280 110 S1480 230 1700 150"
          stroke="rgba(255,255,255,0.035)"
          strokeWidth="1"
        />

        {/* Animated signal path */}
        <motion.path
          d="M-100 430 C180 330 300 490 530 370 S830 140 1090 230 S1410 480 1710 310"
          stroke="rgba(39,213,155,0.20)"
          strokeWidth="1"
          strokeDasharray="3 20"
          animate={{
            strokeDashoffset: [0, -240],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M-50 135 C250 50 430 240 650 180 S1010 20 1280 110 S1480 230 1700 150"
          stroke="rgba(39,213,155,0.12)"
          strokeWidth="1"
          strokeDasharray="2 24"
          animate={{
            strokeDashoffset: [0, 220],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Large curves */}
        <path
          d="M300 700 C480 470 590 350 820 300 S1190 250 1470 -90"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />
      </svg>

      {/* Moving signals */}
      <motion.span
        className="absolute left-[9%] top-[68%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, 150, 300],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute left-[52%] top-[34%] h-1 w-1 rounded-full bg-[#27d59b]"
        animate={{
          x: [0, 120, 250],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 6,
          delay: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.span
        className="absolute right-[16%] top-[60%] h-1.5 w-1.5 rounded-full bg-[#27d59b]"
        animate={{
          y: [0, -70, -140],
          opacity: [0, 0.65, 0],
        }}
        transition={{
          duration: 5.5,
          delay: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ambient nodes */}
      {[
        ["14%", "25%"],
        ["28%", "70%"],
        ["45%", "18%"],
        ["62%", "76%"],
        ["77%", "27%"],
        ["89%", "67%"],
      ].map(([left, top], index) => (
        <motion.span
          key={`${left}-${top}`}
          className="absolute h-1 w-1 rounded-full bg-white/25"
          style={{
            left,
            top,
          }}
          animate={{
            opacity: [0.08, 0.45, 0.08],
          }}
          transition={{
            duration: 3 + index * 0.35,
            delay: index * 0.25,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================================
   FOOTER
========================================================= */

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#06151b] text-white">
      {/* =================================================
          BACKGROUND IMAGE
      ================================================= */}

      <div
        className="
          pointer-events-none absolute inset-0
          bg-cover bg-center bg-no-repeat
          opacity-[0.92]
        "
        style={{
          backgroundImage: "url('/image/footer.png')",
        }}
      />

      {/* Main dark wash */}
      <div className="pointer-events-none absolute inset-0 bg-[#06151b]/[0.56]" />

      {/* Gradient for readability */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-r
          from-[#06151b]/90
          via-[#06151b]/55
          to-[#06151b]/75
        "
      />

      {/* Subtle bottom fade */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-40
          bg-gradient-to-t
          from-[#06151b]
          to-transparent
        "
      />

      {/* Architecture animation */}
      <FooterArchitecture />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative z-10 mx-auto
          max-w-[1440px]
          px-6
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div
          className="
            grid gap-12
            border-b border-white/[0.10]
            py-14
            sm:py-16
            lg:grid-cols-12
            lg:gap-12
            lg:py-[72px]
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="VIoT home"
              className="group inline-flex items-center"
            >
              <Image
                src="/logo/logo.png"
                alt="VIoT"
                width={180}
                height={62}
                className="
                  h-[58px] w-auto
                  object-contain
                  transition-all duration-300
                  group-hover:scale-[1.025]
                "
              />
            </Link>

            <p
              className="
                mt-6 max-w-[340px]
                font-heading
                text-[17px] font-medium
                leading-[1.55]
                tracking-[-0.018em]
                text-white/85
                sm:text-[18px]
              "
            >
              Track what moves. Secure what matters. Control who gets in.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#27d59b]/70" />

              <span
                className="
                  font-mono
                  text-[8px] font-medium uppercase
                  tracking-[0.15em]
                  text-[#27d59b]/80
                "
              >
                Connected Intelligence
              </span>
            </div>
          </div>

          {/* =================================================
              LINKS
          ================================================= */}

          <div
            className="
              grid grid-cols-2
              gap-x-8 gap-y-10
              sm:grid-cols-4
              lg:col-span-8
              lg:gap-x-10
            "
          >
            {columns.map((column) => (
              <div key={column.title}>
                <div className="mb-5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#27d59b]" />

                  <p
                    className="
                      font-mono
                      text-[8px] font-semibold uppercase
                      tracking-[0.16em]
                      text-[#27d59b]
                    "
                  >
                    {column.title}
                  </p>
                </div>

                <nav className="flex flex-col">
                  {column.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="
                        group relative
                        border-t border-white/[0.075]
                        py-3
                        text-[13px]
                        leading-5
                        tracking-[-0.005em]
                        text-white/55
                        transition-colors duration-300

                        hover:text-white
                      "
                    >
                      <span className="relative inline-block">
                        {item.label}

                        <span
                          className="
                            absolute -bottom-0.5 left-0
                            h-px w-0
                            bg-[#27d59b]/80
                            transition-all duration-300
                            group-hover:w-full
                          "
                        />
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </footer>
  );
}