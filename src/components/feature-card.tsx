import type { ReactNode } from "react";

type FeatureCardProps = {
  number: string;
  title: string;
  description: string;
  visual: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function FeatureCard({
  number,
  title,
  description,
  visual,
  tone = "light",
  className = "",
}: FeatureCardProps) {
  const dark = tone === "dark";

  return (
    <article
      className={`group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border p-6 ring-1 ring-transparent transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-blue-400 hover:ring-blue-400/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 ${
        dark
          ? "border-white/10 bg-[linear-gradient(160deg,#0d1b3a_0%,#060d1d_100%)] text-white shadow-[0_18px_44px_rgba(6,13,29,0.3)]"
          : "border-slate-200/80 bg-white text-slate-900 shadow-[0_10px_30px_rgba(15,35,80,0.05)] hover:shadow-[0_18px_48px_rgba(37,99,235,0.14)]"
      } ${className}`}
    >
      {dark && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-blue-600/25 blur-[90px]"
        />
      )}

      <span
        className={`font-mono text-[0.7rem] font-semibold tracking-[0.18em] ${
          dark ? "text-blue-300/80" : "text-blue-600"
        }`}
      >
        {number}
      </span>

      <div aria-hidden="true" className="my-6 flex flex-1 items-center">
        {visual}
      </div>

      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
      <p
        className={`mt-2 max-w-md text-[0.9rem] leading-6 ${
          dark ? "text-white/65" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </article>
  );
}