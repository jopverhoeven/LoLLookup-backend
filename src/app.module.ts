import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionModule } from './endpoints/champion/champion.module';
import { MasteryModule } from './endpoints/mastery/mastery.module';
import { SummonerModule } from './endpoints/summoner/summoner.module';
import { RankedModule } from './endpoints/ranked/ranked.module';

@Module({
  imports: [HttpModule, MasteryModule, SummonerModule, ChampionModule, RankedModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {
  
}
