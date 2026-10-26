import type { MetadataRoute } from "next";

import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";

const BASE_URL = "https://www.viot.in";

const platformPaths = [
  "/platform/fleet-management",
  "/platform/ev-management",
  "/platform/video",
  "/platform/iot-sensors",
  "/platform/e-lock",
  "/platform/access-control",
] as const;

const resourcePaths = [
  "/insights",
  "/insights/7-questions-to-ask-any-telematics-vendor-before-you-sign",
  "/insights/2g-3g-shutdown-what-happens-to-the-ais-140-devices-already-on-your-vehicles",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/products",
    ...products.map(({ slug }) => `/products/${slug}`),
    "/solutions",
    ...solutions.map(({ slug }) => `/solutions/${slug}`),
    "/industries",
    "/platform",
    ...platformPaths,
    ...resourcePaths,
    "/contact",
    "/privacy",
  ];

  return Array.from(new Set(paths)).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency:
      path === ""
        ? "weekly"
        : path.startsWith("/insights")
          ? "weekly"
          : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/privacy"
          ? 0.4
          : path.startsWith("/insights/")
            ? 0.7
            : 0.8,
  }));
}
