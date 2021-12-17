/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidorDto } from './dto/create-seguidore.dto';
import { UpdateSeguidorDto } from './dto/update-seguidore.dto';

@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  create(@Body() createSeguidorDto: CreateSeguidorDto) {
    return this.seguidoresService.create(createSeguidorDto);
  }

  @Get()
  findAll() {
    return this.seguidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeguidorDto: UpdateSeguidorDto) {
    return this.seguidoresService.update(+id, updateSeguidorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}
