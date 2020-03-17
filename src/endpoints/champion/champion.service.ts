import { Injectable, HttpService, OnModuleInit } from '@nestjs/common';
import { Api } from 'src/constants/Api';
import { map } from 'rxjs/internal/operators/map';
import { Champion } from 'src/models/internal/champion/champion.internal';

@Injectable()
export class ChampionService implements OnModuleInit {
  private _api: Api = new Api();
  private championData;
  private championIdToChampion: Map<number, Champion>;

  async onModuleInit() {
    this.championIdToChampion = new Map();
    await this.getChampionData().then(data => {
      this.championData = data;
      this.sortChampionData();
    });
    console.log('Done sorting champs');
  }

  constructor(private httpService: HttpService) {}

  sortChampionData() {
    Object.keys(this.championData['data']).forEach(championKey => {
      const championSpecific = this.championData['data'][championKey];
      const championSpecificKey = championSpecific['key'];

      const champion: Champion = new Champion();
      champion.name = championSpecific['name'];
      champion.devname = championSpecific['id'];

      this.championIdToChampion.set(championSpecificKey, champion);
    });
  }

  async getChampionData() {
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

  getChampionById(id: number): Champion {
    return this.championIdToChampion.get(id);
  }
}
