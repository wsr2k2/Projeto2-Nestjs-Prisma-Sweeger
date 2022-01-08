/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriasdetweetDto {
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
