/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TweetFavorito } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTweetsfavoritoDto } from './dto/create-tweetsfavorito.dto';

@Injectable()
export class TweetsfavoritosService {
  constructor(private prisma: PrismaService) {}

  async create(createTweetsfavoritoDto: CreateTweetsfavoritoDto): Promise<TweetFavorito> {
    return await this.prisma.tweetFavorito.create({ data: { ...createTweetsfavoritoDto },
    });
  }

  async findAll(): Promise<TweetFavorito[]> {
    return await this.prisma.tweetFavorito.findMany();
    
  }

  async findOne(id: number): Promise<TweetFavorito> {
    return await this.prisma.tweetFavorito.findUnique({ where: { id }});
  }

  async remove(id: number): Promise<TweetFavorito> {
    return await this.prisma.tweetFavorito.delete({ where: { id }})
  }
}
