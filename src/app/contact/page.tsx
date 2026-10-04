import type { Metadata } from "next";

import Link from "next/link";

import { PageHero } from "@/components/page-hero";

import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {

  title: "Contact",

  description:

    "Talk directly with the VIoT team about connected vehicles, video, smart locks, assets, sensors, EV operations and platform requirements.",

  alternates: {

    canonical: "/contact",

  },

};

const interestLabels: Record<string, string> = {

  "fleet-management": "Fleet Management",

  "ev-management": "EV Management",

  "e-lock": "E-Lock",

  video: "Video",

  "fuel-monitoring": "Fuel Monitoring",

};

const contactPoints = [

  {

    number: "01",

    label: "Direct email",

    value: "team\@viot.in",

    href: "mailto:team\@viot.in",

  },

  {

    number: "02",

    label: "Headquarters",

    value: "Sector 104, Noida",

    secondary: "Uttar Pradesh 201301, India",

  },

];

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

    <main className="overflow-hidden bg-[#f4f6f2] text-[#081b24] selection:bg-[#27d59b] selection:text-[#081b24]">

      {/* =========================================================*

         01 — HERO*

     ========================================================= */}

      <PageHero

        breadcrumb="Contact / VIoT"

        title="Start with the operation."

        titleHighlight="Tell us what needs to connect."

        lede="Share the operating environment, connected assets, current setup and the gap you need to solve. The more context you provide, the more useful our first response will be."

      />

      {/* =========================================================*

         02 — CONTACT AREA*

     ========================================================= */}

      <section className="border-b border-[#cdd5d2] bg-white">

        <div className="mx-auto max-w-[1440px] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">

            {/* ===================================================*

               LEFT — CONTACT INFORMATION*

           =================================================== */}

            <div className="lg:col-span-5">

              <div className="lg:sticky lg:top-28">

                {/* Label */}

                <div className="mb-6 flex items-center gap-3">

                  <span className="h-px w-9 bg-[#007c67]" />

                  <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">

                    Direct contact

                  </span>

                </div>

                {/* Heading */}

                <h2 className="max-w-lg font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#081b24] sm:text-4xl lg:text-5xl">

                  A direct conversation.

                  <br />

                  <span className="text-[#8b969a]">

                    Built around the requirement.

                  </span>

                </h2>

                <p className="mt-6 max-w-md text-sm leading-7 text-[#607078] sm:text-base">

                  VIoT is a founder-led team. Tell us what you're trying to

                  track, secure or control, and we'll connect you with the

                  person closest to the problem.

                </p>

                {/* =================================================*

                   CONTACT INDEX*

               ================================================= */}

                <div className="mt-12 border-y border-[#cdd5d2]">

                  {contactPoints.map((point) => {

                    const content = (

                      <>

                        <div className="flex items-start gap-5">

                          <span className="pt-1 font-mono text-[9px] font-semibold tracking-[0.15em] text-[#007c67]">

                            {point.number}

                          </span>

                          <div>

                            <span className="block font-mono text-[8px] uppercase tracking-[0.18em] text-[#8a969a]">

                              {point.label}

                            </span>

                            <span className="mt-2 block text-sm font-semibold text-[#081b24]">

                              {point.value}

                            </span>

                            {point.secondary && (

                              <span className="mt-1 block text-xs leading-5 text-[#607078]">

                                {point.secondary}

                              </span>

                            )}

                          </div>

                        </div>

                        {point.href && (

                          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#cdd5d2] text-[#607078] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">

                            <svg

                              viewBox="0 0 20 20"

                              fill="none"

                              className="h-3.5 w-3.5"

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

                        )}

                      </>

                    );

                    if (point.href) {

                      return (

                        <Link

                          key={point.number}

                          href={point.href}

                          className="group flex items-center justify-between border-b border-[#cdd5d2] py-6 last:border-b-0"

                        >

                          {content}

                        </Link>

                      );

                    }

                    return (

                      <div

                        key={point.number}

                        className="flex items-center justify-between border-b border-[#cdd5d2] py-6 last:border-b-0"

                      >

                        {content}

                      </div>

                    );

                  })}

                </div>

                {/* =================================================*

                   RESPONSE NOTE*

               ================================================= */}

                <div className="mt-8 flex gap-4">

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#cdd5d2] bg-[#f4f6f2]">

                    <span className="h-1.5 w-1.5 bg-[#27d59b]" />

                  </div>

                  <p className="max-w-md text-xs leading-6 text-[#607078]">

                    For technical or deployment enquiries, include your fleet

                    size, operating environment and current setup. It helps us

                    come prepared.

                  </p>

                </div>

                {/* Small technical footer */}

                <div className="mt-12 hidden border-t border-[#cdd5d2] pt-4 lg:flex items-center justify-between">

                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#a0aaae]">

                    Direct VIoT response

                  </span>

                  <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#007c67]">

                    VIoT / India

                  </span>

                </div>

              </div>

            </div>

            {/* ===================================================*

               RIGHT — FORM*

           =================================================== */}

            <div className="mt-14 lg:col-span-7 lg:mt-0">

              <div className="overflow-hidden rounded-2xl border border-[#cdd5d2] bg-[#f8faf9] shadow-[0_16px_45px_rgba(8,27,36,0.05)]">

                {/* Form header */}

                <div className="border-b border-[#cdd5d2] px-6 py-6 sm:px-8 lg:px-10">

                  <div className="flex items-start justify-between gap-6">

                    <div>

                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#8a969a]">

                        03 / Start a conversation

                      </span>

                      <h3 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.03em] text-[#081b24] sm:text-3xl">

                        Tell us about the requirement.

                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-[#607078]">

                        Share a few details and the VIoT team will get back to

                        you directly.

                      </p>

                    </div>

                    <div className="hidden shrink-0 sm:block">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#cdd5d2] bg-white">

                        <span className="h-2 w-2 bg-[#27d59b]" />

                      </div>

                    </div>

                  </div>

                </div>

                {/* Form */}

                <div className="px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">

                  <ContactForm defaultMessage={defaultMessage} />

                </div>
 

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================================*

         03 — CLOSING STATEMENT*

     ========================================================= */}

      <section className="border-b border-white/[0.08] bg-[#081b24] text-white">

        <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#27d59b]">

                What happens next

              </span>

              <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.04em] sm:text-4xl lg:text-5xl">

                Start with the operating requirement.

                <span className="text-white/30">

                  {" "}

                  We will align the connected path from there.

                </span>

              </h2>

            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">

              <div className="border-l border-white/[0.12] pl-5">

                <span className="block font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">

                  Fleet

                </span>

                <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">

                  Asset

                </span>

                <span className="mt-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-white/25">

                  Access

                </span>

                <span className="mt-4 block h-px w-8 bg-[#27d59b]" />

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>

  );

}