'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Bot, HelpCircle, Target } from 'lucide-react';
import { useState } from 'react';

export function DailyAIChallenge() {
  const [isOpen, setIsOpen] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleGuess = (correct: boolean) => {
    setAnswered(true);
    setIsCorrect(correct);
    setTimeout(() => setIsOpen(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass p-6 border-accent-secondary/30 relative overflow-hidden"
      >
        <div className="absolute -right-4 -top-4 opacity-10">
          <Bot size={100} />
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded bg-accent-secondary/20 text-accent-secondary">
              <Bot size={20} />
            </div>
            <h3 className="font-black italic text-lg">Daily AI Streak Matcher</h3>
          </div>
          
          <div className="mb-6">
            <p className="text-dim text-sm italic border-l-2 border-accent-secondary pl-3">
              "I am analyzing the current pitch conditions. A certain player has a strike rate of 165+ against spin on turning tracks like this one. Guess who to protect your streak!"
            </p>
          </div>

          {!answered ? (
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => handleGuess(false)} className="glass p-3 hover:bg-white/10 transition-colors text-sm font-bold">
                Rohit Sharma
              </button>
              <button onClick={() => handleGuess(true)} className="glass p-3 hover:bg-white/10 transition-colors text-sm font-bold border-accent-secondary/20">
                Suryakumar Yadav
              </button>
              <button onClick={() => handleGuess(false)} className="glass p-3 hover:bg-white/10 transition-colors text-sm font-bold">
                Virat Kohli
              </button>
              <button onClick={() => handleGuess(false)} className="glass p-3 hover:bg-white/10 transition-colors text-sm font-bold">
                MS Dhoni
              </button>
            </div>
          ) : (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`p-4 rounded-xl text-center font-bold ${isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
            >
              {isCorrect ? 'Correct! Streak Protected 🛡️' : 'Incorrect! Better luck next time.'}
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
