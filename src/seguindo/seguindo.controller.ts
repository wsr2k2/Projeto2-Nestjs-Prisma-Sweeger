/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Seguindo')
@Controller('seguindo')
export class SeguindoController {
  constructor(private readonly seguindoService: SeguindoService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.create(createSeguindoDto);
  }

  @Get()
  findAll() {
    return this.seguindoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.seguindoService.remove(+id);
  }
}
