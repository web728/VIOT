
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
   METADATA
========================================================= */
type ProductPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

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

  return (
    <ProductPageClient
      product={product}
      related={related}
      productImage={getProductImage(slug)}
      flow={getProductFlow(slug)}
    />
  );
}
