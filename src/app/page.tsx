'use client';

// Removed Apollo Client imports due to SSR mismatch
import { Navbar } from '@/components/Navbar';
import { StatsSection } from '@/components/StatsSection';
import { MatchCard } from '@/components/MatchCard';
import { PersonalizedChallenge } from '@/components/PersonalizedChallenge';
import { PredictionModal } from '@/components/PredictionModal';
import { ProgressionBar } from '@/components/ProgressionBar';
import { AgenticAvatar } from '@/components/AgenticAvatar';
import { DailyAIChallenge } from '@/components/DailyAIChallenge';
import { PredictionPulse } from '@/components/PredictionPulse';
import { AdaptiveReward } from '@/components/AdaptiveReward';
import { ShortsFeed } from '@/components/ShortsFeed';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Dashboard() {
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const data = {
    me: { username: "FanaticPro", xp: 1250, level: 12, coins: 450, streakCount: 7 },
    upcomingMatches: [
      {
        id: 'm1',
        homeTeam: 'Mumbai Indians',
        awayTeam: 'Chennai Super Kings',
        startTime: '2026-05-14T14:30:00.000Z',
        predictionOdds: { homeWin: 1.8, awayWin: 2.1 }
      },
      {
        id: 'm2',
        homeTeam: 'Royal Challengers Bangalore',
        awayTeam: 'Gujarat Titans',
        startTime: '2026-05-15T14:30:00.000Z',
        predictionOdds: { homeWin: 2.0, awayWin: 1.9 }
      }
    ]
  };

  const { me, upcomingMatches } = data;

  return (
    <main className="max-w-7xl mx-auto px-6 pt-12 pb-32 space-y-12">
      {/* Header with Avatar and Progression */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 glass p-8">
        <div className="flex items-center gap-6">
          <AgenticAvatar level={me.level} />
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black italic uppercase gradient-text mb-1"
            >
              {me.username}
            </motion.h1>
            <p className="text-dim font-medium text-sm">Tournament Season 2026 • Matchday 42</p>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <ProgressionBar xp={me.xp} level={me.level} />
        </div>
      </div>

      <StatsSection 
        xp={me.xp} 
        level={me.level} 
        coins={me.coins} 
        streak={me.streakCount} 
      />

      {/* Daily AI Streak Challenge */}
      <DailyAIChallenge />

      {/* Featured AI Section */}
      <PersonalizedChallenge />

      {/* Active Predictions */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold font-heading">Upcoming Matches</h2>
          <button className="text-sm font-bold text-accent-primary hover:underline">View All</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMatches.map((match: any) => (
            <MatchCard 
              key={match.id}
              id={match.id}
              homeTeam={match.homeTeam}
              awayTeam={match.awayTeam}
              startTime={match.startTime}
              odds={match.predictionOdds}
              onPredict={(m) => setSelectedMatch(m)}
            />
          ))}
        </div>
      </section>

      {/* Shorts Feed for content (Promotional) */}
      <ShortsFeed />

      {/* Leaderboard Preview (Placeholder) */}
      <section className="glass p-8">
        <h2 className="text-xl font-bold mb-4 font-heading">Friends Leaderboard</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="flex items-center gap-4">
                <span className="text-dim font-bold">#{i}</span>
                <div className="w-8 h-8 rounded-full bg-white/10" />
                <span className="font-semibold text-sm">User_{i}00</span>
              </div>
              <span className="text-sm font-bold text-accent-gold">{(4000 - i * 500).toLocaleString()} XP</span>
            </div>
          ))}
        </div>
      </section>

      <Navbar />

      <PredictionModal 
        isOpen={!!selectedMatch}
        onClose={() => setSelectedMatch(null)}
        match={selectedMatch}
      />

      {/* Real-time pulse prediction feature */}
      <PredictionPulse />

      {/* Adaptive reward feature for engagement recovery */}
      <AdaptiveReward />
    </main>
  );
}
