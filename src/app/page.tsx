import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { PlatformStrip } from "@/components/platform-strip";
import { FeaturesSection } from "@/components/features-section";


export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
<PlatformStrip />
<FeaturesSection />
      </main>
    </>
  );
}