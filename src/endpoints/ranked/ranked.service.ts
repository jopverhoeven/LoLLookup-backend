import { Injectable, HttpService } from '@nestjs/common';
import { RankedDTO } from 'src/models/dto/ranked/ranked.dto';
import { Api } from 'src/constants/Api';
import { map } from 'rxjs/internal/operators/map';
import { Ranked } from 'src/models/internal/ranked/ranked.internal';
import { RankedEnum } from 'src/models/enums/ranked.enum';

@Injectable()
export class RankedService {
  constructor(private httpService: HttpService) {}

  async getRankedDataBySummonerId(id: string, region: string): Promise<Ranked[]> {
    const api: Api = new Api();
    api.setRegion(region);

    let rankedDTO: RankedDTO[];
    await this.httpService
      .get(api.getRankedURL(id))
      .pipe(map(response => (rankedDTO = response.data)))
      .toPromise();

    const ranked: Ranked[] = rankedDTO;
    ranked.forEach(element => {
        element.queueType = RankedEnum[element.queueType];
        element.tier = element.tier.charAt(0).toUpperCase() + element.tier.substring(1).toLowerCase();
    });
    return ranked;
  }
}
