/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  bio: string;

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
