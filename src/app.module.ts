import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SuratModule } from './surat/surat.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [SuratModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
