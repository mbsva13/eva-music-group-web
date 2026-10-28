import type { ReactNode } from "react";

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_10px_30px_rgba(15,35,80,0.06)] transition-[translate,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,35,80,0.1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7">
      <span
        aria-hidden="true"
        className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-blue-600"
      >
        {icon}
      </span>

      <h3 className="mt-6 text-lg font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-[0.95rem] leading-6 text-slate-600">
        {description}
      </p>
    </article>
  );
}