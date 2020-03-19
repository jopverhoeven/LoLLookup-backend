import { Injectable, HttpService } from '@nestjs/common';
import { Api } from 'src/constants/Api';
import { MatchListDTO } from 'src/models/dto/match/matchlist.dto';
import { map } from 'rxjs/operators';
import { MatchList } from 'src/models/internal/match/matchlist.internal';
import { MatchDTO } from 'src/models/dto/match/match.dto';

@Injectable()
export class MatchService {
  constructor(private httpService: HttpService) {}
  private _api: Api = new Api();

  async getMatchHistoryByAccountId(accountId: string, start?: string, end?: string) {
    let matchListDTO: MatchListDTO;
    await this.httpService
      .get(this._api.getMatchHistoryURL(accountId, start, end))
      .pipe(map(response => (matchListDTO = response.data)))
      .toPromise();
    
    const matchList: MatchList = matchListDTO;

    return matchList;
  }

  async getMatchDataFromMatchId(matchId: string) {
      let matchDTO: MatchDTO;
      await this.httpService
      .get(this._api.getMatchDataURL(matchId))
      .pipe(map(response => (matchDTO = response.data)))
      .toPromise();

      return matchDTO;
  }
}
