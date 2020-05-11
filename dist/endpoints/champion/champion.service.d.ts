import { HttpService, OnModuleInit } from '@nestjs/common';
import { Champion } from 'src/models/internal/champion/champion.internal';
import { SummonerSpellExternal } from 'src/models/external/champion/summonerspell.external';
export declare class ChampionService implements OnModuleInit {
    private httpService;
    private _api;
    private championData;
    private summonerSpellData;
    onModuleInit(): Promise<void>;
    constructor(httpService: HttpService);
    sortChampionData(): void;
    private getChampionData;
    private getSummonerSpellData;
    getChampionList(): Champion[];
    getChampionById(id: number): Champion;
    getSummonerSpellById(summonerSpellId: number): Promise<SummonerSpellExternal>;
}
