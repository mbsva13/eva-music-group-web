export type PricingPlan = {
  id: string;
  catalogNumber: string;
  name: string;
  tagline: string;
  price: string;
  priceNote?: string;
  features: string[];
  cta: { label: string; href: string };
  theme?: "light" | "dark";
  highlighted?: boolean;
  badge?: string;
};

// Edit plans here. Pricing is not final: keep prices and features factual until confirmed.
export const pricingPlans: PricingPlan[] = [
  {
    id: "artist",
    catalogNumber: "EVA-01",
    name: "Artist",
    tagline: "For artists getting their first releases out.",
    price: "Coming soon",
    features: [
      "Distribution to major streaming platforms",
      "Release management dashboard",
      "Streams and earnings reports",
    ],
    cta: { label: "View details", href: "/pricing" },
  },
  {
    id: "artist-pro",
    catalogNumber: "EVA-02",
    name: "Artist Pro",
    tagline: "For artists who release regularly.",
    price: "Coming soon",
    features: ["Everything in Artist", "More detailed reporting"],
    cta: { label: "View details", href: "/pricing" },
    highlighted: true,
  },
  {
    id: "label",
    catalogNumber: "EVA-03",
    name: "Label",
    tagline: "For labels managing multiple artists.",
    price: "Custom",
    priceNote: "Tailored to your catalog",
    features: ["Multiple artists in one account", "Catalog management"],
    cta: { label: "Contact us", href: "/contact" },
    theme: "dark",
  },
];