import { MatchExternal } from './../../models/external/match/match.external';
import { HttpService } from '@nestjs/common';
import { MatchList } from 'src/models/internal/match/matchlist.internal';
export declare class MatchService {
    private httpService;
    constructor(httpService: HttpService);
    private _api;
    getMatchHistoryByAccountId(accountId: string, start?: string, end?: string): Promise<MatchList>;
    getMatchDataFromMatchId(matchId: string, summonerId: string): Promise<MatchExternal>;
}
