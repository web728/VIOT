"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  breadcrumb: string;
  title: string;
  titleHighlight?: string;
  lede: string;
  bgImage?: string;
}

export function PageHero({
  breadcrumb,
  title,
  titleHighlight,
  lede,
  bgImage,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#07161d] px-6 pt-28 pb-14 text-white md:pt-32 md:pb-16 lg:px-12">
      {/* Optional Background Image */}
      {bgImage && (
        <div className="absolute inset-0">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.10]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07161d] via-[#07161d]/95 to-[#07161d]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07161d] via-transparent to-[#07161d]/50" />
        </div>
      )}

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Very subtle ambient light */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#24C491]/[0.035] blur-[100px]" />

      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-7"
        >
          {/* Breadcrumb */}
          <div className="mb-5 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#24C491]" />

            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-[#5ee7b7]">
              {breadcrumb}
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-3xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl md:text-[3.5rem]">
            {title}{" "}
            {titleHighlight && (
              <span className="font-medium text-[#24C491]">
                {titleHighlight}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-300/80 md:text-base md:leading-7">
            {lede}
          </p>
        </motion.div>

        {/* =====================================================
            RIGHT — MINIMAL FLEET SVG
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative hidden h-[190px] items-center justify-end lg:col-span-5 lg:flex"
        >
          <svg
            viewBox="0 0 520 220"
            className="h-auto w-full max-w-[470px] overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Soft route glow */}
              <filter
                id="routeGlow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Truck shadow */}
              <filter
                id="truckShadow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="8"
                  stdDeviation="8"
                  floodColor="#000000"
                  floodOpacity="0.35"
                />
              </filter>

              {/* Gradient for route */}
              <linearGradient
                id="routeGradient"
                x1="30"
                y1="180"
                x2="480"
                y2="45"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#24C491" stopOpacity="0.2" />
                <stop offset="0.5" stopColor="#24C491" />
                <stop offset="1" stopColor="#38BDF8" />
              </linearGradient>
            </defs>

            {/* =================================================
                SUBTLE HORIZONTAL GROUND LINE
            ================================================= */}
            <path
              d="M25 190H495"
              stroke="#FFFFFF"
              strokeOpacity="0.06"
              strokeWidth="1"
            />

            {/* =================================================
                ROUTE
            ================================================= */}
            <motion.path
              d="M42 170
                 C105 140 120 182 180 150
                 C235 121 250 75 315 95
                 C370 112 395 76 475 42"
              stroke="url(#routeGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="7 8"
              filter="url(#routeGlow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                pathLength: {
                  duration: 1.8,
                  ease: "easeOut",
                },
                opacity: {
                  duration: 0.5,
                },
              }}
            />

            {/* =================================================
                LOCATION NODES
            ================================================= */}
            {[
              { x: 42, y: 170 },
              { x: 180, y: 150 },
              { x: 315, y: 95 },
              { x: 475, y: 42 },
            ].map((node, index) => (
              <g key={index}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  fill="#24C491"
                  fillOpacity="0.06"
                />

                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="#24C491"
                />
              </g>
            ))}

            {/* =================================================
                ACTIVE LOCATION PULSE
            ================================================= */}
            <motion.circle
              cx="315"
              cy="95"
              r="8"
              stroke="#24C491"
              strokeWidth="1"
              animate={{
                r: [7, 17, 7],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* =================================================
                TRUCK
            ================================================= */}
            <motion.g
              filter="url(#truckShadow)"
              animate={{
                x: [0, 3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Container */}
              <rect
                x="265"
                y="98"
                width="65"
                height="38"
                rx="2"
                fill="#102A34"
                stroke="#6EE7B7"
                strokeOpacity="0.7"
                strokeWidth="1"
              />

              {/* Container vertical lines */}
              <path
                d="M278 99V135M291 99V135M304 99V135M317 99V135"
                stroke="#6EE7B7"
                strokeOpacity="0.12"
                strokeWidth="1"
              />

              {/* Cabin */}
              <path
                d="M330 110
                   H348
                   L362 120
                   V136
                   H330
                   Z"
                fill="#24C491"
                fillOpacity="0.9"
                stroke="#A7F3D0"
                strokeWidth="1"
              />

              {/* Cabin window */}
              <path
                d="M334 113H346L354 120H334V113Z"
                fill="#07161D"
                stroke="#FFFFFF"
                strokeOpacity="0.18"
              />

              {/* Front bumper */}
              <path
                d="M358 129H365V137H356"
                stroke="#CBD5E1"
                strokeOpacity="0.7"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Truck wheels */}
              <circle cx="279" cy="140" r="7" fill="#02080B" />
              <circle cx="279" cy="140" r="3" fill="#64748B" />

              <circle cx="321" cy="140" r="7" fill="#02080B" />
              <circle cx="321" cy="140" r="3" fill="#64748B" />

              <circle cx="349" cy="140" r="7" fill="#02080B" />
              <circle cx="349" cy="140" r="3" fill="#64748B" />
            </motion.g>

            {/* =================================================
                CONNECTIVITY SIGNAL
            ================================================= */}
            <motion.path
              d="M343 95C349 88 357 88 363 95"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeLinecap="round"
              animate={{
                opacity: [0.15, 0.9, 0.15],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d="M339 89C348 78 359 78 368 89"
              stroke="#38BDF8"
              strokeWidth="1"
              strokeLinecap="round"
              animate={{
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: 0.25,
                ease: "easeInOut",
              }}
            />

            {/* =================================================
                SMALL DATA POINTS
            ================================================= */}
            <circle
              cx="110"
              cy="117"
              r="2"
              fill="#38BDF8"
              fillOpacity="0.5"
            />

            <circle
              cx="405"
              cy="125"
              r="2"
              fill="#24C491"
              fillOpacity="0.5"
            />

            <circle
              cx="435"
              cy="88"
              r="1.5"
              fill="#FFFFFF"
              fillOpacity="0.3"
            />
          </svg>
        </motion.div>
      </div>

      {/* Bottom subtle fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#07161d] to-transparent" />
    </section>
  );
}