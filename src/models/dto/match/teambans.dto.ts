import { ITeamBans } from 'src/models/interfaces/match/teambans.interface';

export class TeamBansDTO implements ITeamBans {
  pickTurn: number;
  championId: number;
}
