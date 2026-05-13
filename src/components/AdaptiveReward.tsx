'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function AdaptiveReward() {
  const [isOpen, setIsOpen] = useState(false);

  // Simulate AI detecting "dipping interest" (e.g. user hasn't interacted for 10 seconds on the dashboard)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000); 
    
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="fixed bottom-24 right-6 z-[80] w-full max-w-sm"
      >
        <div className="glass p-5 border-accent-secondary/50 bg-bg-deep/90 shadow-[0_0_40px_rgba(0,255,255,0.15)] relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-20 text-accent-secondary">
            <Gift size={120} />
          </div>
          
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 p-1 text-dim hover:text-white transition-colors">
            <X size={16} />
          </button>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2 text-accent-secondary">
              <Sparkles size={16} />
              <h4 className="font-bold text-xs uppercase tracking-widest">Comeback Reward</h4>
            </div>
            
            <h3 className="text-xl font-black italic mb-2">We missed your predictions!</h3>
            <p className="text-sm text-dim mb-4 leading-relaxed">
              Our AI noticed you've been quiet. Here's a <strong className="text-accent-secondary">1.5x Multiplier Token</strong> to use on the next match. Let's get you back on the leaderboard!
            </p>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="w-full py-3 rounded-lg bg-accent-secondary/20 hover:bg-accent-secondary/30 border border-accent-secondary/50 text-accent-secondary font-bold text-sm transition-colors"
            >
              Claim Reward
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
