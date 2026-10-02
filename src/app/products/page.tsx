import type { Metadata } from "next";

import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Connected Hardware & IoT Solutions | VIoT",
  description:
    "Explore VIoT connected hardware for vehicle tracking, advanced tracking and electric vehicle intelligence.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}