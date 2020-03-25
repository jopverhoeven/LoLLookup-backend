import { Controller, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { MasterySubmit } from 'src/models/submit/mastery/mastery.submit';
import { MasteryExternal } from 'src/models/external/mastery/mastery.external';
import { MasteryService } from './mastery.service';

@Controller('mastery')
export class MasteryController {
    
    constructor(
        private masteryService: MasteryService
    ) {}

    @Get()
    async getMasteryBySummonerId(@Body() body: MasterySubmit): Promise<MasteryExternal[]> {
        let masteryExternal: MasteryExternal[];

        await this.masteryService.getChampionMasteryById(body.summonerId, body.region)
        .then(
            data => masteryExternal = data
        ).catch(
            () => {
                throw new HttpException('Something went wrong in getting mastery of ' + body.summonerId + ' from ' + body.region + '.', HttpStatus.BAD_REQUEST);
            }
        );

        return masteryExternal;
    }
}
