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
    spell1: number;
    spell2: number;
    itemIds: number[];
    won: boolean;
    teams: MatchTeamExternal[];
}
export declare class MatchTeamExternal {
    kills: number;
    deaths: number;
    assists: number;
    firstBlood: boolean;
    firstTower: boolean;
    firstInhibitor: boolean;
    firstBaron: boolean;
    firstDragon: boolean;
    firstRiftHerald: boolean;
    towerKills: number;
    inhibitorKills: number;
    baronKills: number;
    dragonKills: number;
    riftHeraldKills: number;
    bans: MatchTeamBansExternal[];
    players: MatchTeamPlayerExternal[];
}
export declare class MatchTeamBansExternal {
    championId: number;
    pickTurn: number;
}
export declare class MatchTeamPlayerExternal {
    participantId: number;
    summonerName: string;
    championId: number;
    summonerSpell1: number;
    summonerSpell2: number;
    items: number[];
    kills: number;
    deaths: number;
    assists: number;
}
