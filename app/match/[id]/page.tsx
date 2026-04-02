"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Match } from '@/types/match';
import MatchHeader from '@/components/MatchHeader';
import ScoreBoard from '@/components/ScoreBoard';
import MatchTabs from '@/components/MatchTabs';
import MatchEvents from '@/components/MatchEvents';
import MatchDetailsSkeleton from '@/components/MatchDetailsSkeleton';
import { FaFutbol } from 'react-icons/fa';
import { ArrowLeft, Trophy, Activity, BarChart2 } from 'lucide-react';

// Dummy match data for demonstration
const INITIAL_MATCH: Match = {
  id: 1,
  league: "Premier League",
  status: "LIVE",
  time: "72'",
  homeTeam: "Arsenal",
  awayTeam: "Chelsea",
  homeScore: 2,
  awayScore: 1,
  events: [
    { id: 1, type: "goal", player: "Saka", team: "Arsenal", minute: "34'" },
    { id: 2, type: "yellow-card", player: "James", team: "Chelsea", minute: "60'" },
    { id: 3, type: "goal", player: "Odegaard", team: "Arsenal", minute: "70'" },
  ],
  stats: {
    possession: "55% - 45%",
    shots: "12 - 8",
    shotsOnTarget: "6 - 3",
    fouls: "10 - 12",
    corners: "5 - 4"
  }
};

export default function MatchDetailsPage() {
  const params = useParams();
  const idStr = Array.isArray(params?.id) ? params.id[0] : params?.id;
  
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!idStr) return;
    
    // Simulate API fetch delay to show skeleton
    const fetchMatch = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (idStr === "1") {
        setMatch(INITIAL_MATCH);
      } else {
        setMatch(null);
      }
      setLoading(false);
    };

    fetchMatch();
  }, [idStr]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 px-4 bg-gray-50 dark:bg-gray-950 transition-colors">
        <MatchDetailsSkeleton />
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-gray-50 dark:bg-gray-950 transition-colors">
        <div className="text-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl p-10 shadow-lg dark:shadow-2xl transition-colors">
          <div className="flex justify-center mb-6">
            <FaFutbol className="w-16 h-16 text-gray-300 dark:text-gray-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Match Not Found</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">The match you are looking for does not exist or has ended.</p>
          <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" /> Return Home
          </a>
        </div>
      </div>
    );
  }

  const OverviewContent = (
     <div className="space-y-4">
       <div className="bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-white/5 p-6 rounded-xl flex justify-between items-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60 shadow-sm dark:shadow-none">
         <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
           <Trophy className="w-4 h-4 text-yellow-500/80" /> Tournament
         </span>
         <span className="font-bold text-gray-900 dark:text-white">{match.league}</span>
       </div>
       <div className="bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-white/5 p-6 rounded-xl flex justify-between items-center transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/60 shadow-sm dark:shadow-none">
         <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-medium">
           <Activity className="w-4 h-4 text-blue-500/80 dark:text-blue-400/80" /> Status
         </span>
         <span className={`font-bold ${match.status === 'LIVE' ? 'text-red-600 dark:text-red-500 flex items-center gap-2' : 'text-gray-900 dark:text-gray-200'}`}>
            {match.status === 'LIVE' && <span className="w-2 h-2 rounded-full bg-red-600 dark:bg-red-500 animate-pulse" />}
            {match.status}
         </span>
       </div>
       <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-100 dark:border-white/5 p-6 rounded-xl text-center shadow-sm dark:shadow-inner mt-2 transition-colors">
         <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 font-medium mb-2">
           <BarChart2 className="w-4 h-4" /> Current Score
         </p>
         <h3 className="text-2xl font-black text-gray-900 dark:text-white">{match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}</h3>
       </div>
     </div>
  );

  const StatisticsContent = match.stats ? (
    <div className="space-y-3">
      {Object.entries(match.stats).map(([key, value]) => (
        <div key={key} className="bg-white dark:bg-gray-800/40 border border-gray-100 dark:border-white/5 p-4 rounded-xl flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors shadow-sm dark:shadow-none">
          <span className="text-gray-500 dark:text-gray-400 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
          <span className="font-bold text-gray-900 dark:text-white tracking-wider">{value}</span>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-10 text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/40 rounded-2xl border border-gray-200 dark:border-white/5 transition-colors">Statistics not available.</div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 md:px-8 transition-colors">
      <div className="max-w-3xl mx-auto w-full">
        <MatchHeader league={match.league} status={match.status} time={match.time} />
        <ScoreBoard 
          homeTeam={match.homeTeam} 
          awayTeam={match.awayTeam} 
          homeScore={match.homeScore} 
          awayScore={match.awayScore} 
        />
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg dark:shadow-2xl ring-1 ring-gray-200 dark:ring-white/5 mb-8 transition-colors">
           <MatchTabs 
             overviewContent={OverviewContent}
             statisticsContent={StatisticsContent}
             eventsContent={<MatchEvents events={match.events} />}
           />
        </div>
      </div>
    </div>
  );
}
