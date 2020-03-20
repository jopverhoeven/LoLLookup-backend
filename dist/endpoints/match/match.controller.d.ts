import { MatchExternal } from './../../models/external/match/match.external';
import { MatchService } from './match.service';
import { MatchListExternal } from 'src/models/external/match/matchlist.external';
export declare class MatchController {
    private matchService;
    constructor(matchService: MatchService);
    getMatchHistoryByAccountId(query: string): Promise<MatchListExternal>;
    getGameByMatchId(query: string): Promise<MatchExternal>;
}
