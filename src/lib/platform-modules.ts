export type PlatformModule = {
  slug: string;
  number: string;
  name: string;
  eyebrow: string;
  headline: string;
  lede: string;
  description: string;
  capabilities: string[];
  signals: string[];
  outcomes: string[];
};

export const platformModules: PlatformModule[] = [
  {
    slug: "fleet-management",
    number: "01",
    name: "Fleet Management",
    eyebrow: "Vehicle operations",
    headline: "Bring vehicle movement and operating events into one connected view.",
    lede:
      "VIoT Fleet Management connects tracking data, trip activity and vehicle events so operations teams can see what is happening and respond with context.",
    description:
      "Built around connected tracking devices and field events, the module brings location, movement, ignition and exception data into a single operational layer.",
    capabilities: [
      "Live vehicle and trip visibility",
      "Route, zone and movement exceptions",
      "Driving-event and vehicle-status context",
      "Connected history for investigation",
    ],
    signals: [
      "Location",
      "Ignition",
      "Movement",
      "Driving events",
    ],
    outcomes: [
      "Clear fleet visibility",
      "Faster exception handling",
      "Traceable trip history",
    ],
  },
  {
    slug: "ev-management",
    number: "02",
    name: "EV Management",
    eyebrow: "Electric fleet operations",
    headline: "Connect vehicle, battery and charging context for day-to-day EV operations.",
    lede:
      "Bring core EV operating information into one connected view so teams can monitor vehicle activity and charging context without creating another isolated workflow.",
    description:
      "The module is designed to consolidate available EV telemetry and operational events around vehicle use, charging and fleet visibility.",
    capabilities: [
      "Vehicle and trip visibility",
      "Battery and charging context",
      "Operational event history",
      "Connected fleet reporting",
    ],
    signals: [
      "Vehicle state",
      "Battery context",
      "Charging events",
      "Trip activity",
    ],
    outcomes: [
      "Clearer EV operations",
      "Connected charging context",
      "Unified fleet visibility",
    ],
  },
  {
    slug: "e-lock",
    number: "03",
    name: "E-Lock",
    eyebrow: "Connected security",
    headline: "Connect lock state, location and tamper events into one security workflow.",
    lede:
      "VIoT E-Lock brings smart logistics and infrastructure lock events into a connected operating view for cargo and access workflows.",
    description:
      "The module connects lock status, positioning, access actions and security exceptions so teams can see the event in context rather than as an isolated device alert.",
    capabilities: [
      "Lock and unlock status visibility",
      "Location-linked security events",
      "Tamper and lock-cut exception context",
      "Access-event history",
    ],
    signals: [
      "Lock state",
      "GNSS position",
      "Tamper events",
      "Access actions",
    ],
    outcomes: [
      "Connected cargo security",
      "Faster exception response",
      "Traceable access history",
    ],
  },
  {
    slug: "video",
    number: "04",
    name: "Video",
    eyebrow: "Video intelligence",
    headline: "Bring live video and AI safety events together with vehicle context.",
    lede:
      "VIoT Video combines connected camera feeds, driver-safety events and vehicle context so teams can investigate incidents with a clearer operational picture.",
    description:
      "Designed around connected multi-channel video, the module supports live monitoring, event review and safety context from AI-driven camera events.",
    capabilities: [
      "Live and recorded video visibility",
      "ADAS, DMS and BSD event context",
      "Vehicle-position correlation",
      "Event-led incident review",
    ],
    signals: [
      "Video",
      "ADAS events",
      "DMS events",
      "Vehicle position",
    ],
    outcomes: [
      "Faster incident understanding",
      "Better safety visibility",
      "Connected video evidence",
    ],
  },
  {
    slug: "fuel-monitoring",
    number: "05",
    name: "Fuel Monitoring",
    eyebrow: "Resource intelligence",
    headline: "Turn fuel and sensor signals into operational context teams can act on.",
    lede:
      "VIoT Fuel Monitoring connects available fuel-sensor data with vehicle activity and platform events for clearer monitoring and exception handling.",
    description:
      "The module is built to surface fuel-related measurements and exceptions alongside the vehicle and operational context available from connected hardware.",
    capabilities: [
      "Fuel-level visibility",
      "Fuel-related exception context",
      "Vehicle-event correlation",
      "Historical monitoring data",
    ],
    signals: [
      "Fuel level",
      "Vehicle activity",
      "Sensor events",
      "Exceptions",
    ],
    outcomes: [
      "Clearer fuel visibility",
      "Faster anomaly review",
      "Connected operating context",
    ],
  },
];

export function getPlatformModule(slug: string) {
  return platformModules.find((module) => module.slug === slug);
}
