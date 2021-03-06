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
const champion_service_1 = require("./champion.service");
const champion_external_1 = require("../../models/external/champion/champion.external");
const champion_params_1 = require("./params/champion.params");
const summonerspell_params_1 = require("./params/summonerspell.params");
const summonerspell_external_1 = require("../../models/external/champion/summonerspell.external");
let ChampionController = class ChampionController {
    constructor(championService) {
        this.championService = championService;
    }
    async getChampionList() {
        return this.championService.getChampionList();
    }
    async getChampions(params) {
        const externalChampion = this.championService.getChampionById(params.championId);
        if (externalChampion == null) {
            throw new common_1.HttpException('Champion Not Found', common_1.HttpStatus.BAD_REQUEST);
        }
        return externalChampion;
    }
    async getSummonerSpellImageURL(params) {
        let summonerSpellExternal;
        await this.championService.getSummonerSpellById(params.summonerSpellId)
            .then(data => summonerSpellExternal = data);
        return summonerSpellExternal;
    }
};
__decorate([
    common_1.Get('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ChampionController.prototype, "getChampionList", null);
__decorate([
    common_1.Get(':championId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [champion_params_1.ChampionParams]),
    __metadata("design:returntype", Promise)
], ChampionController.prototype, "getChampions", null);
__decorate([
    common_1.Get('summonerspell/:summonerSpellId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [summonerspell_params_1.SummonerSpellParams]),
    __metadata("design:returntype", Promise)
], ChampionController.prototype, "getSummonerSpellImageURL", null);
ChampionController = __decorate([
    common_1.Controller('champion'),
    __metadata("design:paramtypes", [champion_service_1.ChampionService])
], ChampionController);
exports.ChampionController = ChampionController;
//# sourceMappingURL=champion.controller.js.map