"use client";

import React, { useState, useEffect } from "react";
import { fixtures } from "@/data/fixtures";
import { FixtureCard } from "@/components/FixtureCard";
import { DateTabs } from "@/components/DateTabs";
import { LeagueFilterDropdown } from "@/components/LeagueFilterDropdown";
import { FixtureSkeleton } from "@/components/FixtureSkeleton";

export default function FixturesPage() {
  const [selectedDate, setSelectedDate] = useState("All");
  const [selectedLeague, setSelectedLeague] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique options from mock DB (could be derived constants)
  const availableDates = Array.from(new Set(fixtures.map(f => f.date)));
  const availableLeagues = Array.from(new Set(fixtures.map(f => f.league)));

  // Simulate network
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [selectedDate, selectedLeague]);

  // Apply filters
  const filteredFixtures = fixtures.filter((match) => {
    const matchesDate = selectedDate === "All" ? true : match.date === selectedDate;
    const matchesLeague = selectedLeague === "All" ? true : match.league === selectedLeague;
    return matchesDate && matchesLeague;
  });

  // Group filtered results by date
  // e.g. { "Today": [match1, match2], "Tomorrow": [match3] }
  const groupedFixtures = filteredFixtures.reduce((acc, match) => {
    if (!acc[match.date]) {
      acc[match.date] = [];
    }
    acc[match.date].push(match);
    return acc;
  }, {} as Record<string, typeof fixtures>);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 pb-12">
      
      {/* 1) Page Header */}
      <section className="bg-white dark:bg-[#111] border-b border-gray-100 dark:border-gray-800 pt-8 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-1">
          <h1 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Fixtures
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Upcoming Football Matches
          </p>
        </div>
      </section>

      {/* 2) Date Filter Tabs (Sticky Wrapper) */}
      <DateTabs 
        dates={availableDates} 
        selectedDate={selectedDate} 
        onSelectDate={setSelectedDate} 
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 space-y-8">
        
        {/* 3) League Filter Dropdown */}
        <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <LeagueFilterDropdown 
            leagues={availableLeagues}
            selectedLeague={selectedLeague}
            onSelectLeague={setSelectedLeague}
          />
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {isLoading ? "..." : `${filteredFixtures.length} upcoming matches`}
          </span>
        </section>

        {/* 4) Fixtures List Section */}
        <section>
          {isLoading ? (
            <FixtureSkeleton />
          ) : filteredFixtures.length > 0 ? (
            <div className="space-y-8">
              {Object.entries(groupedFixtures).map(([date, dateFixtures]) => (
                <div key={date}>
                  {/* Group Header */}
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 pl-1">
                    {date}
                  </h2>
                  {/* Matches map */}
                  <div className="flex flex-col gap-3">
                    {dateFixtures.map((match) => (
                      <FixtureCard key={match.id} {...match} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="bg-white dark:bg-[#1a1a1a] rounded-xl p-10 text-center border border-gray-100 dark:border-gray-800">
              <p className="text-gray-500 dark:text-gray-400 mb-2">No matches scheduled</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Try adjusting your filters or date selection.
              </p>
            </div>
          )}
        </section>

      </main>
    </div>
  );
}
