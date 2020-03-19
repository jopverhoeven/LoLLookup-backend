import { Module, HttpModule } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';

@Module({
  controllers: [MatchController],
  providers: [MatchService],
  imports: [HttpModule],
  exports: [MatchService],
})
export class MatchModule {}
