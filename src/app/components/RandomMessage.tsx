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

export const RandomMessage = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * funnyDeathMessages.length);
    setMessage(funnyDeathMessages[randomIndex]);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={message}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="text-xl md:text-2xl text-green-400 mt-8 text-shadow-lg italic relative"
      >
        <span className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-lg">❝</span>
        {message}
        <span className="absolute -right-8 top-1/2 transform -translate-y-1/2 text-lg">❞</span>
      </motion.p>
    </AnimatePresence>
  );
}; 