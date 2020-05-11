import { IPlayer } from 'src/models/interfaces/match/player.interface';
export declare class PlayerDTO implements IPlayer {
    currentPlatformId: string;
    summonerName: string;
    matchHistoryUri: string;
    platformId: string;
    currentAccountId: string;
    profileIcon: number;
    summonerId: string;
    accountId: string;
}
