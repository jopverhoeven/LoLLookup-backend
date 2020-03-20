import { HttpService } from '@nestjs/common';
import { Ranked } from 'src/models/internal/ranked/ranked.internal';
export declare class RankedService {
    private httpService;
    constructor(httpService: HttpService);
    private _api;
    getRankedDataBySummonerId(id: string): Promise<Ranked[]>;
}
