import { Module, HttpModule } from '@nestjs/common';
import { SummonerController } from './summoner.controller';
import { SummonerService } from './summoner.service';
import { MasteryModule } from '../mastery/mastery.module';

@Module({
    controllers: [SummonerController],
    providers: [SummonerService],
    imports: [HttpModule, MasteryModule],
    exports: [SummonerService],
})
export class SummonerModule {}
