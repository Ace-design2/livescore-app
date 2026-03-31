import React from 'react';

export function Loader() {
  return (
    <div className="w-full space-y-4">
      {[...Array(4)].map((_, i) => (
        <div 
          key={i} 
          className="bg-white dark:bg-[#1a1a1a] rounded-xl p-4 w-full h-36 border border-gray-100 dark:border-gray-800 animate-pulse flex flex-col justify-between"
        >
          {/* Header Skeleton */}
          <div className="flex justify-between items-center mb-4">
            <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            <div className="h-3 w-12 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
          
          {/* Teams Skeleton */}
          <div className="space-y-4">
            {/* Team 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </div>
              <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
            
            {/* Team 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </div>
              <div className="h-5 w-5 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
