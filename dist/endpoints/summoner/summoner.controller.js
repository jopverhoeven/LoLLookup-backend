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
const summoner_service_1 = require("./summoner.service");
const summoner_external_1 = require("../../models/external/summoner/summoner.external");
const summoner_params_1 = require("./params/summoner.params");
const ApiError_1 = require("../../models/error/ApiError");
let SummonerController = class SummonerController {
    constructor(summonerService) {
        this.summonerService = summonerService;
    }
    async getSummonerByName(params) {
        let summonerExternal;
        await this.summonerService
            .getSummonerByName(params.name, params.region)
            .then(data => (summonerExternal = data))
            .catch(error => {
            console.log(error);
            const apiError = new ApiError_1.ApiError();
            apiError.errorCode = 'SUMMONER_NOT_FOUND';
            apiError.errorMessage = 'Could not find summoner with name \'' + params.name + '\'';
            throw new common_1.HttpException(apiError, common_1.HttpStatus.BAD_REQUEST);
        });
        return summonerExternal;
    }
};
__decorate([
    common_1.Get(':name'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [summoner_params_1.SummonerParams]),
    __metadata("design:returntype", Promise)
], SummonerController.prototype, "getSummonerByName", null);
SummonerController = __decorate([
    common_1.Controller(':region/summoner'),
    __metadata("design:paramtypes", [summoner_service_1.SummonerService])
], SummonerController);
exports.SummonerController = SummonerController;
//# sourceMappingURL=summoner.controller.js.map