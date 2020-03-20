import { HttpService } from '@nestjs/common';
import { Summoner } from 'src/models/internal/summoner/summoner.internal';
export declare class SummonerService {
    private httpService;
    constructor(httpService: HttpService);
    private _api;
    getSummonerByName(name: string): Promise<Summoner>;
    getSummonerById(id: string): Summoner;
}
