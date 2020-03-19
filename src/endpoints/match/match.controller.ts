import { Controller, Get, Query } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchListExternal } from 'src/models/external/match/matchlist.external';
import { MatchDTO } from 'src/models/dto/match/match.dto';

@Controller('match')
export class MatchController {
    constructor(private matchService: MatchService){}

    @Get()
    async getMatchHistoryByAccountId(@Query() query: string) {
        let matchHistoryExternal: MatchListExternal;

        await this.matchService.getMatchHistoryByAccountId(query['id'], query['start'], query['end']).then(
            data => {
                matchHistoryExternal = data;
                matchHistoryExternal.matches.forEach(element => {
                    element.date = new Date(element.timestamp);
                });
            }
        );

        return matchHistoryExternal;
    }

    @Get('game')
    async getGameByMatchId(@Query() query: string) {
        let matchDTO: MatchDTO;

        await this.matchService.getMatchDataFromMatchId(query['id']).then(
            data => {
                matchDTO = data;
            }
        );

        return matchDTO;
    }
}
