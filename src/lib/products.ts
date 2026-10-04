export type ProductIcon = "signal" | "lock" | "pulse" | "video";

export type ProductVariant = {
  id: string;
  name: string;
  eyebrow?: string;
  headline: string;
  description: string;
  features: string[];
  specs: [string, string][];
  note?: string;
};

export type Product = {
  slug: string;
  id: string;
  number: string;
  name: string;
  shortName: string;
  icon: ProductIcon;
  status: string;
  inDevelopment?: boolean;
  headline: string;
  lede: string;
  description: string;
  points: string[];
  specs: [string, string][];
  variants?: ProductVariant[];
  note?: string;
};

export const products: Product[] = [
  {
    slug: "vehicle-telematics",
    id: "vehicle-telematics",
    number: "01",
    name: "Vehicle Telematics",
    shortName: "Vehicle telematics",
    icon: "signal",
    status: "Available · 4G connected tracking",
    headline: "Reliable vehicle intelligence starts at the source.",
    lede:
      "Connected tracking hardware gives operations teams a dependable view of vehicle location, movement, driving events and remote-control workflows.",
    description:
      "VIoT vehicle telematics is designed around real operating conditions rather than a single device format. Basic deployments focus on reliable 4G tracking, wide-voltage compatibility and immobilisation, while advanced deployments can add richer sensor inputs, SOS workflows and peripheral integrations.",
    points: [
      "4G vehicle connectivity",
      "9–90V operating range",
      "Vehicle immobilisation",
    ],
    specs: [
      ["Connectivity", "4G cellular vehicle tracking"],
      ["Positioning", "GNSS positioning with location history"],
      ["Power", "Wide-voltage vehicle installation"],
      ["Control", "Remote immobilisation / cut-off support"],
      ["Monitoring", "Movement, speed and exception events"],
      ["Platform", "Connected VIoT operational visibility"],
    ],
    variants: [
      {
        id: "basic-tracking-device",
        name: "Basic Tracking Device",
        eyebrow: "Core vehicle tracking",
        headline: "Compact 4G tracking for everyday fleet visibility.",
        description:
          "A compact vehicle tracking configuration for dependable location reporting, driving-event visibility and remote immobilisation across a wide range of vehicle power systems.",
        features: [
          "4G Connectivity",
          "9–90V Operating Voltage",
          "Vehicle Immobilisation",
        ],
        specs: [
          ["Network", "4G Cat.1"],
          ["Positioning", "GPS + BDS"],
          ["Input voltage", "9–90V DC"],
          ["Driving events", "Harsh acceleration, braking and cornering"],
          ["Alerts", "Movement, speeding, geo-fence and vehicle battery events"],
          ["Control", "Remote cut-off / immobilisation"],
          ["Interface", "Optional TTL expansion"],
          ["Operating temperature", "-20°C to +70°C"],
          ["Ingress protection", "IPX4"],
          ["Dimensions", "80 × 31 × 13 mm"],
          ["Weight", "28 g"],
        ],
        note:
          "Presented as a VIoT configuration. Supplier model names are intentionally not used.",
      },
      {
        id: "advanced-tracking-device",
        name: "Advanced Tracking Device",
        eyebrow: "Expanded vehicle intelligence",
        headline: "More vehicle context from one connected tracking layer.",
        description:
          "An advanced tracking configuration for fleets that need 4G connectivity together with sensor integration, SOS workflows, remote immobilisation and richer vehicle-event monitoring.",
        features: [
          "4G Connectivity",
          "Temperature & Fuel Sensor Integration",
          "Vehicle Immobilisation + SOS",
        ],
        specs: [
          ["Network", "4G LTE with GSM fallback"],
          ["Positioning", "GPS + BDS + LBS"],
          ["Positioning accuracy", "<2.5 m CEP50"],
          ["Input voltage", "9–90V DC"],
          ["Battery", "500 mAh / 3.7V Li-Polymer backup battery"],
          ["Interfaces", "2 × TTL, digital input/output and configurable IO"],
          ["Sensors", "Accelerometer + optional temperature / fuel peripherals"],
          ["Safety", "SOS input and multiple event alarms"],
          ["Control", "Remote fuel / power cut-off"],
          ["Bluetooth", "BLE 5.0 accessory support"],
          ["Operating temperature", "-20°C to +70°C"],
          ["Dimensions", "106 × 54.5 × 16.5 mm"],
          ["Weight", "90 g"],
        ],
        note:
          "Temperature and fuel functions depend on the connected peripheral configuration.",
      },
    ],
  },

  {
    slug: "video-telematics",
    id: "video-telematics",
    number: "02",
    name: "Video Telematics",
    shortName: "Video telematics",
    icon: "video",
    status: "Available · AI video intelligence",
    headline: "See the event, not just the alert.",
    lede:
      "Connected multi-camera video adds visual context to vehicle location, driver behaviour and operational events.",
    description:
      "VIoT video telematics combines multi-channel recording, AI-assisted safety monitoring and 4G remote connectivity so fleet teams can review incidents with the road, cabin and vehicle context attached.",
    points: [
      "Triple-channel HD recording",
      "ADAS, DMS & BSD safety intelligence",
      "4G remote monitoring",
    ],
    specs: [
      ["Camera channels", "3 channels"],
      ["Front camera", "1080P Full HD · 115° wide angle"],
      ["Additional cameras", "2 × 720P HD"],
      ["AI functions", "ADAS, DMS and BSD"],
      ["Connectivity", "Built-in 4G LTE"],
      ["Positioning", "GPS + Beidou"],
      ["Storage", "TF card support up to 512GB"],
      ["Compression", "H.265 / H.264"],
      ["Audio", "Built-in microphone and speaker"],
      ["Live operations", "Live preview + voice intercom"],
      ["Power supply", "DC 10V–36V"],
      ["Power consumption", "<5W"],
      ["Operating temperature", "-25°C to +70°C"],
      ["Dimensions", "120 × 77 × 55 mm"],
      ["Weight", "260 g"],
    ],
    note:
      "Supplier product names are intentionally omitted. Final availability and configuration should be confirmed for the deployment.",
  },

  {
    slug: "smart-logistics-locks",
    id: "smart-logistics-locks",
    number: "03",
    name: "Smart Logistics Locks",
    shortName: "Logistics locks",
    icon: "lock",
    status: "Available · 4G + GNSS cargo security",
    headline: "Track the cargo and the lock state together.",
    lede:
      "Connected logistics locks combine location intelligence, lock-state visibility and tamper events in one operational workflow.",
    description:
      "VIoT smart logistics locks are designed for containers, trailers and high-value cargo where teams need to know not only where an asset is, but whether the lock is secure and whether an abnormal access event has occurred.",
    points: [
      "4G + GNSS connected locking",
      "12000mAh rechargeable battery",
      "Tamper and lock-cut alerts",
    ],
    specs: [
      ["Connectivity", "4G cellular + GNSS positioning"],
      ["Battery", "12000mAh rechargeable lithium battery"],
      ["Access", "IC card, BLE, SMS, platform, app, geo-fence and timing"],
      ["Bluetooth", "Bluetooth 5.1"],
      ["RFID", "13.56MHz · ISO14443A"],
      ["Security events", "Shell-open, lock-cut, lock-failure and low-power alerts"],
      ["Positioning", "GNSS + assisted / network positioning"],
      ["Protection", "IP68"],
      ["Power saving", "Moving/static, latent and scheduled wake modes"],
      ["Charging", "DC 12V / 2A"],
      ["Operating temperature", "-30°C to +80°C"],
      ["Dimensions", "140 × 86 × 38 mm"],
      ["Lock formats", "Rope-type and pole-type configurations"],
    ],
    note:
      "Exact lock format and regional communication bands depend on the selected deployment configuration.",
  },

  {
    slug: "smart-infra-locks",
    id: "infra-locks",
    number: "04",
    name: "Smart Infra Locks",
    shortName: "Infra locks",
    icon: "lock",
    status: "Configuration dependent",
    headline: "Connected access control for infrastructure workflows.",
    lede:
      "A lock becomes operationally useful when its state, access events and exceptions reach the team responsible for the site.",
    description:
      "VIoT evaluates infrastructure-lock requirements against the access point, operating environment and response workflow. Hardware, enclosure, connectivity and integration scope are confirmed around the site requirement.",
    points: [
      "Lock-state visibility",
      "Exception-led monitoring",
      "Deployment-specific access workflows",
    ],
    specs: [
      ["Application", "Infrastructure access workflows"],
      ["Monitoring", "Lock state and exception events"],
      ["Platform", "VIoT event visibility"],
      ["Access", "Defined per deployment"],
      ["Connectivity", "Defined per site environment"],
      ["Configuration", "Confirmed during technical evaluation"],
    ],
    note:
      "No single universal lock specification is implied for infrastructure deployments.",
  },

  {
    slug: "asset-trackers",
    id: "asset-trackers",
    number: "05",
    name: "Asset Trackers",
    shortName: "Asset trackers",
    icon: "signal",
    status: "Available · Battery-powered tracking",
    headline: "Track assets without relying on vehicle power.",
    lede:
      "Long-life battery tracking brings location and movement visibility to equipment, cargo and mobile assets that do not stay connected to one vehicle.",
    description:
      "VIoT asset tracking supports battery-powered deployments where installation flexibility, movement alerts and location visibility matter more than a hard-wired vehicle connection.",
    points: [
      "7800 / 10000mAh battery options",
      "Powerful magnetic mounting",
      "Geo-fence and movement alerts",
    ],
    specs: [
      ["Positioning", "GPS + AGPS + LBS"],
      ["Battery", "7800mAh / 10000mAh options"],
      ["Mounting", "Integrated magnetic mounting"],
      ["Alerts", "Vibration and movement alerts"],
      ["Geo-fence", "Supported"],
      ["Voice monitoring", "Supported"],
      ["Protection", "IP65 dust and water protection"],
      ["GSM", "850 / 900 / 1800 / 1900 MHz"],
      ["GPRS", "Class 12 · TCP/IP"],
      ["GPS channels", "66"],
      ["Location accuracy", "<10 metres"],
      ["Operating temperature", "-20°C to +70°C"],
      ["Dimensions", "86 × 62 × 30 mm"],
      ["Weight", "255 g"],
    ],
    note:
      "Battery life depends on reporting frequency, network conditions and operating mode.",
  },

  {
    slug: "iot-sensors",
    id: "iot-sensors",
    number: "06",
    name: "IoT Sensors",
    shortName: "IoT sensors",
    icon: "pulse",
    status: "Application specific",
    headline: "Bring the relevant field event into the same operating view.",
    lede:
      "Sensor requirements start with the event the business needs to see—not a generic catalogue of inputs.",
    description:
      "VIoT evaluates sensor-led monitoring as part of a connected device and platform workflow. Temperature, fuel, load and other field inputs are selected around the operating requirement and the hardware they connect to.",
    points: [
      "Temperature and fuel monitoring",
      "Device-to-platform reporting",
      "Application-specific sensor inputs",
    ],
    specs: [
      ["Purpose", "Application-specific event monitoring"],
      ["Typical inputs", "Temperature, fuel and other field sensors"],
      ["Data path", "Connected device to VIoT platform"],
      ["Hardware", "Selected for the use case"],
      ["Integration", "Scoped per deployment"],
    ],
    note:
      "No universal sensor specification is implied. Exact sensor hardware and interfaces are confirmed during technical evaluation.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const orderedProducts = [...products].sort(
  (a, b) => Number(a.number) - Number(b.number),
);
