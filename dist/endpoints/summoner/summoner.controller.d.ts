import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
import { SummonerParams } from './params/summoner.params';
export declare class SummonerController {
    private summonerService;
    constructor(summonerService: SummonerService);
    getSummonerByName(params: SummonerParams): Promise<SummonerExternal>;
}
