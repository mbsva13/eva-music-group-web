type ReleaseCardProps = {
  className: string;
  title: string;
  tone: "blue" | "violet" | "warm";
};

export function HeroArtwork() {
  return (
    <div
      className="hero-artwork"
      role="img"
      aria-label="Illustrative music release dashboard"
    >
      <div className="hero-artwork__glow" aria-hidden="true" />
      <WaveformLine />

      <ReleaseCard
        className="hero-artwork__release-left hero-artwork__float-two"
        title="Afterglow"
        tone="blue"
      />
      <ReleaseCard
        className="hero-artwork__release-top hero-artwork__float-three"
        title="New Horizon"
        tone="warm"
      />
      <ReleaseCard
        className="hero-artwork__release-main hero-artwork__float-one"
        title="Midnight Echo"
        tone="violet"
      />

      <PreviewStats />
      <PlayerCard />
    </div>
  );
}

function ReleaseCard({ className, title, tone }: ReleaseCardProps) {
  return (
    <article
      className={`hero-artwork__release-card hero-artwork--${tone} ${className}`}
      aria-label={`${title}, illustrative release artwork`}
    >
      <div className="hero-artwork__cover" aria-hidden="true">
        <span className="hero-artwork__cover-orb" />
        <span className="hero-artwork__cover-ring" />
        <span className="hero-artwork__cover-horizon" />
      </div>
      <div className="hero-artwork__release-meta">
        <span>CONCEPT RELEASE</span>
        <strong>{title}</strong>
      </div>
    </article>
  );
}

function PreviewStats() {
  return (
    <aside className="hero-artwork__stats hero-artwork__float-three">
      <div className="hero-artwork__eyebrow">
        <span>PREVIEW</span>
        <span className="hero-artwork__live-dot" aria-hidden="true" />
      </div>
      <strong>Release reach</strong>
      <span>Illustrative interface</span>
      <div className="hero-artwork__bars" aria-hidden="true">
        {[38, 62, 49, 82, 68].map((height) => (
          <i key={height} style={{ height: `${height}%` }} />
        ))}
      </div>
    </aside>
  );
}

function PlayerCard() {
  return (
    <article className="hero-artwork__player hero-artwork__float-two">
      <div className="hero-artwork__player-cover" aria-hidden="true" />
      <div className="hero-artwork__player-copy">
        <span>PREVIEW TRACK</span>
        <strong>Demo release</strong>
      </div>
      <div className="hero-artwork__player-wave" aria-hidden="true">
        {[7, 14, 10, 19, 12, 23, 15, 21, 9, 17, 12, 7].map(
          (height, index) => (
            <i key={`${height}-${index}`} style={{ height }} />
          ),
        )}
      </div>
      <span className="hero-artwork__play-mark" aria-hidden="true">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="m7.2 5.7 7 4.3-7 4.3V5.7Z" />
        </svg>
      </span>
    </article>
  );
}

function WaveformLine() {
  return (
    <svg
      aria-hidden="true"
      className="hero-artwork__waveform"
      viewBox="0 0 760 330"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M-20 206c48 0 56-4 76-4 25 0 26-76 52-76 25 0 30 148 57 148 27 0 28-204 56-204 25 0 32 122 58 122 27 0 30-48 55-48 25 0 30 74 57 74 28 0 31-164 59-164 29 0 31 206 61 206 29 0 32-110 60-110 29 0 34 52 62 52 28 0 33-13 58-13 31 0 34 20 62 20 25 0 33-3 67-3"
        stroke="url(#wave-gradient)"
        strokeWidth="2.2"
      />
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="760" y2="0">
          <stop stopColor="#2f80ff" stopOpacity="0" />
          <stop offset="0.28" stopColor="#57a0ff" stopOpacity="0.82" />
          <stop offset="0.68" stopColor="#2674ff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#1467f5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
