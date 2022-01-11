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
import { TweetsfavoritosService } from './tweetsfavoritos.service';
import { CreateTweetsfavoritoDto } from './dto/create-tweetsfavorito.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tweets Favoritos')
@Controller('tweetsfavoritos')
export class TweetsfavoritosController {
  constructor(
    private readonly tweetsfavoritosService: TweetsfavoritosService,
  ) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createTweetsfavoritoDto: CreateTweetsfavoritoDto) {
    return this.tweetsfavoritosService.create(createTweetsfavoritoDto);
  }

  @Get()
  findAll() {
    console.log('chegou ate aqui')
    return this.tweetsfavoritosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsfavoritosService.findOne(+id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.tweetsfavoritosService.remove(+id);
  }
}
