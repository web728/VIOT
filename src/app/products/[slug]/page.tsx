import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ProductPageClient from "./product-page-client";

import {
  getProduct,
  orderedProducts,
  products,
} from "@/lib/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}

/* =========================================================
   TYPES
========================================================= */

type ProductPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | VIoT`,
    description: product.lede,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

/* =========================================================
   SERVER-SAFE HELPERS
========================================================= */

function getProductImage(slug: string) {
  switch (slug) {
    case "vehicle-telematics":
      return "/image/video.png";

    case "video-telematics":
      return "/image/car.jpeg";

    case "smart-logistics-locks":
      return "/image/lock.png";

    case "smart-infra-locks":
      return "/image/lock.png";

    case "asset-trackers":
      return "/image/lab.jpeg";

    case "iot-sensors":
      return "/image/ev.jpeg";

    default:
      return "/image/video.png";
  }
}

function getProductFlow(slug: string) {
  switch (slug) {
    case "vehicle-telematics":
      return {
        source: "Vehicle",
        device: "Tracking Device",
        data: "Location · Driving events · Vehicle status",
        output: "Fleet Operations",
      };

    case "video-telematics":
      return {
        source: "Vehicle",
        device: "AI Video Device",
        data: "Video · Driver events · Position",
        output: "Safety Operations",
      };

    case "smart-logistics-locks":
      return {
        source: "Cargo",
        device: "Smart Logistics Lock",
        data: "Lock state · Location · Tamper events",
        output: "Cargo Security",
      };

    case "smart-infra-locks":
      return {
        source: "Infrastructure",
        device: "Connected Lock",
        data: "Lock state · Access · Exceptions",
        output: "Access Operations",
      };

    case "asset-trackers":
      return {
        source: "Asset",
        device: "Asset Tracker",
        data: "Location · Motion · Geo-fence events",
        output: "Asset Operations",
      };

    case "iot-sensors":
      return {
        source: "Field Input",
        device: "IoT Sensor",
        data: "Temperature · Fuel · Sensor events",
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

/* =========================================================
   PAGE
========================================================= */

export default async function ProductPage({
  params,
}: ProductPageParams) {
  const { slug } = await params;

  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = orderedProducts
    .filter((item) => item.slug !== slug)
    .slice(0, 4);

  return (
    <ProductPageClient
      product={product}
      related={related}
      productImage={getProductImage(slug)}
      flow={getProductFlow(slug)}
    />
  );
}
