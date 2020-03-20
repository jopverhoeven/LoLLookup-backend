import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
export declare class SummonerController {
    private summonerService;
    constructor(summonerService: SummonerService);
    getSummonerByName(query: string): Promise<SummonerExternal>;
}
