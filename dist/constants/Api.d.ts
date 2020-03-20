export declare const API_URL = "https://euw1.api.riotgames.com/lol/";
export declare const API_KEY_PARAMETER = "?api_key=";
export declare const DATA_DRAGON = "http://ddragon.leagueoflegends.com/cdn/10.5.1/data/en_US/";
export declare const API_SUMMONER_BY_NAME_URL = "summoner/v4/summoners/by-name/";
export declare const API_MASTERY_BY_ID_URL = "champion-mastery/v4/champion-masteries/by-summoner/";
export declare const API_RANKED_BY_ID_URL = "league/v4/entries/by-summoner/";
export declare const API_MATCH_HISTORY_URL = "match/v4/matchlists/by-account/";
export declare const API_MATCH_DATA_URL = "match/v4/matches/";
export declare const DATA_DRAGON_CHAMPION_URL: string;
export declare class Api {
    getMatchDataURL(matchId: string): string;
    getSummonerURL(name: string): string;
    getMasteryURL(id: string): string;
    getChampionDataURL(): string;
    getRankedURL(id: string): string;
    getMatchHistoryURL(accountId: string, start?: string, end?: string): string;
}
