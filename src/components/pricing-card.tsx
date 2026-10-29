import Link from "next/link";
import type { PricingPlan } from "@/lib/pricing-plans";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const headingId = `plan-${plan.id}`;
  const dark = plan.theme === "dark";

  return (
    <article
      aria-labelledby={headingId}
      className={`group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border p-6 ring-1 ring-transparent transition-[translate,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-blue-400 hover:ring-blue-400/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7 ${
        dark
          ? "border-white/10 bg-[linear-gradient(160deg,#0d1b3a_0%,#060d1d_100%)] text-white shadow-[0_18px_44px_rgba(6,13,29,0.3)] hover:shadow-[0_24px_60px_rgba(37,99,235,0.3)]"
          : "border-slate-200/80 bg-white text-slate-900 shadow-[0_10px_30px_rgba(15,35,80,0.05)] hover:shadow-[0_18px_48px_rgba(37,99,235,0.16)]"
      }`}
    >
      <Vinyl dark={dark} />

      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-mono text-[0.7rem] font-semibold tracking-[0.18em] ${
            dark ? "text-blue-300/80" : "text-blue-600"
          }`}
        >
          {plan.catalogNumber}
        </span>
        {plan.badge && (
          <span className="rounded-full bg-blue-600 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-white">
            {plan.badge}
          </span>
        )}
      </div>

      <h3
        id={headingId}
        className="mt-5 text-[1.65rem] font-bold leading-none tracking-[-0.03em]"
      >
        {plan.name}
      </h3>
      <p
        className={`mt-2 max-w-[16rem] text-sm leading-6 ${
          dark ? "text-white/65" : "text-slate-600"
        }`}
      >
        {plan.tagline}
      </p>

      <div
        className={`mt-6 border-y py-4 ${dark ? "border-white/10" : "border-slate-200"}`}
      >
        <span
          className={`block text-[0.65rem] font-bold uppercase tracking-[0.2em] ${
            dark ? "text-white/45" : "text-slate-400"
          }`}
        >
          Price
        </span>
        <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
          <span className="text-2xl font-bold tracking-tight">{plan.price}</span>
          {plan.priceNote && (
            <span className={`text-sm ${dark ? "text-white/55" : "text-slate-500"}`}>
              {plan.priceNote}
            </span>
          )}
        </p>
      </div>

      <div className="mb-7 mt-5">
        <span
          className={`block text-[0.65rem] font-bold uppercase tracking-[0.2em] ${
            dark ? "text-white/45" : "text-slate-400"
          }`}
        >
          Tracklist
        </span>
        <ol className="mt-2">
          {plan.features.map((feature, index) => (
            <li
              key={feature}
              className={`flex gap-3 border-b border-dashed py-2.5 text-sm leading-6 last:border-b-0 ${
                dark ? "border-white/10 text-white/85" : "border-slate-200 text-slate-700"
              }`}
            >
              <span
                className={`w-6 shrink-0 font-mono text-xs leading-6 ${
                  dark ? "text-blue-300/70" : "text-blue-600/80"
                }`}
              >
                A{index + 1}
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ol>
      </div>

      <Link
        href={plan.cta.href}
        aria-label={`${plan.cta.label}: ${plan.name} plan`}
        className={`mt-auto inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-eva)] px-5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${
          plan.highlighted
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : dark
              ? "border border-white/25 text-white hover:border-white/50 hover:bg-white/8 focus-visible:ring-offset-[#060d1d]"
              : "border border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50"
        }`}
      >
        {plan.cta.label}
        <span
          aria-hidden="true"
          className="transition-[translate] duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </Link>
    </article>
  );
}

function Vinyl({ dark }: { dark: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -right-14 -top-14 -z-10 size-36 translate-x-4 -translate-y-4 transition-[translate,rotate] duration-700 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-[160deg] motion-reduce:transition-none"
    >
      <div
        className={`size-full rounded-full ${
          dark
            ? "bg-[repeating-radial-gradient(circle_at_center,#050a17_0_3px,#13203f_4px_5px,#050a17_6px_8px)] shadow-[0_0_40px_rgba(59,130,246,0.35)]"
            : "bg-[repeating-radial-gradient(circle_at_center,#0b1226_0_3px,#1c2747_4px_5px,#0b1226_6px_8px)] shadow-[0_10px_30px_rgba(15,23,42,0.25)]"
        }`}
      />
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,transparent_0deg,rgba(147,197,253,0.25)_35deg,transparent_80deg)]" />
      <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#e5edff_0_9%,#2563eb_10%_100%)]" />
    </div>
  );
}