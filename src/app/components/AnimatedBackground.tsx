'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AnimatedBackground = () => {
  return (
    <>
      {/* Voldemort image as background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
        style={{
          transform: 'translateY(-15%) scale(0.7)',
          maxWidth: '900px',
          height: '600px',
          margin: '0 auto',
          left: '0',
          right: '0',
          top: '5%',
          boxShadow: '0 0 50px rgba(34, 197, 94, 0.3)',
          borderRadius: '10px',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/voldemort.jpg"
          alt="Lord Voldemort"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 900px"
        />
      </motion.div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/90 z-10" />

      {/* Magical particles effect */}
      <div className="absolute inset-0 z-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent animate-pulse" />
    </>
  );
}; 