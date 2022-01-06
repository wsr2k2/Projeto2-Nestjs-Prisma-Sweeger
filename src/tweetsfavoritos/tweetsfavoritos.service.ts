import { Injectable } from '@nestjs/common';
import { CreateTweetsfavoritoDto } from './dto/create-tweetsfavorito.dto';
import { UpdateTweetsfavoritoDto } from './dto/update-tweetsfavorito.dto';

@Injectable()
export class TweetsfavoritosService {
  create(createTweetsfavoritoDto: CreateTweetsfavoritoDto) {
    return 'This action adds a new tweetsfavorito';
  }

  findAll() {
    return `This action returns all tweetsfavoritos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tweetsfavorito`;
  }

  update(id: number, updateTweetsfavoritoDto: UpdateTweetsfavoritoDto) {
    return `This action updates a #${id} tweetsfavorito`;
  }

  remove(id: number) {
    return `This action removes a #${id} tweetsfavorito`;
  }
}
