"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import type { Solution } from "@/lib/solutions";

function SolutionVisual({ solution, index }: { solution: Solution; index: number }) {
  return <div className="solution-visual" data-visual-index={index} aria-hidden="true">
    <div className="solution-visual-grid" />
    <span className="solution-visual-label">OPERATING CONTEXT / {solution.number}</span>
    <div className="solution-visual-core"><small>VIoT VIEW</small><strong>{solution.name}</strong><span>Events in context</span></div>
    {solution.priorities.slice(0, 3).map((priority, priorityIndex) => <div className={`solution-node node-${priorityIndex + 1}`} key={priority}><span>{String(priorityIndex + 1).padStart(2, "0")}</span>{priority}</div>)}
    <i className="solution-link link-1" /><i className="solution-link link-2" /><i className="solution-link link-3" />
  </div>;
}

export function SolutionsScrolly({ solutions }: { solutions: Solution[] }) {
  const [active, setActive] = useState(0);
  const stepsRef = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index || 0));
      }
    }, { rootMargin: "-38% 0px -38% 0px", threshold: 0 });
    const steps = stepsRef.current;
    steps.forEach((step) => { if (step) observer.observe(step); });
    return () => steps.forEach((step) => { if (step) observer.unobserve(step); });
  }, []);

  return <section className="solutions-scrolly-section"><div className="container solutions-scrolly">
    <div className="solutions-visual-column"><div className="solutions-visual-sticky"><SolutionVisual solution={solutions[active]} index={active} /><div className="solutions-progress" aria-hidden="true">{solutions.map((solution, index) => <span className={index === active ? "active" : ""} key={solution.slug} />)}</div></div></div>
    <div className="solutions-steps">{solutions.map((solution, index) => <article className="solution-step" data-index={index} key={solution.slug} ref={(element) => { stepsRef.current[index] = element; }}>
      <div className="solution-mobile-visual"><SolutionVisual solution={solution} index={index} /></div>
      <p className="section-index">{solution.number} / {String(solutions.length).padStart(2, "0")}</p>
      <h2>{solution.name}</h2>
      <p>{solution.lede}</p>
      <ul>{solution.priorities.slice(0, 3).map((priority) => <li key={priority}><CheckIcon />{priority}</li>)}</ul>
      <Link className="text-link" href={`/solutions/${solution.slug}`}>View solution <ArrowIcon /></Link>
    </article>)}</div>
  </div></section>;
}
