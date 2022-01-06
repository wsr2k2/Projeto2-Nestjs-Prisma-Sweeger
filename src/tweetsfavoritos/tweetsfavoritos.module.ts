import { Module } from '@nestjs/common';
import { TweetsfavoritosService } from './tweetsfavoritos.service';
import { TweetsfavoritosController } from './tweetsfavoritos.controller';

@Module({
  controllers: [TweetsfavoritosController],
  providers: [TweetsfavoritosService]
})
export class TweetsfavoritosModule {}
