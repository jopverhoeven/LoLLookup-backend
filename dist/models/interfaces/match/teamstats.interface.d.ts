import { ITeamBans } from "./teambans.interface";
export interface ITeamStats {
    firstDragon: boolean;
    firstInhibitor: boolean;
    bans: ITeamBans[];
    baronKills: number;
    firstRiftHerald: number;
    firstBaron: boolean;
    riftHeraldKills: number;
    firstBlood: boolean;
    teamId: number;
    firstTower: boolean;
    vilemawKills: number;
    inhibitorKills: number;
    towerKills: number;
    dominionVictoryScore: number;
    win: string;
    dragonKills: number;
}
