import { Test, TestingModule } from '@nestjs/testing';
import { ChampionController } from './champion.controller';

describe('Champion Controller', () => {
  let controller: ChampionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChampionController],
    }).compile();

    controller = module.get<ChampionController>(ChampionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
