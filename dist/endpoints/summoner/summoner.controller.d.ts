import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
import { MasteryService } from '../mastery/mastery.service';
import { SummonerParams } from './params/summoner.params';
export declare class SummonerController {
    private summonerService;
    private masteryService;
    constructor(summonerService: SummonerService, masteryService: MasteryService);
    getSummonerByName(params: SummonerParams): Promise<SummonerExternal>;
}
