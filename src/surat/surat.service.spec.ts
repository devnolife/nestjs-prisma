import { Test, TestingModule } from '@nestjs/testing';
import { SuratService } from './surat.service';

describe('SuratService', () => {
  let service: SuratService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuratService],
    }).compile();

    service = module.get<SuratService>(SuratService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
