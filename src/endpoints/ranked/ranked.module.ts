import { Module, HttpModule } from '@nestjs/common';
import { RankedController } from './ranked.controller';
import { RankedService } from './ranked.service';

@Module({
  controllers: [RankedController],
  providers: [RankedService],
  imports: [HttpModule],
  exports: [RankedService],
})
export class RankedModule {}
