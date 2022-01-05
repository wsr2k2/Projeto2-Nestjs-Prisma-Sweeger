/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSeguindoDto {
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
