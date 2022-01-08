import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateCategoriaDto } from './create-categoria.dto';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;
}
