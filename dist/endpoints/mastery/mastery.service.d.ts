import { HttpService } from '@nestjs/common';
import { Mastery } from 'src/models/internal/mastery/mastery.internal';
import { ChampionService } from '../champion/champion.service';
export declare class MasteryService {
    private httpService;
    private championService;
    constructor(httpService: HttpService, championService: ChampionService);
    getChampionMasteryById(id: string, region: string): Promise<Mastery[]>;
}
