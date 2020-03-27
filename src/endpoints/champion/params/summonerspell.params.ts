import { IsNotEmpty, IsNumberString } from "class-validator";

export class SummonerSpellParams {
    @IsNotEmpty()
    @IsNumberString()
    summonerSpellId: number;
}