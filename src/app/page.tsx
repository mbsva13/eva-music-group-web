import { Hero } from "@/components/hero";
import { SiteHeader } from "@/components/site-header";
import { PlatformStrip } from "@/components/platform-strip";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PlatformStrip />
      </main>
    </>
  );
}