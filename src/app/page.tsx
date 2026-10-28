import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="eva-container flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight">
            EVA Music Group
          </h1>
          <p className="mt-3 text-eva-muted">Website coming soon.</p>
        </div>
      </main>
    </>
  );
}
