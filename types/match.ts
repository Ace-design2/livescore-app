export interface MatchEvent {
  id: number;
  type: "goal" | "yellow-card" | "red-card" | "substitution";
  player: string;
  team: string;
  minute: string;
}

export interface MatchStats {
  possession: string;
  shots: string;
  shotsOnTarget: string;
  fouls: string;
  corners: string;
}

export interface Match {
  id: number;
  league: string;
  status: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  events: MatchEvent[];
  stats?: MatchStats;
}
