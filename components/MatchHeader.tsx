import React from 'react';

interface MatchHeaderProps {
  league: string;
  status: string;
  time: string;
}

const MatchHeader: React.FC<MatchHeaderProps> = ({ league, status, time }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800/50 rounded-xl p-4 mb-6 ring-1 ring-gray-200 dark:ring-white/10 shadow-sm backdrop-blur-sm transition-colors">
      <div className="flex flex-col">
        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{league}</span>
        <span className="text-sm font-medium text-gray-900 dark:text-gray-200 mt-1">Matchday</span>
      </div>
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-2">
           {status === 'LIVE' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
           )}
           <span className={`text-sm font-bold ${status === 'LIVE' ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>
             {status}
           </span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{time}</span>
      </div>
    </div>
  );
};

export default MatchHeader;
