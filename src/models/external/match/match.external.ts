import { QueueType } from './../../enums/queue.enum';

export class MatchExternal {
    gameId: number;
    gameDuration: number;
    gameCreation: Date;

    queueType: QueueType;
    championId: number;
}