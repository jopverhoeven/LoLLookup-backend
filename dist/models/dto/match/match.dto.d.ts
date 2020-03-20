import { IMatch } from "src/models/interfaces/match/match.interface";
export declare class MatchDTO implements IMatch {
    seasonId: number;
    queueId: number;
    gameId: number;
    participantIdentities: import("../../interfaces/match/participantidentity.interface").IParticipantIdentity[];
    gameVersion: string;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    teams: import("../../interfaces/match/teamstats.interface").ITeamStats[];
    participants: import("../../interfaces/match/participant.interface").IParticipant[];
    gameDuration: number;
    gameCreation: number;
}
