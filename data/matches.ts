export type MatchStatus = "LIVE" | "HALF TIME" | "FULL TIME" | "UPCOMING";

export interface Match {
  id: number;
  league: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  time: string;
  status: MatchStatus;
}

export const matches: Match[] = [
  {
    id: 1,
    league: "Premier League",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    homeScore: 2,
    awayScore: 1,
    time: "72'",
    status: "LIVE"
  },
  {
    id: 2,
    league: "La Liga",
    homeTeam: "Barcelona",
    awayTeam: "Real Madrid",
    homeScore: 1,
    awayScore: 1,
    time: "HT",
    status: "HALF TIME"
  },
  {
    id: 3,
    league: "Premier League",
    homeTeam: "Man City",
    awayTeam: "Liverpool",
    homeScore: 0,
    awayScore: 0,
    time: "15'",
    status: "LIVE"
  },
  {
    id: 4,
    league: "Serie A",
    homeTeam: "Juventus",
    awayTeam: "AC Milan",
    homeScore: 3,
    awayScore: 0,
    time: "FT",
    status: "FULL TIME"
  },
  {
    id: 5,
    league: "Bundesliga",
    homeTeam: "Bayern Munich",
    awayTeam: "Borussia Dortmund",
    homeScore: null,
    awayScore: null,
    time: "20:00",
    status: "UPCOMING"
  },
  {
    id: 6,
    league: "Champions League",
    homeTeam: "PSG",
    awayTeam: "Inter Milan",
    homeScore: 2,
    awayScore: 2,
    time: "89'",
    status: "LIVE"
  }
];
