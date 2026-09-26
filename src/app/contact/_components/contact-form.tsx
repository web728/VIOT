"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";

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
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
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
          "Message received. Bharat or Vyom will reply personally.",
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

  /* ============================================================
     SUCCESS STATE
  ============================================================ */

  if (status.kind === "success") {
    return (
      <div
        className="relative overflow-hidden"
        role="status"
        aria-live="polite"
      >
        {/* Subtle success accent */}
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-signal/[0.06] blur-3xl" />

        <div className="relative space-y-7">
          {/* Icon */}
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-signal/20 bg-signal/[0.08] text-signal-dark">
            <CheckIcon className="h-6 w-6" />
          </div>

          {/* Message */}
          <div className="space-y-3">
            <span className="block font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-signal-dark">
              Message Received
            </span>

            <h3 className="max-w-md font-heading text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
              It is with the founding team.
            </h3>

            <p className="max-w-lg text-sm leading-6 text-muted">
              {status.message}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-line" />

          {/* Send another */}
          <button
            type="button"
            onClick={() =>
              setStatus({
                kind: "idle",
                message: "",
              })
            }
            className="group inline-flex items-center gap-2 text-sm font-semibold text-signal-dark transition-colors hover:text-ink"
          >
            <span>Send another message</span>

            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    );
  }

  /* ============================================================
     FORM
  ============================================================ */

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* ========================================================
          HONEYPOT
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

      {/* ========================================================
          BASIC DETAILS
      ======================================================== */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      {/* ========================================================
          COMPANY
      ======================================================== */}
      <FormField
        id="company"
        name="company"
        label="Company"
        autoComplete="organization"
        placeholder="Your company name"
      />

      {/* ========================================================
          MESSAGE
      ======================================================== */}
      <FormField
        id="message"
        name="message"
        label="What are you trying to solve?"
        as="textarea"
        placeholder="Tell us about your fleet, operating conditions, current setup, and the outcome you need…"
        defaultValue={defaultMessage}
        required
        error={errors.message}
      />

      {/* ========================================================
          PRIVACY
      ======================================================== */}
      <div className="flex items-start gap-2.5 border-t border-line pt-5">
        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-dark" />

        <p className="max-w-xl text-[11px] leading-5 text-muted">
          Your message goes directly to the VIoT founding team. By
          sending it, you agree to our{" "}
          <Link
            href="/privacy"
            className="font-medium text-ink underline decoration-line underline-offset-2 transition-colors hover:text-signal-dark hover:decoration-signal"
          >
            privacy notice
          </Link>
          .
        </p>
      </div>

      {/* ========================================================
          ACTION AREA
      ======================================================== */}
      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
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
            justify-center
            gap-3
            rounded-xl
            bg-ink
            px-7
            py-3.5
            text-sm
            font-semibold
            whitespace-nowrap
            text-white
            shadow-[0_8px_24px_rgba(8,27,36,0.12)]
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-[#102d39]
            hover:shadow-[0_12px_30px_rgba(8,27,36,0.18)]
            active:translate-y-0
            disabled:cursor-not-allowed
            disabled:opacity-60
            sm:w-auto
          "
        >
          <span>
            {status.kind === "sending"
              ? "Sending securely…"
              : "Send to the team"}
          </span>

          {status.kind === "sending" ? (
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </button>

        {/* Status */}
        {status.kind === "error" && status.message && (
          <div
            className="flex items-center gap-2 text-xs font-medium text-amber"
            role="status"
            aria-live="polite"
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />

            <span>{status.message}</span>
          </div>
        )}

        {status.kind === "sending" && (
          <div
            className="flex items-center gap-2 text-xs text-muted"
            role="status"
            aria-live="polite"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-dark" />

            <span>{status.message}</span>
          </div>
        )}
      </div>
    </form>
  );
}