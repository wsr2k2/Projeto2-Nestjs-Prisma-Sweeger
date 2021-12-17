import { IsDate, IsInt, IsNotEmpty, IsString, Max } from 'class-validator';

/* eslint-disable @typescript-eslint/ban-types */
export class CreateTweetDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  @Max(280)
  texto: string;

  @IsNotEmpty()
  @IsString()
  emoji: string;

  @IsNotEmpty()
  @IsDate()
  data_postagem: Date;

  @IsNotEmpty()
  @IsInt()
  curtidas: number;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
