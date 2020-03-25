import { MatchExternal } from './../../models/external/match/match.external';
import { Injectable, HttpService } from '@nestjs/common';
import { Api } from 'src/constants/Api';
import { MatchListDTO } from 'src/models/dto/match/matchlist.dto';
import { map } from 'rxjs/operators';
import { MatchList } from 'src/models/internal/match/matchlist.internal';
import { MatchDTO } from 'src/models/dto/match/match.dto';
import { QueueType } from 'src/models/enums/queue.enum';

@Injectable()
export class MatchService {
  constructor(private httpService: HttpService) {}

  async getMatchHistoryByAccountId(
    accountId: string,
    region: string,
    start?: string,
    end?: string,
  ) {
    const api: Api = new Api();
    api.setRegion(region);

    let matchListDTO: MatchListDTO;
    await this.httpService
      .get(api.getMatchHistoryURL(accountId, start, end))
      .pipe(map(response => (matchListDTO = response.data)))
      .toPromise();

    const matchList: MatchList = matchListDTO;

    return matchList;
  }

  async getMatchDataFromMatchId(matchId: string, summonerId: string, region: string) {
    const api: Api = new Api();
    api.setRegion(region);

    let matchDTO: MatchDTO;
    await this.httpService
      .get(api.getMatchDataURL(matchId))
      .pipe(map(response => (matchDTO = response.data)))
      .toPromise();

    const matchExternal: MatchExternal = new MatchExternal();
    matchExternal.gameId = matchDTO.gameId;
    matchExternal.queueType = QueueType['QUEUE_' + matchDTO.queueId];
    matchExternal.gameCreation = new Date(
      matchDTO.gameCreation - matchDTO.gameDuration,
    );
    matchExternal.gameDuration = matchDTO.gameDuration;

    let participantId: number;
    Object.values(matchDTO.participantIdentities).forEach(element => {
      if (element.player.summonerId == summonerId) {
        participantId = element.participantId;
      }
    });

    Object.values(matchDTO.participants).forEach(element => {
      if (element.participantId == participantId) {
        matchExternal.championId = element.championId;
        matchExternal.kills = element['stats']['kills'];
        matchExternal.deaths = element['stats']['deaths'];
        matchExternal.assists = element['stats']['assists'];
        const teamId = element['teamId'];
        matchDTO.teams.forEach(element => {
          if (element.teamId == teamId) {
            matchExternal.won = element.win === 'Win' ? true : false;
          }
        });
      }
    });

    return matchExternal;
  }
}
