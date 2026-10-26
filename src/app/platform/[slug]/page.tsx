import { notFound, redirect } from "next/navigation";

const solutionSlugs = new Set([
  "fleet-management",
  "ev-management",
  "video",
  "iot-sensors",
  "e-lock",
  "access-control",
]);

export default async function LegacyPlatformDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!solutionSlugs.has(slug)) {
    notFound();
  }

  redirect(`/solutions/${slug}`);
}
