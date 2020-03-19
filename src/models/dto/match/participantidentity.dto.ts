import { IParticipantIdentity } from 'src/models/interfaces/match/participantidentity.interface';

export class ParticipantIdentityDTO implements IParticipantIdentity {
  player: import('../../interfaces/match/player.interface').IPlayer;
  participantId: number;
}
