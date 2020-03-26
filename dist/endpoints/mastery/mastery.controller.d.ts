import { MasteryExternal } from 'src/models/external/mastery/mastery.external';
import { MasteryService } from './mastery.service';
import { MasteryParams } from './mastery.params';
export declare class MasteryController {
    private masteryService;
    constructor(masteryService: MasteryService);
    getMasteryBySummonerId(params: MasteryParams): Promise<MasteryExternal[]>;
}
