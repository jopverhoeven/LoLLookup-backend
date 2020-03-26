import { IsNotEmpty } from "class-validator";

export class RankedParams {
    @IsNotEmpty()
    summonerId: string;

    @IsNotEmpty()
    region: string;
}