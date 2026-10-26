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

function getProductImage(slug: string) {
  const product = getProduct(slug);

  if (product?.image) {
    return product.image;
  }

  switch (slug) {
    case "smart-infra-locks":
      return "/image/smart-infra.png";
    case "asset-trackers":
      return "/image/asset-trackers.png";
    case "iot-sensors":
      return "/image/iot-sensors.png";
    default:
      return "/images/basic-device.jpeg";
  }
}

function getProductFlow(slug: string) {
  switch (slug) {
    case "vehicle-telematics":
      return {
        source: "Vehicle",
        device: "Telematics Device",
        data: "Location · Vehicle events · CAN data",
        output: "Fleet Operations",
      };

    case "video-telematics":
      return {
        source: "Vehicle",
        device: "Video Telematics Device",
        data: "Video · Driver events · Position",
        output: "Safety Operations",
      };

    case "smart-logistics-locks":
      return {
        source: "Cargo",
        device: "E-Lock",
        data: "Lock state · Location · Security events",
        output: "Cargo Security",
      };

    case "smart-infra-locks":
      return {
        source: "Infrastructure",
        device: "Smart Infra Lock",
        data: "Access · Lock state · Exceptions",
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
        data: "Fuel · Temperature · Load · Lux events",
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
