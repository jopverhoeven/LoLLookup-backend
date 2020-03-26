import { IsNotEmpty, IsNumber } from "class-validator";

export class ChampionSubmit {
    @IsNumber()
    @IsNotEmpty()
    championId: number;
}