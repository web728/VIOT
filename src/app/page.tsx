import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ThesisSection } from "@/components/home/ThesisSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "VIoT — Fleet, Asset & Access Intelligence",
  description: "Track what moves. Secure what matters. Control who gets in.",
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#081b24] text-white selection:bg-[#27d59b] selection:text-[#081b24]">
      <HeroSection />
      <ThesisSection />
       <IndustriesSection />
      <ProductsSection />
      <PlatformSection />
     
      <CtaBand />
    </main>
  );
}