'use client';

import { motion } from 'framer-motion';
import { Trophy as TrophyIcon, User, ArrowUp } from 'lucide-react';
import { Navbar as MainNavbar } from '@/components/Navbar';

const leaders = [
  { rank: 1, name: 'ViratFan_18', xp: 45200, streak: 42, avatar: 'V' },
  { rank: 2, name: 'DhoniMagic', xp: 42100, streak: 38, avatar: 'D' },
  { rank: 3, name: 'HitmanSurge', xp: 39800, streak: 35, avatar: 'H' },
  { rank: 4, name: 'SkyPredictor', xp: 35600, streak: 21, avatar: 'S' },
  { rank: 5, name: 'CricketGuru', xp: 32400, streak: 15, avatar: 'C' },
];

export default function LeaderboardPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 pt-12 pb-32">
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="inline-flex p-4 rounded-full bg-accent-gold/20 mb-4"
        >
          <TrophyIcon size={48} className="text-accent-gold" />
        </motion.div>
        <h1 className="text-5xl font-black italic uppercase gradient-text">Global Elite</h1>
        <p className="text-dim font-medium">Tournament Season 2026 • Live Rankings</p>
      </div>

      <div className="space-y-4">
        {leaders.map((user, i) => (
          <motion.div
            key={user.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass p-6 flex items-center justify-between group glass-hover ${user.rank <= 3 ? 'border-accent-gold/30' : ''}`}
          >
            <div className="flex items-center gap-6">
              <span className={`text-2xl font-black italic w-8 ${user.rank === 1 ? 'text-accent-gold' : 'text-dim'}`}>
                #{user.rank}
              </span>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${user.rank === 1 ? 'bg-accent-gold/20 border border-accent-gold/40' : 'bg-white/10'}`}>
                {user.avatar}
              </div>
              <div>
                <h3 className="font-bold text-lg">{user.name}</h3>
                <div className="flex items-center gap-2 text-xs font-bold text-dim uppercase">
                  <span>{user.streak} Day Streak</span>
                  <div className="w-1 h-1 rounded-full bg-dim" />
                  <span className="text-accent-primary">Elite League</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xl font-black text-accent-gold">
                {user.xp.toLocaleString()} <span className="text-xs font-bold text-dim uppercase ml-1">XP</span>
              </div>
              <div className="flex items-center justify-end gap-1 text-green-400 text-xs font-bold">
                <ArrowUp size={12} />
                <span>+450</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <MainNavbar />
    </main>
  );
}
