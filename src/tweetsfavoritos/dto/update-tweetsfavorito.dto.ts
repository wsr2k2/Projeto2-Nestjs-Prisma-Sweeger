/* eslint-disable prettier/prettier */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsString } from 'class-validator';
import { CreateTweetsfavoritoDto } from './create-tweetsfavorito.dto';

export class UpdateTweetsfavoritoDto extends PartialType(CreateTweetsfavoritoDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  tweetid: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  criado_por: string;
}
