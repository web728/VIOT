export function PlatformDataFlow() {
  return (
    <div 
      className="relative w-full rounded-3xl border border-white/10 bg-ink-2/70 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl overflow-hidden" 
      aria-label="Data moving from satellite and field hardware into the VIoT platform"
    >
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[300px] bg-signal/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[200px] bg-amber/[0.04] rounded-full blur-[100px] pointer-events-none" />

      {/* Header Copy */}
      <div className="relative z-10 max-w-2xl mb-8 space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
          One connected path
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight leading-[1.12]">
          Field hardware. <br />
          <span className="font-normal text-white/50">One operating view.</span>
        </h2>
        <p className="text-sm sm:text-base text-white/70 font-sans leading-relaxed">
          Position, security and vehicle events move through one visible path—from the device in the field to the team responsible for acting.
        </p>
      </div>

      {/* Premium Styled SVG Architecture Diagram */}
      <div className="relative z-10 w-full overflow-x-auto pb-2">
        <svg className="w-full h-auto min-w-[760px] text-white select-none" viewBox="0 0 920 560" role="img" aria-labelledby="flow-title flow-description">
          <title id="flow-title">VIoT device to platform data flow</title>
          <desc id="flow-description">Satellite positioning reaches connected vehicle, lock, asset and sensor hardware. Those devices send events into the VIoT operating platform.</desc>
          
          <defs>
            <pattern id="platform-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeOpacity=".04" />
            </pattern>
            <linearGradient id="signal-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#27d59b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#007c67" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Background Grid Box */}
          <rect width="920" height="560" rx="24" fill="rgba(8, 27, 36, 0.6)" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
          <rect width="920" height="560" rx="24" fill="url(#platform-grid)" />

          {/* Satellite Connecting Lines */}
          <g fill="none" stroke="#27d59b" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="4 4">
            <path d="M460 92 C400 130 292 138 190 190" />
            <path d="M460 92 C430 150 390 188 350 240" />
            <path d="M460 92 C520 146 584 178 640 220" />
            <path d="M460 92 C562 128 684 142 760 190" />
          </g>

          {/* Satellite Node */}
          <g transform="translate(460, 74)">
            <circle cx="0" cy="0" r="32" fill="#081b24" stroke="#27d59b" strokeWidth="2" />
            <circle cx="0" cy="0" r="38" fill="none" stroke="#27d59b" strokeWidth="1" strokeOpacity="0.3" className="animate-ping" />
            <path d="M-12 -6l24 12m-20-21 16 8m-26 15 12 6M-5 12l-8 13m19-7 7 13" stroke="#27d59b" strokeWidth="1.5" strokeLinecap="round" />
            <text x="0" y="56" textAnchor="middle" fill="#27d59b" fontFamily="monospace" fontSize="10" letterSpacing="1.5" fontWeight="600">GNSS POSITION</text>
          </g>

          {/* Hardware Node: Vehicle */}
          <g transform="translate(92, 180)">
            <rect width="190" height="96" rx="14" fill="#0f2936" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <circle cx="32" cy="34" r="12" fill="#27d59b" fillOpacity="0.15" />
            <path d="M18 68h68m-56 0 8-18h32l8 18" stroke="#27d59b" strokeWidth="1.5" strokeLinecap="round" />
            <text x="70" y="38" fill="#ffffff" fontFamily="system-ui" fontSize="13" fontWeight="600">VEHICLE</text>
            <text x="70" y="56" fill="rgba(255,255,255,0.5)" fontFamily="monospace" fontSize="9" letterSpacing="1">POSITION · TRIP</text>
          </g>

          {/* Hardware Node: Smart Lock */}
          <g transform="translate(252, 260)">
            <rect width="190" height="96" rx="14" fill="#0f2936" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <rect x="20" y="21" width="30" height="34" rx="5" fill="none" stroke="#ffb321" strokeWidth="1.5" />
            <path d="M27 21v-7c0-13 16-13 16 0v7" fill="none" stroke="#ffb321" strokeWidth="1.5" />
            <text x="66" y="38" fill="#ffffff" fontFamily="system-ui" fontSize="13" fontWeight="600">SMART LOCK</text>
            <text x="66" y="56" fill="rgba(255,255,255,0.5)" fontFamily="monospace" fontSize="9" letterSpacing="1">STATE · TAMPER</text>
          </g>

          {/* Hardware Node: IoT Sensor */}
          <g transform="translate(478, 260)">
            <rect width="190" height="96" rx="14" fill="#0f2936" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <path d="M22 51c8-25 27-25 35 0M28 51c5-15 18-15 23 0" fill="none" stroke="#27d59b" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="40" cy="54" r="3" fill="#27d59b" />
            <text x="72" y="38" fill="#ffffff" fontFamily="system-ui" fontSize="13" fontWeight="600">IOT SENSOR</text>
            <text x="72" y="56" fill="rgba(255,255,255,0.5)" fontFamily="monospace" fontSize="9" letterSpacing="1">FIELD EVENT</text>
          </g>

          {/* Hardware Node: Video */}
          <g transform="translate(638, 180)">
            <rect width="190" height="96" rx="14" fill="#0f2936" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
            <path d="M22 26h42v30H22zm42 8 14-8v30l-14-8" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
            <text x="92" y="38" fill="#ffffff" fontFamily="system-ui" fontSize="13" fontWeight="600">VIDEO</text>
            <text x="92" y="56" fill="#ffb321" fontFamily="monospace" fontSize="9" letterSpacing="1">PLANNED LAYER</text>
          </g>

          {/* Platform Connecting Lines */}
          <g fill="none" stroke="#27d59b" strokeWidth="2" strokeOpacity="0.5">
            <path d="M188 278 C220 396 320 414 392 432" />
            <path d="M346 358 C360 392 384 410 414 432" />
            <path d="M574 358 C562 394 538 412 510 432" />
            <path d="M732 278 C704 394 602 416 532 432" />
          </g>

          {/* VIoT Platform Core Hub */}
          <g transform="translate(342, 410)">
            <rect width="236" height="104" rx="18" fill="#081b24" stroke="#27d59b" strokeWidth="2" />
            <circle cx="38" cy="38" r="14" fill="#27d59b" fillOpacity="0.2" />
            <path d="M29 38h18M38 29v18" stroke="#27d59b" strokeWidth="2" strokeLinecap="round" />
            <text x="66" y="42" fill="#ffffff" fontFamily="system-ui" fontSize="14" fontWeight="bold">VIoT PLATFORM</text>
            <text x="66" y="62" fill="#27d59b" fontFamily="monospace" fontSize="9" letterSpacing="1">MONITOR · READ · RESPOND</text>
            <path d="M24 82h188" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <circle cx="36" cy="82" r="3" fill="#27d59b" />
            <text x="46" y="86" fill="rgba(255,255,255,0.5)" fontFamily="monospace" fontSize="8" letterSpacing="0.5">SYSTEM ACTIVE</text>
          </g>

          {/* Bottom Flow Caption */}
          <text x="32" y="534" fill="rgba(255,255,255,0.4)" fontFamily="monospace" fontSize="9" letterSpacing="1.5">LIVE DATA PATH / CONFIGURATION DEPENDS ON DEPLOYMENT</text>
        </svg>
      </div>
    </div>
  );
}