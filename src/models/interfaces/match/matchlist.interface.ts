import { IMatchReference } from "./matchreference.interface";

export interface IMatchList {
    matches: IMatchReference[];
    totalGames: number;
    startIndex: number;
    endIndex: number;
}