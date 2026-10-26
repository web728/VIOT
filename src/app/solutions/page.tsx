import type { Metadata } from "next";

import PlatformClient from "../platform/platform-client";

export const metadata: Metadata = {
  title: "Solutions | VIoT",
  description:
    "Explore VIoT solutions for fleet management, EV operations, video telematics, IoT sensing, E-Lock workflows and smart access.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  return <PlatformClient />;
}
