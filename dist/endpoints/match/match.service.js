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
        let participantId;
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
};
MatchService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], MatchService);
exports.MatchService = MatchService;
//# sourceMappingURL=match.service.js.map