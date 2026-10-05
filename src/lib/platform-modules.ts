export type FleetCapability = {
  name: string;
  whatItDoes: string;
  whatItChanges: string;
};

export type FleetDifference = {
  title: string;
  text: string;
};

export type FleetIntelligenceContent = {
  problemTitle: string;
  problemParagraphs: string[];
  coversIntro: string;
  capabilityRows: FleetCapability[];
  capabilityClosing: string;
  differenceTitle: string;
  differences: FleetDifference[];
  engineTitle: string;
  engineCaption: string;
  engineText: string;
  proofTitle: string;
  proofParagraphs: string[];
  supportTitle: string;
  supportParagraphs: string[];
  productHref: string;
  ctaHeading: string;
  ctaSubheading: string;
};

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
  fleetIntelligence?: FleetIntelligenceContent;
};

export const platformModules: PlatformModule[] = [
  {
    slug: "fleet-management",
    number: "01",
    name: "Fleet Intelligence",
    eyebrow: "Fleet Intelligence",
    headline: "Fleet Intelligence, Not Fleet Tracking",
    lede:
      "Most platforms show you where a vehicle is. VIoT tells your operations team what to do about it - before a small problem becomes a breakdown, an accident, or a missed delivery.",
    description:
      "This is the gap every generic telematics page glosses over: a live map is a feature, not a fleet management decision. Fleet Intelligence is built to close it.",
    capabilities: [
      "Driver Behavior Scoring",
      "Route & Geofence Intelligence",
      "Maintenance & Health Alerts",
    ],
    signals: [
      "Driver behaviour",
      "Route",
      "Maintenance",
    ],
    outcomes: [
      "One Fleet Intelligence score",
      "One action list",
    ],
    fleetIntelligence: {
      problemTitle: "Tracking Tells You Where. Not What To Do About It.",
      problemParagraphs: [
        `Most fleet owners already run three separate logins: a GPS tracking app that shows a moving dot, a dashcam app for footage nobody reviews until after an incident, and a paper or Excel log for vehicle servicing. None of the three talk to each other, so the cost of a problem always shows up late - in a breakdown mid-route, an accident the camera recorded but nobody flagged, or a warranty claim denied because "preventive maintenance wasn't documented."`,
        "The dot on the map is honest about where a vehicle is right now. It says nothing about the driver who has been harsh-braking all morning, the vehicle whose engine fault code tripped two days ago and was never actioned, or the trailer that just left its assigned route. By the time that shows up as a cost, it is already too late to prevent it - only to explain it.",
        "This is the gap every generic telematics page glosses over: a live map is a feature, not a fleet management decision. Fleet Intelligence is built to close it.",
      ],
      coversIntro:
        "Three capabilities, one score your operations team can act on - not three separate reports from three separate systems.",
      capabilityRows: [
        {
          name: "Driver Behavior Scoring",
          whatItDoes:
            "Scores every trip on harsh braking, harsh acceleration, speeding and idling, rolled into one per-driver score",
          whatItChanges:
            "Flags the driver trending toward an accident weeks before it happens - not a dashcam clip reviewed after",
        },
        {
          name: "Route & Geofence Intelligence",
          whatItDoes:
            "Real-time route-deviation alerts, geofence entry/exit, trip replay, ETA prediction",
          whatItChanges:
            "Catches an unauthorised detour or a delivery running late while there is still time to correct it",
        },
        {
          name: "Maintenance & Health Alerts",
          whatItDoes:
            "Reads engine diagnostics (OBD), flags service-due intervals, battery and ignition faults",
          whatItChanges:
            `Turns "the vehicle broke down" into "the vehicle was due" - days ahead, not after the tow truck`,
        },
      ],
      capabilityClosing:
        "Each of these exists elsewhere as a standalone product from some vendor. VIoT's position is that none of them is useful in isolation - a driver score with no route context, or a maintenance alert nobody connects to the vehicle's actual usage pattern, is just more data. Fleet Intelligence exists to correlate the three, not just collect them (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "One correlated score, not three disconnected reports",
          text:
            "Most telematics vendors sell driver scoring, route tracking and maintenance alerts as three separate modules - often three separate logins. Acting on them still depends on someone manually cross-referencing three screens, which is exactly the problem described in Section 2. VIoT's engine correlates behaviour, route and maintenance signals into one per-vehicle and per-driver score, so an ops dashboard shows one number worth acting on, not three charts to interpret before anyone decides anything.",
        },
        {
          title: "Built for Indian road and network conditions, not adapted to them",
          text:
            "Much of the telematics hardware sold in India is standard global equipment tuned for stable power and continuous network coverage - conditions most Indian routes don't offer. VIoT's devices retain and queue trip data through dead zones (tunnels, rural stretches, basement parking) and sync it the moment signal returns, so a network drop is a delay in reporting, not a gap in the record. The hardware is also built to handle the voltage spikes and vibration that come with older or poorly-maintained commercial vehicles, rather than failing quietly on exactly the fleets that need monitoring most.",
        },
        {
          title: "We stay in the account after go-live",
          text:
            "The standard model in this industry is device plus dashboard, installed once, and the vendor relationship effectively ends there. VIoT's support model is built to stay active after go-live rather than wait for a support ticket - what that looks like in practice is in Section 7.",
        },
      ],
      engineTitle: "One Engine, Not Three Dashboards",
      engineCaption: "three signals converge into one Fleet Intelligence score",
      engineText:
        "Driver behaviour, route, and maintenance signals feed one engine; the fleet manager acts on one score, not three disconnected screens.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "Fleet Intelligence runs across fleet profiles that fail in different ways - long-haul freight, intra-city last-mile delivery, and mixed commercial fleets running trucks, LCVs, and passenger vehicles side by side. That breadth is the real depth behind this page, more than any single number could show.",
        "A long-haul fleet's biggest risk is a fatigued driver fourteen hours into a route. A last-mile fleet's biggest risk is a van drifting off its delivery block in dense city traffic. A mixed fleet's biggest risk is a maintenance gap that hides because no two vehicles in it report the same way. Three different failure patterns, one engine that has been tuned against all three - not built once for a single fleet type and resold everywhere else unchanged.",
      ],
      supportTitle: "Built to Last: We Don't Leave After Go-Live",
      supportParagraphs: [
        "Most vendors in this industry have no real mechanism for making sure a deployed system keeps working well over time - install the device, hand over the dashboard login, move on to the next client. If calibration drifts or a fleet's routes change, nobody notices until the client has quietly stopped trusting the system altogether.",
        "VIoT's answer isn't a louder warranty claim - it's a standing commitment to stay in the loop. Every Fleet Intelligence client sits on a committed support SLA, not a best-effort inbox, and on a structured cadence of check-ins after go-live where we actively ask what's working and what isn't, instead of waiting for a complaint. The dashboard a client starts with is rarely the one they're using a year in - it gets shaped by what they tell us along the way.",
        `That's what "lasts long" means here: not a spec claim about hardware, but a relationship that doesn't go quiet after the invoice is paid - something almost nobody else in this category actually does.`,
      ],
      productHref: "/products/vehicle-telematics",
      ctaHeading: "See Fleet Intelligence on your own fleet",
      ctaSubheading:
        "Tell us your fleet size and vehicle mix - we'll show you what the correlated score looks like for a fleet like yours, not a generic demo.",
    },
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
