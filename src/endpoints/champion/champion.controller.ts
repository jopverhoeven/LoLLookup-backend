import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';
import { ChampionParams } from './params/champion.params';
import { SummonerSpellParams } from './params/summonerspell.params';
import { SummonerSpellExternal } from 'src/models/external/champion/summonerspell.external';

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

  @Get('summonerspell/:summonerSpellId')
  async getSummonerSpellImageURL(@Param() params: SummonerSpellParams): Promise<SummonerSpellExternal> {
    
    let summonerSpellExternal: SummonerSpellExternal;
    await this.championService.getSummonerSpellById(params.summonerSpellId)
    .then(
      data => summonerSpellExternal = data
    );

    return summonerSpellExternal;
  }
}
