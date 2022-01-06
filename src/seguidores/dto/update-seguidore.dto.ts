/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateSeguidorDto } from './create-seguidore.dto';

export class UpdateSeguidorDto extends PartialType(CreateSeguidorDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  criado_em: Date;
}
