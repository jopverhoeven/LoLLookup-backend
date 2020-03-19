import { IMatchList } from "src/models/interfaces/match/matchlist.interface";

export class MatchListDTO implements IMatchList{
    matches: import("../../interfaces/match/matchreference.interface").IMatchReference[];
    totalGames: number;
    startIndex: number;
    endIndex: number;

}