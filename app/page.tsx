"use client";

import React, { useState, useEffect } from "react";
import { LeagueFilter } from "@/components/LeagueFilter";
import { MatchCard } from "@/components/MatchCard";
import { Loader } from "@/components/Loader";
import { matches } from "@/data/matches";

export default function Home() {
  const [activeLeague, setActiveLeague] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate remote data fetching
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [activeLeague]); // Re-trigger loader if they switch leagues just for demo purposes

  // Filter logic
  const filteredMatches = matches.filter((match) => 
    activeLeague === "All" ? true : match.league === activeLeague
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-300">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        
        {/* League Filters */}
        <section>
          <LeagueFilter 
            activeLeague={activeLeague} 
            onLeagueChange={setActiveLeague} 
          />
        </section>

        {/* Live Matches List */}
        <section className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {activeLeague === "All" ? "Live Matches" : `${activeLeague} Matches`}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {isLoading ? "..." : `${filteredMatches.length} matches`}
            </span>
          </div>

          {isLoading ? (
            <Loader />
          ) : filteredMatches.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {filteredMatches.map((match) => (
                <MatchCard key={match.id} {...match} />
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-8 text-center border border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400">
                No active matches found for {activeLeague}.
              </p>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
