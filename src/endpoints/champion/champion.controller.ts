import { Controller, Get, Query } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';

@Controller('champion')
export class ChampionController {
  constructor(private championService: ChampionService) {}

  @Get()
  async getChampions(@Query() query: string): Promise<ChampionExternal> {
    const externalChampion: ChampionExternal = this.championService.getChampionById(query['id']);
    return externalChampion;
  }
}
