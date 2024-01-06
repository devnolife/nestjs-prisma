import { Module } from '@nestjs/common';
import { SuratService } from './surat.service';
import { SuratController } from './surat.controller';

@Module({
  controllers: [SuratController],
  providers: [SuratService]
})
export class SuratModule {}
