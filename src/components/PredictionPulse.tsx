'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Timer, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function PredictionPulse() {
  const [timeLeft, setTimeLeft] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const [predicted, setPredicted] = useState(false);

  // Simulate pulse activating randomly
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 5000); // activates 5s after mount for demo
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isActive && timeLeft > 0 && !predicted) {
      const interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
  }, [isActive, timeLeft, predicted]);

  const handlePredict = () => {
    setPredicted(true);
    setTimeout(() => setIsActive(false), 2000);
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[90] w-full max-w-md"
      >
        <div className="glass p-5 border-accent-gold/40 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2 text-accent-gold">
              <Zap size={18} className="animate-pulse" />
              <h3 className="font-black uppercase italic tracking-wide">Prediction Pulse</h3>
            </div>
            <div className="flex items-center gap-1 font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded">
              <Timer size={14} />
              <span>00:{timeLeft.toString().padStart(2, '0')}</span>
            </div>
          </div>
          
          {!predicted ? (
            <>
              <p className="text-sm font-semibold mb-4">What will happen on the first ball of the next over?</p>
              <div className="grid grid-cols-2 gap-2">
                {['Dot Ball (1.5x)', 'Single/Double (1.2x)', 'Boundary (3x)', 'Wicket (5x)'].map(option => (
                  <button 
                    key={option}
                    onClick={handlePredict}
                    className="glass p-2 text-xs font-bold hover:bg-accent-gold/20 hover:border-accent-gold transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="py-4 text-center text-accent-gold font-bold">
              Prediction Locked! 🔒 Multiplier Active.
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
