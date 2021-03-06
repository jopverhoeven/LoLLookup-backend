import { IMatchReference } from "src/models/interfaces/match/matchreference.interface";
export declare class MatchReferenceDTO implements IMatchReference {
    lane: string;
    gameId: number;
    champion: number;
    platformId: string;
    season: number;
    queue: number;
    role: string;
    timestamp: number;
}
