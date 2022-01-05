/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsString, Max } from 'class-validator';

/* eslint-disable @typescript-eslint/ban-types */
export class CreateTweetDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Max(280)
  texto: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  emoji: string;

  @IsNotEmpty()
  @IsDate()
  data_postagem: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  curtidas: number;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
