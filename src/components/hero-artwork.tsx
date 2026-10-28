import Image from "next/image";

// Fixed 760×560 stage, scaled per breakpoint, so the composition never drifts.

type Tone = "violet" | "ember" | "forest" | "ink" | "ocean";

type ArtCardProps = {
  style: React.CSSProperties;
  className?: string;
  artwork?: string;
  tone?: Tone;
  title?: string;
  subtitle?: string;
  titleStyle?: TitleStyle;
};

type TitleStyle = "dreams" | "afterglow" | "goodThings";

const toneGradients: Record<Tone, string> = {
  violet:
    "radial-gradient(circle at 30% 25%, #b38bff 0%, transparent 45%), linear-gradient(160deg, #3b1f8f 0%, #141a4d 55%, #070b1d 100%)",
  ember:
    "radial-gradient(circle at 60% 40%, #ff5a7a 0%, transparent 40%), linear-gradient(160deg, #5b0f2e 0%, #24081f 60%, #0a0612 100%)",
  forest:
    "radial-gradient(circle at 40% 30%, #c9d6c8 0%, transparent 40%), linear-gradient(170deg, #5d6b66 0%, #2b3633 55%, #0f1514 100%)",
  ink: "radial-gradient(circle at 50% 30%, #3b82f6 0%, transparent 45%), linear-gradient(180deg, #0b1630 0%, #050a17 100%)",
  ocean:
    "radial-gradient(circle at 70% 20%, #7dd3fc 0%, transparent 40%), linear-gradient(160deg, #1e3a8a 0%, #0c1a3f 60%, #050a17 100%)",
};

export function HeroArtwork() {
  return (
    <div
      className="relative h-[16.5rem] w-full sm:h-[26.5rem] lg:h-[25.5rem] xl:h-[30rem] 2xl:h-[35rem]"
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-0 h-[560px] w-[760px] origin-top -translate-x-1/2 scale-[0.46] sm:scale-[0.75] lg:left-0 lg:translate-x-0 lg:origin-top-left lg:scale-[0.72] xl:scale-[0.86] 2xl:scale-100">
        <BackGlow />

        <WaveLines />

        <div className="absolute inset-0">
          <ArtCard
            style={{ left: 150, top: 0, width: 150, height: 115, zIndex: 10 }}
            artwork="/artwork/new-horizon.png"
          />
          <ArtCard
            style={{ left: 305, top: 30, width: 70, height: 55, zIndex: 5 }}
            className="opacity-80"
            tone="ink"
          />
          <ArtCard
            style={{ left: 385, top: 0, width: 150, height: 115, zIndex: 8 }}
            artwork="/artwork/sea.png"
          />

          <ArtCard
            style={{ left: 34, top: 135, width: 235, height: 275, zIndex: 20 }}
            artwork="/artwork/afterglow.png"
            title="Afterglow"
            titleStyle="afterglow"
          />

          <div
            className="pointer-events-none absolute rounded-[2rem] bg-blue-500/55 blur-[38px]"
            style={{ left: 229, top: 60, width: 320, height: 360, zIndex: 29 }}
          />

          <ArtCard
            style={{ left: 239, top: 70, width: 300, height: 340, zIndex: 30 }}
            artwork="/artwork/dreams.png"
            title="Dreams"
            subtitle="Always win"
            titleStyle="dreams"
          />

          <StreamsCard />

          <ArtCard
            style={{ left: 497, top: 160, width: 122, height: 145, zIndex: 15 }}
            artwork="/artwork/crimson.png"
          />
          <ArtCard
            style={{ left: 633, top: 160, width: 122, height: 145, zIndex: 20 }}
            artwork="/artwork/palm.png"
          />

          <Vinyl />

          <ArtCard
            style={{ left: 633, top: 319, width: 122, height: 170, zIndex: 25 }}
            artwork="/artwork/good-things.png"
            title="Good Things"
            titleStyle="goodThings"
          />

          <FeaturedTrack />
        </div>
      </div>
    </div>
  );
}

function BackGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-[60px] top-[40px] h-[480px] w-[880px] rounded-full bg-blue-700/25 blur-[130px]" />

      <div className="absolute left-[244px] top-[70px] h-[360px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.75)_0%,rgba(37,99,235,0.45)_40%,transparent_72%)] blur-[60px]" />

      <div className="absolute left-[470px] -top-[40px] h-[220px] w-[320px] rounded-full bg-blue-500/40 blur-[90px]" />

      <div className="absolute -left-[40px] -right-[80px] bottom-[10px] h-[140px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.6)_0%,rgba(29,78,216,0.25)_45%,transparent_72%)] blur-[28px]" />

    </div>
  );
}

function ArtCard({
  style,
  className = "",
  artwork,
  tone = "ink",
  title,
  subtitle,
  titleStyle,
}: ArtCardProps) {
  // zIndex goes into a CSS variable so the hover class can override it
  const { zIndex, ...position } = style;

  // Each card floats with its own speed, height and phase so they never move in sync
  const seed = Number(style.left ?? 0) + Number(style.top ?? 0) * 3;
  const float = {
    duration: 6 + (seed % 5),
    delay: -(seed % 7),
    distance: 6 + (seed % 5),
  };

  return (
    <article
      style={
        {
          ...position,
          "--z": zIndex,
          "--float": `${float.distance}px`,
          animationDuration: `${float.duration}s`,
          animationDelay: `${float.delay}s`,
          background: artwork ? "#081428" : toneGradients[tone],
        } as React.CSSProperties
      }
      className={`group/card absolute z-[var(--z)] animate-float cursor-pointer overflow-hidden rounded-[1.1rem] border border-white/12 shadow-[0_28px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] transition-[scale,box-shadow,border-color] duration-300 ease-out hover:z-[60] hover:scale-[1.07] hover:border-white/25 hover:shadow-[0_36px_90px_rgba(0,0,0,0.6),0_0_44px_rgba(59,130,246,0.3)] motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:scale-100 ${className}`}
    >
      {artwork && (
        <Image
          src={artwork}
          alt=""
          fill
          sizes={titleStyle === "dreams" ? "300px" : "240px"}
          className="object-cover transition-[scale] duration-500 ease-out group-hover/card:scale-[1.04] motion-reduce:transition-none"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,transparent_35%)]" />

      {title && titleStyle && (
        <CoverTitle title={title} subtitle={subtitle} variant={titleStyle} />
      )}
    </article>
  );
}

function CoverTitle({
  title,
  subtitle,
  variant,
}: {
  title: string;
  subtitle?: string;
  variant: TitleStyle;
}) {
  if (variant === "goodThings") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,18,0.45)_0%,transparent_40%)]" />
        <strong
          className="absolute inset-x-0 top-7 z-10 block pl-[0.06em] text-center text-[1.2rem] font-medium uppercase leading-[1.05] tracking-[0.06em] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.55)]"
          style={{
            fontFamily:
              '"Inter Tight Variable", "Inter Variable", Arial, sans-serif',
          }}
        >
          {title.split(" ").map((word) => (
            <span key={word} className="block">
              {word}
            </span>
          ))}
        </strong>
      </>
    );
  }

  if (variant === "afterglow") {
    return (
      <>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(3,8,18,0.5)_80%)]" />
        <strong className="absolute inset-x-0 top-[12.5rem] z-10 block pl-[0.4em] text-center text-base font-light uppercase tracking-[0.4em] text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
          {title}
        </strong>
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(3,8,18,0.35)_100%)]" />
      <div className="absolute bottom-7 right-6 z-10 text-center">
        <strong className="block text-[1.05rem] font-light uppercase tracking-[0.5em] text-white/95">
          {title}
        </strong>
        {subtitle && (
          <span className="mt-1 block text-[0.5rem] uppercase tracking-[0.55em] text-white/75">
            {subtitle}
          </span>
        )}
      </div>
      <span className="absolute bottom-6 left-5 z-10 block text-[0.4rem] uppercase leading-tight tracking-[0.2em] text-white/55">
        Eva
        <br />
        Records
      </span>
    </>
  );
}

function StreamsCard() {
  const bars = [14, 19, 24, 30, 36, 44];

  return (
    <aside
      style={{ left: 549, top: 22, width: 206, zIndex: 40 }}
      className="group/streams absolute cursor-pointer rounded-2xl border border-white/12 bg-[#0c1a36]/80 p-4 shadow-[0_18px_44px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-[scale,translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.05] hover:border-white/25 hover:shadow-[0_28px_64px_rgba(0,0,0,0.5),0_0_40px_rgba(59,130,246,0.3)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
    >
      <span className="block text-sm text-white/80">Streams</span>

      <div className="mt-1 flex items-end justify-between">
        <div>
          <strong className="block text-3xl font-semibold tracking-tight text-white">
            2.4M
          </strong>
          <span className="mt-1 block text-xs font-semibold text-emerald-400 transition-colors duration-300 group-hover/streams:text-emerald-300">
            ↑ +312%
          </span>
        </div>

        <div className="flex h-11 items-end gap-1">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-2 origin-bottom rounded-sm bg-gradient-to-t from-blue-600 to-blue-400 transition-[scale,filter] duration-300 ease-out group-hover/streams:scale-y-[1.18] group-hover/streams:brightness-125 motion-reduce:transition-none motion-reduce:group-hover/streams:scale-y-100"
              style={{ height: h, transitionDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}

function Vinyl() {
  return (
    <div
      style={{ left: 505, top: 330, width: 140, height: 140, zIndex: 18 }}
      className="absolute rounded-full border border-white/10 bg-[repeating-radial-gradient(circle_at_center,#050a17_0_3px,#111a33_4px_5px,#050a17_6px_9px)] shadow-[0_20px_48px_rgba(0,0,0,0.5)]"
    >
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,transparent_0deg,rgba(120,160,255,0.18)_40deg,transparent_90deg,transparent_200deg,rgba(120,160,255,0.12)_240deg,transparent_290deg)]" />
      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#c7d7ff_0_8%,#1e293b_9%_100%)] ring-1 ring-white/10" />
    </div>
  );
}

function FeaturedTrack() {
  const bars = Array.from({ length: 46 }, (_, i) =>
    Math.round(6 + Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.45)) * 22),
  );

  return (
    <article
      style={
        {
          left: 149,
          top: 396,
          width: 390,
          zIndex: 50,
          "--float": "-8px",
          animationDuration: "7.5s",
          animationDelay: "-2s",
        } as React.CSSProperties
      }
      className="group/player absolute flex animate-float cursor-pointer items-center gap-4 rounded-2xl border border-white/12 bg-[#0a1834]/85 p-3.5 shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-[scale,translate,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-white/25 hover:shadow-[0_32px_80px_rgba(0,0,0,0.55),0_0_44px_rgba(59,130,246,0.3)] motion-reduce:animate-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100"
    >
      <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-xl">
        <Image
          src="/artwork/dreams.png"
          alt=""
          fill
          sizes="76px"
          className="object-cover transition-[scale] duration-500 ease-out group-hover/player:scale-110 motion-reduce:transition-none"
        />
      </div>

      <div className="min-w-0 flex-1">
        <strong className="block truncate text-base font-semibold text-white">
          Dreams
        </strong>
        <span className="block text-xs text-white/55">Alena Wynn</span>

        <div className="mt-2.5 flex h-7 items-center gap-[2px]">
          {bars.map((h, i) => (
            <i
              key={i}
              className="w-[2px] shrink-0 rounded-full bg-blue-400/90 transition-colors duration-300 group-hover/player:bg-blue-300"
              style={{ height: h }}
            />
          ))}
        </div>
      </div>

      <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white shadow-[0_0_24px_rgba(59,130,246,0.35)] transition-[scale,background-color,border-color,box-shadow] duration-300 ease-out group-hover/player:scale-110 group-hover/player:border-blue-400/60 group-hover/player:bg-blue-500 group-hover/player:shadow-[0_0_30px_rgba(59,130,246,0.6)] motion-reduce:transition-none">
        <svg viewBox="0 0 20 20" className="ml-0.5 h-5 w-5" fill="currentColor">
          <path d="M7 5.2v9.6l7.6-4.8L7 5.2Z" />
        </svg>
      </span>
    </article>
  );
}

function WaveLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-visible"
      viewBox="0 0 760 560"
      fill="none"
    >
      <defs>
        <linearGradient
          id="hero-wave-left"
          x1="-260"
          y1="0"
          x2="300"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2f80ff" stopOpacity="0" />
          <stop offset="0.45" stopColor="#5aa7ff" stopOpacity="1" />
          <stop offset="0.75" stopColor="#2f80ff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#1467f5" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-wave-right"
          x1="520"
          y1="0"
          x2="860"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2f80ff" stopOpacity="0" />
          <stop offset="0.6" stopColor="#4f9bff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#1467f5" stopOpacity="0.2" />
        </linearGradient>

        <filter id="hero-wave-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M-260 500 C-120 490 10 130 95 125 C170 120 195 330 270 470"
        stroke="url(#hero-wave-left)"
        strokeWidth="3.5"
        strokeLinecap="round"
        filter="url(#hero-wave-glow)"
      />

      <path
        d="M540 580 C640 560 740 470 860 320"
        stroke="url(#hero-wave-right)"
        strokeWidth="2.6"
        strokeLinecap="round"
        filter="url(#hero-wave-glow)"
      />
    </svg>
  );
}