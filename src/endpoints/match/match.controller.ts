import { MatchExternal } from './../../models/external/match/match.external';
import { Controller, Get, Query, Param } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchListExternal } from 'src/models/external/match/matchlist.external';
import { MatchHistoryParams } from './params/matchhistory.params';
import { MatchParams } from './params/match.params';

@Controller(':region/match')
export class MatchController {
    constructor(private matchService: MatchService){}

    @Get(':accountId')
    async getMatchHistoryByAccountId(@Param() params: MatchHistoryParams, @Query() query) {
        let matchHistoryExternal: MatchListExternal;

        await this.matchService.getMatchHistoryByAccountId(params.accountId, params.region, query['start'], query['end']).then(
            data => {
                matchHistoryExternal = data;
                matchHistoryExternal.matches.forEach(element => {
                    element.date = new Date(element.timestamp);
                });
            }
        );

        return matchHistoryExternal;
    }

    @Get(':matchId/:summonerId')
    async getMatchByMatchId(@Param() params: MatchParams) {
        let matchExternal: MatchExternal;

        await this.matchService.getMatchDataByMatchId(params.matchId, params.summonerId, params.region).then(
            data => {
                matchExternal = data;
            }
        );

        return matchExternal;
    }
}
