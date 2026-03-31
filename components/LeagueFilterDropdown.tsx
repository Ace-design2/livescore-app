import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LeagueFilterDropdownProps {
  leagues: string[];
  selectedLeague: string;
  onSelectLeague: (league: string) => void;
}

export function LeagueFilterDropdown({ leagues, selectedLeague, onSelectLeague }: LeagueFilterDropdownProps) {
  return (
    <div className="relative inline-block w-full sm:w-64">
      <div className="relative">
        <select
          value={selectedLeague}
          onChange={(e) => onSelectLeague(e.target.value)}
          className="appearance-none w-full bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-800 rounded-lg py-2.5 pl-4 pr-10 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer shadow-sm transition-colors text-sm font-medium"
        >
          <option value="All">All Leagues</option>
          {leagues.map((league) => (
            <option key={league} value={league}>
              {league}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 dark:text-gray-400">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}
