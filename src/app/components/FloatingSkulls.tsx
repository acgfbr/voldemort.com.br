'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingSkulls = () => {
  const [skulls, setSkulls] = useState<Array<{ x: number, duration: number }>>([]);

  useEffect(() => {
    setSkulls(
      Array.from({ length: 240 }, () => ({
        x: Math.random() * 100,
        duration: Math.random() * 8 + 8
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {skulls.map((skull, i) => (
        <motion.div
          key={i}
          initial={{ y: "120vh", x: `${skull.x}vw` }}
          animate={{
            y: "-20vh",
            x: `${skull.x}vw`,
            rotate: [0, 180, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: skull.duration,
            repeat: Infinity,
            ease: "linear",
            scale: {
              duration: skull.duration / 3,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          className="absolute text-3xl opacity-20"
        >
          💀
        </motion.div>
      ))}
    </div>
  );
}; 