import { HttpService, OnModuleInit } from '@nestjs/common';
import { Champion } from 'src/models/internal/champion/champion.internal';
export declare class ChampionService implements OnModuleInit {
    private httpService;
    private _api;
    private championData;
    private championIdToChampion;
    onModuleInit(): Promise<void>;
    constructor(httpService: HttpService);
    sortChampionData(): void;
    getChampionData(): Promise<any>;
    getChampionById(id: number): Champion;
}
