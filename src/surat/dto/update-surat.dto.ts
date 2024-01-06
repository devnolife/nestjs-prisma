import { PartialType } from '@nestjs/mapped-types';
import { CreateSuratDto } from './create-surat.dto';

export class UpdateSuratDto extends PartialType(CreateSuratDto) {}
