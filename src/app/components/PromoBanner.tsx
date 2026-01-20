"use client";

import { motion } from "framer-motion";

export function PromoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="mt-10 mb-4"
    >
      <a
        href="https://realoficial.com.br?utm_source=voldemort&utm_medium=banner&utm_campaign=60creditos"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative mx-auto max-w-md px-6 py-4 rounded-lg border border-purple-500/30 bg-gradient-to-r from-purple-900/20 via-black to-purple-900/20 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg bg-purple-500/5 group-hover:bg-purple-500/10 transition-all duration-300" />

          {/* Badge */}
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
            <span className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-purple-600 text-white rounded-full">
              Presente Especial
            </span>
          </div>

          <div className="relative z-10 text-center">
            <p className="text-purple-300 text-sm font-medium mb-1">
              Você ganhou <span className="text-purple-400 font-bold">60 créditos grátis</span>
            </p>

            <p className="text-white text-lg font-bold mb-1">
              Real Oficial
            </p>

            <p className="text-gray-400 text-xs mb-2">
              Transforme seus vídeos em cortes virais com IA
            </p>

            <span className="inline-flex items-center gap-1.5 text-xs text-purple-400 group-hover:text-purple-300 transition-colors">
              Resgatar agora
              <svg
                className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
