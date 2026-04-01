import React from 'react';
import { MatchEvent } from '@/types/match';

interface MatchEventsProps {
  events: MatchEvent[];
}

const MatchEvents: React.FC<MatchEventsProps> = ({ events }) => {
  if (!events || events.length === 0) {
    return <div className="text-center py-10 text-gray-500 bg-gray-900/40 rounded-2xl border border-white/5">No events recorded yet.</div>;
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'goal':
        return <span className="text-lg leading-none" role="img" aria-label="Goal">⚽</span>;
      case 'yellow-card':
        return <div className="w-3 h-4 bg-yellow-400 rounded-sm shadow-sm" />;
      case 'red-card':
        return <div className="w-3 h-4 bg-red-500 rounded-sm shadow-sm" />;
      case 'substitution':
        return <span className="text-lg text-green-500 leading-none">⇄</span>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-3">
      {events.map((event) => (
        <div key={event.id} className="flex items-center gap-4 bg-gray-800/40 p-4 rounded-xl border border-white/5 hover:bg-gray-800/60 transition-colors">
          <div className="w-10 text-center text-sm font-bold text-gray-400">{event.minute}</div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900/80 shadow-inner">
            {getEventIcon(event.type)}
          </div>
          <div className="flex flex-col flex-1">
            <span className="font-semibold text-gray-200">{event.player}</span>
            <span className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{event.team}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MatchEvents;
