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
const Api_1 = require("../../constants/Api");
const mastery_internal_1 = require("../../models/internal/mastery/mastery.internal");
const mastery_dto_1 = require("../../models/dto/mastery/mastery.dto");
const operators_1 = require("rxjs/operators");
const champion_service_1 = require("../champion/champion.service");
let MasteryService = class MasteryService {
    constructor(httpService, championService) {
        this.httpService = httpService;
        this.championService = championService;
        this._api = new Api_1.Api();
    }
    async getChampionMasteryById(id) {
        let masteryDTO;
        await this.httpService
            .get(this._api.getMasteryURL(id))
            .pipe(operators_1.map(response => (masteryDTO = response.data)))
            .toPromise();
        const mastery = masteryDTO;
        return mastery;
    }
};
MasteryService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService,
        champion_service_1.ChampionService])
], MasteryService);
exports.MasteryService = MasteryService;
//# sourceMappingURL=mastery.service.js.map