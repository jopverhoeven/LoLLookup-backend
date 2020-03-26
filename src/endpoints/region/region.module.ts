import { Module, HttpModule } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';

@Module({
  controllers: [RegionController],
    providers: [RegionService],
    imports: [HttpModule],
    exports: [RegionService]
})
export class RegionModule {}
