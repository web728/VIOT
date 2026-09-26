import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon, LockIcon, PinIcon, PulseIcon, SignalIcon } from "@/components/icons";
import { breadcrumbSchema, StructuredData } from "@/components/structured-data";
import { getProduct, orderedProducts, products, type ProductIcon } from "@/lib/products";
import * as MotionDiv from "framer-motion"; // or client wrapper motion component

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.lede,
    alternates: { canonical: `/products/${slug}` },
  };
}

function ProductIconComponent({ icon }: { icon: ProductIcon }) {
  if (icon === "lock") return <LockIcon />;
  if (icon === "pulse") return <PulseIcon />;
  if (icon === "video") return <PinIcon />;
  return <SignalIcon />;
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = orderedProducts.filter((item) => item.slug !== slug).slice(0, 4);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.lede,
    sku: `VIOT-${product.id.toUpperCase()}`,
    category: "Connected telematics and IoT hardware",
    url: `https://viot.in/products/${product.slug}`,
    brand: { "@type": "Brand", name: "VIoT" },
  };

  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }])} />
      
      {/* 1. Compact Page Hero */}
      <PageHero 
        breadcrumb={`Products / ${product.shortName}`}
        title={product.headline}
        lede={product.lede}
      />

      {/* 2. Product Showcase Section (Light Background with Scroll Motion) */}
      <section className="py-24 md:py-32 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image / Schematic Placeholder */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-line bg-white p-4 shadow-sm overflow-hidden group">
                <div className="absolute inset-4 rounded-xl border border-dashed border-line bg-paper/60 flex flex-col items-center justify-center text-center p-6 transition-colors group-hover:border-signal-dark">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">Device Visual / Photo</span>
                  <span className="text-[11px] text-muted/70 mt-1">Drop {product.shortName} high-res device image here</span>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Key Points */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">
                    {product.number} / Product Family
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full ${
                    product.inDevelopment 
                      ? "bg-amber/10 text-amber border border-amber/30 font-medium" 
                      : "bg-signal/10 text-signal-dark border border-signal/30 font-semibold"
                  }`}>
                    {product.status}
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-[1.15]">
                  {product.name}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                {product.description}
              </p>

              <ul className="space-y-3 pt-2">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink font-sans">
                    <span className="mt-1 flex-shrink-0 text-signal-dark"><CheckIcon /></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a 
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3 text-sm font-semibold text-ink shadow-2xs transition-all hover:border-signal-dark hover:bg-paper whitespace-nowrap" 
                  href="#specifications"
                >
                  View specifications
                </a>
                <Link 
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-3 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
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

      {/* 3. Part of One System (Dark Section with Flow Steps) */}
      <section className="py-24 md:py-32 bg-ink text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink-2 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Part of One System
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                The device is only useful when the data arrives.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-white/70 leading-relaxed font-sans">
                VIoT supplies the hardware and platform together, keeping one team accountable for the path from the asset to the operating decision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-3 transition-all hover:border-signal/40">
              <span className="font-mono text-xs font-semibold text-signal">01</span>
              <h3 className="text-lg font-semibold text-white tracking-tight">Capture</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">The device records the relevant vehicle, security or battery event.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-3 transition-all hover:border-signal/40">
              <span className="font-mono text-xs font-semibold text-signal">02</span>
              <h3 className="text-lg font-semibold text-white tracking-tight">Deliver</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">The data path carries the event into the shared platform.</p>
            </div>
            <div className="p-8 rounded-2xl border border-white/10 bg-ink-2/40 backdrop-blur-sm space-y-3 transition-all hover:border-signal/40">
              <span className="font-mono text-xs font-semibold text-signal">03</span>
              <h3 className="text-lg font-semibold text-white tracking-tight">Act</h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">The operating team sees current state, exceptions and history in context.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specifications Section (Light Background) */}
      <section className="py-24 md:py-32 bg-paper border-b border-line" id="specifications">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">Specifications</span>
              <h2 className="font-heading text-3xl font-semibold text-ink tracking-tight">What is verified today.</h2>
              <p className="text-sm text-muted leading-relaxed">
                Only confirmed capabilities are listed. Exact deployment fit is evaluated against the vehicle, operating environment and required workflow.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.specs.map(([name, value]) => (
                  <div key={name} className="p-4 rounded-xl border border-line bg-white shadow-2xs transition-all hover:border-signal-dark">
                    <strong className="block font-mono text-[10px] uppercase tracking-wider text-muted">{name}</strong>
                    <span className="block text-xs sm:text-sm font-semibold text-ink mt-1 tracking-tight">{value}</span>
                  </div>
                ))}
              </div>

              {product.note && (
                <div className="p-4 rounded-xl border border-amber/40 bg-amber/5 text-ink font-sans text-xs sm:text-sm leading-relaxed">
                  <strong className="font-semibold text-amber">Clear status:</strong> {product.note}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Continue Exploring Grid */}
      <section className="py-20 bg-paper/50 border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-muted block">Continue Exploring</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((item) => (
              <Link 
                href={`/products/${item.slug}`} 
                key={item.slug}
                className="group flex items-center justify-between p-5 rounded-xl border border-line bg-white shadow-2xs transition-all hover:border-signal-dark"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-muted">{item.number}</span>
                  <strong className="block text-sm font-semibold text-ink group-hover:text-signal-dark transition-colors">{item.shortName}</strong>
                </div>
                <ArrowIcon className="w-3.5 h-3.5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-signal-dark flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA Band */}
      <section className="relative py-28 md:py-36 bg-ink text-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-signal/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-between rounded-3xl border border-white/10 bg-ink-2/60 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
            
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
                Fit Before Pitch
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-[1.15]">
                Start with the operating conditions.
              </h2>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col lg:items-end gap-5 items-start lg:text-right">
              <p className="text-xs sm:text-sm text-white/60 font-sans max-w-sm leading-relaxed">
                Tell us what is running, where it operates and where the current data path fails. Bharat or Vyom will reply directly.
              </p>
              <div className="w-full sm:w-auto flex lg:justify-end">
                <Link 
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(39,213,155,0.35)]" 
                  href="/contact"
                >
                  Write to VIoT 
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