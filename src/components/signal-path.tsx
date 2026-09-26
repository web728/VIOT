"use client";

import { motion } from "framer-motion";

const route1 = "M40 200 C110 200 108 70 200 70 S320 180 430 140";
const route2 = "M40 200 C134 200 192 240 302 240 S380 140 430 140";

export function SignalPath() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b222c]"
      aria-label="Vehicle device to fleet platform signal path"
    >
      {/* Top status bar */}
      <div className="flex min-h-[43px] items-center justify-between border-b border-white/10 px-4 font-mono text-[10px] uppercase tracking-[0.08em] text-white/50">
        <span>Live signal path</span>
        <span className="flex items-center gap-2 text-signal">
          <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_12px_theme(colors.signal)]" />
          Link active
        </span>
      </div>

      {/* Diagram */}
      <div className="text-white">
        <svg viewBox="0 0 480 260" className="h-auto w-full" role="img" aria-label="Device data travelling through the network into the VIoT platform">
          <defs>
            <pattern id="signal-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M24 0H0V24" fill="none" stroke="white" strokeOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="480" height="260" fill="url(#signal-grid)" />

          <path d={route1} fill="none" stroke="#27d59b" strokeWidth="1.5" strokeDasharray="6 6" />
          <path d={route2} fill="none" stroke="#49616a" strokeWidth="1" strokeDasharray="6 6" />

          {/* Animated data packets traveling the routes */}
          <motion.circle
            r="4"
            fill="#ffb321"
            style={{ offsetPath: `path("${route1}")` }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            r="4"
            fill="#ffb321"
            style={{ offsetPath: `path("${route2}")` }}
            animate={{ offsetDistance: ["0%", "100%"] }}
            transition={{ duration: 4.2, delay: 1.2, repeat: Infinity, ease: "linear" }}
          />

          {/* Device node */}
          <g>
            <rect x="20" y="160" width="122" height="80" rx="4" fill="#102e3a" stroke="#526873" />
            <text x="36" y="184" className="fill-white/50" fontSize="9" letterSpacing="0.08em" fontFamily="var(--font-mono)">EDGE DEVICE</text>
            <text x="36" y="208" className="fill-white" fontSize="14" fontWeight="650" fontFamily="var(--font-mono)">UNIT 017</text>
            <text x="36" y="226" className="fill-signal" fontSize="8" fontFamily="var(--font-mono)">12.7V · GNSS FIXED</text>
          </g>

          {/* Network node */}
          <g>
            <circle cx="200" cy="70" r="42" fill="#102e3a" stroke="#526873" />
            <circle cx="200" cy="70" r="30" fill="#102e3a" stroke="#526873" />
            <text x="200" y="66" textAnchor="middle" className="fill-white" fontSize="13" fontWeight="650" fontFamily="var(--font-mono)">4G</text>
            <text x="200" y="82" textAnchor="middle" className="fill-white/50" fontSize="7" letterSpacing="0.08em" fontFamily="var(--font-mono)">FALLBACK READY</text>
          </g>

          {/* Platform node */}
          <g>
            <rect x="342" y="98" width="102" height="80" fill="#102e3a" stroke="#526873" />
            <text x="356" y="120" className="fill-white/50" fontSize="9" letterSpacing="0.06em" fontFamily="var(--font-mono)">VIoT PLATFORM</text>
            <text x="356" y="142" className="fill-white" fontSize="13" fontWeight="650" fontFamily="var(--font-mono)">RECEIVED</text>
            <text x="356" y="160" className="fill-signal" fontSize="8" fontFamily="var(--font-mono)">0.8s latency</text>
          </g>

          <text x="155" y="150" className="fill-white/40" fontSize="8" letterSpacing="0.08em" fontFamily="var(--font-mono)">STORE + FORWARD</text>
          <text x="275" y="55" className="fill-white/40" fontSize="8" letterSpacing="0.08em" fontFamily="var(--font-mono)">ENCRYPTED</text>
        </svg>
      </div>

      {/* Bottom log line */}
      <div className="flex min-h-[43px] items-center gap-4 border-t border-white/10 px-4 font-mono text-[10px] tracking-[0.08em] text-white/50">
        <span>14:06:21</span>
        <strong className="flex-1 font-medium text-white/80">POSITION UPDATE RECEIVED</strong>
        <span>28.5355, 77.3910</span>
      </div>
    </div>
  );
}