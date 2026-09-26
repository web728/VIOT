import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { breadcrumbSchema, StructuredData } from "@/components/structured-data";
import { getSolution, solutions } from "@/lib/solutions";
import { CtaBand } from "@/components/home/CtaBand";

export const dynamicParams = false;
export function generateStaticParams() { return solutions.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return { title: solution.name, description: solution.lede, alternates: { canonical: `/solutions/${slug}` } };
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${solution.name} connected operations solution`,
    description: solution.lede,
    url: `https://viot.tech/solutions/${solution.slug}`,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@id": "https://viot.tech/#organization" },
  };

  return (
    <div className="bg-[#081b24] text-white selection:bg-[#24C491] selection:text-[#081b24] overflow-hidden">
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: solution.name, path: `/solutions/${solution.slug}` }])} />
      
      {/* 1. Page Hero with Signature Brand Background */}
      <section className="relative bg-gradient-to-b from-[#06141a] via-[#081b24] to-[#081b24] pt-12 pb-16 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#24C491]/10 rounded-full blur-[150px] pointer-events-none" />
        <PageHero 
          breadcrumb={`Solutions / ${solution.name}`}
          title={solution.headline}
          lede={solution.lede}
        />
      </section>

      {/* 2. Solution Focus Section */}
      <section className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Focus Narrative & Priorities */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#007c67] bg-[#24C491]/10 border border-[#24C491]/30 px-3 py-1 rounded-full font-semibold inline-block">
                  {solution.number} / Solution Area
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                  What the evaluation centres on.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                VIoT starts with the current operation and confirms product, connectivity and integration scope before making a deployment recommendation.
              </p>

              <ul className="space-y-3 pt-2">
                {solution.priorities.map((priority) => (
                  <li key={priority} className="flex items-start gap-3 text-sm text-slate-800 font-sans">
                    <span className="mt-1 flex-shrink-0 text-[#24C491]"><CheckIcon /></span>
                    <span className="leading-relaxed">{priority}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Operating Environment Visual Core */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl border border-slate-200 bg-slate-900 p-6 shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(#24C491_1px,transparent_1px)] opacity-10 [background-size:16px_16px]" />
                <div className="absolute inset-4 rounded-2xl border border-dashed border-slate-700 bg-slate-950/80 flex flex-col items-center justify-center text-center p-6 transition-colors group-hover:border-[#24C491]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#24C491]">Operating Context Visual</span>
                  <span className="text-xs text-slate-400 mt-1 max-w-xs">{solution.name} — Real-Time Field Telemetry</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Hardware + Platform Section (Dark Section) */}
      <section className="py-24 md:py-32 bg-[#081b24] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#24C491]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-3 text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#24C491] bg-[#24C491]/10 border border-[#24C491]/30 px-3.5 py-1.5 rounded-full inline-block">
                Hardware + Platform
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                One path from field event to operating response.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-5 text-left">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Devices, connectivity and the VIoT platform are evaluated together so the customer is not left reconciling separate vendors when the data breaks.
              </p>
              <div>
                <Link 
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[#24C491] hover:text-white transition-colors whitespace-nowrap" 
                  href="/platform"
                >
                  See the platform 
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Closing 3D Floating Truck CTA Band Component */}
      <CtaBand />

    </div>
  );
}