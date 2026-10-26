
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getInsight, insights } from "@/lib/insights";
import { InsightArticlePage } from "../components/InsightArticlePage";

export function generateStaticParams() {
  return insights.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);

  if (!article) {
    return { title: "Insight not found | VIoT" };
  }

  return {
    title: `${article.title} | VIoT`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);

  if (!article) notFound();

  return <InsightArticlePage article={article} />;
}
