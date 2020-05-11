"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mastery_controller_1 = require("./mastery.controller");
const mastery_service_1 = require("./mastery.service");
const champion_module_1 = require("../champion/champion.module");
let MasteryModule = class MasteryModule {
};
MasteryModule = __decorate([
    common_1.Module({
        controllers: [mastery_controller_1.MasteryController],
        providers: [mastery_service_1.MasteryService],
        imports: [common_1.HttpModule, champion_module_1.ChampionModule],
        exports: [mastery_service_1.MasteryService],
    })
], MasteryModule);
exports.MasteryModule = MasteryModule;
//# sourceMappingURL=mastery.module.js.map