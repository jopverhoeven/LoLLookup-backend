import { API_KEY } from './Keys';
import { REGIONS } from './Region';

export class Api {
  API_URL = 'https://{region}.api.riotgames.com/lol/';
  API_KEY_PARAMETER = '?api_key=';

  //Summoner
  API_SUMMONER_BY_NAME_URL = 'summoner/v4/summoners/by-name/';

  //Mastery
  API_MASTERY_BY_ID_URL = 'champion-mastery/v4/champion-masteries/by-summoner/';

  //Ranked
  API_RANKED_BY_ID_URL = 'league/v4/entries/by-summoner/';

  //Match History
  API_MATCH_HISTORY_URL = 'match/v4/matchlists/by-account/';

  //Match Data
  API_MATCH_DATA_URL = 'match/v4/matches/';

  DATA_DRAGON = 'http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/';

  //Champion
  DATA_DRAGON_CHAMPION_URL = this.DATA_DRAGON + 'champion.json';

  setRegion(region: string) {
    let riotRegionName: string;
    for (let index = 0; index < REGIONS.length; index++) {
      const element = REGIONS[index];
      if (element.internalname === region) {
        riotRegionName = element.riotname;
        break;
      }
    }
    this.API_URL = this.API_URL.replace('{region}', riotRegionName);
  }

  getMatchDataURL(matchId: string): string {
    return (
      this.API_URL +
      this.API_MATCH_DATA_URL +
      matchId +
      this.API_KEY_PARAMETER +
      API_KEY
    );
  }
  getSummonerURL(name: string) {
    return (
      this.API_URL +
      this.API_SUMMONER_BY_NAME_URL +
      name +
      this.API_KEY_PARAMETER +
      API_KEY
    );
  }

  getMasteryURL(id: string) {
    return (
      this.API_URL +
      this.API_MASTERY_BY_ID_URL +
      id +
      this.API_KEY_PARAMETER +
      API_KEY
    );
  }

  getChampionDataURL() {
    return this.DATA_DRAGON_CHAMPION_URL;
  }

  getRankedURL(id: string) {
    return (
      this.API_URL +
      this.API_RANKED_BY_ID_URL +
      id +
      this.API_KEY_PARAMETER +
      API_KEY
    );
  }

  getMatchHistoryURL(accountId: string, start?: string, end?: string) {
    const url =
      this.API_URL +
      this.API_MATCH_HISTORY_URL +
      accountId +
      this.API_KEY_PARAMETER +
      API_KEY +
      '&beginIndex=' +
      start +
      '&endIndex=' +
      end;
    return url;
  }
}
