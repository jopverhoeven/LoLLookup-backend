import { ITeamStats } from "./teamstats.interface";
import { IParticipantIdentity } from "./participantidentity.interface";
import { IParticipant } from "./participant.interface";
export interface IMatch {
    seasonId: number;
    queueId: number;
    gameId: number;
    participantIdentities: IParticipantIdentity[];
    gameVersion: string;
    platformId: string;
    gameMode: string;
    mapId: number;
    gameType: string;
    teams: ITeamStats[];
    participants: IParticipant[];
    gameDuration: number;
    gameCreation: number;
}
