import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = { 
  title: "Contact", 
  description: "Talk directly with Bharat or Vyom about a VIoT telematics, fleet security, EV or OEM requirement.", 
  alternates: { canonical: "/contact" } 
};

const interestLabels: Record<string, string> = {
  "fleet-management": "Fleet Management",
  "ev-management": "EV Management",
  "e-lock": "E Lock",
  video: "Video",
  "fuel-monitoring": "Fuel Monitoring",
};

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { interest } = await searchParams;
  const selectedInterest = typeof interest === "string" ? interestLabels[interest] : undefined;
  const defaultMessage = selectedInterest ? `I would like to discuss ${selectedInterest}. Our current requirement is: ` : "";

  return (
    <div className="bg-paper text-ink selection:bg-signal selection:text-ink overflow-hidden">
      
      {/* 1. Compact Page Hero */}
      <PageHero 
        breadcrumb="Contact / Founder-Led"
        title="Skip the demo queue."
        titleHighlight="Tell us the problem."
        lede="The more specific you are about the fleet, field conditions and current gap, the more useful our first reply will be."
      />

      {/* 2. Contact Section (Light Background with Balanced Grid) */}
      <section className="py-24 md:py-32 bg-paper border-b border-line">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact Info & Founders Note */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1 font-mono text-[11px] uppercase tracking-widest text-signal-dark shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                  Direct Contact
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink leading-[1.15]">
                  Bharat or Vyom will reply.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-muted leading-relaxed font-sans">
                VIoT is a founder-led team. There is no outsourced sales desk and no automated scheduling flow behind this form.
              </p>

              <div className="p-6 rounded-2xl border border-line bg-white shadow-2xs space-y-4 font-sans">
                <div className="space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted block">Direct Email</span>
                  <a href="mailto:team@viot.in" className="text-sm font-semibold text-signal-dark hover:underline">
                    team@viot.in
                  </a>
                </div>
                <div className="pt-3 border-t border-line space-y-1">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-muted block">Headquarters</span>
                  <p className="text-xs sm:text-sm text-ink font-medium leading-relaxed">
                    Sector 104, Noida <br />
                    Uttar Pradesh 201301, India
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form Component */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border border-line bg-white shadow-sm">
                <ContactForm defaultMessage={defaultMessage} />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}