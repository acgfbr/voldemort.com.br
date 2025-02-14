import { FloatingSkulls } from './components/FloatingSkulls';
import { RandomMessage } from './components/RandomMessage';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AnimatedTitle } from './components/AnimatedTitle';
import { AnimatedContainer } from './components/AnimatedContainer';
import { Counter } from './components/Counter';

export const runtime = 'edge';
export const preferredRegion = 'auto';
export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingSkulls />
      <AnimatedBackground />

      <div className="text-center z-20 mt-[25vh] md:mt-[35vh] relative">
        <AnimatedTitle />
        
        <AnimatedContainer>
          <Counter />
        </AnimatedContainer>

        <RandomMessage />

        <div className="mt-8 text-sm text-green-600 flex items-center justify-center gap-2">
          <span className="w-12 h-[1px] bg-green-500/30" />
          * O contador aumenta a cada visita
          <span className="w-12 h-[1px] bg-green-500/30" />
        </div>
      </div>
    </div>
  );
}
