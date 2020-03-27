import { ChampionService } from './champion.service';
import { ChampionExternal } from 'src/models/external/champion/champion.external';
import { ChampionParams } from './params/champion.params';
import { SummonerSpellParams } from './params/summonerspell.params';
import { SummonerSpellExternal } from 'src/models/external/champion/summonerspell.external';
export declare class ChampionController {
    private championService;
    constructor(championService: ChampionService);
    getChampionList(): Promise<import("../../models/internal/champion/champion.internal").Champion[]>;
    getChampions(params: ChampionParams): Promise<ChampionExternal>;
    getSummonerSpellImageURL(params: SummonerSpellParams): Promise<SummonerSpellExternal>;
}
