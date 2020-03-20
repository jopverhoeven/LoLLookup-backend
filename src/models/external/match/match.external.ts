import { QueueType } from './../../enums/queue.enum';

export class MatchExternal {
    //Game data
    gameId: number;
    gameDuration: number;
    gameCreation: Date;
    queueType: QueueType;

    //Champion Id
    championId: number;

    //Score
    kills: number;
    deaths: number;
    assists: number;

    //Team
    won: boolean;
}