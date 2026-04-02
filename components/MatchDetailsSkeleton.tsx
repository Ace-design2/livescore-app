import React from 'react';

const MatchDetailsSkeleton = () => {
  return (
    <div className="w-full max-w-3xl mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded-xl mb-6 ring-1 ring-gray-200 dark:ring-white/5 w-full transition-colors"></div>
      
      {/* ScoreBoard Skeleton */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800/80 rounded-2xl p-6 md:p-10 mb-8 ring-1 ring-gray-200 dark:ring-white/5 h-48 md:h-56 transition-colors">
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300/50 dark:bg-gray-700/50 rounded-full mb-3" />
          <div className="h-5 w-24 bg-gray-300/50 dark:bg-gray-700/50 rounded" />
        </div>
        
        <div className="flex justify-center px-4 md:px-8">
           <div className="h-20 w-32 bg-gray-300/50 dark:bg-gray-700/50 rounded-2xl" />
        </div>
        
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-300/50 dark:bg-gray-700/50 rounded-full mb-3" />
          <div className="h-5 w-24 bg-gray-300/50 dark:bg-gray-700/50 rounded" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="flex gap-3 mb-6 border-b border-gray-200 dark:border-gray-800 pb-2 transition-colors">
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
        <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded-full" />
      </div>

      {/* Content Skeleton */}
      <div className="space-y-3">
        <div className="h-16 bg-gray-100 dark:bg-gray-800/40 rounded-xl w-full border border-gray-200 dark:border-white/5 transition-colors" />
        <div className="h-16 bg-gray-100 dark:bg-gray-800/40 rounded-xl w-full border border-gray-200 dark:border-white/5 transition-colors" />
        <div className="h-16 bg-gray-100 dark:bg-gray-800/40 rounded-xl w-full border border-gray-200 dark:border-white/5 transition-colors" />
      </div>
    </div>
  );
};

export default MatchDetailsSkeleton;
