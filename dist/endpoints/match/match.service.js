"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const match_external_1 = require("./../../models/external/match/match.external");
const common_1 = require("@nestjs/common");
const Api_1 = require("../../constants/Api");
const matchlist_dto_1 = require("../../models/dto/match/matchlist.dto");
const operators_1 = require("rxjs/operators");
const matchlist_internal_1 = require("../../models/internal/match/matchlist.internal");
const match_dto_1 = require("../../models/dto/match/match.dto");
const queue_enum_1 = require("../../models/enums/queue.enum");
let MatchService = class MatchService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getMatchHistoryByAccountId(accountId, region, start, end) {
        const api = new Api_1.Api();
        api.setRegion(region);
        let matchListDTO;
        await this.httpService
            .get(api.getMatchHistoryURL(accountId, start, end))
            .pipe(operators_1.map(response => (matchListDTO = response.data)))
            .toPromise();
        const matchList = matchListDTO;
        return matchList;
    }
    async getMatchDataByMatchId(matchId, summonerId, region) {
        const api = new Api_1.Api();
        api.setRegion(region);
        let matchDTO;
        await this.httpService
            .get(api.getMatchDataURL(matchId))
            .pipe(operators_1.map(response => (matchDTO = response.data)))
            .toPromise();
        const matchExternal = new match_external_1.MatchExternal();
        matchExternal.gameId = matchDTO.gameId;
        matchExternal.queueType = queue_enum_1.QueueType['QUEUE_' + matchDTO.queueId];
        matchExternal.gameCreation = new Date(matchDTO.gameCreation - matchDTO.gameDuration);
        matchExternal.gameDuration = matchDTO.gameDuration;
        matchExternal.teams = [];
        Object.values(matchDTO.teams).forEach(teamDTO => {
            const team = new match_external_1.MatchTeamExternal();
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
            team.players = [];
            matchDTO.participants.forEach(participantDTO => {
                const player = new match_external_1.MatchTeamPlayerExternal();
                if (participantDTO.teamId == teamDTO.teamId) {
                    player.championId = participantDTO.championId;
                    player.kills = participantDTO.stats.kills;
                    player.deaths = participantDTO.stats.deaths;
                    player.assists = participantDTO.stats.assists;
                    player.items = [];
                    player.items.push(participantDTO.stats.item0, participantDTO.stats.item1, participantDTO.stats.item2, participantDTO.stats.item3, participantDTO.stats.item4, participantDTO.stats.item5, participantDTO.stats.item6);
                    player.summonerSpell1 = participantDTO.spell1Id;
                    player.summonerSpell2 = participantDTO.spell2Id;
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
        let participantId;
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
                matchExternal.itemIds = [];
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
};
MatchService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map