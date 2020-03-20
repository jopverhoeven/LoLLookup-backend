import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';
export declare class ChampionController {
    private championService;
    constructor(championService: ChampionService);
    getChampions(query: string): Promise<ChampionExternal>;
}
