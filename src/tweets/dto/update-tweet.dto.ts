/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { CreateTweetDto } from './create-tweet.dto';

export class UpdateTweetDto extends PartialType(CreateTweetDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  texto: string;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
