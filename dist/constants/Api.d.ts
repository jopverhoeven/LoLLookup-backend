export declare class Api {
    API_URL: string;
    API_KEY_PARAMETER: string;
    API_SUMMONER_BY_NAME_URL: string;
    API_MASTERY_BY_ID_URL: string;
    API_RANKED_BY_ID_URL: string;
    API_MATCH_HISTORY_URL: string;
    API_MATCH_DATA_URL: string;
    DATA_DRAGON: string;
    DATA_DRAGON_CHAMPION_URL: string;
    setRegion(region: string): void;
    getMatchDataURL(matchId: string): string;
    getSummonerURL(name: string): string;
    getMasteryURL(id: string): string;
    getChampionDataURL(): string;
    getRankedURL(id: string): string;
    getMatchHistoryURL(accountId: string, start?: string, end?: string): string;
}
