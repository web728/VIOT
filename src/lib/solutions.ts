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

export type Solution = {
  slug: string;
  number: string;
  name: string;
  headline: string;
  lede: string;
  priorities: string[];
  industryContent?: IndustryPageContent;
};

export const solutions: Solution[] = [
  {
    slug: "logistics-supply-chain",
    number: "01",
    name: "Logistics & Supply Chain",
    headline: "Run Your Fleet. Not Four Vendor Logins.",
    lede:
      "Most 3PLs and freight transporters run their vehicles, their locks, and their fuel sensors on separate systems from separate vendors. VIoT runs all of it on one platform built for how freight actually moves.",
    priorities: [
      "Fleet Intelligence",
      "Safe Logistics",
      "Fuel Monitoring",
      "Load/Weight Analytics",
    ],
    industryContent: {
      heroWhy:
        "the real daily pain for a 3PL or freight transporter isn't any single capability gap - it's running the business across a stack of disconnected tools that were never built to talk to each other. Naming that directly, instead of opening with a generic \"track your fleet\" promise, speaks to an operator who already knows exactly what that fragmentation costs them.",
      heroIllustrationNote:
        "a single dashboard view with distinct but connected panels (vehicle location, cargo lock status, fuel level) - visually making the \"one platform\" point - reads better than a generic truck-on-a-highway image.",
      problemTitle: "The Problem: Thin Margins, Fragmented Tools",
      problemParagraphs: [
        "3PL and freight transport runs on some of the thinnest margins in the industry, which makes every inefficiency a direct hit to the bottom line - and most fleets are carrying more inefficiency than they realise, spread across a stack of tools that were never designed to work together. A GPS tracker from one vendor, a cargo lock from another, a fuel sensor from a third - three logins, three support contracts, and no single view of what's actually happening on a given trip.",
        "The costs that stack has to absorb are specific and recurring: an overload fine at a checkpoint that a pre-departure check would have prevented, fuel that quietly disappears on a long route with no way to say where, cargo that reaches its destination fine except for the one shipment that didn't, and no way to prove what actually happened when a client disputes it.",
        "And underneath all of it is an industry with constant driver and vehicle turnover. A system complicated enough to need a dedicated person just to run it doesn't survive that turnover - it gets quietly abandoned the first time the person who understood it leaves.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. What matters here is why each one earns its place in a 3PL or freight transporter's stack specifically.",
      capabilityRows: [
        {
          name: "Fleet Intelligence",
          whyItMatters:
            "The base layer for any fleet-heavy operation - driver behaviour, route deviation, and maintenance alerts all feed into the one score an ops team actually needs when running dozens of vehicles across dozens of routes",
        },
        {
          name: "Safe Logistics",
          whyItMatters:
            "Cargo security isn't optional in freight - a trip-bound lock that flags an off-route unlock is the difference between a client who trusts your network and one who doesn't",
        },
        {
          name: "Fuel Monitoring",
          whyItMatters:
            "On long-haul routes, fuel is one of the largest controllable costs - and the easiest one to quietly lose to pilferage or inefficiency without a system built to catch it",
        },
        {
          name: "Load/Weight Analytics",
          whyItMatters:
            "A checkpoint fine or a rejected load is a cost that a pre-departure check prevents entirely - caught at the yard, not discovered on the highway",
        },
      ],
      mappingClosing:
        "Four capabilities, all live on one platform - which is the actual argument of this page (Section 4).",
      differenceTitle: "How VIoT Does Logistics Differently",
      differences: [
        {
          title: "One platform, not four vendors",
          text:
            "This isn't a promise - it's four live capabilities running on one system, with one login and one support relationship behind all of them. A 3PL doesn't reconcile a GPS vendor's data against a lock vendor's alerts against a fuel vendor's report; it's already one view, because it was never four separate products in the first place.",
        },
        {
          title: "Built for how freight actually moves, not a fixed route",
          text:
            "A logistics operation isn't one vehicle running one route forever - it's a constantly shifting mix of clients, routes, and vehicles. VIoT is built around that reality: capabilities that work whether a vehicle ran the same route yesterday or a completely different one today, rather than a system tuned for a single predictable use case and stretched to cover the rest.",
        },
      ],
      engineTitle: "One Platform, Four Capabilities",
      engineCaption: "one platform at the centre, four capabilities radiating out",
      engineText:
        "Fleet Intelligence, Safe Logistics, Fuel Monitoring, and Load/Weight Analytics all run on the same VIoT platform - one login, one support relationship, one view of a trip instead of four disconnected ones.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "Logistics is a hard industry to fake reliability in - a platform either survives a 20-hour highway haul through dead zones, or the fleet manager finds out the hard way, at the worst possible time, with a customer on the phone asking where their shipment is. This is where VIoT's logistics deployments are proven, specifically:",
      proofPoints: [
        {
          title: "Long-haul, not just city routes.",
          text:
            "Our hardware and connectivity are built for vehicles that spend days outside network coverage, not just last-mile vans that are back at a depot every night. Data queues on the device and syncs the moment signal returns - nothing is lost to a dead zone, and nothing requires the driver to do anything differently.",
        },
        {
          title: "Multi-stop, multi-handler visibility.",
          text:
            "Freight movement isn't point A to point B - it's a chain of pickups, drop-offs, and handoffs, often across different drivers and sub-contracted vehicles. VIoT's platform holds the full chain of custody for a single shipment, not just a single vehicle's single trip, so a dispute about where something went wrong can actually be answered.",
        },
        {
          title: "Built with fleet owners, not just sold to them.",
          text:
            "Our deployment process starts with how a specific fleet actually runs - route patterns, cargo types, existing checkpoint and compliance workflows - not a generic install. That's why adoption holds past the first month, when the novelty wears off and the system either fits how dispatch and drivers actually work, or gets quietly ignored.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - long-haul reliability, chain-of-custody visibility, fleet-specific onboarding. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built for Thin Margins and High Turnover",
      supportIntro:
        "Freight and 3PL operations run on margins that don't absorb waste - not wasted fuel, not wasted driver hours, and not a telematics system that needs babysitting on top of everything else dispatch is already managing. Two realities shape how VIoT is built for this industry specifically:",
      supportPoints: [
        {
          title: "Driver and vehicle turnover is constant, so the system can't depend on any one person.",
          text:
            "A fleet that loses or rotates drivers every few months can't run on a platform that needs a trained specialist to operate it. VIoT's dashboards and alerts are built to be read by whoever is on shift that day - a new driver, a new dispatcher - without a learning curve or a handover document.",
        },
        {
          title: "Margins don't fund a second team to manage the system.",
          text:
            "We don't sell a platform and leave the fleet to figure out the rest. VIoT stays engaged after go-live - proactively checking in on how the system is actually being used, not waiting for a complaint - so a struggling fleet owner doesn't quietly stop using half the features within a year because nobody showed them, or because a hardware issue went unresolved too long to bother reporting again.",
        },
      ],
      supportClosing:
        "The result is a system fleet owners keep running for years, not one that gets switched off after the first renewal when nobody remembers why it was bought.",
      supportIllustrationNote:
        "a simple before/after or two-column visual - \"fragile system\" (depends on one trained person, no support after sale) vs. \"VIoT\" (anyone can run it, we stay involved). Keep it plain and confident, not alarmist.",
      ctaHeading: "Run Your Fleet on One Platform",
      ctaSubheading:
        "Talk to us about what your fleet actually deals with - long hauls, multiple handlers, thin margins - and we'll show you how VIoT fits it.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "This doc supersedes the old Logistics & Supply Chain spec. An earlier content-rewrite doc for this page exists at the old artifact link (titled \"Logistics & Supply Chain Content Rewrite Spec\") and deep-explains E-Lock and cold-chain capability directly on the page - that approach is now replaced by this doc, which references the relevant Solutions pages instead of re-explaining them. Please build from THIS doc only; the old one should not go to development.",
        "Audience is narrowed to 3PL/freight transporters and fleet owners. FMCG/retail distribution and last-mile delivery are deliberately NOT covered here - FMCG now has its own separate Industries page, and covering it here would duplicate content across two pages.",
        "Section 3's capability table links to four Solutions pages: Fleet Intelligence, Safe Logistics, Fuel Monitoring, and Load/Weight Analytics. Each [Name](#) placeholder should be swapped for the live URL of that Solutions page once routes are final - do not write capability explanations on this page itself.",
        "Temperature & Humidity Monitoring is intentionally NOT featured as a headline capability on this page. Cold-chain logistics is a distinct use case covered on its own Solutions page and, where relevant, on the Pharmaceuticals & Chemicals Industries page - avoid adding it here to prevent overlap.",
        "Diagram (Section 5) uses a new hub-and-spoke pattern (one central \"VIoT / One Platform\" node, four capability nodes around it) - distinct from the convergence and decision-flow diagrams used on the Solutions pages. Screenshot-verified clean, no overlap.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
  },
  {
    slug: "pharmaceuticals-chemicals",
    number: "02",
    name: "Pharmaceuticals & Chemicals",
    headline: "Every Degree, Every Door, on the Record",
    lede:
      "Pharmaceuticals and chemicals don't get a second chance when the cold chain breaks or the wrong person opens the wrong door. VIoT keeps a continuous, audit-ready record of both - temperature, access, and movement - on one platform.",
    priorities: [
      "Temperature & Humidity Monitoring",
      "Safe Logistics",
      "Smart Access Monitoring",
      "Fleet Intelligence",
    ],
    industryContent: {
      heroWhy:
        "Pharma and chemicals buyers aren't shopping for a dashboard - they're shopping for something that will hold up when a regulator, auditor, or client asks \"prove it.\" \"On the Record\" signals that VIoT's value is the evidence trail itself, not just the alert. \"Every Degree, Every Door\" names the two things that actually get audited in this industry: temperature excursions and access control - concretely, not generically.",
      heroIllustrationNote:
        "a clean, clinical visual - a shipment or storage unit with two live indicators (a temperature reading, a lock/access status), both feeding into a single timestamped record. Calm, precise, lab-adjacent tone - not industrial, not trucking-heavy imagery.",
      problemTitle: "The Problem",
      problemParagraphs: [
        "A vaccine shipment that spends 40 minutes above 8°C doesn't look any different when it arrives. The damage is invisible until a potency test fails downstream, or worse, until it doesn't fail and gets administered. Most cold-chain monitoring today checks temperature at pickup and delivery - two data points standing in for a multi-hour, multi-handler journey where the excursion could have happened anywhere in between, to anyone's shipment.",
        "Chemical storage and distribution carries a parallel risk with a different face: controlled or hazardous substances sitting in a warehouse where \"who accessed this and when\" is the question that matters, but is usually answered by a logbook someone fills in after the fact. A logbook doesn't stop the wrong person from walking in - it just gives you a weak story to tell afterward.",
        "Both problems converge on the same audit moment: a regulator, a client's QA team, or an internal compliance review asking for proof - not an assurance, a record. Companies that can produce one in minutes close the review and move on. Companies that can't spend weeks reconstructing what happened from fragments, and sometimes can't reconstruct it at all.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. Here's why each one matters specifically for pharmaceuticals and chemicals:",
      capabilityRows: [
        {
          name: "Temperature & Humidity Monitoring",
          whyItMatters:
            "Continuous, gap-free excursion tracking across the full journey - not just pickup and delivery - so a breach is caught and timestamped, not discovered downstream.",
        },
        {
          name: "Safe Logistics",
          whyItMatters:
            "Tamper-evidence on high-value or controlled shipments in transit, so a diverted or opened consignment is flagged the moment it happens, not during reconciliation.",
        },
        {
          name: "Smart Access Monitoring",
          whyItMatters:
            "Context-aware access control on storage and warehouse facilities - who entered, when, and whether it matches an authorized window - replacing the after-the-fact logbook.",
        },
        {
          name: "Fleet Intelligence",
          whyItMatters:
            "Route and driver behaviour visibility for distribution fleets, so a deviation or unsafe handling pattern surfaces before it becomes a compliance incident.",
        },
      ],
      differenceTitle: "How VIoT Does Pharma & Chemicals Differently",
      differences: [
        {
          title: "One record, not four data sources stitched together at audit time",
          text:
            "Most operations piece together an audit response from a temperature logger's export, a security guard's register, and a fleet tracker's trip history - three systems that don't talk to each other, reconciled by a person under time pressure. VIoT ties temperature, access, and movement to the same shipment or facility timeline from the start, so the audit response is a query, not a reconstruction project.",
        },
        {
          title: "The excursion is caught mid-journey, not discovered at the dock",
          text:
            "A breach that's caught in real time can be acted on - rerouted, re-iced, flagged to the receiving party before the shipment arrives. A breach discovered at delivery is just a loss already taken. VIoT's monitoring runs continuously through the full journey, not at checkpoints, so the moment matters more than the summary.",
        },
        {
          title: "Access control that understands context, not just presence",
          text:
            "A logbook records that someone entered. It doesn't know if that person was authorized for that door, at that hour, for that purpose. VIoT's access monitoring is built to carry that context - so an out-of-window entry to a controlled-substance storage area is flagged as an event, not buried in a list of routine entries.",
        },
        {
          title: "Records built to survive scrutiny, not just generate alerts",
          text:
            "An alert tells someone something happened right now. An audit asks what happened three months ago, and whether the response at the time was documented. VIoT's records are built for retrieval months or years later - timestamped, unaltered, tied to the specific shipment or access event - because that's the version of the question regulators and client QA teams actually ask.",
        },
      ],
      engineTitle: "One Record, Four Signals",
      engineCaption: "four signals, one compliance record",
      engineText:
        "Temperature, tamper status, access events, and route data all tie to the same timestamped record, so an auditor's question is answered by a query, not a reconstruction.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "Pharma and chemicals buyers don't take a vendor's word for reliability - they test it against the worst day: the excursion that almost got missed, the audit that landed with no warning. VIoT's deployments in this industry are proven on exactly those terms:",
      proofPoints: [
        {
          title: "Continuous coverage, not checkpoint sampling.",
          text:
            "Our monitoring runs for the full duration of a shipment or storage period - not just at pickup, delivery, or scheduled checks - so a breach is caught at the moment it happens, wherever it happens.",
        },
        {
          title: "Records that survive the actual audit, not a mock one.",
          text:
            "VIoT's records are built to the level of detail a real regulatory or client QA review asks for: who, what, when, down to the event. That's a different bar than a dashboard built to look complete in a sales demo.",
        },
        {
          title: "Deployed around existing compliance workflows, not instead of them.",
          text:
            "We fit into how a facility already handles SOPs, access protocols, and reporting - we don't ask a compliance team to change their process to match our software.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - continuous coverage, audit-grade records, fits existing compliance workflow. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built for Regulatory Confidence Over Time",
      supportIntro:
        "Compliance requirements in pharma and chemicals don't stay still - they tighten. A system that barely clears today's audit is a liability against tomorrow's. VIoT is built so the record itself gets more useful with time, not less:",
      supportPoints: [
        {
          title: "The record outlasts the reason you first needed it.",
          text:
            "A shipment's temperature log or a facility's access history isn't discarded once the delivery is confirmed or the shift ends - it stays retrievable, because the question of \"what happened on this date\" can resurface months later, from a regulator, a client, or an internal review.",
        },
        {
          title: "We stay ahead of what gets asked for, not just what's asked for today.",
          text:
            "As compliance expectations evolve - finer-grained logging, faster retrieval, new reporting formats - we work with clients to keep the system matching what the next audit will actually demand, rather than leaving them to find the gap during a review.",
        },
        {
          title: "Ongoing check-ins, not a one-time install.",
          text:
            "We stay engaged after deployment, proactively asking how the system is holding up against real compliance work - not waiting for an audit failure to find out something wasn't being captured the way it should have been.",
        },
      ],
      supportIllustrationNote:
        "a simple upward-trending visual - a timeline showing the compliance bar rising over time, with VIoT's record-keeping staying ahead of it rather than catching up. Confident, not alarmist.",
      ctaHeading: "Put Your Compliance Record on Autopilot",
      ctaSubheading:
        "Tell us about your cold-chain, storage, or distribution setup, and we'll show you how VIoT ties it all to one audit-ready record.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "Audience spans both pharma and chemicals, deliberately. The two verticals share the same core problem (cold-chain/storage integrity plus access/compliance proof), so this page treats them as one combined industry rather than splitting into two pages. If sales feedback later shows the two audiences need distinctly different messaging, this page can be split - flagging that possibility now rather than assuming it.",
        "Section 3's capability table links to four Solutions pages: Temperature & Humidity Monitoring, Safe Logistics, Smart Access Monitoring, and Fleet Intelligence. Swap each [Name](#) placeholder for the live Solutions page URL once routes are final - do not write capability explanations on this page itself.",
        "Overlap flag: Temperature & Humidity Monitoring. This is the primary capability for this industry, unlike the Logistics & Supply Chain Industries page where it was deliberately left out. No conflict, just noting the difference in emphasis across the two pages so it isn't \"fixed\" to match.",
        "Overlap flag: Smart Access Monitoring. This page is the first Industries page to feature Smart Access Monitoring prominently (it maps to regulated storage/warehouse access here). Keep the link pointed at the Smart Access Monitoring Solutions page rather than re-describing access-control logic here.",
        "Diagram (Section 5) uses a 4-input convergence pattern (four capability inputs → one compliance-record engine box → one output box) - a new variant of the 3-input convergence pattern used on Fleet Intelligence and other Solutions pages. Screenshot-verified clean, no overlap.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
  },
  {
    slug: "construction",
    number: "03",
    name: "Construction",
    headline: "Know Where Every Machine Is, Every Night",
    lede:
      "Heavy equipment moves between sites, sits idle overnight, and changes hands between operators and sub-contractors - which is exactly when it goes missing. VIoT keeps every machine, generator, and vehicle visible and accounted for, on every site.",
    priorities: [
      "Fleet Intelligence",
      "Smart Access Monitoring",
      "Video Intelligence",
      "Fuel Monitoring",
      "Load/Weight Analytics",
    ],
    industryContent: {
      heroWhy:
        "Equipment theft and unauthorized after-hours use is the cost construction and rental companies actually lose sleep over - not a generic \"track your fleet\" promise. \"Every Machine, Every Night\" names the specific vulnerability window (overnight, unattended, multi-site) that generic fleet tracking doesn't address, and signals this page understands the industry's real exposure.",
      heroIllustrationNote:
        "a site at dusk/night with multiple equipment types (excavator, mixer truck, generator) each showing a small status indicator (secured/flagged), suggesting constant visibility rather than daytime-only monitoring. Rugged, outdoor, job-site tone - not office/dashboard-heavy imagery.",
      problemTitle: "The Problem",
      problemParagraphs: [
        "A construction site isn't one location - it's a rotating set of them, with equipment moving between active projects, sitting idle for weeks between phases, and passing through the hands of multiple operators and sub-contractors along the way. Every one of those handoffs and idle stretches is a point where \"who's responsible for this machine right now\" gets fuzzy, and fuzzy accountability is exactly what equipment theft and unauthorized use depend on.",
        "Fuel is the other quiet leak. Generators and heavy machinery run for hours unattended, often overnight, and diesel siphoning off idle equipment is a loss that rarely gets caught in the moment - it shows up weeks later as a fuel bill that doesn't match logged usage, with no way to trace when or where it happened.",
        "Rental companies carry a version of both problems from the other side: equipment leaves the yard and the only real visibility into how it's used, where it goes, and what condition it comes back in is whatever the client chooses to report. A damaged or misused asset becomes a dispute instead of a documented fact.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. Here's why each one matters specifically for construction and equipment rental:",
      capabilityRows: [
        {
          name: "Fleet Intelligence",
          whyItMatters:
            "Engine-hour tracking and maintenance alerts across diverse heavy equipment, plus operator behaviour visibility as machines change hands between crews.",
        },
        {
          name: "Smart Access Monitoring",
          whyItMatters:
            "Flags unauthorized movement or start-up of equipment outside approved hours or operators - the exact window theft and misuse happen in.",
        },
        {
          name: "Video Intelligence",
          whyItMatters:
            "Visual confirmation at the yard or site perimeter, turning a suspected theft into documented evidence instead of a guess.",
        },
        {
          name: "Fuel Monitoring",
          whyItMatters:
            "Catches diesel siphoning from idle generators and machinery as it happens, not weeks later in a fuel bill that doesn't add up.",
        },
        {
          name: "Load/Weight Analytics",
          whyItMatters:
            "Overload and weight-distribution tracking for material-haul trucks moving aggregate, concrete, and debris between sites.",
        },
      ],
      differenceTitle: "How VIoT Does Construction Differently",
      differences: [
        {
          title: "Unauthorized movement is flagged the moment it starts, not discovered at the next site visit",
          text:
            "Most equipment theft isn't a break-in - it's a machine started or moved outside its approved hours, by someone without a dramatic entrance to notice. VIoT flags an unauthorized start-up or movement in real time, against each machine's own approved-use window, instead of waiting for someone to notice it's gone.",
        },
        {
          title: "Visual proof, not just a location pin",
          text:
            "A GPS pin tells you a machine moved. It doesn't tell you who moved it or what actually happened. Pairing location data with on-site video turns a theft report into documented evidence - the difference between a police complaint with nothing to attach and one with footage.",
        },
        {
          title: "Built for machines that change hands, not one fixed operator",
          text:
            "Construction equipment doesn't have one driver the way a delivery van does - it passes between operators, shifts, and sub-contractors across a project's life. VIoT's tracking is built around the asset, not a single assigned user, so accountability doesn't depend on everyone remembering to log a handover.",
        },
        {
          title: "Rental assets come back as a record, not a dispute",
          text:
            "For rental companies, VIoT turns \"how was this equipment used while it was out\" into a retrievable history - hours run, location, condition signals - instead of a conversation that comes down to the client's word against the asset's wear.",
        },
      ],
      engineTitle: "Flagged the Moment It Starts",
      engineCaption: "unauthorized use detection flow",
      engineText:
        "Every start or movement is checked against that machine's approved operator and hours - a match logs quietly, a mismatch raises an alert immediately.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "Construction sites are an unforgiving test for any monitoring system - dust, vibration, equipment that sits powered down for weeks, and crews that change by the month. VIoT's deployments in this industry are proven on exactly those terms:",
      proofPoints: [
        {
          title: "Caught the moment it happens, not at the next site visit.",
          text:
            "Our alerting runs continuously, not on a scheduled check - an unauthorized start at 2 AM is flagged at 2 AM, while there's still something to act on.",
        },
        {
          title: "Built for equipment, not for one assigned driver.",
          text:
            "Our tracking survives operator turnover, sub-contractor handoffs, and equipment moving between projects without needing to be re-configured every time the crew changes.",
        },
        {
          title: "Hardware that holds up on an actual job site.",
          text:
            "Dust, vibration, and months of outdoor exposure are the normal operating environment here, not an edge case - our hardware and connectivity are built for that reality, not a controlled depot.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - real-time alerting, asset-based (not driver-based) tracking, rugged hardware. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built for Rugged, Multi-Site, Multi-Year Deployments",
      supportIntro:
        "A piece of construction equipment can stay in service for a decade, moving across a dozen project sites along the way. A monitoring system that only works cleanly at the site it was installed on doesn't survive that reality - VIoT is built to:",
      supportPoints: [
        {
          title: "Follow the asset, not the site.",
          text:
            "When equipment moves to a new project, its tracking, alert rules, and history move with it - nobody has to re-set-up monitoring every time a machine changes location.",
        },
        {
          title: "Keep working without a dedicated IT presence.",
          text:
            "Most sites don't have someone whose job is managing a telematics platform. VIoT is built to run reliably without hands-on maintenance from site staff, and our hardware is engineered to survive years of dust, vibration, and outdoor exposure without failing quietly.",
        },
        {
          title: "Stay backed long after installation.",
          text:
            "We check in proactively on how the system is actually performing across sites - not waiting for a support ticket - so a hardware issue or a gap in coverage gets caught before it's been unnoticed for months.",
        },
      ],
      supportIllustrationNote:
        "equipment icons moving across a simple multi-site map or timeline, with consistent tracking/status following each machine across the moves - conveying continuity rather than a single fixed location.",
      ctaHeading: "Stop Losing Equipment to the Overnight Gap",
      ctaSubheading:
        "Tell us about your sites and your fleet - owned or rented - and we'll show you how VIoT keeps every machine accounted for.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "Audience spans both contractors and rental companies, deliberately. Both face the same core risk (unauthorized use/theft of equipment that changes hands and sites), so this page treats them as one combined industry rather than splitting into two pages.",
        "Section 3's capability table links to five Solutions pages: Fleet Intelligence, Smart Access Monitoring, Video Intelligence, Fuel Monitoring, and Load/Weight Analytics. Swap each [Name](#) placeholder for the live Solutions page URL once routes are final - do not write capability explanations on this page itself.",
        "Overlap flag: Smart Access Monitoring and Video Intelligence are paired here. This is the first Industries page to feature both together - Smart Access covers the authorization/timing check, Video Intelligence covers visual evidence. Keep both links pointed at their respective Solutions pages rather than merging their logic into one description here.",
        "Overlap flag: Fleet Intelligence's maintenance-alert and driver-behaviour logic. Referenced here for engine-hours and operator visibility on heavy equipment - same underlying capability as other Industries pages, just applied to equipment operators rather than fleet drivers. No new capability language needed.",
        "Diagram (Section 5) reuses the fixed decision-diamond flow dimensions (W=170, H=56, dHalfW=70, dHalfH=40, alertW=150, finalW=170) proven clean across Safe Logistics, Smart Access Monitoring, Load/Weight Analytics, and Industrial Automation - relabeled for unauthorized-use detection. Screenshot-verified clean, no overlap.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
  },
  {
    slug: "mining",
    number: "04",
    name: "Mining",
    headline: "Visibility That Doesn't Stop Where the Signal Does",
    lede:
      "A mine site doesn't run on consistent network coverage - haul roads, pits, and remote stretches drop in and out of range all day. VIoT keeps tracking, recording, and alerting through the gaps, not just where signal happens to reach.",
    priorities: [
      "Load/Weight Analytics",
      "Fuel Monitoring",
      "Fleet Intelligence",
      "Smart Access Monitoring",
    ],
    industryContent: {
      heroWhy:
        "Most fleet-tracking pitches assume continuous connectivity, which is exactly what a mine site doesn't have. Leading with \"doesn't stop where the signal does\" names the real operating condition this industry lives in, instead of a generic promise that quietly breaks down the first time a haul truck goes into a dead zone.",
      heroIllustrationNote:
        "a haul truck or loader moving through a pit with a visibly patchy signal zone (bars fading in/out), but a continuous data trail behind it showing nothing was lost - conveying resilience through gaps rather than constant perfect signal.",
      problemTitle: "The Problem",
      problemParagraphs: [
        "Most telematics systems are designed around the assumption that a vehicle is always reachable. A mine site breaks that assumption constantly - pits, haul roads, and processing areas routinely sit in weak or no-signal zones, and a system that depends on live connectivity simply stops reporting the moment a truck enters one. What looks like a gap in the data is actually a gap in what anyone can see or act on.",
        "Overloaded haul trucks are the other cost that compounds quietly. An axle or gross-weight violation doesn't just risk a fine - it accelerates haul-road damage and raises the odds of a rollover on grades and curves built for a specific load limit, not whatever happened to get loaded that shift.",
        "And diesel is one of the largest line items on a mine's operating budget, consumed by haul trucks and heavy equipment running for hours at a stretch, often far from direct supervision. Pilferage from that fuel pool is a loss that's easy to lose in the noise of normal consumption - until the numbers stop adding up months later, with no way to trace where it went.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. Here's why each one matters specifically for mining:",
      capabilityRows: [
        {
          name: "Load/Weight Analytics",
          whyItMatters:
            "Real-time overload and axle-wise weight checks on haul trucks - the core safety and haul-road-damage risk on a mine site.",
        },
        {
          name: "Fuel Monitoring",
          whyItMatters:
            "Catches diesel pilferage from haul trucks and heavy equipment as it happens, against one of a mine's largest operating costs.",
        },
        {
          name: "Fleet Intelligence",
          whyItMatters:
            "Driver behaviour and maintenance-health visibility for haul trucks running long hours on demanding grades and haul roads.",
        },
        {
          name: "Smart Access Monitoring",
          whyItMatters:
            "Restricted-zone control for blast zones, active pit areas, and other sections where unauthorized entry is a safety incident waiting to happen.",
        },
      ],
      differenceTitle: "How VIoT Does Mining Differently",
      differences: [
        {
          title: "The device keeps recording when the network can't keep up",
          text:
            "A dead zone isn't a reason to stop capturing data - it's a reason to hold onto it until connectivity returns. VIoT's hardware queues readings locally through weak or no-signal stretches and syncs the full record the moment signal is back, so a haul truck's trip through a pit shows up complete, not as a gap someone has to explain.",
        },
        {
          title: "Built for the load limit, not the load that showed up",
          text:
            "An overload alert that fires after the truck has already left the loading point is too late to matter. VIoT checks weight at the point it can still be corrected, so a mine's haul-road limits are something the system actively protects, not a rule that gets enforced after the fact in a safety report.",
        },
        {
          title: "Fuel accountability that matches how mining actually consumes it",
          text:
            "Haul trucks and heavy equipment don't run on a fixed route or schedule the way a delivery fleet does - consumption varies by grade, load, and shift. VIoT's fuel monitoring is built to catch an anomaly against that equipment's own normal pattern, not a generic average that doesn't reflect how a mine actually operates.",
        },
        {
          title: "One record across a site that never looks the same twice",
          text:
            "A mine's active areas shift as extraction progresses - what was a haul route last quarter may be a restricted zone today. VIoT's geofences and access rules are built to be updated as the site itself changes, so the system stays accurate to how the mine is actually being worked, not how it was laid out at install.",
        },
      ],
      engineTitle: "The Record Doesn't Break Where the Signal Does",
      engineCaption: "data continuity through a dead zone, with and without local queuing",
      engineText:
        "Without local queuing, a dead zone becomes a gap in the record. VIoT queues the data on the device and syncs it the moment signal returns, so the journey through that same dead zone is captured in full.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "A mine site is one of the harshest tests a monitoring system can face - remote terrain, inconsistent signal, and equipment running punishing hours. VIoT's deployments in this industry are proven on exactly those terms:",
      proofPoints: [
        {
          title: "Nothing lost to a dead zone.",
          text:
            "Our hardware queues data through weak and no-signal stretches and syncs the full record the moment connectivity returns - a haul truck's trip through a pit shows up complete, not with a gap someone has to explain.",
        },
        {
          title: "Overload checked before it leaves the loading point, not after.",
          text:
            "Weight compliance is enforced where it can still be corrected, protecting haul-road limits as a matter of course rather than a violation caught in a report afterward.",
        },
        {
          title: "Fuel accountability that holds up against real consumption patterns.",
          text:
            "Our monitoring is built to catch an anomaly against each vehicle's own normal usage - not a flat average that doesn't reflect how haul trucks and heavy equipment actually run.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - connectivity-independent recording, pre-departure overload checks, consumption-pattern fuel monitoring. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built for the Harshest Conditions",
      supportIntro:
        "A mine site doesn't offer a gentler version of itself over time - the dust, heat, vibration, and distance from support are the permanent operating environment, not a rough patch to get through. VIoT's hardware and deployment model are built for that as the baseline, not the exception:",
      supportPoints: [
        {
          title: "Hardware rated for the environment, not the showroom.",
          text:
            "Our devices are built to keep working through continuous dust exposure, extreme heat, and the vibration of haul trucks running rough grades for years - conditions that quietly kill equipment not designed for them.",
        },
        {
          title: "No dependency on being reachable.",
          text:
            "Because the system doesn't need constant connectivity to keep recording, a remote pit or a haul road with patchy coverage doesn't become a blind spot over time - it stays covered the same way the depot does.",
        },
        {
          title: "We stay engaged after the equipment ships, not just at install.",
          text:
            "Remote sites make it easy for a hardware issue to go unnoticed for longer than it should. We proactively check in on how the system is actually performing across sites, instead of waiting for someone to notice a gap months later.",
        },
      ],
      supportIllustrationNote:
        "a rugged device/sensor icon shown surviving dust, heat and vibration symbols over a multi-year timeline - conveying durability as the baseline, not a feature claim.",
      ctaHeading: "Stay Covered Where the Signal Isn't",
      ctaSubheading:
        "Tell us about your site - the terrain, the fleet, the dead zones - and we'll show you how VIoT keeps recording through all of it.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "Audience spans both mine operators and transport contractors, deliberately. Both face the same core risks (overload, fuel loss, connectivity gaps), so this page treats them as one combined industry rather than splitting into two pages.",
        "Section 3's capability table links to four Solutions pages: Load/Weight Analytics, Fuel Monitoring, Fleet Intelligence, and Smart Access Monitoring. Swap each [Name](#) placeholder for the live Solutions page URL once routes are final - do not write capability explanations on this page itself.",
        "Overlap flag: connectivity-independent recording. This page leads with VIoT's store-and-sync behavior in dead zones as the primary differentiator (Section 4.1 and the diagram). This same underlying device capability likely applies across other remote-operation pages (e.g. Logistics & Supply Chain's long-haul claim in its own Section 6) - consistent underlying capability, different framing per industry. No new capability language needed, just consistent messaging.",
        "Overlap flag: Load/Weight Analytics and Fuel Monitoring. Both are also featured on the Construction Industries page with similar but distinctly worded framing (theft/misuse there vs. haul-road safety and remote-consumption patterns here). Keep each page's angle as written; no need to reconcile wording across pages.",
        "Diagram (Section 5) introduces a new before/after comparison pattern (two parallel horizontal flows, \"without local queuing\" vs \"with VIoT,\" same stages, contrasting outcome boxes) - distinct from the convergence, decision-flow, and hub-and-spoke patterns used elsewhere. Screenshot-verified clean, no overlap. Reusable for any other page needing a direct before/after contrast.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
  },
  {
    slug: "fmcg",
    number: "05",
    name: "FMCG",
    headline: "Forty Stops a Day. Accountable at Every One.",
    lede:
      "FMCG delivery doesn't run on one trip - it's dozens of drops a day, every day, through crowded routes where a shortage at any single stop is easy to lose track of. VIoT keeps every stop accounted for, not just the route as a whole.",
    priorities: [
      "Fleet Intelligence",
      "Safe Logistics",
      "Fuel Monitoring",
      "Temperature & Humidity Monitoring",
    ],
    industryContent: {
      heroWhy:
        "Generic fleet-tracking language talks about \"a trip\" or \"a shipment\" - the wrong unit for FMCG, where the real operating reality is a single vehicle making dozens of stops in a day. Naming that directly (\"Forty Stops a Day\") signals this page understands the model, not just the vehicle.",
      heroIllustrationNote:
        "a delivery van's route through a dense urban map with many stop markers, each showing a small checkmark or status indicator - conveying per-stop accountability rather than a single start-to-end line. Busy, urban, high-frequency tone.",
      problemTitle: "The Problem",
      problemParagraphs: [
        "Most fleet tracking is built around a trip: one pickup, one delivery, one record. FMCG distribution doesn't work that way - a single van can make thirty or forty stops in a day, and the question that actually matters isn't \"did the vehicle complete its route,\" it's \"did stop seventeen get what it was supposed to get.\" A system that only reports at the route level misses exactly the detail that causes disputes.",
        "That volume of stops is also a volume of opportunity. A short count at one outlet out of forty is easy to miss in the moment and easy to write off afterward - until it's a pattern across routes and weeks, and by then nobody can say which stop, which driver, or which day it started.",
        "And for the share of FMCG that's temperature-sensitive - dairy, frozen goods, beverages - every one of those stops is also a point where a van's doors are open, product is exposed, and a cold chain that looked fine at the depot can quietly slip over the course of a long multi-stop day.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. Here's why each one matters specifically for FMCG distribution and last-mile delivery:",
      capabilityRows: [
        {
          name: "Fleet Intelligence",
          whyItMatters:
            "Route and driver behaviour visibility across dense, high-frequency multi-stop routes, where the pattern across a day matters as much as any single stop.",
        },
        {
          name: "Safe Logistics",
          whyItMatters:
            "Tamper-evidence that holds up across many stops per route, not just one pickup and one delivery - so a short count at any stop is traceable.",
        },
        {
          name: "Fuel Monitoring",
          whyItMatters:
            "Cost control across large delivery fleets running constant short, stop-heavy trips rather than a few long ones.",
        },
        {
          name: "Temperature & Humidity Monitoring",
          whyItMatters:
            "Cold-chain integrity for perishable FMCG through a long multi-stop day with doors opening at every drop.",
        },
      ],
      differenceTitle: "How VIoT Does FMCG Differently",
      differences: [
        {
          title: "The stop is the unit, not the route",
          text:
            "A route-level summary can look clean while hiding a problem at stop twelve. VIoT records and flags at the level of each individual stop - arrival, dwell time, access events - so a discrepancy is traceable to the specific drop it happened at, not buried in an end-of-day total.",
        },
        {
          title: "A pattern across stops is caught, not just a single incident",
          text:
            "One short count might be an honest mistake. The same pattern repeating across several stops, several days, or several drivers is something else - and it's invisible unless the data is tied together at that level. VIoT surfaces the pattern, not just the isolated event, so a real issue doesn't take months to become visible.",
        },
        {
          title: "Built for a day of constant starts and stops, not one continuous trip",
          text:
            "A fleet platform built around a single long haul doesn't hold up well against a vehicle that starts, stops, opens its doors, and restarts thirty times before lunch. VIoT's monitoring is built for that rhythm specifically - continuous through every stop, not reset or re-triggered each time.",
        },
        {
          title: "Cold-chain integrity that survives an open door, not just a closed one",
          text:
            "Most temperature monitoring assumes a sealed container in transit. FMCG's cold chain is interrupted on purpose, dozens of times a day, every time a door opens at a drop. VIoT is built to track what happens through that - not just whether the truck stayed cold between stops, but whether it recovered fast enough after each one.",
        },
      ],
      engineTitle: "Accountability at Every Stop, Not Just the Route",
      engineCaption: "every stop tracked the same way, one route shown",
      engineText:
        "Every stop on a route is recorded the same way. Most pass through quietly; the moment one doesn't match what was expected, it's flagged immediately, tied to that exact stop.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "FMCG distribution tests a monitoring system on volume - dozens of stops a day, every day, across a fleet that doesn't get a quiet week. VIoT's deployments in this industry are proven on exactly those terms:",
      proofPoints: [
        {
          title: "Per-stop detail that survives a 40-stop day.",
          text:
            "Our platform holds distinct, queryable detail for every stop on a route, not just a route-level summary - so a discrepancy at stop seventeen is still traceable to stop seventeen, not lost in an end-of-day total.",
        },
        {
          title: "Patterns surface, not just incidents.",
          text:
            "Because every stop's data ties back to the same driver, route, and outlet over time, a recurring issue is visible as a pattern - not forty isolated events nobody connects.",
        },
        {
          title: "Cold-chain monitoring that accounts for the door opening.",
          text:
            "For temperature-sensitive routes, our monitoring is built around the reality of frequent stops, not a sealed-container assumption that doesn't match how FMCG actually moves.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - per-stop traceability, pattern detection across routes, door-aware cold-chain monitoring. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built to Hold Up Under Daily High-Frequency Use",
      supportIntro:
        "An FMCG delivery van doesn't get an easy day - engine on and off dozens of times, doors opening and closing at every stop, the same grind repeated every working day of the year. A system that was only tested against occasional long trips doesn't survive that rhythm. VIoT is built around it:",
      supportPoints: [
        {
          title: "Engineered for constant starts and stops, not occasional ones.",
          text:
            "Our hardware and monitoring logic are built to handle dozens of ignition cycles and door events a day without missing a beat or needing a reset - because for this fleet, that's not an edge case, it's every day.",
        },
        {
          title: "Doesn't degrade as stop counts climb.",
          text:
            "Whether a route has ten stops or fifty, the system records each one at the same level of detail - performance doesn't quietly drop as the day gets busier.",
        },
        {
          title: "We stay engaged as routes and fleets grow.",
          text:
            "FMCG delivery networks expand and reshuffle routes often. We check in proactively as that happens, rather than letting monitoring quality drift as the operation scales past what it looked like at install.",
        },
      ],
      supportIllustrationNote:
        "a simple visual showing a delivery van's day - many small start/stop/door icons in a row, all captured at consistent quality - conveying resilience under repetition rather than a single dramatic trip.",
      ctaHeading: "Make Every Stop Count",
      ctaSubheading:
        "Tell us about your routes and your fleet, and we'll show you how VIoT keeps every single stop accountable.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "This page is the FMCG/last-mile audience carved out of Logistics & Supply Chain. The Logistics & Supply Chain Industries page (3PL/freight transporters) deliberately excludes FMCG/retail distribution - this page covers that audience instead. No content should be duplicated between the two; cross-link if useful once both are live.",
        "Section 3's capability table links to four Solutions pages: Fleet Intelligence, Safe Logistics, Fuel Monitoring, and Temperature & Humidity Monitoring. Swap each [Name](#) placeholder for the live Solutions page URL once routes are final - do not write capability explanations on this page itself.",
        "Overlap flag: Safe Logistics. Framed here around tamper-evidence across many stops per route (vs. Logistics & Supply Chain's framing around a single long-haul trip, and Construction's framing around equipment theft). Same underlying capability, different angle per page - no need to reconcile wording.",
        "Overlap flag: Temperature & Humidity Monitoring. This page frames it specifically around frequent door-opening during multi-stop delivery (Section 4.4), distinct from Pharmaceuticals & Chemicals' audit-trail framing. Keep both framings as written.",
        "Diagram (Section 5) introduces a new \"route with stops\" pattern - a horizontal line with sequential stop markers, one flagged to show per-stop detection. Distinct from the convergence, decision-flow, hub-and-spoke, and before/after patterns used on other pages. Screenshot-verified clean, no overlap.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
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
    headline: "Every Child On. Every Child Off. On Record.",
    lede:
      "A parent's trust in student transport comes down to one question: do you actually know where my child is, right now. VIoT tracks the full journey - route, driver conduct, and who boarded or got off which vehicle - so the answer is always a fact, not a guess.",
    priorities: [
      "Smart Access Monitoring",
      "Fleet Intelligence",
      "Video Intelligence",
    ],
    industryContent: {
      heroWhy:
        "The buyer here isn't primarily evaluating fleet efficiency - they're managing parental trust, and the one failure that matters most is a gap in knowing a specific child's whereabouts. Naming boarding and drop-off directly, rather than \"safe transport\" generically, speaks to the exact moment schools get asked to account for.",
      heroIllustrationNote:
        "a school bus or campus shuttle with a simple boarding/exit indicator at the door, feeding into a calm status view - conveying accountability at the individual level, not just a vehicle tracked on a map. Warm but precise tone, not alarming.",
      problemTitle: "The Problem",
      problemParagraphs: [
        "Most school and campus transport tracking answers one question well: where is the vehicle. It's a much weaker answer to the question a parent or administrator actually asks after the fact - did my child get on this morning, and did they get off at the right stop. A GPS pin on a bus doesn't confirm either one.",
        "Route and driver discipline matter more here than in almost any other fleet context, because the margin for a speeding turn, a missed stop, or a route deviation isn't measured in cost - it's measured in a parent's confidence in the institution. A single bad incident, even a near-miss, can undo years of trust built up with nothing going wrong.",
        "And student transport turns over constantly - new drivers each term, new routes as enrollment shifts, students who aren't old enough to flag a problem themselves. A system that depends on manual registers or a driver's memory of \"who's usually on this route\" breaks down exactly when continuity matters most.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. Here's why each one matters specifically for schools and universities:",
      capabilityRows: [
        {
          name: "Smart Access Monitoring",
          whyItMatters:
            "Applied to boarding: confirms which student got on or off which vehicle, at which stop, not just that the vehicle was there.",
        },
        {
          name: "Fleet Intelligence",
          whyItMatters:
            "Route and driver behaviour discipline - speed, turns, and route adherence matter more with children on board than almost anywhere else.",
        },
        {
          name: "Video Intelligence",
          whyItMatters:
            "In-vehicle visibility that turns a disputed incident into a documented one, protecting both students and drivers.",
        },
      ],
      differenceTitle: "How VIoT Does Schools and Universities Differently",
      differences: [
        {
          title: "The child is the unit of accountability, not the vehicle",
          text:
            "Most transport tracking stops at confirming the bus ran its route. VIoT confirms the boarding and exit of each individual student at each stop, so the question \"did my child get on this morning\" has a specific, recorded answer - not an inference from the vehicle's GPS trail.",
        },
        {
          title: "Driving discipline enforced at a higher bar, deliberately",
          text:
            "A delivery fleet and a school fleet shouldn't be held to the same driving standard. VIoT's behaviour scoring and route-adherence alerts can be configured to a stricter threshold for student transport - catching a hard turn or a speed pattern that would be unremarkable on a commercial route but matters here.",
        },
        {
          title: "Evidence that protects students and drivers alike",
          text:
            "An incident involving children draws scrutiny fast, and without video or a clear record, it comes down to one person's word against another's. VIoT's in-vehicle visibility gives both the institution and the driver an actual account of what happened, rather than leaving it to memory and assumption.",
        },
        {
          title: "Built to onboard a new term without losing the thread",
          text:
            "Routes, drivers, and students change every academic term. VIoT is built so route and boarding data update cleanly at the start of each term, rather than carrying forward stale assignments or requiring a manual reset that's easy to get wrong in the first busy week back.",
        },
      ],
      engineTitle: "Every Step of the Trip, Accounted For",
      engineCaption: "a student's trip tracked from boarding to drop-off",
      engineText:
        "Boarding, the route itself, and the exit at destination are each tracked and tied to the same record - so the answer to \"did my child get there safely\" doesn't depend on anyone's memory.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "Student transport doesn't give a system room for ambiguity - a parent asking about their child isn't satisfied by \"the bus completed its route.\" VIoT's deployments in this context are proven on exactly that standard:",
      proofPoints: [
        {
          title: "Individual, not aggregate.",
          text:
            "Our records resolve to a specific student at a specific stop, not a vehicle-level summary - so a question about one child has a specific answer, every time.",
        },
        {
          title: "Held to a stricter driving standard without extra complexity.",
          text:
            "Behaviour thresholds for student transport can be configured tighter than a standard commercial fleet, without asking schools to manage a more complicated system to get there.",
        },
        {
          title: "Clean handover at the start of every term.",
          text:
            "Routes, drivers, and student assignments change on a predictable academic calendar, and our setup is built to refresh cleanly at that point - not carry forward stale data into a new term.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - individual student accountability, stricter driving thresholds, clean term-over-term handover. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built to Stay Consistent, Term After Term",
      supportIntro:
        "Parental trust doesn't reset at zero each September, but it doesn't carry over automatically either - it has to be re-earned every term, with a mostly new set of drivers and sometimes new routes. A system that only works well in its first year doesn't hold up to that cycle. VIoT is built for the repeat:",
      supportPoints: [
        {
          title: "Setup that survives turnover, not just the first rollout.",
          text:
            "New drivers and shifting routes are a predictable yearly event here, not an edge case - our onboarding is built to be repeated smoothly every term, not re-engineered each time.",
        },
        {
          title: "The same standard of accuracy, year over year.",
          text:
            "A school's confidence in the system depends on it working exactly as well in year three as it did in month one. We hold deployments to that consistency rather than letting quality drift once the initial rollout excitement has passed.",
        },
        {
          title: "We check in before problems become visible to parents.",
          text:
            "We proactively review how the system is performing each term, rather than waiting for a parent complaint or an incident to surface a gap that could have been caught earlier.",
        },
      ],
      supportIllustrationNote:
        "a simple academic-year visual - a calendar or term markers with consistent monitoring quality shown running unbroken across them, year after year. Steady and reassuring, not promotional.",
      ctaHeading: "Give Parents an Answer, Not an Assumption",
      ctaSubheading:
        "Tell us about your fleet and your routes, and we'll show you how VIoT accounts for every student, every stop.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "Resolves the standing open question on RFID/attendance scope. This page positions student boarding/exit verification as an application of Smart Access Monitoring (Section 3, Section 4.1), not as a separate standalone capability. There is no dedicated \"RFID attendance\" Solutions page - do not create one or imply this is a distinct product from Smart Access Monitoring.",
        "Audience spans both K-12 schools and universities, deliberately. Both face the same core need (individual student/rider accountability across a transport fleet with constant turnover), so this page treats them as one combined industry rather than splitting into two pages.",
        "Section 3's capability table links to three Solutions pages: Smart Access Monitoring, Fleet Intelligence, and Video Intelligence. Swap each [Name](#) placeholder for the live Solutions page URL once routes are final - do not write capability explanations on this page itself.",
        "Overlap flag: Smart Access Monitoring's \"boarding\" framing is new. Every other page frames Smart Access Monitoring around facility/zone entry (Pharmaceuticals & Chemicals, Construction, Data Centres). This page applies the same underlying capability to vehicle boarding/exit instead - same capability, a genuinely different application. Keep the Solutions page itself facility-generic; this page's framing stays here.",
        "Diagram (Section 5) introduces a new simple linear checkpoint-chain pattern (3 plain steps feeding into one accent-highlighted outcome box) - distinct from the convergence, decision-flow, hub-and-spoke, before/after, and route-with-stops patterns used elsewhere. Screenshot-verified clean, no overlap.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
  },
  {
    slug: "smart-infrastructure",
    number: "08",
    name: "Smart Infrastructure",
    headline: "One Platform for Every Door and Every Camera",
    lede:
      "Most properties run access control, CCTV, and visitor management as three separate vendor contracts that don't talk to each other. VIoT replaces that patchwork with one platform covering every entry point and every camera, for the whole property.",
    priorities: [
      "Smart Access Monitoring",
      "Video Intelligence",
    ],
    industryContent: {
      heroWhy:
        "Facility and property managers already have security systems - the pitch here isn't \"get security,\" it's \"stop managing three vendors to get it.\" Naming doors and cameras directly, rather than \"building security\" generically, speaks to the exact systems they're currently juggling separately.",
      heroIllustrationNote:
        "a building floor plan or cross-section with multiple entry points and camera icons, all connecting into one central dashboard rather than separate disconnected systems - conveying consolidation, not just coverage. Clean, professional, property-management tone.",
      problemTitle: "The Problem",
      problemParagraphs: [
        "Most commercial properties end up with security systems bought one at a time - an access control vendor here, a CCTV vendor there, maybe a separate visitor-management tool for the lobby. Each one does its job in isolation, which means nobody has a single view of who's actually in the building, where, and whether it matches who's supposed to be.",
        "That fragmentation shows up hardest exactly when it matters: an incident review. An unauthorized entry caught on one system has to be manually cross-referenced against access logs in another, with different timestamps, different formats, and often different staff who know how to operate each one.",
        "And a property doesn't stay static - tenants move in and out, floors get reconfigured, new zones get added. Every one of those changes means touching multiple vendor systems separately, and it's easy for one of them to fall out of sync with how the building actually operates today.",
      ],
      mappingIntro:
        "This page doesn't re-explain what each capability does - that's what the Solutions pages are for. Here's why each one matters specifically for commercial and real estate facilities:",
      capabilityRows: [
        {
          name: "Smart Access Monitoring",
          whyItMatters:
            "Context-aware entry control across lobbies, parking, and restricted floors, on one system instead of a separate access vendor per zone.",
        },
        {
          name: "Video Intelligence",
          whyItMatters:
            "Visual coverage across entrances, common areas, and parking, tied to the same access events rather than a standalone CCTV feed.",
        },
      ],
      differenceTitle: "How VIoT Does Smart Infrastructure Differently",
      differences: [
        {
          title: "One platform across every zone, not a vendor per system",
          text:
            "Access control and video shouldn't live in separate products that happen to sit in the same building. VIoT runs both on one platform, so a property manager has a single place to check - and a single relationship to manage - instead of logging into one system for doors and another for cameras.",
        },
        {
          title: "Access and video tied together, not just side by side",
          text:
            "An access event and the footage of it happening are two views of the same moment, but most setups treat them as unrelated feeds a person has to manually line up. VIoT ties them to the same event, so reviewing an incident means pulling one record, not cross-referencing two systems with different clocks.",
        },
        {
          title: "Zones that update as the property does",
          text:
            "A building's layout isn't fixed - tenants change, floors get reconfigured, new areas get restricted or opened up. VIoT's zone and access rules are built to be updated directly, without needing to touch a separate system for each change or risk one system quietly falling out of sync with another.",
        },
        {
          title: "Onboarding that doesn't require re-training facility staff on multiple tools",
          text:
            "Facility and security staff turn over like any other role. VIoT is built so there's one system to learn, not three - which means a new hire is operational faster, and a shift handover doesn't depend on someone knowing which vendor's login does what.",
        },
      ],
      engineTitle: "Three Systems Become One",
      engineCaption: "three vendor systems replaced by one VIoT platform",
      engineText:
        "The same three functions - access, video, visitor management - either sit in three disconnected vendor systems reconciled by hand, or run on one VIoT platform as a single, unified record.",
      proofTitle: "Where This Holds Up in the Field",
      proofIntro:
        "Commercial properties test a security platform on something deceptively hard: staying usable across many zones, many tenants, and a facility team that didn't choose or install the system. VIoT's deployments in this context are proven on exactly those terms:",
      proofPoints: [
        {
          title: "Genuinely one system, not one brand on three products.",
          text:
            "Access and video run on the same platform with the same event timeline - not separate modules sold together that still behave like separate systems underneath.",
        },
        {
          title: "Reviewed in minutes, not reconciled across systems.",
          text:
            "When something needs checking, it's one record to pull, with access and footage already tied together - not a search through two systems with different timestamps.",
        },
        {
          title: "Deployed without disrupting a live, occupied building.",
          text:
            "We work around a property's actual operating hours and tenant activity - installation doesn't mean shutting down access or asking tenants to work around construction.",
        },
      ],
      proofIllustrationNote:
        "a short, confident strip of 3 proof points as icon + one-line cards - one genuine platform, fast incident review, non-disruptive install. Qualitative, no client names or numbers unless supplied separately.",
      supportTitle: "Built to Scale as the Property Does",
      supportIntro:
        "A building's footprint rarely stays the same for long - new tenants move in, floors get reconfigured, a parking structure gets added. A security setup that requires a fresh install every time something changes becomes a recurring project instead of a one-time decision. VIoT is built around that reality:",
      supportPoints: [
        {
          title: "New zones added without touching the whole system.",
          text:
            "Expanding coverage to a new floor, entrance, or tenant space is a configuration change, not a re-deployment - the rest of the property keeps running exactly as it was.",
        },
        {
          title: "Access rules that keep up with tenant turnover.",
          text:
            "As tenants move in and out, authorization changes happen directly in the system their change actually affects, without needing to update a separate vendor tool for each one.",
        },
        {
          title: "We stay engaged as the property grows.",
          text:
            "We check in proactively as a building adds space or changes hands, rather than letting the system's coverage quietly lag behind what the property has become since install.",
        },
      ],
      supportIllustrationNote:
        "a simple building growth visual - floors or zones being added to a structure over time, with consistent coverage extending to each one, rather than a separate system bolted on per addition.",
      ctaHeading: "Stop Managing Three Vendors to Secure One Property",
      ctaSubheading:
        "Tell us about your property - zones, tenants, current systems - and we'll show you how VIoT brings it under one platform.",
      formFields: "unchanged from the sitewide enquiry form.",
      implementationNotes: [
        "Resolves the standing open question on \"Smart Infrastructure\" scope. This page covers commercial and real estate facilities (offices, malls, residential/mixed-use complexes) - not municipal/government infrastructure and not utility company assets. If those other interpretations are wanted later, they would need to be separate pages, not folded into this one.",
        "Section 3's capability table links to two Solutions pages: Smart Access Monitoring and Video Intelligence. Swap each [Name](#) placeholder for the live Solutions page URL once routes are final - do not write capability explanations on this page itself. This page intentionally has a smaller table than other Industries pages; Temperature & Humidity Monitoring and Fuel Monitoring were considered but not included per the confirmed capability scope - do not add them without re-confirming.",
        "Overlap flag: this page is conceptually adjacent to Data Centres. Both are facility-type pages (not vehicle-fleet pages) featuring Smart Access Monitoring; Data Centres also features Video Intelligence plus Temperature & Humidity Monitoring and Fuel Monitoring for its uptime-critical angle. This page's angle is vendor consolidation for general commercial property, not uptime - keep the two pages' differentiator framing distinct (one record for uptime vs. one platform instead of a vendor patchwork).",
        "Diagram (Section 5) reuses the before/after comparison geometry first introduced on the Mining page (two parallel rows, same stages, contrasting outcome boxes), adapted with three dashed connectors in the \"before\" row instead of one, to emphasize total vendor fragmentation rather than a single break point. Screenshot-verified clean, no overlap.",
        "Standing content rules (apply to every page on the site): never use \"AIS-140\" anywhere on this page or in the footer; never state or imply VIoT designs or manufactures its hardware - use phrasing like \"our hardware, end-to-end\" rather than \"designed by us\" or \"manufactured by us\"; no team or personnel content on this page; all diagram and illustration notes throughout this doc are creative guidance for the designer, not final visual specs.",
      ],
    },
  },
];

export function getSolution(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
