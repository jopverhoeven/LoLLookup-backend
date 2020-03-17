import { Injectable, HttpService } from '@nestjs/common';
import { Summoner } from 'src/models/internal/summoner/summoner.internal';
import { Api } from 'src/constants/Api';
import { SummonerDTO } from 'src/models/dto/summoner/summoner.dto';
import { map } from 'rxjs/operators';


@Injectable()
export class SummonerService {
    constructor(private httpService: HttpService) {}
    
    private _api: Api = new Api();

    async getSummonerByName(name: string): Promise<Summoner> {
        let summonerDTO: SummonerDTO;
        await this.httpService.get(this._api.getSummonerURL(name))
        .pipe(
            map(response => summonerDTO = response.data)
        )
        .toPromise();
        
        return summonerDTO;

    }

    getSummonerById(id: string): Summoner {
        return new Summoner();
    }
}
