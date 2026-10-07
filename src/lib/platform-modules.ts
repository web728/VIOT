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

export type SolutionCapability = {
  name: string;
  whatItDoes: string;
  whatItChanges: string;
};

export type SolutionDifference = {
  title: string;
  text: string;
};

export type SolutionPageContent = {
  heroWhy: string;
  heroIllustrationNote: string;
  problemTitle: string;
  problemParagraphs: string[];
  coversTitle: string;
  capabilityRows: SolutionCapability[];
  capabilityClosing: string;
  differenceTitle: string;
  differences: SolutionDifference[];
  engineTitle: string;
  engineCaption: string;
  engineText: string;
  proofTitle: string;
  proofParagraphs: string[];
  proofIllustrationNote?: string;
  supportTitle: string;
  supportParagraphs: string[];
  supportIllustrationNote?: string;
  ctaHeading: string;
  ctaSubheading: string;
  formFields: string;
  implementationNotes: string[];
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
  solutionContent?: SolutionPageContent;
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
    eyebrow: "EV Management",
    headline: "Know Your Battery Down to the Cell",
    lede: "Most EV platforms tell you a charge percentage. VIoT tells you which cell in the pack is starting to fall behind - while it's still a cheap fix, not an expensive one.",
    description: "Cell-level battery health, charging data, and driving efficiency feed one engine; the fleet manager gets a real range figure and an early degradation flag, not three unconnected readouts.",
    capabilities: [
      "Battery Health Monitoring (Cell-Level)",
      "Charging Session Tracking",
      "Range Prediction",
      "Driving Efficiency Analytics",
    ],
    signals: [
      "Cell-level battery health",
      "charging data",
      "driving efficiency",
    ],
    outcomes: [
      "real range figure",
      "early degradation flag",
    ],
    solutionContent: {
      heroWhy: "every EV fleet owner has already been burned by a manufacturer range figure that doesn't survive real traffic, or a \"battery health: 94%\" number that hides a problem until the pack needs replacing. Leading with cell-level visibility - the thing almost nobody else actually shows - signals depth in the first line instead of repeating the pack-level number everyone already distrusts.",
      heroIllustrationNote: "a simplified battery pack cutaway showing individual cells, with one cell highlighted/flagged in a different state than the rest, reads better here than a generic EV-charging stock photo. Keep it schematic, not literal engineering detail.",
      problemTitle: "The Problem: Pack-Level Numbers Hide Pack-Level Failures",
      problemParagraphs: [
        "Most EV telematics stops at the pack. It reports one state-of-charge number and one state-of-health number for the whole battery, which is the same as judging a fleet's health by averaging every vehicle into one number - technically correct, operationally useless. A pack doesn't fail all at once; it fails because one or a few cells start drifting from the rest, long before the pack-level average shows anything wrong.",
        "The range number is its own problem. It usually comes from the manufacturer's lab rating, not from how the vehicle actually drives - payload, traffic, AC load, and route terrain all cut into real range in ways a lab figure never captures. Fleet planners end up scheduling routes and charging stops around a number they've learned not to trust.",
        "And charging data typically lives in a separate app from driving data, so nobody connects an irregular charging pattern to the efficiency problem it's quietly causing. Three blind spots, one root cause: EV telematics built to report a dashboard number, not to protect the asset.",
      ],
      coversTitle: "What EV Management Actually Covers",
      capabilityRows: [
        {
          name: "Battery Health Monitoring (Cell-Level)",
          whatItDoes: "Tracks state-of-charge and state-of-health down to individual cell groups, not one pack-wide average",
          whatItChanges: "Flags a single cell drifting from the rest while it's a cheap balancing fix - not a full pack replacement",
        },
        {
          name: "Charging Session Tracking",
          whatItDoes: "Logs every session - time, location, duration, energy drawn - and flags incomplete or irregular charging",
          whatItChanges: "Catches a charging habit quietly shortening battery life before it shows up as a shorter range",
        },
        {
          name: "Range Prediction",
          whatItDoes: "Real-world range estimate from actual driving pattern, payload and current battery condition, not the manufacturer's lab figure",
          whatItChanges: "Lets planners schedule routes and charging stops around a number they can actually trust",
        },
        {
          name: "Driving Efficiency Analytics",
          whatItDoes: "Tracks regenerative braking use and how harsh acceleration/braking eats into range, scored per driver",
          whatItChanges: "Turns driver habit into a lever on range and battery life, not just a safety score",
        },
      ],
      capabilityClosing: "The cell-level line in that table is the one that matters most. Pack-level health is what every EV telematics vendor already reports; cell-level visibility is the harder engineering problem, and it's the one that actually catches a failure while it's still cheap to fix (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "Cell-level depth, not a pack-wide average",
          text: "A pack-level state-of-health number is the easy figure to report and the least useful one - it moves only after damage has already spread across the pack. VIoT's analytics work at the level of individual cells within the pack, which is a harder data problem but the only level at which a failure is still cheap to catch. This is the deep-dive investment behind this page: most competitors stop at the number that's easy to show, not the one that's useful.",
        },
        {
          title: "One dashboard across EV makes and battery chemistries",
          text: "Mixed EV fleets are common and getting more so, and most EV telematics is built around a single OEM's data format or a single battery chemistry. VIoT's platform is built to work across makes and chemistries, so a fleet running vehicles from more than one manufacturer gets one dashboard, not a different app per vehicle brand.",
        },
        {
          title: "Range and health numbers built from how the vehicle actually drives",
          text: "A manufacturer's range rating is a lab number. VIoT's range prediction is built from the vehicle's actual driving pattern, payload and current battery condition, so it reflects what a route will really cost in range - not what a vehicle could theoretically do under test conditions nobody drives in.",
        },
        {
          title: "We stay in the account after go-live",
          text: "Same standard VIoT holds itself to everywhere: the relationship doesn't end at installation. What that means specifically for EV Management - protecting the single most expensive component in the vehicle - is in Section 7.",
        },
      ],
      engineTitle: "One Engine, Not Three Dashboards",
      engineCaption: "battery, charging, and driving signals converge into one EV Management view",
      engineText: "Cell-level battery health, charging data, and driving efficiency feed one engine; the fleet manager gets a real range figure and an early degradation flag, not three unconnected readouts.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "EV fleets rarely stay single-make for long - a fleet that started with one manufacturer's vehicles tends to add another within a couple of years, often on a different battery chemistry entirely. EV Management is built to run across makes and chemistries from the start, rather than being retrofitted onto a second OEM after the fact.",
        "That breadth is also what makes the cell-level analytics credible rather than theoretical: a model trained against one battery chemistry's behaviour doesn't transfer cleanly to another, so working across chemistries is itself evidence that the cell-level monitoring is built on more than a single vendor's data pattern.",
      ],
      supportTitle: "Built to Last: Protecting the Most Expensive Part of the Vehicle",
      supportParagraphs: [
        "A battery pack is the single most expensive component to replace in an EV fleet - often the deciding factor in whether a vehicle is worth repairing at all. Most EV telematics stops watching the moment the dashboard goes live, which means the first real sign of a problem is usually the pack already failing.",
        "VIoT's cell-level monitoring doesn't stop at installation. It keeps watching for the early signs of one cell drifting from the rest for as long as the vehicle stays in service, so what could have become a full pack replacement gets caught and fixed at the cell level instead - smaller, cheaper, and before it ever takes a vehicle off the road.",
        "That's what \"lasts long\" means for an EV fleet specifically: not a warranty clause, but a system that keeps protecting the asset's biggest cost for the life of the vehicle, not just for the duration of the install.",
      ],
      supportIllustrationNote: "a simple before/after showing a cell-level anomaly caught early (small, cheap fix) versus the same issue left unmonitored until it becomes a full pack failure (large, costly fix) makes this point visually without needing a technical battery diagram.",
      ctaHeading: "See what's happening inside your battery packs",
      ctaSubheading: "Tell us your EV fleet's makes and battery chemistries - we'll show you cell-level visibility on a fleet like yours, not a generic demo.",
      formFields: "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "This is the Solutions tab page, scoped to electric vehicles specifically. A mixed ICE + EV fleet should be pointed to both this page and Fleet Intelligence - consider a short cross-link line near the top for that case.",
        "Overlap to handle carefully: \"Driving Efficiency Analytics\" here and \"Driver Behaviour Scoring\" on Fleet Intelligence both use harsh acceleration/braking as a raw signal. That's intentional - Fleet Intelligence frames it as a safety/risk score, EV Management frames the same signal as a range/battery-life cost - but don't let the two pages read as duplicate content. Cross-link rather than silently repeat.",
        "Do not use the term \"AIS-140\" anywhere on this page or its footer.",
        "Do not state or imply VIoT designs or manufactures the hardware or the vehicles. Use ownership language (\"our hardware, end-to-end\") rather than \"designed by us\" / \"manufactured by us.\"",
        "No team or personnel content on this page.",
        "Avoid naming specific EV OEMs, battery chemistries, or client segments on the live page per the qualitative-proof decision in Section 6 - keep the breadth claim general unless a later decision supplies specific names to cite.",
        "Section 5's diagram and Section 7's illustration note are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "e-lock",
    number: "03",
    name: "Safe Logistics",
    eyebrow: "Safe Logistics",
    headline: "A Lock That Knows Where It's Allowed to Open",
    lede: "Most cargo locks only know open or closed. VIoT's E-Lock knows the trip - so an unlock anywhere except the declared destination is treated as a tamper event, instantly.",
    description: "The lock engages at loading and stays armed through transit. An unlock at the declared destination closes the trip normally; an unlock anywhere else is automatically treated as tamper and alerts ops in real time.",
    capabilities: [
      "Remote Lock/Unlock",
      "Tamper & Forced-Entry Alerts",
      "Trip-Bound Locking",
    ],
    signals: [
      "Remote Lock/Unlock",
      "Tamper & Forced-Entry Alerts",
      "Trip-Bound Locking",
    ],
    outcomes: [
      "closes the trip normally",
      "treated as tamper",
      "alerts ops in real time",
    ],
    solutionContent: {
      heroWhy: "generic e-locks and seals are sold on the open/closed state alone, which is exactly why cargo theft at unofficial stops is still common - the lock doesn't know it's in the wrong place. Leading with trip-awareness names the real gap other vendors leave open.",
      heroIllustrationNote: "a simple route line with a highlighted destination point, and a second, flagged point where an unlock attempt happened off-route - reads better than generic padlock or truck-door imagery.",
      problemTitle: "The Problem: A Lock That Doesn't Know Where It Is",
      problemParagraphs: [
        "A standard e-lock or electronic seal reports one thing: open or closed. That tells an ops team nothing about whether the open was supposed to happen. A trailer unlocked at its declared destination and a trailer unlocked at an unscheduled stop twenty minutes before arrival look identical in most systems - both just say \"opened.\"",
        "That gap is where cargo theft and pilferage actually happen - not through dramatic lock-breaking, but through a quiet, unscheduled stop that the lock itself has no way to flag as wrong. By the time a shipper notices a shortfall at delivery, the trail is already cold.",
        "The other common failure is speed. A tamper sensor that reports an hour late, or only on the next check-in cycle, is reporting history - not preventing a loss. Safe Logistics exists to close both gaps: knowing what \"normal\" looks like for this specific trip, and saying so the moment something deviates from it.",
      ],
      coversTitle: "What Safe Logistics Actually Covers",
      capabilityRows: [
        {
          name: "Remote Lock/Unlock",
          whatItDoes: "Ops team or an authorised consignee locks/unlocks remotely, every action logged against who and when",
          whatItChanges: "Removes the physical key as the weak point - every open has an identity and a timestamp attached",
        },
        {
          name: "Tamper & Forced-Entry Alerts",
          whatItDoes: "Fires instantly on an unauthorised open attempt, a cut, or physical tampering - not on the next check-in cycle",
          whatItChanges: "Turns a theft attempt into a real-time alert ops can act on, not a loss discovered at delivery",
        },
        {
          name: "Trip-Bound Locking",
          whatItDoes: "The lock is tied to a specific consignment and its declared destination, not just the vehicle",
          whatItChanges: "An unlock anywhere except the declared stop is automatically treated as a tamper event, no manual cross-check needed",
        },
      ],
      capabilityClosing: "Trip-bound locking is the capability that makes the other two mean something. A remote unlock and a tamper alert are only useful if the system also knows what was supposed to happen on this specific trip - that context is what Section 4 is really about.",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "The alert fires in real time, not on the next check-in",
          text: "A cheap e-lock's biggest failure isn't the lock itself - it's the delay between the tamper and the alert, or worse, a tamper that never gets flagged at all. VIoT's tamper detection reports the moment it happens, so the alert reaches ops while the vehicle is still at that location, not after it has already moved on.",
        },
        {
          title: "The lock knows the trip, not just the state",
          text: "Most e-locks answer one question: open or closed. VIoT's lock is bound to the specific consignment and its declared destination, so it can answer a harder question - was this unlock supposed to happen, here, now. That's what turns an \"opened\" event into either a routine delivery or an automatic tamper flag, without anyone manually checking a trip sheet against a lock log.",
        },
        {
          title: "We stay in the account after go-live",
          text: "Same standard VIoT holds across every Solutions page: a lock installed and left alone is a lock nobody is improving. What \"built to last\" means specifically for a physical security device - tested against real tamper attempts, not just factory conditions - is in Section 7.",
        },
      ],
      engineTitle: "The Trip Lifecycle",
      engineCaption: "only a valid unlock at the declared destination closes the trip",
      engineText: "The lock engages at loading and stays armed through transit. An unlock at the declared destination closes the trip normally; an unlock anywhere else is automatically treated as tamper and alerts ops in real time.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "Safe Logistics is already protecting cargo where an unscheduled stop isn't just inconvenient - it's a real loss. Pharmaceutical shipments, where an unofficial stop can mean a tampered or diverted consignment long before cold-chain integrity is even in question. High-value FMCG, where pilferage at an unauthorised stop is the oldest trick in the supply chain. Cross-border freight, where a trip crosses multiple jurisdictions and \"the lock was opened near the border\" needs to be a fact the system catches, not a story told after the shipment goes missing.",
        "These aren't cargo types where a generic open/closed lock is good enough - they're exactly the cases trip-bound locking was built to handle.",
      ],
      supportTitle: "Built to Last: Tested Against Being Beaten, Not Just Used",
      supportParagraphs: [
        "A lock that only works when nobody tries to beat it isn't security - it's a formality. Most e-locks are built and tested for normal use: open, close, report status. Nobody stress-tests them against someone actually trying to defeat them, which is the one scenario where the lock's job actually matters.",
        "VIoT's E-Lock is built to keep reporting accurately through an actual forced-entry attempt - cut, pried, or bypassed - for as long as the vehicle stays in service, not just on day one out of the box. That's the specific, physical meaning \"built to last\" has to carry on this page: not a software update cycle, but hardware that still tells the truth under an attack, years into its working life.",
      ],
      supportIllustrationNote: "a cutaway or exploded view of the lock mechanism with a callout on the tamper sensor - or a simple before/after showing a forced-entry attempt still triggering an alert - works better here than a lifestyle photo of a lock on a trailer door.",
      ctaHeading: "See trip-bound locking on your own routes",
      ctaSubheading: "Tell us what you're moving and where - we'll show you what an off-route unlock attempt looks like in real time, not a generic demo.",
      formFields: "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "This is the Solutions tab page, built only on the Smart Logistics Lock product (Products tab) - not Smart Infra Locks, which is a different hardware line feeding the Smart Access Monitoring solution instead. Link to the Smart Logistics Lock product page for hardware/spec details; don't duplicate hardware specs here.",
        "Flag for whoever owns the Logistics & Supply Chain Industries page: that page currently deep-explains E-Lock capabilities in its own words. Once this page is live, that section should shrink to a short reference pointing here, rather than re-explaining tamper alerts and trip-bound locking from scratch. This was already noted as a pending revision when that page was first drafted.",
        "Scope discipline: this page does not cover temperature or cold-chain monitoring, even though cargo security and cold-chain integrity often get bundled together in logistics conversations. That's the separate Temperature & Cold-Chain Monitoring solution - cross-link rather than merge the two.",
        "Do not use the term \"AIS-140\" anywhere on this page or its footer.",
        "Do not state or imply VIoT designs or manufactures the physical lock hardware. Use ownership language (\"our hardware, end-to-end\") rather than \"designed by us\" / \"manufactured by us.\"",
        "No team or personnel content on this page.",
        "Section 5's diagram and Section 7's illustration note are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "video",
    number: "04",
    name: "Video Intelligence",
    eyebrow: "Video Intelligence",
    headline: "Footage That Warns You Before It Has to Defend You",
    lede: "Most dashcams just record, so someone reviews the footage after something has already gone wrong. VIoT's Video Intelligence catches drowsiness and distraction live, and files tamper-proof evidence for the one time you need it.",
    description: "Three camera views feed one engine. The driver gets a live alert while there's still time to react, and a tamper-proof clip gets filed into the same score Fleet Intelligence already tracks.",
    capabilities: [
      "Event-Triggered Clip Capture",
      "AI Driver-Facing Alerts (DMS)",
      "Tamper-Proof Footage / Chain of Custody",
      "Multi-Camera Coverage",
    ],
    signals: [
      "Road-facing",
      "driver-facing",
      "cabin/cargo views",
    ],
    outcomes: [
      "live alert",
      "tamper-proof clip",
      "same score Fleet Intelligence already tracks",
    ],
    solutionContent: {
      heroWhy: "the entire dashcam category is sold on after-the-fact review - footage you pull up once there's already a claim or a complaint. Leading with the live-catch capability, and naming evidence-grade footage as the backup rather than the whole pitch, separates this from \"we also sell a dashcam.\"",
      heroIllustrationNote: "a driver-facing camera view with a subtle in-cab alert overlay (e.g. a drowsiness flag) reads better here than an exterior shot of a vehicle with a camera mounted on it - show the thing that makes this different, not the hardware.",
      problemTitle: "The Problem: A Camera That Only Tells You What Already Happened",
      problemParagraphs: [
        "Most fleet dashcams solve one problem well: they record. Nobody watches that footage live, so its value only shows up after an incident - as evidence for a claim, or as a clip someone reviews once a complaint comes in. By then, the accident has already happened, the near-miss already nearly wasn't.",
        "The footage itself often doesn't help as much as it should. If a driver or a local operator can delete or edit a clip, an insurer or a court has every reason to question it - and a fleet owner has no real way to prove otherwise. Evidence that can be tampered with isn't evidence.",
        "And there's a cost most buyers don't see coming: continuous recording from multiple cameras generates enormous amounts of video, and pushing all of it over a rural or patchy mobile network is either impossibly slow or impossibly expensive. Most of that footage is never watched by anyone - it just sits there, consuming bandwidth and storage for events that never happened.",
      ],
      coversTitle: "What Video Intelligence Actually Covers",
      capabilityRows: [
        {
          name: "Event-Triggered Clip Capture",
          whatItDoes: "Automatically saves and uploads a short clip around a harsh-brake, collision, or panic-button event - not continuous full-time recording",
          whatItChanges: "Keeps the footage that matters without drowning the network in video nobody will ever watch",
        },
        {
          name: "AI Driver-Facing Alerts (DMS)",
          whatItDoes: "Detects drowsiness, distraction, or mobile phone use from the driver-facing camera and alerts the driver in real time",
          whatItChanges: "Catches the moment before the incident, not just a clip of the incident afterward",
        },
        {
          name: "Tamper-Proof Footage / Chain of Custody",
          whatItDoes: "Footage can't be deleted or edited by the driver or a local operator",
          whatItChanges: "Holds up as real evidence with an insurer or in a legal dispute, not just an internal record",
        },
        {
          name: "Multi-Camera Coverage",
          whatItDoes: "Road-facing, driver-facing, and cabin/cargo views as one system",
          whatItChanges: "One event, one correlated view - not three separate camera apps to check",
        },
      ],
      capabilityClosing: "The real argument on this page isn't any one of these rows - it's that most vendors stop at the first one. A camera that only records is a liability log. Video Intelligence is built to act before the log is even needed (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "Real-time AI alerts, not just a recording nobody reviews",
          text: "The category standard is passive: the camera records, and someone watches the footage later if they think to. VIoT's AI flags drowsiness, distraction, and phone use the moment it detects them, so the driver gets a warning while there's still time to act on it - not a clip of the incident after it's already happened.",
        },
        {
          title: "Footage you can actually trust in a dispute",
          text: "Footage a driver or local operator can delete or edit is worthless the moment anyone asks a hard question about it. VIoT's chain of custody is built so the footage can't be tampered with after the fact, which is the difference between \"we have a clip\" and \"we have evidence\" when an insurer or a court is the one asking.",
        },
        {
          title: "One score, not two apps",
          text: "A video event doesn't need its own separate dashboard. Video Intelligence events feed into the same correlated score used in Fleet Intelligence, so a harsh-braking clip and a driver's behaviour score aren't two things an ops manager has to mentally connect themselves - they're already connected.",
        },
        {
          title: "Built for the network you actually have, not the one a demo assumes",
          text: "Continuous streaming from multiple cameras assumes bandwidth most routes don't have. VIoT's event-triggered capture sends the clip that matters, not a constant feed, so it works on the same patchy rural and highway network everything else on the vehicle already has to deal with.",
        },
      ],
      engineTitle: "One Event, Two Outcomes",
      engineCaption: "three camera views converge into one Video Intelligence engine",
      engineText: "Three camera views feed one engine. The driver gets a live alert while there's still time to react, and a tamper-proof clip gets filed into the same score Fleet Intelligence already tracks.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "This isn't a feature list waiting for its first real use - Video Intelligence has already done the two things a dashcam is supposed to do when it matters. Tamper-proof footage has stood up as the deciding factor in an accident liability dispute, where the question of who was at fault came down to footage nobody could claim had been altered. And the driver-facing alerts have done the quieter, less dramatic job just as well: fleet managers using the behaviour flags to coach specific drivers on specific habits, rather than finding out about a problem only after it becomes an incident report.",
        "Those are two different jobs - one defensive, one developmental - and the same system does both without choosing one over the other.",
      ],
      supportTitle: "Built to Last: The AI Gets Sharper, Not Stale",
      supportParagraphs: [
        "A camera that ships once and never improves is already falling behind. Driving conditions, driver behaviour patterns, and the edge cases that trip up a detection model don't stay fixed, so a system frozen at its day-one accuracy slowly becomes less useful every year it's deployed, even though nothing about the hardware has visibly changed.",
        "VIoT's driver-alert models keep getting sharper through updates over the vehicle's working life. What the system catches a year in - and how reliably it avoids false alarms - is better than what it caught on day one, because the model keeps learning from the conditions it's actually deployed in, not the lab conditions it shipped with.",
        "That's the specific meaning of \"built to last\" here: not a hardware warranty, but a detection system that keeps earning the driver's trust and the fleet manager's confidence instead of slowly drifting out of date.",
      ],
      ctaHeading: "See what your current dashcam setup is missing",
      ctaSubheading: "Tell us your fleet size and how you currently handle footage - we'll show you what a live alert and a tamper-proof clip actually look like, not a generic demo.",
      formFields: "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "This is the Solutions tab page, deliberately named \"Video Intelligence\" - not \"Video Telematics,\" which is the Products tab name for the camera hardware itself. Link to the Video Telematics product page for hardware/spec details; don't duplicate hardware specs here.",
        "Cross-link this page with Fleet Intelligence in both directions: Section 4.3 here claims video events feed the same score Fleet Intelligence tracks, so a visitor should be able to move between the two pages and see that claim is actually true, not just asserted on one side.",
        "Worth flagging sitewide: there are now three Solutions pages that each touch \"driver\" data from a different angle - Fleet Intelligence (harsh braking/speeding/idling behaviour score), EV Management (driving efficiency's effect on range), and this page (drowsiness/distraction via camera). That's intentional, not an accident, but it means consistent cross-linking matters more here than on pages without that overlap - a visitor comparing tabs should see three distinct angles on driver data, not three vendors who couldn't agree on one.",
        "Do not use the term \"AIS-140\" anywhere on this page or its footer.",
        "Do not state or imply VIoT designs or manufactures the camera hardware. Use ownership language (\"our hardware, end-to-end\") rather than \"designed by us\" / \"manufactured by us.\"",
        "No team or personnel content on this page.",
        "Section 5's diagram and Section 1's illustration note are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "access-control",
    number: "05",
    name: "Smart Access Monitoring",
    eyebrow: "Smart Access Monitoring",
    headline: "A Valid Card Isn't the Same as a Valid Access",
    lede: "Most access systems only check if a card works. VIoT's Smart Access Monitoring checks if it should work - right now, for this person, at this door - and flags the moment it doesn't.",
    description: "An access attempt is checked against who the person is and when they're allowed in. A valid match opens the door and closes the log normally; anything else - wrong time, wrong door, no match - is treated as a security event and alerts in real time.",
    capabilities: [
      "Role- and Schedule-Based Entry",
      "Intrusion & Forced-Entry Alerts",
      "Visitor/Vendor Access Logging",
    ],
    signals: [
      "Role- and Schedule-Based Entry",
      "Intrusion & Forced-Entry Alerts",
      "Visitor/Vendor Access Logging",
    ],
    outcomes: [
      "opens the door and closes the log normally",
      "treated as a security event",
      "alerts in real time",
    ],
    solutionContent: {
      heroWhy: "standard access control treats \"the card scanned successfully\" as the whole answer. That's precisely the blind spot behind most insider-access incidents - a legitimate card used at an illegitimate time or place. Naming that gap first separates this from a card-reader-plus-logbook pitch.",
      heroIllustrationNote: "a simple access-point graphic showing a card scan with a clear ‘checked against role + schedule’ step before the door opens - not a generic keycard-and-turnstile stock photo.",
      problemTitle: "The Problem: Access Control That Only Checks the Card, Not the Context",
      problemParagraphs: [
        "Most access systems answer one question - is this card valid - and stop there. A valid card used at 2am by someone with no reason to be in that zone passes the same check as the same card used during a normal shift. The system has no concept of whether an access makes sense; it only knows whether the card works.",
        "Forced entry is usually worse: discovered on a log review the next morning, or when a manager happens to check camera footage, not the moment it happens. By then, whatever the breach was for has already occurred.",
        "And most sites end up running a different vendor for every site type - one system for the warehouse, another for the data centre, a logbook at the construction gate - because access control is treated as a per-site problem instead of one capability that should work the same way everywhere.",
      ],
      coversTitle: "What Smart Access Monitoring Actually Covers",
      capabilityRows: [
        {
          name: "Role- and Schedule-Based Entry",
          whatItDoes: "Checks an access attempt against who the person is and when they're allowed in, not just whether the card scans",
          whatItChanges: "A technically-valid card used at the wrong time or the wrong door gets flagged automatically, no manual review needed",
        },
        {
          name: "Intrusion & Forced-Entry Alerts",
          whatItDoes: "Fires the moment a door is forced or an unauthorised access point is breached",
          whatItChanges: "Security is notified while the breach is happening, not on the next day's log review",
        },
        {
          name: "Visitor/Vendor Access Logging",
          whatItDoes: "Logs non-employee entries - visitors, contractors, vendors - on their own separate trail",
          whatItChanges: "Replaces the paper logbook at the gate with a record that's actually searchable and trustworthy",
        },
      ],
      capabilityClosing: "The first row is what makes the other two sharper. An intrusion alert and a visitor log are both more useful once the system already understands who's supposed to be where, and when - that context is the actual product (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "Checks the context, not just the card",
          text: "A card reader answers \"is this valid,\" full stop. VIoT's system answers a harder question - is this valid right now, for this person, at this door - so a stolen or shared credential used outside its normal pattern gets caught automatically, instead of relying on someone noticing it later.",
        },
        {
          title: "The alert fires during the breach, not after it",
          text: "Most access logs are reviewed, not watched. VIoT's intrusion detection reports a forced or unauthorised entry the moment it happens, so security is responding while the person is still on-site - not reconstructing what happened from yesterday's log.",
        },
        {
          title: "One system across very different site types",
          text: "A construction yard, a data centre, and a warehouse don't usually share an access-control vendor, because each looks like a different problem. They're not - they're the same core problem (who, where, when) with different risk profiles layered on top. VIoT runs all three on one platform, so a facilities team manages one system instead of three logins and three support contracts.",
        },
      ],
      engineTitle: "Every Access Attempt Is Checked, Not Just Scanned",
      engineCaption: "only the right person at the right time opens the access point",
      engineText: "An access attempt is checked against who the person is and when they're allowed in. A valid match opens the door and closes the log normally; anything else - wrong time, wrong door, no match - is treated as a security event and alerts in real time.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "A construction yard, a data centre, and a warehouse don't look like the same problem on the surface - different footfall, different stakes, different hours - and that's exactly why running them on one platform is the harder, more useful thing to get right. A construction site's challenge is constant turnover: workers and vendors rotating daily, each needing access scoped to exactly the zones and hours they're supposed to be in. A data centre's challenge is the opposite - very few people, every one of them needing an access trail precise enough to survive a compliance review. A warehouse sits between the two: moderate turnover, high-value goods, and a loading dock that's often the weakest point in the whole site.",
        "Three different risk profiles, one system that adapts to each without becoming three different products.",
      ],
      supportTitle: "Built to Last: Hardware That Resists, a Log That Can't Be Rewritten",
      supportParagraphs: [
        "\"Built to last\" means two different things here, and a facility owner needs both. The lock and sensor hardware has to keep reporting accurately through an actual forced-entry attempt - cut, pried, bypassed - for as long as the installation is in service, not just under factory test conditions. A security system that quietly degrades under real pressure isn't a security system.",
        "The second half matters just as much and gets talked about far less: the access log itself has to be unalterable after the fact. A log that can be edited retroactively is worthless the moment it's needed for a compliance review or an investigation - at that point, nobody can tell the difference between an accurate record and a convenient one. VIoT's access log is built so entries can't be rewritten once made, which is what lets it actually hold up months or years later, not just at the time it was captured.",
      ],
      supportIllustrationNote: "a simple two-part visual - a lock withstanding a forced-entry attempt on one side, a log entry shown as permanent/timestamped on the other - communicates both halves without needing two separate sections of copy.",
      ctaHeading: "See what your current access logs would actually catch",
      ctaSubheading: "Tell us about your sites - warehouse, data centre, construction yard, or a mix - and we'll show you what a context-aware access check looks like, not a generic demo.",
      formFields: "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "This is the Solutions tab page, built on the Smart Infra Lock product (Products tab). This solution was previously called \"Access Control\" internally - the footer's Divisions group and any other sitewide references to \"Access Control\" should be renamed to \"Smart Access Monitoring\" to match. Link to the Smart Infra Lock product page for hardware/spec details; don't duplicate hardware specs here.",
        "Scope boundary, confirmed explicitly: this page covers commercial/industrial site security only - warehouses, data centres, construction yards, plants. It does not cover RFID attendance tracking or other people-presence use cases (e.g. student/staff attendance). If the Schools & Universities Industries page later adopts RFID-attendance positioning, that needs its own treatment - don't assume this Solutions page already covers it.",
        "Conceptually related to Safe Logistics (same \"checks the context, not just the state\" logic) but applied to premises and people rather than cargo and trips. Worth a cross-link for a visitor who lands on one looking for the other, but keep the content separate - one is about a vehicle's trip, this one is about a building's access point.",
        "Do not use the term \"AIS-140\" anywhere on this page or its footer.",
        "Do not state or imply VIoT designs or manufactures the lock/sensor hardware. Use ownership language (\"our hardware, end-to-end\") rather than \"designed by us\" / \"manufactured by us.\"",
        "No team or personnel content on this page.",
        "Section 5's diagram and Section 1 and 7's illustration notes are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "temperature-humidity-monitoring",
    number: "06",
    name: "Temperature & Humidity Monitoring",
    eyebrow: "Temperature & Humidity Monitoring",
    headline: "One Reading Isn't the Whole Story",
    lede: "Temperature without humidity is half a measurement. VIoT tracks both, in transit and in storage, and alerts the moment either one drifts - not when the shipment or the stock is already compromised.",
    description: "The same engine watches a vehicle in transit and a storage facility. Either one feeds the same real-time alert and the same audit-ready log - nobody has to run two systems to cover both.",
    capabilities: [
      "Real-Time Excursion Alerts (Temp + Humidity)",
      "Multi-Zone / Multi-Sensor Coverage",
      "Compliance-Ready Audit Trail",
    ],
    signals: [
      "vehicle in transit",
      "storage facility",
    ],
    outcomes: [
      "real-time alert",
      "audit-ready log",
    ],
    solutionContent: {
      heroWhy: "most cold-chain monitoring is sold as a temperature-only story, with humidity bolted on as an afterthought if it's offered at all. Leading with \"one reading isn't the whole story\" names that gap directly instead of repeating the temperature-only framing everyone already expects.",
      heroIllustrationNote: "a split visual - a vehicle in transit on one side, a storage/cold-room icon on the other, both feeding the same dashboard - communicates the transit-plus-storage scope better than a single thermometer-on-a-truck image.",
      problemTitle: "The Problem: Half a Reading, Reviewed Too Late",
      problemParagraphs: [
        "Most cold-chain monitoring tracks one number - temperature - and treats humidity, if it's tracked at all, as a secondary data point nobody really acts on. That's a real gap: plenty of goods are damaged by humidity swings well within an acceptable temperature range - electronics, certain pharmaceuticals, textiles, even packaging integrity. A system that only watches temperature is blind to the other half of what can go wrong.",
        "The second gap is timing. Most loggers record and report on a schedule - hourly, or at the next check-in - so a breach is usually discovered at delivery or during a routine audit, not while there's still time to do anything about it. A refrigerated shipment that drifted out of range two hours into a six-hour trip has already lost four hours before anyone finds out.",
        "And when a breach does get flagged, the record behind it often isn't good enough to act on with confidence - a single sensor reading for a multi-zone vehicle, or a log format that wouldn't survive a real compliance review, leaves a shipper arguing about data instead of making a decision.",
      ],
      coversTitle: "What Temperature & Humidity Monitoring Actually Covers",
      capabilityRows: [
        {
          name: "Real-Time Excursion Alerts (Temp + Humidity)",
          whatItDoes: "Instant alert the moment either reading breaches its set threshold, in transit or in storage",
          whatItChanges: "Catches a drift while there's still time to act - reroute, intervene, or fix the equipment - not after delivery",
        },
        {
          name: "Multi-Zone / Multi-Sensor Coverage",
          whatItDoes: "Separate readings for separate compartments or zones in the same vehicle or storage space",
          whatItChanges: "One shipment with two temperature zones doesn't get flattened into one misleading average reading",
        },
        {
          name: "Compliance-Ready Audit Trail",
          whatItDoes: "Logged, exportable temperature and humidity history formatted for a regulatory or quality review",
          whatItChanges: "The record holds up when a client or a regulator actually asks for it, not just on an internal dashboard",
        },
      ],
      capabilityClosing: "The fact that temperature and humidity are monitored as one system, not two, runs through all three rows - that's the real argument on this page (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "The alert fires while there's still time to act",
          text: "A breach discovered at delivery is a loss already taken. VIoT's alert fires the moment a reading crosses its threshold, whether that's two hours into a transit route or overnight in a storage facility - early enough to reroute a vehicle, dispatch a technician, or otherwise actually prevent the loss instead of just documenting it.",
        },
        {
          title: "Temperature and humidity, monitored as one system",
          text: "Most vendors solve temperature and treat humidity as an add-on, if they address it at all. VIoT monitors both as a single system from the start, which matters because plenty of real damage - to electronics, certain pharmaceuticals, packaging, textiles - happens from a humidity swing well inside an acceptable temperature range. A temperature-only system is structurally blind to that failure mode.",
        },
        {
          title: "Built to survive the audit, not just the dashboard",
          text: "An internal chart is enough to notice a problem. It usually isn't enough to prove what happened to a regulator, an insurer, or a client doing a quality review. VIoT's record is built audit-grade from the start - multi-zone, timestamped, exportable - so the same data that caught the issue internally is also the data that holds up when someone outside the company asks for it.",
        },
      ],
      engineTitle: "One System, Moving or Parked",
      engineCaption: "one engine covers both a vehicle in transit and static storage",
      engineText: "The same engine watches a vehicle in transit and a storage facility. Either one feeds the same real-time alert and the same audit-ready log - nobody has to run two systems to cover both.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "The breadth here is what makes the dual-parameter argument more than a feature checkbox. Pharmaceutical and vaccine cold chains are already running on this system, where a breach isn't just a spoiled shipment - it's a regulatory event. Perishable FMCG is on it too, where thinner margins mean a single undetected drift is a direct, immediate loss, not an abstract risk. And it protects goods where humidity, not temperature, is the real threat - electronics, certain chemicals, textiles - in both moving vehicles and static storage.",
        "Three categories that would normally be sold three different monitoring products, running on one.",
      ],
      proofIllustrationNote: "three small icons (a vaccine vial, a crate of produce, a humidity-sensitive electronics box) under one shared dashboard graphic communicates the breadth without needing three separate case-study sections.",
      supportTitle: "Built to Last: Catching Drift Before It Becomes a Lie",
      supportParagraphs: [
        "A sensor that's silently drifted out of calibration is worse than no sensor at all - it gives false confidence. Every temperature and humidity sensor drifts with age and use, slowly and invisibly, which means a reading that looks perfectly normal can simply be wrong, and nobody finds out until something has already gone bad despite the dashboard saying otherwise.",
        "VIoT keeps checking its own sensors against drift over their working life, so a reading three years in is held to the same standard as a reading on day one. That's the specific, unglamorous thing \"built to last\" means on this page: not that the hardware survives, but that what it tells you stays true for as long as it keeps telling you anything at all.",
      ],
      ctaHeading: "See what a drifted reading would have cost you",
      ctaSubheading: "Tell us what you're moving or storing - we'll show you what a real-time excursion alert and an audit-ready log actually look like, not a generic demo.",
      formFields: "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "Naming change to carry through: this solution was tracked as \"Temperature & Cold-Chain Monitoring\" in the finalized site map and earlier planning docs. It is now Temperature & Humidity Monitoring. Update the Solutions tab listing, nav, and any cross-references on other pages (including the Logistics & Supply Chain Industries page, which references this solution by name) to the new name.",
        "Scope change to carry through: this page now covers both a vehicle in transit and static storage (warehouses, cold rooms) - broader than a pure logistics/cold-chain framing. It's relevant to more than one Industries page (Pharmaceuticals & Chemicals, FMCG, Logistics & Supply Chain, and potentially Data Centres for humidity-sensitive server rooms) - cross-link from each rather than re-explaining the capability on every one.",
        "This is one of three Solutions pages fed by the IoT Sensors product (Products tab), alongside Fuel Monitoring and Load/Weight Analytics. Link to the IoT Sensors product page for hardware/spec details; don't duplicate hardware specs here.",
        "Do not use the term \"AIS-140\" anywhere on this page or its footer.",
        "Do not state or imply VIoT designs or manufactures the sensor hardware. Use ownership language (\"our hardware, end-to-end\") rather than \"designed by us\" / \"manufactured by us.\"",
        "No team or personnel content on this page.",
        "Section 5's diagram and the illustration notes in Sections 1 and 6 are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "fuel-monitoring",
    number: "07",
    name: "Fuel Monitoring",
    eyebrow: "Fuel Monitoring",
    headline: "A Fuel Drop That Doesn't Cry Wolf",
    lede: "Cheap fuel sensors either miss real theft or false-alarm on every rough road. VIoT tells you when fuel actually went missing, where, and what it's costing you - not just that the tank reads lower than it did an hour ago.",
    description: "Fuel level, refuelling events, and driving behaviour feed one engine. A theft gets a location and a timestamp; a cost gets an explanation - not three disconnected numbers that each raise their own question.",
    capabilities: [
      "Real-Time Fuel Level Monitoring",
      "Theft/Pilferage Alerts",
      "Refuelling Verification",
      "Consumption / Efficiency Analytics",
    ],
    signals: [
      "Fuel level",
      "refuelling events",
      "driving behaviour",
    ],
    outcomes: [
      "location and a timestamp",
      "cost gets an explanation",
    ],
    solutionContent: {
      heroWhy: "fuel monitoring has a trust problem before it has a theft problem - most fleet owners have already been burned by a sensor that cried wolf so often they stopped checking alerts at all. Naming that first, instead of leading with a generic \"stop fuel theft\" pitch, is what separates this from the sensor they've already learned to ignore.",
      heroIllustrationNote: "a fuel gauge graphic with a clear distinction between a 'normal fluctuation' pattern and a 'flagged drop' pattern - showing the difference the system catches - works better than a generic jerry-can or pipe-siphoning image.",
      problemTitle: "The Problem: A Sensor Nobody Trusts Anymore",
      problemParagraphs: [
        "Fuel sensors have a bad reputation for a reason. Fuel sloshes on rough roads, cheap sensors drift out of calibration, and the result is an alert that fires on a pothole as often as it fires on a real theft. Most fleet owners' honest response, after enough false alarms, is to stop reacting to the alerts at all - which defeats the entire point of having a sensor.",
        "When theft is real, it's usually discovered as a number, not an event: the tank reads lower than expected, sometime, somewhere, with no way to say when or where it actually happened. By the time anyone notices, the opportunity to catch it - or even to know which route or driver to look at - is already gone.",
        "Refuelling has its own blind spot: a fill-up logged on a receipt isn't the same as fuel that actually went into the tank, and most systems have no way to catch the difference. And the fuel a fleet loses to idling and harsh driving habits rarely gets explained at all - it just shows up as a cost nobody can fully account for.",
      ],
      coversTitle: "What Fuel Monitoring Actually Covers",
      capabilityRows: [
        {
          name: "Real-Time Fuel Level Monitoring",
          whatItDoes: "Continuous fuel-level reading per vehicle, not just a snapshot at refuel or drain events",
          whatItChanges: "Catches a drop as it happens, not as a surprise at the next check",
        },
        {
          name: "Theft/Pilferage Alerts",
          whatItDoes: "Instant alert on a sudden, unexplained fuel drop",
          whatItChanges: "Replaces \"the tank was emptier than expected\" with an actual, timestamped event",
        },
        {
          name: "Refuelling Verification",
          whatItDoes: "Logs every fill - location, quantity, time - and flags a mismatch against what was paid for or authorised",
          whatItChanges: "Closes the gap between a fuel receipt and fuel that actually went into the tank",
        },
        {
          name: "Consumption / Efficiency Analytics",
          whatItDoes: "Tracks fuel-per-km and idle-fuel waste",
          whatItChanges: "Turns \"fuel cost is high\" into a specific, addressable reason why",
        },
      ],
      capabilityClosing: "None of these four rows mean much on their own if the sensor behind them isn't trusted. That trust problem - and how VIoT solves it - is the real subject of Section 4.",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "Accuracy that earns back the trust a cheap sensor lost",
          text: "Most fuel sensors fail at the one job that matters: telling a real theft apart from fuel sloshing on a bad road. VIoT's readings are built to be reliable enough to actually act on, so an alert means something again - instead of being one more notification a fleet manager has learned to ignore.",
        },
        {
          title: "Pinpoints where it happened, not just that it happened",
          text: "\"Fuel was stolen\" isn't actionable. \"Fuel dropped here, at this stop, at this hour\" is. VIoT correlates the fuel event with location and time, so a theft becomes a specific incident someone can investigate - a route, a stop, a shift - not an unexplained number on a report.",
        },
        {
          title: "Connects fuel waste to the driving behind it",
          text: "Idling and harsh driving already show up in Fleet Intelligence's behaviour score. Fuel Monitoring ties that same behaviour to the fuel cost it's actually causing, so \"fuel cost is high\" gets a specific, addressable reason instead of staying a mystery line item - one explanation across both pages, not two separate stories that happen to be about the same vehicle.",
        },
      ],
      engineTitle: "One Engine, Not Three Mysteries",
      engineCaption: "fuel level, refuelling, and driving data converge into one fuel intelligence engine",
      engineText: "Fuel level, refuelling events, and driving behaviour feed one engine. A theft gets a location and a timestamp; a cost gets an explanation - not three disconnected numbers that each raise their own question.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "Fuel Monitoring earns its keep most visibly in the two fleet types where fuel cost and fuel risk are both highest. Long-haul trucking, where a highway refuelling stop is the classic pilferage opportunity and the distances involved make fuel the single largest operating cost on the route. And heavy equipment running off-road - construction and mining - where fuel volumes are large, sites are remote, and a theft can go unnoticed for far longer than it ever could on a city route.",
        "These are also the two fleet types where a false alarm is most expensive to ignore and most tempting to dismiss - which is exactly why the accuracy argument in Section 4 matters more here than anywhere else on the site.",
      ],
      supportTitle: "Built to Last: A Reading That Stays Trustworthy",
      supportParagraphs: [
        "A fuel sensor that's quietly drifted out of calibration either misses real theft or cries wolf on every rough road - and either failure mode costs a fleet owner the one thing a sensor exists to earn: being believed. That drift doesn't announce itself; it just slowly makes the readings a little more wrong, a little more often.",
        "VIoT keeps checking its own sensors against drift over their working life, so the reading stays trustworthy long after installation - not just during the first few accurate months before anyone noticed the sensor was ageing. That's what \"built to last\" means here: not that the hardware survives, but that the alert it sends is worth acting on for as long as the vehicle is on the road.",
      ],
      ctaHeading: "See what your fuel sensor is actually missing",
      ctaSubheading: "Tell us your fleet type and route pattern - we'll show you a location-tagged theft alert, not a generic demo.",
      formFields: "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "This is one of three Solutions pages fed by the IoT Sensors product (Products tab), alongside Temperature & Humidity Monitoring and Load/Weight Analytics. Link to the IoT Sensors product page for hardware/spec details; don't duplicate hardware specs here.",
        "Cross-link to Fleet Intelligence for the Section 4.3 claim (fuel waste tied to driving behaviour) - the same way EV Management and Video Intelligence already cross-link to it for their own driver-data overlaps. Worth noting now that three separate Solutions pages point back to Fleet Intelligence's behaviour score: that's fine and intentional, but Fleet Intelligence's own page shouldn't try to explain all three connections itself - each referencing page carries its own half of the story, Fleet Intelligence stays focused on its own content.",
        "Do not use the term \"AIS-140\" anywhere on this page or its footer.",
        "Do not state or imply VIoT designs or manufactures the sensor hardware. Use ownership language (\"our hardware, end-to-end\") rather than \"designed by us\" / \"manufactured by us.\"",
        "No team or personnel content on this page.",
        "Section 5's diagram and Section 1's illustration note are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "load-weight-analytics",
    number: "08",
    name: "Load & Weight Analytics",
    eyebrow: "Load & Weight Analytics",
    headline: "Caught at the Yard, Not at the Checkpoint",
    lede:
      "A legal total weight can still be an illegal axle load. VIoT checks both before the vehicle leaves - so the fine, the hold-up, or the rollover never happens in the first place.",
    description:
      "Every load is checked against both the total limit and the axle-wise distribution before departure. Within limits, the trip is cleared and logged normally; over limit, the vehicle is held and flagged at the yard - not hours down the road.",
    capabilities: [
      "Real-Time Overload Alerts (Total + Axle-Wise)",
      "Load-Shift / Imbalance Alerts",
      "Utilization / Empty-Running Analytics",
    ],
    signals: [
      "total weight",
      "axle-wise distribution",
      "cargo shifting mid-transit",
      "vehicle utilization",
    ],
    outcomes: [
      "the trip is cleared and logged normally",
      "the vehicle is held and flagged at the yard",
      "Flags a real-time rollover risk",
      "Turns wasted capacity into a visible, trackable cost",
    ],
    solutionContent: {
      heroWhy:
        'the standard failure mode in this category is finding out about an overload at a weighbridge checkpoint, hours into a trip, when the only options left are a fine or a costly reshuffle on the roadside. Leading with "caught at the yard" names the moment that actually matters - before departure, not after.',
      heroIllustrationNote:
        "a simple yard/loading-bay graphic with a weight readout showing both a total figure and a per-axle breakdown - reads better than a generic weighbridge or truck-scale stock photo.",
      problemTitle: "The Problem: Found Out Too Late, and Only Half the Picture",
      problemParagraphs: [
        "Most fleets find out about an overload at a weighbridge checkpoint - hours into the trip, with a fine already earned and a reshuffle now blocking the road. By the time the number shows up, there's no good option left, only a less bad one.",
        "Total weight is also only half the question. A load can be perfectly legal by total weight and still be an illegal, dangerous axle distribution - too much weight on one axle, not enough on another - and most systems never check for that at all. They pass a load that a proper inspection would have failed.",
        "And weight isn't just a compliance number. Cargo that shifts mid-transit changes a vehicle's center of gravity in ways that can cause a rollover, and that's a real-time safety event, not a paperwork issue - yet it's rarely monitored at all. Meanwhile, on the other end of the spectrum, a fleet running trips at half capacity is bleeding money nobody's tracking, because empty capacity has never been treated as a cost worth measuring.",
      ],
      coversTitle: "What Load/Weight Analytics Actually Covers",
      capabilityRows: [
        {
          name: "Real-Time Overload Alerts (Total + Axle-Wise)",
          whatItDoes:
            "Checks a load against the legal limit by total weight and by axle distribution, before departure",
          whatItChanges:
            "Catches the overload - and the axle violation a total-weight-only check would miss - at the yard, not the checkpoint",
        },
        {
          name: "Load-Shift / Imbalance Alerts",
          whatItDoes:
            "Detects cargo shifting mid-transit, changing the vehicle's balance",
          whatItChanges:
            "Flags a real-time rollover risk, not just a compliance number discovered after the fact",
        },
        {
          name: "Utilization / Empty-Running Analytics",
          whatItDoes:
            "Tracks how full a vehicle actually runs across its trips",
          whatItChanges:
            "Turns wasted capacity into a visible, trackable cost instead of an assumed inefficiency nobody measures",
        },
      ],
      capabilityClosing:
        "The first row carries the most weight on this page, deliberately - catching a violation before the vehicle leaves the yard is a fundamentally different proposition from catching it on the road (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "Caught before departure, not at the checkpoint",
          text:
            "An overload found at a weighbridge only documents a problem that's already costing money and blocking the route. VIoT's check happens at the yard, before the vehicle leaves, so the fine and the roadside reshuffle never happen - the load gets corrected where correcting it is still easy.",
        },
        {
          title: "Axle-level precision, not just a total",
          text:
            "A total-weight check can wave through a load that's dangerously uneven across axles. VIoT checks the distribution, not just the sum, so a legal-looking total that's actually an axle violation gets caught - the detail most systems never look for in the first place.",
        },
        {
          title: "A mid-transit safety alert, not just a compliance number",
          text:
            "Load-shift detection isn't about avoiding a fine - it's about catching a change in the vehicle's balance before it becomes a rollover. That's a different category of alert from a weight violation, and VIoT treats it with the urgency a safety event deserves, not the urgency of a paperwork issue.",
        },
        {
          title: "Empty capacity becomes a number, not a shrug",
          text:
            'Most fleets have no real visibility into how much they\'re paying to run half-empty. VIoT turns utilization into a tracked, visible figure, so "we\'re probably underutilized somewhere" becomes a specific number someone can actually act on.',
        },
      ],
      engineTitle: "Caught at the Yard, Not the Checkpoint",
      engineCaption:
        "a load clears to depart only after passing a total and axle-wise weight check",
      engineText:
        "Every load is checked against both the total limit and the axle-wise distribution before departure. Within limits, the trip is cleared and logged normally; over limit, the vehicle is held and flagged at the yard - not hours down the road.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "This matters most where overload is a constant, almost routine temptation. Heavy goods and construction material haulage, where every extra ton on the truck is an extra ton of margin until it's a fine or a failed inspection. And bulk and mining transport, where axle-load compliance isn't an occasional risk - it's a routine checkpoint reality on nearly every run.",
        "These are also the fleet types where load-shift matters most: heavy, dense, often loosely secured cargo is exactly what turns a shift in balance into a real stability risk, not a minor inconvenience.",
      ],
      supportTitle: "Built to Last: A Number That Stays Trustworthy",
      supportParagraphs: [
        "A weight reading that's quietly drifted out of calibration either misses a real overload or flags a legal load as a violation - and both failures are expensive in their own way, one in fines and risk, the other in a trip held up for nothing. Weight sensors take constant mechanical stress from loading and unloading, so drift here isn't a rare edge case; it's the expected direction things move without active correction.",
        'VIoT keeps checking its own sensors against drift over their working life, so the number stays trustworthy long after installation - not just in the first few months before wear started affecting the reading. That\'s what "built to last" means on this page: a figure the yard team can keep trusting, year after year, not just on installation day.',
      ],
      ctaHeading: "See what a pre-departure check would have caught",
      ctaSubheading:
        "Tell us what you're hauling and your typical load pattern - we'll show you a total-plus-axle check in action, not a generic demo.",
      formFields:
        "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        "This is the third of three Solutions pages fed by the IoT Sensors product (Products tab), alongside Temperature & Humidity Monitoring and Fuel Monitoring. Link to the IoT Sensors product page for hardware/spec details; don't duplicate hardware specs here.",
        "Section 5's diagram visualizes only the pre-departure overload check - the first of the page's three capabilities. Load-Shift/Imbalance Alerts and Utilization/Empty-Running Analytics are covered in writing (Sections 2, 3, 4, 6) but have no visual of their own. Worth giving at least one of them a supporting graphic so the page doesn't read as if the diagram is the whole story.",
        'Loose cross-link opportunity, not a strict overlap: utilization/empty-running analytics touches route planning, which is also part of Fleet Intelligence\'s route & geofence intelligence capability. Not worth merging the two, but a cross-link could help a visitor connect "underutilized trips" with "route intelligence" if that\'s a sales angle worth making explicit.',
        'Do not use the term "AIS-140" anywhere on this page or its footer.',
        'Do not state or imply VIoT designs or manufactures the sensor hardware. Use ownership language ("our hardware, end-to-end") rather than "designed by us" / "manufactured by us."',
        "No team or personnel content on this page.",
        "Section 5's diagram and Section 1's illustration note are guidance for creative execution, not final visual specs.",
      ],
    },
  },
  {
    slug: "industrial-automation",
    number: "09",
    name: "Industrial Automation",
    eyebrow: "Industrial Automation",
    headline: "Every Asset, Indoors and Out, on One System",
    lede:
      "Most asset tags work in the yard or on the floor, never both. VIoT tracks location, usage, and condition across your whole site - one system, not a GPS tag for the yard and a different one for the plant.",
    description:
      "Every asset movement is checked against its authorised zone. Movement inside that zone is tracked normally and the record updates; movement outside it is flagged as unauthorised and alerted immediately, whether the asset is indoors or out.",
    capabilities: [
      "Asset Location Tracking (Indoor + Outdoor)",
      "Utilization / Idle Tracking",
      "Asset Health/Condition Alerts",
      "Unauthorised Movement Alerts",
    ],
    signals: [
      "Asset Location Tracking (Indoor + Outdoor)",
      "Utilization / Idle Tracking",
      "Asset Health/Condition Alerts",
      "Unauthorised Movement Alerts",
    ],
    outcomes: [
      "No blind spot where an asset crosses from outdoor to indoor or back",
      'Turns "we probably have enough equipment" into a real, checkable number',
      "Catches a developing fault before it becomes a breakdown, not after",
      "Equipment loss becomes an alert at the moment it happens, not a surprise at the next inventory count",
    ],
    solutionContent: {
      heroWhy:
        'the standard failure mode in industrial asset tracking is a system built for one environment - GPS for outdoors, a different tech for indoors - that breaks the moment an asset crosses that line, which it does constantly on a real site. Naming "indoors and out, on one system" up front addresses the gap before anyone has to ask about it.',
      heroIllustrationNote:
        "a single site map showing both an outdoor yard and an indoor plant floor, with the same asset icon tracked seamlessly across both - communicates the core claim better than a generic forklift-with-a-tag image.",
      problemTitle: "The Problem: A Tag That Only Works Half the Site",
      problemParagraphs: [
        "Most asset tracking is built around one technology for one environment - GPS that works in the yard and goes blind the moment an asset moves indoors, or an indoor system that has no idea where anything is once it's loaded onto a truck or left on the lot. On a real industrial site, assets cross that line constantly, and most tracking systems simply stop working when they do.",
        "Even when location works, it's usually the only question being answered. Knowing where a forklift is doesn't tell you whether it's actually being used or sitting idle half the shift - and idle, underused equipment is one of the most common hidden costs on any site, invisible because nobody's measuring it.",
        "And equipment failure is still mostly reactive: a machine breaks down, and only then does anyone look into why. Meanwhile, assets without any tracking at all tend to surface as a problem exactly once - at the next physical inventory count, when something everyone assumed was still on-site turns out not to be.",
      ],
      coversTitle: "What Industrial Automation Actually Covers",
      capabilityRows: [
        {
          name: "Asset Location Tracking (Indoor + Outdoor)",
          whatItDoes:
            "Tracks where an asset actually is across the plant floor and the yard, as one continuous system",
          whatItChanges:
            "No blind spot where an asset crosses from outdoor to indoor or back",
        },
        {
          name: "Utilization / Idle Tracking",
          whatItDoes:
            "Tracks whether an asset is actually in use or sitting idle",
          whatItChanges:
            'Turns "we probably have enough equipment" into a real, checkable number',
        },
        {
          name: "Asset Health/Condition Alerts",
          whatItDoes:
            "Flags a maintenance issue or abnormal condition on the asset itself",
          whatItChanges:
            "Catches a developing fault before it becomes a breakdown, not after",
        },
        {
          name: "Unauthorised Movement Alerts",
          whatItDoes:
            "Flags an asset leaving its designated zone or site without authorisation",
          whatItChanges:
            "Equipment loss becomes an alert at the moment it happens, not a surprise at the next inventory count",
        },
      ],
      capabilityClosing:
        "The first row is what makes the other three possible at all - utilization, health, and unauthorised movement are all built on top of knowing where the asset actually is, continuously, wherever it happens to be (Section 4).",
      differenceTitle: "How VIoT Does This Differently",
      differences: [
        {
          title: "Indoors and outdoors, one system",
          text:
            "Most tracking technology is built for one environment and breaks at its edge - GPS that goes blind indoors, or an indoor system with no outdoor coverage. VIoT tracks an asset continuously across both, so a forklift that moves from the plant floor to the yard and back doesn't disappear from the system at the doorway.",
        },
        {
          title: "Versatile enough for very different assets",
          text:
            "A system built around one asset class - only heavy machinery, or only small tools - gets stretched thin the moment a site's real inventory is more varied than that. VIoT's platform handles both ends of that range on one system, so a site doesn't need a separate tracking solution for its cranes and its hand tools.",
        },
        {
          title: "Location plus utilization, not just a dot on a map",
          text:
            "Most asset trackers answer one question: where is it. VIoT also answers whether it's actually being used - which is the question that actually saves money. Knowing a forklift's location is interesting; knowing it's been idle for six of eight hours is actionable.",
        },
      ],
      engineTitle: "Tracked Everywhere, Flagged Where It Shouldn't Be",
      engineCaption:
        "an asset moving inside its authorised zone is tracked normally; leaving it fires an alert",
      engineText:
        "Every asset movement is checked against its authorised zone. Movement inside that zone is tracked normally and the record updates; movement outside it is flagged as unauthorised and alerted immediately, whether the asset is indoors or out.",
      proofTitle: "Where This Is Proven",
      proofParagraphs: [
        "This earns its place most clearly on sites where equipment is expensive, mobile, and easy to lose track of. Manufacturing plants, where tools and equipment move between work areas constantly and idle time on a single costly machine can go unnoticed for a full shift. Construction sites, where machinery moves between sites entirely, and an asset \"somewhere on-site\" can just as easily mean an asset that's quietly left it.",
        "Both are environments where the indoor/outdoor split in Section 4 isn't a technical detail - it's the actual, daily reality of where equipment goes.",
      ],
      supportTitle: "Built to Last: Built for the Floor, Not a Demo",
      supportParagraphs: [
        "A tracker that fails in the one environment it's meant for isn't a tracker. Dust, vibration, heat, and the rough handling that comes standard on a working plant floor or a construction site are exactly the conditions a lot of asset-tracking hardware quietly isn't built for - it works fine in a clean test, then degrades fast once it's actually deployed.",
        'VIoT\'s asset trackers are built for those real conditions from the start, not adapted to them after the fact, so they keep reporting accurately for the working life of the asset - not just for the first few weeks before dust and vibration start taking their toll. That\'s what "built to last" means here: hardware that survives the job it was actually bought to do.',
      ],
      ctaHeading: "See what's actually idle on your site right now",
      ctaSubheading:
        "Tell us what equipment you're tracking and where - we'll show you indoor-outdoor tracking and a real utilization number, not a generic demo.",
      formFields:
        "unchanged from the sitewide enquiry form (name, company, fleet size, phone/email, message).",
      implementationNotes: [
        'This is the Solutions tab page built on the Asset Trackers product (Products tab) - the broadest-application page of the nine, by design, since this is where "other applications of the asset tracker" beyond the primary verticals live. Link to the Asset Trackers product page for hardware/spec details; don\'t duplicate hardware specs here.',
        "Keep the page's examples general enough to apply across multiple Industries (Construction, Mining, FMCG, Data Centres, Smart Infrastructure), not just the two depth examples named in Section 6. Manufacturing and construction are the proof points, not the scope boundary.",
        "Section 5's diagram covers only Unauthorised Movement Alerts, the fourth of the page's four capabilities. Utilization/Idle Tracking and Asset Health/Condition Alerts are covered in writing (Sections 2, 3, 4) but have no visual of their own - same pattern flagged on the Load/Weight Analytics page, worth addressing the same way.",
        'Two cross-link opportunities worth making explicit: Asset Health/Condition Alerts here is conceptually the same idea as Fleet Intelligence\'s Maintenance & Health Alerts, just applied to non-vehicle equipment instead of vehicles. And Unauthorised Movement Alerts here is the same "checks the context, not just the state" logic as Smart Access Monitoring, applied to a moving asset instead of a fixed door. Neither needs merging, both are worth a cross-link.',
        'Do not use the term "AIS-140" anywhere on this page or its footer.',
        'Do not state or imply VIoT designs or manufactures the tracker hardware. Use ownership language ("our hardware, end-to-end") rather than "designed by us" / "manufactured by us."',
        "No team or personnel content on this page.",
        "Section 5's diagram and Section 1's illustration note are guidance for creative execution, not final visual specs.",
      ],
    },
  },
];

export function getPlatformModule(slug: string) {
  return platformModules.find((item) => item.slug === slug);
}
