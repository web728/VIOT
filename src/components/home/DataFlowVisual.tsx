"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------
   FLOW
   Satellite ─┐
              ├─► Device ─► VIoT Platform ─► Analytics ─► Action
   Network  ──┘
------------------------------------------------------------------- */

const CYCLE = 4;

type IconName =
  | "satellite"
  | "network"
  | "device"
  | "platform"
  | "analytics"
  | "action";

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  icon: IconName;
  arrive: number;
};

/* ------------------------------------------------------------------
   DESKTOP NODE POSITIONS

   Kept visually similar to the original design,
   but given safer spacing so text always stays inside cards.
------------------------------------------------------------------- */

const nodes: Node[] = [
  {
    id: "sat",
    x: 90,
    y: 40,
    label: "Satellite",
    sub: "Position signal",
    icon: "satellite",
    arrive: 0,
  },
  {
    id: "net",
    x: 90,
    y: 190,
    label: "Network",
    sub: "Cellular link",
    icon: "network",
    arrive: 0,
  },
  {
    id: "dev",
    x: 300,
    y: 115,
    label: "Device",
    sub: "Captures data",
    icon: "device",
    arrive: 0.2,
  },
  {
    id: "plat",
    x: 510,
    y: 115,
    label: "VIoT Platform",
    sub: "Receives live data",
    icon: "platform",
    arrive: 0.4,
  },
  {
    id: "ana",
    x: 720,
    y: 115,
    label: "Analytics",
    sub: "Routes · ETA · events",
    icon: "analytics",
    arrive: 0.6,
  },
  {
    id: "act",
    x: 910,
    y: 115,
    label: "Action",
    sub: "Alerts · decisions",
    icon: "action",
    arrive: 0.8,
  },
];

/* ------------------------------------------------------------------
   CONNECTING PATHS
------------------------------------------------------------------- */

const segments = [
  {
    d: "M160,40 C200,40 200,115 225,115",
    start: 0,
  },
  {
    d: "M160,190 C200,190 200,115 225,115",
    start: 0,
  },
  {
    d: "M375,115 L435,115",
    start: 0.2,
  },
  {
    d: "M585,115 L645,115",
    start: 0.4,
  },
  {
    d: "M795,115 L835,115",
    start: 0.6,
  },
];

/* ------------------------------------------------------------------
   ICONS
------------------------------------------------------------------- */

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "satellite":
      return (
        <g>
          <rect
            x="9.5"
            y="9.5"
            width="5"
            height="5"
            transform="rotate(45 12 12)"
          />
          <path d="M5 5l4 4M15 15l4 4M16 4a6 6 0 0 1 4 4" />
        </g>
      );

    case "network":
      return (
        <g>
          <path d="M12 10v11M8 21h8M12 10l-3 11M12 10l3 11" />
          <circle cx="12" cy="8" r="1.5" />
          <path d="M7.5 5.5a6 6 0 0 0 0 5M16.5 5.5a6 6 0 0 1 0 5" />
        </g>
      );

    case "device":
      return (
        <g>
          <rect x="4" y="7" width="16" height="10" rx="2" />
          <circle cx="8.5" cy="12" r="1" />
          <path d="M12 12h5" />
        </g>
      );

    case "platform":
      return (
        <path d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
      );

    case "analytics":
      return <path d="M5 20V12M12 20V5M19 20V9" />;

    case "action":
      return (
        <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15L6 16zM10 20a2 2 0 0 0 4 0" />
      );

    default:
      return null;
  }
}

/* ------------------------------------------------------------------
   DESKTOP FLOW
------------------------------------------------------------------- */

function DesktopFlow({ animate }: { animate: boolean }) {
  const CARD_WIDTH = 160;
  const CARD_HEIGHT = 58;

  return (
    <div className="w-full min-w-0 overflow-hidden">
      <svg
        viewBox="0 0 1040 230"
        preserveAspectRatio="xMidYMid meet"
        className="block h-auto w-full max-w-full"
        role="img"
        aria-label="Data flow: Satellite and Network feed the Device, which sends data to the VIoT Platform, then Analytics, then Action"
      >
        <defs>
          <marker
            id="vf-arrow"
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto"
          >
            <path
              d="M0 0L8 4L0 8z"
              fill="rgba(255,255,255,0.3)"
            />
          </marker>

          {/* Keeps text strictly inside every card */}
          {nodes.map((n) => {
            const cardX = n.x - CARD_WIDTH / 2;
            const cardY = n.y - CARD_HEIGHT / 2;

            return (
              <clipPath
                key={`clip-${n.id}`}
                id={`vf-card-clip-${n.id}`}
              >
                <rect
                  x={cardX + 46}
                  y={cardY + 4}
                  width={CARD_WIDTH - 54}
                  height={CARD_HEIGHT - 8}
                  rx="5"
                />
              </clipPath>
            );
          })}
        </defs>

        {/* ----------------------------------------------------------
            CONNECTION LINES
        ----------------------------------------------------------- */}

        <path
          d="M170,40 C210,40 210,115 220,115"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          markerEnd="url(#vf-arrow)"
        />

        <path
          d="M170,190 C210,190 210,115 220,115"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          markerEnd="url(#vf-arrow)"
        />

        <path
          d="M380,115 L430,115"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          markerEnd="url(#vf-arrow)"
        />

        <path
          d="M590,115 L640,115"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          markerEnd="url(#vf-arrow)"
        />

        <path
          d="M800,115 L840,115"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          markerEnd="url(#vf-arrow)"
        />

        {/* ----------------------------------------------------------
            TRAVELLING SIGNALS
        ----------------------------------------------------------- */}

        {animate && (
          <>
            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              rx="1"
              fill="#27d59b"
            >
              <animateMotion
                path="M170,40 C210,40 210,115 220,115"
                dur={`${CYCLE}s`}
                begin="0s"
                repeatCount="indefinite"
                calcMode="linear"
              />

              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.201;1"
                dur={`${CYCLE}s`}
                begin="0s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              rx="1"
              fill="#27d59b"
            >
              <animateMotion
                path="M170,190 C210,190 210,115 220,115"
                dur={`${CYCLE}s`}
                begin="0s"
                repeatCount="indefinite"
                calcMode="linear"
              />

              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.201;1"
                dur={`${CYCLE}s`}
                begin="0s"
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              rx="1"
              fill="#27d59b"
            >
              <animateMotion
                path="M380,115 L430,115"
                dur={`${CYCLE}s`}
                begin={`${0.2 * CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />

              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.201;1"
                dur={`${CYCLE}s`}
                begin={`${0.2 * CYCLE}s`}
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              rx="1"
              fill="#27d59b"
            >
              <animateMotion
                path="M590,115 L640,115"
                dur={`${CYCLE}s`}
                begin={`${0.4 * CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />

              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.201;1"
                dur={`${CYCLE}s`}
                begin={`${0.4 * CYCLE}s`}
                repeatCount="indefinite"
              />
            </rect>

            <rect
              x="-3.5"
              y="-3.5"
              width="7"
              height="7"
              rx="1"
              fill="#27d59b"
            >
              <animateMotion
                path="M800,115 L840,115"
                dur={`${CYCLE}s`}
                begin={`${0.6 * CYCLE}s`}
                repeatCount="indefinite"
                calcMode="linear"
              />

              <animate
                attributeName="opacity"
                values="1;1;0;0"
                keyTimes="0;0.2;0.201;1"
                dur={`${CYCLE}s`}
                begin={`${0.6 * CYCLE}s`}
                repeatCount="indefinite"
              />
            </rect>
          </>
        )}

        {/* ----------------------------------------------------------
            CARDS
        ----------------------------------------------------------- */}

        {nodes.map((n) => {
          const cardX = n.x - CARD_WIDTH / 2;
          const cardY = n.y - CARD_HEIGHT / 2;

          return (
            <g key={n.id}>
              {/* Card background */}
              <rect
                x={cardX}
                y={cardY}
                width={CARD_WIDTH}
                height={CARD_HEIGHT}
                rx="10"
                ry="10"
                fill="#081b24"
                stroke="#27d59b"
                strokeOpacity="0.2"
                strokeWidth="1"
              >
                {animate && (
                  <animate
                    attributeName="stroke-opacity"
                    values={
                      n.arrive === 0
                        ? "0.9;0.2;0.2"
                        : "0.2;0.2;0.9;0.2"
                    }
                    keyTimes={
                      n.arrive === 0
                        ? "0;0.3;1"
                        : `0;${n.arrive};${n.arrive + 0.05};1`
                    }
                    dur={`${CYCLE}s`}
                    repeatCount="indefinite"
                  />
                )}
              </rect>

              {/* Icon */}
              <g
                transform={`translate(${cardX + 14}, ${cardY + 17})`}
                fill="none"
                stroke="#27d59b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <Icon name={n.icon} />
              </g>

              {/* Text — clipped strictly inside card */}
              <g clipPath={`url(#vf-card-clip-${n.id})`}>
                <text
                  x={cardX + 48}
                  y={cardY + 25}
                  fill="#ffffff"
                  fontSize="12.5"
                  fontWeight="600"
                  textLength={
                    n.label === "VIoT Platform" ? 82 : undefined
                  }
                  lengthAdjust={
                    n.label === "VIoT Platform"
                      ? "spacingAndGlyphs"
                      : undefined
                  }
                >
                  {n.label}
                </text>

                <text
                  x={cardX + 48}
                  y={cardY + 42}
                  fill="rgba(255,255,255,0.45)"
                  fontSize="9.5"
                  textLength={
                    n.sub === "Receives live data" ||
                    n.sub === "Routes · ETA · events"
                      ? 82
                      : undefined
                  }
                  lengthAdjust={
                    n.sub === "Receives live data" ||
                    n.sub === "Routes · ETA · events"
                      ? "spacingAndGlyphs"
                      : undefined
                  }
                >
                  {n.sub}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------
   MOBILE FLOW
------------------------------------------------------------------- */

function MobileCard({ n }: { n: Node }) {
  return (
    <div
      className="
        flex w-full min-w-0 items-center gap-3
        overflow-hidden
        rounded-xl
        border border-signal/20
        bg-ink
        px-3.5 py-3
      "
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0"
        fill="none"
        stroke="#27d59b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <Icon name={n.icon} />
      </svg>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold leading-5 text-white">
          {n.label}
        </p>

        <p className="break-words text-xs leading-5 text-white/45">
          {n.sub}
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   CONNECTOR
------------------------------------------------------------------- */

function Connector({ animate }: { animate: boolean }) {
  return (
    <div className="relative mx-auto h-6 w-px bg-white/10">
      {animate && (
        <motion.span
          className="absolute -left-[2px] h-[5px] w-[5px] rounded-full bg-signal"
          animate={{
            y: [0, 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------
   MOBILE FLOW
------------------------------------------------------------------- */

function MobileFlow({ animate }: { animate: boolean }) {
  const [sat, net, ...rest] = nodes;

  return (
    <div className="w-full min-w-0">
      <div className="grid w-full min-w-0 gap-2 sm:grid-cols-2">
        <MobileCard n={sat} />
        <MobileCard n={net} />
      </div>

      {rest.map((n) => (
        <div key={n.id} className="w-full min-w-0">
          <Connector animate={animate} />
          <MobileCard n={n} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   LIVE PLATFORM PANEL
------------------------------------------------------------------- */

const ROUTE =
  "M30,120 C110,120 120,40 220,60 S340,130 420,80 S520,40 570,70";

const LOOP_MS = 16000;
const TOTAL_MIN = 24;
const TOTAL_KM = 18;

function LivePanel({ animate }: { animate: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);

  const [len, setLen] = useState(0);
  const [p, setP] = useState(animate ? 0 : 0.5);
  const [pos, setPos] = useState({
    x: 30,
    y: 120,
  });

  useEffect(() => {
    if (pathRef.current) {
      setLen(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    const path = pathRef.current;

    if (!path || !len) return;

    const place = (t: number) => {
      const pt = path.getPointAtLength(len * t);

      setP(t);
      setPos({
        x: pt.x,
        y: pt.y,
      });
    };

    if (!animate) {
      place(0.5);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      place(((now - start) % LOOP_MS) / LOOP_MS);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [len, animate]);

  const arrived = p > 0.96;
  const inZone = p > 0.82;

  const eta = arrived
    ? "Arrived"
    : `${Math.max(1, Math.ceil(TOTAL_MIN * (1 - p)))} min`;

  const distance = (TOTAL_KM * (1 - p)).toFixed(1);

  const speed = arrived
    ? 0
    : 42 + Math.round(8 * Math.sin(p * 22));

  const cell =
    "border-l border-white/[0.08] px-4 py-3 first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0";

  return (
    <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-white/[0.08] lg:grid lg:grid-cols-[minmax(0,1fr)_210px]">
      {/* Map */}

      {/*
      <div className="min-w-0 lg:border-r lg:border-white/[0.08]">
        <div className="flex items-center justify-between px-4 pt-3">
          <p className="text-xs font-semibold text-white">
            Live in the VIoT Platform
          </p>

          <span className="flex items-center gap-1.5 text-[11px] text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Live
          </span>
        </div>

        <div className="w-full min-w-0 overflow-hidden">
          <svg
            viewBox="0 0 600 160"
            className="block h-auto w-full max-w-full"
            aria-hidden="true"
          >
            {[40, 80, 120].map((y) => (
              <line
                key={`h${y}`}
                x1="0"
                x2="600"
                y1={y}
                y2={y}
                stroke="rgba(255,255,255,0.04)"
              />
            ))}

            {[100, 200, 300, 400, 500].map((x) => (
              <line
                key={`v${x}`}
                x1={x}
                x2={x}
                y1="0"
                y2="160"
                stroke="rgba(255,255,255,0.04)"
              />
            ))}

            <path
              ref={pathRef}
              d={ROUTE}
              fill="none"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="2"
              strokeDasharray="4 6"
            />

            {len > 0 && (
              <path
                d={ROUTE}
                fill="none"
                stroke="#27d59b"
                strokeWidth="2.5"
                strokeDasharray={`${len * p} ${len}`}
              />
            )}

            <circle
              cx="570"
              cy="70"
              r="26"
              fill="rgba(39,213,155,0.05)"
              stroke="#27d59b"
              strokeOpacity={inZone ? 0.9 : 0.3}
              strokeDasharray="3 4"
            />

            <rect
              x="567"
              y="67"
              width="6"
              height="6"
              fill="#ffffff"
            />

            <g transform={`translate(${pos.x}, ${pos.y})`}>
              <rect
                x="-14"
                y="-14"
                width="28"
                height="28"
                rx="5"
                fill="rgba(39,213,155,0.14)"
              />

              <rect
                x="-8"
                y="-5"
                width="11"
                height="9"
                rx="1"
                fill="#27d59b"
              />

              <rect
                x="3"
                y="-2"
                width="5"
                height="6"
                rx="1"
                fill="#ffffff"
              />
            </g>

            <g
              transform={`translate(${Math.min(
                pos.x,
                490
              )}, ${Math.max(pos.y - 38, 6)})`}
            >
              <rect
                x="-6"
                y="0"
                width="82"
                height="20"
                rx="6"
                fill="#081b24"
                stroke="rgba(255,255,255,0.16)"
              />

              <text
                x="2"
                y="14"
                fill="#ffffff"
                fontSize="11"
                fontWeight="600"
              >
                ETA {eta}
              </text>
            </g>
          </svg>
        </div>
      </div>
      */}

      {/* Metrics */}

      {/*
      <div className="grid min-w-0 grid-cols-3 border-t border-white/[0.08] lg:grid-cols-1 lg:border-t-0">
        <div className={cell}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
            ETA
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-white">
            {eta}
          </p>
        </div>

        <div className={cell}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
            Distance left
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-white">
            {distance} km
          </p>
        </div>

        <div className={cell}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
            Speed
          </p>
          <p className="mt-1 font-heading text-lg font-semibold text-white">
            {speed} km/h
          </p>
        </div>
      </div>
      */}

      {/* Status */}

      {/*
      <div className="border-t border-white/[0.08] px-4 py-2.5 text-xs text-signal lg:col-span-2">
        {arrived
          ? "Delivery reached · Alert sent to operations team"
          : inZone
            ? "Entering destination zone · Alert sent to operations team"
            : "On route · Updating every few seconds"}
      </div>
      */}
    </div>
  );
}

/* ------------------------------------------------------------------
   MAIN EXPORT
------------------------------------------------------------------- */

export function DataFlowVisual() {
  const reduce = useReducedMotion();
  const animate = !reduce;

  return (
    <div className="w-full min-w-0">
      <div className="mb-6 flex min-w-0 items-center gap-3">
        <span className="h-px w-8 shrink-0 bg-signal" />

        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal">
          How the system works
        </span>
      </div>

      <div className="hidden w-full min-w-0 overflow-hidden lg:block">
        <DesktopFlow animate={animate} />
      </div>

      <div className="w-full min-w-0 lg:hidden">
        <MobileFlow animate={animate} />
      </div>

      <div className="mt-6 w-full min-w-0">
        <LivePanel animate={animate} />
      </div>
    </div>
  );
}