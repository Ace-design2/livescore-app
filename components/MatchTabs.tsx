"use client";
import React, { useState } from 'react';

type TabType = "Overview" | "Statistics" | "Lineups" | "Events";

interface MatchTabsProps {
  overviewContent: React.ReactNode;
  statisticsContent: React.ReactNode;
  eventsContent: React.ReactNode;
  lineupsContent?: React.ReactNode;
}

const MatchTabs: React.FC<MatchTabsProps> = ({
  overviewContent,
  statisticsContent,
  eventsContent,
  lineupsContent
}) => {
  const [activeTab, setActiveTab] = useState<TabType>("Overview");
  const tabs: TabType[] = ["Overview", "Statistics", "Lineups", "Events"];

  return (
    <div className="w-full mt-6">
      <div className="flex overflow-x-auto gap-2 mb-6 border-b border-gray-800 pb-2 scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
              activeTab === tab 
                ? 'bg-blue-600/10 text-blue-400 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.5)]' 
                : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="min-h-[300px] transition-opacity duration-300 ease-in-out">
        {activeTab === "Overview" && overviewContent}
        {activeTab === "Statistics" && statisticsContent}
        {activeTab === "Events" && eventsContent}
        {activeTab === "Lineups" && (lineupsContent || <div className="text-center py-10 text-gray-500">Lineups will be available closer to kickoff.</div>)}
      </div>
    </div>
  );
};

export default MatchTabs;
