import { IMastery } from 'src/models/interfaces/mastery/mastery.interface';
import { Champion } from '../champion/champion.internal';

export class Mastery implements IMastery {
  chestGranted: boolean;
  champion?: Champion;
  championLevel: number;
  championPoints: number;
  championId: number;
  championPointsUntilNextLevel: number;
  lastPlayTime: number;
  tokensEarned: number;
  championPointsSinceLastLevel: number;
  summonerId: number;
}
