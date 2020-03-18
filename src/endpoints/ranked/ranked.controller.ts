import { Controller, Get, Query } from '@nestjs/common';
import { RankedService } from './ranked.service';
import { RankedExternal } from 'src/models/external/ranked/ranked.external';

@Controller('ranked')
export class RankedController {
    constructor(private rankedService: RankedService){}

    @Get()
    async getRankedDataBySummonerId(@Query() query: string): Promise<RankedExternal[]> {
        let rankedExternal: RankedExternal[];

        await this.rankedService.getRankedDataBySummonerId(query['id'])
        .then(
            data => rankedExternal = data
        );

        return rankedExternal;
    }
    
}
