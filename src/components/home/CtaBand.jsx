"use client";

import { useState } from "react";
import Image from "next/image";

import { ArrowIcon } from "@/components/icons";

export function CtaBand() {
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* ================================================= */}
        {/* CTA HEADER */}
        {/* ================================================= */}

        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-signal-dark" />

              <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.2em] text-signal-dark">
                Start a conversation
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-4xl lg:text-[50px]">
              Have a vehicle, asset or
              <br />
              <span className="text-muted">access challenge?</span>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="max-w-md text-sm leading-6 text-muted">
              Tell us what you need to track, monitor or secure. Our team can
              help identify the right VIoT solution for your operation.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* MAIN CTA AREA */}
        {/* ================================================= */}

        <div className="mt-10 grid border-y border-line lg:grid-cols-12">
          {/* ================================================= */}
          {/* LEFT — VISUAL / MESSAGE */}
          {/* ================================================= */}

          <div className="relative overflow-hidden border-b border-line bg-paper lg:col-span-5 lg:border-b-0 lg:border-r">
            {/* Technical top line */}
            <div className="flex items-center justify-between border-b border-line px-5 py-3 sm:px-6">
              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
                VIoT / Connected operations
              </span>

              <span className="font-mono text-[8px] text-muted">
                01
              </span>
            </div>

            <div className="relative min-h-[270px] overflow-hidden px-5 pb-5 pt-7 sm:px-6">
              {/* Truck image */}
              <div className="relative mx-auto h-[170px] w-full max-w-[390px] sm:h-[185px]">
                <Image
                  src="/image/truck-pn.png"
                  alt="VIoT connected vehicle"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                />
              </div>

              {/* Technical reference line */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 sm:left-6 sm:right-6">
                <span className="h-px flex-1 bg-line" />

                <span className="font-mono text-[7px] uppercase tracking-[0.18em] text-muted">
                  Fleet intelligence
                </span>

                <span className="h-1 w-1 bg-signal-dark" />
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT — FORM */}
          {/* ================================================= */}

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex min-h-[330px] flex-col justify-center px-5 py-10 sm:px-8 lg:px-10">
                <div className="max-w-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center border border-signal-dark bg-signal-dark text-sm font-semibold text-white">
                      ✓
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal-dark">
                      Request received
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-2xl font-semibold tracking-[-0.035em] text-ink">
                    Thank you for reaching out.
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted">
                    Our team will review your requirement and get back to you
                    with the next steps.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="px-5 py-7 sm:px-8 sm:py-8 lg:px-10"
              >
                {/* Form heading */}
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-line pb-4">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-signal-dark">
                      Enquiry
                    </span>

                    <h3 className="mt-1.5 font-heading text-xl font-semibold tracking-[-0.03em] text-ink">
                      Tell us what you need.
                    </h3>
                  </div>

                  <span className="hidden font-mono text-[8px] text-muted sm:block">
                    VIOT / 01
                  </span>
                </div>

                {/* Fields */}
                <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                    >
                      Your name
                    </label>

                    <input
                      id="cta-name"
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-signal-dark focus:outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                    >
                      Work email
                    </label>

                    <input
                      id="cta-email"
                      required
                      type="email"
                      placeholder="name@company.com"
                      className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-signal-dark focus:outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="cta-phone"
                      className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                    >
                      Phone number
                    </label>

                    <input
                      id="cta-phone"
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink placeholder:text-muted/50 focus:border-signal-dark focus:outline-none"
                    />
                  </div>

                  {/* Requirement */}
                  <div>
                    <label
                      htmlFor="cta-looking"
                      className="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.16em] text-muted"
                    >
                      Looking for
                    </label>

                    <select
                      id="cta-looking"
                      defaultValue="Fleet Intelligence"
                      className="w-full border-b border-line bg-transparent px-0 py-2.5 text-sm text-ink focus:border-signal-dark focus:outline-none"
                    >
                      <option>Fleet Intelligence</option>
                      <option>Asset Intelligence</option>
                      <option>Access Control</option>
                      <option>Platform Demo</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div className="mt-7 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="max-w-xs font-mono text-[8px] leading-4 text-muted">
                    Share your requirement and our team will help map the right
                    connected solution.
                  </span>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-3 bg-ink px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-signal-dark sm:w-auto"
                  >
                    Send enquiry

                    <ArrowIcon className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Email */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted">
                    Direct contact
                  </span>

                  <span className="font-mono text-[9px] text-signal-dark">
                    team@viot.in
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* ================================================= */}
        {/* BOTTOM LINE */}
        {/* ================================================= */}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            Fleet · Asset · Access
          </span>

          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-muted">
            One connected ecosystem
          </span>
        </div>
      </div>
    </section>
  );
}