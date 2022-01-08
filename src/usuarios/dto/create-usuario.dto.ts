/* eslint-disable prettier/prettier */


import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  id: number;
  
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sobrenome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  senha: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  sobre: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  nascimento: string;

}
