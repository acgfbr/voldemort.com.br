'use client';

import { motion } from 'framer-motion';

export const LightningEffect = () => {
  return (
    <>
      {/* Main container with glow effect */}
      <div className="absolute inset-0 rounded-lg">
        {/* Base border glow */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            border: '1px solid rgba(74, 222, 128, 0.3)',
            boxShadow: '0 0 15px rgba(74, 222, 128, 0.2)',
          }}
          animate={{
            boxShadow: [
              '0 0 15px rgba(74, 222, 128, 0.2)',
              '0 0 25px rgba(74, 222, 128, 0.4)',
              '0 0 15px rgba(74, 222, 128, 0.2)',
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Corner effects */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`corner-${i}`}
            className="absolute w-12 h-12"
            style={{
              top: i < 2 ? -2 : 'auto',
              bottom: i >= 2 ? -2 : 'auto',
              left: i % 2 === 0 ? -2 : 'auto',
              right: i % 2 === 1 ? -2 : 'auto',
              background: `radial-gradient(circle at ${i < 2 ? 'bottom' : 'top'} ${i % 2 === 0 ? 'right' : 'left'}, rgba(74, 222, 128, 0.15) 0%, transparent 70%)`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Subtle moving glow */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, transparent 0%, rgba(74, 222, 128, 0.03) 45%, transparent 55%, transparent 100%)',
            backgroundSize: '400% 400%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }}
        />
      </div>
    </>
  );
}; 