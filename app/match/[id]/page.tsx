"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Match } from '@/types/match';
import MatchHeader from '@/components/MatchHeader';
import ScoreBoard from '@/components/ScoreBoard';
import MatchTabs from '@/components/MatchTabs';
import MatchEvents from '@/components/MatchEvents';
import MatchDetailsSkeleton from '@/components/MatchDetailsSkeleton';

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
      <div className="min-h-screen pt-24 px-4 bg-gray-950">
        <MatchDetailsSkeleton />
      </div>
    );
  }

  if (!match) {
    return (
      <div className="min-h-screen pt-24 px-4 flex items-center justify-center bg-gray-950">
        <div className="text-center bg-gray-900 border border-white/10 rounded-2xl p-10 shadow-2xl">
          <div className="text-6xl mb-4">⚽</div>
          <h2 className="text-2xl font-bold text-white mb-2">Match Not Found</h2>
          <p className="text-gray-400 mb-6">The match you are looking for does not exist or has ended.</p>
          <a href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  const OverviewContent = (
     <div className="space-y-4">
       <div className="bg-gray-800/40 border border-white/5 p-6 rounded-xl flex justify-between items-center transition-colors hover:bg-gray-800/60">
         <span className="text-gray-400 font-medium">Tournament</span>
         <span className="font-bold text-white">{match.league}</span>
       </div>
       <div className="bg-gray-800/40 border border-white/5 p-6 rounded-xl flex justify-between items-center transition-colors hover:bg-gray-800/60">
         <span className="text-gray-400 font-medium">Status</span>
         <span className={`font-bold ${match.status === 'LIVE' ? 'text-red-500' : 'text-gray-200'}`}>
            {match.status}
         </span>
       </div>
       <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 p-6 rounded-xl text-center shadow-inner">
         <p className="text-gray-300 font-medium mb-2">Current Score</p>
         <h3 className="text-2xl font-black text-white">{match.homeTeam} {match.homeScore} - {match.awayScore} {match.awayTeam}</h3>
       </div>
     </div>
  );

  const StatisticsContent = match.stats ? (
    <div className="space-y-3">
      {Object.entries(match.stats).map(([key, value]) => (
        <div key={key} className="bg-gray-800/40 border border-white/5 p-4 rounded-xl flex justify-between items-center hover:bg-gray-800/60 transition-colors">
          <span className="text-gray-400 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
          <span className="font-bold text-white tracking-wider">{value}</span>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-10 text-gray-500 bg-gray-900/40 rounded-2xl border border-white/5">Statistics not available.</div>
  );

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto w-full">
        <MatchHeader league={match.league} status={match.status} time={match.time} />
        <ScoreBoard 
          homeTeam={match.homeTeam} 
          awayTeam={match.awayTeam} 
          homeScore={match.homeScore} 
          awayScore={match.awayScore} 
        />
        
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl ring-1 ring-white/5 mb-8">
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
