import { AudienceCard } from "./audience-card";

export function AudienceSections() {
  return (
    <div className="bg-[#f6f8fc] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
      <div className="mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
        <AudienceCard
          id="for-artists"
          eyebrow="For artists"
          headline={["Independent music.", "Global opportunities."]}
          description="Keep control of your music. We handle the distribution, so you can focus on making more of it."
          cta={{ label: "For Artists", href: "/for-artists" }}
          image="/artwork/eva-for-artists.png"
          variant="primary"
        />

        <AudienceCard
          id="for-labels"
          eyebrow="For labels"
          headline={["Built for labels", "of tomorrow."]}
          description="Release music for your whole roster and keep your catalog organized in one place."
          cta={{ label: "For Labels", href: "/for-labels" }}
          image="/artwork/eva-for-labels.png"
          variant="secondary"
        />
      </div>
    </div>
  );
}