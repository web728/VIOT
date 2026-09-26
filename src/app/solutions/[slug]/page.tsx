import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { breadcrumbSchema, StructuredData } from "@/components/structured-data";
import { getSolution, solutions } from "@/lib/solutions";

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
    url: `https://viot.in/solutions/${solution.slug}`,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@id": "https://viot.in/#organization" },
  };

  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Solutions", path: "/solutions" }, { name: solution.name, path: `/solutions/${solution.slug}` }])} />
      
      {/* 1. Compact Page Hero */}
      <PageHero 
        breadcrumb={`Solutions / ${solution.name}`}
        title={solution.headline}
        lede={solution.lede}
      />

      {/* 2. Solution Focus Section (Light Background with Balanced Grid & Image Slot) */}
      <section className="py-24 md:py-32 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Focus Narrative & Priorities */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                  {solution.number} / Solution Area
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-[1.15]">
                  What the evaluation centres on.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                VIoT starts with the current operation and confirms product, connectivity and integration scope before making a deployment recommendation.
              </p>

              <ul className="space-y-3 pt-2">
                {solution.priorities.map((priority) => (
                  <li key={priority} className="flex items-start gap-3 text-sm text-ink font-sans">
                    <span className="mt-1 flex-shrink-0 text-signal-dark"><CheckIcon /></span>
                    <span className="leading-relaxed">{priority}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Operating Environment Image Placeholder Slot */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-line bg-white p-4 shadow-sm overflow-hidden group">
                <div className="absolute inset-4 rounded-xl border border-dashed border-line bg-paper/60 flex flex-col items-center justify-center text-center p-6 transition-colors group-hover:border-signal-dark">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Operating Context Visual</span>
                  <span className="text-[11px] text-muted/70 mt-1">Drop {solution.name} field deployment photo here</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Hardware + Platform Section (Dark Background) */}
      <section className="py-24 md:py-32 bg-ink text-white border-b border-white/15 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Hardware + Platform
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                One path from field event to operating response.
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans">
                Devices, connectivity and the VIoT platform are evaluated together so the customer is not left reconciling separate vendors when the data breaks.
              </p>
              <div>
                <Link 
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-signal hover:text-white transition-colors whitespace-nowrap" 
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

      {/* 4. Closing CTA Band */}
      <section className="relative py-28 md:py-36 bg-ink text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between rounded-3xl border border-white/10 bg-ink-2/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Fit Before Proposal
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Bring us the actual requirement.
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start lg:text-right">
              <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm leading-relaxed">
                No automated demo queue. Bharat or Vyom will review the operating context and reply directly.
              </p>
              <div className="w-full sm:w-auto flex lg:justify-end">
                <Link 
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
                  href="/contact"
                >
                  Get in touch 
                  <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}