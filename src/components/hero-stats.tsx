const stats = [
  { value: "100+", label: "Digital platforms" },
  { value: "Fair", label: "Royalty rates" },
  { value: "Global", label: "Reach, local support" },
];

export function HeroStats() {
  return (
    <dl className="mt-10 grid max-w-xl grid-cols-3 sm:mt-12">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`min-w-0 ${
            index === 0 ? "pr-4 sm:pr-6" : "border-l border-white/15 px-4 sm:px-6"
          }`}
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd className="text-lg font-bold tracking-tight text-eva-blue-400 sm:text-xl">
            {stat.value}
          </dd>
          <dd className="mt-1 text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.16em] text-white/60 sm:text-[0.65rem]">
            {stat.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}