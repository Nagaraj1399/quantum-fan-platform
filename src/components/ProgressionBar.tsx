'use client';

import { motion } from 'framer-motion';
import { Crown, Star, Shield } from 'lucide-react';

interface ProgressionProps {
  xp: number;
  level: number;
}

const TIERS = [
  { name: 'Rookie', minXp: 0, icon: <Shield size={16} /> },
  { name: 'Pro', minXp: 5000, icon: <Star size={16} /> },
  { name: 'Legend', minXp: 20000, icon: <Crown size={16} /> },
];

export function ProgressionBar({ xp, level }: ProgressionProps) {
  // Determine current tier and next tier
  const currentTierIndex = TIERS.findIndex(t => xp >= t.minXp && (TIERS.indexOf(t) === TIERS.length - 1 || xp < TIERS[TIERS.indexOf(t) + 1].minXp));
  const currentTier = TIERS[currentTierIndex];
  const nextTier = TIERS[currentTierIndex + 1] || TIERS[TIERS.length - 1];
  
  const progressPercent = currentTier === nextTier 
    ? 100 
    : ((xp - currentTier.minXp) / (nextTier.minXp - currentTier.minXp)) * 100;

  return (
    <div className="glass p-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-white/10 text-accent-gold">
            {currentTier.icon}
          </div>
          <span className="font-bold text-sm tracking-wide uppercase">{currentTier.name} (Lvl {level})</span>
        </div>
        <div className="text-xs font-bold text-dim">
          {xp.toLocaleString()} / {nextTier.minXp.toLocaleString()} XP
        </div>
      </div>
      
      <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden relative">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-primary to-accent-secondary"
        />
        {/* Shine effect */}
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
          className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
        />
      </div>
      
      <div className="flex justify-between mt-2 px-1">
        {TIERS.map((tier, idx) => (
          <div key={tier.name} className={`text-[10px] uppercase font-bold ${xp >= tier.minXp ? 'text-text-main' : 'text-white/20'}`}>
            {tier.name}
          </div>
        ))}
      </div>
    </div>
  );
}
