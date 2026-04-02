import React from 'react';

interface ScoreBoardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}) => {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-10 mb-8 ring-1 ring-gray-200 dark:ring-white/5 shadow-2xl transition-colors">
      <div className="flex flex-col items-center flex-1">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl shadow-inner mb-3 border border-gray-200 dark:border-white/10 transition-colors">
          <span className="font-bold text-gray-600 dark:text-gray-400">{homeTeam.substring(0, 3).toUpperCase()}</span>
        </div>
        <span className="text-base md:text-xl font-bold text-gray-900 dark:text-white text-center break-words w-full px-2">{homeTeam}</span>
      </div>

      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800/80 rounded-2xl px-6 py-4 shadow-lg border border-gray-200 dark:border-white/5 transition-colors">
          <span className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter tabular-nums">
            {homeScore} <span className="text-gray-400 dark:text-gray-500 mx-1 md:mx-2 font-light">-</span> {awayScore}
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center flex-1">
        <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-xl shadow-inner mb-3 border border-gray-200 dark:border-white/10 transition-colors">
          <span className="font-bold text-gray-600 dark:text-gray-400">{awayTeam.substring(0, 3).toUpperCase()}</span>
        </div>
        <span className="text-base md:text-xl font-bold text-gray-900 dark:text-white text-center break-words w-full px-2">{awayTeam}</span>
      </div>
    </div>
  );
};

export default ScoreBoard;
