import React from 'react';

interface DateTabsProps {
  dates: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

export function DateTabs({ dates, selectedDate, onSelectDate }: DateTabsProps) {
  return (
    <div className="w-full overflow-x-auto py-3 scrollbar-hide sticky top-16 z-40 bg-gray-50/95 dark:bg-[#0a0a0a]/95 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="flex gap-2 px-4 sm:px-0">
        <button
          onClick={() => onSelectDate("All")}
          className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedDate === "All"
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
              : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          All Dates
        </button>

        {dates.map((date) => (
          <button
            key={date}
            onClick={() => onSelectDate(date)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedDate === date
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-sm'
                : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            {date}
          </button>
        ))}
      </div>
    </div>
  );
}
