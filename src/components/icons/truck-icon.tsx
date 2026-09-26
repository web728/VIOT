export function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      {/* Cargo box */}
      <rect x="8" y="28" width="140" height="56" rx="4" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2.5" />
      <line x1="8" y1="46" x2="148" y2="46" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
      <line x1="52" y1="28" x2="52" y2="84" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="100" y1="28" x2="100" y2="84" stroke="currentColor" strokeOpacity="0.25" strokeWidth="1.5" />

      {/* Cab */}
      <path
        d="M148 84V50h34l18 20v14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M182 50l14 16h-14z" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="148" y1="62" x2="182" y2="62" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />

      {/* Base line */}
      <line x1="0" y1="98" x2="240" y2="98" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />

      {/* Wheels */}
      <circle cx="48" cy="98" r="13" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="48" cy="98" r="4" fill="currentColor" />
      <circle cx="120" cy="98" r="13" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="120" cy="98" r="4" fill="currentColor" />
      <circle cx="192" cy="98" r="13" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="192" cy="98" r="4" fill="currentColor" />

      {/* Headlight accent */}
      <circle cx="199" cy="70" r="3" className="fill-signal" />
    </svg>
  );
}