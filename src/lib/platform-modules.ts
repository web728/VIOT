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
    name: "Fleet Intelligence",
    eyebrow: "Fleet operations",
    headline: "See the fleet as one connected operation.",
    lede:
      "Bring vehicle location, movement, driver events and operating context into a single fleet intelligence layer.",
    description:
      "Fleet Intelligence connects live vehicle signals with route, utilisation and exception context so operations teams can understand what is happening across the fleet and act faster.",
    capabilities: [
      "Live vehicle location and movement visibility",
      "Route, trip and journey context",
      "Driving-event and exception visibility",
      "Vehicle utilisation and operating history",
      "Geo-fence and movement event monitoring",
      "Operational alerts and fleet-level oversight",
    ],
    signals: [
      "GPS location",
      "Vehicle movement",
      "Trip events",
      "Driver behaviour events",
      "Vehicle status",
      "Geo-fence events",
    ],
    outcomes: [
      "Fleet visibility",
      "Faster exception response",
      "Route and utilisation context",
      "Improved operating accountability",
    ],
  },
  {
    slug: "ev-management",
    number: "02",
    name: "EV Management",
    eyebrow: "Electric fleet operations",
    headline: "Operate electric fleets with clearer energy context.",
    lede:
      "Connect vehicle movement, battery and charging context into a practical operating view for electric fleets.",
    description:
      "EV Management brings mobility and energy signals together so teams can understand vehicle readiness, charging context and operating patterns across an electric fleet.",
    capabilities: [
      "Electric vehicle operating visibility",
      "Battery and charging context",
      "Vehicle readiness monitoring",
      "Trip and utilisation visibility",
      "Exception and operating-event awareness",
      "Fleet-level EV performance context",
    ],
    signals: [
      "Vehicle location",
      "Battery state",
      "Charging status",
      "Vehicle readiness",
      "Trip activity",
      "Operating events",
    ],
    outcomes: [
      "Clearer EV fleet readiness",
      "Charging visibility",
      "Improved operational planning",
      "Better utilisation context",
    ],
  },
  {
    slug: "e-lock",
    number: "03",
    name: "Safe Logistics",
    eyebrow: "Cargo security",
    headline: "Keep logistics movement visible and controlled.",
    lede:
      "Connect lock state, location and access events to the operational journey of secured cargo.",
    description:
      "Safe Logistics combines connected lock events with movement and location context so teams can track secured cargo, identify exceptions and maintain stronger control across logistics workflows.",
    capabilities: [
      "Connected lock-state visibility",
      "Location-aware cargo monitoring",
      "Unlock and access event history",
      "Tamper and exception awareness",
      "Geo-fence-linked operating context",
      "Secure logistics workflow visibility",
    ],
    signals: [
      "Lock state",
      "Unlock events",
      "Tamper events",
      "GNSS location",
      "Geo-fence events",
      "Device status",
    ],
    outcomes: [
      "Stronger cargo visibility",
      "Faster tamper awareness",
      "Access accountability",
      "Safer logistics operations",
    ],
  },
  {
    slug: "video",
    number: "04",
    name: "Video Intelligence",
    eyebrow: "Video telematics",
    headline: "Add visual context to every critical road event.",
    lede:
      "Combine road video, driver events and vehicle context to understand what happened and what needs attention.",
    description:
      "Video Intelligence adds visual evidence to connected fleet events, helping operations teams review journeys, understand exceptions and respond with better context.",
    capabilities: [
      "Road and driver video visibility",
      "Event-linked video context",
      "Live and recorded journey visibility",
      "ADAS and driver-event context",
      "Video-assisted exception review",
      "Remote operational awareness",
    ],
    signals: [
      "Road video",
      "Driver video",
      "Vehicle events",
      "AI event detections",
      "Location context",
      "Journey history",
    ],
    outcomes: [
      "Faster event understanding",
      "Better incident context",
      "Improved driver accountability",
      "Stronger operational review",
    ],
  },
  {
    slug: "access-control",
    number: "05",
    name: "Smart Access Control",
    eyebrow: "Connected access",
    headline: "Make physical access visible, controlled and accountable.",
    lede:
      "Connect identity, access events and controlled entry points into one operational access layer.",
    description:
      "Smart Access Control gives teams a connected view of who accessed what, when and where across controlled facilities and infrastructure.",
    capabilities: [
      "Connected access-event visibility",
      "RFID and credential-based access workflows",
      "Door and gate state monitoring",
      "Authorised-access history",
      "Exception and denied-access awareness",
      "Multi-site access oversight",
    ],
    signals: [
      "Credential events",
      "RFID identity",
      "Door state",
      "Gate state",
      "Access granted or denied",
      "Tamper events",
    ],
    outcomes: [
      "Access accountability",
      "Faster exception response",
      "Improved site security visibility",
      "Centralised access oversight",
    ],
  },
  {
    slug: "temperature-humidity-monitoring",
    number: "06",
    name: "Temperature & Humidity Monitoring",
    eyebrow: "Environmental monitoring",
    headline: "Keep sensitive environments within operating range.",
    lede:
      "Monitor temperature and humidity conditions across connected assets, facilities and logistics environments.",
    description:
      "Temperature & Humidity Monitoring turns environmental sensor readings into usable operating context so teams can identify excursions, review history and respond to exceptions.",
    capabilities: [
      "Live temperature monitoring",
      "Live humidity monitoring",
      "Threshold and excursion alerts",
      "Historical environmental records",
      "Location-linked sensor context",
      "Multi-point monitoring visibility",
    ],
    signals: [
      "Temperature readings",
      "Humidity readings",
      "Threshold events",
      "Sensor status",
      "Location context",
      "Time-series history",
    ],
    outcomes: [
      "Faster excursion awareness",
      "Improved condition visibility",
      "Environmental accountability",
      "Better exception response",
    ],
  },
  {
    slug: "fuel-monitoring",
    number: "07",
    name: "Fuel Monitoring",
    eyebrow: "Fuel intelligence",
    headline: "Turn fuel movement into operating visibility.",
    lede:
      "Connect fuel-level data with vehicle movement, refuelling and operating events for clearer fleet fuel context.",
    description:
      "Fuel Monitoring combines fuel-level signals with connected vehicle activity so teams can review consumption patterns, identify unusual changes and understand fuel behaviour in context.",
    capabilities: [
      "Fuel-level visibility",
      "Refuelling-event monitoring",
      "Sudden fuel-change awareness",
      "Consumption trend visibility",
      "Vehicle-linked fuel history",
      "Operational exception context",
    ],
    signals: [
      "Fuel level",
      "Refuelling events",
      "Fuel-drop events",
      "Vehicle movement",
      "Trip context",
      "Historical readings",
    ],
    outcomes: [
      "Clearer fuel visibility",
      "Faster anomaly detection",
      "Improved fuel accountability",
      "Better consumption context",
    ],
  },
  {
    slug: "load-weight-analytics",
    number: "08",
    name: "Load & Weight Analytics",
    eyebrow: "Load intelligence",
    headline: "Understand what is moving, not only where it is moving.",
    lede:
      "Connect load and weight signals with vehicle movement to create clearer utilisation and operating context.",
    description:
      "Load & Weight Analytics brings payload information into the connected fleet layer, helping teams understand loading patterns, utilisation and weight-related exceptions across operations.",
    capabilities: [
      "Connected load and weight visibility",
      "Payload-event monitoring",
      "Trip-linked load context",
      "Overload and threshold awareness",
      "Historical load patterns",
      "Vehicle utilisation context",
    ],
    signals: [
      "Weight readings",
      "Load changes",
      "Threshold events",
      "Vehicle location",
      "Trip activity",
      "Historical payload data",
    ],
    outcomes: [
      "Improved load visibility",
      "Better utilisation context",
      "Faster overload awareness",
      "Stronger operational accountability",
    ],
  },
  {
    slug: "industrial-automation",
    number: "09",
    name: "Industrial Automation",
    eyebrow: "Connected operations",
    headline: "Connect field events directly to operating workflows.",
    lede:
      "Bring sensors, connected equipment and event-driven actions into one operational automation layer.",
    description:
      "Industrial Automation connects field signals with rules, alerts and workflows so operational events can be surfaced and routed to the teams or systems that need to act.",
    capabilities: [
      "Connected sensor and equipment visibility",
      "Event-driven workflow triggers",
      "Rule-based operating alerts",
      "Remote state monitoring",
      "Operational event history",
      "Multi-site automation context",
    ],
    signals: [
      "Sensor readings",
      "Equipment state",
      "Threshold events",
      "Digital inputs",
      "Access events",
      "Operational exceptions",
    ],
    outcomes: [
      "Faster event response",
      "Reduced manual monitoring",
      "Improved workflow consistency",
      "Connected operational visibility",
    ],
  },
];

export function getPlatformModule(slug: string) {
  return platformModules.find((item) => item.slug === slug);
}
