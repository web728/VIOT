import type { Metadata } from "next";

import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Connected Hardware & IoT Solutions | VIoT",
  description:
    "Explore VIoT connected hardware for vehicle telematics, video telematics, electronic locks, asset tracking and IoT sensing.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
