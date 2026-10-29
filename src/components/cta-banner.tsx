import Image from "next/image";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-[#f6f8fc] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12"
    >
      <div>
        <div className="group relative isolate mx-auto w-full max-w-[90rem] overflow-hidden rounded-3xl border border-white/10 bg-[#060d1d] text-white shadow-[0_24px_60px_rgba(6,13,29,0.25)]">
          <Image
            src="/artwork/same-music.png"
            alt=""
            fill
            sizes="(min-width: 1440px) 1360px, 100vw"
            className="-z-20 object-cover object-[70%_center] transition-[scale] duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          />

          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,13,29,0.95)_0%,rgba(6,13,29,0.8)_35%,rgba(6,13,29,0.15)_70%,rgba(6,13,29,0)_100%)]" />

          <div className="flex min-h-[20rem] max-w-xl flex-col justify-center p-7 sm:min-h-[18rem] sm:p-10 lg:p-12">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-xs">
              Your music deserves a bigger stage
            </p>

            <h2
              id="cta-heading"
              className="mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Your next release starts here.
            </h2>

            <p className="mt-3 max-w-md text-[0.95rem] leading-6 text-white/75 sm:text-base sm:leading-7">
              Distribute your music worldwide and manage your releases with EVA
              Music Group.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/distribution"
                className="button button-primary w-full text-sm sm:w-auto"
              >
                Start Distributing
                <ArrowIcon />
              </Link>

              <Link
                href="/pricing"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-[var(--radius-eva)] border border-white/30 bg-white/[0.03] px-5 py-3 text-sm font-bold leading-none text-white backdrop-blur-md transition-colors hover:border-white/55 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060d1d] sm:w-auto"
              >
                Explore Our Plans
              </Link>
            </div>
          </div>
        </div>
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