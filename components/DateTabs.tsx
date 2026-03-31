import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DateTabsProps {
  selectedDate: string;
  onPrevDate: () => void;
  onNextDate: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
}

export function DateTabs({ selectedDate, onPrevDate, onNextDate, canGoPrev, canGoNext }: DateTabsProps) {
  return (
    <div className="w-full py-3 sticky top-16 z-40 bg-gray-50/95 dark:bg-[#0a0a0a]/95 backdrop-blur border-b border-gray-100 dark:border-gray-800 flex justify-center items-center">
      <div className="flex items-center gap-6">
        
        <button 
          onClick={onPrevDate}
          disabled={!canGoPrev}
          className={`p-2 rounded-full transition-colors ${
            canGoPrev 
              ? 'text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800' 
              : 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
          }`}
          aria-label="Previous date"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="min-w-[120px] text-center">
          <span className="text-base font-bold text-gray-900 dark:text-white">
            {selectedDate}
          </span>
        </div>

        <button 
          onClick={onNextDate}
          disabled={!canGoNext}
          className={`p-2 rounded-full transition-colors ${
            canGoNext 
              ? 'text-gray-600 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800' 
              : 'text-gray-300 dark:text-gray-700 cursor-not-allowed'
          }`}
          aria-label="Next date"
        >
          <ChevronRight size={20} />
        </button>

      </div>
    </div>
  );
}
