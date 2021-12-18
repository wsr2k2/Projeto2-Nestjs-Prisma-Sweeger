/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  imagem: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bio: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nascimento: string;

  @IsNotEmpty()
  @IsDate()
  criado_em: Date;

  @IsNotEmpty()
  @IsDate()
  modificado_em: Date;
}
