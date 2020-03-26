import { MatchExternal } from './../../models/external/match/match.external';
import { MatchService } from './match.service';
import { MatchListExternal } from 'src/models/external/match/matchlist.external';
import { MatchHistoryParams } from './params/matchhistory.params';
import { MatchParams } from './params/match.params';
export declare class MatchController {
    private matchService;
    constructor(matchService: MatchService);
    getMatchHistoryByAccountId(params: MatchHistoryParams, query: any): Promise<MatchListExternal>;
    getMatchByMatchId(params: MatchParams): Promise<MatchExternal>;
}
