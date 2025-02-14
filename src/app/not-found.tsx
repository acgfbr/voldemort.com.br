'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-emerald-950 to-black flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      {/* Smoke effect background */}
      <div className="absolute inset-0 bg-[url('/smoke.png')] opacity-20 animate-smoke"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.div 
          className="relative w-72 h-72 mx-auto mb-8"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/voldemort-404.png"
            alt="Lord Voldemort"
            fill
            className="object-cover rounded-full border-6 border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] transition-shadow duration-300"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-8xl font-bold text-emerald-500 mb-4 text-shadow-glow">404</h1>
          <h2 className="text-4xl font-bold text-white mb-6 text-shadow-glow">
            Você Ousa Desafiar Lord Voldemort?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Trouxa tolo, sua tentativa patética de acessar esta página falhou.
            <br />
            Nem seus feitiços mais poderosos podem revelar o que não existe!
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-emerald-900/50 hover:shadow-emerald-900/70"
            >
              Voltar para a página principal
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(16,185,129,0.5),
                     0 0 15px rgba(16,185,129,0.3),
                     0 0 20px rgba(16,185,129,0.2);
        }
        
        @keyframes smoke {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, -50%, 0); }
        }
        
        .animate-smoke {
          animation: smoke 20s linear infinite;
        }
      `}</style>
    </div>
  );
} 