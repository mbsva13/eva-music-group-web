import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { PlatformStrip } from "@/components/platform-strip";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";


export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
<PlatformStrip />
<FeaturesSection />
<HowItWorks />
      </main>
    </>
  );
}