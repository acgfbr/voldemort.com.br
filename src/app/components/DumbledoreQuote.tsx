'use client';

import { motion } from 'framer-motion';

export const DumbledoreQuote = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 2 }}
      className="mt-8 max-w-lg mx-auto px-4"
    >
      <p className="text-green-400/60 text-sm italic">
        "Não tenha pena dos mortos. Tenha pena dos vivos, e acima de tudo, daqueles que vivem sem amor."
      </p>
      <p className="text-green-400/40 text-xs mt-2">— Alvo Dumbledore</p>
    </motion.div>
  );
}; 