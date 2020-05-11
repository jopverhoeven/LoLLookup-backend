import { HttpService } from '@nestjs/common';
import { RegionExternal } from 'src/models/external/region/region.external';
export declare class RegionService {
    private httpService;
    constructor(httpService: HttpService);
    getRegions(): Promise<RegionExternal[]>;
}
