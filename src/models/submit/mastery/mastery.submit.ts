import { IsNotEmpty } from 'class-validator';

export class MasterySubmit {
    @IsNotEmpty()
    summonerId: string;

    @IsNotEmpty()
    region: string;
}