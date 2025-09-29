import type { ReactNode } from "react";
import Link from "next/link";

export type AuthShellProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
  backLink?: { href: string; label: string };
};

export function AuthShell({ title, subtitle, children, footer, backLink }: AuthShellProps) {
  return (
    <div className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-[#0B3557]/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-sky-500/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 opacity-95" />
      </div>

      {backLink && (
        <Link
          href={backLink.href}
          className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
        >
          ← {backLink.label}
        </Link>
      )}

      <div className="w-full max-w-md space-y-6">
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-slate-300">{subtitle}</p>}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-slate-950/50 backdrop-blur">
          {children}
        </div>

        {footer && (
          <div className="text-center text-sm text-slate-300">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
