import { Controller, Get, Query } from '@nestjs/common';
import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
import { MasteryService } from '../mastery/mastery.service';

@Controller('summoner')
export class SummonerController {
  constructor(
    private summonerService: SummonerService,
    private masteryService: MasteryService,
  ) {}

  @Get()
  async getSummonerByName(@Query() query: string): Promise<SummonerExternal> {
    let summonerExternal: SummonerExternal;
    await this.summonerService
      .getSummonerByName(query['name'], query['region'])
      .then(data => (summonerExternal = data));
    await this.masteryService
      .getChampionMasteryById(summonerExternal.id, query['region'])
      .then(data => {
        summonerExternal.mastery = data;
      });
    return summonerExternal;
  }
}
