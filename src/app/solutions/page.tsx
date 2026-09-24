import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { solutions } from "@/lib/solutions";
import { SolutionsScrolly } from "./_components/solutions-scrolly";

export const metadata: Metadata = { title: "Solutions", description: "VIoT connected-device and platform workflows across logistics, mining, construction, infrastructure and other operating environments.", alternates: { canonical: "/solutions" } };

export default function SolutionsPage() {
  return <>
    <section className="solutions-hero"><div className="container"><p className="breadcrumb">Solutions / Operating environments</p><h1>Connected operations, shaped around <em>the work.</em></h1><p>The right system depends on the field conditions, the event that matters and the person expected to act on it.</p><div className="solutions-hero-meta"><span>08 operating contexts</span><span>Hardware + platform</span><span>Scoped before proposal</span></div></div></section>
    <section className="solutions-intro"><div className="container split-heading"><div><p className="eyebrow dark"><span />Current solution areas</p><h2>One system approach.<br />Different operating realities.</h2></div><p>Scroll through the environments below. Each recommendation begins with technical and operating fit—not a generic sector package.</p></div></section>
    <SolutionsScrolly solutions={solutions} />
    <section className="cta-band"><div className="container cta-grid"><div><p className="eyebrow"><span />Scope the real workflow</p><h2>Describe the operating environment.</h2></div><div><p>Share the assets, field conditions, current system and the event your team needs to see.</p><Link className="button button-primary" href="/contact">Write to VIoT <ArrowIcon /></Link></div></div></section>
  </>;
}
