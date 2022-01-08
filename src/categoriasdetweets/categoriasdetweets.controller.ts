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

 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriasdetweetsService.remove(+id);
  }
}
