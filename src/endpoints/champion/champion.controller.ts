import { Controller, Get, Body, HttpException, HttpStatus } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';
import { ChampionSubmit } from 'src/models/submit/champion/champion.submit';

@Controller('champion')
export class ChampionController {
  constructor(private championService: ChampionService) {}

  @Get('all')
  async getChampionList() {
    return this.championService.getChampionList();
  }

  @Get()
  async getChampions(@Body() championSubmit: ChampionSubmit): Promise<ChampionExternal> {
    const championId = championSubmit.championId;
    const externalChampion: ChampionExternal = this.championService.getChampionById(championId);
    if (externalChampion == null) {
      throw new HttpException('Champion Not Found', HttpStatus.BAD_REQUEST);
    }
    return externalChampion;
  }
}
