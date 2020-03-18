import { IMiniSeries } from "./miniseries.interface";

export interface IRanked {
    queueType: string;
    summonerName: string;
    hotStreak: boolean;
    miniSeries: IMiniSeries;
    wins: number;
    veteran: boolean;
    losses: number;
    rank: string;
    leagueId: string;
    inactive: boolean;
    freshBlood: boolean;
    tier: string;
    summonerId: string;
    leaguePoints: number;
}