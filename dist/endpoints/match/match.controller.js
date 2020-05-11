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
const matchhistory_params_1 = require("./params/matchhistory.params");
const match_params_1 = require("./params/match.params");
let MatchController = class MatchController {
    constructor(matchService) {
        this.matchService = matchService;
    }
    async getMatchHistoryByAccountId(params, query) {
        let matchHistoryExternal;
        await this.matchService.getMatchHistoryByAccountId(params.accountId, params.region, query['start'], query['end']).then(data => {
            matchHistoryExternal = data;
            matchHistoryExternal.matches.forEach(element => {
                element.date = new Date(element.timestamp);
            });
        });
        return matchHistoryExternal;
    }
    async getMatchByMatchId(params) {
        let matchExternal;
        await this.matchService.getMatchDataByMatchId(params.matchId, params.summonerId, params.region).then(data => {
            matchExternal = data;
        });
        return matchExternal;
    }
};
__decorate([
    common_1.Get(':accountId'),
    __param(0, common_1.Param()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [matchhistory_params_1.MatchHistoryParams, Object]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getMatchHistoryByAccountId", null);
__decorate([
    common_1.Get(':matchId/:summonerId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [match_params_1.MatchParams]),
    __metadata("design:returntype", Promise)
], MatchController.prototype, "getMatchByMatchId", null);
MatchController = __decorate([
    common_1.Controller(':region/match'),
    __metadata("design:paramtypes", [match_service_1.MatchService])
], MatchController);
exports.MatchController = MatchController;
//# sourceMappingURL=match.controller.js.map