/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateSeguidorDto } from './create-seguidore.dto';

export class UpdateSeguidorDto extends PartialType(CreateSeguidorDto) {}
