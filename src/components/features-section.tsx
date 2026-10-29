import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-[linear-gradient(180deg,#eef2f8_0%,#f6f8fc_100%)] text-slate-900"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-10 lg:pb-12 lg:pt-12">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
              Why choose EVA Music Group
            </p>
            <h2
              id="features-heading"
              className="mt-3 max-w-2xl text-[clamp(1.9rem,5vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] text-slate-950"
            >
              Everything you need to release with confidence.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600 lg:justify-self-end lg:pb-1">
            Distribution, release management, reporting and support in one
            place.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-[auto_auto] xl:gap-6">
          <FeatureCard
            number="01"
            title="Global Distribution"
            description="Send your releases to Spotify, Apple Music, TikTok, YouTube Music and other streaming platforms from one place."
            visual={<DistributionVisual />}
            tone="dark"
            className="md:col-span-2 xl:row-span-2"
          />
          <FeatureCard
            number="02"
            title="Release Management"
            description="Manage your releases, metadata and artwork together in one dashboard."
            visual={<ReleaseVisual />}
          />
          <FeatureCard
            number="03"
            title="Royalties & Reporting"
            description="See your streams and earnings across platforms in clear reports."
            visual={<ReportingVisual />}
          />
          <FeatureCard
            number="04"
            title="Real Support"
            description="Questions about a release? Our team helps you with distribution, metadata and payouts."
            visual={<SupportVisual />}
            className="md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}

const platforms = ["Spotify", "Apple Music", "TikTok", "YouTube Music", "+ more"];

function DistributionVisual() {
  return (
    <div className="flex w-full flex-col items-center gap-0">
      <div className="flex items-center gap-3 rounded-xl border border-white/12 bg-white/5 p-2.5 pr-5 backdrop-blur-md">
        <span className="size-11 rounded-lg bg-[radial-gradient(circle_at_30%_25%,#b38bff_0%,transparent_55%),linear-gradient(160deg,#3b1f8f,#1e3a8a)]" />
        <span>
          <span className="block text-sm font-semibold text-white">Your release</span>
          <span className="block text-xs text-white/55">Single · 1 track</span>
        </span>
      </div>

      <span className="h-8 w-px bg-gradient-to-b from-blue-400/70 to-blue-400/10" />

      <ul className="flex max-w-sm flex-wrap justify-center gap-2">
        {platforms.map((name, index) => (
          <li
            key={name}
            className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 transition-colors duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/15 group-hover:text-white"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReleaseVisual() {
  const fields = [
    { label: "Title", width: "w-3/4" },
    { label: "Artist", width: "w-1/2" },
    { label: "Genre", width: "w-2/3" },
  ];

  return (
    <div className="flex w-full gap-3 rounded-xl border border-slate-200 bg-slate-50/80 p-3">
      <span className="size-16 shrink-0 rounded-lg bg-[radial-gradient(circle_at_70%_25%,#7dd3fc_0%,transparent_50%),linear-gradient(160deg,#1e3a8a,#0c1a3f)] transition-[scale] duration-300 group-hover:scale-105" />
      <div className="grid min-w-0 flex-1 content-center gap-2">
        {fields.map((field) => (
          <div key={field.label} className="flex items-center gap-2">
            <span className="w-10 shrink-0 text-[0.6rem] font-semibold uppercase tracking-wider text-slate-400">
              {field.label}
            </span>
            <span className={`h-1.5 rounded-full bg-slate-200 ${field.width}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportingVisual() {
  const bars = [30, 42, 36, 55, 48, 68, 80];

  return (
    <div className="flex h-24 w-full items-end gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-4 pb-3 pt-4">
      {bars.map((height, index) => (
        <span
          key={index}
          className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-blue-600 to-blue-400 opacity-80 transition-[scale,opacity] duration-300 ease-out group-hover:scale-y-110 group-hover:opacity-100 motion-reduce:transition-none"
          style={{ height: `${height}%`, transitionDelay: `${index * 40}ms` }}
        />
      ))}
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="flex w-full flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-4">
      <span className="max-w-[80%] self-start rounded-2xl rounded-bl-sm bg-white px-3.5 py-2 text-xs text-slate-700 shadow-sm">
        Can you check my release metadata?
      </span>
      <span className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-blue-600 px-3.5 py-2 text-xs text-white transition-[translate] duration-300 group-hover:-translate-y-0.5">
        Sure, let&apos;s look at it together.
      </span>
    </div>
  );
}