/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriasDeTweetDto {
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

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
