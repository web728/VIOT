import type { Metadata } from "next";
import PlatformClient from "./platform-client";

export const metadata: Metadata = {
  title: "VIoT Platform | Connected Intelligence",
  description:
    "One connected platform for fleet, video, access, asset and sensor intelligence.",
};

export default function PlatformPage() {
  return <PlatformClient />;
}
