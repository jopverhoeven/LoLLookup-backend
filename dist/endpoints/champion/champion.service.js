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
const map_1 = require("rxjs/internal/operators/map");
const champion_internal_1 = require("../../models/internal/champion/champion.internal");
const Champion_1 = require("../../constants/Champion");
let ChampionService = class ChampionService {
    constructor(httpService) {
        this.httpService = httpService;
        this._api = new Api_1.Api();
    }
    async onModuleInit() {
        await this.getChampionData().then(data => {
            this.championData = data;
            this.sortChampionData();
        });
        console.log('Done sorting champs');
    }
    sortChampionData() {
        Object.keys(this.championData['data']).forEach(championKey => {
            const championSpecific = this.championData['data'][championKey];
            const champion = new champion_internal_1.Champion();
            champion.id = championSpecific['key'];
            champion.name = championSpecific['name'];
            champion.devname = championSpecific['id'];
            champion.tags = [];
            championSpecific['tags'].forEach(element => {
                champion.tags.push(element);
            });
            Champion_1.CHAMPION_LIST.push(champion);
        });
    }
    async getChampionData() {
        let championObject;
        await this.httpService
            .get(this._api.getChampionDataURL())
            .pipe(map_1.map(response => {
            championObject = response.data;
        }))
            .toPromise();
        return championObject;
    }
    getChampionList() {
        return Champion_1.CHAMPION_LIST;
    }
    getChampionById(id) {
        for (let index = 0; index < Champion_1.CHAMPION_LIST.length; index++) {
            const element = Champion_1.CHAMPION_LIST[index];
            if (element.id == id) {
                return element;
            }
        }
        return null;
    }
};
ChampionService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], ChampionService);
exports.ChampionService = ChampionService;
//# sourceMappingURL=champion.service.js.map