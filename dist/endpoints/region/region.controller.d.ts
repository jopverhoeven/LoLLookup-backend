import { RegionService } from './region.service';
import { RegionExternal } from 'src/models/external/region/region.external';
export declare class RegionController {
    private regionService;
    constructor(regionService: RegionService);
    getRegions(): Promise<RegionExternal[]>;
}
