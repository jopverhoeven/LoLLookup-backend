import { IsNotEmpty } from "class-validator";

export class MasteryParams {
    @IsNotEmpty()
    summonerId: string;
    
    @IsNotEmpty()
    region: string;
}