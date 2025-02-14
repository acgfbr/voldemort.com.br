'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingSkulls = () => {
  const [skulls, setSkulls] = useState<Array<{ x: number, duration: number }>>([]);

  useEffect(() => {
    setSkulls(
      Array.from({ length: 10 }, () => ({
        x: Math.random() * 100,
        duration: Math.random() * 10 + 20
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
            rotate: [0, 360],
          }}
          transition={{
            duration: skull.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute text-4xl opacity-20"
        >
          💀
        </motion.div>
      ))}
    </div>
  );
}; 