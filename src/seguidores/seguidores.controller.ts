/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidorDto } from './dto/create-seguidore.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Seguidores')
@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
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

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}
