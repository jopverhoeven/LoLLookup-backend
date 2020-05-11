import { RankedService } from './ranked.service';
import { RankedExternal } from 'src/models/external/ranked/ranked.external';
import { RankedParams } from './params/ranked.params';
export declare class RankedController {
    private rankedService;
    constructor(rankedService: RankedService);
    getRankedDataBySummonerId(params: RankedParams): Promise<RankedExternal[]>;
}
