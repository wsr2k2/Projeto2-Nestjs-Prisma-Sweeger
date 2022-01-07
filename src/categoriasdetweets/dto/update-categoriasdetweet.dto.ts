/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateCategoriasdetweetDto } from './create-categoriasdetweet.dto';

export class UpdateCategoriasdetweetDto extends PartialType(CreateCategoriasdetweetDto) {}
