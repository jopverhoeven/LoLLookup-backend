import { Injectable, HttpService } from '@nestjs/common';
import { Api } from 'src/constants/Api';
import { Mastery } from 'src/models/internal/mastery/mastery.internal';
import { MasteryDTO } from 'src/models/dto/mastery/mastery.dto';
import { map } from 'rxjs/operators';
import { ChampionService } from '../champion/champion.service';

@Injectable()
export class MasteryService {
  constructor(
    private httpService: HttpService,
    private championService: ChampionService,
  ) {}

  private _api: Api = new Api();

  async getChampionMasteryById(id: string): Promise<Mastery[]> {
    let masteryDTO: MasteryDTO[];

    await this.httpService
      .get(this._api.getMasteryURL(id))
      .pipe(map(response => (masteryDTO = response.data)))
      .toPromise();

    const mastery: Mastery[] = masteryDTO;

    // for(const item of mastery) {
    //     item.championName = this.championService.getChampionNameById(item.championId);
    // }

    return mastery;
  }
}
