"use client";

export function PlatformDataFlow() {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a2029] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8 lg:p-10"
      aria-label="VIoT data flow from connected field devices into the operating platform"
    >
      {/* =========================================================
          SUBTLE AMBIENT LIGHT
      ========================================================= */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[520px] -translate-x-1/2 rounded-full bg-[#27d59b]/[0.035] blur-[130px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[260px] w-[320px] rounded-full bg-[#27d59b]/[0.02] blur-[110px]" />

      {/* =========================================================
          HEADER
      ========================================================= */}
      <div className="relative z-10 max-w-[720px]">
        <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.025] px-3.5 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#27d59b] opacity-50" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
          </span>

          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#27d59b]">
            One connected path
          </span>
        </div>

        <h2 className="max-w-2xl font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px]">
          From field signal
          <br />
          <span className="font-normal tracking-[-0.025em] text-white/45">
            to operational action.
          </span>
        </h2>

        <p className="mt-5 max-w-[620px] text-sm leading-7 tracking-[-0.005em] text-white/60 sm:text-[15px]">
          Vehicle, security, sensor and visual data moves through one connected
          architecture—from hardware deployed in the field to the VIoT
          platform where teams monitor, understand and respond.
        </p>
      </div>

      {/* =========================================================
          ARCHITECTURE
      ========================================================= */}
      <div className="relative z-10 mt-10 w-full overflow-x-auto pb-2">
        <svg
          className="h-auto min-w-[900px] w-full select-none"
          viewBox="0 0 1100 590"
          role="img"
          aria-labelledby="flow-title flow-description"
        >
          <title id="flow-title">
            VIoT connected hardware and platform architecture
          </title>

          <desc id="flow-description">
            GNSS positioning connects with vehicle telematics, smart locks,
            IoT sensors and video systems. These field signals move into the
            VIoT platform for monitoring, analytics and operational response.
          </desc>

          <defs>
            {/* Fine technical grid */}
            <pattern
              id="viot-grid"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M36 0H0V36"
                fill="none"
                stroke="#ffffff"
                strokeOpacity="0.035"
                strokeWidth="1"
              />
            </pattern>

            {/* Main signal gradient */}
            <linearGradient
              id="viot-signal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#27d59b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#27d59b" stopOpacity="0.15" />
            </linearGradient>

            {/* Platform gradient */}
            <linearGradient
              id="platform-fill"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#0d2a35" />
              <stop offset="100%" stopColor="#081b24" />
            </linearGradient>

            {/* Soft glow */}
            <filter
              id="soft-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Signal dot */}
            <filter
              id="signal-glow"
              x="-200%"
              y="-200%"
              width="400%"
              height="400%"
            >
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* =======================================================
              DIAGRAM BACKGROUND
          ======================================================= */}
          <rect
            x="0.5"
            y="0.5"
            width="1099"
            height="589"
            rx="26"
            fill="#081b24"
            stroke="#ffffff"
            strokeOpacity="0.07"
          />

          <rect
            x="1"
            y="1"
            width="1098"
            height="588"
            rx="26"
            fill="url(#viot-grid)"
          />

          {/* =======================================================
              TOP LABEL
          ======================================================= */}
          <text
            x="550"
            y="38"
            textAnchor="middle"
            fill="#ffffff"
            fillOpacity="0.28"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="9"
            fontWeight="600"
            letterSpacing="2"
          >
            POSITIONING &amp; FIELD DATA
          </text>

          {/* =======================================================
              GNSS CIRCULAR NODE
          ======================================================= */}
          <g transform="translate(550 112)">
            {/* outer technical ring */}
            <circle
              cx="0"
              cy="0"
              r="49"
              fill="none"
              stroke="#27d59b"
              strokeOpacity="0.12"
              strokeWidth="1"
              strokeDasharray="3 6"
            />

            <circle
              cx="0"
              cy="0"
              r="39"
              fill="#0a222c"
              stroke="#27d59b"
              strokeOpacity="0.65"
              strokeWidth="1.5"
            />

            <circle
              cx="0"
              cy="0"
              r="31"
              fill="#081b24"
              stroke="#27d59b"
              strokeOpacity="0.15"
              strokeWidth="1"
            />

            {/* Satellite icon */}
            <g
              fill="none"
              stroke="#27d59b"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M-11 -10L11 12" />
              <path d="M-17 -4L-9 -12L-3 -6L-11 2Z" />
              <path d="M3 10L11 2L17 8L9 16Z" />
              <path d="M-3 14L-9 20" />
              <path d="M8 -15L14 -21" />
            </g>

            {/* GNSS signal */}
            <path
              d="M18 -19 Q28 -10 29 1"
              fill="none"
              stroke="#27d59b"
              strokeOpacity="0.45"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <text
              x="0"
              y="70"
              textAnchor="middle"
              fill="#27d59b"
              fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
              fontSize="10"
              fontWeight="600"
              letterSpacing="1.7"
            >
              GNSS POSITION
            </text>

            <text
              x="0"
              y="86"
              textAnchor="middle"
              fill="#ffffff"
              fillOpacity="0.35"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
              letterSpacing="0.2"
            >
              Location reference
            </text>
          </g>

          {/* =======================================================
              GNSS → DEVICES CONNECTORS
          ======================================================= */}
          <g
            fill="none"
            stroke="#27d59b"
            strokeWidth="1.2"
            strokeOpacity="0.24"
            strokeDasharray="4 7"
          >
            <path d="M550 162 C550 190 145 188 145 236" />
            <path d="M550 162 C550 198 405 196 405 236" />
            <path d="M550 162 C550 198 695 196 695 236" />
            <path d="M550 162 C550 190 955 188 955 236" />
          </g>

          {/* =======================================================
              DEVICE CONNECTOR ACTIVE DOTS
          ======================================================= */}
          <g fill="#27d59b" filter="url(#signal-glow)">
            <circle cx="145" cy="236" r="3" />
            <circle cx="405" cy="236" r="3" />
            <circle cx="695" cy="236" r="3" />
            <circle cx="955" cy="236" r="3" />
          </g>

          {/* =======================================================
              DEVICE 01 — VEHICLE
          ======================================================= */}
          <g transform="translate(65 236)">
            <rect
              width="160"
              height="112"
              rx="18"
              fill="#0d2732"
              stroke="#ffffff"
              strokeOpacity="0.09"
            />

            {/* Icon circle */}
            <circle
              cx="38"
              cy="38"
              r="23"
              fill="#27d59b"
              fillOpacity="0.07"
              stroke="#27d59b"
              strokeOpacity="0.3"
            />

            {/* Truck icon */}
            <g
              transform="translate(23 25)"
              fill="none"
              stroke="#27d59b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 3h22v14H0z" />
              <path d="M22 8h7l5 5v4H22z" />
              <circle cx="7" cy="20" r="3" />
              <circle cx="28" cy="20" r="3" />
            </g>

            <text
              x="70"
              y="35"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="13"
              fontWeight="600"
              letterSpacing="0.1"
            >
              VEHICLE
            </text>

            <text
              x="70"
              y="52"
              fill="#ffffff"
              fillOpacity="0.42"
              fontFamily="ui-monospace, monospace"
              fontSize="8.5"
              fontWeight="500"
              letterSpacing="1"
            >
              TELEMATICS
            </text>

            <line
              x1="20"
              y1="73"
              x2="140"
              y2="73"
              stroke="#ffffff"
              strokeOpacity="0.07"
            />

            <text
              x="20"
              y="92"
              fill="#ffffff"
              fillOpacity="0.42"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
            >
              Position · Trip · Vehicle
            </text>
          </g>

          {/* =======================================================
              DEVICE 02 — E LOCK
          ======================================================= */}
          <g transform="translate(325 236)">
            <rect
              width="160"
              height="112"
              rx="18"
              fill="#0d2732"
              stroke="#ffffff"
              strokeOpacity="0.09"
            />

            <circle
              cx="38"
              cy="38"
              r="23"
              fill="#ffb321"
              fillOpacity="0.07"
              stroke="#ffb321"
              strokeOpacity="0.3"
            />

            {/* Lock icon */}
            <g
              transform="translate(25 24)"
              fill="none"
              stroke="#ffb321"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="12" width="21" height="18" rx="3" />
              <path d="M8 12V7a6 6 0 0112 0v5" />
              <circle cx="13.5" cy="20" r="1.5" />
              <path d="M13.5 22v3" />
            </g>

            <text
              x="70"
              y="35"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              E-LOCK
            </text>

            <text
              x="70"
              y="52"
              fill="#ffb321"
              fillOpacity="0.75"
              fontFamily="ui-monospace, monospace"
              fontSize="8.5"
              fontWeight="500"
              letterSpacing="1"
            >
              SECURITY
            </text>

            <line
              x1="20"
              y1="73"
              x2="140"
              y2="73"
              stroke="#ffffff"
              strokeOpacity="0.07"
            />

            <text
              x="20"
              y="92"
              fill="#ffffff"
              fillOpacity="0.42"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
            >
              Lock state · Tamper · Access
            </text>
          </g>

          {/* =======================================================
              DEVICE 03 — SENSOR
          ======================================================= */}
          <g transform="translate(615 236)">
            <rect
              width="160"
              height="112"
              rx="18"
              fill="#0d2732"
              stroke="#ffffff"
              strokeOpacity="0.09"
            />

            <circle
              cx="38"
              cy="38"
              r="23"
              fill="#27d59b"
              fillOpacity="0.07"
              stroke="#27d59b"
              strokeOpacity="0.3"
            />

            {/* Sensor / signal icon */}
            <g
              transform="translate(22 24)"
              fill="none"
              stroke="#27d59b"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="16" cy="18" r="3" fill="#27d59b" />

              <path d="M8 18a8 8 0 018-8" />
              <path d="M24 18a8 8 0 00-8-8" />

              <path d="M3 18a13 13 0 0113-13" />
              <path d="M29 18A13 13 0 0016 5" />
            </g>

            <text
              x="70"
              y="35"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              IOT SENSOR
            </text>

            <text
              x="70"
              y="52"
              fill="#27d59b"
              fillOpacity="0.75"
              fontFamily="ui-monospace, monospace"
              fontSize="8.5"
              fontWeight="500"
              letterSpacing="1"
            >
              FIELD DATA
            </text>

            <line
              x1="20"
              y1="73"
              x2="140"
              y2="73"
              stroke="#ffffff"
              strokeOpacity="0.07"
            />

            <text
              x="20"
              y="92"
              fill="#ffffff"
              fillOpacity="0.42"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
            >
              Environment · Status · Event
            </text>
          </g>

          {/* =======================================================
              DEVICE 04 — VIDEO
          ======================================================= */}
          <g transform="translate(875 236)">
            <rect
              width="160"
              height="112"
              rx="18"
              fill="#0d2732"
              stroke="#ffffff"
              strokeOpacity="0.09"
            />

            <circle
              cx="38"
              cy="38"
              r="23"
              fill="#ffffff"
              fillOpacity="0.035"
              stroke="#ffffff"
              strokeOpacity="0.18"
            />

            {/* Camera icon */}
            <g
              transform="translate(22 25)"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="6" width="23" height="17" rx="3" />
              <path d="M25 11l9-5v17l-9-5" />
              <circle cx="13.5" cy="14.5" r="4" />
            </g>

            <text
              x="70"
              y="35"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="13"
              fontWeight="600"
            >
              VIDEO
            </text>

            <text
              x="70"
              y="52"
              fill="#ffb321"
              fillOpacity="0.75"
              fontFamily="ui-monospace, monospace"
              fontSize="8.5"
              fontWeight="500"
              letterSpacing="1"
            >
              PLANNED LAYER
            </text>

            <line
              x1="20"
              y1="73"
              x2="140"
              y2="73"
              stroke="#ffffff"
              strokeOpacity="0.07"
            />

            <text
              x="20"
              y="92"
              fill="#ffffff"
              fillOpacity="0.42"
              fontFamily="system-ui, sans-serif"
              fontSize="9"
            >
              Visual safety · Review
            </text>
          </g>

          {/* =======================================================
              DEVICE → PLATFORM DATA PATH
          ======================================================= */}
          <g
            fill="none"
            stroke="url(#viot-signal)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          >
            <path d="M145 348 C145 410 355 415 465 438" />
            <path d="M405 348 C405 400 450 418 492 438" />
            <path d="M695 348 C695 400 650 418 608 438" />
            <path d="M955 348 C955 410 745 415 635 438" />
          </g>

          {/* Small active data points */}
          <g fill="#27d59b" filter="url(#signal-glow)">
            <circle cx="260" cy="386" r="2.8" />
            <circle cx="447" cy="410" r="2.8" />
            <circle cx="653" cy="410" r="2.8" />
            <circle cx="840" cy="386" r="2.8" />
          </g>

          {/* =======================================================
              PLATFORM CORE
          ======================================================= */}
          <g transform="translate(385 438)">
            {/* outer ring */}
            <rect
              x="0"
              y="0"
              width="330"
              height="105"
              rx="22"
              fill="url(#platform-fill)"
              stroke="#27d59b"
              strokeOpacity="0.55"
              strokeWidth="1.5"
            />

            {/* left icon area */}
            <circle
              cx="47"
              cy="47"
              r="25"
              fill="#27d59b"
              fillOpacity="0.07"
              stroke="#27d59b"
              strokeOpacity="0.28"
            />

            {/* platform / intelligence icon */}
            <g
              transform="translate(34 34)"
              fill="none"
              stroke="#27d59b"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="1" width="24" height="24" rx="5" />
              <path d="M7 17l4-5 4 3 5-7" />
              <circle cx="7" cy="17" r="1" fill="#27d59b" />
              <circle cx="11" cy="12" r="1" fill="#27d59b" />
              <circle cx="15" cy="15" r="1" fill="#27d59b" />
              <circle cx="20" cy="8" r="1" fill="#27d59b" />
            </g>

            <text
              x="88"
              y="39"
              fill="#ffffff"
              fontFamily="system-ui, sans-serif"
              fontSize="15"
              fontWeight="650"
              letterSpacing="-0.1"
            >
              VIoT PLATFORM
            </text>

            <text
              x="88"
              y="58"
              fill="#27d59b"
              fontFamily="ui-monospace, monospace"
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="1.2"
            >
              MONITOR · ANALYSE · RESPOND
            </text>

            <line
              x1="22"
              y1="78"
              x2="308"
              y2="78"
              stroke="#ffffff"
              strokeOpacity="0.07"
            />

            <circle
              cx="30"
              cy="92"
              r="3"
              fill="#27d59b"
              filter="url(#signal-glow)"
            />

            <text
              x="41"
              y="95"
              fill="#ffffff"
              fillOpacity="0.42"
              fontFamily="ui-monospace, monospace"
              fontSize="7.5"
              letterSpacing="0.8"
            >
              CONNECTED DATA / OPERATIONAL VIEW
            </text>
          </g>

          {/* =======================================================
              BOTTOM DESCRIPTION
          ======================================================= */}
          <text
            x="550"
            y="574"
            textAnchor="middle"
            fill="#ffffff"
            fillOpacity="0.25"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            fontSize="8.5"
            fontWeight="500"
            letterSpacing="1.3"
          >
            DATA DEPTH DEPENDS ON HARDWARE, VEHICLE &amp; DEPLOYMENT CONFIGURATION
          </text>
        </svg>
      </div>
    </div>
  );
}