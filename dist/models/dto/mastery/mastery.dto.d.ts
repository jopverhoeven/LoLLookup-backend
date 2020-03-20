import { IMastery } from 'src/models/interfaces/mastery/mastery.interface';
export declare class MasteryDTO implements IMastery {
    chestGranted: boolean;
    championLevel: number;
    championPoints: number;
    championId: number;
    championPointsUntilNextLevel: number;
    lastPlayTime: number;
    tokensEarned: number;
    championPointsSinceLastLevel: number;
    summonerId: number;
}
