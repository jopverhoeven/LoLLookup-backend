import { QueueType } from './../../enums/queue.enum';
export declare class MatchExternal {
    gameId: number;
    gameDuration: number;
    gameCreation: Date;
    queueType: QueueType;
    championId: number;
    kills: number;
    deaths: number;
    assists: number;
    won: boolean;
}
