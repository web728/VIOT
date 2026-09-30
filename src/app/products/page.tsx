import type { Metadata } from "next";

import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products — Fleet, Asset & Access Intelligence",
  description:
    "Explore VIoT hardware for vehicle telematics, video telematics, smart locks, asset tracking and IoT sensing.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}