import { RankedService } from './ranked.service';
import { RankedExternal } from 'src/models/external/ranked/ranked.external';
export declare class RankedController {
    private rankedService;
    constructor(rankedService: RankedService);
    getRankedDataBySummonerId(query: string): Promise<RankedExternal[]>;
}
