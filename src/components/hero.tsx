import Link from "next/link";
import "@fontsource-variable/inter-tight";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(circle at 72% 48%, rgb(20 103 245 / 18%), transparent 34%), radial-gradient(circle at 48% 100%, rgb(47 128 255 / 10%), transparent 38%), var(--color-eva-navy-950)",
      }}
    >
      <div className="mx-auto grid min-h-[clamp(34rem,72svh,44rem)] w-full max-w-[90rem] grid-cols-1 items-center px-5 pt-14 pb-20 sm:px-8 sm:pt-16 sm:pb-24 lg:grid-cols-[minmax(0,0.95fr)_minmax(20rem,1.05fr)] lg:gap-12 lg:px-10 lg:pt-14 lg:pb-24">
        <div className="relative z-10 max-w-3xl">
          <p className="mb-5 text-xs font-bold tracking-[0.24em] text-eva-blue-400 sm:text-sm">
            MUSIC WITHOUT LIMITS
          </p>

          <h1
            id="hero-heading"
            className="text-[clamp(3.5rem,14vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.04em] sm:text-[clamp(4rem,10vw,5.5rem)] lg:text-[clamp(4rem,6vw,6.5rem)]"
            style={{
              fontFamily:
                '"Inter Tight Variable", "Inter Variable", Arial, sans-serif',
            }}
          >
            Your music.
            <span
              className="-mt-[0.02em] block bg-gradient-to-b from-[#75b6ff] via-[#3d8cff] to-[#236af4] bg-clip-text text-transparent"
              style={{
                textShadow:
                  "0 0 22px rgb(47 128 255 / 28%), 0 0 48px rgb(20 103 245 / 12%)",
              }}
            >
              Worldwide.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            Distribute your releases to Spotify, Apple Music, TikTok, YouTube,
            and other leading platforms—all from one place.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/distribution"
              className="button button-primary w-full text-sm sm:w-auto"
            >
              Start Distributing
              <ArrowIcon />
            </Link>
            <Link
              href="/distribution"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-[var(--radius-eva)] border border-white/25 px-5 py-3 text-sm font-bold leading-none text-white transition-colors hover:border-white/50 hover:bg-white/7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-eva-navy-950 sm:w-auto"
            >
              Explore Distribution
            </Link>
          </div>
        </div>

        <div aria-hidden="true" className="min-h-0 lg:min-h-[28rem]" />
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
