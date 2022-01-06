/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsInt, IsNotEmpty } from "class-validator";

export class CreateCategoriasdetweetDto {
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
  @IsDate()
  criado_em: Date;
   
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  criado_por: Date;
}
