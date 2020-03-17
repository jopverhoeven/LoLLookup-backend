import { Test, TestingModule } from '@nestjs/testing';
import { MasteryController } from './mastery.controller';

describe('Mastery Controller', () => {
  let controller: MasteryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasteryController],
    }).compile();

    controller = module.get<MasteryController>(MasteryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
