import { SummonerService } from './summoner.service';
import { SummonerExternal } from 'src/models/external/summoner/summoner.external';
import { MasteryService } from '../mastery/mastery.service';
export declare class SummonerController {
    private summonerService;
    private masteryService;
    constructor(summonerService: SummonerService, masteryService: MasteryService);
    getSummonerByName(query: string): Promise<SummonerExternal>;
}
