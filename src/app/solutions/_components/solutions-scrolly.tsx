"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import type { Solution } from "@/lib/solutions";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function SolutionsScrolly({ solutions }: { solutions: Solution[] }) {
  return (
    <section className="relative py-24 md:py-32 bg-ink text-white border-b border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-signal/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Solutions Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {solutions.map((solution) => (
            <motion.div
              key={solution.slug}
              variants={itemVariants}
              className="group flex flex-col justify-between p-8 rounded-2xl border border-white/10 bg-ink-2/40 backdrop-blur-sm transition-all duration-300 hover:border-signal/40 hover:bg-ink-2 hover:shadow-xl"
            >
              <div className="space-y-5">
                {/* Top Number & Status */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-signal tracking-widest">
                    {solution.number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-signal/40 group-hover:bg-signal transition-colors" />
                </div>

                {/* Title & Lede */}
                <div className="space-y-2">
                  <h3 className="font-heading text-xl font-semibold text-white tracking-tight group-hover:text-signal transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/65 leading-relaxed font-sans line-clamp-3">
                    {solution.lede}
                  </p>
                </div>

                {/* Priorities List */}
                <ul className="space-y-2.5 pt-2 border-t border-white/10">
                  {solution.priorities.slice(0, 3).map((priority) => (
                    <li key={priority} className="flex items-start gap-2.5 text-xs text-white/80 font-sans">
                      <span className="mt-0.5 flex-shrink-0 text-signal"><CheckIcon /></span>
                      <span className="line-clamp-1">{priority}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Link */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-white/80 group-hover:text-white">
                <span>Explore environment</span>
                <Link 
                  href={`/solutions/${solution.slug}`} 
                  className="inline-flex items-center gap-1.5 text-signal transition-transform group-hover:translate-x-1"
                >
                  View solution <ArrowIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}