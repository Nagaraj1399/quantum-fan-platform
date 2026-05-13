'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Trophy, Store, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/' },
    { icon: <Trophy size={20} />, label: 'Leaderboard', href: '/leaderboard' },
    { icon: <Store size={20} />, label: 'Market', href: '/market' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/settings' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="glass px-8 py-4 flex items-center gap-8 shadow-2xl"
      >
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link 
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-accent-primary' : 'text-dim hover:text-text-main'}`}
            >
              {item.icon}
              <span className="text-[10px] font-bold uppercase">{item.label}</span>
              {active && <motion.div layoutId="activeNav" className="w-1 h-1 rounded-full bg-accent-primary" />}
            </Link>
          );
        })}
        <div className="w-[1px] h-8 bg-glass-border mx-2" />
        <button className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary p-[2px]">
          <div className="w-full h-full rounded-full bg-bg-deep flex items-center justify-center">
            <User size={18} />
          </div>
        </button>
      </motion.div>
    </nav>
  );
}
