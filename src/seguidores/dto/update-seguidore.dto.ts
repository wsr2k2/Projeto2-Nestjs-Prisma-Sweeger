/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateSeguidorDto } from './create-seguidore.dto';

export class UpdateSeguidorDto extends PartialType(CreateSeguidorDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  idseguidor: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
