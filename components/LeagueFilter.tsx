import React from 'react';

interface LeagueFilterProps {
  activeLeague: string;
  onLeagueChange: (league: string) => void;
}

export const LEAGUES = [
  "All",
  "Premier League",
  "Champions League",
  "La Liga",
  "Serie A",
  "Bundesliga"
];

export function LeagueFilter({ activeLeague, onLeagueChange }: LeagueFilterProps) {
  return (
    <div className="w-full overflow-x-auto py-4 scrollbar-hide">
      <div className="flex gap-3 px-4 sm:px-0">
        {LEAGUES.map((league) => (
          <button
            key={league}
            onClick={() => onLeagueChange(league)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
              ${activeLeague === league
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
              }
            `}
          >
            {league}
          </button>
        ))}
      </div>
    </div>
  );
}
