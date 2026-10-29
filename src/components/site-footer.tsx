import Link from "next/link";

const columns = [
  {
    title: "Distribution",
    links: [
      { label: "For Artists", href: "/artists" },
      { label: "For Labels", href: "/labels" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Anti-Fraud Policy", href: "/anti-fraud" },
    ],
  },
];

// Replace "#" with EVA's real profile URLs.
const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "X", href: "#" },
  { label: "LinkedIn", href: "#" },
];

const linkClass =
  "rounded-sm text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040914]";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate overflow-hidden bg-[#040914] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[70%] -translate-x-1/2 bg-[linear-gradient(90deg,transparent,rgba(96,165,250,0.6),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-72 w-[60%] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[110px]"
      />

      <div className="mx-auto w-full max-w-[90rem] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-8">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-block rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#040914]"
            >
              <span className="block bg-gradient-to-b from-[#8ac4ff] to-[#236af4] bg-clip-text text-3xl font-extrabold leading-none tracking-[-0.04em] text-transparent">
                EVA
              </span>
              <span className="mt-1 block text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/80">
                Music Group
              </span>
            </Link>

            <p className="mt-5 text-[0.95rem] leading-7 text-white/65">
              Empowering independent artists and labels to bring their music to
              the world.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/75 transition-colors hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400"
                  >
                    {social.label}
                    <span aria-hidden="true" className="text-white/40">
                      ↗
                    </span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <h2 className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-300/80">
                  {column.title}
                </h2>
                <ul className="mt-4 grid gap-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} EVA Music Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="italic text-white/60">Same Music. A Bigger Tomorrow.</p>
            <a
              href="#"
              className="inline-flex items-center gap-1 rounded-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400"
            >
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none mx-auto -mb-[0.22em] w-full max-w-[90rem] select-none px-5 text-center text-[clamp(7rem,30vw,26rem)] font-extrabold leading-[0.8] tracking-[-0.06em] sm:px-8 lg:px-10"
      >
        <span className="bg-[linear-gradient(180deg,rgba(96,165,250,0.22)_0%,rgba(37,99,235,0.08)_55%,transparent_100%)] bg-clip-text text-transparent">
          EVA
        </span>
      </div>
    </footer>
  );
}