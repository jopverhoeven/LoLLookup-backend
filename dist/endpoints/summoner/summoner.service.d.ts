import { HttpService } from '@nestjs/common';
import { Summoner } from 'src/models/internal/summoner/summoner.internal';
export declare class SummonerService {
    private httpService;
    constructor(httpService: HttpService);
    getSummonerByName(name: string, region: string): Promise<Summoner>;
}
