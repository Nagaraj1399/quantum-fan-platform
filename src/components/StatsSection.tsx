'use client';

import { motion } from 'framer-motion';
import { Flame, Star, Coins, Zap } from 'lucide-react';

interface StatsProps {
  xp: number;
  level: number;
  coins: number;
  streak: number;
}

export function StatsSection({ xp, level, coins, streak }: StatsProps) {
  const stats = [
    { icon: <Flame className="text-orange-500" />, label: 'Streak', value: `${streak} Days`, color: 'orange' },
    { icon: <Zap className="text-accent-primary" />, label: 'Level', value: level, color: 'purple' },
    { icon: <Star className="text-accent-gold" />, label: 'XP', value: xp.toLocaleString(), color: 'gold' },
    { icon: <Coins className="text-accent-secondary" />, label: 'FanCoins', value: coins, color: 'cyan' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="glass p-4 flex items-center gap-4"
        >
          <div className="p-3 rounded-xl bg-white/5">
            {stat.icon}
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-dim tracking-wider">{stat.label}</span>
            <span className="text-xl font-black">{stat.value}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
