import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { ServiceMapSection } from "@/components/home/ServiceMapSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { ProductsShowcase } from "@/components/home/ProductsShowcase";
import { PlatformSection } from "@/components/home/PlatformSection";
import { CtaBand } from "@/components/home/CtaBand";

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
      <PlatformSection />
      <CtaBand />
    </main>
  );
}
