import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChampionModule } from './endpoints/champion/champion.module';
import { MasteryModule } from './endpoints/mastery/mastery.module';
import { SummonerModule } from './endpoints/summoner/summoner.module';

@Module({
  imports: [HttpModule, MasteryModule, SummonerModule, ChampionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  
}
