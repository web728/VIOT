"use client";

import Link from "next/link";

import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { ArrowIcon, CheckIcon } from "@/components/icons";

import { FormField } from "@/components/ui";

type Status = {

  kind: "idle" | "sending" | "success" | "error";

  message: string;

};

type FieldErrors = Partial<

  Record<"name" | "email" | "message", string>

>;

export function ContactForm({

  defaultMessage = "",

}: {

  defaultMessage?: string;

}) {

  const [status, setStatus] = useState<Status>({

    kind: "idle",

    message: "",

  });

  const [errors, setErrors] = useState<FieldErrors>({});

  const submitting = useRef(false);

  function validate(data: Record<string, FormDataEntryValue>) {

    const next: FieldErrors = {};

    if (!String(data.name || "").trim()) {

      next.name = "Please enter your name.";

    }

    if (

      !/^[^\s@]+@[^\s@]+\\.[^\s@]+$/.test(

        String(data.email || "")

      )

    ) {

      next.email = "Enter a valid email address.";

    }

    if (String(data.message || "").trim().length < 10) {

      next.message = "Please add at least 10 characters.";

    }

    return next;

  }

  async function handleSubmit(

    event: FormEvent<HTMLFormElement>

  ) {

    event.preventDefault();

    if (submitting.current) return;

    const form = event.currentTarget;

    const data = Object.fromEntries(new FormData(form));

    const nextErrors = validate(data);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {

      setStatus({

        kind: "error",

        message: "Please check the highlighted fields.",

      });

      return;

    }

    submitting.current = true;

    setStatus({

      kind: "sending",

      message: "Sending securely…",

    });

    try {

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify(data),

      });

      const result = await response.json();

      if (!response.ok) {

        throw new Error(

          result.message || "Could not send your message."

        );

      }

      form.reset();

      setErrors({});

      setStatus({

        kind: "success",

        message:

          "Message received. The VIoT team will review the requirement and reply directly.",

      });

    } catch (error) {

      setStatus({

        kind: "error",

        message:

          error instanceof Error

            ? error.message

            : "Could not send your message. Please try again.",

      });

    } finally {

      submitting.current = false;

    }

  }

  /* ============================================================*

    SUCCESS STATE*

 ============================================================ */

  if (status.kind === "success") {

    return (

      <div

        className="relative"

        role="status"

        aria-live="polite"

      >

        <div className="border-b border-[#cdd5d2] pb-8">

          <div className="flex items-start justify-between gap-6">

            <div>

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-full bg-[#27d59b]" />

                <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-[#007c67]">

                  Message received

                </span>

              </div>

              <h3 className="mt-5 max-w-lg font-heading text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#081b24] sm:text-4xl">

                It is with the

                <br />

                <span className="text-[#879399]">

                  VIoT team.

                </span>

              </h3>

            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#27d59b]/40 bg-white">

              <CheckIcon className="h-5 w-5 text-[#007c67]" />

            </div>

          </div>

        </div>

        <div className="py-7">

          <p className="max-w-xl text-sm leading-7 text-[#607078]">

            {status.message}

          </p>

        </div>

        <div className="border-t border-[#cdd5d2] pt-6">

          <button

            type="button"

            onClick={() =>

              setStatus({

                kind: "idle",

                message: "",

              })

            }

            className="group inline-flex items-center gap-3 text-sm font-semibold text-[#007c67] transition-colors hover:text-[#081b24]"

          >

            <span>Send another message</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#cdd5d2] transition-all duration-300 group-hover:border-[#007c67] group-hover:bg-[#007c67] group-hover:text-white">

              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />

            </span>

          </button>

        </div>

      </div>

    );

  }

  /* ============================================================*

    FORM*

 ============================================================ */

  return (

    <form

      className="space-y-6"

      onSubmit={handleSubmit}

      noValidate

    >

      {/* ========================================================*

         HONEYPOT*

     ======================================================== */}

      <div className="hidden" aria-hidden="true">

        <label htmlFor="website">Website</label>

        <input

          id="website"

          name="website"

          tabIndex={-1}

          autoComplete="off"

        />

      </div>

      {/* ========================================================*

         FORM PROGRESS / INTRO*

     ======================================================== */}

      <div className="flex items-center justify-between border-b border-[#cdd5d2] pb-5">

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#8a969a]">

          Enquiry details

        </span>

        <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#007c67]">

          01 — 03

        </span>

      </div>

      {/* ========================================================*

         BASIC DETAILS*

     ======================================================== */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

        <FormField

          id="name"

          name="name"

          label="Your name"

          autoComplete="name"

          required

          error={errors.name}

        />

        <FormField

          id="email"

          name="email"

          label="Work email"

          type="email"

          autoComplete="email"

          required

          error={errors.email}

        />

      </div>

      {/* ========================================================*

         COMPANY*

     ======================================================== */}

      <FormField

        id="company"

        name="company"

        label="Company"

        autoComplete="organization"

        placeholder="Your company name"

      />

      {/* ========================================================*

         MESSAGE*

     ======================================================== */}

      <FormField

        id="message"

        name="message"

        label="What are you trying to connect or improve?"

        as="textarea"

        placeholder="Tell us about the operating environment, connected assets or systems, current setup, and the outcome you need…"

        defaultValue={defaultMessage}

        required

        error={errors.message}

      />

      {/* ========================================================*

         PRIVACY*

     ======================================================== */}

      <div className="border-t border-[#cdd5d2] pt-5">

        <div className="flex items-start gap-3">

          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#27d59b]" />

          <p className="max-w-xl text-[10px] leading-5 text-[#8a969a]">

            Your message goes directly to the VIoT VIoT team. By

            sending it, you agree to our{" "}

            <Link

              href="/privacy"

              className="font-medium text-[#607078] underline decoration-[#cdd5d2] underline-offset-2 transition-colors hover:text-[#007c67] hover:decoration-[#27d59b]"

            >

              privacy notice

            </Link>

            .

          </p>

        </div>

      </div>

      {/* ========================================================*

         ACTION AREA*

     ======================================================== */}

      <div className="flex flex-col gap-5 border-t border-[#cdd5d2] pt-6 sm:flex-row sm:items-center sm:justify-between">

        {/* Submit */}

        <button

          type="submit"

          disabled={status.kind === "sending"}

          aria-busy={status.kind === "sending"}

          className="

            group

            inline-flex

            w-full

            items-center

            justify-between

            gap-8

            border

            border-[#081b24]

            bg-[#081b24]

            px-6

            py-4

            text-sm

            font-semibold

            text-white

            transition-all

            duration-300

            hover:border-[#007c67]

            hover:bg-[#007c67]

            disabled:cursor-not-allowed

            disabled:opacity-60

            sm:w-auto

            sm:min-w-[190px]

          "

        >

          <span>

            {status.kind === "sending"

              ? "Sending securely…"

              : "Send enquiry"}

          </span>

          {status.kind === "sending" ? (

            <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-white" />

          ) : (

            <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/20 transition-all duration-300 group-hover:border-white/50">

              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />

            </span>

          )}

        </button>

        {/* Status */}

        <div className="min-h-5">

          {status.kind === "error" && status.message && (

            <div

              className="flex items-center gap-2 text-xs font-medium text-[#b45309]"

              role="status"

              aria-live="polite"

            >

              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffb321]" />

              <span>{status.message}</span>

            </div>

          )}

          {status.kind === "sending" && (

            <div

              className="flex items-center gap-2 text-xs text-[#607078]"

              role="status"

              aria-live="polite"

            >

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#007c67]" />

              <span>{status.message}</span>

            </div>

          )}

        </div>

      </div>

      {/* ========================================================*

         TECHNICAL FOOTER*

     ======================================================== */}

      <div className="flex items-center justify-between border-t border-[#cdd5d2] pt-4">

        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#a0aaae]">

          VIoT / Connected enquiry

        </span>

        <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-[#007c67]">

          Secure submission

        </span>

      </div>

    </form>

  );

}