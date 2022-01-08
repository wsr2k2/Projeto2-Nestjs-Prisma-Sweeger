/* eslint-disable prettier/prettier */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

import { CreateCategoriasdetweetDto } from './create-categoriasdetweet.dto';

export class UpdateCategoriasdetweetDto extends PartialType(CreateCategoriasdetweetDto) {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  tweetid: number;
    
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  categoriaid: number;
   
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  criado_por: string;
}
