import Link from "next/link";
import { pricingPlans } from "@/lib/pricing-plans";
import { PricingCard } from "./pricing-card";

export function PricingPreview() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#f6f8fc] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24"
    >
      <div className="mx-auto w-full max-w-[90rem]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
              Pricing
            </p>
            <h2
              id="pricing-heading"
              className="mt-3 text-[clamp(1.6rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.025em] text-slate-950"
            >
              Plans for every stage of your journey.
            </h2>
          </div>

          <Link
            href="/pricing"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View full pricing
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {pricingPlans.map((plan) => (
            <li key={plan.id}>
              <PricingCard plan={plan} />
            </li>
          ))}
        </ul>

        <p className="mt-6 text-sm text-slate-500">
          Pricing is not final yet. Plans and features may change before launch.
        </p>
      </div>
    </section>
  );
}