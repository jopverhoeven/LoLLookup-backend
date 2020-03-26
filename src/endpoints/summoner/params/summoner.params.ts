import { IsNotEmpty } from "class-validator";

export class SummonerParams {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    region: string;
}