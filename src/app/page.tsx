import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServiceMapSection } from "@/components/home/ServiceMapSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { PlatformSection } from "@/components/home/PlatformSection";
import { CtaBand } from "@/components/home/CtaBand";
import SolutionSection from "@/components/home/SolutionSection";

export const metadata: Metadata = {
  title: "VIoT - Fleet, Asset & Access Intelligence",
  description:
    "Track what moves. Secure what matters. Control who gets in.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <ServiceMapSection />
      {/* <SolutionSection /> */}
      <ProductsShowcase />
      {/* <PlatformSection /> */}
      <CtaBand />
    </main>
  );
}
