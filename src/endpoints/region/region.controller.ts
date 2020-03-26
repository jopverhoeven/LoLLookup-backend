import { Controller, Get } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionExternal } from 'src/models/external/region/region.external';

@Controller('region')
export class RegionController {
  constructor(private regionService: RegionService) {}

  @Get()
  async getRegions(): Promise<RegionExternal[]> {
    let regionExternal: RegionExternal[];

    await this.regionService.getRegions().then(data => (regionExternal = data));

    return regionExternal;
  }
}
