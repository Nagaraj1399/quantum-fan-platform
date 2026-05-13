'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Users } from 'lucide-react';

interface MatchProps {
  id: string;
  homeTeam: string;
  awayTeam: string;
  startTime: string;
  odds: {
    homeWin: number;
    awayWin: number;
  };
  onPredict: (match: any) => void;
}

export function MatchCard({ id, homeTeam, awayTeam, startTime, odds, onPredict }: MatchProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="glass glass-hover p-6 flex flex-col gap-4"
    >
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-dim tracking-widest uppercase">Live in 2h</span>
        <div className="flex gap-2">
          <Trophy size={14} className="text-accent-gold" />
          <span className="text-xs font-bold">500 XP Pool</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8 my-2">
        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="w-16 h-16 rounded-full bg-accent-primary/20 flex items-center justify-center border border-accent-primary/30">
            <span className="text-xl font-bold">{homeTeam[0]}</span>
          </div>
          <span className="text-sm font-semibold">{homeTeam}</span>
        </div>
        
        <div className="text-2xl font-black italic text-dim">VS</div>

        <div className="flex flex-col items-center gap-2 flex-1 text-center">
          <div className="w-16 h-16 rounded-full bg-accent-secondary/20 flex items-center justify-center border border-accent-secondary/30">
            <span className="text-xl font-bold">{awayTeam[0]}</span>
          </div>
          <span className="text-sm font-semibold">{awayTeam}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4">
        <button className="glass p-3 flex flex-col items-center hover:bg-accent-primary/20 transition-colors">
          <span className="text-[10px] uppercase font-bold text-dim">Win Probability</span>
          <span className="text-lg font-bold">{odds.homeWin}x</span>
        </button>
        <button className="glass p-3 flex flex-col items-center hover:bg-accent-secondary/20 transition-colors">
          <span className="text-[10px] uppercase font-bold text-dim">Win Probability</span>
          <span className="text-lg font-bold">{odds.awayWin}x</span>
        </button>
      </div>

      <button 
        onClick={() => onPredict({ id, homeTeam, awayTeam, odds })}
        className="btn-primary w-full justify-center py-4 mt-2"
      >
        Place Prediction
      </button>
    </motion.div>
  );
}
