import type { ReactNode } from "react";

type Step = {
  title: string;
  description: string;
  icon: ReactNode;
};

const steps: Step[] = [
  {
    title: "Create your account",
    description: "Sign up and set up your artist profile.",
    icon: <UserIcon />,
  },
  {
    title: "Upload your release",
    description: "Add your tracks, artwork and release details.",
    icon: <UploadIcon />,
  },
  {
    title: "Submit for distribution",
    description: "We deliver your release to the streaming platforms.",
    icon: <SendIcon />,
  },
  {
    title: "Track your music",
    description: "See your streams and earnings in your dashboard.",
    icon: <ChartIcon />,
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="bg-[#f6f8fc] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10 lg:pb-12"
    >
      <div className="mx-auto w-full max-w-[90rem] rounded-3xl bg-[linear-gradient(135deg,#0b1730_0%,#060d1d_100%)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(6,13,29,0.25)] sm:px-10 sm:py-12 xl:grid xl:grid-cols-[minmax(0,0.75fr)_minmax(0,2.25fr)] xl:items-center xl:gap-12 xl:px-12">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-blue-400 sm:text-xs">
            How it works
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-3 text-[clamp(1.6rem,4vw,2.1rem)] font-bold leading-[1.15] tracking-[-0.02em]"
          >
            From studio to the world. In four simple steps.
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-4 xl:mt-0">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.title} className="relative flex gap-4 md:block">
                <div className="flex shrink-0 flex-col items-center md:flex-row md:gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-semibold tabular-nums text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="mt-2 w-px flex-1 bg-white/15 md:hidden"
                    />
                  )}

                  <span aria-hidden="true" className="hidden text-blue-200 md:block">
                    {step.icon}
                  </span>
                </div>

                <div className={`min-w-0 pt-2.5 md:mt-5 md:pt-0 ${isLast ? "" : "pb-8 md:pb-0"}`}>
                  <h3 className="flex items-center gap-2 text-base font-semibold leading-snug">
                    <span aria-hidden="true" className="text-blue-200 md:hidden">
                      {step.icon}
                    </span>
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-white/65">
                    {step.description}
                  </p>
                </div>

                {!isLast && (
                  <ChevronIcon className="absolute -right-8 top-8 hidden text-blue-400/80 lg:block" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function IconSvg({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5 md:size-6"
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

function UserIcon() {
  return (
    <IconSvg>
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 20.5c1.2-3.6 4-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
    </IconSvg>
  );
}

function UploadIcon() {
  return (
    <IconSvg>
      <path d="M7 18H6.5a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 17.6 8.1 4.5 4.5 0 0 1 17.5 18H17" />
      <path d="M12 21v-8" />
      <path d="m9 15.5 3-3 3 3" />
    </IconSvg>
  );
}

function SendIcon() {
  return (
    <IconSvg>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21l-4-7.5L3 9.5 21 3Z" />
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

function ChevronIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`size-6 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8.5 3.5 7 8.5-7 8.5" />
    </svg>
  );
}