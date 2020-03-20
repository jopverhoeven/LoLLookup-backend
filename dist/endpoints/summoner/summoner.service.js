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
const common_1 = require("@nestjs/common");
const summoner_internal_1 = require("../../models/internal/summoner/summoner.internal");
const Api_1 = require("../../constants/Api");
const summoner_dto_1 = require("../../models/dto/summoner/summoner.dto");
const operators_1 = require("rxjs/operators");
let SummonerService = class SummonerService {
    constructor(httpService) {
        this.httpService = httpService;
        this._api = new Api_1.Api();
    }
    async getSummonerByName(name) {
        let summonerDTO;
        await this.httpService.get(this._api.getSummonerURL(name))
            .pipe(operators_1.map(response => summonerDTO = response.data))
            .toPromise();
        return summonerDTO;
    }
    getSummonerById(id) {
        return new summoner_internal_1.Summoner();
    }
};
SummonerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], SummonerService);
exports.SummonerService = SummonerService;
//# sourceMappingURL=summoner.service.js.map