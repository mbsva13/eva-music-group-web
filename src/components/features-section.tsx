import Image from "next/image";
import { FeatureHighlight, FeatureRow } from "./feature-card";

const features = [
  {
    number: "02",
    title: "Release Management",
    description:
      "Manage your releases, metadata and artwork together in one dashboard.",
    visual: <ArtworkTile />,
  },
  {
    number: "03",
    title: "Royalties & Reporting",
    description:
      "See your streams and earnings across platforms in clear reports.",
    visual: <BarsTile />,
  },
  {
    number: "04",
    title: "Real Support",
    description:
      "Questions about a release? Our team helps you with distribution, metadata and payouts.",
    visual: <ChatTile />,
  },
];

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-[linear-gradient(180deg,#eef2f8_0%,#f6f8fc_100%)] text-slate-900"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-10 lg:pb-12 lg:pt-12">
        <div className="grid gap-3 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-end lg:gap-12">
          <div>
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
              Why choose EVA Music Group
            </p>
            <h2
              id="features-heading"
              className="mt-3 max-w-xl text-balance text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-slate-950"
            >
              Everything you need to release with confidence.
            </h2>
          </div>
          <p className="max-w-sm text-[0.95rem] leading-6 text-slate-600 lg:justify-self-end lg:pb-1">
            Distribution, release management, reporting and support in one
            place.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-5">
          <FeatureHighlight
            number="01"
            title="Global Distribution"
            description="Send your releases to Spotify, Apple Music, TikTok, YouTube Music and other streaming platforms from one place."
            visual={<DistributionVisual />}
          />

          <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,35,80,0.05)]">
            {features.map((feature) => (
              <FeatureRow key={feature.number} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const platforms = ["Spotify", "Apple Music", "TikTok", "YouTube Music"];

function DistributionVisual() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div className="flex shrink-0 items-center gap-3 rounded-xl border border-white/12 bg-white/5 p-2 pr-4 backdrop-blur-md">
        <span className="relative size-9 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/artwork/new-horizon.png"
            alt=""
            fill
            sizes="36px"
            className="object-cover"
          />
        </span>
        <span>
          <span className="block text-sm font-semibold">Your release</span>
          <span className="block text-xs text-white/55">Single · 1 track</span>
        </span>
      </div>

      <span className="hidden h-px w-8 shrink-0 bg-gradient-to-r from-blue-400/70 to-blue-400/10 sm:block" />

      <ul className="flex flex-wrap items-center gap-2">
        {platforms.map((name, index) => (
          <li
            key={name}
            className="rounded-full border border-white/12 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors duration-300 group-hover:border-blue-400/50 group-hover:bg-blue-500/15 group-hover:text-white"
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ArtworkTile() {
  return (
    <span className="relative size-10 overflow-hidden rounded-md transition-[scale] duration-300 group-hover:scale-110">
      <Image
        src="/artwork/afterglow.png"
        alt=""
        fill
        sizes="40px"
        className="object-cover"
      />
    </span>
  );
}

function BarsTile() {
  const bars = [35, 55, 45, 70, 90];

  return (
    <span className="flex h-8 items-end gap-[3px]">
      {bars.map((height, index) => (
        <span
          key={index}
          className="w-1.5 origin-bottom rounded-[2px] bg-gradient-to-t from-blue-600 to-blue-400 transition-[scale] duration-300 group-hover:scale-y-110"
          style={{ height: `${height}%`, transitionDelay: `${index * 40}ms` }}
        />
      ))}
    </span>
  );
}

function ChatTile() {
  return (
    <span className="flex flex-col gap-1">
      <span className="h-2.5 w-7 rounded-full rounded-bl-sm bg-slate-300" />
      <span className="h-2.5 w-6 self-end rounded-full rounded-br-sm bg-blue-600 transition-[translate] duration-300 group-hover:-translate-y-0.5" />
    </span>
  );
}