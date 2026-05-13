'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Zap } from 'lucide-react';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  match: {
    homeTeam: string;
    awayTeam: string;
    odds: {
      homeWin: number;
      awayWin: number;
    };
  } | null;
}

export function PredictionModal({ isOpen, onClose, match }: ModalProps) {
  const [amount, setAmount] = useState(10);
  const [selected, setSelected] = useState<'home' | 'away' | null>(null);

  if (!match) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] glass p-8"
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-black italic uppercase gradient-text">Place Prediction</h3>
                <p className="text-dim text-xs font-bold uppercase tracking-wider">Stake your FanCoins</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelected('home')}
                  className={`flex-1 glass p-4 text-center border-2 transition-all ${selected === 'home' ? 'border-accent-primary bg-accent-primary/10' : 'border-transparent'}`}
                >
                  <span className="block text-xs font-bold text-dim mb-1">{match.homeTeam}</span>
                  <span className="text-xl font-black">{match.odds.homeWin}x</span>
                </button>
                <button 
                  onClick={() => setSelected('away')}
                  className={`flex-1 glass p-4 text-center border-2 transition-all ${selected === 'away' ? 'border-accent-secondary bg-accent-secondary/10' : 'border-transparent'}`}
                >
                  <span className="block text-xs font-bold text-dim mb-1">{match.awayTeam}</span>
                  <span className="text-xl font-black">{match.odds.awayWin}x</span>
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase text-dim">
                  <span>Stake Amount</span>
                  <span>{amount} Coins</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="100" 
                  step="10"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full accent-accent-primary h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="glass p-4 bg-accent-primary/5 border-accent-primary/20">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-accent-gold" />
                    <span className="text-sm font-bold">Estimated Payout</span>
                  </div>
                  <span className="text-xl font-black text-accent-gold">
                    {selected ? Math.floor(amount * (selected === 'home' ? match.odds.homeWin : match.odds.awayWin)) : 0}
                  </span>
                </div>
              </div>

              <button 
                disabled={!selected}
                onClick={onClose}
                className="btn-primary w-full justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Prediction <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
