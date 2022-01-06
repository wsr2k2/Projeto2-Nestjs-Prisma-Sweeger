import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TweetsfavoritosService } from './tweetsfavoritos.service';
import { CreateTweetsfavoritoDto } from './dto/create-tweetsfavorito.dto';
import { UpdateTweetsfavoritoDto } from './dto/update-tweetsfavorito.dto';

@Controller('tweetsfavoritos')
export class TweetsfavoritosController {
  constructor(private readonly tweetsfavoritosService: TweetsfavoritosService) {}

  @Post()
  create(@Body() createTweetsfavoritoDto: CreateTweetsfavoritoDto) {
    return this.tweetsfavoritosService.create(createTweetsfavoritoDto);
  }

  @Get()
  findAll() {
    return this.tweetsfavoritosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tweetsfavoritosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTweetsfavoritoDto: UpdateTweetsfavoritoDto) {
    return this.tweetsfavoritosService.update(+id, updateTweetsfavoritoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tweetsfavoritosService.remove(+id);
  }
}
