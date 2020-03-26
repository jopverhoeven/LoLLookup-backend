import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';
import { ChampionParams } from './champion.params';
export declare class ChampionController {
    private championService;
    constructor(championService: ChampionService);
    getChampionList(): Promise<import("../../models/internal/champion/champion.internal").Champion[]>;
    getChampions(params: ChampionParams): Promise<ChampionExternal>;
}
