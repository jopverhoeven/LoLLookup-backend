import { IMatchList } from 'src/models/interfaces/match/matchlist.interface';

export class MatchList implements IMatchList {
  matches: import('../../interfaces/match/matchreference.interface').IMatchReference[];
  totalGames: number;
  startIndex: number;
  endIndex: number;
}
