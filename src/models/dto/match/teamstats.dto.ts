import { ITeamStats } from 'src/models/interfaces/match/teamstats.interface';

export class TeamStatsDTO implements ITeamStats {
  firstDragon: boolean;
  firstInhibitor: boolean;
  bans: import('../../interfaces/match/teambans.interface').ITeamBans[];
  baronKills: number;
  firstRiftHerald: number;
  firstBaron: boolean;
  riftHeraldKills: number;
  firstBlood: boolean;
  teamId: number;
  firstTower: boolean;
  vilemawKills: number;
  inhibitorKills: number;
  towerKills: number;
  dominionVictoryScore: number;
  win: string;
  dragonKills: number;
}
