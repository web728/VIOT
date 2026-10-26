import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { solutions } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Industries | VIoT",
  description:
    "Explore VIoT applications across logistics, electric mobility, cement and mining, FMCG, pharmaceuticals and chemicals, infrastructure and security, and student transportation.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24]">
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -left-52 top-[10%] h-[480px] w-[480px] rounded-full bg-[#27d59b]/[0.035] blur-3xl" />
          <div className="absolute -right-52 bottom-[-20%] h-[620px] w-[620px] rounded-full bg-white/[0.018] blur-3xl" />
          <svg
            viewBox="0 0 1600 700"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <path
              d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
              stroke="rgba(255,255,255,0.055)"
              strokeWidth="1"
            />
            <path
              d="M-180 560 C120 390 390 430 680 535 S1130 700 1780 455"
              stroke="rgba(39,213,155,0.16)"
              strokeWidth="1.2"
              strokeDasharray="3 15"
            />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 xl:px-16">
          <div className="max-w-[980px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#27d59b]" />
              <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#27d59b]">
                VIoT / Industries
              </span>
            </div>

            <h1 className="mt-5 max-w-[960px] font-heading text-[36px] font-semibold leading-[0.92] tracking-[-2px] sm:text-[52px] sm:tracking-[-3px] lg:text-[76px] lg:tracking-[-4.5px]">
              Connected intelligence for real operating environments.
            </h1>

            <p className="mt-6 max-w-[700px] font-sans text-[16px] font-normal leading-[28px] text-white/70 lg:text-[18px]">
              Explore how VIoT applies connected hardware, monitoring and operational intelligence across seven industry environments.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24 xl:px-16">
        <div className="border-b border-[#cdd5d2] pb-6">
          <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#007c67]">
            Industry applications
          </span>
        </div>

        <div className="divide-y divide-[#cdd5d2]">
          {solutions.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group grid gap-5 py-8 transition-colors hover:bg-white/45 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-start sm:px-2 lg:py-10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white font-sans text-[12px] font-medium text-[#007c67]">
                {industry.number}
              </span>

              <div className="max-w-[920px]">
                <p className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.12em] text-[#007c67]">
                  {industry.name}
                </p>
                <h2 className="mt-3 font-heading text-[26px] font-semibold leading-[1.3] text-[#081b24] sm:text-[30px] lg:text-[36px]">
                  {industry.headline}
                </h2>
                <p className="mt-3 max-w-[700px] font-sans text-[16px] font-normal leading-[26px] text-[#607078]">
                  {industry.lede}
                </p>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c8d5d0] bg-white text-[#007c67] transition-all group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
