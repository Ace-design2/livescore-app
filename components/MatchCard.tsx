import React from 'react';
import { Match } from '../data/matches';
import { Clock } from 'lucide-react';

export function MatchCard({ league, homeTeam, awayTeam, homeScore, awayScore, time, status }: Match) {
  const isLive = status === "LIVE";
  
  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full group">
      {/* Header: League & Status */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {league}
        </span>
        <div className="flex items-center gap-1.5">
          {isLive && (
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          )}
          <span className={`text-xs font-bold ${isLive ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}>
            {time}
            {status !== "LIVE" && status !== "UPCOMING" ? ` - ${status}` : ''}
          </span>
        </div>
      </div>

      {/* Teams & Scores */}
      <div className="space-y-3">
        {/* Home Team */}
        <div className="flex justify-between items-center group-hover:transform group-hover:translate-x-1 transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-200 dark:border-gray-700">
              {homeTeam.charAt(0)}
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {homeTeam}
            </span>
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            {homeScore !== null ? homeScore : '-'}
          </span>
        </div>

        {/* Away Team */}
        <div className="flex justify-between items-center group-hover:transform group-hover:translate-x-1 transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-200 dark:border-gray-700">
              {awayTeam.charAt(0)}
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {awayTeam}
            </span>
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            {awayScore !== null ? awayScore : '-'}
          </span>
        </div>
      </div>

      {/* Upcoming specific UI if needed */}
      {status === 'UPCOMING' && (
        <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Clock size={14} />
            <span>Match starts at {time}</span>
          </div>
        </div>
      )}
    </div>
  );
}
