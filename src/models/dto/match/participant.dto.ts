import { IParticipant } from 'src/models/interfaces/match/participant.interface';

export class ParticipantDTO implements IParticipant {
  participantId: number;
  championId: number;
  teamId: number;
}
