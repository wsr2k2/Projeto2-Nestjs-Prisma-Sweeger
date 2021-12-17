/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateSeguidorDto {
  id: number;

  @IsNotEmpty()
  @IsInt()
  idseguidor: number;

  @IsNotEmpty()
  @IsInt()
  usuarioid: number;
}
