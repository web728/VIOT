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

export type ProductListingItem = {
  id: string;
  name: string;
  imagePlaceholder: string;
  description: string;
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

  keyCapabilities?: string[];
  howItWorks?: string;
  builtFor?: string[];
  listingItems?: ProductListingItem[];
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
      "VIoT vehicle telematics is designed around real operating conditions rather than a single device format. Basic deployments focus on dependable 4G tracking, wide-voltage compatibility and remote immobilisation. Advanced deployments add richer positioning, SOS workflows, dual serial interfaces and support for temperature, fuel, RFID and Bluetooth peripherals.",
    points: [
      "4G vehicle connectivity",
      "9-90V operating range",
      "Vehicle immobilisation",
    ],
    specs: [
      ["Connectivity", "4G cellular vehicle tracking"],
      ["Positioning", "GPS + BDS + LBS positioning"],
      ["Power", "Wide-voltage 9-90V vehicle installation"],
      ["Control", "Remote fuel / power cut-off support"],
      ["Monitoring", "Movement, speed, ignition and exception events"],
      ["Platform", "Connected VIoT operational visibility"],
    ],
    variants: [
      {
        id: "basic-tracking-device",
        name: "Basic Tracking Device",
        eyebrow: "Core vehicle tracking",
        headline: "Compact 4G tracking for everyday fleet visibility.",
        description:
          "A compact 4G tracking configuration for dependable location reporting, driving-event visibility and remote vehicle immobilisation across a wide range of vehicle power systems.",
        features: [
          "4G Connectivity",
          "9-90V Operating Voltage",
          "Vehicle Immobilisation",
        ],
        specs: [
          ["Network", "4G Cat.1"],
          ["Positioning", "GPS + BDS"],
          ["Input voltage", "9-90V DC"],
          ["Standby current", "<5mA"],
          [
            "Driving events",
            "Harsh acceleration, braking and cornering",
          ],
          [
            "Alerts",
            "Movement, speeding, geo-fence and vehicle battery events",
          ],
          ["Control", "Remote cut-off / immobilisation"],
          ["Interface", "Optional TTL expansion"],
          ["Operating temperature", "-20°C to +70°C"],
          ["Ingress protection", "IPX4"],
          ["Dimensions", "80 × 31 × 13 mm"],
          ["Weight", "28 g"],
        ],
      },
      {
        id: "advanced-tracking-device",
        name: "Advanced Tracking Device",
        eyebrow: "Expanded vehicle intelligence",
        headline: "More vehicle context from one connected tracking layer.",
        description:
          "An advanced 4G vehicle-tracking configuration for fleets that need GPS/BDS/LBS positioning, SOS workflows, remote fuel or power cut-off, richer vehicle-event monitoring and integration with temperature, fuel, RFID and Bluetooth peripherals.",
        features: [
          "4G Connectivity",
          "Temperature & Fuel Sensor Integration",
          "Vehicle Immobilisation + SOS",
        ],
        specs: [
          ["Network", "4G LTE with GSM fallback"],
          ["Positioning", "GPS + BDS + LBS"],
          ["Positioning accuracy", "<2.5 m CEP50"],
          ["Input voltage", "9-90V DC"],
          ["Backup battery", "500mAh / 3.7V Li-Polymer"],
          ["Serial interfaces", "2 × TTL"],
          ["Digital input", "1"],
          ["Digital outputs", "2"],
          ["Configurable IO", "1 × DIN/AIN"],
          [
            "Sensor support",
            "Temperature, fuel-level, RFID and other configured peripherals",
          ],
          [
            "Bluetooth",
            "Bluetooth 5.0 accessory support for configured sensors and relays",
          ],
          ["Safety", "SOS input + multiple event alarms"],
          ["Control", "Remote fuel / power cut-off"],
          [
            "Alerts",
            "Overspeed, vibration, geo-fence, power failure, low battery, external power low battery, displacement and harsh driving events",
          ],
          ["SIM", "Nano SIM"],
          ["Memory", "Storage of up to 3000 GPS data entries"],
          ["Operating temperature", "-20°C to +70°C"],
          ["Storage temperature", "-30°C to +80°C"],
          ["Operating humidity", "5% to 95% non-condensing"],
          ["Dimensions", "106 × 54.5 × 16.5 mm"],
          ["Weight", "90 g"],
        ],
        note:
          "Peripheral functions depend on the selected sensor, accessory and deployment configuration.",
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
    status: "Available · 3-channel AI video intelligence",
    headline: "See the event, not just the alert.",
    lede:
      "Connected three-channel video adds visual context to vehicle location, driver behaviour and operational events.",
    description:
      "VIoT video telematics combines one 1080P front camera with two 720P HD channels, AI-assisted ADAS, DMS and BSD safety monitoring, built-in 4G LTE and GPS + Beidou positioning. Fleet teams can review live video and playback, use voice intercom, retain footage locally and connect video events to the vehicle's operating context.",
    points: [
      "Triple-channel HD recording",
      "ADAS, DMS & BSD safety intelligence",
      "4G remote monitoring",
    ],
    keyCapabilities: [
      "Triple-channel HD recording — one 1080P front camera and two 720P HD channels provide simultaneous road, cabin or surrounding-vehicle coverage.",
      "AI safety monitoring — ADAS, DMS and BSD can identify lane departure, forward-collision risk, fatigue, mobile-phone use, smoking, blind spots and unsafe driving behaviour.",
      "4G remote connectivity — built-in 4G LTE supports live video, remote monitoring, cloud connectivity and OTA updates.",
      "Fleet operations — live preview, playback and device settings can be managed remotely, with built-in microphone and speaker support for two-way voice communication.",
      "Secure recording continuity — a built-in supercapacitor helps protect important recordings during sudden power interruption.",
      "Accurate positioning — GPS + Beidou supports vehicle location, route history and trip tracking.",
    ],
    specs: [
      ["Processor", "Dual-core processor @ 1.5GHz"],
      ["AI engine", "1.0 TOPS Neural Processing Unit"],
      ["Memory", "2GB DDR3"],
      ["Camera channels", "3 channels"],
      ["Front camera", "1080P Full HD · 115° wide angle"],
      ["Additional cameras", "2 × 720P HD"],
      ["Video compression", "H.265 / H.264"],
      ["Video recording", "Simultaneous audio & video recording"],
      ["AI functions", "ADAS, DMS & BSD"],
      ["Cellular network", "Built-in 4G LTE · TDD-LTE / FDD-LTE"],
      ["Wi-Fi", "Optional 2.4GHz Wi-Fi · 802.11 b/g/n AP mode"],
      ["Positioning", "GPS + Beidou"],
      ["Storage", "TF card support up to 512GB"],
      ["Audio", "Built-in microphone & speaker"],
      ["G-sensor", "Built-in 3-axis acceleration sensor"],
      ["Mobile app", "Supported"],
      ["Live preview", "Supported"],
      ["Voice intercom", "Supported"],
      ["Communication protocol", "JT/T808 · JT/T1078"],
      ["SIM", "1 × Micro SIM"],
      ["Power supply", "DC 10V-36V"],
      ["Power consumption", "<5W"],
      ["Upgrade", "OTA & TF card"],
      ["Operating temperature", "-25°C to +70°C"],
      ["Dimensions", "120 × 77 × 55 mm"],
      ["Weight", "260 g"],
    ],
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
      "Connected logistics locks combine location intelligence, lock-state visibility, flexible unlocking and tamper events in one operational workflow.",
    description:
      "VIoT smart logistics locks are designed for containers, trailers and high-value cargo where teams need to know where an asset is, whether the lock is secure and whether abnormal access has occurred. The platform combines GNSS/AGPS/Wi-Fi/LBS positioning, lock state, battery condition and security alarms with configurable reporting modes for moving and stationary assets.",
    points: [
      "4G + GNSS connected locking",
      "12000mAh rechargeable battery",
      "Tamper and lock-cut alerts",
    ],
    keyCapabilities: [
      "Multiple positioning methods — GNSS, AGPS, Wi-Fi and LBS provide location visibility across logistics workflows.",
      "Flexible lock control — unlock through IC card, BLE, SMS, platform, app, geo-fence or scheduled timing depending on configuration.",
      "Security alarms — shell-open, lock-cut, lock-breakdown, low-power and overspeed events can be reported to the platform.",
      "Power-aware reporting — moving/static, latent and scheduled wake modes reduce power consumption when continuous reporting is not required.",
      "Rope and pole formats — supports rope-type and pole-type locking configurations for different cargo and trailer applications.",
    ],
    howItWorks:
      "When the rope or pole is inserted, the device is ready to lock. Locking and unlocking can be authorised through configured channels such as IC card, BLE, SMS or the platform. LED, buzzer and voice prompts indicate lock state and operation result. The device reports location, lock state and configured security events to the platform, while power-saving modes adjust reporting behaviour when the asset is static or sleeping.",
    specs: [
      ["Battery", "Rechargeable polymer lithium battery · 3.7V · 12000mAh"],
      [
        "Current",
        "Average <60mA @ 3.7V · power-saving <3mA @ 3.7V · sleep <120μA",
      ],
      ["Positioning", "GNSS + AGPS + Wi-Fi + LBS"],
      ["Bluetooth", "Bluetooth 5.1 · lock/unlock and configuration by BLE"],
      ["RFID", "13.56MHz · ISO14443A · IC-card lock/unlock"],
      ["GNSS frequency", "GPS L1 1575.42MHz · BDS B1 1561.098MHz"],
      [
        "Unlock methods",
        "IC card, BLE, SMS, platform, app, geo-fence and timing",
      ],
      [
        "Security events",
        "Shell-open, lock-cut, lock-failure, low-power and overspeed alerts",
      ],
      [
        "Working modes",
        "Moving/static intelligent mode, latent mode and scheduled wake-up mode",
      ],
      ["Speaker", "Audio playback and lock/unlock operation prompts"],
      ["Buzzer", "Lock/unlock result prompts"],
      ["Lock material", "Nylon + fibre plastic"],
      [
        "Rope / pole material",
        "Flexible 304 stainless-steel wire rope with 6mm rubber coating · U-shaped locking lever 8mm diameter",
      ],
      ["Protection", "IP68 + salt fog + UV + fire-resistance protection"],
      ["Charging", "12V / 2A deployment configuration"],
      ["Operating temperature", "-30°C to +80°C"],
      ["Dimensions", "140 × 86 × 38 mm"],
      ["Lock formats", "Rope-type and pole-type configurations"],
      [
        "Communication variants",
        "LTE-M / NB-IoT + 2G or regional 4G Cat.1 + 2G configurations",
      ],
    ],
    note:
      "Communication bands and charging details vary by the selected regional hardware configuration.",
  },

  {
    slug: "smart-infra-locks",
    id: "infra-locks",
    number: "04",
    name: "Smart Infra Locks",
    shortName: "Infra locks",
    icon: "lock",
    status: "Battery-free · Keyless access",
    headline:
      "Battery-free, keyless locking for the access points that matter most.",
    lede:
      "Cabinets, manholes, gates, containers and security doors can be managed without physical-key handovers, with every authorised opening visible on the VIoT platform.",
    description:
      "Battery-free, keyless locking for the access points that matter most — cabinets, manholes, gates, containers, and security doors across critical infrastructure sites. Every access is logged, authorised remotely, and visible on the VIoT platform, so site teams stop depending on physical keys and start managing access the way they manage every other asset.",
    points: [
      "Battery-free locking",
      "Remote, revocable access",
      "One-time, auditable access codes",
    ],
    keyCapabilities: [
      "Battery-free locking — no batteries, wiring, or recurring replacement; the lock draws its energy from the key device at the moment of opening",
      "Remote, revocable access — grant or cancel access instantly from the platform; no physical key ever needs to be collected back",
      "One-time, auditable access codes — every opening uses a fresh credential, so a lost key device or code carries no standing risk",
      "Works through outages — stays operational even if mobile network or site power fails",
      "Built for harsh sites — rated for extreme heat, cold, moisture, and vandalism; suited to outdoor and unmanned locations",
      "Centralised management — manage locks, sites, and user access on-premise or via a secure cloud, with a full access log for every door",
    ],
    howItWorks:
      "An authorised user requests access through a mobile key device or an app, which is issued a fresh, single-use credential tied to that one opening — nothing is stored on the lock itself. The lock reports every open/close event, along with tamper and battery-health alerts from its connected door/sensor guard, back to the VIoT platform over the site's available network. On the platform, teams see live lock status, a complete access log (who opened which lock, when), and instant alerts for forced entry, sabotage, or a door left open.",
    builtFor: [
      "Energy & utilities — substations, distribution cabinets, local network stations",
      "Water & telecom infrastructure — treatment sites, manholes, shaft covers, telecom towers",
      "Logistics & storage — containers, fenced yards, secure supply-chain boxes",
      "Security doors & gates — perimeter access, fire-rated doors, padlocked gates",
      "Managed properties — multi-site buildings and facilities needing centralised, keyless access control",
    ],
    specs: [
      [
        "Locking technology",
        "Battery-free — lock draws its operating energy from the key device at the moment of opening",
      ],
      [
        "Access credential",
        "One-time cryptographic code (8-10 digit), freshly generated per use; no stored credential at the lock",
      ],
      [
        "Key device",
        "Portable keypad fob — rechargeable via USB, supplies up to 1,000 openings per charge",
      ],
      [
        "Management software",
        "Multi-client, multi-admin software; deployable on-premise or as a hosted cloud service",
      ],
      ["Mobile app", "Remote code retrieval and authorised remote opening"],
      [
        "Door/sensor monitoring",
        "Integrated reed contact with sabotage and battery monitoring; connects via LTE-M / NB-IoT / 410 MHz / 450 MHz; battery life up to 5 years",
      ],
      [
        "Operating conditions",
        "Rated for extreme heat, cold, and urban vandalism; continues operating through mobile network or power outages",
      ],
      ["Ingress protection", "IP65-IP68, depending on form factor"],
      [
        "Security / resistance rating",
        "Up to RC3 (DIN EN 1627, class D400) for shaft/manhole covers; Resistance Class 2 for swing-handle locks; EN16867 (security fittings); EN16864 (padlocks)",
      ],
      ["Fire door compatibility", "EI60-rated security fitting available"],
      [
        "Certifications",
        "Independently tested and certified for critical-infrastructure use; EU CER (Critical Entities Resilience) Directive compliant; GDPR compliant",
      ],
      [
        "Form factors available",
        "Key safe, lock inserts (Ø33/35/46/58/67 mm), manhole lock, swing-handle lock, profile cylinder, security door fitting, container lock, padlock",
      ],
      ["Data hosting", "On-premise or cloud — customer's choice"],
    ],
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
      "Five sensor types bring fuel, temperature, humidity, load and light conditions into the connected vehicle or asset workflow.",
    description:
      "VIoT sensor-led monitoring connects field measurements to the GPS device and platform so teams can see the operating condition alongside location and movement. The current product set covers fuel level, temperature, humidity, axle/load and ambient light monitoring.",
    points: [
      "Fuel, temperature and humidity monitoring",
      "Load / axle and light-level sensing",
      "Device-to-platform reporting",
    ],
    listingItems: [
      {
        id: "fuel-sensor",
        name: "Fuel Sensor",
        imagePlaceholder: "[Image: Fuel Sensor]",
        description:
          "Measures real-time fuel level inside the tank using a capacitive or ultrasonic probe. It connects to the RS485 input of the GPS device and sends level readings over the serial line. The platform shows live fuel level (%/litres), consumption trends, and flags sudden drops that indicate refuelling or theft.",
      },
      {
        id: "temperature-sensor",
        name: "Temperature Sensor",
        imagePlaceholder: "[Image: Temperature Sensor]",
        description:
          "Measures ambient or cargo temperature using a digital probe, commonly placed inside a refrigerated compartment or near the engine. It connects to the 1-Wire input of the GPS device and sends readings through the 1-Wire bus. The platform shows live temperature, historical trends, and threshold alerts (e.g., cold-chain breach).",
      },
      {
        id: "humidity-sensor",
        name: "Humidity Sensor",
        imagePlaceholder: "[Image: Humidity Sensor]",
        description:
          "Measures relative humidity inside a cargo or storage compartment, typically as part of a combined temperature-humidity probe. (Interface to confirm — proposed below) It connects to the 1-Wire input of the GPS device, sharing the bus with the temperature probe. The platform shows live humidity %, trends, and threshold alerts for moisture-sensitive cargo.",
      },
      {
        id: "load-axle-sensor",
        name: "Load/Axle Sensor",
        imagePlaceholder: "[Image: Load/Axle Sensor]",
        description:
          "Measures weight and load distribution across axles using a load cell mounted on the suspension or chassis. (Interface to confirm — proposed below) It connects to the Analog Input (AIN) of the GPS device, which reads the load cell's voltage output. The platform shows live load weight per axle, overload alerts, and uneven-distribution warnings.",
      },
      {
        id: "lux-sensor",
        name: "Lux Sensor",
        imagePlaceholder: "[Image: Lux Sensor]",
        description:
          "Measures ambient light intensity and is used in lighting applications — for example, verifying cabin or headlight status. It connects to the RS485 input of the GPS device and sends light-level readings over the serial line. The platform shows live light levels, on/off status, and light-triggered event logs.",
      },
    ],
    specs: [
      ["Fuel Sensor", "RS485 input of the GPS device"],
      ["Temperature Sensor", "1-Wire input of the GPS device"],
      [
        "Humidity Sensor",
        "1-Wire input of the GPS device — interface to confirm",
      ],
      [
        "Load/Axle Sensor",
        "Analog Input (AIN) of the GPS device — interface to confirm",
      ],
      ["Lux Sensor", "RS485 input of the GPS device"],
    ],
    note:
      "Humidity Sensor and Load/Axle Sensor interfaces are marked as 'to confirm' in the client-supplied content.",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const orderedProducts = [...products].sort(
  (a, b) => Number(a.number) - Number(b.number),
);
