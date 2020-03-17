import { IMastery } from 'src/models/interfaces/mastery/mastery.interface';

export class MasteryExternal implements IMastery {
  chestGranted: boolean;
  championLevel: number;
  championPoints: number;
  championId: number;
  championPointsUntilNextLevel: number;
  lastPlayTime: number;
  tokensEarned: number;
  championPointsSinceLastLevel: number;
  summonerId: number;
  championName?: string;
}
