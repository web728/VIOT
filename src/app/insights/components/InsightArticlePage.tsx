
"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import type { InsightArticle } from "@/lib/insights";

const ease = [0.16, 1, 0.3, 1] as const;

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-48 top-[8%] h-[520px] w-[520px] rounded-full bg-[#27d59b]/[0.03] blur-3xl" />
      <div className="absolute -right-56 bottom-[8%] h-[620px] w-[620px] rounded-full bg-[#007c67]/[0.025] blur-3xl" />
      <svg viewBox="0 0 1600 1000" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        <motion.path d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235" stroke="rgba(8,27,36,0.07)" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2.4, ease: "easeOut" }} />
        <motion.path d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560" stroke="rgba(0,124,103,0.13)" strokeWidth="1.2" strokeDasharray="3 15" animate={{ strokeDashoffset: [0, -180] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} />
      </svg>
    </div>
  );
}

export function InsightArticlePage({ article }: { article: InsightArticle }) {
  return (
    <main className="overflow-x-clip bg-[#f4f6f2] text-[#081b24]">
      <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#081b24] text-white">
        <div className="absolute inset-0 opacity-60">
          <Background />
        </div>

        <div className="relative z-10 mx-auto max-w-[1240px] px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24">
          <Link href="/insights" className="inline-flex items-center gap-2 font-sans text-[13px] font-medium leading-[18px] text-white/60 transition-colors hover:text-[#27d59b]">
            <ArrowLeft className="h-4 w-4" />
            Insights
          </Link>

          <div className="mt-10 max-w-[980px]">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-[12px] font-medium leading-[18px] text-[#27d59b]">
              <span>{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-white/25" />
              <span className="text-white/45">{article.readingTime}</span>
            </div>

            <h1 className="mt-5 max-w-[1000px] font-heading text-[36px] font-semibold leading-[0.98] tracking-[-2px] sm:text-[52px] sm:tracking-[-3px] lg:text-[64px] lg:tracking-[-4px]">
              {article.title}
            </h1>

            <div className="mt-8 max-w-[760px] space-y-4">
              {article.intro.map((paragraph) => (
                <p key={paragraph} className="font-sans text-[16px] font-normal leading-[28px] text-white/70 lg:text-[18px]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <Background />

        <div className="relative z-10 mx-auto grid max-w-[1240px] gap-12 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-16 lg:px-12 lg:py-24">
          <aside className="hidden lg:block">
            <div className="sticky top-28 border-l border-[#c8d5d0] pl-5">
              <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#007c67]">
                VIoT Insights
              </span>
              <p className="mt-3 font-sans text-[14px] leading-[22px] text-[#607078]">
                Practical guidance for connected fleet and telematics decisions.
              </p>
            </div>
          </aside>

          <article className="min-w-0">
            <div className="space-y-14 sm:space-y-16">
              {article.sections.map((section, sectionIndex) => (
                <motion.section
                  key={section.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, ease }}
                  className="border-b border-[#cdd5d2] pb-12 last:border-b-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-8 min-w-8 items-center justify-center rounded-lg border border-[#007c67]/15 bg-white font-sans text-[12px] font-medium text-[#007c67]">
                      {String(sectionIndex + 1).padStart(2, "0")}
                    </span>

                    <h2 className="max-w-[700px] font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] text-[#081b24] lg:text-[46px]">
                      {section.heading}
                    </h2>
                  </div>

                  {section.body?.length ? (
                    <div className="mt-6 max-w-[700px] space-y-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="font-sans text-[16px] font-normal leading-[26px] text-[#52636a]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ) : null}

                  {section.table ? (
                    <div className="mt-8 overflow-x-auto rounded-2xl border border-[#c8d5d0] bg-white shadow-[0_16px_40px_rgba(8,27,36,0.04)]">
                      <table className="w-full min-w-[720px] border-collapse">
                        <thead className="bg-[#eef2ef]">
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} className="border-b border-[#d8e1de] px-5 py-4 text-left font-sans text-[12px] font-semibold uppercase leading-[18px] tracking-[0.08em] text-[#007c67]">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={`${section.heading}-${rowIndex}`} className="border-b border-[#d8e1de] last:border-b-0">
                              {row.map((cell, cellIndex) => (
                                <td key={`${rowIndex}-${cellIndex}`} className="px-5 py-4 align-top font-sans text-[14px] font-normal leading-[22px] text-[#52636a]">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}

                  {section.subSections?.length ? (
                    <div className="mt-8 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/85 shadow-[0_16px_40px_rgba(8,27,36,0.04)]">
                      <div className="divide-y divide-[#d8e1de]">
                        {section.subSections.map((subSection) => (
                          <div key={subSection.heading} className="px-5 py-5 sm:px-6 sm:py-6">
                            <h3 className="font-heading text-[20px] font-semibold leading-[1.3] text-[#081b24] lg:text-[22px]">
                              {subSection.heading}
                            </h3>
                            <div className="mt-3 max-w-[700px] space-y-3">
                              {subSection.body.map((paragraph) => (
                                <p key={paragraph} className="font-sans text-[14px] font-normal leading-[22px] text-[#607078]">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </motion.section>
              ))}
            </div>

            <section className="mt-14 overflow-hidden rounded-2xl border border-[#0d3a37] bg-[#081b24] p-6 text-white shadow-[0_24px_70px_rgba(8,27,36,0.12)] sm:p-8">
              <span className="font-sans text-[12px] font-medium uppercase leading-[18px] tracking-[0.14em] text-[#27d59b]">
                VIoT
              </span>
              <h2 className="mt-4 max-w-[700px] font-heading text-[32px] font-semibold leading-[1.05] tracking-[-2px] lg:text-[46px]">
                {article.closingTitle}
              </h2>
              <div className="mt-5 max-w-[700px] space-y-4">
                {article.closingBody.map((paragraph) => (
                  <p key={paragraph} className="font-sans text-[16px] font-normal leading-[26px] text-white/70">
                    {paragraph}
                  </p>
                ))}
              </div>

              <Link href="/contact" className="mt-7 inline-flex h-11 items-center gap-2 rounded-lg bg-[#27d59b] px-4 font-sans text-[14px] font-semibold text-[#081b24] transition-transform hover:-translate-y-0.5">
                Talk to VIoT
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
