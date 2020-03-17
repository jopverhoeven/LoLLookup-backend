import { IMastery } from 'src/models/interfaces/mastery/mastery.interface';

export class Mastery implements IMastery {
  chestGranted: boolean;
  championName?: string;
  championLevel: number;
  championPoints: number;
  championId: number;
  championPointsUntilNextLevel: number;
  lastPlayTime: number;
  tokensEarned: number;
  championPointsSinceLastLevel: number;
  summonerId: number;
}
