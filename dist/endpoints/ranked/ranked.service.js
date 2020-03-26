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
const ranked_dto_1 = require("../../models/dto/ranked/ranked.dto");
const Api_1 = require("../../constants/Api");
const map_1 = require("rxjs/internal/operators/map");
const ranked_internal_1 = require("../../models/internal/ranked/ranked.internal");
const ranked_enum_1 = require("../../models/enums/ranked.enum");
let RankedService = class RankedService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async getRankedDataBySummonerId(id, region) {
        const api = new Api_1.Api();
        api.setRegion(region);
        let rankedDTO;
        await this.httpService
            .get(api.getRankedURL(id))
            .pipe(map_1.map(response => (rankedDTO = response.data)))
            .toPromise();
        const ranked = rankedDTO;
        ranked.forEach(element => {
            element.queueType = ranked_enum_1.RankedEnum[element.queueType];
            element.tier = element.tier.charAt(0).toUpperCase() + element.tier.substring(1).toLowerCase();
        });
        return ranked;
    }
};
RankedService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], RankedService);
exports.RankedService = RankedService;
//# sourceMappingURL=ranked.service.js.map