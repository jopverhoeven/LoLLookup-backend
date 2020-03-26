import { Injectable, HttpService } from '@nestjs/common';
import { RegionExternal } from 'src/models/external/region/region.external';
import { REGIONS } from 'src/constants/Region';

@Injectable()
export class RegionService {

    constructor(private httpService: HttpService) {}

    async getRegions(): Promise<RegionExternal[]> {
        return REGIONS;
    }
}
