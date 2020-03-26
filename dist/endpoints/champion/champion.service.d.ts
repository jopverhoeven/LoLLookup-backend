import { HttpService, OnModuleInit } from '@nestjs/common';
import { Champion } from 'src/models/internal/champion/champion.internal';
export declare class ChampionService implements OnModuleInit {
    private httpService;
    private _api;
    private championData;
    onModuleInit(): Promise<void>;
    constructor(httpService: HttpService);
    sortChampionData(): void;
    private getChampionData;
    getChampionList(): Champion[];
    getChampionById(id: number): Champion;
}
