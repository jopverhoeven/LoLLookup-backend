import { IsNotEmpty } from "class-validator";

export class MatchParams {
    @IsNotEmpty()
    region: string;
    
    @IsNotEmpty()
    matchId: string;

    @IsNotEmpty()
    summonerId: string;
}