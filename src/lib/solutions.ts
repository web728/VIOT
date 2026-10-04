export type Solution = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  lede: string;
  priorities: string[];
};

export const solutions: Solution[] = [
  {
    slug: "logistics-supply-chain",
    number: "01",
    name: "Logistics & Supply Chain",
    headline: "Connect movement, cargo security and exceptions.",
    lede:
      "Bring vehicle location, cargo-security events and route exceptions into one connected operating view for logistics teams.",
    priorities: [
      "Fleet and trip visibility",
      "Cargo-security and lock events",
      "Route, zone and movement exceptions",
      "ERP / TMS integration",
    ],
  },
  {
    slug: "pharmaceuticals-chemicals",
    number: "02",
    name: "Pharmaceuticals & Chemicals",
    headline: "Protect sensitive movement with traceable context.",
    lede:
      "Connect location, access, tamper and application-specific sensor events around the handling workflows that require tighter operational control.",
    priorities: [
      "Movement and route visibility",
      "Access and tamper context",
      "Temperature and application-specific sensing",
      "Traceable event history",
    ],
  },
  {
    slug: "construction",
    number: "03",
    name: "Construction",
    headline: "See vehicles and assets across changing sites.",
    lede:
      "Track mobile equipment, vehicles and site movement around changing work zones, operating boundaries and field conditions.",
    priorities: [
      "Vehicle and asset location",
      "Site and project geofences",
      "Movement and exception alerts",
      "Field-ready deployment evaluation",
    ],
  },
  {
    slug: "mining",
    number: "04",
    name: "Mining",
    headline: "Keep field visibility working in demanding conditions.",
    lede:
      "Build connected tracking and monitoring around weak signal, power variation, dust, vibration and the operating realities of remote sites.",
    priorities: [
      "Continuous device reporting",
      "Offline data retention",
      "Wide-voltage field compatibility",
      "Device and connectivity health",
    ],
  },
  {
    slug: "fmcg",
    number: "05",
    name: "FMCG",
    headline: "Keep distribution movement and exceptions connected.",
    lede:
      "Connect fleet movement, route activity and cargo-security context across high-frequency distribution operations without adding another isolated system.",
    priorities: [
      "Distribution fleet visibility",
      "Route and zone exceptions",
      "Cargo-security context",
      "Operational system integration",
    ],
  },
  {
    slug: "data-centres",
    number: "06",
    name: "Data Centres",
    headline: "Connect physical access events to the operating view.",
    lede:
      "Bring lock state, access events and exceptions into a connected workflow around controlled infrastructure and response requirements.",
    priorities: [
      "Connected lock-state visibility",
      "Access and exception alerts",
      "Event and location context",
      "Deployment-specific integration",
    ],
  },
  {
    slug: "schools-universities",
    number: "07",
    name: "Schools & Universities",
    headline: "Make transport visibility clear and accountable.",
    lede:
      "Connect vehicle location, route movement and zone exceptions around the institution’s day-to-day transport operation.",
    priorities: [
      "Vehicle location visibility",
      "Route and zone monitoring",
      "Exception-led alerts",
      "Operations-team access",
    ],
  },
  {
    slug: "smart-infrastructure",
    number: "08",
    name: "Smart Infrastructure",
    headline: "Connect field events into one operating system.",
    lede:
      "Combine connected locks, sensors and platform visibility around infrastructure workflows so exceptions can be seen and acted on in context.",
    priorities: [
      "Lock and sensor events",
      "Connected platform visibility",
      "Exception response workflows",
      "Application-specific integration",
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
