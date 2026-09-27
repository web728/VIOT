import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { ArrowIcon } from "@/components/icons";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "Products — Fleet, Asset & Access Intelligence",
  description:
    "Explore VIoT hardware for vehicle telematics, video telematics, smart locks, asset tracking and IoT sensing.",
  alternates: {
    canonical: "/products",
  },
};

const productGroups = [
  {
    number: "01",
    title: "Fleet Intelligence",
    description:
      "Connected hardware for understanding vehicle location, movement and operational events.",
    products: [
      {
        number: "01.01",
        title: "Vehicle Telematics",
        description:
          "Connected vehicle hardware that captures location, movement and operational data for the VIoT platform.",
        image: "/image/video.png",
        href: "/products/vehicle-telematics",
        label: "Vehicle / Telematics",
      },
      {
        number: "01.02",
        title: "Video Telematics",
        description:
          "A visual layer for vehicle operations, combining vehicle context with camera-based information.",
        image: "/image/car.jpeg",
        href: "/products/video-telematics",
        label: "Vehicle / Video",
      },
    ],
  },
  {
    number: "02",
    title: "Asset Intelligence",
    description:
      "Hardware for securing, locating and sensing the assets that move through your operation.",
    products: [
      {
        number: "02.01",
        title: "Smart Logistics Locks",
        description:
          "Electronic locking technology designed to connect physical cargo security with digital visibility.",
        image: "/image/lock.png",
        href: "/products/smart-logistics-locks",
        label: "Asset / Security",
      },
      {
        number: "02.02",
        title: "Smart Infra Locks",
        description:
          "Connected locking systems for infrastructure and controlled physical access requirements.",
        image: "/image/lock.png",
        href: "/products/smart-infra-locks",
        label: "Infrastructure / Security",
      },
      {
        number: "02.03",
        title: "Asset Tracking",
        description:
          "Tracking hardware for assets that need visibility even when they are not connected to a vehicle.",
        image: "/image/lab.jpeg",
        href: "/products/asset-trackers",
        label: "Asset / Tracking",
      },
      {
        number: "02.04",
        title: "IoT Sensors",
        description:
          "Connected sensing for applications where environmental or operational conditions need to be monitored.",
        image: "/image/ev.jpeg",
        href: "/products/iot-sensors",
        label: "Asset / Sensing",
      },
    ],
  },
  {
    number: "03",
    title: "Access Control",
    description:
      "Connected systems for controlling and understanding access to physical environments.",
    products: [
      {
        number: "03.01",
        title: "Access Control",
        description:
          "Connected access technology designed to bring physical entry events into a unified operational view.",
        image: "/image/lock.png",
        href: "/products/access-control",
        label: "Access / Control",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24]">
      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <PageHero
        breadcrumb="Products / Device & Hardware Layer"
        title="Hardware built for"
        titleHighlight="the physical world."
        lede="Connected devices for vehicles, assets and controlled access — designed to capture what is happening in the field and make it useful to the people operating it."
      />

      {/* =====================================================
          02 — SIGNATURE DATA FLOW
      ===================================================== */}

      <section className="relative overflow-hidden border-y border-white/10 bg-[#081b24] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          {/* Section intro */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#27d59b]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                  The connected journey
                </span>
              </div>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[48px]">
                From signal to action.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pb-1">
              <p className="max-w-lg text-sm leading-6 text-white/55 lg:ml-auto">
                Every connected operation begins at the edge. A signal is
                captured by the device, transmitted through the network and
                brought into the VIoT platform where it can become useful
                operational information.
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="relative mt-12 overflow-hidden border border-white/[0.12] bg-black sm:mt-14 lg:mt-16">
            <div className="relative aspect-video w-full">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="/video/products-data-flow.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              {/* Very subtle edge treatment */}
              <div className="pointer-events-none absolute inset-0 border border-white/[0.06]" />
            </div>
          </div>

          {/* Flow labels */}
          <div className="mt-7 grid grid-cols-2 border-t border-white/[0.10] sm:grid-cols-5">
            {[
              ["01", "Satellite"],
              ["02", "Device"],
              ["03", "Network"],
              ["04", "VIoT Platform"],
              ["05", "Action"],
            ].map(([number, label], index) => (
              <div
                key={number}
                className={`flex items-center gap-3 py-4 ${
                  index < 4
                    ? "border-b border-white/[0.08] sm:border-b-0 sm:border-r"
                    : "border-b-0"
                } ${index % 2 === 0 ? "pr-4" : "pl-4 sm:pl-5"}`}
              >
                <span className="font-mono text-[8px] text-[#27d59b]">
                  {number}
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/55">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 border-l border-[#27d59b]/50 pl-4 sm:flex-row sm:items-center sm:gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#27d59b]">
              One connected layer
            </span>

            <span className="hidden h-px w-8 bg-white/15 sm:block" />

            <span className="text-xs text-white/35">
              Physical signal → operational context
            </span>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — PRODUCT ECOSYSTEM
      ===================================================== */}

      <section className="border-b border-[#cdd5d2] bg-[#f4f6f2]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          {/* Intro */}
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#007c67]">
                  Product ecosystem
                </span>

                <span className="h-px w-8 bg-[#cdd5d2]" />
              </div>

              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[46px]">
                Hardware for every part of the operation.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#607078] lg:col-span-5 lg:ml-auto">
              VIoT brings vehicle, asset and access hardware into one connected
              technology ecosystem instead of treating each device as a
              separate system.
            </p>
          </div>

          {/* Product groups */}
          <div className="mt-14 sm:mt-16 lg:mt-20">
            {productGroups.map((group) => (
              <div
                key={group.number}
                className="border-t border-[#cdd5d2] py-10 sm:py-12 lg:py-14"
              >
                {/* Group heading */}
                <div className="grid gap-5 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-4">
                      <span className="pt-1 font-mono text-[9px] text-[#007c67]">
                        {group.number}
                      </span>

                      <div>
                        <h3 className="font-heading text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                          {group.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="max-w-lg text-sm leading-6 text-[#607078] lg:col-span-5 lg:col-start-7">
                    {group.description}
                  </p>
                </div>

                {/* Products */}
                <div className="mt-9 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-2">
                  {group.products.map((product) => (
                    <Link
                      key={product.number}
                      href={product.href}
                      className="group block border-t border-[#cdd5d2] pt-5"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-[#e9eeeb]">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                        />

                        {/* Image label */}
                        <div className="absolute left-4 top-4 bg-[#081b24] px-3 py-1.5">
                          <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#27d59b]">
                            {product.label}
                          </span>
                        </div>
                      </div>

                      {/* Product information */}
                      <div className="mt-5 grid gap-5 sm:grid-cols-[1fr_auto]">
                        <div>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[8px] text-[#9aa5a1]">
                              {product.number}
                            </span>

                            <h4 className="font-heading text-xl font-semibold tracking-[-0.025em]">
                              {product.title}
                            </h4>
                          </div>

                          <p className="mt-3 max-w-md text-[13px] leading-6 text-[#607078]">
                            {product.description}
                          </p>
                        </div>

                        <div className="flex items-end sm:justify-end">
                          <span className="group/link inline-flex items-center gap-2 whitespace-nowrap border-b border-[#9aa5a1] pb-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#081b24] transition-colors group-hover:border-[#007c67] group-hover:text-[#007c67]">
                            Explore
                            <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — HARDWARE TO PLATFORM
      ===================================================== */}

      <section className="border-b border-white/[0.10] bg-[#0d2935] text-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="h-[5px] w-[5px] bg-[#27d59b]" />

                <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-[#27d59b]">
                  Beyond the device
                </span>
              </div>

              <h2 className="mt-5 max-w-2xl font-heading text-3xl font-semibold leading-[1.1] tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
                Hardware is only the beginning.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/50">
                The value of a connected device comes from what happens to its
                data. VIoT connects the edge with the platform so teams can
                move from physical events to operational context.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8">
              <div className="border-y border-white/[0.12]">
                {[
                  {
                    number: "01",
                    label: "Device",
                    text: "Capture",
                  },
                  {
                    number: "02",
                    label: "Network",
                    text: "Transmit",
                  },
                  {
                    number: "03",
                    label: "Platform",
                    text: "Understand",
                  },
                  {
                    number: "04",
                    label: "Operation",
                    text: "Act",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group flex items-center border-b border-white/[0.08] py-5 last:border-b-0"
                  >
                    <span className="w-10 font-mono text-[8px] text-[#27d59b]">
                      {item.number}
                    </span>

                    <span className="flex-1 text-sm font-medium text-white/75">
                      {item.label}
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-white/30 transition-colors group-hover:text-[#27d59b]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — CLOSING CTA
      ===================================================== */}

      <CtaBand />
    </main>
  );
}