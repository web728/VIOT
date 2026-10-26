
export type InsightSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  subSections?: {
    heading: string;
    body: string[];
  }[];
};

export type InsightArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  intro: string[];
  sections: InsightSection[];
  closingTitle: string;
  closingBody: string[];
};

export const insights: InsightArticle[] = [
  {
    slug: "7-questions-to-ask-any-telematics-vendor-before-you-sign",
    title: "7 Questions to Ask Any Telematics Vendor Before You Sign",
    excerpt:
      "Seven practical questions fleet owners should ask before signing with any telematics vendor.",
    category: "Telematics Buying Guide",
    readingTime: "7 min read",
    intro: [
      "Most fleet owners sign with a telematics vendor after one demo and a price comparison. The device installs, the dashboard looks fine for a few weeks, and then the problems surface - a signal gap nobody flagged, a certificate that lapsed quietly, a support ticket that goes nowhere. None of it is visible at the point of sale.",
      "These are the seven questions we'd want answered before signing with anyone, regardless of who we were buying from. A vendor who answers them with specifics is worth more trust than one who answers in generalities.",
    ],
    sections: [
      {
        heading: "1. Is your AIS-140 approval current - and does it cover my state?",
        body: [
          "AIS-140 devices need ARAI or ICAT type approval, and the approved list changes as the standard is amended. Ask for the certificate number in writing before you pay, not after, and check it yourself against the issuing agency's public list rather than taking the vendor's word for it. Separately, confirm the device is approved for use in every state you operate in - approval in one state doesn't guarantee acceptance in another, and a device rejected at the RTO after installation costs you the install, not just the device.",
        ],
      },
      {
        heading: "2. What happens to the data when the signal drops?",
        body: [
          "Every device loses signal sometimes - tunnels, basements, remote stretches, a dead SIM. What matters is what the device does in that gap: does it store the readings and forward them once connectivity returns, or does that stretch of your fleet's history just disappear? Ask specifically about offline store-and-forward logging, battery backup, and power-cut alerts - not \"is your data accurate,\" which every vendor will answer yes to.",
        ],
      },
      {
        heading: "3. Who handles the VAHAN linkage, and is it in writing?",
        body: [
          "Installing the device isn't the same as being compliant. The vehicle also needs to be linked on the VAHAN portal and show live, and a fitment certificate needs to be issued - steps that are easy to skip and expensive to discover later, usually at your next fitness renewal. Get a written, per-vehicle activation timeline, and confirm whether the vendor handles the VAHAN linkage themselves or expects you to chase it.",
        ],
      },
      {
        heading: "4. What does this actually cost over three years - not just the device?",
        body: [
          "The device price is the smallest number in the conversation. Ask for an itemised quote: device, installation, VAHAN linkage, first-year SIM, and what the recharge costs from year two onward - in writing, before you commit. Recurring costs (SIM renewal, support, re-certification where it applies) often add up to more than the device itself over a few years, and a vendor who won't itemise this upfront is one you'll be renegotiating with later.",
        ],
      },
      {
        heading: "5. What's your support response time, and where is support actually based?",
        body: [
          "\"24/7 support\" means very little without a number attached to it. Ask for an actual response-time commitment, how issues get escalated, and whether support is local or routed through a call centre with no visibility into your specific fleet. If a device goes offline on a Friday evening, you want to know exactly who picks up and how fast - before it happens, not after.",
        ],
      },
      {
        heading: "6. Who owns the data, and what happens if you switch vendors?",
        body: [
          "Ask directly: can you export your historical data, in what format, and is there a cost or delay attached? Ask what happens to your data if you terminate the contract, and whether the vendor will help you migrate off their platform if you leave. A vendor confident in their service has no reason to make this difficult - the ones who hedge on this question are telling you something about how they expect the relationship to end.",
        ],
      },
      {
        heading: "7. Can you see it running on a vehicle like yours, before you sign?",
        body: [
          "A sales deck and a live dashboard are different things. Ask to see the platform on an actual vehicle, in operating conditions similar to yours - not a demo account running clean sample data. If a vendor can't show you that, or stalls when you ask, that's your answer.",
        ],
      },
    ],
    closingTitle: "Where we stand on these ourselves",
    closingBody: [
      "We're a new company - VIoT was incorporated in 2026, and we don't have three years of our own customers to point back to yet. What we can tell you is that we built our hardware and platform in-house rather than reselling someone else's, specifically because the failure modes above - signal gaps that disappear, certificates nobody tracks, data you can't get back out - are the ones we kept running into working in this industry before VIoT existed. If you're evaluating us or anyone else, ask these same seven questions. We'd rather answer them honestly than win a sale on a vague pitch.",
    ],
  },
  {
    slug: "2g-3g-shutdown-what-happens-to-the-ais-140-devices-already-on-your-vehicles",
    title: "2G/3G Shutdown: What Happens to the AIS-140 Devices Already on Your Vehicles",
    excerpt:
      "What is actually confirmed, what is not, and how to check the devices already fitted across your fleet.",
    category: "Fleet Compliance",
    readingTime: "8 min read",
    intro: [
      "Every few months, someone tells a fleet owner that 2G is shutting down and their tracking devices are about to stop working. Sometimes it is said to sell a replacement. Sometimes the person saying it genuinely believes it. Either way, the fleet owner is left with the same question: do I need to replace devices that are working fine today?",
      "The honest answer is: not overnight, but probably sooner than you would choose. Below is what is actually confirmed, what is not, and a simple way to check where your own fleet stands.",
    ],
    sections: [
      {
        heading: "What has actually happened so far",
        body: [
          "3G is mostly gone. Airtel no longer runs a 3G network. Vi has been switching 3G off circle by circle and said it aimed to finish the job in FY25. BSNL, the last large 3G operator, has announced it is phasing out 3G nationwide to use that spectrum for 4G. Jio never ran 2G or 3G at all.",
          "2G is still running. Airtel, Vi and BSNL all still operate 2G, largely because millions of basic phones depend on it. As of today, no operator has announced a nationwide date to switch 2G off.",
        ],
        table: {
          headers: ["Operator", "2G", "3G", "4G"],
          rows: [
            ["Airtel", "Running. No shutdown date announced.", "Switched off", "Running"],
            ["Vi", "Running. No shutdown date announced.", "Switched off circle by circle", "Running"],
            ["BSNL", "Running. No shutdown date announced.", "Being phased out", "Expanding"],
            ["Jio", "Never had 2G", "Never had 3G", "Running"],
          ],
        },
        subSections: [
          {
            heading: "Confirmed",
            body: [
              "3G is largely switched off across India.",
              "Jio has no 2G or 3G network.",
              "The government has left the 2G decision to the operators.",
              "At least one state department already asks for 4G devices.",
            ],
          },
          {
            heading: "Not confirmed",
            body: [
              "Any nationwide date for switching 2G off.",
              "That your devices will stop working on any specific date.",
              "Which circles, if any, will lose 2G first.",
            ],
          },
        ],
      },
      {
        heading: "Don't wait for a government deadline",
        body: [
          "Many fleet owners assume there will be an official announcement with a date, and that they can act then. That announcement may never come. In 2024, the Department of Telecommunications said it would not step in on shutting down 2G and left the decision to the telecom operators as a commercial call.",
          "If 3G is any guide, 2G will not end on one national date. 3G was switched off one operator and one circle at a time, over several years. For a fleet that runs across states, that means some vehicles could be affected while others are not, with no single headline to warn you.",
        ],
      },
      {
        heading: "Why this still matters if nothing is switching off tomorrow",
        subSections: [
          {
            heading: "Devices stay on vehicles for years.",
            body: [
              "A device you fit today will likely still be on that vehicle years from now. Buying a 2G-only device today is a bet that 2G lasts as long as the device does.",
            ],
          },
          {
            heading: "Rules can change before networks do.",
            body: [
              "In Uttar Pradesh, the mining department already requires vehicles carrying sand, gravel and moram to have a tracking device that supports 4G and is linked to its portal. A rule like this can make a device that is still working unacceptable on the day the rule applies. No network has to shut down for that to happen.",
            ],
          },
          {
            heading: "Your backup network may not be a backup.",
            body: [
              "Most compliant tracking devices use an embedded SIM that carries more than one operator, so the device can switch if one network is weak. If one of those operators is Jio, a 2G-only device cannot use it at all, because Jio has no 2G network. On paper you have two networks. In practice you have one.",
            ],
          },
        ],
      },
      {
        heading: "A five-minute check for the devices you already have",
        body: [
          "You do not need a technician for this. Your invoices, the device spec sheet and one message to your current vendor will cover most of it.",
        ],
        subSections: [
          { heading: "1. Find the network type.", body: ["Check the spec sheet or invoice. You are looking for \"2G\" or \"GSM/GPRS\" only, or \"4G LTE\" with 2G fallback. If it is not clear, ask your vendor in writing."] },
          { heading: "2. Ask which operators are on the SIM.", body: ["Both the main one and the backup."] },
          { heading: "3. Note when the SIM renewal is due.", body: ["This is a natural point to make a decision, because you are paying for something anyway."] },
          { heading: "4. Check what your work requires.", body: ["Look at your state transport department, and any department or contract you work under (mining, school transport, government tenders), for any mention of 4G."] },
          { heading: "5. Count.", body: ["How many vehicles have 2G-only devices, and in which states? That number is your actual exposure."] },
        ],
      },
      {
        heading: "What to do with what you find",
        subSections: [
          {
            heading: "Fine: your device supports 4G",
            body: ["Nothing to do now. A 4G device that can also fall back to 2G handles both today's networks and whatever comes next."],
          },
          {
            heading: "Watch: 2G-only, but nothing requires 4G yet",
            body: ["It works today, so do not rip it out. Replace it at natural points: when the device fails, at SIM renewal, or when a vehicle changes hands. Buy 4G for every new vehicle from now on."],
          },
          {
            heading: "Act now: a rule asks for 4G, the device is 3G-only, or Jio is on its SIM",
            body: ["Make a replacement schedule for these vehicles first. These are the ones that can fail a check, or lose their only working network, without warning."],
          },
        ],
      },
      {
        heading: "One thing not to do",
        body: [
          "Don't replace a working fleet in one go because someone told you 2G ends next month. Ask them for the source. If they cannot show you an operator announcement covering the circles you run in, it is a sales line, not a deadline. Replacing in phases, at points where you are already spending money, spreads the cost, causes less disruption and gives you time to test the new devices on a few vehicles first.",
        ],
      },
    ],
    closingTitle: "Where we stand",
    closingBody: [
      "We make 4G devices. If you have done the check above and your vehicles fall in the watch or act-now group, or you are simply not sure what is fitted on your fleet, reach out to us and we will help you work it out. If your devices turn out to be fine, we will tell you that too.",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}
