import { MiniSeriesDTO } from "./miniseries.dto";
import { IRanked } from "src/models/interfaces/ranked/ranked.interface";

export class RankedDTO implements IRanked{
    queueType: string;
    summonerName: string;
    hotStreak: boolean;
    miniSeries: MiniSeriesDTO;
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