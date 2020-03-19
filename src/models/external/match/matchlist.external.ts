import { IMatchList } from 'src/models/interfaces/match/matchlist.interface';
import { MatchReferenceExternal } from './matchreference.external';

export class MatchListExternal implements IMatchList {
  matches: MatchReferenceExternal[];
  totalGames: number;
  startIndex: number;
  endIndex: number;
}
