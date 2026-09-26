"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ArrowIcon, CheckIcon } from "@/components/icons";
import { FormField } from "@/components/ui";

type Status = { kind: "idle" | "sending" | "success" | "error"; message: string };
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm({ defaultMessage = "" }: { defaultMessage?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const submitting = useRef(false);

  function validate(data: Record<string, FormDataEntryValue>) {
    const next: FieldErrors = {};
    if (!String(data.name || "").trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.email || ""))) next.email = "Enter a valid email address.";
    if (String(data.message || "").trim().length < 10) next.message = "Please add at least 10 characters.";
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus({ kind: "error", message: "Please check the highlighted fields." });
      return;
    }

    submitting.current = true;
    setStatus({ kind: "sending", message: "Sending securely…" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Could not send your message.");
      form.reset();
      setErrors({});
      setStatus({ kind: "success", message: "Message received. Bharat or Vyom will reply personally." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Could not send your message. Please try again." });
    } finally {
      submitting.current = false;
    }
  }

  if (status.kind === "success") {
    return (
      <div className="space-y-6 text-left" role="status" aria-live="polite">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-signal/10 text-signal border border-signal/30">
          <CheckIcon className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-signal block">Message Received</span>
          <h3 className="font-heading text-2xl font-semibold text-ink tracking-tight">It is with the founding team.</h3>
          <p className="text-sm text-muted font-sans leading-relaxed">{status.message}</p>
        </div>
        <button 
          className="group inline-flex items-center gap-2 text-sm font-semibold text-signal-dark hover:text-ink transition-colors pt-2" 
          type="button" 
          onClick={() => setStatus({ kind: "idle", message: "" })}
        >
          Send another message 
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          label="Email" 
          type="email" 
          autoComplete="email" 
          required 
          error={errors.email} 
        />
      </div>

      <FormField 
        id="company" 
        name="company" 
        label="Company (optional)" 
        autoComplete="organization" 
      />

      <FormField 
        id="message" 
        name="message" 
        label="Where is the current data or workflow breaking?" 
        as="textarea" 
        placeholder="Operating conditions, current device or platform, and the outcome you need…" 
        defaultValue={defaultMessage} 
        required 
        error={errors.message} 
      />

      <p className="text-[11px] text-muted font-sans leading-relaxed">
        Your message goes directly to the VIoT founding team. By sending it, you agree to our{" "}
        <Link href="/privacy" className="underline hover:text-ink">privacy notice</Link>.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <button 
          className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-signal px-8 py-3.5 text-sm font-semibold text-ink whitespace-nowrap transition-all hover:bg-signal-dark hover:text-white shadow-sm disabled:opacity-50" 
          type="submit" 
          disabled={status.kind === "sending"} 
          aria-busy={status.kind === "sending"}
        >
          <span>{status.kind === "sending" ? "Sending securely…" : "Send to the team"}</span>
          <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
        </button>
{status.message && status.kind === "error" && (
          <span className="text-xs font-mono text-amber font-semibold" role="status" aria-live="polite">
            {status.message}
          </span>
        )}
        {status.message && status.kind === "sending" && (
          <span className="text-xs font-mono text-muted" role="status" aria-live="polite">
            {status.message}
          </span>
        )}
      </div>
    </form>
  );
}