import { IChampion } from "src/models/interfaces/champion/champion.interface";

export class ChampionExternal implements IChampion {
    name: string;
    devname: string;
}