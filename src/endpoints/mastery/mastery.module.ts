import { Module, HttpModule } from '@nestjs/common';
import { MasteryController } from './mastery.controller';
import { MasteryService } from './mastery.service';
import { ChampionModule } from '../champion/champion.module';

@Module({
    controllers: [MasteryController],
    providers: [MasteryService],
    imports: [HttpModule, ChampionModule],
    exports: [MasteryService],
})
export class MasteryModule {}
