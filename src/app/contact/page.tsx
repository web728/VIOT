import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk directly with VIoT about connected vehicles, video, smart locks, assets, sensors, EV operations and platform requirements.",
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

function VIoTBackground({ dark = false }: { dark?: boolean }) {
  const line = dark ? "rgba(255,255,255,0.05)" : "rgba(8,27,36,0.07)";
  const green = dark ? "rgba(39,213,155,0.15)" : "rgba(0,124,103,0.12)";
  const softGreen = dark ? "rgba(39,213,155,0.07)" : "rgba(0,124,103,0.06)";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute -left-48 top-[10%] h-[520px] w-[520px] rounded-full blur-3xl ${
          dark ? "bg-[#27d59b]/[0.025]" : "bg-[#27d59b]/[0.028]"
        }`}
      />
      <div
        className={`absolute -right-56 bottom-[5%] h-[640px] w-[640px] rounded-full blur-3xl ${
          dark ? "bg-white/[0.012]" : "bg-[#081b24]/[0.018]"
        }`}
      />

      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        fill="none"
      >
        <path
          d="M-160 260 C120 50 390 100 620 285 S1050 610 1760 235"
          stroke={line}
          strokeWidth="1"
        />

        <path
          d="M-180 700 C120 470 390 525 680 685 S1130 880 1780 560"
          stroke={green}
          strokeWidth="1.2"
          strokeDasharray="3 15"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-180"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M-120 470 C230 340 420 420 650 515 S1060 700 1730 455"
          stroke={softGreen}
          strokeWidth="1"
          strokeDasharray="2 20"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;180"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M80 1080 C260 740 520 700 780 450 S1240 120 1620 -90"
          stroke={dark ? "rgba(255,255,255,0.035)" : "rgba(8,27,36,0.045)"}
          strokeWidth="1"
        />
      </svg>

      <div
        className={`absolute right-[4%] top-[12%] h-[430px] w-[430px] rounded-full border ${
          dark ? "border-white/[0.035]" : "border-[#081b24]/[0.04]"
        }`}
      />
      <div
        className={`absolute right-[9%] top-[18%] h-[300px] w-[300px] rounded-full border ${
          dark ? "border-[#27d59b]/[0.055]" : "border-[#007c67]/[0.055]"
        }`}
      />
    </div>
  );
}

function SectionLabel({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px w-9 ${dark ? "bg-[#27d59b]" : "bg-[#007c67]"}`} />
      <span
        className={`font-mono text-[9px] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-[#27d59b]" : "text-[#007c67]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

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
      <section className="relative min-h-[560px] overflow-hidden bg-[#081b24] text-white sm:min-h-[620px]">
        <VIoTBackground dark />

        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] flex-col justify-center px-6 pb-16 pt-28 sm:min-h-[620px] sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pt-36">
          <SectionLabel dark>Contact / VIoT</SectionLabel>

          <h1 className="mt-7 max-w-4xl font-heading text-[clamp(2.8rem,5.4vw,5.4rem)] font-semibold leading-[0.93] tracking-[-0.06em]">
            Start with the operation.
            <br />
            <span className="font-normal text-[#27d59b]">
              Tell us what needs to connect.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-[15px]">
            Share the operating environment, connected assets, current setup and
            the requirement you need to solve.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4f6f2]">
        <VIoTBackground />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <SectionLabel>Direct contact</SectionLabel>

                <h2 className="mt-5 max-w-lg font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-4xl lg:text-[46px]">
                  Talk directly with
                  <br />
                  <span className="font-normal text-[#007c67]">VIoT.</span>
                </h2>

                <div className="mt-9 overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/85 shadow-[0_14px_38px_rgba(8,27,36,0.045)] backdrop-blur-sm">
                  <Link
                    href="mailto:team@viot.in"
                    className="group flex items-center justify-between gap-5 border-b border-[#d8e2de] px-5 py-5 transition-colors duration-300 hover:bg-[#27d59b]/[0.035] sm:px-6"
                  >
                    <div>
                      <span className="block font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                        Email
                      </span>
                      <span className="mt-2 block text-sm font-semibold text-[#081b24]">
                        team@viot.in
                      </span>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#007c67]/15 bg-[#007c67]/[0.035] text-[#007c67] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">
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
                  </Link>

                  <div className="px-5 py-5 sm:px-6">
                    <span className="block font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-[#007c67]">
                      Office
                    </span>
                    <span className="mt-2 block text-sm font-semibold text-[#081b24]">
                      Sector 104, Noida
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-[#607078]">
                      Uttar Pradesh 201301, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-2xl border border-[#c8d5d0] bg-white/90 shadow-[0_18px_50px_rgba(8,27,36,0.055)] backdrop-blur-sm">
                <div className="border-b border-[#d8e2de] px-6 py-6 sm:px-8 lg:px-10">
                  <SectionLabel>Enquiry</SectionLabel>

                  <h3 className="mt-4 font-heading text-2xl font-semibold tracking-[-0.035em] text-[#081b24] sm:text-3xl">
                    Tell us about the requirement.
                  </h3>
                </div>

                <div className="px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
                  <ContactForm defaultMessage={defaultMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
