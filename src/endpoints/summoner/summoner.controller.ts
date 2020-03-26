import { Controller, Get, Param } from '@nestjs/common';
import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
import { MasteryService } from '../mastery/mastery.service';
import { SummonerParams } from './params/summoner.params';

@Controller(':region/summoner')
export class SummonerController {
  constructor(
    private summonerService: SummonerService,
    private masteryService: MasteryService,
  ) {}

  @Get(':name')
  async getSummonerByName(@Param() params: SummonerParams): Promise<SummonerExternal> {
    let summonerExternal: SummonerExternal;
    await this.summonerService
      .getSummonerByName(params.name, params.region)
      .then(data => (summonerExternal = data));
    // await this.masteryService
    //   .getChampionMasteryById(summonerExternal.id, params.region)
    //   .then(data => {
    //     summonerExternal.mastery = data;
    //   });
    return summonerExternal;
  }
}
