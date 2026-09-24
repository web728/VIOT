export function PlatformDataFlow() {
  return <div className="platform-flow" aria-label="Data moving from satellite and field hardware into the VIoT platform">
    <div className="platform-flow-copy">
      <p className="eyebrow dark"><span />One connected path</p>
      <h1>Field hardware.<br /><em>One operating view.</em></h1>
      <p>Position, security and vehicle events move through one visible path—from the device in the field to the team responsible for acting.</p>
    </div>
    <svg className="platform-flow-map" viewBox="0 0 920 560" role="img" aria-labelledby="flow-title flow-description">
      <title id="flow-title">VIoT device to platform data flow</title>
      <desc id="flow-description">Satellite positioning reaches connected vehicle, lock, asset and sensor hardware. Those devices send events into the VIoT operating platform.</desc>
      <defs>
        <pattern id="platform-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="currentColor" strokeOpacity=".08" /></pattern>
        <marker id="flow-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10Z" fill="currentColor" /></marker>
      </defs>
      <rect width="920" height="560" rx="28" className="flow-grid" />
      <g className="flow-lines satellite-lines">
        <path d="M460 92 C400 130 292 138 190 190" />
        <path d="M460 92 C430 150 390 188 350 240" />
        <path d="M460 92 C520 146 584 178 640 220" />
        <path d="M460 92 C562 128 684 142 760 190" />
      </g>
      <g className="satellite-node">
        <circle cx="460" cy="74" r="36" />
        <path d="M448 68l24 12m-20-21 16 8m-26 15 12 6M455 86l-8 13m19-7 7 13" />
        <text x="460" y="130">GNSS POSITION</text>
      </g>
      <g className="hardware-node" transform="translate(92 180)"><rect width="190" height="96" rx="14" /><circle cx="32" cy="34" r="12" /><path d="M18 68h68m-56 0 8-18h32l8 18" /><text x="96" y="34">VEHICLE</text><text x="96" y="56" className="node-meta">POSITION · TRIP</text></g>
      <g className="hardware-node" transform="translate(252 260)"><rect width="190" height="96" rx="14" /><rect x="20" y="21" width="30" height="34" rx="5" /><path d="M27 21v-7c0-13 16-13 16 0v7" /><text x="66" y="34">SMART LOCK</text><text x="66" y="56" className="node-meta">STATE · TAMPER</text></g>
      <g className="hardware-node" transform="translate(478 260)"><rect width="190" height="96" rx="14" /><path d="M22 51c8-25 27-25 35 0M28 51c5-15 18-15 23 0" /><circle cx="40" cy="54" r="3" /><text x="72" y="34">IOT SENSOR</text><text x="72" y="56" className="node-meta">FIELD EVENT</text></g>
      <g className="hardware-node" transform="translate(638 180)"><rect width="190" height="96" rx="14" /><path d="M22 26h42v30H22zm42 8 14-8v30l-14-8" /><text x="92" y="34">VIDEO</text><text x="92" y="56" className="node-meta">PLANNED LAYER</text></g>
      <g className="flow-lines platform-lines">
        <path d="M188 278 C220 396 320 414 392 432" />
        <path d="M346 358 C360 392 384 410 414 432" />
        <path d="M574 358 C562 394 538 412 510 432" />
        <path d="M732 278 C704 394 602 416 532 432" />
      </g>
      <g className="platform-core" transform="translate(342 420)"><rect width="236" height="104" rx="18" /><circle cx="38" cy="38" r="13" /><path d="M29 38h18M38 29v18" /><text x="66" y="40">VIoT PLATFORM</text><text x="66" y="64" className="node-meta">MONITOR · READ · RESPOND</text><path className="core-status" d="M26 82h184" /></g>
      <text className="flow-caption" x="28" y="532">LIVE DATA PATH / CONFIGURATION DEPENDS ON DEPLOYMENT</text>
    </svg>
  </div>;
}
