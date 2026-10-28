import type { ReactNode } from "react";
import { FeatureCard } from "./feature-card";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Global Distribution",
    description:
      "Send your releases to Spotify, Apple Music, TikTok, YouTube Music and other streaming platforms from one place.",
    icon: <GlobeIcon />,
  },
  {
    title: "Release Management",
    description:
      "Manage your releases, metadata and artwork together in one dashboard.",
    icon: <LayersIcon />,
  },
  {
    title: "Royalties & Reporting",
    description:
      "See your streams and earnings across platforms in clear reports.",
    icon: <ChartIcon />,
  },
  {
    title: "Real Support",
    description:
      "Questions about a release? Our team helps you with distribution, metadata and payouts.",
    icon: <HeadsetIcon />,
  },
];

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-[linear-gradient(180deg,#eef2f8_0%,#f6f8fc_100%)] text-slate-900"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs">
            Why choose EVA Music Group
          </p>

          <h2
            id="features-heading"
            className="mt-4 text-[clamp(1.9rem,5vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em] text-slate-950"
          >
            Everything you need to release with confidence.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Distribution, release management, reporting and support in one
            place.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {features.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function IconSvg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function GlobeIcon() {
  return (
    <IconSvg>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
    </IconSvg>
  );
}

function LayersIcon() {
  return (
    <IconSvg>
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
      <path d="m3 12 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </IconSvg>
  );
}

function ChartIcon() {
  return (
    <IconSvg>
      <path d="M6 20v-6" />
      <path d="M12 20V9" />
      <path d="M18 20V4" />
    </IconSvg>
  );
}

function HeadsetIcon() {
  return (
    <IconSvg>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </IconSvg>
  );
}