/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriasdetweetsService } from './categoriasdetweets.service';
import { CreateCategoriasdetweetDto } from './dto/create-categoriasdetweet.dto';
import { UpdateCategoriasdetweetDto } from './dto/update-categoriasdetweet.dto';

@Controller('categoriasdetweets')
export class CategoriasdetweetsController {
  constructor(private readonly categoriasdetweetsService: CategoriasdetweetsService) {}

  @Post()
  create(@Body() createCategoriasdetweetDto: CreateCategoriasdetweetDto) {
    return this.categoriasdetweetsService.create(createCategoriasdetweetDto);
  }

  @Get()
  findAll() {
    return this.categoriasdetweetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriasdetweetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoriasdetweetDto: UpdateCategoriasdetweetDto) {
    return this.categoriasdetweetsService.update(+id, updateCategoriasdetweetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasdetweetsService.remove(+id);
  }
}
