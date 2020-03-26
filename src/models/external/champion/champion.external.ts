import { IChampion } from "src/models/interfaces/champion/champion.interface";

export class ChampionExternal implements IChampion {
    tags: string[];
    id: number;
    name: string;
    devname: string;
}