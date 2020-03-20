"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const champion_module_1 = require("./endpoints/champion/champion.module");
const mastery_module_1 = require("./endpoints/mastery/mastery.module");
const summoner_module_1 = require("./endpoints/summoner/summoner.module");
const ranked_module_1 = require("./endpoints/ranked/ranked.module");
const match_module_1 = require("./endpoints/match/match.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule, mastery_module_1.MasteryModule, summoner_module_1.SummonerModule, champion_module_1.ChampionModule, ranked_module_1.RankedModule, match_module_1.MatchModule],
        controllers: [app_controller_1.AppController,],
        providers: [app_service_1.AppService,],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map