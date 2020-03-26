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
const mastery_external_1 = require("../../models/external/mastery/mastery.external");
const mastery_service_1 = require("./mastery.service");
const mastery_params_1 = require("./mastery.params");
let MasteryController = class MasteryController {
    constructor(masteryService) {
        this.masteryService = masteryService;
    }
    async getMasteryBySummonerId(params) {
        let masteryExternal;
        await this.masteryService.getChampionMasteryById(params.summonerId, params.region)
            .then(data => masteryExternal = data).catch(error => {
            console.log(error);
            throw new common_1.HttpException('Something went wrong in getting mastery of ' + params.summonerId + ' from ' + params.region + '.', common_1.HttpStatus.BAD_REQUEST);
        });
        return masteryExternal;
    }
};
__decorate([
    common_1.Get(':summonerId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mastery_params_1.MasteryParams]),
    __metadata("design:returntype", Promise)
], MasteryController.prototype, "getMasteryBySummonerId", null);
MasteryController = __decorate([
    common_1.Controller(':region/mastery'),
    __metadata("design:paramtypes", [mastery_service_1.MasteryService])
], MasteryController);
exports.MasteryController = MasteryController;
//# sourceMappingURL=mastery.controller.js.map