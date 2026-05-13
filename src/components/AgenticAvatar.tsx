'use client';

import { motion } from 'framer-motion';
import { User, Shield, Zap, Sparkles } from 'lucide-react';

interface AvatarProps {
  level: number;
}

export function AgenticAvatar({ level }: AvatarProps) {
  // Determine gear based on level
  let gearColor = 'text-gray-400';
  let gearGlow = 'shadow-none';
  let Accessory = null;
  let label = 'Rookie Fan';

  if (level >= 10 && level < 25) {
    gearColor = 'text-accent-secondary';
    gearGlow = 'shadow-[0_0_15px_rgba(0,255,255,0.4)]';
    Accessory = Zap;
    label = 'Pro Analyst';
  } else if (level >= 25) {
    gearColor = 'text-accent-gold';
    gearGlow = 'shadow-[0_0_25px_rgba(255,215,0,0.6)]';
    Accessory = Sparkles;
    label = 'Legendary Predictor';
  }

  return (
    <div className="flex flex-col items-center group">
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`relative w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 ${gearGlow}`}
      >
        <User size={32} className={`${gearColor} transition-colors duration-500`} />
        
        {Accessory && (
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-bg-deep border border-white/10 flex items-center justify-center ${gearColor}`}
          >
            <Accessory size={14} />
          </motion.div>
        )}
      </motion.div>
      <div className="mt-3 text-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-dim">Agentic Status</span>
        <h4 className={`text-sm font-black mt-1 ${gearColor}`}>{label}</h4>
      </div>
    </div>
  );
}
