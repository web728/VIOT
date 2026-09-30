import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

import { PageHero } from "@/components/page-hero";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import {
  breadcrumbSchema,
  StructuredData,
} from "@/components/structured-data";
import {
  getProduct,
  orderedProducts,
  products,
} from "@/lib/products";
import { CtaBand } from "@/components/home/CtaBand";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  return {
    title: product.name,
    description: product.lede,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

/* ============================================================
   PRODUCT IMAGE MAPPING
============================================================ */

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

/* ============================================================
   PRODUCT DATA FLOW
============================================================ */

function getProductFlow(slug: string) {
  switch (slug) {
    case "vehicle-telematics":
      return {
        source: "Vehicle",
        device: "Telematics Device",
        data: "Location · Movement · Vehicle data",
        output: "Fleet Operations",
      };

    case "video-telematics":
      return {
        source: "Vehicle",
        device: "Video Device",
        data: "Video · Events · Vehicle context",
        output: "Safety Operations",
      };

    case "smart-locks":
      return {
        source: "Cargo",
        device: "Electronic Lock",
        data: "Lock state · Tamper · Access",
        output: "Cargo Security",
      };

    case "asset-tracking":
      return {
        source: "Asset",
        device: "Asset Tracker",
        data: "Location · Motion · Status",
        output: "Asset Operations",
      };

    case "iot-sensors":
      return {
        source: "Environment",
        device: "IoT Sensor",
        data: "Temperature · Fuel · Load",
        output: "Operational Monitoring",
      };

    default:
      return {
        source: "Physical world",
        device: "VIoT Device",
        data: "Connected events",
        output: "Operational action",
      };
  }
}

const premiumStyles = `
  @keyframes viotPulse {
    0%, 100% {
      transform: scale(.8);
      opacity: .35;
    }

    50% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes viotScan {
    0% {
      transform: translateX(-120%);
    }

    100% {
      transform: translateX(120%);
    }
  }

  @keyframes viotFloat {
    0%, 100% {
      transform: translate3d(0, 0, 0);
    }

    50% {
      transform: translate3d(0, -8px, 0);
    }
  }

  .viot-premium-grid {
    background-image:
      linear-gradient(rgba(8,27,36,.045) 1px, transparent 1px),
      linear-gradient(90deg, rgba(8,27,36,.045) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  .viot-scan::after {
    content: "";
    position: absolute;
    inset: 0 auto 0 0;
    width: 28%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(39,213,155,.12),
      transparent
    );
    animation: viotScan 4s ease-in-out infinite;
    pointer-events: none;
  }

  .viot-float {
    animation: viotFloat 5s ease-in-out infinite;
  }

  .viot-pulse {
    animation: viotPulse 2s ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .viot-scan::after,
    .viot-float,
    .viot-pulse {
      animation: none;
    }
  }
`;

/* ============================================================
   PAGE
============================================================ */

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = orderedProducts
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  const productImage = getProductImage(slug);

  const flow = getProductFlow(slug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.lede,
    sku: `VIOT-${product.id.toUpperCase()}`,
    category: "Connected telematics and IoT hardware",
    url: `https://viot.tech/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "VIoT",
    },
  };

  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24]">
       <style dangerouslySetInnerHTML={{ __html: premiumStyles }} />
      <StructuredData data={productSchema} />

      <StructuredData
        data={breadcrumbSchema([
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Products",
            path: "/products",
          },
          {
            name: product.name,
            path: `/products/${product.slug}`,
          },
        ])}
      />

      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#cdd5d2] bg-[#f4f6f2] viot-premium-grid">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#27d59b]/[0.055] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-[12%] h-[360px] w-[360px] rounded-full bg-[#007c67]/[0.035] blur-3xl" />
        <div className="relative z-10">
          <PageHero
            breadcrumb={`Products / ${product.shortName}`}
            title={product.headline}
            lede={product.lede}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#007c67]/30 to-transparent" />
      </section>

      {/* =====================================================
          02 — PRODUCT SHOWCASE
      ===================================================== */}

      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Product image */}

            <div className="lg:col-span-7">
              <div className="group viot-scan relative overflow-hidden border border-[#dce3e0] bg-[#eef2ef] shadow-[0_30px_80px_-45px_rgba(8,27,36,.45)]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={productImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
                  />

                  {/* Image technical label */}
                  <div className="absolute left-5 top-5 border border-white/20 bg-[#081b24]/90 px-3 py-2 backdrop-blur-sm">
                    <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#27d59b]">
                      VIoT / {product.shortName}
                    </span>
                  </div>

                  {/* Bottom information line */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#081b24]/90 px-5 py-3 backdrop-blur-sm">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/55">
                        {product.number} / Hardware
                      </span>

                      <span
                        className={`font-mono text-[8px] uppercase tracking-[0.14em] ${
                          product.inDevelopment
                            ? "text-[#ffb321]"
                            : "text-[#27d59b]"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l border-t border-[#27d59b]/50" />
                  <div className="pointer-events-none absolute right-4 top-4 h-7 w-7 border-r border-t border-white/30" />
                  <div className="pointer-events-none absolute bottom-16 right-5 flex items-center gap-2 border border-white/15 bg-[#081b24]/75 px-2.5 py-1.5 backdrop-blur-md">
                    <span className="viot-pulse h-1.5 w-1.5 rounded-full bg-[#27d59b]" />
                    <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-white/65">
                      Edge signal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Product narrative */}

         <div className="lg:col-span-5">
  <div className="max-w-xl lg:pl-2">

    {/* Product label */}
    <div className="flex items-center gap-3">
      <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#007c67]">
        {product.number} / Product
      </span>

      <span className="h-px w-8 bg-[#cdd5d2]" />
    </div>

    {/* Product title */}
    <h1 className="mt-5 font-heading text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-[#081b24] sm:text-4xl lg:text-[50px]">
      {product.name}
    </h1>

    {/* Description */}
    <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#607078]">
      {product.description}
    </p>

    {/* Key points */}
    <div className="mt-9 border-t border-[#cdd5d2]">
      {product.points.map((point, index) => (
        <div
          key={point}
          className="group flex items-start gap-4 border-b border-[#e5eae7] py-4 transition-all duration-300 hover:border-[#c5d4ce] hover:bg-[#f8faf9]"
        >
          {/* Number */}
          <span className="w-5 shrink-0 pt-0.5 font-mono text-[8px] font-medium tracking-[0.08em] text-[#9aa5a1] transition-colors duration-300 group-hover:text-[#007c67]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Small check */}
          <span className="mt-[2px] flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded-full border border-[#b9d8cd] bg-[#f1f8f5]">
            <CheckIcon className="h-[9px] w-[9px] text-[#007c67]" />
          </span>

          {/* Point text */}
          <span className="pr-2 text-[12px] leading-[1.6] text-[#24353d] transition-colors duration-300 group-hover:text-[#081b24]">
            {point}
          </span>
        </div>
      ))}
    </div>

    {/* Actions */}
    <div className="mt-9 flex flex-wrap items-center gap-5">
      <a
        href="#specifications"
        className="group inline-flex items-center gap-2 border-b border-[#081b24] pb-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-all duration-300 hover:border-[#007c67] hover:text-[#007c67]"
      >
        View specifications

        <span className="text-[12px] transition-transform duration-300 group-hover:translate-y-0.5">
          ↓
        </span>
      </a>

      <Link
        href="/contact"
        className="group inline-flex min-h-11 items-center gap-3 bg-[#081b24] px-5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white! transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#007c67] hover:shadow-[0_12px_25px_-12px_rgba(0,124,103,0.45)]"
      >
        Get in touch

        <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>

  </div>
</div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — DATA JOURNEY
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-white/[0.10] bg-[#081b24] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full border border-[#27d59b]/[0.07]" />
          <div className="absolute right-[4%] bottom-[8%] h-96 w-96 rounded-full border border-white/[0.035]" />
        </div>
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#27d59b]">
                  Connected journey
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
                The device captures it.
                <br />
                The platform makes it useful.
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-6 text-white/50 lg:col-span-5 lg:ml-auto">
              {product.name} sits at the edge of the VIoT system, turning a
              physical event into connected information that can be understood
              and acted on.
            </p>
          </div>

          {/* Flow */}

          <div className="mt-14 border-y border-white/[0.10]">
            <div className="grid lg:grid-cols-4">
              {[
                {
                  number: "01",
                  label: flow.source,
                  text: "Physical world",
                },
                {
                  number: "02",
                  label: flow.device,
                  text: "Capture",
                },
                {
                  number: "03",
                  label: flow.data,
                  text: "Connected data",
                },
                {
                  number: "04",
                  label: flow.output,
                  text: "Operational outcome",
                },
              ].map((item, index) => (
                <div
                  key={item.number}
                  className={`group relative min-h-[150px] p-6 sm:p-7 ${
                    index < 3
                      ? "border-b border-white/[0.10] lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#27d59b]">
                      {item.number}
                    </span>

                    {index < 3 && (
                      <span className="hidden font-mono text-[10px] text-white/20 lg:block">
                        →
                      </span>
                    )}
                  </div>

                  <div className="mt-8">
                    <h3 className="font-heading text-base font-semibold tracking-[-0.015em] text-white/90">
                      {item.label}
                    </h3>

                    <p className="mt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-white/30">
                      {item.text}
                    </p>
                  </div>

                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#27d59b] transition-all duration-500 group-hover:w-full" />
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.18em] text-white/25">
            Physical event → connected data → operational context
          </p>
        </div>
      </section>

      {/* =====================================================
          04 — SPECIFICATIONS
      ===================================================== */}

      <section
        id="specifications"
        className="border-b border-[#cdd5d2] bg-[#f4f6f2]"
      >
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Intro */}

            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#007c67]">
                  Technical profile
                </span>

                <span className="h-px w-8 bg-[#cdd5d2]" />
              </div>

              <h2 className="mt-5 font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl">
                What is verified today.
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-6 text-[#607078]">
                Only confirmed capabilities are listed. Final deployment fit
                depends on the vehicle, asset, environment and operating
                requirement.
              </p>
            </div>

            {/* Specs */}

            <div className="lg:col-span-7 lg:col-start-6">
              <div className="border-t border-[#cdd5d2]">
                {product.specs.map(([name, value], index) => (
                  <div
                    key={name}
                    className="group relative grid gap-3 border-b border-[#cdd5d2] py-5 pl-0 pr-2 transition-all duration-300 hover:pl-3 hover:bg-white/60 sm:grid-cols-[220px_1fr]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[8px] text-[#9aa5a1]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <strong className="font-mono text-[9px] font-medium uppercase tracking-[0.12em] text-[#607078]">
                        {name}
                      </strong>
                    </div>

                    <span className="text-[13px] font-medium leading-5 text-[#081b24] transition-colors group-hover:text-[#007c67]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {product.note && (
                <div className="mt-8 border-l-2 border-[#ffb321] bg-[#ffb321]/[0.06] px-5 py-4">
                  <p className="text-xs leading-6 text-[#607078]">
                    <strong className="font-semibold text-[#a56d00]">
                      Clear status:
                    </strong>{" "}
                    {product.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — RELATED PRODUCTS
      ===================================================== */}

      <section className="border-b border-[#cdd5d2] bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-20 xl:px-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#007c67]">
                Continue exploring
              </span>

              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                More from the VIoT ecosystem.
              </h2>
            </div>

            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-colors hover:text-[#007c67]"
            >
              View all products

              <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-10 grid border-t border-[#cdd5d2] sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item, index) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className={`group relative flex min-h-[145px] flex-col justify-between border-b border-[#cdd5d2] p-5 transition-all duration-400 hover:-translate-y-1 hover:bg-[#f4f6f2] hover:shadow-[0_20px_45px_-35px_rgba(8,27,36,.45)] sm:min-h-[165px] lg:border-b-0 ${
                  index < related.length - 1
                    ? "lg:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[8px] text-[#9aa5a1]">
                    {item.number}
                  </span>

                  <ArrowIcon className="h-3 w-3 text-[#9aa5a1] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#007c67]" />
                </div>

                <div>
                  <h3 className="font-heading text-sm font-semibold tracking-[-0.015em] transition-colors group-hover:text-[#007c67]">
                    {item.shortName}
                  </h3>

                  <span className="mt-2 block font-mono text-[7px] uppercase tracking-[0.14em] text-[#9aa5a1]">
                    Connected hardware
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — CTA
      ===================================================== */}

      <CtaBand />
    </main>
  );
}