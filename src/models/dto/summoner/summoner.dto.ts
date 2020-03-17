import { ISummoner } from '../../interfaces/summoner/summoner.interface';

export class SummonerDTO implements ISummoner {
  profileIconId: number;
  name: string;
  puuid: string;
  summonerLevel: number;
  revisionDate: number;
  id: string;
  accountId: string;
}
