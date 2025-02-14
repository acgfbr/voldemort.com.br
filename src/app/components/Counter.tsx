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

    // Update only when the tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        fetchCount();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer glow container */}
        <div className="absolute inset-0 blur-[60px] bg-green-400/20 rounded-full" />
        
        <motion.div 
          className="text-6xl font-bold text-green-300 min-h-[5rem] flex items-center relative tracking-wider"
          animate={{
            textShadow: [
              '0 0 7px rgba(74, 222, 128, 1), 0 0 10px rgba(74, 222, 128, 0.9), 0 0 21px rgba(74, 222, 128, 0.7), 0 0 42px rgba(74, 222, 128, 0.6)',
              '0 0 7px rgba(74, 222, 128, 1), 0 0 10px rgba(74, 222, 128, 0.9), 0 0 21px rgba(74, 222, 128, 0.7), 0 0 42px rgba(74, 222, 128, 0.6), 0 0 82px rgba(74, 222, 128, 0.4)',
              '0 0 7px rgba(74, 222, 128, 1), 0 0 10px rgba(74, 222, 128, 0.9), 0 0 21px rgba(74, 222, 128, 0.7), 0 0 42px rgba(74, 222, 128, 0.6)',
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            WebkitTextStroke: '1px rgba(74, 222, 128, 0.2)'
          }}
        >
          {isLoading ? (
            <span className="animate-pulse">...</span>
          ) : (
            <div className="relative py-4">
              {/* Background blur effect */}
              <div 
                className="absolute inset-0 blur-[3px] z-0 opacity-90"
              >
                {visitCount?.toLocaleString() ?? '...'}
              </div>
              
              {/* Main number */}
              <span className="relative z-10 mix-blend-plus-lighter">
                {visitCount?.toLocaleString() ?? '...'}
              </span>
              
              {/* Subtle flicker effect */}
              <motion.div
                className="absolute inset-0 z-20 mix-blend-soft-light"
                animate={{
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 8 + 5,
                }}
              >
                {visitCount?.toLocaleString() ?? '...'}
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
      
      <motion.div 
        className="text-sm font-medium tracking-wider text-green-300 mt-2"
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Total de Vítimas
      </motion.div>
    </div>
  );
}; 