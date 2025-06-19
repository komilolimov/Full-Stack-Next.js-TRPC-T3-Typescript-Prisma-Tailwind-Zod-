import { HydrateClient } from "~/trpc/server";
import { SessionSection } from "~/app/_components/SessionSection";
import { SessionProvider } from "next-auth/react";


export default function Home() {
  return (
    <SessionProvider>
      <HydrateClient>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
          <SessionSection />
        </main>
      </HydrateClient>
    </SessionProvider>
  );
}
