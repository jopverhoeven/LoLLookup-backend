import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';
import { ChampionParams } from './champion.params';

@Controller('champion')
export class ChampionController {
  constructor(private championService: ChampionService) {}

  @Get('all')
  async getChampionList() {
    return this.championService.getChampionList();
  }

  @Get(':championId')
  async getChampions(@Param() params: ChampionParams): Promise<ChampionExternal> {
    const externalChampion: ChampionExternal = this.championService.getChampionById(params.championId);
    if (externalChampion == null) {
      throw new HttpException('Champion Not Found', HttpStatus.BAD_REQUEST);
    }
    return externalChampion;
  }
}
