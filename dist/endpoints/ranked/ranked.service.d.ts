import { HttpService } from '@nestjs/common';
import { Ranked } from 'src/models/internal/ranked/ranked.internal';
export declare class RankedService {
    private httpService;
    constructor(httpService: HttpService);
    getRankedDataBySummonerId(id: string, region: string): Promise<Ranked[]>;
}
