import { Injectable, HttpService, OnModuleInit } from '@nestjs/common';
import { Api } from 'src/constants/Api';
import { map } from 'rxjs/internal/operators/map';
import { Champion } from 'src/models/internal/champion/champion.internal';
import { CHAMPION_LIST } from 'src/constants/Champion';
import { SummonerSpellExternal } from 'src/models/external/champion/summonerspell.external';

@Injectable()
export class ChampionService implements OnModuleInit {
  private _api: Api = new Api();
  private championData;
  private summonerSpellData;

  async onModuleInit() {
    await this.getChampionData().then(data => {
      this.championData = data;
      this.sortChampionData();
      console.log('ChampionData retrieved');
    });

    await this.getSummonerSpellData().then(data => {
      this.summonerSpellData = data;
      console.log('SummonerSpellData retrieved');
    });
  }

  constructor(private httpService: HttpService) {}

  sortChampionData() {
    Object.keys(this.championData['data']).forEach(championKey => {
      const championSpecific = this.championData['data'][championKey];

      const champion: Champion = new Champion();
      champion.id = championSpecific['key'];
      champion.name = championSpecific['name'];
      champion.devname = championSpecific['id'];

      champion.tags = [];
      championSpecific['tags'].forEach(element => {
        champion.tags.push(element);
      });

      CHAMPION_LIST.push(champion);
    });
  }

  private async getChampionData() {
    let championObject;

    await this.httpService
      .get(this._api.getChampionDataURL())
      .pipe(
        map(response => {
          championObject = response.data;
        }),
      )
      .toPromise();

    return championObject;
  }

  private async getSummonerSpellData() {
    let summonerSpellData;

    await this.httpService
      .get(
        'http://ddragon.leagueoflegends.com/cdn/10.6.1/data/en_US/summoner.json',
      )
      .pipe(
        map(response => {
          summonerSpellData = response.data;
        }),
      )
      .toPromise();

    return summonerSpellData;
  }

  getChampionList(): Champion[] {
    return CHAMPION_LIST;
  }

  getChampionById(id: number): Champion {
    for (let index = 0; index < CHAMPION_LIST.length; index++) {
      const element = CHAMPION_LIST[index];
      if (element.id == id) {
        return element;
      }
    }

    return null;
  }

  async getSummonerSpellById(
    summonerSpellId: number,
  ): Promise<SummonerSpellExternal> {
    const summonerSpellExternal = new SummonerSpellExternal();
        
    Object.keys(this.summonerSpellData['data']).forEach(element => {
      if (this.summonerSpellData['data'][element]['key'] == summonerSpellId) {
        summonerSpellExternal.summonerSpellURL = this.summonerSpellData['data'][element]['image']['full'];
        summonerSpellExternal.key = this.summonerSpellData['data'][element]['key'];
        summonerSpellExternal.name = this.summonerSpellData['data'][element]['name'];
      }
    });

    return summonerSpellExternal;
  }
}
