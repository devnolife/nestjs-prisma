import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SuratService } from './surat.service';
import { CreateSuratDto } from './dto/create-surat.dto';
import { UpdateSuratDto } from './dto/update-surat.dto';

@Controller('surat')
export class SuratController {
  constructor(private readonly suratService: SuratService) {}

  @Post()
  create(@Body() createSuratDto: CreateSuratDto) {
    return this.suratService.create(createSuratDto);
  }

  @Get()
  findAll() {
    return this.suratService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.suratService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSuratDto: UpdateSuratDto) {
    return this.suratService.update(+id, updateSuratDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.suratService.remove(+id);
  }
}
