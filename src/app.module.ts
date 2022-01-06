/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { SeguidoresModule } from './seguidores/seguidores.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { TweetsModule } from './tweets/tweets.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { TweetsfavoritosModule } from './tweetsfavoritos/tweetsfavoritos.module';
import { CategoriasdetweetsModule } from './categoriasdetweets/categoriasdetweets.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [UsuariosModule, SeguidoresModule, SeguindoModule, TweetsModule, PrismaModule, AuthModule, TweetsfavoritosModule, CategoriasdetweetsModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
