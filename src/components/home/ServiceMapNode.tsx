"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceMapNodeProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  active?: boolean;
}

export function ServiceMapNode({
  number,
  title,
  description,
  icon: Icon,
  active = false,
}: ServiceMapNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className="group border-t border-line py-5"
    >
      <div className="flex gap-4">
        <span className="font-mono text-[9px] tracking-[0.16em] text-muted">
          {number}
        </span>

        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center border transition-colors duration-300 ${
            active
              ? "border-signal-dark bg-signal-dark text-white"
              : "border-line bg-white text-ink group-hover:border-signal-dark group-hover:text-signal-dark"
          }`}
        >
          <Icon className="h-4 w-4" strokeWidth={1.5} />
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-ink">
            {title}
          </h3>

          <p className="mt-1 max-w-xs text-[11px] leading-5 text-muted">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}