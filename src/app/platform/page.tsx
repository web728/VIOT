import type { Metadata } from "next";
import PlatformClient from "./platform-client";

export const metadata: Metadata = {
  title: "VIoT Platform | Connected Intelligence",
  description:
    "One connected platform for vehicle, asset, security and sensor intelligence.",
};

export default function PlatformPage() {
  return <PlatformClient />;
}