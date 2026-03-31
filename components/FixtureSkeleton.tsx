import React from 'react';

export function FixtureSkeleton() {
  return (
    <div className="w-full space-y-3">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i} 
          className="bg-white dark:bg-[#1a1a1a] rounded-xl p-4 w-full border border-gray-100 dark:border-gray-800 animate-pulse"
        >
          {/* Header Skeleton */}
          <div className="flex justify-between items-center mb-3">
            <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400">
              <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* Teams Skeleton */}
            <div className="flex-1 space-y-4">
              {/* Team 1 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </div>

              {/* Team 2 */}
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-36 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </div>
            </div>

            {/* Kickoff Skeleton */}
            <div className="flex items-center gap-4">
               <div className="h-8 w-16 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
               <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
