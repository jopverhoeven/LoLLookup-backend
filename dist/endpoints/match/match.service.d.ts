import { MatchExternal } from './../../models/external/match/match.external';
import { HttpService } from '@nestjs/common';
import { MatchList } from 'src/models/internal/match/matchlist.internal';
export declare class MatchService {
    private httpService;
    constructor(httpService: HttpService);
    getMatchHistoryByAccountId(accountId: string, region: string, start?: string, end?: string): Promise<MatchList>;
    getMatchDataByMatchId(matchId: string, summonerId: string, region: string): Promise<MatchExternal>;
}
