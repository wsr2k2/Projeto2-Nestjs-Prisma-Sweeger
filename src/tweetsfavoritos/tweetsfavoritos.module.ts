import { Module } from '@nestjs/common';
import { TweetsfavoritosService } from './tweetsfavoritos.service';
import { TweetsfavoritosController } from './tweetsfavoritos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TweetsfavoritosController],
  providers: [TweetsfavoritosService],
})
export class TweetsfavoritosModule {}
