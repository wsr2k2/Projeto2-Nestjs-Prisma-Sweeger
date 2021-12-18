/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateSeguindoDto } from './create-seguindo.dto';

export class UpdateSeguindoDto extends PartialType(CreateSeguindoDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  idseguindo: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
