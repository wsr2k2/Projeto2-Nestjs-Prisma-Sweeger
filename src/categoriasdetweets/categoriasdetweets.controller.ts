/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoriasdetweetsService } from './categoriasdetweets.service';
import { CreateCategoriasDeTweetDto } from './dto/create-categoriasdetweet.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categoria de Tweets')
@Controller('categoriasdetweets')
export class CreateCategoriasDeTweetController {
  constructor(
    private readonly categoriasdetweetsService: CategoriasdetweetsService,
  ) {}
  
  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createCategoriasdetweetDto: CreateCategoriasDeTweetDto) {
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
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.categoriasdetweetsService.remove(+id);
  }
}
