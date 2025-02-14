'use client';

import { motion } from 'framer-motion';

export const AnimatedTitle = () => {
  return (
    <motion.h1 
      className="text-4xl md:text-6xl font-bold mb-12 text-green-500 relative"
      initial={{ textShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }}
      animate={{ textShadow: "0 0 16px rgba(34, 197, 94, 0.8)" }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <span className="absolute -left-6 -top-6 text-2xl opacity-50">⚡</span>
      Contador de Mortes do Lord Voldemort
      <span className="absolute -right-6 -top-6 text-2xl opacity-50">⚡</span>
    </motion.h1>
  );
}; 