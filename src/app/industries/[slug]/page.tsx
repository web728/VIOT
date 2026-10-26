import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";

import { getSolution, solutions } from "@/lib/solutions";

export const dynamicParams = false;

type IndustryPageParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageParams): Promise<Metadata> {
  const { slug } = await params;
  const industry = getSolution(slug);

  if (!industry) return {};

  return {
    title: `${industry.name} | VIoT Industries`,
    description: industry.lede,
    alternates: {
      canonical: `/industries/${slug}`,
    },
  };
}

export default async function IndustryDetailPage({
  params,
}: IndustryPageParams) {
  const { slug } = await params;
  const industry = getSolution(slug);

  if (!industry) notFound();

  return (
    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24]">
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-48 top-[8%] h-[500px] w-[500px] rounded-full bg-[#27d59b]/[0.035] blur-3xl" />
          <div className="absolute -right-52 bottom-[-18%] h-[620px] w-[620px] rounded-full bg-white/[0.015] blur-3xl" />
          <svg viewBox="0 0 1600 760" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
            <path d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235" stroke="rgba(255,255,255,0.055)" strokeWidth="1" />
            <path d="M-180 610 C120 430 390 470 680 585 S1130 760 1780 500" stroke="rgba(39,213,155,0.16)" strokeWidth="1.2" strokeDasharray="3 15" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-sans text-[13px] font-medium leading-[18px] text-white/60 transition-colors hover:text-[#27d59b]"
          >
            <ArrowLeft className="h-4 w-4" />
            Industries
          </Link>

          <div className="mt-9 max-w-[980px]">
            <div className="flex items-center gap-3">
              <span className="flex h-8 min-w-8 items-center justify-center rounded-lg border border-[#27d59b]/20 bg-[#27d59b]/[0.06] px-2 font-sans text-[12px] font-medium text-[#27d59b]">
                {industry.number}
              </span>
              <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-white/50">
                {industry.name}
              </span>
            </div>

            <h1 className="mt-5 max-w-[1000px] font-heading text-[36px] font-semibold leading-[0.92] tracking-[-2px] sm:text-[52px] sm:tracking-[-3px] lg:text-[76px] lg:tracking-[-4.5px]">
              {industry.headline}
            </h1>

            <p className="mt-6 max-w-[700px] font-sans text-[16px] font-normal leading-[28px] text-white/70 lg:text-[18px]">
              {industry.lede}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-24">
        <div className="mb-8 grid gap-4 border-b border-[#cdd5d2] pb-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#007c67]">
              Industry challenges and VIoT response
            </span>
            <h2 className="mt-4 max-w-[760px] font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] lg:text-[46px]">
              From operating challenge to connected response.
            </h2>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_18px_55px_rgba(8,27,36,0.05)]">
          <div className="hidden grid-cols-[64px_minmax(0,1fr)_64px_minmax(0,1fr)] border-b border-[#d8e1de] bg-[#eef2ef] px-6 py-4 lg:grid">
            <span />
            <span className="font-sans text-[12px] font-semibold uppercase leading-[18px] tracking-[0.1em] text-[#607078]">
              Industry challenge
            </span>
            <span />
            <span className="font-sans text-[12px] font-semibold uppercase leading-[18px] tracking-[0.1em] text-[#007c67]">
              Our solution
            </span>
          </div>

          <div className="divide-y divide-[#d8e1de]">
            {industry.rows.map((row, index) => (
              <article
                key={`${industry.slug}-${row.challenge}`}
                className="grid gap-5 px-5 py-6 sm:px-6 lg:grid-cols-[64px_minmax(0,1fr)_64px_minmax(0,1fr)] lg:items-start lg:gap-6 lg:py-7"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c8d5d0] bg-[#f4f6f2] font-sans text-[12px] font-medium text-[#607078]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.1em] text-[#607078] lg:hidden">
                    Industry challenge
                  </span>
                  <h3 className="mt-2 font-heading text-[20px] font-semibold leading-[1.3] text-[#081b24] lg:mt-0 lg:text-[22px]">
                    {row.challenge}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] font-normal leading-[22px] text-[#607078]">
                    {row.challengeText}
                  </p>
                </div>

                <div className="flex items-center justify-center lg:pt-1">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.04] text-[#007c67]">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>

                <div>
                  <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.1em] text-[#007c67] lg:hidden">
                    Our solution
                  </span>
                  <h3 className="mt-2 font-heading text-[20px] font-semibold leading-[1.3] text-[#081b24] lg:mt-0 lg:text-[22px]">
                    {row.solution}
                  </h3>
                  <p className="mt-3 font-sans text-[14px] font-normal leading-[22px] text-[#607078]">
                    {row.solutionText}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#cdd5d2] bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-12 lg:items-center lg:px-12 lg:py-20">
          <div className="lg:col-span-8">
            <h2 className="font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] lg:text-[46px]">
              Discuss your operating environment.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#007c67] px-5 font-sans text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
