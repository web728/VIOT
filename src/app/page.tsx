import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection"; 
import { ProductsSection } from "@/components/home/ProductsSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { CtaBand } from "@/components/home/CtaBand";
import { ServiceMapSection } from "@/components/home/ServiceMapSection";


export const metadata: Metadata = {
  title: "VIoT — Fleet, Asset & Access Intelligence",
  description: "Track what moves. Secure what matters. Control who gets in.",
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#081b24] text-white selection:bg-[#27d59b] selection:text-[#081b24]">
      <HeroSection />
      <StatsSection /> {/* Hero aur Stats ab bilkul clean aur alag hain */}
      <ServiceMapSection/>
     
      <ProductsSection />
      <PlatformSection />
      <CtaBand />
    </main>
  );
}