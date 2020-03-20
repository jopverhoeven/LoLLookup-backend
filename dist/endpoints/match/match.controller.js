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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const match_service_1 = require("./match.service");
const matchlist_external_1 = require("../../models/external/match/matchlist.external");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    async getMatchHistoryByAccountId(query) {
        let matchHistoryExternal;
        await this.matchService.getMatchHistoryByAccountId(query['id'], query['start'], query['end']).then(data => {
            matchHistoryExternal = data;
            matchHistoryExternal.matches.forEach(element => {
                element.date = new Date(element.timestamp);
            });
        });
        return matchHistoryExternal;
    }
    async getGameByMatchId(query) {
        let matchExternal;
        await this.matchService.getMatchDataFromMatchId(query['gameId'], query['summonerId']).then(data => {
            matchExternal = data;
        });
        return matchExternal;
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getMatchHistoryByAccountId", null);
__decorate([
    common_1.Get('game'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getGameByMatchId", null);
MatchController = __decorate([
    common_1.Controller('match'),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map