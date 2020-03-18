import { IRanked } from 'src/models/interfaces/ranked/ranked.interface';

export class RankedExternal implements IRanked {
  queueType: string;
  summonerName: string;
  hotStreak: boolean;
  miniSeries: import('../../interfaces/ranked/miniseries.interface').IMiniSeries;
  wins: number;
  veteran: boolean;
  losses: number;
  rank: string;
  leagueId: string;
  inactive: boolean;
  freshBlood: boolean;
  tier: string;
  summonerId: string;
  leaguePoints: number;
}
