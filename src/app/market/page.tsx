'use client';

import { motion } from 'framer-motion';
import { ShoppingBag as ShopIcon, Coins, Star, Zap, Shield } from 'lucide-react';
import { Navbar as MainNavbar } from '@/components/Navbar';

const items = [
  { id: 1, name: 'Streak Guard', description: 'Protect your streak for 24 hours if you miss a prediction.', price: 250, icon: <Shield className="text-blue-400" />, type: 'Power-up' },
  { id: 2, name: 'Double XP Boost', description: 'Earn 2x XP for the next 3 matches.', price: 150, icon: <Zap className="text-accent-gold" />, type: 'Booster' },
  { id: 3, name: 'Elite Avatar Frame', description: 'Show off your status with a neon-pulsing frame.', price: 500, icon: <Star className="text-accent-primary" />, type: 'Cosmetic' },
  { id: 4, name: 'Match Multiplier', description: 'Increase prediction payout by 1.5x.', price: 300, icon: <ShopIcon className="text-accent-secondary" />, type: 'Power-up' },
];

export default function MarketPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-5xl font-black italic uppercase gradient-text">Fan Marketplace</h1>
          <p className="text-dim font-medium">Exchange FanCoins for exclusive perks</p>
        </div>
        <div className="glass px-6 py-3 flex items-center gap-3">
          <Coins className="text-accent-gold" />
          <span className="text-2xl font-black">450</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-6 flex flex-col gap-4 group glass-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
              {item.icon}
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase text-accent-primary tracking-widest">{item.type}</span>
              <h3 className="text-xl font-bold mt-1">{item.name}</h3>
              <p className="text-dim text-xs mt-2 leading-relaxed">{item.description}</p>
            </div>
            <div className="mt-auto pt-4 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-dim">Cost</span>
                <span className="text-lg font-black">{item.price} Coins</span>
              </div>
              <button className="btn-primary w-full justify-center">
                Purchase
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <MainNavbar />
    </main>
  );
}
