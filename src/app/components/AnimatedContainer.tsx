'use client';

import { motion } from 'framer-motion';
import { LightningEffect } from './LightningEffect';

interface AnimatedContainerProps {
  children: React.ReactNode;
}

export const AnimatedContainer = ({ children }: AnimatedContainerProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      className="relative backdrop-blur-md bg-black/40 p-8 rounded-lg border border-green-500/20 shadow-lg shadow-green-500/20"
      style={{
        boxShadow: '0 0 30px rgba(34, 197, 94, 0.2)',
      }}
    >
      <LightningEffect />
      <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-green-500/50" />
      <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-green-500/50" />
      <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-green-500/50" />
      <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-green-500/50" />
      {children}
    </motion.div>
  );
}; 