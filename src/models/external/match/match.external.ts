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

    //Summoner Spells
    spell1: number;
    spell2: number;

    //ItemIds
    itemIds: number[];

    //Team
    won: boolean;

    //Teams
    teams: MatchTeamExternal[];
}

export class MatchTeamExternal {
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

export class MatchTeamBansExternal {
    championId: number;
    pickTurn: number;
}

export class MatchTeamPlayerExternal {
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