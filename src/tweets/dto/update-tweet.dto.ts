/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsInt, IsNotEmpty, IsString, Max } from 'class-validator';
import { CreateTweetDto } from './create-tweet.dto';

export class UpdateTweetDto extends PartialType(CreateTweetDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Max(280)
  texto: string;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
