import React from 'react';
import { Fixture } from '../types/fixture';
import { ChevronRight, Clock } from 'lucide-react';

export function FixtureCard({ league, homeTeam, awayTeam, kickoff, date }: Fixture) {
  return (
    <div className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer w-full group">
      
      {/* Header: League & Date Indicator */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
          {league}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
          <Clock size={12} />
          <span>{date}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-between">
        
        {/* Teams Area */}
        <div className="flex-1 space-y-3">
          
          {/* Home Team */}
          <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-1 transition-transform">
            <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-200 dark:border-gray-700">
              {homeTeam.charAt(0)}
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {homeTeam}
            </span>
          </div>

          {/* Away Team */}
          <div className="flex items-center gap-3 group-hover:transform group-hover:translate-x-1 transition-transform">
            <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-200 dark:border-gray-700">
              {awayTeam.charAt(0)}
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">
              {awayTeam}
            </span>
          </div>
          
        </div>

        {/* Kickoff Box */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-[#222] border border-gray-100 dark:border-gray-700 rounded-lg py-2 px-3 text-center min-w-[64px]">
            <span className="font-bold text-gray-900 dark:text-white leading-none">
              {kickoff}
            </span>
          </div>
          <ChevronRight className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors" size={20} />
        </div>
        
      </div>
    </div>
  );
}
