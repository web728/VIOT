export type IndustryCapability = {
  name: string;
  whyItMatters: string;
};

export type IndustryDifference = {
  title: string;
  text: string;
};

export type IndustryProofPoint = {
  title: string;
  text: string;
};

export type IndustryPageContent = {
  heroWhy: string;
  heroIllustrationNote: string;
  problemTitle: string;
  problemParagraphs: string[];
  mappingIntro: string;
  capabilityRows: IndustryCapability[];
  mappingClosing?: string;
  differenceTitle: string;
  differences: IndustryDifference[];
  engineTitle: string;
  engineCaption: string;
  engineText: string;
  proofTitle: string;
  proofIntro: string;
  proofPoints: IndustryProofPoint[];
  proofIllustrationNote?: string;
  supportTitle: string;
  supportIntro: string;
  supportPoints: IndustryProofPoint[];
  supportClosing?: string;
  supportIllustrationNote?: string;
  ctaHeading: string;
  ctaSubheading: string;
  formFields: string;
  implementationNotes: string[];
};

export type IndustryMapping = {
  challenge: string;
  challengeText: string;
  solution: string;
  solutionText: string;
};

export type Solution = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  lede: string;

  /**
   * Kept for backward compatibility with existing homepage,
   * scrolly and legacy industry-detail components.
   */
  priorities: string[];

  /**
   * New client-Excel content model used by /industries/[slug].
   */
  rows: IndustryMapping[];

  /**
   * Kept optional so older detail templates that check
   * solution.industryContent continue to compile safely.
   */
  industryContent?: IndustryPageContent;
};

export const solutions: Solution[] = [
  {
    slug: "logistics-transportation",
    number: "01",
    name: "Logistics & Transportation",
    headline:
      "Smarter Transportation. Safer Journeys. Efficient Operations.",
    lede:
      "Gain complete visibility and control over transportation operations with real-time tracking, video intelligence, fuel insights, and advanced shipment security.",
    priorities: [
      "Real-Time Tracking & Route Intelligence",
      "Multi-Channel Video Intelligence",
      "Fuel Consumption Intelligence",
      "Intelligent Electronic Locking",
      "Unified Monitoring Platform",
    ],
    rows: [
      {
        challenge: "Limited Visibility into Vehicle Movement",
        challengeText:
          "Lack of real-time information on vehicle locations, route deviations, and unauthorized stops affects delivery planning and operational control.",
        solution: "Real-Time Tracking & Route Intelligence",
        solutionText:
          "GPS-enabled devices provide live vehicle tracking, route history, geofencing, and deviation alerts through a centralized platform.",
      },
      {
        challenge: "Road Safety & Driver Behaviour",
        challengeText:
          "Distracted driving, fatigue, harsh braking, and limited incident visibility increase accident risks and operational liabilities.",
        solution: "Multi-Channel Video Intelligence",
        solutionText:
          "Road-facing, cabin-facing, and rear-view cameras enable driver monitoring, event recording, and video-based incident analysis.",
      },
      {
        challenge: "Fuel Losses & Rising Operating Costs",
        challengeText:
          "Fuel theft, excessive idling, and inefficient consumption increase transportation expenses.",
        solution: "Fuel Consumption Intelligence",
        solutionText:
          "IoT-enabled fuel sensors provide fuel-level monitoring, consumption insights, and alerts for abnormal fuel activity.",
      },
      {
        challenge: "Cargo Theft & Unauthorized Access",
        challengeText:
          "Unauthorized door openings, tampering, and unmonitored access during transit create security risks.",
        solution: "Intelligent Electronic Locking",
        solutionText:
          "GPS-enabled E-Locks provide remote access control, tamper alerts, and electronic locking status for improved shipment security.",
      },
      {
        challenge: "Fragmented Operational Monitoring",
        challengeText:
          "Managing vehicle locations, video footage, fuel data, and security events across separate systems reduces efficiency.",
        solution: "Unified Monitoring Platform",
        solutionText:
          "Integrate GPS, multi-channel cameras, fuel sensors, and E-Locks into a centralized platform for monitoring, alerts, and operational insights.",
      },
    ],
  },

  {
    slug: "electric-mobility",
    number: "02",
    name: "Electric Mobility",
    headline:
      "Smarter EV Monitoring. Deeper Battery Insights. Better Visibility.",
    lede:
      "Decode critical vehicle and battery parameters through EV CAN technology, enabling early fault detection, detailed diagnostics, and informed decision-making.",
    priorities: [
      "Advanced Battery Intelligence",
      "Battery Health Monitoring & Alerts",
      "Energy & Range Insights",
      "Real-Time EV Performance Monitoring",
      "Centralized EV Intelligence Platform",
    ],
    rows: [
      {
        challenge: "Limited Battery Visibility",
        challengeText:
          "Lack of real-time information on State of Charge (SOC), State of Health (SOH), voltage, and temperature makes battery performance difficult to monitor.",
        solution: "Advanced Battery Intelligence",
        solutionText:
          "EV CAN devices capture available BMS parameters and display battery performance, SOC, SOH, voltage, and temperature through a centralized platform.",
      },
      {
        challenge: "Unexpected Battery Failures",
        challengeText:
          "Battery abnormalities, overheating, and voltage fluctuations can lead to unplanned downtime and increased maintenance costs.",
        solution: "Battery Health Monitoring & Alerts",
        solutionText:
          "Monitor battery parameters, detect abnormal conditions, and generate alerts to support preventive maintenance.",
      },
      {
        challenge: "Range & Energy Uncertainty",
        challengeText:
          "Limited visibility into energy consumption and battery discharge patterns makes it difficult to estimate vehicle range and efficiency.",
        solution: "Energy & Range Insights",
        solutionText:
          "Analyze battery discharge, energy consumption, and available range data to support efficient EV operations.",
      },
      {
        challenge: "Vehicle Performance Monitoring",
        challengeText:
          "Difficulty tracking vehicle operating parameters and identifying performance issues affects operational reliability.",
        solution: "Real-Time EV Performance Monitoring",
        solutionText:
          "Capture supported CAN data and visualize vehicle operating parameters, performance trends, and diagnostic information on the platform.",
      },
      {
        challenge: "Fragmented EV Data",
        challengeText:
          "Managing battery and vehicle information across multiple systems limits operational visibility and slows decision-making.",
        solution: "Centralized EV Intelligence Platform",
        solutionText:
          "Consolidate available EV CAN and BMS data into a unified dashboard with monitoring, historical reports, and configurable alerts.",
      },
    ],
  },

  {
    slug: "cement-mining",
    number: "03",
    name: "Cement & Mining",
    headline:
      "Smarter Operations. Greater Visibility. Better Control.",
    lede:
      "IoT-powered solutions designed to improve operational efficiency, reduce losses, and enhance security across cement plants and mining sites.",
    priorities: [
      "Real-Time Operational Visibility",
      "Intelligent Consumption Insights",
      "Secure & Controlled Movement",
      "Equipment Utilization Insights",
      "Automated Alerts & Monitoring",
    ],
    rows: [
      {
        challenge: "Limited Operational Visibility",
        challengeText:
          "Difficulty monitoring vehicle and equipment movement across plants, mines, and remote locations.",
        solution: "Real-Time Operational Visibility",
        solutionText:
          "GPS-enabled devices and a centralized platform provide live location, movement history, and operational insights.",
      },
      {
        challenge: "High Fuel Costs & Losses",
        challengeText:
          "Excessive consumption, Fuel theft, unauthorized fuel usage, and limited visibility into fuel levels increase operational expenses.",
        solution: "Intelligent Consumption Insights",
        solutionText:
          "IoT-enabled sensors monitor fuel levels, consumption patterns, and unusual fuel activity to support cost optimization.",
      },
      {
        challenge: "Unauthorized Material Movement",
        challengeText:
          "Unmonitored vehicle access and material transfers create risks of theft and operational losses.",
        solution: "Secure & Controlled Movement",
        solutionText:
          "GPS-enabled electronic locks provide access monitoring, tamper alerts, and movement visibility.",
      },
      {
        challenge: "Equipment Underutilization",
        challengeText:
          "Limited information on running hours, idle time, and equipment usage affects productivity.",
        solution: "Equipment Utilization Insights",
        solutionText:
          "Track operating hours, idle time, and movement patterns to improve equipment utilization and operational planning.",
      },
      {
        challenge: "Delayed Incident Detection",
        challengeText:
          "Lack of real-time information on deviations, unauthorized stops, and unusual activity delays corrective action.",
        solution: "Automated Alerts & Monitoring",
        solutionText:
          "A centralized platform provides configurable alerts, event history, and monitoring dashboards for faster response.",
      },
    ],
  },

  {
    slug: "fmcg",
    number: "04",
    name: "FMCG",
    headline:
      "Smarter Distribution. Better Delivery Visibility. Efficient Operations.",
    lede:
      "Manage complex distribution networks with intelligent route planning, shipment tracking, temperature monitoring, and location-based insights across every delivery stage.",
    priorities: [
      "Multi-Drop Route Planning & Optimization",
      "Cold Chain & Temperature Monitoring",
      "Demand Forecasting & Load Planning",
      "Real-Time Tracking & Delivery Visibility",
      "Geofencing & Location-Based Alerts",
    ],
    rows: [
      {
        challenge: "Complex Multi-Drop Deliveries",
        challengeText:
          "Multiple delivery locations, inefficient routes, and unplanned stops increase delivery time and distribution costs.",
        solution: "Multi-Drop Route Planning & Optimization",
        solutionText:
          "Plan delivery routes, sequence multiple stops, and monitor route adherence to support efficient distribution operations.",
      },
      {
        challenge: "Temperature-Sensitive Shipments",
        challengeText:
          "Temperature fluctuations during transportation can affect the quality and shelf life of perishable products.",
        solution: "Cold Chain & Temperature Monitoring",
        solutionText:
          "Monitor temperature conditions through IoT sensors, with configurable alerts for temperature deviations.",
      },
      {
        challenge: "Inefficient Load & Dispatch Planning",
        challengeText:
          "Poor demand visibility and unbalanced vehicle utilization lead to unnecessary trips, capacity wastage, and delivery delays.",
        solution: "Demand Forecasting & Load Planning",
        solutionText:
          "Use historical demand and delivery data to support shipment planning, load allocation, and vehicle capacity utilization.",
      },
      {
        challenge: "Limited Shipment Visibility",
        challengeText:
          "Difficulty tracking vehicles and delivery progress across multiple distribution points affects operational coordination.",
        solution: "Real-Time Tracking & Delivery Visibility",
        solutionText:
          "GPS-enabled tracking provides live vehicle locations, movement history, and delivery progress through a centralized platform.",
      },
      {
        challenge: "Unauthorized Route Deviations & Stops",
        challengeText:
          "Unplanned diversions and unauthorized stops can disrupt delivery schedules and increase operational risks.",
        solution: "Geofencing & Location-Based Alerts",
        solutionText:
          "Create virtual boundaries around warehouses, distribution centres, and delivery locations to monitor arrivals, departures, and unauthorized movements.",
      },
    ],
  },

  {
    slug: "pharmaceuticals-chemicals",
    number: "05",
    name: "Pharmaceuticals & Chemicals",
    headline:
      "Protecting Product Integrity. Ensuring Safe Transportation.",
    lede:
      "Maintain visibility over temperature-sensitive and high-value shipments with intelligent monitoring, traceability, and security solutions throughout the distribution journey.",
    priorities: [
      "Refrigerated Vehicle & Cold Chain Monitoring",
      "Digital Monitoring & Compliance Records",
      "Vaccine & Medicine Batch Tracking",
      "Route Monitoring & Geofencing",
      "Electronic Locking & Security Monitoring",
      "Centralized Alerts & Incident Visibility",
    ],
    rows: [
      {
        challenge: "Temperature Excursions & Product Spoilage",
        challengeText:
          "Temperature fluctuations during transportation can compromise the quality and stability of medicines, vaccines, and temperature-sensitive chemicals.",
        solution: "Refrigerated Vehicle & Cold Chain Monitoring",
        solutionText:
          "IoT-enabled temperature sensors provide continuous monitoring, historical temperature records, and alerts for deviations from defined limits.",
      },
      {
        challenge: "Regulatory Compliance & Documentation",
        challengeText:
          "Maintaining accurate transportation records and demonstrating compliance with pharmaceutical handling requirements can be challenging.",
        solution: "Digital Monitoring & Compliance Records",
        solutionText:
          "Time-stamped temperature logs, journey histories, and downloadable reports support documentation, audits, and regulatory reviews.",
      },
      {
        challenge: "Limited Batch-Level Traceability",
        challengeText:
          "Difficulty associating medicine and vaccine batches with specific shipments can delay investigations and product recalls.",
        solution: "Vaccine & Medicine Batch Tracking",
        solutionText:
          "Link batch information with shipment IDs, vehicle locations, and transportation records to improve traceability, subject to integration with batch management systems.",
      },
      {
        challenge: "Hazardous Material Transportation Risks",
        challengeText:
          "Unauthorized route deviations, prolonged stops, and limited movement visibility create operational and safety risks during chemical transportation.",
        solution: "Route Monitoring & Geofencing",
        solutionText:
          "GPS tracking, predefined routes, and location-based alerts help monitor chemical shipments and identify unauthorized deviations.",
      },
      {
        challenge: "Unauthorized Shipment Access",
        challengeText:
          "Tampering, unauthorized openings, and security breaches can compromise sensitive or high-value pharmaceutical and chemical shipments.",
        solution: "Electronic Locking & Security Monitoring",
        solutionText:
          "GPS-enabled E-Locks provide locking-status visibility, unauthorized opening alerts, and access event records.",
      },
      {
        challenge: "Delayed Response to Critical Events",
        challengeText:
          "Lack of timely information about temperature deviations, unplanned stops, or security incidents can delay corrective action.",
        solution: "Centralized Alerts & Incident Visibility",
        solutionText:
          "A unified monitoring dashboard brings together available temperature, location, and security data to support faster operational response.",
      },
    ],
  },

  {
    slug: "infrastructure-security",
    number: "06",
    name: "Infrastructure & Security",
    headline:
      "One Platform. Complete Security Visibility.",
    lede:
      "Bring video surveillance, access control, and visitor management together into a unified system for better security oversight and operational control.",
    priorities: [
      "Unified Security Management",
      "Centralized Event Monitoring",
      "Digital Records & Reporting",
      "Intelligent Access Management",
      "Multi-Site Security Monitoring",
    ],
    rows: [
      {
        challenge: "Disconnected Security Systems",
        challengeText:
          "CCTV, access control, and visitor management operate independently, making centralized monitoring difficult.",
        solution: "Unified Security Management",
        solutionText:
          "Integrate supported surveillance, access control, and visitor management systems into a single platform.",
      },
      {
        challenge: "Limited Incident Visibility",
        challengeText:
          "Security teams must manually review multiple systems to investigate incidents, delaying response and resolution.",
        solution: "Centralized Event Monitoring",
        solutionText:
          "Access video events, entry records, and security alerts through a unified interface for faster incident investigation.",
      },
      {
        challenge: "Manual Record Management",
        challengeText:
          "Maintaining separate visitor logs, access records, and security reports creates administrative complexity.",
        solution: "Digital Records & Reporting",
        solutionText:
          "Maintain centralized visitor information, access histories, and security event logs for easier review and reporting.",
      },
      {
        challenge: "Unauthorized Access & Security Breaches",
        challengeText:
          "Uncontrolled entry into restricted areas increases the risk of theft, tampering, and security incidents.",
        solution: "Intelligent Access Management",
        solutionText:
          "Manage entry permissions through smart locks, RFID, and supported authentication systems with unauthorized access alerts.",
      },
      {
        challenge: "Limited Control Over Multiple Locations",
        challengeText:
          "Managing security across multiple offices, warehouses, industrial sites, and remote facilities creates operational challenges.",
        solution: "Multi-Site Security Monitoring",
        solutionText:
          "Monitor supported security devices, access activities, and alerts across multiple locations through a centralized platform.",
      },
    ],
  },

  {
    slug: "schools-universities",
    number: "07",
    name: "School & University",
    headline:
      "Safer Student Journeys. Smarter Transport Management.",
    lede:
      "From the first pickup to the final drop-off, bring greater accountability, visibility, and safety to student transportation.",
    priorities: [
      "Real-Time Transport Visibility",
      "Automated Student Attendance & Verification",
      "Driver Safety & Video Intelligence",
      "Route Monitoring & Geofencing",
      "Centralized School Transport Management",
    ],
    rows: [
      {
        challenge: "Limited Student Transport Visibility",
        challengeText:
          "Schools and parents often lack real-time information about bus locations, route progress, and arrival times.",
        solution: "Real-Time Transport Visibility",
        solutionText:
          "GPS-enabled tracking provides live bus locations, route history, geofencing, and arrival notifications through a centralized platform.",
      },
      {
        challenge: "Unverified Student Boarding & Drop-Off",
        challengeText:
          "Manual attendance records make it difficult to confirm whether students have boarded or exited at designated stops.",
        solution: "Automated Student Attendance & Verification",
        solutionText:
          "RFID-enabled identification records student boarding and exit events, providing accurate attendance logs and notifications.",
      },
      {
        challenge: "Unsafe Driving & Road Incidents",
        challengeText:
          "Speeding, harsh braking, distracted driving, and limited incident evidence increase student transportation risks.",
        solution: "Driver Safety & Video Intelligence",
        solutionText:
          "Multi-channel cameras enable road and cabin monitoring, driving-event recording, and incident review to support safer journeys.",
      },
      {
        challenge: "Route Deviations & Unauthorized Stops",
        challengeText:
          "Unplanned route changes, missed stops, and delays create uncertainty for school administrators and parents.",
        solution: "Route Monitoring & Geofencing",
        solutionText:
          "Monitor predefined routes, detect deviations, and generate alerts for unauthorized stops or entry and exit from designated areas.",
      },
      {
        challenge: "Fragmented Transport Records",
        challengeText:
          "Managing student attendance, vehicle movements, driver information, and incident records across separate systems creates administrative challenges.",
        solution: "Centralized School Transport Management",
        solutionText:
          "Bring student boarding records, vehicle tracking, driver monitoring, and transport alerts into a unified platform for improved oversight.",
      },
    ],
  },
];

export const orderedSolutions = [...solutions].sort(
  (a, b) => Number(a.number) - Number(b.number),
);

/**
 * Current canonical Industry slugs.
 */
export function getSolution(slug: string) {
  return solutions.find((item) => item.slug === slug);
}

/**
 * Optional helper for legacy Industry URLs.
 * Useful while old links are being migrated to /industries.
 */
export const legacyIndustrySlugMap: Record<string, string> = {
  "logistics-supply-chain": "logistics-transportation",
  construction: "cement-mining",
  mining: "cement-mining",
  "smart-infrastructure": "infrastructure-security",
  "data-centres": "infrastructure-security",
};

export function getSolutionByAnySlug(slug: string) {
  const canonicalSlug = legacyIndustrySlugMap[slug] ?? slug;
  return getSolution(canonicalSlug);
}
