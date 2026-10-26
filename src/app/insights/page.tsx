
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | VIoT",
  description:
    "Practical guidance on telematics, connected mobility, compliance and fleet technology.",
};

export default function InsightsPage() {
  return (
    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24]">
      <section className="border-b border-[#cdd5d2] bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1240px] px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24">
          <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#27d59b]">
            VIoT / Insights
          </span>

          <h1 className="mt-5 max-w-[900px] font-heading text-[36px] font-semibold leading-[0.92] tracking-[-2px] sm:text-[52px] sm:tracking-[-3px] lg:text-[76px] lg:tracking-[-4.5px]">
            Practical answers for connected operations.
          </h1>

          <p className="mt-6 max-w-[700px] font-sans text-[16px] font-normal leading-[28px] text-white/70 lg:text-[18px]">
            Clear guidance on telematics, compliance, connected hardware and the decisions fleet operators have to make before and after deployment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="border-b border-[#cdd5d2] pb-6">
          <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#007c67]">
            Latest insights
          </span>
        </div>

        <div className="divide-y divide-[#cdd5d2]">
          {insights.map((article, index) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group grid gap-5 py-8 transition-colors hover:bg-white/45 sm:grid-cols-[64px_1fr_auto] sm:items-start sm:px-2 lg:py-10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white font-sans text-[12px] font-medium text-[#007c67]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="max-w-[780px]">
                <div className="flex flex-wrap items-center gap-3 font-sans text-[12px] font-medium leading-[18px] text-[#607078]">
                  <span className="text-[#007c67]">{article.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#607078]/35" />
                  <span>{article.readingTime}</span>
                </div>

                <h2 className="mt-3 font-heading text-[26px] font-semibold leading-[1.3] text-[#081b24] sm:text-[32px] lg:text-[38px]">
                  {article.title}
                </h2>

                <p className="mt-3 max-w-[700px] font-sans text-[16px] font-normal leading-[26px] text-[#607078]">
                  {article.excerpt}
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
