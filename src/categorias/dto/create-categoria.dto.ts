/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;
    
  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  criado_em: Date;
}
