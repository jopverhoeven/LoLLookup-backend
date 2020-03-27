import { IParticipant } from 'src/models/interfaces/match/participant.interface';
export declare class ParticipantDTO implements IParticipant {
    spell1Id: number;
    spell2Id: number;
    stats: import("../../interfaces/match/participant.interface").IParticipantStats;
    participantId: number;
    championId: number;
    teamId: number;
}
