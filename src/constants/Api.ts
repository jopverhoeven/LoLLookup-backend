import { API_KEY } from "./Keys";

export const API_URL = 'https://euw1.api.riotgames.com/lol/';
export const API_KEY_PARAMETER = '?api_key=';

export const DATA_DRAGON = 'http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/'

//Summoner
export const API_SUMMONER_BY_NAME_URL = 'summoner/v4/summoners/by-name/';

//Mastery
export const API_MASTERY_BY_ID_URL = 'champion-mastery/v4/champion-masteries/by-summoner/'

//Ranked
export const API_RANKED_BY_ID_URL = 'league/v4/entries/by-summoner/';

//Match History
export const API_MATCH_HISTORY_URL = 'match/v4/matchlists/by-account/'

//Match Data
export const API_MATCH_DATA_URL = 'match/v4/matches/'

//Champion
export const DATA_DRAGON_CHAMPION_URL = DATA_DRAGON + 'champion.json';

export class Api {
    getMatchDataURL(matchId: string): string {
        return API_URL + API_MATCH_DATA_URL + matchId + API_KEY_PARAMETER + API_KEY;
    }
    getSummonerURL(name: string) {
        return API_URL + API_SUMMONER_BY_NAME_URL + name + API_KEY_PARAMETER + API_KEY;
    }
    
    getMasteryURL(id: string) {
        return API_URL + API_MASTERY_BY_ID_URL + id + API_KEY_PARAMETER + API_KEY;
    }

    getChampionDataURL() {
        return DATA_DRAGON_CHAMPION_URL;
    }

    getRankedURL(id: string) {
        return API_URL + API_RANKED_BY_ID_URL + id + API_KEY_PARAMETER + API_KEY;
    }

    getMatchHistoryURL(accountId: string, start?: string, end?: string) {
        if (start === undefined) start = "";
        if (end === undefined) end = "";

        const url = API_URL + API_MATCH_HISTORY_URL + accountId + API_KEY_PARAMETER + API_KEY + '&beginIndex=' + start + '&endIndex=' + end;
        return url;
    }
}