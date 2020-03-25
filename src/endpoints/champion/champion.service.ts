import { Injectable, HttpService, OnModuleInit } from '@nestjs/common';
import { Api } from 'src/constants/Api';
import { map } from 'rxjs/internal/operators/map';
import { Champion } from 'src/models/internal/champion/champion.internal';
import { CHAMPION_LIST } from 'src/constants/Champion';

@Injectable()
export class ChampionService implements OnModuleInit {
  private _api: Api = new Api();
  private championData;

  async onModuleInit() {
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
}
