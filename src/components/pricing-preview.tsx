import Link from "next/link";
import { pricingPlans } from "@/lib/pricing-plans";
import { PricingCard } from "./pricing-card";

export function PricingPreview() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#f6f8fc] text-slate-900"
    >
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-5 px-5 pb-16 sm:px-8 sm:pb-20 md:grid-cols-3 lg:px-10 lg:pb-24 xl:grid-cols-4 xl:gap-6">
        <div className="flex flex-col md:col-span-3 xl:col-span-1 xl:pr-4">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-3 text-[clamp(1.6rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-[-0.025em] text-slate-950"
          >
            Plans for every stage of your journey.
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Pricing is not final yet. Plans and features may change before
            launch.
          </p>

          <Link
            href="/pricing"
            className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 xl:mt-auto"
          >
            View full pricing
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {pricingPlans.map((plan) => (
          <div key={plan.id} className="mx-auto w-full max-w-sm md:max-w-none">
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
    </section>
  );
}