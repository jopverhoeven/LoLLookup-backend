import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { MasteryExternal } from 'src/models/external/mastery/mastery.external';
import { MasteryService } from './mastery.service';
import { MasteryParams } from './mastery.params';

@Controller(':region/mastery')
export class MasteryController {
    
    constructor(
        private masteryService: MasteryService
    ) {}

    @Get(':summonerId')
    async getMasteryBySummonerId(@Param() params: MasteryParams): Promise<MasteryExternal[]> {
        let masteryExternal: MasteryExternal[];

        await this.masteryService.getChampionMasteryById(params.summonerId, params.region)
        .then(
            data => masteryExternal = data
        ).catch(
            error => {
                console.log(error);
                throw new HttpException('Something went wrong in getting mastery of ' + params.summonerId + ' from ' + params.region + '.', HttpStatus.BAD_REQUEST);
            }
        );

        return masteryExternal;
    }
}
