'use server';

import { FloatingSkulls } from './components/FloatingSkulls';
import { RandomMessage } from './components/RandomMessage';
import { AnimatedBackground } from './components/AnimatedBackground';
import { AnimatedTitle } from './components/AnimatedTitle';
import { AnimatedContainer } from './components/AnimatedContainer';
import { getVisitCount } from './actions';

// Componente para o contador
const Counter = async () => {
  const visitCount = await getVisitCount();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="text-6xl font-bold text-green-500" style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.6)' }}>
        {visitCount?.toLocaleString() ?? '...'}
      </div>
      <div className="text-sm text-green-400">Total de Vítimas</div>
    </div>
  );
};

// Componente principal agora é async
export default async function Home() {
  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <FloatingSkulls />
      <AnimatedBackground />

      <div className="text-center z-20 mt-[35vh] md:mt-[45vh] relative">
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
