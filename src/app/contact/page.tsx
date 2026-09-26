import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk directly with the VIoT team about telematics, fleet intelligence, asset security, EV or OEM requirements.",
  alternates: {
    canonical: "/contact",
  },
};

const interestLabels: Record<string, string> = {
  "fleet-management": "Fleet Management",
  "ev-management": "EV Management",
  "e-lock": "E Lock",
  video: "Video",
  "fuel-monitoring": "Fuel Monitoring",
};

export default async function ContactPage({
  searchParams,
}: PageProps<"/contact">) {
  const { interest } = await searchParams;

  const selectedInterest =
    typeof interest === "string" ? interestLabels[interest] : undefined;

  const defaultMessage = selectedInterest
    ? `I would like to discuss ${selectedInterest}. Our current requirement is: `
    : "";

  return (
    <main className="overflow-hidden bg-paper text-ink selection:bg-signal selection:text-ink">
      {/* =========================================================
          HERO
      ========================================================= */}
      <PageHero
        breadcrumb="Contact / Founder-Led"
        title="Skip the demo queue."
        titleHighlight="Tell us the problem."
        lede="The more specific you are about the fleet, field conditions and current gap, the more useful our first reply will be."
      />

      {/* =========================================================
          CONTACT AREA
      ========================================================= */}
      <section className="relative border-b border-line bg-[#f8faf9] py-20 md:py-24 lg:py-28">
        {/* Very subtle background detail */}
        <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-signal/[0.035] blur-[120px]" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-20">
            {/* ===================================================
                LEFT — CONTACT INFORMATION
            =================================================== */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              {/* Section label */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-signal-dark" />

                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-signal-dark">
                  Direct Contact
                </span>
              </div>

              {/* Heading */}
              <h2 className="max-w-md font-heading text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-ink sm:text-4xl">
                A real conversation,
                <br />
                <span className="text-signal-dark">not a sales funnel.</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
                VIoT is a founder-led team. Tell us what you're trying to
                track, secure or control, and we'll connect you with the
                person closest to the problem.
              </p>

              {/* =================================================
                  CONTACT DETAILS
              ================================================= */}
              <div className="mt-10 divide-y divide-line border-y border-line">
                {/* Email */}
                <a
                  href="mailto:team@viot.in"
                  className="group flex items-center justify-between py-5 transition-colors"
                >
                  <div>
                    <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Direct Email
                    </span>

                    <span className="text-sm font-semibold text-ink transition-colors group-hover:text-signal-dark">
                      team@viot.in
                    </span>
                  </div>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted transition-all group-hover:border-signal/40 group-hover:text-signal-dark">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M4 10H16M10 4L16 10L10 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center justify-between py-5">
                  <div>
                    <span className="mb-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Headquarters
                    </span>

                    <p className="text-sm font-medium leading-6 text-ink">
                      Sector 104, Noida
                      <br />
                      Uttar Pradesh 201301, India
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-muted">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <path
                        d="M10 17C13.5 13.5 15.5 11.1 15.5 8.5C15.5 5.46 13.04 3 10 3C6.96 3 4.5 5.46 4.5 8.5C4.5 11.1 6.5 13.5 10 17Z"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />

                      <circle
                        cx="10"
                        cy="8.5"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RESPONSE NOTE
              ================================================= */}
              <div className="mt-8 flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-signal/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                </div>

                <p className="max-w-sm text-xs leading-5 text-muted">
                  For technical or deployment enquiries, include your fleet
                  size, operating environment and current setup. It helps us
                  come prepared.
                </p>
              </div>
            </div>

            {/* ===================================================
                RIGHT — FORM
            =================================================== */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[28px] border border-line bg-white">
                {/* Top accent */}
                <div className="h-1 w-full bg-gradient-to-r from-signal-dark via-signal to-transparent" />

                <div className="p-7 sm:p-9 md:p-10">
                  {/* Form heading */}
                  <div className="mb-8">
                    <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                      Start a conversation
                    </div>

                    <h3 className="font-heading text-2xl font-semibold tracking-tight text-ink">
                      Tell us what you need.
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
                      Share a few details and the VIoT team will get back to
                      you directly.
                    </p>
                  </div>

                  {/* Existing form */}
                  <ContactForm defaultMessage={defaultMessage} />
                </div>
              </div>

              {/* Privacy / response reassurance */}
              <div className="mt-4 flex items-center justify-between px-1">
                <p className="text-[10px] text-muted">
                  Your information is used only to respond to your enquiry.
                </p>

                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-dark" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-muted">
                    VIoT / India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}