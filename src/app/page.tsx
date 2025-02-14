import { FloatingSkulls } from "./components/FloatingSkulls";
import { RandomMessage } from "./components/RandomMessage";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { AnimatedTitle } from "./components/AnimatedTitle";
import { AnimatedContainer } from "./components/AnimatedContainer";
import { Counter } from "./components/Counter";
import { DumbledoreQuote } from "./components/DumbledoreQuote";
import { Analytics } from "@vercel/analytics/react";

export const runtime = "edge";
export const preferredRegion = "auto";
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center relative overflow-hidden">
      <Analytics />
      <FloatingSkulls />
      <AnimatedBackground />

      <div className="text-center z-20 mt-[15vh] md:mt-[20vh] relative">
        <AnimatedTitle />

        <AnimatedContainer>
          <Counter />
        </AnimatedContainer>

        <RandomMessage />

        <div className="mt-6 text-sm text-green-600 flex items-center justify-center gap-2">
          <span className="w-12 h-[1px] bg-green-500/30" />
          * O contador aumenta a cada visita
          <span className="w-12 h-[1px] bg-green-500/30" />
        </div>

        <DumbledoreQuote />
      </div>
    </div>
  );
}
