import { ISummoner } from 'src/models/interfaces/summoner/summoner.interface';

export class SummonerExternal implements ISummoner {
  profileIconId: number;
  name: string;
  puuid: string;
  summonerLevel: number;
  revisionDate: number;
  id: string;
  accountId: string;
}
