import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon, LockIcon, PinIcon, PulseIcon, SignalIcon } from "@/components/icons";
import { breadcrumbSchema, StructuredData } from "@/components/structured-data";
import { getProduct, orderedProducts, products, type ProductIcon } from "@/lib/products";
import { CtaBand } from "@/components/home/CtaBand";
import Image from "next/image";

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

// Helper to map product slug to its actual image path
function getProductImage(slug: string) {
  switch (slug) {
    case "vehicle-telematics":
      return "/image/video.png";
    case "video-telematics":
      return "/image/car.jpeg";
    case "smart-locks":
      return "/image/lock.png";
    case "asset-tracking":
      return "/image/lab.jpeg";
    case "iot-sensors":
      return "/image/ev.jpeg";
    default:
      return "/image/video.png";
  }
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = orderedProducts.filter((item) => item.slug !== slug).slice(0, 4);
  const productImage = getProductImage(slug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.lede,
    sku: `VIOT-${product.id.toUpperCase()}`,
    category: "Connected telematics and IoT hardware",
    url: `https://viot.tech/products/${product.slug}`,
    brand: { "@type": "Brand", name: "VIoT" },
  };

  return (
    <div className="bg-[#081b24] text-white selection:bg-[#24C491] selection:text-[#081b24] overflow-hidden">
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: product.name, path: `/products/${product.slug}` }])} />
      
      {/* 1. Page Hero with Signature Brand Background */}
      <section className="relative bg-gradient-to-b from-[#06141a] via-[#081b24] to-[#081b24]  overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#24C491]/10 rounded-full blur-[150px] pointer-events-none" />
        <PageHero 
          breadcrumb={`Products / ${product.shortName}`}
          title={product.headline}
          lede={product.lede}
        />
      </section>

      {/* 2. Product Showcase Section with Real Mapped Image */}
      <section className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Real Product Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl overflow-hidden group">
                <Image
                  src={productImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/20 bg-slate-950/80 px-4 py-2.5 backdrop-blur-md">
                    <span className="font-mono text-xs text-white font-medium">{product.shortName}</span>
                    <span className="font-mono text-[10px] text-[#24C491] uppercase tracking-wider">Zero-Drop Telemetry</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative & Key Points */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    {product.number} / Product Family
                  </span>
                  <span className={`font-mono text-[11px] uppercase tracking-wider px-3 py-1 rounded-full ${
                    product.inDevelopment 
                      ? "bg-amber-500/10 text-amber-500 border border-amber-500/30 font-medium" 
                      : "bg-[#24C491]/10 text-[#007c67] border border-[#24C491]/30 font-semibold"
                  }`}>
                    {product.status}
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                  {product.name}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                {product.description}
              </p>

              <ul className="space-y-3 pt-2">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-800 font-sans">
                    <span className="mt-1 flex-shrink-0 text-[#24C491]"><CheckIcon /></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a 
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-7 py-3 text-sm font-semibold text-slate-900 transition-all hover:border-[#24C491] hover:bg-white whitespace-nowrap shadow-xs" 
                  href="#specifications"
                >
                  View specifications
                </a>
                <Link 
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#24C491] px-8 py-3 text-sm font-semibold text-[#081b24] whitespace-nowrap transition-all hover:bg-white hover:shadow-[0_0_25px_rgba(36,196,145,0.35)]" 
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

      {/* 3. Part of One System (Dark Section) */}
      <section className="py-24 md:py-32 bg-[#081b24] text-white border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[300px] bg-[#24C491]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7 space-y-3 text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#24C491] bg-[#24C491]/10 border border-[#24C491]/30 px-3.5 py-1.5 rounded-full inline-block">
                Part of One System
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                The device is only useful when the data arrives.
              </h2>
            </div>
            <div className="lg:col-span-5 text-left">
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                VIoT supplies the hardware and platform together, keeping one team accountable for the path from the asset to the operating decision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Capture", desc: "The device records the relevant vehicle, security or battery event." },
              { num: "02", title: "Deliver", desc: "The data path carries the event into the shared platform." },
              { num: "03", title: "Act", desc: "The operating team sees current state, exceptions and history in context." }
            ].map((step) => (
              <div key={step.num} className="p-8 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl space-y-3 transition-all hover:border-[#24C491] text-left">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-[#24C491]/15 text-[#24C491] border border-[#24C491]/30">{step.num}</span>
                <h3 className="text-lg font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Specifications Section */}
      <section className="py-24 md:py-32 bg-white text-slate-900 border-b border-slate-200" id="specifications">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-4 space-y-3 lg:sticky lg:top-28 text-left">
              <span className="font-mono text-xs uppercase tracking-widest text-[#007c67] bg-[#24C491]/10 border border-[#24C491]/30 px-3 py-1 rounded-full font-semibold inline-block">
                Specifications
              </span>
              <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">What is verified today.</h2>
              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Only confirmed capabilities are listed. Exact deployment fit is evaluated against the vehicle, operating environment and required workflow.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.specs.map(([name, value]) => (
                  <div key={name} className="p-5 rounded-2xl border border-slate-200 bg-[#f8f9fa] shadow-2xs transition-all hover:border-[#24C491] text-left">
                    <strong className="block font-mono text-[10px] uppercase tracking-wider text-slate-500">{name}</strong>
                    <span className="block text-xs sm:text-sm font-semibold text-slate-900 mt-1 tracking-tight">{value}</span>
                  </div>
                ))}
              </div>

              {product.note && (
                <div className="p-5 rounded-2xl border border-amber-500/40 bg-amber-500/5 text-slate-900 font-sans text-xs sm:text-sm leading-relaxed text-left">
                  <strong className="font-semibold text-amber-600">Clear status:</strong> {product.note}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. Continue Exploring Grid */}
      <section className="py-20 bg-[#f8f9fa] text-slate-900 border-b border-slate-200">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-6 text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500 block">Continue Exploring</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((item) => (
              <Link 
                href={`/products/${item.slug}`} 
                key={item.slug}
                className="group flex items-center justify-between p-5 rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:border-[#24C491] hover:shadow-md"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-slate-400">{item.number}</span>
                  <strong className="block text-sm font-semibold text-slate-900 group-hover:text-[#007c67] transition-colors">{item.shortName}</strong>
                </div>
                <ArrowIcon className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#24C491] flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA Band Component with 3D Truck */}
      <CtaBand />

    </div>
  );
}