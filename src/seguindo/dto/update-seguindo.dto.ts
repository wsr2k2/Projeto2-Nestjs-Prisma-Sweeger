/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateSeguindoDto } from './create-seguindo.dto';

export class UpdateSeguindoDto extends PartialType(CreateSeguindoDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
