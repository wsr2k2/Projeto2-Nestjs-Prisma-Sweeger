/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
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
