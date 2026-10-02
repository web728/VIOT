"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------
   FLOW (as per client):
   Satellite ─┐
              ├─► Device ─► VIoT Platform ─► Analytics ─► Action
   Network  ──┘
------------------------------------------------------------------- */

const CYCLE = 4; // seconds for one full signal journey

type IconName =
  | "satellite"
  | "network"
  | "device"
  | "platform"
  | "analytics"
  | "action";

const nodes: {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  icon: IconName;
  arrive: number;
}[] = [
  { id: "sat", x: 90, y: 40, label: "Satellite", sub: "Position signal", icon: "satellite", arrive: 0 },
  { id: "net", x: 90, y: 190, label: "Network", sub: "Cellular link", icon: "network", arrive: 0 },
  { id: "dev", x: 300, y: 115, label: "Device", sub: "Captures data", icon: "device", arrive: 0.2 },
  { id: "plat", x: 510, y: 115, label: "VIoT Platform", sub: "Receives live data", icon: "platform", arrive: 0.4 },
  { id: "ana", x: 720, y: 115, label: "Analytics", sub: "Routes · ETA · events", icon: "analytics", arrive: 0.6 },
  { id: "act", x: 910, y: 115, label: "Action", sub: "Alerts · decisions", icon: "action", arrive: 0.8 },
];

const segments = [
  { d: "M160,40 C200,40 200,115 230,115", start: 0 },
  { d: "M160,190 C200,190 200,115 230,115", start: 0 },
  { d: "M370,115 L440,115", start: 0.2 },
  { d: "M580,115 L650,115", start: 0.4 },
  { d: "M790,115 L840,115", start: 0.6 },
];

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "satellite":
      return (
        <g>
          <rect x="9.5" y="9.5" width="5" height="5" transform="rotate(45 12 12)" />
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
      return <path d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />;
    case "analytics":
      return <path d="M5 20V12M12 20V5M19 20V9" />;
    case "action":
      return <path d="M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15L6 16zM10 20a2 2 0 0 0 4 0" />;
  }
}

/* ------------------------------------------------------------------
   DESKTOP FLOW
------------------------------------------------------------------- */

function DesktopFlow({ animate }: { animate: boolean }) {
  return (
    <svg
      viewBox="0 0 1000 230"
      className="h-auto w-full"
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
          <path d="M0 0L8 4L0 8z" fill="rgba(255,255,255,0.3)" />
        </marker>
      </defs>

      {/* Lines */}
      {segments.map((s) => (
        <path
          key={s.d}
          d={s.d}
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          markerEnd="url(#vf-arrow)"
        />
      ))}

      {/* Travelling signals (square, same as platform background) */}
      {animate &&
        segments.map((s) => (
          <rect
            key={`dot-${s.d}`}
            x="-3.5"
            y="-3.5"
            width="7"
            height="7"
            fill="#27d59b"
          >
            <animateMotion
              path={s.d}
              dur={`${CYCLE}s`}
              begin={`${s.start * CYCLE}s`}
              repeatCount="indefinite"
              calcMode="linear"
              keyPoints="0;1;1"
              keyTimes="0;0.2;1"
            />
            <animate
              attributeName="opacity"
              values="1;1;0;0"
              keyTimes="0;0.2;0.201;1"
              dur={`${CYCLE}s`}
              begin={`${s.start * CYCLE}s`}
              repeatCount="indefinite"
            />
          </rect>
        ))}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id} transform={`translate(${n.x - 70}, ${n.y - 28})`}>
          <rect
            width="140"
            height="56"
            fill="#081b24"
            stroke="#27d59b"
            strokeOpacity="0.2"
            strokeWidth="1"
          >
            {animate && (
              <animate
                attributeName="stroke-opacity"
                values={n.arrive === 0 ? "0.9;0.2;0.2" : "0.2;0.2;0.9;0.2"}
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

          <g
            transform="translate(14, 16)"
            fill="none"
            stroke="#27d59b"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <Icon name={n.icon} />
          </g>

          <text x="50" y="25" fill="#ffffff" fontSize="13" fontWeight="600">
            {n.label}
          </text>
          <text x="50" y="42" fill="rgba(255,255,255,0.45)" fontSize="10.5">
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------
   MOBILE FLOW (vertical)
------------------------------------------------------------------- */

function MobileCard({ n }: { n: (typeof nodes)[number] }) {
  return (
    <div className="flex items-center gap-3 border border-signal/20 bg-ink p-3">
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0"
        fill="none"
        stroke="#27d59b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Icon name={n.icon} />
      </svg>

      <div>
        <p className="text-sm font-semibold text-white">{n.label}</p>
        <p className="text-xs text-white/45">{n.sub}</p>
      </div>
    </div>
  );
}

function Connector({ animate }: { animate: boolean }) {
  return (
    <div className="relative mx-auto h-6 w-px bg-white/10">
      {animate && (
        <motion.span
          className="absolute -left-[2px] h-[5px] w-[5px] bg-signal"
          animate={{ y: [0, 20], opacity: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
}

function MobileFlow({ animate }: { animate: boolean }) {
  const [sat, net, ...rest] = nodes;

  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2">
        <MobileCard n={sat} />
        <MobileCard n={net} />
      </div>

      {rest.map((n) => (
        <div key={n.id}>
          <Connector animate={animate} />
          <MobileCard n={n} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   LIVE PLATFORM PANEL — moving truck + ETA
------------------------------------------------------------------- */

const ROUTE = "M30,120 C110,120 120,40 220,60 S340,130 420,80 S520,40 570,70";
const LOOP_MS = 16000;
const TOTAL_MIN = 24;
const TOTAL_KM = 18;

function LivePanel({ animate }: { animate: boolean }) {
  const pathRef = useRef<SVGPathElement>(null);
  const [len, setLen] = useState(0);
  const [p, setP] = useState(animate ? 0 : 0.5);
  const [pos, setPos] = useState({ x: 30, y: 120 });

  useEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    const path = pathRef.current;
    if (!path || !len) return;

    const place = (t: number) => {
      const pt = path.getPointAtLength(len * t);
      setP(t);
      setPos({ x: pt.x, y: pt.y });
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
  const eta = arrived ? "Arrived" : `${Math.max(1, Math.ceil(TOTAL_MIN * (1 - p)))} min`;
  const distance = (TOTAL_KM * (1 - p)).toFixed(1);
  const speed = arrived ? 0 : 42 + Math.round(8 * Math.sin(p * 22));

  const cell =
    "border-l border-white/[0.08] px-4 py-3 first:border-l-0 lg:border-l-0 lg:border-t lg:first:border-t-0";

  return (
    <div className="grid border border-white/[0.08] lg:grid-cols-[1fr_210px]">
      {/* Map */}
      {/* <div className="lg:border-r lg:border-white/[0.08]">
        <div className="flex items-center justify-between px-4 pt-3">
          <p className="text-xs font-semibold text-white">
            Live in the VIoT Platform
          </p>

          <span className="flex items-center gap-1.5 text-[11px] text-signal">
            <span className="h-1.5 w-1.5 animate-pulse bg-signal" />
            Live
          </span>
        </div>

        <svg viewBox="0 0 600 160" className="h-auto w-full" aria-hidden="true">
          {[40, 80, 120].map((y) => (
            <line key={`h${y}`} x1="0" x2="600" y1={y} y2={y} stroke="rgba(255,255,255,0.04)" />
          ))}
          {[100, 200, 300, 400, 500].map((x) => (
            <line key={`v${x}`} x1={x} x2={x} y1="0" y2="160" stroke="rgba(255,255,255,0.04)" />
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
          <rect x="567" y="67" width="6" height="6" fill="#ffffff" />

         
          <g transform={`translate(${pos.x}, ${pos.y})`}>
            <rect x="-14" y="-14" width="28" height="28" fill="rgba(39,213,155,0.14)" />
            <rect x="-8" y="-5" width="11" height="9" fill="#27d59b" />
            <rect x="3" y="-2" width="5" height="6" fill="#ffffff" />
          </g>

          
          <g transform={`translate(${Math.min(pos.x, 490)}, ${Math.max(pos.y - 38, 6)})`}>
            <rect x="-6" y="0" width="82" height="20" fill="#081b24" stroke="rgba(255,255,255,0.16)" />
            <text x="2" y="14" fill="#ffffff" fontSize="11" fontWeight="600">
              ETA {eta}
            </text>
          </g>
        </svg>
      </div> */}

      {/* Metrics */}
      {/* <div className="grid grid-cols-3 border-t border-white/[0.08] lg:grid-cols-1 lg:border-t-0">
        <div className={cell}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">ETA</p>
          <p className="mt-1 font-heading text-lg font-semibold text-white">{eta}</p>
        </div>

        <div className={cell}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">Distance left</p>
          <p className="mt-1 font-heading text-lg font-semibold text-white">{distance} km</p>
        </div>

        <div className={cell}>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">Speed</p>
          <p className="mt-1 font-heading text-lg font-semibold text-white">{speed} km/h</p>
        </div>
      </div> */}

      {/* Status */}
      {/* <div className="border-t border-white/[0.08] px-4 py-2.5 text-xs text-signal lg:col-span-2">
        {arrived
          ? "Delivery reached · Alert sent to operations team"
          : inZone
            ? "Entering destination zone · Alert sent to operations team"
            : "On route · Updating every few seconds"}
      </div> */}
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
    <div>
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-8 bg-signal" />

        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-signal">
          How the system works
        </span>
      </div>

      <div className="hidden lg:block">
        <DesktopFlow animate={animate} />
      </div>

      <div className="lg:hidden">
        <MobileFlow animate={animate} />
      </div>

      <div className="mt-6">
        <LivePanel animate={animate} />
      </div>
    </div>
  );
}