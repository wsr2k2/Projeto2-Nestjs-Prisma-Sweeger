/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  id: number;

  @ApiProperty({
    description: 'Primeiro realizar o cadastro de usuário e após utilizar o mesmo nome cadastrado para gerar o Token de login'
  })
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
