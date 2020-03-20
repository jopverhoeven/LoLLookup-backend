import { ISummoner } from 'src/models/interfaces/summoner/summoner.interface';
import { MasteryExternal } from '../mastery/mastery.external';
export declare class SummonerExternal implements ISummoner {
    profileIconId: number;
    name: string;
    puuid: string;
    summonerLevel: number;
    revisionDate: number;
    id: string;
    accountId: string;
    mastery?: MasteryExternal[];
}
