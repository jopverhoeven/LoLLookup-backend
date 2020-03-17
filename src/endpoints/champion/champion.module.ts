import { Module, HttpModule } from '@nestjs/common';
import { ChampionController } from './champion.controller';
import { ChampionService } from './champion.service';

@Module({
    controllers: [ChampionController],
    providers: [ChampionService],
    imports: [HttpModule],
    exports: [ChampionService],
})
export class ChampionModule {}
