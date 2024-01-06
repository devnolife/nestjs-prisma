import { Injectable } from '@nestjs/common';
import { CreateSuratDto } from './dto/create-surat.dto';
import { UpdateSuratDto } from './dto/update-surat.dto';

@Injectable()
export class SuratService {
  create(createSuratDto: CreateSuratDto) {
    return 'This action adds a new surat';
  }

  findAll() {
    return `This action returns all surat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surat`;
  }

  update(id: number, updateSuratDto: UpdateSuratDto) {
    return `This action updates a #${id} surat`;
  }

  remove(id: number) {
    return `This action removes a #${id} surat`;
  }
}
