/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSeguidorDto {
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
