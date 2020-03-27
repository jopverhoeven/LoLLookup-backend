import { IsNotEmpty, IsNumberString } from "class-validator";

export class ChampionParams {
    @IsNumberString()
    @IsNotEmpty()
    championId: number;
}