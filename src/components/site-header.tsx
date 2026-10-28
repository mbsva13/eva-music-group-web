"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "Distribution", href: "/distribution" },
  { label: "For Artists", href: "/artists" },
  { label: "For Labels", href: "/labels" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

const navLinkClass =
  "rounded-md px-1.5 py-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-eva-navy-950 2xl:px-2";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header
      className="relative z-50 w-full border-b border-white/10 text-white"
      style={{ backgroundColor: "var(--color-eva-navy-950)" }}
    >
      <div className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10 2xl:gap-10">
        <Link
          href="/"
          className="font-display shrink-0 rounded-md text-lg font-extrabold tracking-[-0.04em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-4 focus-visible:ring-offset-eva-navy-950"
          onClick={closeMenu}
        >
          EVA Music Group
        </Link>

        <nav aria-label="Primary navigation" className="hidden min-w-0 xl:block">
          <ul className="flex items-center gap-1 2xl:gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={navLinkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-eva)] border border-white/15 px-4 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-eva-navy-950"
          >
            Log in
          </Link>
          <Link
            href="/distribution"
            className="button button-primary min-h-11 whitespace-nowrap text-sm"
          >
            Start Distributing
            <ArrowIcon />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-[var(--radius-eva)] border border-white/15 text-white transition-colors hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-eva-navy-950 xl:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 shadow-2xl xl:hidden"
          style={{ backgroundColor: "var(--color-eva-navy-900)" }}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto w-full max-w-[90rem] px-5 py-5 sm:px-8 lg:px-10"
          >
            <ul className="grid gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-2">
              <Link
                href="/login"
                className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-eva)] border border-white/20 px-5 text-sm font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-eva-blue-400"
                onClick={closeMenu}
              >
                Log in
              </Link>
              <Link
                href="/distribution"
                className="button button-primary text-sm"
                onClick={closeMenu}
              >
                Start Distributing
                <ArrowIcon />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
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

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
