import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServiceMapSection } from "@/components/home/ServiceMapSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { CtaBand } from "@/components/home/CtaBand";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { PlatformFlywheel } from "@/components/home/PlatformFlywheel";

export const metadata: Metadata = {
  title: "VIoT — Fleet, Asset & Access Intelligence",
  description:
    "Track what moves. Secure what matters. Control who gets in.",
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <StatsSection />
      <ServiceMapSection />
      <ProductsSection />
      <ProductsShowcase />
      <PlatformFlywheel />
      <PlatformSection />
      <CtaBand />
    </main>
  );
}