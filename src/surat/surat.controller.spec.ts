import { Test, TestingModule } from '@nestjs/testing';
import { SuratController } from './surat.controller';
import { SuratService } from './surat.service';

describe('SuratController', () => {
  let controller: SuratController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuratController],
      providers: [SuratService],
    }).compile();

    controller = module.get<SuratController>(SuratController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
