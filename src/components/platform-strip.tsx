import Image from "next/image";

type Platform = {
  name: string;
  logo?: string;
  logoWidth?: number;
  logoScale?: number;
  blendWhite?: boolean;
  logoClassName?: string;
};

const platforms: Platform[] = [
  { name: "Spotify", logo: "/artwork/logos/spotify.svg", logoWidth: 135, logoScale: 0.95 },
  { name: "Apple Music", logo: "/artwork/logos/apple.png", logoWidth: 135 },
  { name: "TikTok", logo: "/artwork/logos/tiktok.png", logoWidth: 139, logoScale: 0.78 },
  { name: "YouTube Music", logo: "/artwork/logos/youtube.png", logoWidth: 55, logoScale: 3.2 },
  { name: "Amazon Music", logo: "/artwork/logos/amazon.png", logoWidth: 48, logoScale: 3.3, blendWhite: true, logoClassName: "translate-y-[6px] contrast-[1.8]" },
  { name: "Deezer", logo: "/artwork/logos/deezer.png", logoWidth: 164, logoScale: 0.82 },
  { name: "TIDAL", logo: "/artwork/logos/tidal.svg", logoWidth: 164, logoScale: 1.1 },
];

export function PlatformStrip() {
  return (
    <section
      aria-labelledby="platforms-heading"
      className="bg-[linear-gradient(180deg,#f9fbfe_0%,#eef2f8_100%)] text-slate-900"
    >
      <div className="mx-auto w-full max-w-[90rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <h2
          id="platforms-heading"
          className="text-center text-[0.65rem] font-bold uppercase tracking-[0.22em] text-slate-500 sm:text-xs"
        >
          Distribute to the world&apos;s leading platforms
        </h2>

        <ul className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 sm:mt-7 sm:gap-x-12 xl:gap-x-14">
          {platforms.map((platform) => (
            <li
              key={platform.name}
              className="flex h-8 items-center"
              style={
                platform.logoScale
                  ? {
                      marginInline: `calc(${(platform.logoScale - 1) / 2} * ${
                        (platform.logoWidth ?? 120) / 32
                      } * 1.75rem)`,
                    }
                  : undefined
              }
            >
              <PlatformLogo platform={platform} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PlatformLogo({ platform }: { platform: Platform }) {
  if (platform.logo) {
    return (
      <Image
        src={platform.logo}
        alt={platform.name}
        width={platform.logoWidth ?? 120}
        height={32}
        unoptimized={platform.logo.endsWith(".svg")}
        style={platform.logoScale ? { scale: platform.logoScale } : undefined}
        className={`h-6 w-auto max-w-[9rem] object-contain transition-opacity duration-200 hover:opacity-75 sm:h-7 ${
          platform.blendWhite ? "mix-blend-multiply" : ""
        } ${platform.logoClassName ?? ""}`}
      />
    );
  }

  return (
    <span className="whitespace-nowrap text-base font-bold tracking-tight text-slate-800 sm:text-lg">
      {platform.name}
    </span>
  );
}