import Image from "next/image";
import Link from "next/link";

type AudienceCardProps = {
  id: string;
  eyebrow: string;
  headline: [string, string];
  description: string;
  cta: { label: string; href: string };
  image: string;
  variant?: "primary" | "secondary";
};

export function AudienceCard({
  id,
  eyebrow,
  headline,
  description,
  cta,
  image,
  variant = "primary",
}: AudienceCardProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      aria-labelledby={headingId}
      className="group relative isolate flex min-h-[34rem] overflow-hidden rounded-3xl border border-white/10 bg-[#081022] text-white shadow-[0_24px_60px_rgba(6,13,29,0.25)] sm:min-h-[19rem] lg:min-h-[20rem]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain object-bottom transition-[scale] duration-700 ease-out [mask-image:linear-gradient(180deg,transparent_35%,black_65%)] group-hover:scale-[1.03] motion-reduce:transition-none sm:object-right sm:[mask-image:linear-gradient(90deg,transparent_35%,black_62%)]"
        />
      </div>

      <div className="flex max-w-[25rem] flex-col items-start p-7 sm:p-9">
        <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-xs">
          {eyebrow}
        </p>

        <h2
          id={headingId}
          className="mt-3 text-[clamp(1.6rem,3.6vw,2rem)] font-bold leading-[1.12] tracking-[-0.025em]"
        >
          {headline[0]}
          <br />
          {headline[1]}
        </h2>

        <p className="mt-3 text-[0.95rem] leading-6 text-white/75">
          {description}
        </p>

        <Link
          href={cta.href}
          className={
            variant === "primary"
              ? "button button-primary mt-6 text-sm"
              : "mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[var(--radius-eva)] border border-white/30 px-5 py-3 text-sm font-bold leading-none text-white transition-colors hover:border-white/55 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081022]"
          }
        >
          {cta.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}