'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const funnyDeathMessages = [
  "Ops! Mais um que foi pra cidade dos pés juntos!",
  "Avada Kedavra ataca novamente!",
  "A coleção do Lorde das Trevas aumenta...",
  "Trouxas: *risada nervosa* Tô com medo!",
  "Mais uma alma para a coleção!",
  "O Ministério da Magia não aprova esta mensagem",
  "Harry Potter saiu do grupo",
  "Dumbledore não curtiu isso",
  "Mais um que não vai pra Hogwarts",
  "Bellatrix mandou um beijo",
  "Nagini tá com fome ainda",
  "Comensais da Morte aplaudem de pé",
  "Ordem da Fênix em choque!",
  "Essa pessoa não tinha Horcrux",
  "Varinha das Varinhas aprova",
  "Mais um que não sobreviveu",
  "Nem a Pedra da Ressurreição salva agora"
];

export default function Home() {
  const [deathCount, setDeathCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchDeathCount = async () => {
      try {
        const response = await fetch('/api/death-counter');
        const data = await response.json();
        setDeathCount(data.count);
        setMessage(funnyDeathMessages[Math.floor(Math.random() * funnyDeathMessages.length)]);
      } catch (error) {
        console.error('Failed to fetch death count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeathCount();
  }, []);

  return (
    <div className="min-h-screen bg-black text-green-500 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Floating skulls background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "120vh", x: Math.random() * 100 + "vw" }}
            animate={{
              y: "-20vh",
              x: Math.random() * 100 + "vw",
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-4xl opacity-20"
          >
            💀
          </motion.div>
        ))}
      </div>

      {/* Voldemort image as background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0 bg-[url('/voldemort.jpg')] bg-cover bg-top bg-no-repeat"
        style={{
          backgroundBlendMode: 'normal',
          transform: 'translateY(-15%)'
        }}
      />

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-20 mt-64 md:mt-96"
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-8 text-green-500"
          initial={{ textShadow: "0 0 8px rgba(34, 197, 94, 0.6)" }}
          animate={{ textShadow: "0 0 16px rgba(34, 197, 94, 0.8)" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          Contador de Mortes do Lord Voldemort
        </motion.h1>
        
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="relative backdrop-blur-sm bg-black/30 p-8 rounded-lg"
        >
          <div className="text-8xl md:text-9xl font-bold mb-4 font-mono relative">
            {isLoading ? (
              <span className="text-4xl">Carregando...</span>
            ) : (
              <>
                <motion.span
                  key={deathCount}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-block"
                >
                  {deathCount?.toLocaleString()}
                </motion.span>
              </>
            )}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={message}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl text-green-400 mt-4 text-shadow-lg italic"
          >
            "{message}"
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-sm text-green-600"
        >
          * O contador aumenta a cada visitante
        </motion.div>
      </motion.div>
    </div>
  );
}
