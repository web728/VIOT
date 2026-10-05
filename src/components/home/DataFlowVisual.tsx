"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------

   VIoT DATA FLOW

   GPS / Video / RFID / E-Lock

        ↓

   VIoT Platform

        ↓

   Analytics / Alerts / Action

\------------------------------------------------------------------- */

const INK = "#081b24";

const SIGNAL = "#27d59b";

const SIGNAL_DARK = "#007c67";

const MUTED = "#8fa0a7";

type SourceNode = {

  id: string;

  y: number;

  title: string;

  sub: string;

  packet: string;

  icon: "gps" | "video" | "rfid" | "lock";

};

type OutputNode = {

  id: string;

  y: number;

  title: string;

  sub: string;

  packet: string;

  icon: "analytics" | "alert" | "action";

};

const sources: SourceNode[] = [

  {

    id: "gps",

    y: 88,

    title: "GPS",

    sub: "Location & movement",

    packet: "LOC · 28.61, 77.21",

    icon: "gps",

  },

  {

    id: "video",

    y: 206,

    title: "Video",

    sub: "Road & driver events",

    packet: "CAM · EVENT",

    icon: "video",

  },

  {

    id: "rfid",

    y: 324,

    title: "RFID",

    sub: "Access identity",

    packet: "RFID · VERIFIED",

    icon: "rfid",

  },

 {
  id: "lock",
  y: 442,
  title: "BLE Lock",
  sub: "Secure wireless access",
  packet: "LOCK · SECURE",
  icon: "lock",
},

];

const outputs: OutputNode[] = [

  {

    id: "analytics",

    y: 136,

    title: "Analytics",

    sub: "Routes · ETA · utilisation",

    packet: "INSIGHT · ETA 18m",

    icon: "analytics",

  },

  {

    id: "alerts",

    y: 280,

    title: "Alerts",

    sub: "Exception-led response",

    packet: "ALERT · GEOFENCE",

    icon: "alert",

  },

  {

    id: "action",

    y: 424,

    title: "Action",

    sub: "Workflow & control",

    packet: "ACTION · DISPATCH",

    icon: "action",

  },

];

function FlowIcon({

  name,

  size = 24,

}: {

  name: SourceNode["icon"] | OutputNode["icon"];

  size?: number;

}) {

  const common = {

    fill: "none",

    stroke: "currentColor",

    strokeWidth: 1.7,

    strokeLinecap: "round" as const,

    strokeLinejoin: "round" as const,

  };

  return (

    <svg

      viewBox="0 0 24 24"

      width={size}

      height={size}

      aria-hidden="true"

      {...common}

    >

      {name === "gps" && (

        <>

          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />

          <circle cx="12" cy="10" r="2.1" />

        </>

      )}

      {name === "video" && (

        <>

          <rect x="3.5" y="6.5" width="12.5" height="11" rx="2" />

          <path d="m16 10 4.5-2.5v9L16 14" />

          <circle cx="9.5" cy="12" r="2.1" />

        </>

      )}

      {name === "rfid" && (

        <>

          <path d="M8 8a5.5 5.5 0 0 0 0 8" />

          <path d="M5 5a9.5 9.5 0 0 0 0 14" />

          <path d="M16 8a5.5 5.5 0 0 1 0 8" />

          <path d="M19 5a9.5 9.5 0 0 1 0 14" />

          <circle cx="12" cy="12" r="1.5" />

        </>

      )}

      {name === "lock" && (

        <>

          <rect x="5" y="10" width="14" height="10" rx="2" />

          <path d="M8 10V7a4 4 0 0 1 8 0v3" />

          <path d="M12 14v2.5" />

        </>

      )}

      {name === "analytics" && (

        <>

          <path d="M5 19V13" />

          <path d="M10 19V9" />

          <path d="M15 19V5" />

          <path d="M20 19V11" />

        </>

      )}

      {name === "alert" && (

        <>

          <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4l2-2Z" />

          <path d="M10 21h4" />

        </>

      )}

      {name === "action" && (

        <>

          <circle cx="12" cy="12" r="3" />

          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />

          <path d="m4.9 4.9 2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />

        </>

      )}

    </svg>

  );

}

function SvgFlowGlyph({
  name,
  x = 0,
  y = 0,
  scale = 1,
  color = SIGNAL,
}: {
  name: SourceNode["icon"] | OutputNode["icon"];
  x?: number;
  y?: number;
  scale?: number;
  color?: string;
}) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      fill="none"
      stroke={color}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === "gps" && (
        <>
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.1" />
        </>
      )}

      {name === "video" && (
        <>
          <rect x="3.5" y="6.5" width="12.5" height="11" rx="2" />
          <path d="m16 10 4.5-2.5v9L16 14" />
          <circle cx="9.5" cy="12" r="2.1" />
        </>
      )}

      {name === "rfid" && (
        <>
          <path d="M8 8a5.5 5.5 0 0 0 0 8" />
          <path d="M5 5a9.5 9.5 0 0 0 0 14" />
          <path d="M16 8a5.5 5.5 0 0 1 0 8" />
          <path d="M19 5a9.5 9.5 0 0 1 0 14" />
          <circle cx="12" cy="12" r="1.5" />
        </>
      )}

      {name === "lock" && (
        <>
          <rect x="5" y="10" width="14" height="10" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <path d="M12 14v2.5" />
        </>
      )}

      {name === "analytics" && (
        <>
          <path d="M5 19V13" />
          <path d="M10 19V9" />
          <path d="M15 19V5" />
          <path d="M20 19V11" />
        </>
      )}

      {name === "alert" && (
        <>
          <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4l2-2Z" />
          <path d="M10 21h4" />
        </>
      )}

      {name === "action" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          <path d="m4.9 4.9 2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
        </>
      )}
    </g>
  );
}

function Packet({

  path,

  text,

  begin,

  animate,

}: {

  path: string;

  text: string;

  begin: number;

  animate: boolean;

}) {

  return (

    <g>

      <circle r="4.2" fill={SIGNAL}>

        <animateMotion

          path={path}

          dur="5.6s"

          begin={`${begin}s`}

          repeatCount="indefinite"

          calcMode="linear"

        />

        <animate

          attributeName="opacity"

          values="0;1;1;0"

          keyTimes="0;0.08;0.88;1"

          dur="5.6s"

          begin={`${begin}s`}

          repeatCount="indefinite"

        />

      </circle>

      <circle r="9" fill="none" stroke={SIGNAL} strokeOpacity="0.22">

        <animateMotion

          path={path}

          dur="5.6s"

          begin={`${begin}s`}

          repeatCount="indefinite"

          calcMode="linear"

        />

        <animate

          attributeName="r"

          values="6;10;6"

          dur="1.2s"

          begin={`${begin}s`}

          repeatCount="indefinite"

        />

        <animate

          attributeName="opacity"

          values="0;0.35;0"

          dur="1.2s"

          begin={`${begin}s`}

          repeatCount="indefinite"

        />

      </circle>

      <g opacity="0">

        <animateMotion

          path={path}

          dur="5.6s"

          begin={`${begin}s`}

          repeatCount="indefinite"

          calcMode="linear"

        />

        <animate

          attributeName="opacity"

          values="0;0;0.95;0.95;0"

          keyTimes="0;0.14;0.2;0.72;0.84"

          dur="5.6s"

          begin={`${begin}s`}

          repeatCount="indefinite"

        />

        <rect

          x="10"

          y="-13"

          width="118"

          height="25"

          rx="7"

          fill={INK}

          stroke={SIGNAL}

          strokeOpacity="0.22"

        />

        <text

          x="20"

          y="3.2"

          fill="rgba(255,255,255,0.8)"

          fontSize="8.5"

          fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"

          letterSpacing="0.8"

        >

          {text}

        </text>

      </g>

    </g>

  );

}

function FlowToken({
  path,
  icon,
  label,
  delay,
  duration = 4.8,
  animate,
}: {
  path: string;
  icon: SourceNode["icon"] | OutputNode["icon"];
  label: string;
  delay: number;
  duration?: number;
  animate: boolean;
}) {
  return (
    <g>
      <g opacity="0">
        <animateMotion
          path={path}
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          calcMode="linear"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;1;0"
          keyTimes="0;0.08;0.8;0.94;1"
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
        />

        <circle
          r="16"
          fill="#081b24"
          stroke="#27d59b"
          strokeOpacity="0.46"
          strokeWidth="1.15"
        />
        <circle
          r="9"
          fill="#27d59b"
          fillOpacity="0.06"
          stroke="#27d59b"
          strokeOpacity="0.22"
        />

        <circle cx="-22" cy="0" r="3" fill="#27d59b" fillOpacity="0.38" />
        <circle cx="-32" cy="0" r="2" fill="#27d59b" fillOpacity="0.20" />

        <SvgFlowGlyph
          name={icon}
          x={-8}
          y={-8}
          scale={0.68}
          color={SIGNAL}
        />
      </g>
    </g>
  );
}

function SourceCard({ node }: { node: SourceNode }) {

  return (

    <g transform={`translate(38 ${node.y - 42})`}>

      <rect

        width="224"

        height="84"

        rx="16"

        fill="rgba(8,27,36,0.96)"

        stroke="rgba(255,255,255,0.10)"

      />

      <rect

        x="14"

        y="14"

        width="56"

        height="56"

        rx="13"

        fill="rgba(39,213,155,0.055)"

        stroke="rgba(39,213,155,0.16)"

      />

      <SvgFlowGlyph
        name={node.icon}
        x={30}
        y={30}
        scale={1}
        color={SIGNAL}
      />

      <text

        x="86"

        y="34"

        fill="#ffffff"

        fontSize="15"

        fontWeight="700"

        fontFamily="ui-sans-serif, system-ui, sans-serif"

      >

        {node.title}

      </text>

      <text

        x="86"

        y="54"

        fill="rgba(255,255,255,0.46)"

        fontSize="10"

        fontFamily="ui-sans-serif, system-ui, sans-serif"

      >

        {node.sub}

      </text>

      <circle cx="224" cy="42" r="5.5" fill={SIGNAL} />

      <circle

        cx="224"

        cy="42"

        r="10"

        fill="none"

        stroke={SIGNAL}

        strokeOpacity="0.18"

      />

    </g>

  );

}

function OutputCard({ node }: { node: OutputNode }) {

  return (

    <g transform={`translate(938 ${node.y - 42})`}>

      <rect

        width="224"

        height="84"

        rx="16"

        fill="rgba(8,27,36,0.96)"

        stroke="rgba(255,255,255,0.10)"

      />

      <rect

        x="14"

        y="14"

        width="56"

        height="56"

        rx="13"

        fill="rgba(39,213,155,0.055)"

        stroke="rgba(39,213,155,0.16)"

      />

      <SvgFlowGlyph
        name={node.icon}
        x={30}
        y={30}
        scale={1}
        color={SIGNAL}
      />

      <text

        x="86"

        y="34"

        fill="#ffffff"

        fontSize="15"

        fontWeight="700"

        fontFamily="ui-sans-serif, system-ui, sans-serif"

      >

        {node.title}

      </text>

      <text

        x="86"

        y="54"

        fill="rgba(255,255,255,0.46)"

        fontSize="10"

        fontFamily="ui-sans-serif, system-ui, sans-serif"

      >

        {node.sub}

      </text>

      <circle cx="0" cy="42" r="5.5" fill={SIGNAL} />

      <circle

        cx="0"

        cy="42"

        r="10"

        fill="none"

        stroke={SIGNAL}

        strokeOpacity="0.18"

      />

    </g>

  );

}

function PlatformCore({ animate }: { animate: boolean }) {

  return (

    <g transform="translate(458 164)">

      <motion.circle

        cx="142"

        cy="116"

        r="128"

        fill="none"

        stroke={SIGNAL}

        strokeOpacity="0.06"

        strokeDasharray="3 13"

        animate={{ rotate: 360 }}

        transition={{

          duration: 38,

          repeat: Infinity,

          ease: "linear",

        }}

        style={{ transformOrigin: "142px 116px" }}

      />

      <motion.circle

        cx="142"

        cy="116"

        r="104"

        fill="none"

        stroke="rgba(8,27,36,0.08)"

        strokeDasharray="2 11"

        animate={{ rotate: -360 }}

        transition={{

          duration: 30,

          repeat: Infinity,

          ease: "linear",

        }}

        style={{ transformOrigin: "142px 116px" }}

      />

      <rect

        width="284"

        height="232"

        rx="26"

        fill="rgba(8,27,36,0.98)"

        stroke="rgba(255,255,255,0.10)"

      />

      <rect

        x="20"

        y="20"

        width="244"

        height="115"

        rx="18"

        fill={INK}

      />

      <path

        d="M45 105 C80 55 118 84 145 57 S208 40 240 70"

        fill="none"

        stroke={SIGNAL}

        strokeOpacity="0.32"

        strokeWidth="1.2"

        strokeDasharray="3 8"

      />

      <path

        d="M48 88 C92 110 120 62 168 79 S220 105 242 58"

        fill="none"

        stroke="rgba(255,255,255,0.15)"

        strokeWidth="1"

      />

      {[70, 105, 140, 175, 210].map((x, index) => (

        <g key={x}>

          <rect

            x={x}

            y={56 - index * 2}

            width="18"

            height={50 + index * 3}

            rx="3"

            fill="rgba(39,213,155,0.08)"

            stroke={SIGNAL}

            strokeOpacity="0.28"

          />

          <line

            x1={x + 4}

            x2={x + 14}

            y1={68 - index * 2}

            y2={68 - index * 2}

            stroke={SIGNAL}

            strokeOpacity="0.45"

          />

          <line

            x1={x + 4}

            x2={x + 14}

            y1={76 - index * 2}

            y2={76 - index * 2}

            stroke="rgba(255,255,255,0.18)"

          />

        </g>

      ))}

      <motion.circle

        cx="218"

        cy="46"

        r="4"

        fill={SIGNAL}

        animate={

          animate

            ? { opacity: [0.25, 1, 0.25], r: [3, 5, 3] }

            : undefined

        }

        transition={{

          duration: 1.8,

          repeat: Infinity,

          ease: "easeInOut",

        }}

      />

      <image

        href="/logo/logo-bg.png"

        x="90"

        y="150"

        width="104"

        height="34"

        preserveAspectRatio="xMidYMid meet"

      />

      <text

        x="142"

        y="206"

        textAnchor="middle"

        fill="rgba(255,255,255,0.46)"

        fontSize="9.5"

        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"

        letterSpacing="1.2"

      >

        CONNECTED OPERATIONS PLATFORM

      </text>

    </g>

  );

}

function DesktopFlow({ animate }: { animate: boolean }) {

  const leftPaths = [

    "M262 88 C342 88 348 206 458 206",

    "M262 206 C345 206 366 230 458 230",

    "M262 324 C348 324 366 304 458 304",

    "M262 442 C340 442 350 328 458 328",

  ];

  const rightPaths = [

    "M742 218 C830 218 846 136 938 136",

    "M742 280 C836 280 848 280 938 280",

    "M742 342 C832 342 846 424 938 424",

  ];

  return (

    <div className="w-full min-w-0 overflow-hidden">

      <svg

        viewBox="0 0 1200 560"

        preserveAspectRatio="xMidYMid meet"

        className="block h-auto w-full max-w-full"

        role="img"

        aria-label="VIoT data flow from GPS, video, RFID and E-Lock through the VIoT platform to analytics, alerts and operational action."

      >

        <defs>

          <filter id="vf-shadow" x="-20%" y="-20%" width="140%" height="140%">

            <feDropShadow

              dx="0"

              dy="10"

              stdDeviation="14"

              floodColor="#081b24"

              floodOpacity="0.08"

            />

          </filter>

          <linearGradient id="vf-bg" x1="0" x2="1">

            <stop offset="0%" stopColor="#071820" />

            <stop offset="50%" stopColor="#0a2029" />

            <stop offset="100%" stopColor="#071820" />

          </linearGradient>

          <radialGradient id="vf-core-glow" cx="50%" cy="50%" r="50%">

            <stop offset="0%" stopColor={SIGNAL} stopOpacity="0.08" />

            <stop offset="100%" stopColor={SIGNAL} stopOpacity="0" />

          </radialGradient>

        </defs>

        <rect width="1200" height="560" rx="28" fill="url(#vf-bg)" />

        <circle cx="600" cy="280" r="235" fill="url(#vf-core-glow)" />

        <path

          d="M0 460 C220 370 350 510 570 405 S950 260 1200 360"

          fill="none"

          stroke="rgba(255,255,255,0.035)"

          strokeWidth="1"

        />

        <path

          d="M0 98 C260 10 410 88 610 110 S940 210 1200 76"

          fill="none"

          stroke="rgba(39,213,155,0.055)"

          strokeWidth="1"

          strokeDasharray="3 15"

        />

        <g filter="url(#vf-shadow)">

          {sources.map((node) => (

            <SourceCard key={node.id} node={node} />

          ))}

          {outputs.map((node) => (

            <OutputCard key={node.id} node={node} />

          ))}

          <PlatformCore animate={animate} />

        </g>

        <g

          fill="none"

          stroke={SIGNAL}

          strokeOpacity="0.26"

          strokeWidth="1.35"

        >

          {leftPaths.map((path) => (

            <path key={path} d={path} />

          ))}

          {rightPaths.map((path) => (

            <path key={path} d={path} />

          ))}

        </g>

        <g

          fill="none"

          stroke={SIGNAL}

          strokeOpacity="0.10"

          strokeWidth="5"

          strokeLinecap="round"

        >

          {leftPaths.map((path) => (

            <motion.path

              key={`pulse-${path}`}

              d={path}

              initial={{ pathLength: 0 }}

              animate={{ pathLength: [0, 1, 1] }}

              transition={{

                duration: 3.2,

                repeat: Infinity,

                repeatDelay: 1.7,

                ease: "easeInOut",

              }}

            />

          ))}

        
          {rightPaths.map((path, index) => (
            <motion.path
              key={`pulse-right-${index}`}
              d={path}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1, 1] }}
              transition={{
                duration: 3.1,
                delay: index * 0.12,
                repeat: Infinity,
                repeatDelay: 1.0,
                ease: "easeInOut",
              }}
            />
          ))}
</g>

     {sources.map((node, index) => (
  <g key={`source-flow-${node.id}`}>
    <FlowToken
      path={leftPaths[index]}
      icon={node.icon}
      label={node.packet}
      delay={index * 0.6}
      duration={5}
      animate={animate}
    />

    <FlowToken
      path={leftPaths[index]}
      icon={node.icon}
      label={node.title}
      delay={5 + index * 0.6}
      duration={5}
      animate={animate}
    />
  </g>
))}

        {outputs.map((node, index) => (

          <g key={`output-flow-${node.id}`}>

            <FlowToken

              path={rightPaths[index]}

              icon={node.icon}

              label={node.packet}

              delay={0.35 + index * 0.48}

              duration={4.9}

              animate={animate}

            />

            <FlowToken

              path={rightPaths[index]}

              icon={node.icon}

              label={node.title}

              delay={2.1 + index * 0.48}

              duration={4.9}

              animate={animate}

            />

          </g>

        ))}

        {/* Convergence into the VIoT core */}

        <g>

          {[0, 1, 2].map((i) => (

            <motion.circle

              key={`core-pulse-${i}`}

              cx="600"

              cy="280"

              r="42"

              fill="none"

              stroke={SIGNAL}

              strokeOpacity="0.18"

              strokeWidth="1"

              animate={

                animate

                  ? {

                      r: [34, 92],

                      opacity: [0.45, 0],

                    }

                  : { opacity: 0.18 }

              }

              transition={{

                duration: 3.2,

                delay: i * 0.9,

                repeat: Infinity,

                ease: "easeOut",

              }}

            />

          ))}

        </g>

        <g transform="translate(318 258)">

          <rect

            width="104"

            height="44"

            rx="10"

            fill={INK}

            fillOpacity="0.94"

          />

          <text

            x="52"

            y="17"

            textAnchor="middle"

            fill={SIGNAL}

            fontSize="7.5"

            fontWeight="700"

            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"

            letterSpacing="1"

          >

            INGRESS

          </text>

          <text

            x="52"

            y="31"

            textAnchor="middle"

            fill="rgba(255,255,255,0.58)"

            fontSize="8.5"

            fontFamily="ui-sans-serif, system-ui, sans-serif"

          >

            signals converge

          </text>

        </g>

        <g transform="translate(782 258)">

          <rect

            width="112"

            height="44"

            rx="10"

            fill={INK}

            fillOpacity="0.94"

          />

          <text

            x="56"

            y="17"

            textAnchor="middle"

            fill={SIGNAL}

            fontSize="7.5"

            fontWeight="700"

            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"

            letterSpacing="1"

          >

            EGRESS

          </text>

          <text

            x="56"

            y="31"

            textAnchor="middle"

            fill="rgba(255,255,255,0.58)"

            fontSize="8.5"

            fontFamily="ui-sans-serif, system-ui, sans-serif"

          >

            data branches out

          </text>

        </g>

      </svg>

    </div>

  );

}

function MobileNode({

  title,

  sub,

  icon,

}: {

  title: string;

  sub: string;

  icon: SourceNode["icon"] | OutputNode["icon"];

}) {

  return (

    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.08] bg-[#081b24] px-3.5 py-3 shadow-[0_8px_22px_rgba(8,27,36,0.045)]">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#27d59b]/15 bg-[#27d59b]/[0.04] text-[#27d59b]">

        <FlowIcon name={icon} size={20} />

      </div>

      <div className="min-w-0">

        <p className="text-sm font-semibold leading-5 text-white">

          {title}

        </p>

        <p className="mt-0.5 text-[11px] leading-4 text-white/45">{sub}</p>

      </div>

    </div>

  );

}

function MobileConnector({

  label,

  animate,

}: {

  label?: string;

  animate: boolean;

}) {

  return (

    <div className="relative mx-auto flex h-12 w-full items-center justify-center">

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#007c67]/20" />

      {animate && (

        <motion.span

          className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#27d59b]"

          animate={{ y: [0, 40], opacity: [0, 1, 0] }}

          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}

        />

      )}

      {label && (

        <span className="relative z-10 rounded-md border border-white/[0.08] bg-[#081b24] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-white/45">

          {label}

        </span>

      )}

    </div>

  );

}

function MobilePlatform({ animate }: { animate: boolean }) {

  return (

    <div className="relative overflow-hidden rounded-2xl border border-[#c8d5d0] bg-[#081b24] p-5 text-white shadow-[0_16px_42px_rgba(8,27,36,0.10)]">

      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#27d59b]/10" />

      <motion.div

        className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-white/[0.06]"

        animate={{ rotate: 360 }}

        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}

      />

      <div className="relative">

        <div className="flex items-center justify-between gap-4">

          <img

            src="/logo/logo-bg.png"

            alt="VIoT"

            className="h-8 w-auto object-contain"

          />

          <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#27d59b]">

            <motion.span

              className="h-1.5 w-1.5 rounded-full bg-[#27d59b]"

              animate={

                animate ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.8 }

              }

              transition={{ duration: 1.6, repeat: Infinity }}

            />

            Live data

          </span>

        </div>

        <p className="mt-5 font-heading text-xl font-semibold tracking-[-0.03em]">

          VIoT Platform

        </p>

        <p className="mt-2 text-xs leading-5 text-white/45">

          Receives connected field data and turns it into operational context.

        </p>

        <div className="mt-5 grid grid-cols-3 gap-2">

          {["Capture", "Process", "Route"].map((item, index) => (

            <div

              key={item}

              className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-2 py-2.5 text-center"

            >

              <span className="font-mono text-[7px] text-[#27d59b]">

                0{index + 1}

              </span>

              <p className="mt-1 text-[10px] text-white/55">{item}</p>

            </div>

          ))}

        </div>

      </div>

    </div>

  );

}

function MobileFlow({ animate }: { animate: boolean }) {

  return (

    <div className="w-full">

      <div className="grid gap-2 sm:grid-cols-2">

        {sources.map((node) => (

          <MobileNode

            key={node.id}

            title={node.title}

            sub={node.sub}

            icon={node.icon}

          />

        ))}

      </div>

      <MobileConnector label="Capture & push data" animate={animate} />

      <MobilePlatform animate={animate} />

      <MobileConnector label="Intelligence" animate={animate} />

      <div className="grid gap-2 sm:grid-cols-3">

        {outputs.map((node) => (

          <MobileNode

            key={node.id}

            title={node.title}

            sub={node.sub}

            icon={node.icon}

          />

        ))}

      </div>

    </div>

  );

}

/* ------------------------------------------------------------------

   MAIN EXPORT

\------------------------------------------------------------------- */

export function DataFlowVisual() {
  const animate = true;

  return (

    <div className="w-full min-w-0 rounded-2xl border border-white/[0.08] bg-[#081b24] p-4 shadow-[0_20px_55px_rgba(8,27,36,0.16)] sm:p-5 lg:p-6">

      <div className="mb-5 flex min-w-0 items-center gap-3">

        <span className="h-px w-8 shrink-0 bg-[#27d59b]" />

        <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#27d59b]">

          How the system works

        </span>

      </div>

      <div className="hidden w-full min-w-0 lg:block">

        <DesktopFlow animate={animate} />

      </div>

      <div className="w-full min-w-0 lg:hidden">

        <MobileFlow animate={animate} />

      </div>

    </div>

  );

}

export default DataFlowVisual;
