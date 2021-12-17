/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSeguindoDto {
  id: number;

  @IsNotEmpty()
  @IsInt()
  idseguindo: number;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
