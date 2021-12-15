import { IsInt, IsNotEmpty, IsString, Max } from 'class-validator';

/* eslint-disable @typescript-eslint/ban-types */
export class CreateTweetDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  @Max(280)
  texto: String;

  @IsNotEmpty()
  @IsString()
  emoji: String;

  @IsNotEmpty()
  @IsString()
  data_postagem: String;

  @IsNotEmpty()
  @IsInt()
  curtidas: number;
}
