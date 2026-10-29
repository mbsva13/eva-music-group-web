import type { ReactNode } from "react";

type FeatureProps = {
  number: string;
  title: string;
  description: string;
  visual: ReactNode;
};

export function FeatureHighlight({ number, title, description, visual }: FeatureProps) {
  return (
    <article className="group relative isolate flex h-full flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(160deg,#0d1b3a_0%,#060d1d_100%)] p-6 text-white shadow-[0_18px_44px_rgba(6,13,29,0.3)] ring-1 ring-transparent transition-[border-color,box-shadow] duration-300 hover:border-blue-400 hover:ring-blue-400/40 sm:p-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-blue-600/25 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 top-1/2 -z-10 size-[26rem] -translate-y-1/2 rounded-full bg-[repeating-radial-gradient(circle_at_center,transparent_0_7px,rgba(147,197,253,0.07)_8px_9px)] [mask-image:radial-gradient(circle,black_30%,transparent_70%)] transition-[scale,opacity] duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
      />

      <div>
        <span className="font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-blue-300/80">
          {number}
        </span>
        <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">{title}</h3>
        <p className="mt-2 max-w-md text-sm leading-6 text-white/65 sm:text-[0.95rem]">
          {description}
        </p>
      </div>

      <div aria-hidden="true">{visual}</div>
    </article>
  );
}

export function FeatureRow({ number, title, description, visual }: FeatureProps) {
  return (
    <article className="group flex gap-4 p-5 transition-colors duration-200 hover:bg-slate-50/80 sm:gap-5 sm:p-6">
      <div
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 transition-colors duration-200 group-hover:border-blue-400"
      >
        {visual}
      </div>

      <div className="min-w-0">
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-[0.7rem] font-semibold tracking-[0.18em] text-blue-600">
            {number}
          </span>
          <h3 className="text-base font-bold tracking-tight text-slate-900">{title}</h3>
        </div>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </article>
  );
}