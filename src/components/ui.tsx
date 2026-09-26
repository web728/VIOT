import Link from "next/link";
import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { ArrowIcon } from "./icons";

export function Section({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`py-24 md:py-28 ${className}`.trim()}>
      <div className="container mx-auto px-6">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article className={`rounded-2xl border border-line bg-white p-6 ${className}`.trim()}>
      {children}
    </article>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) {
  const styles =
    variant === "primary"
      ? "bg-signal text-ink hover:bg-white hover:shadow-[0_0_24px_rgba(39,213,155,0.3)]"
      : "border border-white/25 text-white hover:border-signal";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-[52px] items-center justify-center gap-6 rounded-lg px-5 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${styles}`}
    >
      {children}
      <ArrowIcon className="h-[18px] w-[18px]" />
    </Link>
  );
}

type SharedFieldProps = { id: string; name: string; label: string; error?: string; className?: string; as?: "input" | "textarea" };
type FormFieldProps = SharedFieldProps & (InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>);

export function FormField({ id, name, label, error, className = "", as = "input", ...props }: FormFieldProps) {
  const errorId = `${id}-error`;
  const fieldStyles =
    "w-full rounded-lg border bg-white px-4 py-3.5 text-ink outline-none transition-shadow focus:shadow-[0_0_0_2px_rgba(0,124,103,0.12)]";
  const borderColor = error ? "border-red-700" : "border-line focus:border-signal-dark";

  return (
    <div className={`flex flex-col gap-2 ${className}`.trim()}>
      <label htmlFor={id} className="font-mono text-[10px] font-semibold uppercase tracking-widest text-ink/60">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${fieldStyles} ${borderColor} min-h-[155px] resize-y`}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          name={name}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`${fieldStyles} ${borderColor}`}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <span className="text-xs font-semibold text-red-700" id={errorId}>
          {error}
        </span>
      )}
    </div>
  );
}