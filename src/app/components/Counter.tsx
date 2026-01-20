'use client';

import { useEffect, useState } from 'react';
import { getVisitCount } from '../actions';
import { motion } from 'framer-motion';

export const Counter = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        setIsLoading(true);
        const count = await getVisitCount();
        setVisitCount(count);
      } catch (error) {
        console.error('Error fetching count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchCount();

  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative pointer-events-none">
        <motion.div
          className="text-5xl md:text-7xl font-bold text-green-400 min-h-[4rem] md:min-h-[5rem] flex items-center relative tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            textShadow: '0 0 20px rgba(74, 222, 128, 0.5)',
          }}
        >
          {isLoading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <span>{visitCount?.toLocaleString() ?? '...'}</span>
          )}
        </motion.div>
      </div>
      
      <div className="flex flex-col items-center gap-2 pointer-events-auto relative z-50">
        <motion.div 
          className="text-sm font-medium tracking-wider text-green-300"
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Total de Vítimas
        </motion.div>

        <motion.a
          href="https://github.com/acgfbr/voldemort.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-400/70 hover:text-green-300 transition-colors duration-300 flex items-center gap-1 cursor-pointer"
          whileHover={{
            textShadow: '0 0 8px rgba(74, 222, 128, 0.6)'
          }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Projeto Open Source
        </motion.a>
      </div>
    </div>
  );
}; 