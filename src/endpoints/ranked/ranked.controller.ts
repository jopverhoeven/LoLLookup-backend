import { Controller, Get, Param } from '@nestjs/common';
import { RankedService } from './ranked.service';
import { RankedExternal } from 'src/models/external/ranked/ranked.external';
import { RankedParams } from './params/ranked.params';

@Controller(':region/ranked')
export class RankedController {
    constructor(private rankedService: RankedService){}

    @Get(':summonerId')
    async getRankedDataBySummonerId(@Param() params: RankedParams): Promise<RankedExternal[]> {
        let rankedExternal: RankedExternal[];

        await this.rankedService.getRankedDataBySummonerId(params.summonerId, params.region)
        .then(
            data => rankedExternal = data
        );

        return rankedExternal;
    }
    
}
