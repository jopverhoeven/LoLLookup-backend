import { MatchExternal, MatchTeamExternal, MatchTeamPlayerExternal } from './../../models/external/match/match.external';
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

  async getMatchDataByMatchId(matchId: string, summonerId: string, region: string) {
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

    matchExternal.teams = [];
    Object.values(matchDTO.teams).forEach(teamDTO => {
      const team: MatchTeamExternal = new MatchTeamExternal();
      team.bans = teamDTO.bans;
      team.baronKills = teamDTO.baronKills;
      team.dragonKills = teamDTO.dragonKills;
      team.inhibitorKills = teamDTO.inhibitorKills;
      team.towerKills = teamDTO.towerKills;
      team.riftHeraldKills = teamDTO.riftHeraldKills;
      team.firstBaron = teamDTO.firstBaron;
      team.firstBlood = teamDTO.firstBlood;
      team.firstDragon = teamDTO.firstDragon;
      team.firstInhibitor = teamDTO.firstInhibitor;
      team.firstRiftHerald = teamDTO.firstRiftHerald;
      team.firstTower = teamDTO.firstTower;

      //Team players
      team.players = [];
      matchDTO.participants.forEach(participantDTO => {
        const player: MatchTeamPlayerExternal = new MatchTeamPlayerExternal();
        if (participantDTO.teamId == teamDTO.teamId) {
          //champion id
          player.championId = participantDTO.championId;
          
          //KDA
          player.kills = participantDTO.stats.kills;
          player.deaths = participantDTO.stats.deaths;
          player.assists = participantDTO.stats.assists;

          //Items
          player.items = [];
          player.items.push(participantDTO.stats.item0, participantDTO.stats.item1, participantDTO.stats.item2, participantDTO.stats.item3, participantDTO.stats.item4, participantDTO.stats.item5, participantDTO.stats.item6)

          //Summoner spells
          player.summonerSpell1 = participantDTO.spell1Id;
          player.summonerSpell2 = participantDTO.spell2Id;

          //Summoner name for participant
          Object.values(matchDTO.participantIdentities).forEach(element => {
            if (element.participantId == participantDTO.participantId) {
              player.summonerName = element.player.summonerName;
            }
          });

          team.players.push(player);
        }
      });

      matchExternal.teams.push(team);
    });

    let participantId: number;
    Object.values(matchDTO.participantIdentities).forEach(element => {
      if (element.player.summonerId == summonerId) {
        participantId = element.participantId;
      }
    });

    Object.values(matchDTO.participants).forEach(element => {
      if (element.participantId == participantId) {
        matchExternal.championId = element.championId;
        matchExternal.kills = element.stats.kills;
        matchExternal.deaths = element.stats.deaths;
        matchExternal.assists = element.stats.assists;
        matchExternal.spell1 = element.spell1Id;
        matchExternal.spell2 = element.spell2Id;

        matchExternal.itemIds = []
        matchExternal.itemIds.push(element.stats.item0, element.stats.item1, element.stats.item2, element.stats.item3, element.stats.item4, element.stats.item5, element.stats.item6);

        const teamId = element.teamId;
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
