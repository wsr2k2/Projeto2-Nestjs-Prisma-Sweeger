/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

/* eslint-disable @typescript-eslint/ban-types */
export class CreateTweetDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  texto: string;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
