'use client';

import { motion } from 'framer-motion';
import { PlayCircle, Award, Construction } from 'lucide-react';

export function ShortsFeed() {
  const shorts = [
    {
      id: 1,
      title: "Mini-Workers: Pitch Prep!",
      description: "Watch the AI-generated miniature crew prepare the Wankhede pitch for the big final.",
      icon: <Construction size={24} className="text-accent-secondary" />,
      tag: "Match Recap",
      color: "bg-accent-secondary/20 border-accent-secondary/30",
    },
    {
      id: 2,
      title: "Top 3 Predictors of the Week",
      description: "See how 'ViratFan_18' and others secured the top spots with impossible predictions.",
      icon: <Award size={24} className="text-accent-gold" />,
      tag: "Highlight",
      color: "bg-accent-gold/20 border-accent-gold/30",
    }
  ];

  return (
    <section className="space-y-4 w-full">
      <div className="flex items-center gap-2 mb-2">
        <PlayCircle className="text-accent-primary" />
        <h2 className="text-2xl font-bold font-heading">FanPulse Shorts</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {shorts.map((short) => (
          <motion.div 
            key={short.id}
            whileHover={{ scale: 1.02 }}
            className={`glass p-4 flex gap-4 cursor-pointer group hover:bg-white/10 transition-all border ${short.color}`}
          >
            <div className="w-20 h-28 bg-black/40 rounded-lg flex items-center justify-center relative overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <PlayCircle size={32} className="text-white/80 group-hover:text-white transition-colors z-10" />
            </div>
            
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-dim mb-1">{short.tag}</span>
              <h3 className="font-bold text-sm mb-1">{short.title}</h3>
              <p className="text-xs text-dim line-clamp-2">{short.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
