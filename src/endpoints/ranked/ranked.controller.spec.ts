import { Test, TestingModule } from '@nestjs/testing';
import { RankedController } from './ranked.controller';

describe('Ranked Controller', () => {
  let controller: RankedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RankedController],
    }).compile();

    controller = module.get<RankedController>(RankedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
