'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { trainPersonalizationModel, getPersonalizedScore } from '@/lib/ai/personalization';

export function PersonalizedChallenge() {
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function loadAI() {
      const model = await trainPersonalizationModel();
      const currentScore = await getPersonalizedScore(model, [1, 0.85, 20]); // High Intensity match at 8 PM
      setScore(currentScore);
      setLoading(false);
    }
    loadAI();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass p-8 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Sparkles size={120} className="text-accent-primary" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-accent-primary/20 flex items-center justify-center">
            <Sparkles size={16} className="text-accent-primary" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">AI Personalized Challenge</span>
        </div>

        {loading ? (
          <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-white/5 rounded w-3/4" />
            <div className="h-4 bg-white/5 rounded w-1/2" />
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-3xl font-black">The "Dhoni" Masterclass</h2>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-accent-gold">
                  <Zap size={14} />
                  <span className="text-[10px] font-bold uppercase">Personalization Score</span>
                </div>
                <span className="text-xl font-black text-accent-gold">{(score * 100).toFixed(1)}%</span>
              </div>
            </div>
            <p className="text-dim text-sm max-w-md mb-6">
              Our neural network detected your preference for high-intensity matches. We've unlocked a unique challenge: Predict a match-winning 6 in the last 2 overs of MI vs CSK.
            </p>
            <button className="btn-primary">
              Accept Challenge <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}
