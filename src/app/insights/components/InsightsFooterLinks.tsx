
import Link from "next/link";

import { insights } from "@/lib/insights";

export function InsightsFooterLinks() {
  return (
    <div>
      <Link
        href="/insights"
        className="font-sans text-[13px] font-semibold leading-[18px] text-white"
      >
        Insights
      </Link>

      <div className="mt-4 space-y-3">
        {insights.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="block max-w-[280px] font-sans text-[13px] font-normal leading-[20px] text-white/55 transition-colors hover:text-[#27d59b]"
          >
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
